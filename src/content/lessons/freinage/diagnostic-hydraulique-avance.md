---
title: "Diagnostic hydraulique avancé"
level: 4
system: "freinage"
order: 1
status: "draft"
duration: 40
objectives:
  - "Construire et appliquer un arbre de décision : spongieux (air) vs point de contact errant (wandering bite point) vs levier au guidon (usure/fuite/pistons repoussés)"
  - "Localiser l'air : levier, durite ou étrier, par les tests d'inclinaison et de pompage"
  - "Détecter une fuite lente : test papier, test de pression maintenue, inspection des raccords et soufflets"
  - "Identifier les causes du wandering bite point Shimano et les traitements possibles"
  - "Confirmer chaque hypothèse par un test AVANT de démonter"
prerequisites:
  - slug: "purge-sram-bleeding-edge"
    description: "Avoir suivi purge-shimano-entonnoir, purge-sram-bleeding-edge et entretien-pistons-etrier"
    system: "freinage"
  - slug: "entretien-pistons-etrier"
    description: "Avoir suivi purge-shimano-entonnoir, purge-sram-bleeding-edge et entretien-pistons-etrier"
    system: "freinage"
  - slug: "purge-shimano-entonnoir"
    description: "Avoir suivi purge-shimano-entonnoir, purge-sram-bleeding-edge et entretien-pistons-etrier"
    system: "freinage"
  - slug: "diagnostic-craquements"
    description: "Méthodologie de diagnostic par élimination (une variable à la fois)"
    system: "fondamentaux"
tools:
  - "Kits de purge Shimano et SRAM complets"
  - "Papier blanc, lingettes"
  - "Sangle (maintien du levier serré une nuit)"
  - "Comparateur ou réglet (mesure de course au levier)"
  - "Gants nitrile, lunettes"
safety:
  - "Un frein au diagnostic incertain ne reprend pas la route : la validation finale se fait toujours par test statique complet avant tout essai roulant."
exercises:
  - title: "Trois pannes hydrauliques en aveugle"
    summary: "Un binôme introduit 3 défauts distincts sur des freins cobayes (air dans le circuit, piston partiellement collé, plaquettes usées + niveau bas simulé). Tu diagnostiques chaque panne avec test de confirmation avant d'ouvrir quoi que ce soit, puis tu remets en état."
    criteria:
      - "1. Arbre de décision personnel rédigé (symptôme → tests → causes) et utilisé pendant l'exercice."
      - "2. 3/3 causes identifiées correctement, chacune confirmée par un test non invasif (inclinaison, pompage, sangle de nuit, papier) AVANT démontage — consigné au carnet."
      - "3. Test de la sangle interprété correctement : levier durci au matin = air confirmé."
      - "4. Remise en état complète : point de contact stable à ≤ 3 mm de dérive sur 20 pompages, sur les 3 freins."
      - "5. Compte-rendu écrit par panne : symptôme, hypothèses, tests, cause, remède, durée d'intervention."
references:
  - source: "Park Tool"
    subject: "Diagnostic des freins hydrauliques : levier mou, frottements, fuites"
    type: "video"
  - source: "Shimano (manuel du revendeur)"
    subject: "Tableaux de dépannage freins hydrauliques"
    type: "doc"
  - source: "BikeRadar"
    subject: "Wandering bite point : causes et solutions"
    type: "article"
  - source: "Epic Bleed Solutions"
    subject: "Localiser l'air dans un circuit hydraulique"
    type: "article"
---

