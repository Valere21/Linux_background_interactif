.pragma library
const commands = {
  "find": [
    "Recherche des fichiers en parcourant une arborescence.",
    [
      "find ~/Documents -type f -name \"*.pdf\" : liste les fichiers PDF situés dans Documents et ses sous-dossiers."
    ],
    "La recherche dépend des droits et peut prendre du temps."
  ],
  "locate": [
    "Recherche des chemins dans une base indexée.",
    [
      "locate rapport.pdf : affiche les chemins indexés contenant rapport.pdf."
    ],
    "Un fichier récent peut manquer si la base n’a pas été mise à jour."
  ],
  "grep": [
    "Recherche des lignes correspondant à un motif.",
    [
      "grep -n -i \"erreur\" journal.log : affiche les lignes contenant erreur, sans tenir compte de la casse, avec leur numéro."
    ],
    "L’option -n affiche le numéro de ligne ; -i ignore la casse."
  ],
  "rg": [
    "Recherche rapidement du texte dans des fichiers.",
    [
      "rg -n \"erreur\" ~/Documents : recherche erreur dans Documents et affiche les fichiers et numéros de ligne correspondants."
    ],
    "Ripgrep respecte normalement les règles .gitignore ; -uuu élargit la recherche."
  ],
  "cat": [
    "Affiche ou concatène le contenu de fichiers.",
    [
      "cat fichier.txt : affiche tout le contenu de fichier.txt dans le terminal."
    ],
    "Pour un long fichier, less est souvent plus confortable."
  ],
  "less": [
    "Parcourt du texte page par page.",
    [
      "less fichier.txt : ouvre fichier.txt pour le parcourir page par page."
    ],
    "q quitte ; /mot recherche vers l’avant."
  ],
  "head": [
    "Affiche le début d’un fichier.",
    [
      "head -n 20 fichier.txt : affiche les vingt premières lignes du fichier."
    ],
    "L’option -n choisit le nombre de lignes."
  ],
  "tail": [
    "Affiche la fin d’un fichier ou suit ses ajouts.",
    [
      "tail -f journal.log : affiche la fin du journal et attend les nouvelles lignes."
    ],
    "Ctrl+C termine le suivi."
  ],
  "vim": [
    "Ouvre un éditeur de texte dans le terminal.",
    [
      "vim fichier.txt : ouvre fichier.txt dans l’éditeur Vim."
    ],
    "i insère ; Échap puis :wq enregistre et quitte."
  ],
  "tar": [
    "Crée, liste ou extrait une archive.",
    [
      "tar -czf sauvegarde.tar.gz Documents/ : crée une archive gzip contenant le dossier Documents."
    ],
    "Lister avant extraction : tar -tf sauvegarde.tar.gz."
  ],
  "gzip": [
    "Compresse ou décompresse un fichier au format gzip.",
    [
      "gzip -k fichier.txt : crée fichier.txt.gz en conservant fichier.txt."
    ],
    "-k conserve l’original ; sans cette option, gzip le remplace généralement."
  ],
  "xz": [
    "Compresse ou décompresse des données au format xz.",
    [
      "xz -k fichier.txt : crée fichier.txt.xz en conservant fichier.txt."
    ],
    "-k conserve l’original ; tar permet d’archiver plusieurs fichiers."
  ],
  "zip": [
    "Crée une archive ZIP, éventuellement compressée.",
    [
      "zip -r sauvegarde.zip Documents/ : crée une archive ZIP du dossier Documents et de son contenu."
    ],
    "Vérifiez le contenu et la destination avant de partager une archive."
  ],
  "unzip": [
    "Liste ou extrait une archive ZIP.",
    [
      "unzip -l sauvegarde.zip : liste le contenu de l’archive sans l’extraire."
    ],
    "Utilisez unzip -d dossier archive.zip pour choisir la destination."
  ],
  "ls -l": [
    "Affiche les fichiers avec droits, propriétaire et taille.",
    [
      "ls -l ~/Documents : affiche les entrées de Documents avec leurs droits, propriétaires et tailles."
    ],
    "Les caractères initiaux décrivent le type et les permissions."
  ],
  "chmod": [
    "Modifie les permissions d’un fichier ou dossier.",
    [
      "chmod u+x script.sh : ajoute au propriétaire le droit d’exécuter script.sh."
    ],
    "Les changements récursifs méritent une vérification préalable."
  ],
  "chown": [
    "Modifie le propriétaire et éventuellement le groupe.",
    [
      "sudo chown utilisateur:groupe fichier : attribue le fichier à l’utilisateur et au groupe indiqués."
    ],
    "Les privilèges nécessaires dépendent du changement demandé."
  ],
  "dnf": [
    "Recherche et gère les paquets des dépôts Fedora.",
    [
      "dnf search nginx : affiche les paquets des dépôts correspondant au terme nginx."
    ],
    "L’installation et la suppression modifient le système et demandent généralement sudo."
  ],
  "rpm": [
    "Interroge ou manipule des paquets RPM.",
    [
      "rpm -qf /usr/bin/ls : indique quel paquet RPM installé fournit /usr/bin/ls."
    ],
    "rpm identifie les paquets ; dnf gère aussi les dépendances et dépôts."
  ],
  "flatpak": [
    "Gère les applications Flatpak et leurs environnements.",
    [
      "flatpak list --app : affiche les applications Flatpak installées."
    ],
    "Les applications sont isolées selon les permissions réellement accordées."
  ],
  "lsblk": [
    "Liste les périphériques de stockage et leurs partitions.",
    [
      "lsblk -f : affiche les disques, partitions, systèmes de fichiers et points de montage connus."
    ],
    "Une partition peut ne pas être montée ; les noms de périphériques peuvent changer."
  ],
  "findmnt": [
    "Affiche et recherche les systèmes de fichiers montés.",
    [
      "findmnt --target /home : affiche le système de fichiers qui contient /home."
    ],
    "La source, le point de montage et les options figurent dans la sortie."
  ],
  "df": [
    "Affiche l’espace utilisé et disponible des systèmes de fichiers.",
    [
      "df -hT /home : affiche le type et l’espace disponible du système de fichiers contenant /home."
    ],
    "-h rend les tailles lisibles ; -T affiche le type."
  ],
  "du": [
    "Estime l’espace occupé par des fichiers et dossiers.",
    [
      "du -sh ~/Documents : affiche une estimation lisible de l’espace occupé par Documents."
    ],
    "Le résultat dépend des droits de lecture et des options choisies."
  ],
  "udisksctl": [
    "Monte, démonte et inspecte des supports via UDisks.",
    [
      "udisksctl status : affiche les périphériques de stockage reconnus par UDisks."
    ],
    "Vérifiez le bon périphérique avant de monter ou de retirer un disque."
  ],
  "mount": [
    "Rattache un système de fichiers à un point de montage.",
    [
      "sudo mount /dev/sdb1 /mnt/usb : monte la partition indiquée sur /mnt/usb, si le périphérique et le dossier existent."
    ],
    "Exemple uniquement : vérifiez la partition et préparez le point de montage avant utilisation."
  ],
  "umount": [
    "Démonte un système de fichiers.",
    [
      "sudo umount /mnt/usb : démonte le système de fichiers monté sur /mnt/usb."
    ],
    "Fermez d’abord les fichiers et terminaux utilisant le montage."
  ],
  "ps": [
    "Affiche un instantané des processus.",
    [
      "ps aux : affiche un instantané détaillé des processus visibles."
    ],
    "La sortie dépend des options et des droits du compte."
  ],
  "top": [
    "Affiche en continu l’activité des processus.",
    [
      "top : affiche et actualise l’activité des processus dans le terminal."
    ],
    "q permet de quitter."
  ],
  "htop": [
    "Affiche les processus dans une interface interactive.",
    [
      "htop : ouvre une vue interactive de l’activité des processus."
    ],
    "Le programme peut nécessiter une installation préalable."
  ],
  "kill": [
    "Envoie un signal à un processus.",
    [
      "kill -TERM 1234 : envoie au processus 1234 une demande d’arrêt normale."
    ],
    "Remplacez 1234 par le PID vérifié ; TERM demande un arrêt propre."
  ],
  "systemctl": [
    "Consulte et commande les services systemd.",
    [
      "systemctl status sshd : affiche l’état et les derniers messages disponibles du service sshd."
    ],
    "Les modifications de services système demandent souvent sudo."
  ],
  "journalctl": [
    "Consulte les journaux systemd.",
    [
      "journalctl -u sshd -n 30 : affiche les 30 dernières entrées disponibles du journal du service sshd."
    ],
    "L’accès à certains journaux dépend des droits."
  ],
  "ip": [
    "Affiche et configure les interfaces, adresses et routes réseau.",
    [
      "ip -br address : affiche les interfaces réseau et leurs adresses sous une forme compacte.",
      "ip route get 1.1.1.1 : affiche la route que le système choisirait pour cette destination."
    ],
    "La première commande affiche les adresses ; la seconde montre la route choisie."
  ],
  "ping": [
    "Envoie des requêtes ICMP pour observer les réponses et les délais.",
    [
      "ping -c 4 1.1.1.1 : envoie quatre requêtes ICMP à cette adresse et affiche les réponses éventuelles.",
      "ping -c 4 example.com : résout le nom puis envoie quatre requêtes ICMP à l’adresse obtenue."
    ],
    "-c 4 limite à quatre essais. Un hôte peut bloquer ICMP sans être hors ligne."
  ],
  "ss": [
    "Affiche les sockets, notamment les ports en écoute et les connexions.",
    [
      "ss -tuln : liste les sockets TCP et UDP en écoute avec leurs ports numériques.",
      "ss -tan : affiche les sockets TCP avec des adresses et ports numériques."
    ],
    "-t : TCP ; -u : UDP ; -l : écoute ; -n : nombres. Les noms de processus peuvent nécessiter plus de droits."
  ],
  "curl": [
    "Transfère des données et permet d’inspecter une réponse HTTP(S).",
    [
      "curl -I https://example.com/ : demande et affiche les en-têtes HTTP de la réponse.",
      "curl -fL -o fichier.txt https://example.com/fichier.txt : suit les redirections et enregistre la réponse dans fichier.txt, en signalant les erreurs HTTP courantes."
    ],
    "-I demande les en-têtes ; -o écrit dans un fichier. Vérifier un téléchargement peut nécessiter une signature ou une somme."
  ],
  "nc": [
    "Netcat teste ou établit des connexions réseau.",
    [
      "nc -zv example.com 443 : teste une connexion TCP au port 443 de cet hôte et affiche le résultat.",
      "nc -zv 127.0.0.1 8080 : teste si un service TCP local répond sur le port 8080."
    ],
    "-z teste sans échange de données ; -v détaille le résultat. Les options dépendent de la version."
  ],
  "netstat": [
    "Affiche notamment les ports en écoute et les connexions réseau.",
    [
      "netstat -tuln : liste les sockets TCP et UDP en écoute avec leurs ports numériques.",
      "netstat -tan : affiche les sockets TCP avec des adresses et ports numériques."
    ],
    "-t : TCP ; -u : UDP ; -l : écoute ; -n : nombres. ss est une alternative courante."
  ],
  "wget": [
    "Télécharge un fichier depuis une URL.",
    [
      "wget https://example.com/fichier.txt : télécharge le fichier dans le répertoire courant.",
      "wget -c https://example.com/fichier.txt : tente de reprendre le téléchargement partiel existant."
    ],
    "-c reprend un téléchargement si le serveur le permet. Les URL sont des exemples."
  ],
  "rsync": [
    "Copie et synchronise des fichiers localement ou via SSH.",
    [
      "rsync -av --dry-run source/ destination/ : montre les fichiers qui seraient copiés sans les modifier.",
      "rsync -av source/ destination/ : synchronise le contenu de source dans destination en conservant les attributs pris en charge."
    ],
    "--dry-run simule ; vérifiez la source, la destination et l’effet de la barre finale."
  ],
  "scp": [
    "Copie un fichier via SSH.",
    [
      "scp fichier.txt utilisateur@serveur:~/ : copie le fichier local vers le dossier personnel distant.",
      "scp utilisateur@serveur:~/rapport.txt ./ : copie le fichier distant vers le répertoire local courant."
    ],
    "Remplacez utilisateur et serveur ; la première copie envoie, la seconde récupère."
  ],
  "ssh": [
    "Ouvre une session chiffrée sur une machine distante.",
    [
      "ssh utilisateur@serveur : ouvre une session distante pour l’utilisateur indiqué.",
      "ssh -p 2222 utilisateur@serveur : se connecte au serveur SSH sur le port 2222."
    ],
    "-p choisit un port SSH différent. Vérifiez l’identité du serveur à la première connexion."
  ],
  ">": [
    "Redirige la sortie standard vers un fichier.",
    [
      "commande > resultat.txt : écrit la sortie standard de commande dans resultat.txt, en remplaçant son contenu."
    ],
    "Le fichier cible est créé ou écrasé."
  ],
  ">>": [
    "Ajoute la sortie standard à la fin d’un fichier.",
    [
      "commande >> resultat.txt : ajoute la sortie standard de commande à la fin de resultat.txt."
    ],
    "Le fichier est créé s’il n’existe pas."
  ],
  "2>": [
    "Redirige la sortie d’erreur standard.",
    [
      "commande 2> erreurs.txt : écrit la sortie d’erreur de commande dans erreurs.txt, en remplaçant son contenu."
    ],
    "Le fichier cible est créé ou écrasé."
  ],
  "|": [
    "Transmet la sortie standard d’une commande à une autre.",
    [
      "ps aux | grep nginx : transmet la liste des processus à grep, qui affiche les lignes contenant nginx."
    ],
    "La sortie d’erreur suit son chemin habituel sauf redirection."
  ],
  "tee": [
    "Lit les données reçues et les affiche à l’écran tout en les enregistrant dans un ou plusieurs fichiers.",
    [
      "ls -l ~/Documents | tee liste.txt : affiche la liste des fichiers et l’enregistre dans liste.txt.",
      "date | tee -a journal.txt : affiche la date et l’ajoute à journal.txt."
    ],
    "Par défaut, tee écrase le fichier ; -a ajoute à sa fin. Les erreurs de la commande précédente ne sont pas capturées sans redirection supplémentaire."
  ],
  "which": [
    "Recherche généralement un exécutable dans le PATH.",
    [
      "which ls : affiche le chemin du premier exécutable ls trouvé dans le PATH."
    ],
    "Pour les alias et commandes internes du shell, utilisez plutôt type."
  ],
  "whereis": [
    "Recherche des emplacements de binaire, source ou manuel.",
    [
      "whereis ls : affiche les emplacements connus associés au binaire, aux sources et au manuel de ls.",
      "whereis -b ls : limite la recherche aux emplacements du binaire ls."
    ],
    "-b limite la recherche aux binaires ; les chemins consultés dépendent du système."
  ],
  "type": [
    "Indique comment le shell interprète une commande.",
    [
      "type ls : indique comment le shell courant interprète la commande ls."
    ],
    "Le résultat peut être un alias, une fonction, une commande interne ou un exécutable."
  ],
  "file": [
    "Détermine le type probable d’un fichier à partir de son contenu.",
    [
      "file document.pdf : affiche le type probable de document.pdf à partir de son contenu."
    ],
    "La détection est indicative ; elle ne prouve pas qu’un fichier est sûr."
  ]
};
const modules = [
  [
    "Recherche",
    "La recherche permet de localiser des fichiers et de retrouver du texte dans leur contenu.",
    [
      "find ~/Documents -type f -name \"*.log\" : liste les fichiers journaux de Documents.",
      "find ~/Documents -type f -name \"*.log\" -exec grep -nHi -- \"erreur\" {} + : affiche les lignes contenant erreur dans les journaux trouvés.",
      "rg -n -i --glob \"*.log\" \"erreur\" ~/Documents : réalise une recherche similaire avec ripgrep.",
      "locate journal.log : affiche les chemins indexés contenant journal.log."
    ],
    "grep -n indique les numéros de ligne ; locate dépend d’un index qui peut être ancien.",
    "Retrouver des journaux dans Documents et vérifier s’ils contiennent des erreurs."
  ],
  [
    "Lecture & Édition",
    "Ces commandes servent à consulter, parcourir et modifier des fichiers texte.",
    [
      "head -n 20 journal.log : affiche les vingt premières lignes du journal.",
      "less journal.log : ouvre le journal pour le parcourir.",
      "tail -f journal.log : suit les nouvelles lignes du journal.",
      "vim notes.txt : ouvre une note pour la modifier."
    ],
    "Dans less, q quitte ; Ctrl+C arrête tail -f ; dans vim, Échap puis :wq enregistre et quitte.",
    "Inspecter un fichier, suivre son évolution puis modifier une note."
  ],
  [
    "Compression & Archives",
    "Une archive regroupe des fichiers ; la compression réduit généralement la taille des données.",
    [
      "tar -czf sauvegarde.tar.gz Documents/ : crée une archive compressée du dossier Documents.",
      "tar -tzf sauvegarde.tar.gz : liste les fichiers de l’archive.",
      "mkdir -p restauration : crée le dossier de destination s’il manque.",
      "tar -xzf sauvegarde.tar.gz -C restauration/ : extrait l’archive dans ce dossier.",
      "zip -r sauvegarde.zip Documents/ : crée une archive ZIP du même dossier.",
      "unzip -l sauvegarde.zip : liste le contenu de l’archive ZIP."
    ],
    "Une archive n’est pas une sauvegarde complète tant que sa copie et sa restauration ne sont pas vérifiées.",
    "Créer une archive des documents puis contrôler son contenu avant extraction."
  ],
  [
    "Droits & Propriété",
    "Les permissions et la propriété déterminent qui peut lire, modifier ou exécuter les fichiers.",
    [
      "ls -l script.sh : affiche les droits et le propriétaire du script.",
      "chmod u+x script.sh : ajoute le droit d’exécution au propriétaire.",
      "ls -l script.sh : affiche les droits après modification.",
      "id : affiche l’identité et les groupes du compte courant."
    ],
    "chown change propriétaire ou groupe ; vérifiez l’utilisateur et le chemin avant toute modification.",
    "Observer les permissions d’un script avant de le rendre exécutable."
  ],
  [
    "Paquets Fedora",
    "Les paquets Fedora regroupent des logiciels et leurs métadonnées, gérés notamment avec DNF et RPM.",
    [
      "dnf search nginx : recherche les paquets correspondant à nginx.",
      "dnf info nginx : affiche les informations connues sur le paquet nginx.",
      "rpm -qf /usr/bin/ls : indique quel paquet installé fournit ls.",
      "rpm -ql coreutils : liste les fichiers du paquet coreutils installé."
    ],
    "Pour installer après vérification : sudo dnf install nginx. Cela modifie le système.",
    "Rechercher un programme et identifier le paquet qui fournit une commande."
  ],
  [
    "Flatpak",
    "Flatpak distribue et gère des applications avec leurs environnements et permissions.",
    [
      "flatpak search navigateur : recherche les applications correspondant à navigateur.",
      "flatpak list --app : affiche les applications Flatpak installées.",
      "flatpak info IDENTIFIANT : affiche les informations de l’application indiquée.",
      "flatpak info --show-permissions IDENTIFIANT : affiche les permissions déclarées de cette application."
    ],
    "Remplacez IDENTIFIANT par celui trouvé ; l’installation et la suppression modifient les applications.",
    "Trouver une application et inspecter les permissions de celles installées."
  ],
  [
    "Disques & Espace",
    "Ces commandes identifient les supports de stockage, leurs montages et leur occupation.",
    [
      "lsblk -f : liste les disques, partitions, systèmes de fichiers et montages connus.",
      "findmnt --target /home : indique le montage qui contient /home.",
      "df -hT /home : affiche l’espace disponible et le type du système de fichiers contenant /home.",
      "du -sh ~/Documents : estime l’espace occupé par Documents."
    ],
    "df observe un système de fichiers entier ; du additionne l’espace des fichiers accessibles.",
    "Identifier les disques et distinguer l’espace d’un volume de celui d’un dossier."
  ],
  [
    "Montage & Supports",
    "Monter un système de fichiers rend les données d’un support accessibles dans un dossier de l’arborescence Linux.",
    [
      "lsblk -o NAME,PATH,SIZE,FSTYPE,LABEL,MOUNTPOINTS : affiche les disques et aide à identifier la partition amovible.",
      "udisksctl info -b /dev/sdb1 : affiche les informations connues sur la partition choisie.",
      "udisksctl mount -b /dev/sdb1 : monte cette partition et affiche son point de montage.",
      "findmnt --source /dev/sdb1 : affiche le montage associé à la partition.",
      "udisksctl unmount -b /dev/sdb1 : démonte la partition après fermeture des fichiers utilisés."
    ],
    "/dev/sdb1 est fictif : remplacez-le après identification. Le point de montage est donné par udisksctl.",
    "Brancher une clé, identifier sa partition, la monter et la retirer."
  ],
  [
    "Processus & Ressources",
    "Un processus est un programme en cours d’exécution, qui consomme des ressources comme du processeur et de la mémoire.",
    [
      "ps aux : affiche un instantané des processus visibles.",
      "ps aux | grep nginx : affiche les lignes de processus contenant nginx.",
      "top : présente l’activité des processus en direct.",
      "htop : présente une vue interactive si le programme est installé.",
      "kill -TERM PID : demande l’arrêt normal du processus dont le PID a été vérifié."
    ],
    "PID est un exemple à remplacer. htop peut ne pas être installé ; q quitte top et htop.",
    "Repérer un processus, observer sa charge et demander son arrêt si nécessaire."
  ],
  [
    "Services & Journaux",
    "Un service est un programme géré en arrière-plan ; les journaux enregistrent des informations sur son activité.",
    [
      "systemctl status sshd : affiche l’état du service SSH et ses messages récents.",
      "journalctl -u sshd -n 30 : affiche les trente dernières entrées disponibles du service.",
      "journalctl -u sshd -f : suit les nouvelles entrées du service jusqu’à Ctrl+C."
    ],
    "sshd est un exemple de service ; certains journaux nécessitent des droits supplémentaires.",
    "Vérifier si le service SSH fonctionne puis chercher ses messages."
  ],
  [
    "Redirections & Pipelines",
    "Les redirections dirigent les entrées et sorties des commandes ; un pipeline transmet une sortie à une autre commande.",
    [
      "ps aux > processus.txt : écrit la liste des processus dans processus.txt.",
      "grep nginx processus.txt | tee resultats.txt : affiche les lignes contenant nginx et les enregistre dans resultats.txt.",
      "echo \"fin\" >> resultats.txt : ajoute une ligne à resultats.txt.",
      "ls fichier-inexistant 2> erreurs.txt : enregistre le message d’erreur dans erreurs.txt."
    ],
    "> et 2> écrasent leurs fichiers ; >> et tee -a ajoutent au contenu.",
    "Conserver un état des processus, filtrer son contenu et enregistrer un diagnostic."
  ],
  [
    "Aide & Diagnostic",
    "Ces outils aident à identifier un fichier et à comprendre quelle commande le shell utilise.",
    [
      "file fichier.txt : indique le type probable du fichier.",
      "whereis ls : affiche les emplacements connus associés à ls.",
      "which ls : affiche le chemin du premier exécutable ls trouvé dans le PATH.",
      "type ls : indique comment le shell interprète ls."
    ],
    "Le résultat de file est une estimation ; type reconnaît aussi les alias et fonctions du shell.",
    "Identifier un fichier et repérer les emplacements et la nature d’une commande."
  ],
  [
    "Réseau",
    "Ces commandes permettent d’inspecter la configuration réseau et de vérifier la connectivité vers un service.",
    [
      "ip -br address : affiche les interfaces et adresses locales.",
      "ip route get 1.1.1.1 : affiche la route choisie vers cette adresse.",
      "ping -c 4 1.1.1.1 : envoie quatre requêtes ICMP et affiche les réponses éventuelles.",
      "ss -tuln : liste les ports TCP et UDP locaux en écoute.",
      "curl -I https://example.com/ : demande les en-têtes HTTP du serveur."
    ],
    "example.com est un exemple. Un ping refusé ne prouve pas que le service web est inaccessible.",
    "Une page web ne répond pas. Identifier l’interface puis isoler l’étape en cause."
  ],
  [
    "Netcat & Netstat",
    "Netcat teste des connexions réseau ; Netstat et ss affichent notamment les connexions et ports locaux.",
    [
      "ss -tuln : liste les ports TCP et UDP locaux en écoute.",
      "netstat -tuln : affiche une liste comparable avec Netstat.",
      "nc -zv example.com 443 : teste une connexion TCP distante au port 443.",
      "nc -zv 127.0.0.1 8080 : teste un service TCP local sur le port 8080."
    ],
    "Un port en écoute local et un port distant répondant correspondent à deux vérifications distinctes.",
    "Savoir si un service local écoute, puis tester un serveur distant."
  ],
  [
    "Téléchargement",
    "Un téléchargement récupère des données depuis un serveur ; une somme de contrôle aide à vérifier leur intégrité.",
    [
      "curl -fL -o fichier.tar.gz https://example.com/fichier.tar.gz : télécharge la réponse dans fichier.tar.gz en suivant les redirections.",
      "sha256sum fichier.tar.gz : calcule et affiche la somme SHA-256 du fichier ; comparez-la à la valeur publiée.",
      "wget -c https://example.com/fichier.tar.gz : tente de reprendre un téléchargement partiel avec Wget."
    ],
    "Les URL sont des exemples. Une somme de contrôle valide ne remplace pas la vérification de provenance.",
    "Récupérer un fichier publié et vérifier sa somme SHA-256."
  ],
  [
    "Transferts & Sauvegardes",
    "Ces commandes copient des fichiers localement ou vers une machine distante, notamment via SSH.",
    [
      "ssh utilisateur@serveur : ouvre une session SSH pour vérifier la connexion.",
      "rsync -av --dry-run ~/Documents/ utilisateur@serveur:~/sauvegarde/ : affiche ce qui serait copié, sans effectuer la copie.",
      "rsync -av ~/Documents/ utilisateur@serveur:~/sauvegarde/ : synchronise le contenu de Documents vers la destination distante.",
      "scp fichier.txt utilisateur@serveur:~/ : copie un fichier local vers le dossier personnel distant."
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
