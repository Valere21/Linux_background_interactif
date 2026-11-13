.pragma library

// These are illustrative uses, not exclusive filesystem locations.
const links = {
    "Recherche": ["/home", "/root", "/tmp"],
    "Lecture & Édition": ["/home", "/root", "/etc", "/var"],
    "Compression & Archives": ["/home", "/root", "/tmp"],
    "Droits & Propriété": ["/home", "/root", "/srv"],
    "Paquets Fedora": ["/usr", "/bin", "/sbin", "/lib", "/etc", "/var"],
    "Flatpak": ["/home", "/var"],
    "Disques & Espace": ["/dev", "/media", "/mnt", "/run", "/boot"],
    "Montage & Supports": ["/dev", "/media", "/mnt", "/run"],
    "Processus & Ressources": ["/proc", "/sys", "/run"],
    "Services & Journaux": ["/etc", "/run", "/var"],
    "Redirections & Pipelines": ["/home", "/tmp", "/var"],
    "Aide & Diagnostic": ["/usr", "/bin", "/sbin", "/home"],
    "Réseau": ["/sys", "/etc", "/run"],
    "Netcat & Netstat": ["/sys", "/proc", "/etc"],
    "Téléchargement": ["/home", "/tmp"],
    "Transferts & Sauvegardes": ["/home", "/root", "/srv", "/mnt"],
    "find": ["/home", "/root", "/tmp"], "locate": ["/home", "/usr"],
    "grep": ["/home", "/etc", "/var"], "rg": ["/home", "/etc", "/var"],
    "cat": ["/home", "/etc", "/proc"], "less": ["/home", "/etc", "/var"],
    "head": ["/home", "/var"], "tail": ["/home", "/var"], "vim": ["/home", "/etc"],
    "tar": ["/home", "/tmp", "/mnt"], "gzip": ["/home", "/tmp"], "xz": ["/home", "/tmp"],
    "zip": ["/home", "/tmp"], "unzip": ["/home", "/tmp"],
    "ls -l": ["/home", "/root", "/tmp"], "chmod": ["/home", "/root", "/srv"],
    "chown": ["/home", "/root", "/srv"], "dnf": ["/usr", "/etc", "/var"],
    "rpm": ["/usr", "/bin", "/sbin", "/lib", "/var"], "flatpak": ["/home", "/var"],
    "lsblk": ["/dev", "/sys"], "findmnt": ["/dev", "/media", "/mnt", "/run", "/boot"],
    "df": ["/home", "/media", "/mnt"], "du": ["/home", "/var", "/tmp"],
    "udisksctl": ["/dev", "/media", "/run"], "mount": ["/dev", "/media", "/mnt", "/run"],
    "umount": ["/dev", "/media", "/mnt", "/run"],
    "ps": ["/proc"], "top": ["/proc"], "htop": ["/proc"], "kill": ["/proc"],
    "systemctl": ["/etc", "/run", "/usr"], "journalctl": ["/var", "/run"],
    "ip": ["/sys", "/etc"], "ping": ["/etc"], "ss": ["/proc", "/sys"],
    "curl": ["/home", "/tmp"], "nc": ["/proc", "/sys"], "netstat": ["/proc", "/sys"],
    "wget": ["/home", "/tmp"], "rsync": ["/home", "/root", "/srv", "/mnt"],
    "scp": ["/home", "/root", "/srv"], "ssh": ["/home", "/root", "/etc"],
    ">": ["/home", "/tmp"], ">>": ["/home", "/tmp"], "2>": ["/home", "/tmp"],
    "|": ["/proc", "/var"], "tee": ["/home", "/tmp"],
    "whereis": ["/usr", "/bin", "/sbin"], "which": ["/usr", "/bin", "/sbin"],
    "type": ["/usr", "/bin", "/sbin"], "file": ["/home", "/tmp"]
}

function related(entry) {
    if (!entry) return []
    if (entry.kind === "module" || entry.kind === "command") return links[entry.title] || []
    if (entry.kind !== "directory" || entry.title === "/") return []
    return Object.keys(links).filter(name => links[name].includes(entry.title))
}

function onHierarchy(entry) {
    return entry && (entry.kind === "directory" || entry.kind === "theme")
}
