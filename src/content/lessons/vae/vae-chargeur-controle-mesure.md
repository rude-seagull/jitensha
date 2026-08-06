---
title: "Chargeur : contrôler la sortie"
level: 3
system: "vae"
order: 3
status: "draft"
duration: 30
objectives:
  - "Mesurer la tension de sortie à vide d'un chargeur et la confronter à la tension de fin de charge attendue du pack"
  - "Identifier un chargeur non conforme, contrefait ou destiné à une autre chimie/tension"
  - "Diagnostiquer une charge qui ne démarre pas : chargeur, câble, connecteur, port, BMS"
  - "Expliquer les phases de charge courant constant / tension constante et pourquoi la fin de charge est lente"
prerequisites:
  - slug: "vae-multimetre-prise-en-main"
    description: "savoir mesurer une tension continue au multimètre en sécurité"
    system: "vae"
  - slug: "vae-batterie-charge-stockage"
    description: "connaître les règles de charge et de sécurité Li-ion"
    system: "vae"
tools:
  - "multimètre numérique"
  - "pointes de test fines adaptées au connecteur de charge"
  - "chargeurs de plusieurs marques/tensions"
  - "chronomètre"
  - "carnet d'atelier"
safety:
  - "Un chargeur délivrant 54,6 V branché sur un pack 36 V (fin de charge 42 V) surcharge massivement les cellules et provoque un emballement : vérifier la tension de sortie AVANT tout branchement sur un pack inconnu."
  - "Ne jamais mesurer la sortie d'un chargeur en insérant les pointes dans le connecteur au risque de les faire glisser : utiliser des pointes fines et une main seulement, l'autre main hors du circuit."
  - "Écarter systématiquement les chargeurs sans marquage de conformité, sans indication de tension/courant de sortie, ou dont le cordon ou le boîtier est endommagé."
exercises:
  - title: "Contrôle de 4 chargeurs et diagnostic d'une charge défaillante"
    summary: "Tu mesures la sortie à vide de quatre chargeurs, tu vérifies la compatibilité de chacun avec les packs disponibles, puis tu diagnostiques une chaîne de charge volontairement mise en défaut."
    criteria:
      - "1. Tension de sortie à vide mesurée pour 4 chargeurs, chaque valeur notée à 0,1 V près, et confrontée à la valeur imprimée sur l'étiquette : écart relevé pour chacun."
      - "2. Verdict de compatibilité rendu pour chaque couple chargeur/pack disponible : au moins 1 incompatibilité correctement détectée et justifiée par le calcul de tension de fin de charge (nombre de cellules en série x 4,2 V)."
      - "3. Polarité et brochage du connecteur de charge vérifiés au multimètre sur 2 chargeurs, avec schéma dessiné au carnet."
      - "4. Chaîne de charge défaillante diagnostiquée en moins de 12 minutes, avec l'organe fautif désigné parmi : prise secteur, chargeur, cordon, connecteur, port du pack, BMS."
      - "5. Montée en charge observée sur un pack pendant 15 minutes : tension du pack relevée à t0, t+5, t+10, t+15 minutes, courbe croissante confirmée, valeurs consignées."
      - "6. Rédaction en moins de 120 mots de la différence entre la phase à courant constant et la phase à tension constante, avec explication du ralentissement en fin de charge."
references:
  - source: "Battery University"
    subject: "algorithme de charge CC/CV des accumulateurs lithium-ion"
    type: "article"
  - source: "LEVA (Light Electric Vehicle Association)"
    subject: "contrôle et sélection des chargeurs pour véhicules électriques légers"
    type: "doc"
  - source: "Bosch eBike Systems"
    subject: "caractéristiques des chargeurs et compatibilité avec les packs de la gamme"
    type: "doc"
  - source: "INRS"
    subject: "risques liés aux chargeurs non conformes de batteries lithium-ion"
    type: "doc"
  - source: "Bafang"
    subject: "spécifications de charge des packs 36 V et 48 V et connecteurs de charge"
    type: "doc"
---

