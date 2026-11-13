import QtQuick

Item {
    id: root
    required property var entry
    required property Item canvas
    property bool pinned: false
    property bool shown: false
    z: shown ? 10 : 0

    function scheduleClose() { closeTimer.restart() }
    function open() { closeTimer.stop(); shown = true }

    FolderHighlight {
        width: root.width
        height: root.height
        active: root.shown && root.entry.title.startsWith("/")
        tint: root.entry.title === "/" || root.entry.x >= 1348 ? "#54eaff"
              : root.entry.x < 370 ? "#3cb8ff"
              : root.entry.x < 690 ? "#68ff52"
              : root.entry.x < 1020 ? "#ffb642" : "#db74ff"
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
            root.pinned = !root.pinned
            if (root.pinned) root.open()
            else root.scheduleClose()
        }
    }
    Timer {
        id: closeTimer
        interval: 80
        onTriggered: if (!root.pinned && !targetMouse.containsMouse && !popupMouse.containsMouse) root.shown = false
    }
    Rectangle {
        id: card
        visible: root.shown
        width: Math.min(380, root.canvas.width - 16)
        height: column.implicitHeight + 24
        x: Math.max(-root.x + 8, Math.min(root.width + 8, root.canvas.width - root.x - width - 8))
        y: Math.max(-root.y + 8, Math.min(0, root.canvas.height - root.y - height - 8))
        radius: 9
        color: "#ef101b20"
        border.color: "#54d9e6"
        Column {
            id: column
            anchors.left: parent.left
            anchors.right: parent.right
            anchors.top: parent.top
            anchors.margins: 12
            spacing: 6
            Text { text: root.entry.title; color: "#8ceef5"; font.bold: true; font.pixelSize: 17 }
            Text { width: parent.width; text: root.entry.description; color: "white"; wrapMode: Text.WordWrap; font.pixelSize: 14 }
            Repeater {
                model: root.entry.examples || []
                Text {
                    required property string modelData
                    width: column.width
                    text: "•  " + modelData
                    color: "#e5f3f4"
                    wrapMode: Text.WordWrap
                    font.pixelSize: 14
                }
            }
            Text {
                width: parent.width
                visible: !!root.entry.note
                text: root.entry.note || ""
                color: "#a9cbd0"
                wrapMode: Text.WordWrap
                font.pixelSize: 13
                font.italic: true
            }
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
