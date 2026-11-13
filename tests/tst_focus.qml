import QtQuick
import QtQuick.Window
import QtQuick.Controls as Controls
import QtTest

TestCase {
    id: testCase
    name: "WallpaperFocus"
    width: 1200
    height: 700
    visible: true
    when: windowShown

    Component {
        id: fixtureComponent
        Item {
            width: testCase.width
            height: testCase.height
            property alias wallpaper: loader.item
            property alias loader: loader
            property alias focusOwner: focusOwner
            Loader {
                id: loader
                anchors.fill: parent
                source: "../plugin/contents/ui/main.qml"
            }
            Controls.Button {
                id: focusOwner
                z: 2000
                x: 500; y: 10
                text: "Desktop control"
            }
        }
    }
    property var fixture
    property var wallpaper
    property var canvas
    Component {
        id: otherWindowComponent
        Window {
            id: otherWindow
            width: 200
            height: 100
            transientParent: null
            property int presses: 0
            Item {
                anchors.fill: parent
                focus: true
                Keys.onPressed: event => {
                    ++otherWindow.presses
                    event.accepted = true
                }
            }
        }
    }
    function init() {
        fixture = createTemporaryObject(fixtureComponent, testCase)
        verify(fixture !== null)
        tryCompare(fixture.loader, "status", Loader.Ready)
        wallpaper = fixture.wallpaper
        canvas = findChild(wallpaper, "imageCanvas")
        verify(canvas !== null)
        wallpaper.interactive = true
        fixture.focusOwner.forceActiveFocus()
    }
    function firstHotspot() {
        for (const child of canvas.children) {
            if (child.entry && child.close) return child
        }
        fail("No hotspot found")
    }
    function test_hover_and_pin_preserve_focus() {
        const hotspot = firstHotspot()
        mouseMove(hotspot, 5, 5)
        verify(hotspot.shown)
        verify(fixture.focusOwner.activeFocus)
        mouseClick(hotspot, 5, 5)
        verify(hotspot.pinned)
        verify(fixture.focusOwner.activeFocus)
        keyClick(Qt.Key_Escape)
        verify(!hotspot.shown)
    }
    function test_toggle_keeps_keyboard_focus() {
        const toggle = findChild(wallpaper, "interactiveToggle")
        toggle.forceActiveFocus()
        keyClick(Qt.Key_Space)
        compare(wallpaper.interactive, false)
        keyClick(Qt.Key_Space)
        compare(wallpaper.interactive, true)
        wait(0) // Flush the deferred focus changes used by the old implementation.
        verify(toggle.activeFocus)
        keyClick(Qt.Key_Right)
        compare(wallpaper.page, 1)
    }
    function test_page_button_keeps_focus_after_transition() {
        const button = findChild(wallpaper, "pageButton")
        button.forceActiveFocus()
        keyClick(Qt.Key_Space)
        compare(wallpaper.page, 1)
        tryCompare(canvas, "visible", true)
        verify(button.activeFocus)
        keyClick(Qt.Key_Left)
        compare(wallpaper.page, 0)
    }
    function test_escape_and_navigation_during_transition() {
        const hotspot = firstHotspot()
        canvas.toggleHotspot(hotspot)
        wallpaper.showPage(1)
        verify(!canvas.visible)
        verify(wallpaper.relatedEntry !== null)
        keyClick(Qt.Key_Escape)
        compare(wallpaper.relatedEntry, null)
        keyClick(Qt.Key_Left)
        compare(wallpaper.page, 0)
        keyClick(Qt.Key_Right)
        compare(wallpaper.page, 1)
        tryCompare(canvas, "visible", true)
        verify(fixture.focusOwner.activeFocus)
    }
    function test_scroll_view_focus_keeps_shortcuts() {
        const hotspot = firstHotspot()
        canvas.toggleHotspot(hotspot)
        const panel = findChild(canvas, "fixedInfoPanel")
        const scroll = findChild(panel, "infoScroll")
        scroll.forceActiveFocus()
        verify(scroll.activeFocus)
        tryVerify(() => scroll.contentItem.contentHeight > scroll.contentItem.height)
        mouseWheel(scroll, scroll.width / 2, scroll.height / 2, 0, -120)
        tryVerify(() => scroll.contentItem.contentY > 0)
        keyClick(Qt.Key_Right)
        compare(wallpaper.page, 1)
        keyClick(Qt.Key_Escape)
        compare(wallpaper.relatedEntry, null)
        tryCompare(canvas, "visible", true)
        verify(!panel.visible)
        keyClick(Qt.Key_Left)
        compare(wallpaper.page, 0)
    }
    function test_shortcuts_stay_in_the_desktop_window() {
        const hotspot = firstHotspot()
        canvas.toggleHotspot(hotspot)
        const desktopWindow = fixture.Window.window
        const otherWindow = createTemporaryObject(otherWindowComponent, null)
        verify(otherWindow !== null)
        try {
            otherWindow.show()
            otherWindow.requestActivate()
            tryCompare(otherWindow, "active", true)
            keyClick(Qt.Key_Escape)
            keyClick(Qt.Key_Right)
            keyClick(Qt.Key_Left)
            compare(otherWindow.presses, 3)
            compare(wallpaper.page, 0)
            verify(hotspot.pinned && hotspot.shown)
        } finally {
            otherWindow.close()
            desktopWindow.requestActivate()
        }
        tryCompare(desktopWindow, "active", true)
        keyClick(Qt.Key_Escape)
        verify(!hotspot.shown)
        keyClick(Qt.Key_Right)
        compare(wallpaper.page, 1)
    }
}
