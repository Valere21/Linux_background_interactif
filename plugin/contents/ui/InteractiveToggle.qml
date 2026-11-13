import QtQuick
import QtQuick.Controls as Controls

Controls.Switch {
    id: control
    required property bool active
    signal activationRequested(bool enabled)

    implicitWidth: 100
    implicitHeight: 36
    leftPadding: 8
    rightPadding: 8
    checked: active
    Accessible.name: "Interactivité du fond d’écran"
    onToggled: activationRequested(checked)

    background: Rectangle {
        radius: 8
        color: "#dc111d21"
        border.color: "#4a7d83"
    }
    indicator: Rectangle {
        x: control.leftPadding
        y: (control.height - height) / 2
        implicitWidth: 40
        implicitHeight: 22
        radius: height / 2
        color: control.checked ? "#167d88" : "#4b5c60"
        border.color: control.checked ? "#7df0f4" : "#91a4a6"
        Rectangle {
            x: control.checked ? parent.width - width - 3 : 3
            anchors.verticalCenter: parent.verticalCenter
            width: 16
            height: 16
            radius: width / 2
            color: "#f2ffff"
            Behavior on x { NumberAnimation { duration: 100 } }
        }
    }
    contentItem: Text {
        leftPadding: control.indicator.width + 8
        verticalAlignment: Text.AlignVCenter
        text: control.checked ? "On" : "Off"
        color: "#efffff"
        font.pixelSize: 14
        font.bold: true
    }
}
