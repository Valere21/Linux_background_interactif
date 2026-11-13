.pragma library

function place(targetX, targetY, targetWidth, targetHeight, cardWidth, cardHeight, canvasWidth, canvasHeight) {
    const gap = 8
    const margin = 8
    const clamp = (value, min, max) => Math.max(min, Math.min(value, Math.max(min, max)))
    const right = targetX + targetWidth + gap
    const left = targetX - cardWidth - gap
    const below = targetY + targetHeight + gap
    const above = targetY - cardHeight - gap
    const y = clamp(targetY, margin, canvasHeight - cardHeight - margin)

    if (right + cardWidth <= canvasWidth - margin)
        return { x: right - targetX, y: y - targetY }
    if (left >= margin)
        return { x: left - targetX, y: y - targetY }

    const x = clamp(targetX, margin, canvasWidth - cardWidth - margin)
    if (below + cardHeight <= canvasHeight - margin)
        return { x: x - targetX, y: below - targetY }
    if (above >= margin)
        return { x: x - targetX, y: above - targetY }

    return { x: x - targetX, y: y - targetY }
}
