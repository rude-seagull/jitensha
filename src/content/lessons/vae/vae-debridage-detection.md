---
title: "Débridage : mécanismes, détection et conséquences"
level: 4
system: "vae"
order: 9
status: "draft"
duration: 35
objectives:
  - "Décrire les mécanismes techniques de débridage : boîtier sur capteur, aimant déporté, modification logicielle, remplacement de composant"
  - "Détecter un débridage sur un vélo entrant à l'atelier par lecture d'indices matériels et logiciels"
  - "Énoncer les conséquences juridiques, assurantielles et de garantie d'un vélo débridé"
  - "Formuler et justifier un refus d'intervention conforme à la déontologie professionnelle"
prerequisites:
  - description: "connaître le cadre légal EN 15194 et les catégories de véhicules électriques"
    system: "vae"
  - slug: "vae-codes-erreur-bosch"
    description: "savoir lire les codes d'erreur de plusieurs marques et exploiter un historique de diagnostic"
    system: "vae"
  - slug: "vae-capteur-vitesse-aimant-entrefer"
    description: "savoir régler un capteur de vitesse et comprendre son rôle dans la coupure d'assistance"
    system: "vae"
tools:
  - "VAE variés, dont au moins un présentant des traces d'intervention"
  - "applications de diagnostic constructeur"
  - "lampe d'inspection et miroir"
  - "réglet"
  - "appareil photo"
  - "modèle de fiche de refus d'intervention"
safety:
  - "Un vélo débridé dépasse la vitesse pour laquelle ses freins, ses pneus et son cadre ont été homologués : ne jamais l'essayer sur route ouverte, ne jamais le rendre en l'état sans l'avoir signalé au client par écrit."
  - "En cas d'accident, un vélo débridé est requalifié en cyclomoteur non homologué : l'assurance peut refuser sa garantie et la responsabilité de l'intervenant peut être engagée."
exercises:
  - title: "Audit de conformité de 3 VAE et rédaction d'une fiche de refus"
    summary: "Tu réalises un audit de conformité sur trois VAE en cherchant systématiquement les indices de débridage, matériels et logiciels, puis tu rédiges la fiche de refus d'intervention type de ton atelier."
    criteria:
      - "1. Grille d'audit construite avec au minimum 10 points de contrôle : position et nombre d'aimants, présence d'un module intercalé sur le faisceau, câblage non d'origine, écran non d'origine, historique d'erreurs, version firmware, vitesse maximale relevée, kilométrage incohérent, traces de démontage, joint ou vis marquée."
      - "2. Grille appliquée intégralement à 3 vélos, avec résultat consigné pour chacun des 10 points sur chacun des vélos, soit 30 lignes renseignées."
      - "3. Vérification logicielle réalisée sur les vélos dont le système le permet : historique d'erreurs relevé, présence ou absence de codes liés à la manipulation du signal de vitesse notée."
      - "4. Vitesse de coupure mesurée au GPS sur voie fermée pour chaque vélo essayable : conclusion conforme / non conforme argumentée, 3 essais par vélo."
      - "5. Verdict rendu par écrit pour 3 vélos sur 3 avec le niveau de certitude (conforme, suspect, débridage établi) et les indices qui le fondent."
      - "6. Fiche de refus d'intervention rédigée en une page maximum, comportant : constat factuel, référence à la réglementation, conséquences pour le client, proposition de remise en conformité, emplacement de signature."
references:
  - source: "Norme EN 15194"
    subject: "conditions de conformité d'un cycle à assistance électrique et perte de conformité après modification"
    type: "doc"
  - source: "Règlement UE 168/2013"
    subject: "requalification d'un cycle motorisé dépassant les limites du pedelec"
    type: "doc"
  - source: "Bosch eBike Systems"
    subject: "détection des manipulations du signal de vitesse et code d'erreur associé"
    type: "doc"
  - source: "Fédération française des usagers de la bicyclette (FUB)"
    subject: "conséquences légales et assurantielles du débridage d'un vélo à assistance électrique"
    type: "article"
  - source: "E-MOUNTAINBIKE Magazine"
    subject: "tuning et débridage des VAE : réalité technique et conséquences"
    type: "article"
---

