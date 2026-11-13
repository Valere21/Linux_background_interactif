.pragma library
const commands = {
  "find": [
    "Recherche des fichiers en parcourant une arborescence.",
    "find ~/Documents -type f -name \"*.pdf\"",
    "La recherche dépend des droits et peut prendre du temps."
  ],
  "locate": [
    "Recherche des chemins dans une base indexée.",
    "locate rapport.pdf",
    "Un fichier récent peut manquer si la base n’a pas été mise à jour."
  ],
  "grep": [
    "Recherche des lignes correspondant à un motif.",
    "grep -n -i \"erreur\" journal.log",
    "L’option -n affiche le numéro de ligne ; -i ignore la casse."
  ],
  "rg": [
    "Recherche rapidement du texte dans des fichiers.",
    "rg -n \"erreur\" ~/Documents",
    "Ripgrep respecte normalement les règles .gitignore ; -uuu élargit la recherche."
  ],
  "cat": [
    "Affiche ou concatène le contenu de fichiers.",
    "cat fichier.txt",
    "Pour un long fichier, less est souvent plus confortable."
  ],
  "less": [
    "Parcourt du texte page par page.",
    "less fichier.txt",
    "q quitte ; /mot recherche vers l’avant."
  ],
  "head": [
    "Affiche le début d’un fichier.",
    "head -n 20 fichier.txt",
    "L’option -n choisit le nombre de lignes."
  ],
  "tail": [
    "Affiche la fin d’un fichier ou suit ses ajouts.",
    "tail -f journal.log",
    "Ctrl+C termine le suivi."
  ],
  "vim": [
    "Ouvre un éditeur de texte dans le terminal.",
    "vim fichier.txt",
    "i insère ; Échap puis :wq enregistre et quitte."
  ],
  "tar": [
    "Crée, liste ou extrait une archive.",
    "tar -czf sauvegarde.tar.gz Documents/",
    "Lister avant extraction : tar -tf sauvegarde.tar.gz."
  ],
  "gzip": [
    "Compresse ou décompresse un fichier au format gzip.",
    "gzip -k fichier.txt",
    "-k conserve l’original ; sans cette option, gzip le remplace généralement."
  ],
  "xz": [
    "Compresse ou décompresse des données au format xz.",
    "xz -k fichier.txt",
    "-k conserve l’original ; tar permet d’archiver plusieurs fichiers."
  ],
  "zip": [
    "Crée une archive ZIP, éventuellement compressée.",
    "zip -r sauvegarde.zip Documents/",
    "Vérifiez le contenu et la destination avant de partager une archive."
  ],
  "unzip": [
    "Liste ou extrait une archive ZIP.",
    "unzip -l sauvegarde.zip",
    "Utilisez unzip -d dossier archive.zip pour choisir la destination."
  ],
  "ls -l": [
    "Affiche les fichiers avec droits, propriétaire et taille.",
    "ls -l ~/Documents",
    "Les caractères initiaux décrivent le type et les permissions."
  ],
  "chmod": [
    "Modifie les permissions d’un fichier ou dossier.",
    "chmod u+x script.sh",
    "Les changements récursifs méritent une vérification préalable."
  ],
  "chown": [
    "Modifie le propriétaire et éventuellement le groupe.",
    "sudo chown utilisateur:groupe fichier",
    "Les privilèges nécessaires dépendent du changement demandé."
  ],
  "dnf": [
    "Recherche et gère les paquets des dépôts Fedora.",
    "dnf search nginx",
    "L’installation et la suppression modifient le système et demandent généralement sudo."
  ],
  "rpm": [
    "Interroge ou manipule des paquets RPM.",
    "rpm -qf /usr/bin/ls",
    "rpm identifie les paquets ; dnf gère aussi les dépendances et dépôts."
  ],
  "flatpak": [
    "Gère les applications Flatpak et leurs environnements.",
    "flatpak list --app",
    "Les applications sont isolées selon les permissions réellement accordées."
  ],
  "lsblk": [
    "Liste les périphériques de stockage et leurs partitions.",
    "lsblk -f",
    "Une partition peut ne pas être montée ; les noms de périphériques peuvent changer."
  ],
  "findmnt": [
    "Affiche et recherche les systèmes de fichiers montés.",
    "findmnt --target /home",
    "La source, le point de montage et les options figurent dans la sortie."
  ],
  "df": [
    "Affiche l’espace utilisé et disponible des systèmes de fichiers.",
    "df -hT /home",
    "-h rend les tailles lisibles ; -T affiche le type."
  ],
  "du": [
    "Estime l’espace occupé par des fichiers et dossiers.",
    "du -sh ~/Documents",
    "Le résultat dépend des droits de lecture et des options choisies."
  ],
  "udisksctl": [
    "Monte, démonte et inspecte des supports via UDisks.",
    "udisksctl status",
    "Vérifiez le bon périphérique avant de monter ou de retirer un disque."
  ],
  "mount": [
    "Rattache un système de fichiers à un point de montage.",
    "sudo mount /dev/sdb1 /mnt/usb",
    "Exemple uniquement : vérifiez la partition et préparez le point de montage avant utilisation."
  ],
  "umount": [
    "Démonte un système de fichiers.",
    "sudo umount /mnt/usb",
    "Fermez d’abord les fichiers et terminaux utilisant le montage."
  ],
  "ps": [
    "Affiche un instantané des processus.",
    "ps aux",
    "La sortie dépend des options et des droits du compte."
  ],
  "top": [
    "Affiche en continu l’activité des processus.",
    "top",
    "q permet de quitter."
  ],
  "htop": [
    "Affiche les processus dans une interface interactive.",
    "htop",
    "Le programme peut nécessiter une installation préalable."
  ],
  "kill": [
    "Envoie un signal à un processus.",
    "kill -TERM 1234",
    "Remplacez 1234 par le PID vérifié ; TERM demande un arrêt propre."
  ],
  "systemctl": [
    "Consulte et commande les services systemd.",
    "systemctl status sshd",
    "Les modifications de services système demandent souvent sudo."
  ],
  "journalctl": [
    "Consulte les journaux systemd.",
    "journalctl -u sshd -n 30",
    "L’accès à certains journaux dépend des droits."
  ],
  "ip": [
    "Affiche et configure les interfaces, adresses et routes réseau.",
    [
      "ip -br address",
      "ip route get 1.1.1.1"
    ],
    "La première commande affiche les adresses ; la seconde montre la route choisie."
  ],
  "ping": [
    "Envoie des requêtes ICMP pour observer les réponses et les délais.",
    [
      "ping -c 4 1.1.1.1",
      "ping -c 4 example.com"
    ],
    "-c 4 limite à quatre essais. Un hôte peut bloquer ICMP sans être hors ligne."
  ],
  "ss": [
    "Affiche les sockets, notamment les ports en écoute et les connexions.",
    [
      "ss -tuln",
      "ss -tan"
    ],
    "-t : TCP ; -u : UDP ; -l : écoute ; -n : nombres. Les noms de processus peuvent nécessiter plus de droits."
  ],
  "curl": [
    "Transfère des données et permet d’inspecter une réponse HTTP(S).",
    [
      "curl -I https://example.com/",
      "curl -fL -o fichier.txt https://example.com/fichier.txt"
    ],
    "-I demande les en-têtes ; -o écrit dans un fichier. Vérifier un téléchargement peut nécessiter une signature ou une somme."
  ],
  "nc": [
    "Netcat teste ou établit des connexions réseau.",
    [
      "nc -zv example.com 443",
      "nc -zv 127.0.0.1 8080"
    ],
    "-z teste sans échange de données ; -v détaille le résultat. Les options dépendent de la version."
  ],
  "netstat": [
    "Affiche notamment les ports en écoute et les connexions réseau.",
    [
      "netstat -tuln",
      "netstat -tan"
    ],
    "-t : TCP ; -u : UDP ; -l : écoute ; -n : nombres. ss est une alternative courante."
  ],
  "wget": [
    "Télécharge un fichier depuis une URL.",
    [
      "wget https://example.com/fichier.txt",
      "wget -c https://example.com/fichier.txt"
    ],
    "-c reprend un téléchargement si le serveur le permet. Les URL sont des exemples."
  ],
  "rsync": [
    "Copie et synchronise des fichiers localement ou via SSH.",
    [
      "rsync -av --dry-run source/ destination/",
      "rsync -av source/ destination/"
    ],
    "--dry-run simule ; vérifiez la source, la destination et l’effet de la barre finale."
  ],
  "scp": [
    "Copie un fichier via SSH.",
    [
      "scp fichier.txt utilisateur@serveur:~/",
      "scp utilisateur@serveur:~/rapport.txt ./"
    ],
    "Remplacez utilisateur et serveur ; la première copie envoie, la seconde récupère."
  ],
  "ssh": [
    "Ouvre une session chiffrée sur une machine distante.",
    [
      "ssh utilisateur@serveur",
      "ssh -p 2222 utilisateur@serveur"
    ],
    "-p choisit un port SSH différent. Vérifiez l’identité du serveur à la première connexion."
  ],
  ">": [
    "Redirige la sortie standard vers un fichier.",
    "commande > resultat.txt",
    "Le fichier cible est créé ou écrasé."
  ],
  ">>": [
    "Ajoute la sortie standard à la fin d’un fichier.",
    "commande >> resultat.txt",
    "Le fichier est créé s’il n’existe pas."
  ],
  "2>": [
    "Redirige la sortie d’erreur standard.",
    "commande 2> erreurs.txt",
    "Le fichier cible est créé ou écrasé."
  ],
  "|": [
    "Transmet la sortie standard d’une commande à une autre.",
    "ps aux | grep nginx",
    "La sortie d’erreur suit son chemin habituel sauf redirection."
  ],
  "tee": [
    "Copie l’entrée vers la sortie et un ou plusieurs fichiers.",
    "commande | tee resultat.txt",
    "Utilisez tee -a pour ajouter au fichier."
  ],
  "which": [
    "Recherche généralement un exécutable dans le PATH.",
    "which ls",
    "Pour les alias et commandes internes du shell, utilisez plutôt type."
  ],
  "whereis": [
    "Recherche des emplacements de binaire, source ou manuel.",
    [
      "whereis ls",
      "whereis -b ls"
    ],
    "-b limite la recherche aux binaires ; les chemins consultés dépendent du système."
  ],
  "type": [
    "Indique comment le shell interprète une commande.",
    "type ls",
    "Le résultat peut être un alias, une fonction, une commande interne ou un exécutable."
  ],
  "file": [
    "Détermine le type probable d’un fichier à partir de son contenu.",
    "file document.pdf",
    "La détection est indicative ; elle ne prouve pas qu’un fichier est sûr."
  ]
};
const modules = [
  [
    "Recherche",
    "La recherche permet de localiser des fichiers et de retrouver du texte dans leur contenu.",
    [
      "1. Repérer les fichiers : find ~/Documents -type f -name \"*.log\"",
      "2. Afficher les lignes : find ~/Documents -type f -name \"*.log\" -exec grep -nHi -- \"erreur\" {} +",
      "3. Variante avec ripgrep : rg -n -i --glob \"*.log\" \"erreur\" ~/Documents",
      "4. Chercher un nom indexé : locate journal.log"
    ],
    "grep -n indique les numéros de ligne ; locate dépend d’un index qui peut être ancien.",
    "Retrouver des journaux dans Documents et vérifier s’ils contiennent des erreurs."
  ],
  [
    "Lecture & Édition",
    "Ces commandes servent à consulter, parcourir et modifier des fichiers texte.",
    [
      "1. Lire le début : head -n 20 journal.log",
      "2. Parcourir : less journal.log",
      "3. Suivre les ajouts : tail -f journal.log",
      "4. Modifier une note : vim notes.txt"
    ],
    "Dans less, q quitte ; Ctrl+C arrête tail -f ; dans vim, Échap puis :wq enregistre et quitte.",
    "Inspecter un fichier, suivre son évolution puis modifier une note."
  ],
  [
    "Compression & Archives",
    "Une archive regroupe des fichiers ; la compression réduit généralement la taille des données.",
    [
      "1. Créer : tar -czf sauvegarde.tar.gz Documents/",
      "2. Vérifier : tar -tzf sauvegarde.tar.gz",
      "3. Préparer la destination : mkdir -p restauration",
      "4. Extraire : tar -xzf sauvegarde.tar.gz -C restauration/",
      "Autre format : zip -r sauvegarde.zip Documents/ puis unzip -l sauvegarde.zip"
    ],
    "Une archive n’est pas une sauvegarde complète tant que sa copie et sa restauration ne sont pas vérifiées.",
    "Créer une archive des documents puis contrôler son contenu avant extraction."
  ],
  [
    "Droits & Propriété",
    "Les permissions et la propriété déterminent qui peut lire, modifier ou exécuter les fichiers.",
    [
      "1. Lire les permissions : ls -l script.sh",
      "2. Ajouter le droit au propriétaire : chmod u+x script.sh",
      "3. Contrôler : ls -l script.sh",
      "Pour voir les identités : id"
    ],
    "chown change propriétaire ou groupe ; vérifiez l’utilisateur et le chemin avant toute modification.",
    "Observer les permissions d’un script avant de le rendre exécutable."
  ],
  [
    "Paquets Fedora",
    "Les paquets Fedora regroupent des logiciels et leurs métadonnées, gérés notamment avec DNF et RPM.",
    [
      "1. Rechercher : dnf search nginx",
      "2. Lire la fiche : dnf info nginx",
      "3. Trouver le paquet de ls : rpm -qf /usr/bin/ls",
      "4. Voir ses fichiers : rpm -ql coreutils"
    ],
    "Pour installer après vérification : sudo dnf install nginx. Cela modifie le système.",
    "Rechercher un programme et identifier le paquet qui fournit une commande."
  ],
  [
    "Flatpak",
    "Flatpak distribue et gère des applications avec leurs environnements et permissions.",
    [
      "1. Rechercher : flatpak search navigateur",
      "2. Lister : flatpak list --app",
      "3. Détails : flatpak info IDENTIFIANT",
      "4. Permissions : flatpak info --show-permissions IDENTIFIANT"
    ],
    "Remplacez IDENTIFIANT par celui trouvé ; l’installation et la suppression modifient les applications.",
    "Trouver une application et inspecter les permissions de celles installées."
  ],
  [
    "Disques & Espace",
    "Ces commandes identifient les supports de stockage, leurs montages et leur occupation.",
    [
      "1. Périphériques : lsblk -f",
      "2. Montage de /home : findmnt --target /home",
      "3. Espace du volume : df -hT /home",
      "4. Taille de Documents : du -sh ~/Documents"
    ],
    "df observe un système de fichiers entier ; du additionne l’espace des fichiers accessibles.",
    "Identifier les disques et distinguer l’espace d’un volume de celui d’un dossier."
  ],
  [
    "Montage & Supports",
    "Monter un système de fichiers rend les données d’un support accessibles dans un dossier de l’arborescence Linux.",
    [
      "1. Identifier le disque : lsblk -o NAME,PATH,SIZE,FSTYPE,LABEL,MOUNTPOINTS",
      "2. Examiner la partition : udisksctl info -b /dev/sdb1",
      "3. Monter : udisksctl mount -b /dev/sdb1",
      "4. Contrôler : findmnt --source /dev/sdb1",
      "5. Fermer les fichiers, puis démonter : udisksctl unmount -b /dev/sdb1"
    ],
    "/dev/sdb1 est fictif : remplacez-le après identification. Le point de montage est donné par udisksctl.",
    "Brancher une clé, identifier sa partition, la monter et la retirer."
  ],
  [
    "Processus & Ressources",
    "Un processus est un programme en cours d’exécution, qui consomme des ressources comme du processeur et de la mémoire.",
    [
      "1. Lister : ps aux",
      "2. Chercher un nom : ps aux | grep nginx",
      "3. Observer en direct : top ou htop",
      "4. Arrêter après vérification : kill -TERM PID"
    ],
    "PID est un exemple à remplacer. htop peut ne pas être installé ; q quitte top et htop.",
    "Repérer un processus, observer sa charge et demander son arrêt si nécessaire."
  ],
  [
    "Services & Journaux",
    "Un service est un programme géré en arrière-plan ; les journaux enregistrent des informations sur son activité.",
    [
      "1. État : systemctl status sshd",
      "2. Derniers messages : journalctl -u sshd -n 30",
      "3. Suivi en direct : journalctl -u sshd -f",
      "4. Arrêter le suivi avec Ctrl+C"
    ],
    "sshd est un exemple de service ; certains journaux nécessitent des droits supplémentaires.",
    "Vérifier si le service SSH fonctionne puis chercher ses messages."
  ],
  [
    "Redirections & Pipelines",
    "Les redirections dirigent les entrées et sorties des commandes ; un pipeline transmet une sortie à une autre commande.",
    [
      "1. Enregistrer : ps aux > processus.txt",
      "2. Filtrer : grep nginx processus.txt | tee resultats.txt",
      "3. Ajouter un commentaire : echo \"fin\" >> resultats.txt",
      "4. Séparer les erreurs : ls fichier-inexistant 2> erreurs.txt"
    ],
    "> et 2> écrasent leurs fichiers ; >> et tee -a ajoutent au contenu.",
    "Conserver un état des processus, filtrer son contenu et enregistrer un diagnostic."
  ],
  [
    "Aide & Diagnostic",
    "Ces outils aident à identifier un fichier et à comprendre quelle commande le shell utilise.",
    [
      "1. Identifier : file fichier.txt",
      "2. Chercher les emplacements : whereis ls",
      "3. Trouver l’exécutable dans le PATH : which ls",
      "4. Voir ce que le shell exécutera : type ls"
    ],
    "Le résultat de file est une estimation ; type reconnaît aussi les alias et fonctions du shell.",
    "Identifier un fichier et repérer les emplacements et la nature d’une commande."
  ],
  [
    "Réseau",
    "Ces commandes permettent d’inspecter la configuration réseau et de vérifier la connectivité vers un service.",
    [
      "1. Adresses locales : ip -br address",
      "2. Route vers Internet : ip route get 1.1.1.1",
      "3. Tester ICMP : ping -c 4 1.1.1.1",
      "4. Voir les ports locaux : ss -tuln",
      "5. Tester HTTP : curl -I https://example.com/"
    ],
    "example.com est un exemple. Un ping refusé ne prouve pas que le service web est inaccessible.",
    "Une page web ne répond pas. Identifier l’interface puis isoler l’étape en cause."
  ],
  [
    "Netcat & Netstat",
    "Netcat teste des connexions réseau ; Netstat et ss affichent notamment les connexions et ports locaux.",
    [
      "1. Ports TCP/UDP locaux : ss -tuln",
      "2. Vue équivalente avec netstat : netstat -tuln",
      "3. Tester TCP sur le serveur : nc -zv example.com 443",
      "4. Si nécessaire, comparer à l’adresse et au port du service"
    ],
    "Un port en écoute local et un port distant répondant correspondent à deux vérifications distinctes.",
    "Savoir si un service local écoute, puis tester un serveur distant."
  ],
  [
    "Téléchargement",
    "Un téléchargement récupère des données depuis un serveur ; une somme de contrôle aide à vérifier leur intégrité.",
    [
      "1. Télécharger : curl -fL -o fichier.tar.gz https://example.com/fichier.tar.gz",
      "2. Calculer : sha256sum fichier.tar.gz",
      "3. Comparer au SHA-256 publié par une source fiable",
      "4. Autre outil : wget -c https://example.com/fichier.tar.gz"
    ],
    "Les URL sont des exemples. Une somme de contrôle valide ne remplace pas la vérification de provenance.",
    "Récupérer un fichier publié et vérifier sa somme SHA-256."
  ],
  [
    "Transferts & Sauvegardes",
    "Ces commandes copient des fichiers localement ou vers une machine distante, notamment via SSH.",
    [
      "1. Vérifier la connexion : ssh utilisateur@serveur",
      "2. Simuler : rsync -av --dry-run ~/Documents/ utilisateur@serveur:~/sauvegarde/",
      "3. Après vérification : rsync -av ~/Documents/ utilisateur@serveur:~/sauvegarde/",
      "4. Pour un fichier seul : scp fichier.txt utilisateur@serveur:~/"
    ],
    "Remplacez utilisateur, serveur et chemins. --dry-run ne copie rien ; la barre finale de Documents/ compte.",
    "Sauvegarder Documents sur un serveur accessible par SSH."
  ]
];
const layout = [[30,242,333,55,[[44,302,69,34],[125,302,81,34],[216,302,74,34],[300,302,53,34]],["find","locate","grep","rg"]],[30,359,333,53,[[44,418,52,34],[105,418,53,34],[168,418,64,34],[238,418,52,34],[300,418,53,34]],["cat","less","head","tail","vim"]],[30,470,333,53,[[45,529,52,34],[106,529,61,34],[175,529,49,34],[233,529,49,34],[289,529,64,34]],["tar","gzip","xz","zip","unzip"]],[30,580,333,53,[[55,638,72,34],[145,638,95,34],[260,638,90,34]],["ls -l","chmod","chown"]],[390,242,282,57,[[440,324,85,37],[543,324,84,37]],["dnf","rpm"]],[390,412,282,83,[[468,506,130,40]],["flatpak"]],[697,242,291,60,[[742,309,84,36],[844,309,100,36],[760,350,71,36],[852,350,72,36]],["lsblk","findmnt","df","du"]],[697,412,291,61,[[733,486,111,37],[860,486,94,37],[787,529,116,37]],["udisksctl","mount","umount"]],[1012,242,294,55,[[1026,302,54,34],[1092,302,62,34],[1164,302,69,34],[1238,302,58,34]],["ps","top","htop","kill"]],[1012,359,294,53,[[1042,418,114,34],[1173,418,126,34]],["systemctl","journalctl"]],[1012,470,294,53,[[1030,529,46,34],[1086,529,48,34],[1144,529,48,34],[1197,529,41,34],[1247,529,49,34]],[">",">>","2>","|","tee"]],[1012,580,294,53,[[1021,638,88,34],[1118,638,68,34],[1194,638,56,34],[1257,638,43,34]],["whereis","which","type","file"]],[1334,242,310,55,[[1348,302,56,34],[1416,302,72,34],[1500,302,58,34],[1567,302,64,34]],["ip","ping","ss","curl"]],[1334,359,310,53,[[1360,418,66,34],[1444,418,99,34],[1560,418,59,34]],["nc","netstat","ss"]],[1334,470,310,53,[[1397,529,84,34],[1500,529,92,34]],["curl","wget"]],[1334,580,310,53,[[1358,638,85,34],[1460,638,76,34],[1555,638,73,34]],["rsync","scp","ssh"]]];
function entriesFor() {
    const entries = [];
    for (let i = 0; i < modules.length; ++i) {
        const module = modules[i];
        const group = layout[i];
        entries.push({title: module[0], description: module[1], scenario: module[4], examples: module[2], note: module[3],
                      x: group[0], y: group[1], w: group[2], h: group[3], kind: "module"});
        for (let j = 0; j < group[4].length; ++j) {
            const box = group[4][j];
            const name = group[5][j];
            const data = commands[name];
            entries.push({title: name, description: data[0], examples: Array.isArray(data[1]) ? data[1] : [data[1]], note: data[2],
                          x: box[0], y: box[1], w: box[2], h: box[3], kind: "command"});
        }
    }
    return entries;
}
