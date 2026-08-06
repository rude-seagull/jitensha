---
title: "Sertir, souder et réparer un conducteur de VAE"
level: 3
system: "vae"
order: 6
status: "draft"
duration: 45
objectives:
  - "Choisir la section de conducteur adaptée entre circuit de signal et circuit de puissance"
  - "Réaliser un sertissage conforme et le contrôler mécaniquement et électriquement"
  - "Souder un conducteur fin sans fondre l'isolant ni créer de soudure sèche"
  - "Restaurer l'isolation et l'étanchéité d'une réparation avec gaine thermorétractable à colle"
prerequisites:
  - slug: "vae-multimetre-prise-en-main"
    description: "savoir tester la continuité et la résistance d'un conducteur"
    system: "vae"
  - slug: "vae-connecteurs-higo-julet"
    description: "savoir identifier et démonter la connectique Higo/Julet"
    system: "vae"
tools:
  - "pince à dénuder de précision"
  - "pince à sertir à matrice (pas de pince universelle)"
  - "fer à souder à panne fine, 300-350 °C"
  - "étain avec flux, ou fil à souder sans plomb"
  - "gaine thermorétractable à colle, diamètres variés"
  - "décapeur thermique"
  - "troisième main / étau de précision"
  - "multimètre"
  - "dynamomètre à traction ou balance à ressort"
safety:
  - "Fer à souder : brûlures et projections d'étain. Support obligatoire, lunettes de protection, jamais de soudure au-dessus d'une batterie ou d'un pack."
  - "Les fumées de flux sont irritantes pour les voies respiratoires : travailler avec extraction ou ventilation, jamais penché au-dessus de la panne."
  - "Ne jamais souder ni sertir sur un circuit sous tension, et jamais sur un pack : batterie déposée et éloignée du poste de soudure."
exercises:
  - title: "Série de 10 jonctions et test d'arrachement"
    summary: "Tu réalises dix jonctions sur chutes de câble — cinq sertissages et cinq soudures — sur des sections de signal et de puissance, puis tu les soumets à un test de traction et à un contrôle électrique."
    criteria:
      - "1. 10 jonctions réalisées : 5 par sertissage, 5 par soudure, dont au moins 3 sur des conducteurs de section signal inférieure ou égale à 0,5 mm²."
      - "2. Résistance mesurée de chaque jonction inférieure ou égale à 0,1 ohm au-delà de la résistance du conducteur seul, sur 10 jonctions sur 10."
      - "3. Test de traction : aucune jonction ne se sépare sous une traction manuelle ferme maintenue 10 secondes ; si un dynamomètre est disponible, aucune rupture sous 30 N pour les sections signal."
      - "4. Aucune soudure sèche : à la loupe, chaque soudure présente un aspect brillant et mouillant, sans bille ni fissure ; les jonctions mates sont refaites et recomptées."
      - "5. Isolant restauré sur 10 jonctions sur 10 par gaine thermorétractable à colle, recouvrement d'au moins 10 mm de part et d'autre de la zone dénudée, colle visiblement extrudée aux extrémités."
      - "6. Aucun brin de cuivre visible sur les 10 jonctions terminées, contrôlé à la loupe."
references:
  - source: "NASA Workmanship Standards"
    subject: "critères d'acceptation d'un sertissage et d'une soudure de conducteur"
    type: "doc"
  - source: "LEVA (Light Electric Vehicle Association)"
    subject: "module pratique sertissage et soudure sur véhicules électriques légers"
    type: "doc"
  - source: "Grin Technologies"
    subject: "choix de section de câble et réalisation de jonctions sur circuits de puissance"
    type: "article"
  - source: "Higo"
    subject: "préparation des conducteurs et montage des contacts sur connecteurs étanches"
    type: "doc"
  - source: "Weller"
    subject: "réglage de température et technique de soudure sur conducteurs fins"
    type: "doc"
---

