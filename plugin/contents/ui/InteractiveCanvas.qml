import QtQuick

Item {
    id: interactiveLayer
    required property var entries
    property real referenceWidth: 1672
    property real referenceHeight: 930
    property bool fixedPanel: false
    property int currentPage: 0
    signal pageRequested(int page)
    property var activeHotspot: null

    function closeAll() {
        for (let i = 0; i < hotspots.count; ++i) {
            const hotspot = hotspots.itemAt(i)
            if (hotspot)
                hotspot.close()
        }
        activeHotspot = null
    }
    function showHotspot(hotspot, force) {
        if (activeHotspot && activeHotspot !== hotspot && activeHotspot.pinned && !force)
            return false
        if (activeHotspot && activeHotspot !== hotspot)
            activeHotspot.close()
        activeHotspot = hotspot
        hotspot.shown = true
        forceActiveFocus()
        return true
    }
    function clearHotspot(hotspot) {
        if (activeHotspot === hotspot)
            activeHotspot = null
    }
    function toggleHotspot(hotspot) {
        if (activeHotspot === hotspot && hotspot.pinned) {
            hotspot.pinned = false
            hotspot.scheduleClose()
        } else if (showHotspot(hotspot, true)) {
            hotspot.pinned = true
        }
    }

    Keys.onEscapePressed: event => {
        closeAll()
        event.accepted = true
    }
    Keys.onLeftPressed: event => {
        if (currentPage > 0) {
            pageRequested(0)
            event.accepted = true
        } else {
            event.accepted = false
        }
    }
    Keys.onRightPressed: event => {
        if (currentPage < 1) {
            pageRequested(1)
            event.accepted = true
        } else {
            event.accepted = false
        }
    }
    onVisibleChanged: if (!visible) closeAll()
    onEntriesChanged: closeAll()
    onFixedPanelChanged: closeAll()

    Repeater {
        id: hotspots
        model: interactiveLayer.entries
        Hotspot {
            required property var modelData
            entry: modelData
            canvas: interactiveLayer
            x: modelData.x / interactiveLayer.referenceWidth * interactiveLayer.width
            y: modelData.y / interactiveLayer.referenceHeight * interactiveLayer.height
            width: modelData.w / interactiveLayer.referenceWidth * interactiveLayer.width
            height: modelData.h / interactiveLayer.referenceHeight * interactiveLayer.height
        }
    }
    FixedInfoPanel {
        objectName: "fixedInfoPanel"
        z: 1000
        visible: interactiveLayer.fixedPanel && interactiveLayer.activeHotspot !== null
        entry: interactiveLayer.activeHotspot ? interactiveLayer.activeHotspot.entry : ({})
        accent: interactiveLayer.activeHotspot ? interactiveLayer.activeHotspot.tint : "#54d9e6"
        x: interactiveLayer.width * 580 / 1671
        y: interactiveLayer.height * 720 / 941
        width: interactiveLayer.width * 850 / 1671
        height: interactiveLayer.height * 195 / 941
    }
}
