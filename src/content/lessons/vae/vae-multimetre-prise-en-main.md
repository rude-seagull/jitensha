---
title: "Multimètre : prise en main sur un système 36/48 V"
level: 3
system: "vae"
order: 1
status: "draft"
duration: 40
objectives:
  - "Configurer un multimètre pour mesurer une tension continue, une continuité et une résistance"
  - "Mesurer sans risque sur un système 36 V, 43,2 V ou 48 V et comprendre pourquoi le danger vient du courant, pas de la tension"
  - "Interpréter une mesure : valeur attendue, tolérance, mesure aberrante"
  - "Construire et utiliser des pointes de test adaptées à la connectique fine d'un VAE"
prerequisites:
  - slug: "vae-securite-li-ion-incident"
    description: "connaître les règles de sécurité Li-ion et savoir déposer une batterie"
    system: "vae"
  - slug: "carnet-atelier"
    description: "savoir tenir un carnet d'atelier avec relevés chiffrés"
    system: "fondamentaux"
tools:
  - "multimètre numérique (catégorie CAT III minimum, cordons fusibles)"
  - "pointes de test fines / micro-grip"
  - "pince crocodile"
  - "résistances et piles de calibration pour l'entraînement"
  - "carnet d'atelier"
  - "gants d'électricien fins (facultatif mais recommandé)"
safety:
  - "Un pack VAE délivre plusieurs dizaines d'ampères en court-circuit : une pointe de test qui glisse entre deux broches provoque un arc, projette du métal fondu et peut initier un emballement. Retirer bagues, montre et bracelets avant toute mesure."
  - "Ne jamais mesurer une intensité en série sur un circuit de traction avec un multimètre standard : la gamme A d'un multimètre grand public est fusible et largement insuffisante."
  - "Toujours vérifier que le multimètre est bien en position tension avant de toucher deux points sous tension : une mesure en position résistance ou intensité sur un pack crée un court-circuit franc."
  - "Mesurer un pack déposé, posé à plat sur un support isolant et incombustible, jamais en équilibre sur un établi encombré."
exercises:
  - title: "Série de 20 mesures calibrées et rédaction d'un protocole de mesure"
    summary: "Tu t'entraînes sur des cibles connues (piles, résistances, câbles coupés, chargeur) jusqu'à obtenir des mesures fiables et répétables, puis tu rédiges le protocole de mesure que tu appliqueras sur VAE."
    criteria:
      - "1. 20 mesures réalisées et consignées : 8 tensions continues, 6 continuités, 6 résistances, chacune avec valeur attendue et valeur lue."
      - "2. Écart entre valeur lue et valeur attendue inférieur ou égal à 2 % sur les 8 mesures de tension."
      - "3. Continuité correctement conclue sur 6 cas sur 6, dont au moins 2 cas de circuit ouvert volontairement créés."
      - "4. Répétabilité démontrée : 3 mesures successives du même point de tension avec une dispersion inférieure ou égale à 0,05 V."
      - "5. Protocole écrit en 8 étapes numérotées maximum, comprenant la vérification du calibre, la vérification des cordons, la vérification du multimètre sur une source connue avant chaque session, et les règles de sécurité applicables."
      - "6. Test de chute : le protocole est appliqué de mémoire, sans le relire, sur une mesure surprise, et les 8 étapes sont effectivement exécutées."
references:
  - source: "LEVA (Light Electric Vehicle Association)"
    subject: "usage du multimètre en diagnostic de vélo à assistance électrique"
    type: "doc"
  - source: "Fluke"
    subject: "principes de mesure au multimètre numérique et catégories de sécurité CAT"
    type: "doc"
  - source: "Bike Gremlin"
    subject: "bases de l'électricité appliquée au vélo : tension, intensité, résistance"
    type: "article"
  - source: "Grin Technologies"
    subject: "méthodes de mesure sur les systèmes de propulsion électrique de vélo"
    type: "article"
  - source: "Bafang"
    subject: "tableaux de valeurs de référence pour les contrôles électriques des kits"
    type: "doc"
---

