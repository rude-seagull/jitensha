---
title: "Diagnostiquer un capteur de couple et distinguer couple, cadence et vitesse"
level: 4
system: "vae"
order: 2
status: "draft"
duration: 45
objectives:
  - "Expliquer la différence de comportement entre une assistance pilotée par capteur de couple et une assistance pilotée par capteur de cadence"
  - "Localiser le capteur de couple selon l'architecture : axe de pédalier, base arrière, patte arrière, moyeu instrumenté"
  - "Reconnaître la signature d'un capteur de couple défaillant : assistance en tout ou rien, à-coups, offset au repos, assistance résiduelle"
  - "Réaliser les tests d'initialisation et de valeur au repos permettant de conclure sans démontage lourd"
prerequisites:
  - slug: "vae-codes-erreur-bosch"
    description: "savoir lire les codes d'erreur d'au moins deux marques et exploiter un historique"
    system: "vae"
  - slug: "vae-multimetre-prise-en-main"
    description: "savoir mesurer une tension continue et une continuité au multimètre en sécurité"
    system: "vae"
  - slug: "vae-capteur-vitesse-aimant-entrefer"
    description: "savoir régler l'entrefer d'un capteur de vitesse"
    system: "vae"
tools:
  - "multimètre numérique"
  - "applications de diagnostic constructeur"
  - "pied d'atelier stable"
  - "home-trainer ou rouleau"
  - "balance ou masse étalon pour appliquer un couple connu à la manivelle"
  - "chronomètre"
  - "carnet d'atelier"
safety:
  - "Tester une assistance au pied d'atelier avec la roue arrière libre : sécuriser le vélo, s'écarter de la trajectoire de la chaîne et ne jamais approcher les doigts du plateau en rotation."
  - "Un capteur de couple qui envoie un offset non nul peut provoquer une assistance sans pédalage : ne jamais remettre en circulation un vélo présentant ce symptôme."
exercises:
  - title: "Caractérisation comparée de deux systèmes et diagnostic d'un capteur suspect"
    summary: "Tu compares en mesures le comportement d'un VAE à capteur de couple et d'un VAE à capteur de cadence, tu documentes leurs signatures, puis tu appliques la procédure de diagnostic à un capteur de couple suspect ou volontairement perturbé."
    criteria:
      - "1. Protocole comparatif appliqué sur 2 vélos d'architectures de capteurs différentes : temps de montée en assistance mesuré au chronomètre depuis l'arrêt, sur 3 essais par vélo, valeurs moyennes consignées."
      - "2. Signature de chaque système décrite par écrit sur 5 critères : latence au démarrage, modulation avec l'effort, comportement en danseuse, comportement à cadence élevée sans effort, comportement à l'arrêt du pédalage."
      - "3. Valeur de couple au repos lue dans l'outil de diagnostic ou déduite du comportement : offset nul ou dans la tolérance constructeur, résultat consigné."
      - "4. Procédure d'initialisation du capteur appliquée conformément à la documentation (redémarrage sans appui sur les pédales, calibration en atelier), et effet mesuré avant/après."
      - "5. Test de linéarité grossière : trois niveaux d'effort croissants appliqués à la manivelle, l'assistance produite croît de façon monotone sur 3 essais sur 3, ou anomalie documentée."
      - "6. Conclusion écrite en 8 lignes maximum désignant l'organe suspect (capteur, faisceau, contrôleur, mécanique de transmission) et la mesure suivante à réaliser."
references:
  - source: "Bosch eBike Systems"
    subject: "principe de mesure du couple, de la cadence et de la vitesse dans les Drive Units"
    type: "doc"
  - source: "Shimano"
    subject: "capteur de couple STEPS, procédure d'initialisation et avertissement W013"
    type: "doc"
  - source: "Bafang"
    subject: "capteurs de couple et capteurs de cadence à disque PAS : principes et contrôle"
    type: "doc"
  - source: "LEVA (Light Electric Vehicle Association)"
    subject: "typologie des capteurs d'assistance et méthodes de test"
    type: "doc"
  - source: "E-MOUNTAINBIKE Magazine"
    subject: "comparatif du ressenti et du fonctionnement des capteurs de couple selon les motorisations"
    type: "article"
---

