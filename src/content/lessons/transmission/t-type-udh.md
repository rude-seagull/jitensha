---
title: "SRAM Eagle Transmission T-Type sur UDH"
level: 4
system: "transmission"
order: 6
status: "draft"
duration: 45
objectives:
  - "Vérifier qu'un cadre est réellement compatible UDH avant toute commande"
  - "Monter un dérailleur coaxial sans patte, sans butées H et L et sans vis B, avec le setup cog"
  - "Expliquer pourquoi le réglage devient géométrique et non plus dépendant du câble ou de la patte"
  - "Déterminer la longueur de chaîne par la méthode Transmission et valider le passage en charge"
prerequisites:
  - slug: "patte-derailleur-controle-visuel"
    description: "savoir contrôler une patte de dérailleur et identifier une UDH (leçon patte-derailleur-controle-visuel)"
    system: "transmission"
  - slug: "sram-axs-appairage"
    description: "savoir installer et appairer un groupe électronique SRAM (leçon sram-axs-appairage)"
    system: "transmission"
tools:
  - "clé dynamométrique 10-60 N·m"
  - "clé Torx T25"
  - "application AXS"
  - "batterie AXS chargée"
  - "chaîne Flattop Eagle et attache PowerLock"
  - "setup cog et gabarit fournis avec le groupe"
safety:
  - "Le couple de l'axe du dérailleur T-Type est structurel : sous-serré, le dérailleur bouge et détruit cassette et chaîne en quelques sorties ; sur-serré, tu écrases l'interface du cadre. Clé dynamométrique obligatoire, valeur exacte du manuel, pas d'estimation."
exercises:
  - title: "Montage T-Type complet et validation en charge"
    summary: "Tu vérifies la compatibilité UDH du cadre, tu montes le dérailleur coaxial avec le setup cog au couple prescrit, tu détermines la longueur de chaîne par la méthode Transmission, tu appaires et tu valides par des passages sous couple."
    criteria:
      - "Compatibilité UDH du cadre vérifiée par identification de la patte d'origine, verdict écrit avant toute commande de pièce"
      - "Setup cog utilisé et dérailleur monté sur l'axe au couple exact du manuel, à plus ou moins 5 %"
      - "Longueur de chaîne déterminée par la méthode Transmission : nombre de maillons juste du premier coup, aucune reprise"
      - "Aucun réglage de butée ni de vis B effectué : procédure constructeur respectée à 100 %"
      - "Test de passage en charge : 20 passages montants sous couple, 0 saut et 0 bruit anormal"
      - "3 allers-retours complets sur les 12 pignons, nets, roue en charge sur home-trainer"
references:
  - source: "SRAM"
    subject: "Eagle Transmission installation manual, couples et setup cog"
    type: "doc"
  - source: "SRAM"
    subject: "Eagle AXS Transmission System Installation"
    type: "video"
  - source: "BikeRadar"
    subject: "how to install and set up SRAM T-Type Eagle Transmission"
    type: "article"
  - source: "SRAM"
    subject: "spécification Universal Derailleur Hanger (UDH)"
    type: "doc"
  - source: "GCN Tech"
    subject: "T-Type Transmission, ce qui change vraiment"
    type: "video"
---

