import QtQuick
import "Links.js" as Links

Column {
    id: content
    required property var entry
    property int bodySize: 14
    property color accent: "#8ceef5"
    spacing: 6
    Text {
        width: parent.width
        text: content.entry.title || ""
        color: content.accent
        font.bold: true
        font.pixelSize: 17
        wrapMode: Text.WordWrap
    }
    Text {
        width: parent.width
        text: content.entry.description || ""
        color: "white"
        wrapMode: Text.WordWrap
        font.pixelSize: content.bodySize
    }
    Text {
        width: parent.width
        visible: (content.entry.examples || []).length > 0
        text: content.entry.scenario ? "Exemple : " + content.entry.scenario
             : ((content.entry.examples || []).length === 1 ? "Exemple :" : "Exemples :")
        color: content.accent
        font.bold: true
        font.pixelSize: content.bodySize
        wrapMode: Text.WordWrap
    }
    Repeater {
        model: content.entry.examples || []
        Text {
            required property string modelData
            width: content.width
            text: "•  " + modelData
            color: "#e5f3f4"
            wrapMode: Text.WrapAnywhere
            font.pixelSize: content.bodySize
        }
    }
    Text {
        width: parent.width
        readonly property var related: Links.related(content.entry)
        visible: related.length > 0
        text: (Links.onHierarchy(content.entry) ? "Commandes et modules associés : " : "Dossiers souvent liés : ") + related.join(", ")
        color: content.accent
        wrapMode: Text.WordWrap
        font.pixelSize: 13
    }
    Text {
        width: parent.width
        visible: !!content.entry.note
        text: content.entry.note || ""
        color: "#a9cbd0"
        wrapMode: Text.WordWrap
        font.pixelSize: 13
        font.italic: true
    }
}
