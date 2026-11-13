import QtQuick
import org.kde.plasma.core as PlasmaCore
import org.kde.plasma.plasmoid
import "Entries.js" as Data

WallpaperItem {
    id: root
    property bool interactive: false
    contextualActions: [toggleAction]

    PlasmaCore.Action {
        id: toggleAction
        text: root.interactive ? "Désactiver les infos Linux" : "Activer les infos Linux"
        icon.name: "help-about"
        onTriggered: root.interactive = !root.interactive
    }

    Image {
        id: background
        anchors.fill: parent
        source: "../images/Hierarchie-Linux.png"
        fillMode: Image.PreserveAspectFit
        smooth: true
    }
    InteractiveCanvas {
        id: imageCanvas
        parent: root.parent
        z: 1000
        width: background.paintedWidth
        height: background.paintedHeight
        anchors.centerIn: parent
        visible: root.interactive
        entries: Data.entries
    }
}
