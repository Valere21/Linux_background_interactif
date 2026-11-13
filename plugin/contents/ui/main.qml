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
    property var relatedEntry: null
    readonly property rect availableArea: root.parent && root.parent.availableScreenRect
        && root.parent.availableScreenRect.width > 0 && root.parent.availableScreenRect.height > 0
        ? root.parent.availableScreenRect : Qt.rect(0, 0, root.width, root.height)
    contextualActions: [toggleAction]

    function showPage(nextPage) {
        if (page === nextPage) return
        relatedEntry = imageCanvas.pinnedSelection()
        imageCanvas.resetHotspots()
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
        if (!interactive) relatedEntry = null
    }
    Timer {
        id: transitionTimer
        interval: 300
    }
    SlideDeck {
        id: slides
        x: root.availableArea.x
        y: root.availableArea.y
        width: root.availableArea.width
        height: root.availableArea.height
        page: root.page
    }
    InteractiveToggle {
        objectName: "interactiveToggle"
        parent: root.parent
        z: 1001
        anchors.left: parent.left
        anchors.top: parent.top
        anchors.margins: 16
        active: root.interactive
        onActivationRequested: enabled => root.interactive = enabled
    }
    Controls.Button {
        objectName: "pageButton"
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
        objectName: "imageCanvas"
        parent: root.parent
        z: 1000
        width: root.page === 0 ? slides.hierarchyPaintedWidth : slides.commandsPaintedWidth
        height: root.page === 0 ? slides.hierarchyPaintedHeight : slides.commandsPaintedHeight
        x: root.x + slides.x + (slides.width - width) / 2
        y: root.y + slides.y + slides.height - height
        visible: root.interactive && !transitionTimer.running
        shortcutsEnabled: root.interactive
        entries: root.page === 0 ? Hierarchy.entries : Commands.entriesFor()
        referenceWidth: root.page === 0 ? 1672 : 1671
        referenceHeight: 941
        fixedPanel: true
        currentPage: root.page
        relatedEntry: root.relatedEntry
        onRelatedSelectionCleared: root.relatedEntry = null
        onPageRequested: requestedPage => root.showPage(requestedPage)
    }
}
