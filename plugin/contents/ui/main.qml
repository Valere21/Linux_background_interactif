import QtQuick
import QtQuick.Controls as Controls
import org.kde.plasma.core as PlasmaCore
import org.kde.plasma.plasmoid
import "Entries.js" as Hierarchy
import "CommandEntries.js" as Commands

WallpaperItem {
    id: root
    property bool interactive: false
    property int page: 0
    contextualActions: [toggleAction]

    function showPage(nextPage) {
        if (page === nextPage) return
        imageCanvas.closeAll()
        page = nextPage
        transitionTimer.restart()
    }

    PlasmaCore.Action {
        id: toggleAction
        text: root.interactive ? "Désactiver les infos Linux" : "Activer les infos Linux"
        icon.name: "help-about"
        onTriggered: root.interactive = !root.interactive
    }
    onInteractiveChanged: {
        if (interactive && !transitionTimer.running)
            Qt.callLater(() => { if (root.interactive && imageCanvas.visible) imageCanvas.forceActiveFocus() })
    }
    Timer {
        id: transitionTimer
        interval: 300
        onTriggered: if (root.interactive) imageCanvas.forceActiveFocus()
    }
    SlideDeck {
        id: slides
        anchors.fill: parent
        page: root.page
    }
    InteractiveToggle {
        parent: root.parent
        z: 1001
        anchors.left: parent.left
        anchors.top: parent.top
        anchors.margins: 16
        active: root.interactive
        onActivationRequested: enabled => root.interactive = enabled
    }
    Controls.Button {
        parent: root.parent
        z: 1001
        anchors.right: parent.right
        anchors.top: parent.top
        anchors.margins: 16
        text: root.page === 0 ? "Commandes →" : "← Hiérarchie"
        Accessible.name: text
        onClicked: root.showPage(root.page === 0 ? 1 : 0)
    }
    InteractiveCanvas {
        id: imageCanvas
        parent: root.parent
        z: 1000
        width: root.page === 0 ? slides.hierarchyPaintedWidth : slides.commandsPaintedWidth
        height: root.page === 0 ? slides.hierarchyPaintedHeight : slides.commandsPaintedHeight
        anchors.centerIn: parent
        visible: root.interactive && !transitionTimer.running
        entries: root.page === 0 ? Hierarchy.entries : Commands.entriesFor()
        referenceWidth: root.page === 0 ? 1672 : 1671
        referenceHeight: root.page === 0 ? 930 : 941
        fixedPanel: true
        currentPage: root.page
        onPageRequested: requestedPage => root.showPage(requestedPage)
    }
}
