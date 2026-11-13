.pragma library
const entries = [
  {
    "title": "/",
    "description": "Point de départ de l’arborescence : tous les chemins absolus commencent ici.",
    "examples": [
      "/etc : configuration du système",
      "/home : dossiers personnels",
      "/var : données qui évoluent"
    ],
    "note": "Un disque ou une partition peut être monté à n’importe quel emplacement de cette arborescence.",
    "x": 659,
    "y": 9,
    "w": 425,
    "h": 125,
    "kind": "directory"
  },
  {
    "title": "Fichiers et contenu",
    "description": "Les fichiers personnels et temporaires contiennent les données manipulées par les utilisateurs.",
    "examples": [
      "/home : dossiers personnels",
      "/root : dossier personnel de l’administrateur",
      "/tmp : fichiers temporaires"
    ],
    "note": "Ces outils peuvent aussi agir sur des fichiers situés ailleurs.",
    "x": 20,
    "y": 201,
    "w": 333,
    "h": 73,
    "kind": "theme"
  },
  {
    "title": "Logiciels et configuration",
    "description": "Ces répertoires regroupent des logiciels, bibliothèques et configurations du système.",
    "examples": [
      "/usr et /bin : programmes",
      "/lib : bibliothèques",
      "/etc : configuration globale"
    ],
    "note": "Les liens symboliques et les emplacements exacts dépendent de la distribution.",
    "x": 363,
    "y": 201,
    "w": 325,
    "h": 73,
    "kind": "theme"
  },
  {
    "title": "Stockage et montage",
    "description": "Ces emplacements représentent les périphériques et permettent de rendre leurs fichiers accessibles.",
    "examples": [
      "/dev : périphériques",
      "/media : supports amovibles",
      "/mnt : montages temporaires"
    ],
    "note": "Un même système de fichiers peut être monté ailleurs, notamment sous /run/media.",
    "x": 699,
    "y": 201,
    "w": 305,
    "h": 73,
    "kind": "theme"
  },
  {
    "title": "Système en fonctionnement",
    "description": "Ces dossiers exposent le démarrage, le noyau et l’état des processus ou services.",
    "examples": [
      "/boot : démarrage",
      "/proc et /sys : interfaces virtuelles du noyau",
      "/run et /var : état et données évolutives"
    ],
    "note": "/proc et /sys sont virtuels ; les autres répertoires ont des rôles différents.",
    "x": 1014,
    "y": 201,
    "w": 320,
    "h": 73,
    "kind": "theme"
  },
  {
    "title": "Réseau et échanges",
    "description": "Ce regroupement présente des données pouvant être fournies par des services.",
    "examples": [
      "/srv/www : contenu web possible",
      "/srv/ftp : fichiers proposés par FTP",
      "/srv/git : dépôts de service possibles"
    ],
    "note": "Le classement de /srv ici est pédagogique : il peut servir à des usages variés.",
    "x": 1346,
    "y": 201,
    "w": 312,
    "h": 73,
    "kind": "theme"
  },
  {
    "title": "/home",
    "description": "Répertoires personnels des comptes utilisateurs.",
    "examples": [
      "/home/alice/Documents : documents",
      "/home/alice/.config : réglages personnels",
      "/home/alice/.local : données et applications locales"
    ],
    "note": "Le raccourci ~ désigne votre dossier personnel, qui peut se trouver ailleurs que sous /home.",
    "x": 30,
    "y": 285,
    "w": 320,
    "h": 74,
    "kind": "directory"
  },
  {
    "title": "/root",
    "description": "Dossier personnel du compte administrateur root.",
    "examples": [
      "/root/.bashrc : réglages du shell",
      "/root/.ssh : configuration et clés SSH",
      "/root/scripts : scripts personnels possibles"
    ],
    "note": "À distinguer de /, la racine du système ; l’accès à /root est généralement réservé à root.",
    "x": 30,
    "y": 379,
    "w": 320,
    "h": 82,
    "kind": "directory"
  },
  {
    "title": "/tmp",
    "description": "Emplacement pour des fichiers temporaires créés par les programmes.",
    "examples": [
      "/tmp/rapport.tmp : fichier temporaire",
      "/tmp/build-xyz/ : travail de compilation",
      "/tmp/session-xyz/ : données temporaires"
    ],
    "note": "Le nettoyage peut avoir lieu au redémarrage ou selon une autre politique : ne pas y garder des données importantes.",
    "x": 30,
    "y": 480,
    "w": 320,
    "h": 80,
    "kind": "directory"
  },
  {
    "title": "/usr",
    "description": "Principale arborescence des programmes et ressources installés pour l’ensemble du système.",
    "examples": [
      "/usr/bin : commandes et applications",
      "/usr/lib : bibliothèques et modules",
      "/usr/share : ressources indépendantes de l’architecture"
    ],
    "note": "/usr/local accueille traditionnellement des installations administrées localement.",
    "x": 377,
    "y": 283,
    "w": 310,
    "h": 61,
    "kind": "directory"
  },
  {
    "title": "/bin",
    "description": "Commandes essentielles accessibles aux utilisateurs et aux scripts.",
    "examples": [
      "ls : lister des fichiers",
      "cp : copier des fichiers",
      "sh : interpréter des commandes"
    ],
    "note": "Sur de nombreuses distributions, /bin est un lien vers /usr/bin.",
    "x": 377,
    "y": 345,
    "w": 310,
    "h": 60,
    "kind": "directory"
  },
  {
    "title": "/sbin",
    "description": "Commandes traditionnellement destinées à l’administration du système.",
    "examples": [
      "fsck : vérification de systèmes de fichiers",
      "ip : configuration réseau, selon la distribution",
      "shutdown : arrêt ou redémarrage"
    ],
    "note": "Sur de nombreux systèmes, /sbin est un lien vers /usr/sbin ; certaines commandes exigent des privilèges.",
    "x": 377,
    "y": 406,
    "w": 310,
    "h": 60,
    "kind": "directory"
  },
  {
    "title": "/lib",
    "description": "Bibliothèques essentielles et ressources nécessaires à certains programmes et au noyau.",
    "examples": [
      "/lib/modules/ : modules du noyau",
      "/lib/firmware/ : micrologiciels possibles",
      "/lib/*.so* : bibliothèques partagées possibles"
    ],
    "note": "Sur de nombreuses distributions, /lib est un lien vers /usr/lib ; la disposition varie selon l’architecture.",
    "x": 377,
    "y": 467,
    "w": 310,
    "h": 61,
    "kind": "directory"
  },
  {
    "title": "/opt",
    "description": "Emplacement destiné à certains logiciels additionnels autonomes.",
    "examples": [
      "/opt/mon-application/bin : exécutables possibles",
      "/opt/mon-application/lib : bibliothèques possibles",
      "/opt/mon-application/share : ressources possibles"
    ],
    "note": "Les applications ne sont pas toutes installées ici : beaucoup utilisent /usr, Flatpak ou un dossier personnel.",
    "x": 377,
    "y": 528,
    "w": 310,
    "h": 64,
    "kind": "directory"
  },
  {
    "title": "/etc",
    "description": "Configuration globale du système et de nombreux logiciels.",
    "examples": [
      "/etc/hostname : nom de la machine",
      "/etc/fstab : montages configurés",
      "/etc/ssh/ : configuration SSH"
    ],
    "note": "Les fichiers personnels de configuration se trouvent souvent dans ~/.config plutôt que dans /etc.",
    "x": 377,
    "y": 594,
    "w": 310,
    "h": 67,
    "kind": "directory"
  },
  {
    "title": "/dev",
    "description": "Fichiers spéciaux donnant accès aux périphériques et à certaines ressources virtuelles : disques, terminaux et autres interfaces.",
    "examples": [
      "/dev/sdb : un disque ou une clé USB",
      "/dev/sdb1 : une partition de ce disque",
      "/dev/tty : un terminal",
      "/dev/null : une ressource qui ignore les données"
    ],
    "note": "Les noms de disques sont des exemples et peuvent changer. Écrire directement dans un périphérique de stockage peut modifier ses données.",
    "x": 708,
    "y": 284,
    "w": 295,
    "h": 74,
    "kind": "directory"
  },
  {
    "title": "/media",
    "description": "Emplacement souvent utilisé pour monter des supports amovibles.",
    "examples": [
      "/media/alice/CLE : clé USB possible",
      "/media/alice/PHOTO : carte mémoire possible",
      "/media/cdrom : lecteur optique sur certains systèmes"
    ],
    "note": "Le bureau peut utiliser un autre emplacement, par exemple /run/media sous Fedora.",
    "x": 708,
    "y": 379,
    "w": 295,
    "h": 85,
    "kind": "directory"
  },
  {
    "title": "/mnt",
    "description": "Emplacement traditionnel pour monter temporairement un système de fichiers.",
    "examples": [
      "/mnt/disque : partition montée manuellement",
      "/mnt/sauvegarde : volume de sauvegarde",
      "/mnt/partage : partage réseau"
    ],
    "note": "Les noms sont des exemples ; le montage n’est pas créé automatiquement.",
    "x": 708,
    "y": 480,
    "w": 295,
    "h": 80,
    "kind": "directory"
  },
  {
    "title": "/boot",
    "description": "Fichiers nécessaires aux premières étapes du démarrage du système.",
    "examples": [
      "vmlinuz-* : noyaux Linux",
      "initramfs-* : environnement de démarrage initial",
      "efi/ : fichiers de démarrage EFI, selon le montage"
    ],
    "note": "Le contenu et l’emplacement de la partition EFI dépendent de l’installation.",
    "x": 1027,
    "y": 284,
    "w": 308,
    "h": 68,
    "kind": "directory"
  },
  {
    "title": "/proc",
    "description": "Système de fichiers virtuel exposant des informations sur le noyau et les processus.",
    "examples": [
      "/proc/cpuinfo : informations sur les processeurs",
      "/proc/meminfo : état de la mémoire",
      "/proc/1234/ : informations sur le processus 1234"
    ],
    "note": "Les entrées sont produites à la demande par le noyau ; leur taille affichée peut être trompeuse.",
    "x": 1027,
    "y": 356,
    "w": 308,
    "h": 68,
    "kind": "directory"
  },
  {
    "title": "/run",
    "description": "Données volatiles utilisées par les services pendant que le système fonctionne.",
    "examples": [
      "/run/user/1000 : données de session possibles",
      "/run/lock : verrous",
      "/run/*.pid : identifiants de processus possibles"
    ],
    "note": "Ce répertoire est généralement recréé au démarrage ; il ne convient pas au stockage durable.",
    "x": 1027,
    "y": 426,
    "w": 308,
    "h": 67,
    "kind": "directory"
  },
  {
    "title": "/sys",
    "description": "Système de fichiers virtuel sysfs exposant des objets et interfaces du noyau.",
    "examples": [
      "/sys/class/net : interfaces réseau",
      "/sys/class/power_supply : batteries et alimentation",
      "/sys/block : périphériques de stockage"
    ],
    "note": "Certaines valeurs sont modifiables avec des privilèges ; elles peuvent agir directement sur le matériel.",
    "x": 1027,
    "y": 495,
    "w": 308,
    "h": 68,
    "kind": "directory"
  },
  {
    "title": "/var",
    "description": "Données susceptibles de changer pendant le fonctionnement des logiciels.",
    "examples": [
      "/var/log : journaux",
      "/var/cache : caches",
      "/var/lib : état persistant de services et applications"
    ],
    "note": "Ne supprimez pas son contenu en bloc : certaines données sont indispensables aux services.",
    "x": 1027,
    "y": 571,
    "w": 308,
    "h": 68,
    "kind": "directory"
  },
  {
    "title": "/srv",
    "description": "Données proposées par des services hébergés sur la machine.",
    "examples": [
      "/srv/www : contenu web possible",
      "/srv/ftp : fichiers FTP possibles",
      "/srv/git : dépôts Git possibles"
    ],
    "note": "Ces chemins sont des exemples : un service peut stocker ses données ailleurs.",
    "x": 1357,
    "y": 284,
    "w": 296,
    "h": 78,
    "kind": "directory"
  }
];
