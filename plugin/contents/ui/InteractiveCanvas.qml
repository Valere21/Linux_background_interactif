import QtQuick

Item {
    id: interactiveLayer
    required property var entries

    function closeAll() {
        for (let i = 0; i < hotspots.count; ++i) {
            const hotspot = hotspots.itemAt(i)
            if (hotspot)
                hotspot.close()
        }
    }

    Keys.onEscapePressed: event => {
        closeAll()
        event.accepted = true
    }
    onVisibleChanged: if (!visible) closeAll()

    Repeater {
        id: hotspots
        model: interactiveLayer.entries
        Hotspot {
            required property var modelData
            entry: modelData
            canvas: interactiveLayer
            x: modelData.x / 1672 * interactiveLayer.width
            y: modelData.y / 930 * interactiveLayer.height
            width: modelData.w / 1672 * interactiveLayer.width
            height: modelData.h / 930 * interactiveLayer.height
        }
    }
}
