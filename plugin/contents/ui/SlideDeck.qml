import QtQuick

Item {
    id: deck
    property int page: 0
    property bool animationsEnabled: true
    readonly property real hierarchyOffset: hierarchyImage.x
    readonly property real commandsOffset: commandsImage.x
    readonly property real hierarchyPaintedWidth: hierarchyImage.paintedWidth
    readonly property real hierarchyPaintedHeight: hierarchyImage.paintedHeight
    readonly property real commandsPaintedWidth: commandsImage.paintedWidth
    readonly property real commandsPaintedHeight: commandsImage.paintedHeight
    clip: true

    Image {
        id: hierarchyImage
        width: deck.width; height: deck.height
        x: deck.page === 0 ? 0 : -deck.width
        opacity: deck.page === 0 ? 1 : 0
        source: "../images/Hierarchie-Linux.png"
        fillMode: Image.PreserveAspectFit
        verticalAlignment: Image.AlignBottom
        smooth: true
        Behavior on x { enabled: deck.animationsEnabled; NumberAnimation { duration: 280; easing.type: Easing.InOutCubic } }
        Behavior on opacity { enabled: deck.animationsEnabled; NumberAnimation { duration: 280 } }
    }
    Image {
        id: commandsImage
        width: deck.width; height: deck.height
        x: deck.page === 1 ? 0 : deck.width
        opacity: deck.page === 1 ? 1 : 0
        source: "../images/Commandes.png"
        fillMode: Image.PreserveAspectFit
        verticalAlignment: Image.AlignBottom
        smooth: true
        Behavior on x { enabled: deck.animationsEnabled; NumberAnimation { duration: 280; easing.type: Easing.InOutCubic } }
        Behavior on opacity { enabled: deck.animationsEnabled; NumberAnimation { duration: 280 } }
    }
}
