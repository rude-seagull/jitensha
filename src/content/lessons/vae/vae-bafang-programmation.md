---
title: "Programmer un contrôleur Bafang au câble USB-TTL"
level: 4
system: "vae"
order: 8
status: "draft"
duration: 45
objectives:
  - "Établir la liaison entre un contrôleur Bafang et un ordinateur via un câble USB-TTL et le logiciel de configuration"
  - "Sauvegarder la configuration d'origine avant toute modification et savoir la restaurer"
  - "Comprendre et régler les paramètres essentiels : protection basse tension, courant limite, tables d'assistance, diamètre de roue, nombre d'aimants, paramètres de démarrage et d'arrêt"
  - "Configurer un kit dans le respect des limites légales et documenter les valeurs appliquées"
prerequisites:
  - slug: "vae-bafang-installation"
    description: "savoir installer un kit Bafang et raccorder son faisceau"
    system: "vae"
  - slug: "vae-mesure-batterie-tension-soc"
    description: "savoir mesurer un pack et connaître ses seuils de tension"
    system: "vae"
  - description: "connaître le cadre légal EN 15194 et les catégories de véhicules"
    system: "vae"
tools:
  - "câble de programmation USB-TTL Bafang"
  - "ordinateur avec pilote série et logiciel de configuration Bafang"
  - "batterie chargée à plus de 50 %"
  - "pied d'atelier"
  - "chronomètre et compteur GPS"
  - "carnet d'atelier"
safety:
  - "Une protection basse tension (LVC) réglée trop bas conduit à la sous-décharge profonde du pack et à sa destruction : la valeur doit toujours respecter le seuil du BMS et la chimie des cellules."
  - "Un courant limite supérieur à ce que supportent le pack, le BMS et le câblage provoque une surchauffe, un déclenchement permanent ou un incendie : ne jamais dépasser la valeur admissible du maillon le plus faible de la chaîne."
  - "Modifier les paramètres pour dépasser 25 km/h d'assistance ou 250 W nominaux sur un vélo destiné à la voie publique en UE constitue un débridage : hors du cadre du cursus."
  - "Ne jamais tester une configuration modifiée en roulant avant un essai au pied d'atelier roue libre."
exercises:
  - title: "Sauvegarde, modification encadrée et validation d'une configuration"
    summary: "Tu établis la liaison, tu sauvegardes la configuration d'origine, tu appliques une configuration conforme aux limites légales et adaptée à un usage donné, puis tu la valides par mesure avant de restaurer l'original."
    criteria:
      - "1. Liaison établie et configuration d'origine intégralement sauvegardée dans un fichier daté et archivé, avant toute écriture — sauvegarde vérifiée en la rouvrant."
      - "2. Tableau des paramètres rempli avec, pour au moins 10 paramètres : nom, valeur d'origine, valeur cible, justification en une ligne."
      - "3. Protection basse tension réglée à une valeur cohérente avec la configuration du pack, avec le calcul posé (nombre de cellules en série x tension de coupure par cellule) et la valeur du BMS respectée."
      - "4. Diamètre de roue et nombre d'aimants renseignés conformément au vélo : vitesse affichée cohérente avec un GPS à ±1 km/h sur 500 m."
      - "5. Vitesse de coupure vérifiée sur route fermée : assistance coupée à 25 km/h ±1 km/h, 3 essais concordants."
      - "6. Comportement de démarrage réglé et validé : temps entre le premier coup de pédale et le début de l'assistance mesuré au chronomètre, valeur cible atteinte à ±0,3 seconde sur 3 essais."
      - "7. Temps de coupure à l'arrêt du pédalage mesuré : inférieur ou égal à 1 seconde sur 3 essais sur 3."
      - "8. Configuration d'origine restaurée en fin de séance et vérifiée par relecture : 100 % des paramètres identiques à la sauvegarde."
references:
  - source: "Bafang"
    subject: "logiciel de configuration des contrôleurs BBS et description des paramètres Basic, Pedal Assist et Throttle"
    type: "outil"
  - source: "Luna Cycle"
    subject: "guide de programmation des kits BBS01 / BBS02 / BBSHD et valeurs recommandées"
    type: "article"
  - source: "Chaîne spécialisée VAE (YouTube)"
    subject: "programmation d'un contrôleur Bafang : paramètres expliqués un par un"
    type: "video"
  - source: "Endless Sphere"
    subject: "retours d'expérience communautaires sur les réglages de contrôleurs Bafang et leurs limites"
    type: "article"
  - source: "Norme EN 15194"
    subject: "exigences de coupure d'assistance et de puissance applicables à un cycle à assistance électrique"
    type: "doc"
---

