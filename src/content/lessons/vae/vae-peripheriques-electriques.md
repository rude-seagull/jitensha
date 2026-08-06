---
title: "Périphériques électriques"
level: 2
system: "vae"
order: 3
status: "draft"
duration: 30
objectives:
  - "Identifier les capteurs de coupure d'assistance intégrés aux leviers de frein et vérifier leur fonctionnement"
  - "Câbler et diagnostiquer un éclairage alimenté par la batterie de traction"
  - "Contrôler la tension et le fusible d'un circuit d'éclairage 6 V ou 12 V dérivé du système"
  - "Diagnostiquer une panne de périphérique sans mettre en cause le moteur"
prerequisites:
  - slug: "vae-identifier-architecture"
    description: "savoir identifier l'architecture d'un VAE et localiser son faisceau"
    system: "vae"
  - slug: "cable-gaine-frein-remplacement"
    description: "savoir régler et remplacer un levier de frein et sa fixation"
    system: "freinage"
tools:
  - "clés Allen 3/4/5 mm"
  - "clé dynamométrique 2-14 N·m"
  - "colliers rilsan"
  - "graisse diélectrique"
  - "lampe d'inspection"
  - "notice de câblage du système"
safety:
  - "Un capteur de coupure au frein défaillant en position « ouverte » laisse le moteur assister pendant le freinage : essai obligatoire avant toute remise en circulation."
  - "Ne jamais brancher un éclairage non prévu directement sur le pack : la sortie éclairage du contrôleur est régulée et fusible, un branchement direct crée un risque de court-circuit sur une source à très forte intensité."
exercises:
  - title: "Contrôle des coupures de frein et remise en service de l'éclairage"
    summary: "Tu valides le fonctionnement des capteurs de coupure au frein sur un VAE qui en est équipé, tu diagnostiques une panne d'éclairage alimenté par la batterie, et tu remets le circuit en état."
    criteria:
      - "1. Test de coupure réalisé sur les deux leviers, vélo au pied d'atelier roue arrière libre : l'assistance cesse en moins de 0,5 seconde à chaque actionnement, 5 essais par levier, 10 réussites sur 10."
      - "2. Course de levier au déclenchement mesurée et notée ; déclenchement obtenu avant le point de morsure des plaquettes sur les deux leviers."
      - "3. Panne d'éclairage diagnostiquée par élimination documentée en au moins 4 étapes (source, connecteur, câble, luminaire), avec conclusion écrite désignant l'organe fautif."
      - "4. Circuit remis en service : feu avant et feu arrière fonctionnels, allumage/extinction pilotés depuis l'écran ou la commande, testés 3 fois chacun."
      - "5. Faisceau refixé avec au moins 4 points d'attache, aucune boucle libre supérieure à 30 mm et aucun frottement sur pneu, fourche ou direction en butée gauche comme droite."
references:
  - source: "Bosch eBike Systems"
    subject: "raccordement de l'éclairage sur le système et caractéristiques de la sortie d'éclairage"
    type: "doc"
  - source: "Shimano"
    subject: "câblage STEPS : leviers avec contacteur d'assistance et alimentation de l'éclairage"
    type: "doc"
  - source: "Bafang"
    subject: "capteurs de coupure au frein (brake cut-off) : types hydraulique et mécanique, câblage"
    type: "doc"
  - source: "Higo"
    subject: "connecteurs d'éclairage et de capteur de frein pour systèmes de mobilité électrique"
    type: "doc"
  - source: "LEVA (Light Electric Vehicle Association)"
    subject: "circuits auxiliaires d'un light electric vehicle et protection par fusible"
    type: "doc"
---

