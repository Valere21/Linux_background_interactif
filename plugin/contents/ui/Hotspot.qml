import QtQuick
import "PopupPlacement.js" as Placement
import "EntryColor.js" as EntryColor

Item {
    id: root
    required property var entry
    required property Item canvas
    readonly property color tint: EntryColor.forEntry(entry)
    property bool pinned: false
    property bool shown: false
    z: shown ? 10 : 0

    function scheduleClose() { closeTimer.restart() }
    function open() {
        closeTimer.stop()
        if (canvas.fixedPanel) {
            canvas.showHotspot(root, false)
        } else {
            shown = true
            canvas.forceActiveFocus()
        }
    }
    function close() {
        closeTimer.stop()
        pinned = false
        shown = false
    }

    FolderHighlight {
        width: root.width
        height: root.height
        active: root.shown || canvas.relatedTitles.indexOf(root.entry.title) !== -1
        tint: root.tint
    }
    MouseArea {
        id: targetMouse
        anchors.fill: parent
        hoverEnabled: true
        acceptedButtons: Qt.LeftButton
        cursorShape: Qt.PointingHandCursor
        onEntered: root.open()
        onExited: root.scheduleClose()
        onClicked: {
            if (canvas.fixedPanel) {
                canvas.toggleHotspot(root)
            } else {
                root.pinned = !root.pinned
                if (root.pinned) root.open()
                else root.scheduleClose()
            }
        }
    }
    Timer {
        id: closeTimer
        interval: 80
        onTriggered: {
            if (!root.pinned && !targetMouse.containsMouse && !popupMouse.containsMouse) {
                root.close()
                if (canvas.fixedPanel) canvas.clearHotspot(root)
            }
        }
    }
    Rectangle {
        id: card
        visible: root.shown && !canvas.fixedPanel
        width: Math.min(380, root.canvas.width - 16)
        height: column.implicitHeight + 24
        readonly property var placement: Placement.place(root.x, root.y, root.width, root.height,
                                                           width, height, root.canvas.width, root.canvas.height)
        x: placement.x
        y: placement.y
        radius: 9
        color: "#ef101b20"
        border.color: "#54d9e6"
        InfoContent {
            id: column
            anchors.left: parent.left
            anchors.right: parent.right
            anchors.top: parent.top
            anchors.margins: 12
            entry: root.entry
        }
        MouseArea {
            id: popupMouse
            anchors.fill: parent
            hoverEnabled: true
            acceptedButtons: Qt.NoButton
            onEntered: root.open()
            onExited: root.scheduleClose()
        }
    }
}
