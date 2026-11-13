.pragma library

function forEntry(entry) {
    if (entry.kind === "module" || entry.kind === "command") {
        if (entry.x >= 1320) return "#db74ff"
        if (entry.x >= 990) return "#54eaff"
        if (entry.x >= 680) return "#ffb642"
        if (entry.x >= 380) return "#68ff52"
        return "#3cb8ff"
    }
    if (entry.title === "/") return "#54eaff"
    if (entry.x >= 1340) return "#db74ff"
    if (entry.x >= 1010) return "#54eaff"
    if (entry.x >= 690) return "#ffb642"
    if (entry.x >= 360) return "#68ff52"
    return "#3cb8ff"
}
