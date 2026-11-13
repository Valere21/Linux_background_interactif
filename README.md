# Hiérarchie Linux interactive

Projet Qt 6.11 / QML pour KDE Plasma 6. Le plugin s'exécute avec la version de Qt utilisée par Plasma.

Ouvrir `CMakeLists.txt` dans Qt Creator avec le kit Qt 6.11. Pour installer le fond dans le compte utilisateur :

```sh
kpackagetool6 --type Plasma/Wallpaper --install plugin
```

Dans les réglages du bureau, sélectionner le type de fond « Hiérarchie Linux interactive ». Clic droit sur le bureau puis « Activer les infos Linux » pour activer les zones. Un survol affiche une fiche; un clic la maintient ouverte et un second clic la libère. Désactiver avec la même action du menu.

Les coordonnées, descriptions, exemples et remarques sont dans `plugin/contents/ui/Entries.js`, le comportement et la présentation communs dans `Hotspot.qml`. L'image est intégrée au paquet. Pour revenir au fond initial, sélectionner le type « Image » dans les réglages du bureau.
