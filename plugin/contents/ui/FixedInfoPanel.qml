import QtQuick
import QtQuick.Controls as Controls

Rectangle {
    id: panel
    required property var entry
    required property color accent
    radius: 9
    color: "#ed101b20"
    border.color: accent
    clip: true

    Rectangle {
        anchors.fill: parent
        radius: parent.radius
        color: Qt.rgba(panel.accent.r, panel.accent.g, panel.accent.b, 0.10)
    }
    Controls.ScrollView {
        objectName: "infoScroll"
        anchors.fill: parent
        anchors.margins: 12
        clip: true
        contentWidth: availableWidth
        Controls.ScrollBar.horizontal.policy: Controls.ScrollBar.AlwaysOff
        InfoContent {
            width: parent.width
            entry: panel.entry || ({})
            accent: panel.accent
        }
    }
}
