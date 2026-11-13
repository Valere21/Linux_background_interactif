import QtQuick
import QtTest
import "../plugin/contents/ui" as Plugin
import "../plugin/contents/ui/CommandEntries.js" as Commands
import "../plugin/contents/ui/PopupPlacement.js" as Placement
import "../plugin/contents/ui/EntryColor.js" as Colors
import "../plugin/contents/ui/Entries.js" as Hierarchy
import "../plugin/contents/ui/Links.js" as Links

TestCase {
    name: "WallpaperInteractions"
    width: 1200
    height: 700
    visible: true
    when: windowShown

    Plugin.InteractiveCanvas {
        id: canvas
        anchors.fill: parent
        visible: true
        onRelatedSelectionCleared: relatedEntry = null
        entries: [
            {title: "left", description: "A", examples: ["exemple"], note: "Note", x: 100, y: 150, w: 200, h: 100},
            {title: "right", description: "B", examples: ["exemple"], note: "Note", x: 1350, y: 150, w: 200, h: 100}
        ]
    }
    Plugin.SlideDeck { id: slideDeck; width: 800; height: 450; animationsEnabled: false; visible: false }
    SignalSpy { id: pageSpy; target: canvas; signalName: "pageRequested" }
    Item {
        id: otherFocus
        property int presses: 0
        Keys.onRightPressed: event => { ++presses; event.accepted = true }
    }
    function getHotspot(title) {
        for (let i = 0; i < canvas.children.length; ++i) {
            const item = canvas.children[i]
            if (item.entry && item.entry.title === title && item.close) return item
        }
        return null
    }
    function init() { canvas.closeAll(); canvas.fixedPanel = false; canvas.currentPage = 0; pageSpy.clear() }
    function test_entries() {
        const items = Commands.entriesFor()
        let modules = 0, commands = 0
        for (const e of items) {
            verify(e.title && e.description && e.examples.length && e.note)
            for (const example of e.examples)
                verify(/\s:\s\S/.test(example), "Chaque exemple doit expliquer son résultat : " + example)
            verify(e.x >= 0 && e.y >= 0 && e.w > 0 && e.h > 0)
            verify(e.x + e.w <= 1671 && e.y + e.h <= 941)
            if (e.kind === "module") {
                verify(e.scenario && e.scenario.length > 0)
                verify(!/^(Exemple|Situation)\s*:/i.test(e.description))
                ++modules
            } else ++commands
        }
        compare(modules, 16)
        compare(commands, 54)
        verify(items.some(e => e.title === "whereis"))
    }
    function test_hierarchy_and_links() {
        compare(Hierarchy.entries.length, 24)
        const dirs = Hierarchy.entries.filter(e => e.kind === "directory")
        compare(dirs.length, 19)
        verify(dirs.some(e => e.title === "/srv"))
        for (const e of Hierarchy.entries) {
            verify(e.description && e.examples.length && e.x >= 0 && e.y >= 0)
            verify(e.x + e.w <= 1672 && e.y + e.h <= 941)
        }
        const montage = Commands.entriesFor().find(e => e.title === "Montage & Supports")
        const related = Links.related(montage)
        for (const title of ["/dev", "/media", "/mnt", "/run"]) {
            verify(related.includes(title))
            verify(Links.related(dirs.find(e => e.title === title)).includes("Montage & Supports"))
        }
    }
    function test_carried_selection() {
        canvas.fixedPanel = true
        let montage = Commands.entriesFor().find(e => e.title === "Montage & Supports")
        canvas.currentPage = 1
        canvas.entries = [montage]
        let hotspot = getHotspot("Montage & Supports")
        verify(hotspot !== null)
        canvas.toggleHotspot(hotspot)
        canvas.relatedEntry = canvas.pinnedSelection()
        canvas.resetHotspots()
        canvas.currentPage = 0
        canvas.entries = Hierarchy.entries
        compare(canvas.relatedEntry.title, "Montage & Supports")
        verify(canvas.relatedTitles.includes("/dev") && canvas.relatedTitles.includes("/mnt"))
        verify(findChild(canvas, "fixedInfoPanel").visible)
        canvas.forceActiveFocus()
        keyClick(Qt.Key_Escape)
        compare(canvas.relatedEntry, null)
        compare(canvas.relatedTitles.length, 0)
        canvas.entries = [
            {title: "left", description: "A", examples: ["exemple"], note: "Note", x: 100, y: 150, w: 200, h: 100},
            {title: "right", description: "B", examples: ["exemple"], note: "Note", x: 1350, y: 150, w: 200, h: 100}
        ]
    }
    function test_slide_direction() {
        slideDeck.page = 0
        compare(slideDeck.hierarchyOffset, 0)
        compare(slideDeck.commandsOffset, slideDeck.width)
        slideDeck.page = 1
        compare(slideDeck.hierarchyOffset, -slideDeck.width)
        compare(slideDeck.commandsOffset, 0)
    }
    function test_colors() {
        compare(Colors.forEntry({title: "/home", kind: "directory", x: 30}), "#3cb8ff")
        compare(Colors.forEntry({title: "/sys", kind: "directory", x: 1027}), "#54eaff")
        compare(Colors.forEntry({title: "/media", kind: "directory", x: 708}), "#ffb642")
        compare(Colors.forEntry({title: "/srv", kind: "directory", x: 1357}), "#db74ff")
        compare(Colors.forEntry({title: "ps", kind: "command", x: 1017}), "#54eaff")
        compare(Colors.forEntry({title: "curl", kind: "command", x: 1349}), "#db74ff")
    }
    function test_arrow_keys_are_focus_scoped() {
        canvas.forceActiveFocus()
        keyClick(Qt.Key_Right)
        compare(pageSpy.count, 1)
        compare(pageSpy.signalArguments[0][0], 1)
        keyClick(Qt.Key_Left)
        compare(pageSpy.count, 1)
        canvas.currentPage = 1
        keyClick(Qt.Key_Left)
        compare(pageSpy.count, 2)
        compare(pageSpy.signalArguments[1][0], 0)
        otherFocus.forceActiveFocus()
        keyClick(Qt.Key_Right)
        compare(pageSpy.count, 2)
        compare(otherFocus.presses, 1)
    }
    function test_popup_placement() {
        let right = Placement.place(20, 50, 120, 50, 240, 100, 800, 500)
        verify(right.x >= 120)
        let left = Placement.place(650, 50, 120, 50, 240, 100, 800, 500)
        verify(left.x + 240 <= 0)
        let below = Placement.place(200, 20, 120, 50, 250, 100, 500, 500)
        verify(below.y >= 50)
    }
    function test_popups_escape() {
        let a = getHotspot("left"), b = getHotspot("right")
        verify(a !== null && b !== null)
        mouseMove(a, 15, 15); mouseClick(a, 15, 15)
        verify(a.pinned)
        mouseMove(b, 15, 15); mouseClick(b, 15, 15)
        verify(a.pinned && b.pinned)
        keyClick(Qt.Key_Escape)
        verify(!a.shown && !a.pinned && !b.shown && !b.pinned)
    }
    function test_fixed_panel_pin_and_escape() {
        canvas.fixedPanel = true
        let a = getHotspot("left"), b = getHotspot("right")
        mouseMove(a, 15, 15); mouseClick(a, 15, 15)
        verify(a.pinned && canvas.activeHotspot === a)
        const panel = findChild(canvas, "fixedInfoPanel")
        verify(panel !== null && panel.visible)
        compare(panel.accent.toString(), a.tint.toString())
        mouseMove(b, 15, 15)
        compare(canvas.activeHotspot, a)
        mouseClick(b, 15, 15)
        verify(b.pinned && !a.pinned && canvas.activeHotspot === b)
        keyClick(Qt.Key_Escape)
        verify(!b.shown && !b.pinned && canvas.activeHotspot === null)
    }
}
