import QtQuick

Canvas {
    id: highlight
    required property color tint
    property bool active: false

    opacity: active ? 1 : 0
    visible: opacity > 0
    Behavior on opacity { NumberAnimation { duration: 80; easing.type: Easing.OutCubic } }
    onWidthChanged: requestPaint()
    onHeightChanged: requestPaint()
    onTintChanged: requestPaint()
    onPaint: {
        const ctx = getContext("2d")
        ctx.reset()

        const horizontal = ctx.createLinearGradient(0, 0, width, 0)
        horizontal.addColorStop(0, Qt.rgba(tint.r, tint.g, tint.b, 0))
        horizontal.addColorStop(0.10, Qt.rgba(tint.r, tint.g, tint.b, 0.24))
        horizontal.addColorStop(0.35, Qt.rgba(tint.r, tint.g, tint.b, 0.18))
        horizontal.addColorStop(0.85, Qt.rgba(tint.r, tint.g, tint.b, 0.10))
        horizontal.addColorStop(1, Qt.rgba(tint.r, tint.g, tint.b, 0))
        ctx.fillStyle = horizontal
        ctx.fillRect(0, 0, width, height)

        ctx.globalCompositeOperation = "destination-in"
        const vertical = ctx.createLinearGradient(0, 0, 0, height)
        vertical.addColorStop(0, "rgba(0,0,0,0)")
        vertical.addColorStop(0.25, "rgba(0,0,0,1)")
        vertical.addColorStop(0.75, "rgba(0,0,0,1)")
        vertical.addColorStop(1, "rgba(0,0,0,0)")
        ctx.fillStyle = vertical
        ctx.fillRect(0, 0, width, height)
        ctx.globalCompositeOperation = "source-over"
    }
}
