---
title: "Mesurer un pack : tension et état de charge"
level: 3
system: "vae"
order: 2
status: "draft"
duration: 40
objectives:
  - "Mesurer la tension d'un pack aux bornes de sortie et sur le connecteur de décharge"
  - "Convertir tension mesurée et état de charge pour un pack 10S (36 V), 12S (43,2 V) et 13S (48 V)"
  - "Détecter une coupure BMS et distinguer un pack déchargé d'un pack protégé ou mort"
  - "Décider, sur la base de mesures, si un pack part en diagnostic approfondi, en recharge ou en filière de collecte"
prerequisites:
  - slug: "vae-multimetre-prise-en-main"
    description: "savoir configurer et utiliser un multimètre en tension continue en sécurité"
    system: "vae"
  - slug: "vae-securite-li-ion-incident"
    description: "connaître les règles de sécurité Li-ion et la reconnaissance d'un pack compromis"
    system: "vae"
tools:
  - "multimètre numérique"
  - "pointes de test fines"
  - "support isolant et incombustible"
  - "chargeur d'origine"
  - "tableau de conversion tension/état de charge"
  - "carnet d'atelier"
safety:
  - "Ne jamais court-circuiter les bornes de sortie d'un pack, même une fraction de seconde : l'arc peut souder les pointes et amorcer un emballement."
  - "Un pack qui affiche 0 V en sortie n'est pas forcément vide : c'est souvent un BMS en protection. Ne pas conclure « pack mort » et ne surtout pas tenter de le réveiller par une source externe non maîtrisée."
  - "Un pack dont la tension par cellule est descendue sous 2,5 V est en sous-décharge profonde : sa recharge peut provoquer un court-circuit interne. Ne pas le recharger, le mettre en filière."
exercises:
  - title: "Campagne de mesure sur 3 packs et diagnostic argumenté"
    summary: "Tu mesures trois packs d'âges et d'états différents, tu établis pour chacun tension mesurée, tension par cellule déduite, état de charge estimé, et tu rends un diagnostic écrit avec décision."
    criteria:
      - "1. Configuration série (10S / 12S / 13S) déterminée correctement pour 3 packs sur 3, à partir de la tension nominale imprimée sur l'étiquette."
      - "2. Tension de sortie mesurée sur 3 packs, chaque mesure répétée 3 fois avec une dispersion inférieure ou égale à 0,05 V."
      - "3. Tension moyenne par cellule calculée et notée pour chaque pack, avec 2 décimales, et positionnée sur le tableau de conversion (4,20 V = 100 %, ~3,70 V ≈ 50 %, 3,00 V = seuil bas)."
      - "4. État de charge estimé par la mesure comparé à l'indication de l'écran ou des LED du pack : écart relevé et commenté, avec une explication écrite si l'écart dépasse 15 points."
      - "5. Diagnostic écrit rendu pour chaque pack en 5 lignes maximum, se terminant par une décision explicite : remise en service, diagnostic approfondi, ou mise en filière de collecte."
      - "6. Au moins un cas de coupure BMS reconnu ou, à défaut, description écrite des trois signes qui l'auraient distingué d'un pack vide."
references:
  - source: "Battery University"
    subject: "courbe tension/état de charge des cellules lithium-ion et interprétation en circuit ouvert"
    type: "article"
  - source: "LEVA (Light Electric Vehicle Association)"
    subject: "contrôle de la tension d'un pack et rôle protecteur du BMS"
    type: "doc"
  - source: "Grin Technologies"
    subject: "diagnostic de packs de vélos électriques : tensions de référence et coupure BMS"
    type: "article"
  - source: "Bosch eBike Systems"
    subject: "caractéristiques électriques des batteries PowerPack et PowerTube"
    type: "doc"
  - source: "Bafang"
    subject: "spécifications des packs 36 V et 48 V et seuils de protection basse tension"
    type: "doc"
---

