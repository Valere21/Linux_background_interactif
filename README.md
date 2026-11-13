# Linux interactif

Fond d'écran KDE Plasma 6 présentant la hiérarchie et les commandes Linux, avec un panneau d'information fixe. Chaque fiche commence par une définition, suivie d'exemples ; les modules présentent aussi une situation d'application. Le projet s'ouvre dans Qt Creator avec un kit Qt 6.11 ; le plugin utilise la version de Qt de Plasma.

Le bouton en haut à droite passe d'une image à l'autre. Lorsque l'interactivité est sur On et que le bureau a le focus, les flèches gauche et droite changent aussi de page : elles peuvent alors remplacer les déplacements entre icônes du bureau. Survolez un dossier, une commande ou un titre de module pour afficher sa fiche ; cliquez pour la maintenir ou la libérer. Échap ferme la fiche. Le panneau affiche une fiche à la fois : un clic sur une autre la sélectionne. La molette permet de parcourir une fiche épinglée trop longue.

Les sources QML sont dans `plugin/contents/ui` : `Entries.js` décrit la hiérarchie, `CommandEntries.js` les zones et fiches de commandes, `SlideDeck.qml` les transitions, `Hotspot.qml` les interactions et `FixedInfoPanel.qml` le panneau.

Installation dans le compte utilisateur, depuis la racine du projet :

```sh
kpackagetool6 --type Plasma/Wallpaper --install plugin
```

Pour une version déjà installée, utiliser `--upgrade` à la place de `--install`, puis sélectionner « Linux interactif » dans les réglages du fond d'écran. Après une mise à jour des fichiers QML, recharger Plasma pour évacuer son cache.

Vérification des zones, des transitions et des interactions :

```sh
QT_QPA_PLATFORM=offscreen /usr/lib64/qt6/bin/qmltestrunner -input tests
```
