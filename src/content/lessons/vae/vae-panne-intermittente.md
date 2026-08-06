---
title: "Traquer une panne intermittente sur un VAE"
level: 5
system: "vae"
order: 3
status: "draft"
duration: 45
objectives:
  - "Construire un protocole de reproduction d'une panne qui n'apparaît qu'en roulage"
  - "Mesurer une chute de tension sous charge et l'utiliser pour localiser un contact dégradé"
  - "Appliquer un test de mouvement (wiggle test) instrumenté sur faisceau et connectique"
  - "Exploiter les journaux constructeur pour corréler un évènement à un code et clore un diagnostic"
prerequisites:
  - slug: "vae-continuite-faisceau"
    description: "savoir cartographier un faisceau et localiser une coupure par mesure"
    system: "vae"
  - slug: "vae-diagnostic-moteur-moyeu"
    description: "savoir diagnostiquer un moteur moyeu ou un capteur de couple par mesures croisées"
    system: "vae"
  - description: "savoir extraire et interpréter les journaux et codes de plusieurs marques"
    system: "vae"
  - slug: "calendrier-entretien"
    description: "maîtriser la méthode de diagnostic par élimination et le carnet d'atelier"
    system: "fondamentaux"
tools:
  - "multimètre numérique, idéalement avec fonction min/max ou enregistrement"
  - "pointes de test fines et cordons longs"
  - "home-trainer permettant de charger le moteur"
  - "pistolet thermique ou sèche-cheveux et bombe de froid (test thermique)"
  - "brumisateur d'eau (test d'humidité contrôlé)"
  - "caméra ou smartphone pour filmer l'écran en roulage"
  - "carnet d'atelier et fiche de suivi"
safety:
  - "Les tests d'humidité contrôlée se font sur des zones ciblées et à faible débit, jamais sur la batterie, ses contacts ou un connecteur ouvert."
  - "Les tests thermiques ne dépassent jamais les températures admissibles des composants et ne sont jamais appliqués à une batterie."
  - "Toute mesure en roulage se fait sur home-trainer ou avec un opérateur dédié : jamais de manipulation de multimètre par le pilote en mouvement."
exercises:
  - title: "Résolution d'une panne intermittente introduite par un tiers"
    summary: "Un binôme introduit un défaut intermittent (contact partiellement dessoudé, connecteur mal verrouillé, conducteur amorcé sous la gaine, capteur en limite de tolérance) et tu dois le reproduire, le localiser et le corriger en appliquant une méthode écrite."
    criteria:
      - "1. Protocole de reproduction écrit avant intervention, en 8 étapes numérotées maximum, précisant les conditions à faire varier : charge, vibration, température, humidité, angle de direction, position du faisceau."
      - "2. Panne reproduite volontairement au moins 3 fois, avec les conditions exactes de chaque occurrence consignées."
      - "3. Test de mouvement instrumenté réalisé sur 100 % des connecteurs accessibles et sur toute la longueur du faisceau, avec le multimètre en surveillance de continuité ou de tension."
      - "4. Chute de tension sous charge mesurée aux bornes d'au moins 3 liaisons suspectes pendant une assistance soutenue : valeur relevée pour chacune, toute chute supérieure à 0,3 V sur une liaison de puissance signalée comme anormale."
      - "5. Journal constructeur consulté et corrélé : au moins un évènement du journal rapproché d'une occurrence reproduite, ou absence de corrélation constatée et commentée."
      - "6. Origine exacte localisée et annoncée avant vérification, avec une précision de 10 cm sur le faisceau ou l'organe désigné nommément."
      - "7. Réparation réalisée puis validée : 30 minutes de sollicitation reproduisant les conditions ayant provoqué la panne, sans aucune occurrence, et 20 km de roulage sans récidive."
      - "8. Rapport de diagnostic rédigé en une page maximum : symptôme, conditions de reproduction, hypothèses testées et éliminées, mesures décisives, réparation, validation."
references:
  - source: "Park Tool"
    subject: "méthodologie de diagnostic des bruits et défauts intermittents en atelier"
    type: "article"
  - source: "LEVA (Light Electric Vehicle Association)"
    subject: "diagnostic des défauts intermittents sur systèmes électriques de mobilité légère"
    type: "doc"
  - source: "Fluke"
    subject: "usage des fonctions min/max et d'enregistrement pour capturer un défaut fugitif"
    type: "doc"
  - source: "Grin Technologies"
    subject: "mesure de chute de tension sous charge et localisation des contacts dégradés"
    type: "article"
  - source: "Bosch eBike Systems"
    subject: "exploitation du journal d'évènements et de l'historique d'erreurs en diagnostic atelier"
    type: "doc"
---

