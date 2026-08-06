---
title: "Lire et exploiter les codes d'erreur Bosch"
level: 3
system: "vae"
order: 7
status: "draft"
duration: 40
objectives:
  - "Lire un code d'erreur Bosch sur écran Purion, Intuvia, Kiox ou via l'application"
  - "Interpréter les familles de codes : moteur, éclairage, capteur de vitesse, authentification batterie, communication"
  - "Traiter en autonomie les codes courants 500, 502, 503, 504 et 530 selon la procédure appropriée"
  - "Décider quand un code impose l'escalade vers un atelier agréé disposant de l'outil de diagnostic constructeur"
prerequisites:
  - slug: "vae-ecran-modes-assistance"
    description: "savoir naviguer dans les menus d'un écran VAE et lire un historique d'erreur"
    system: "vae"
  - slug: "vae-capteur-vitesse-aimant-entrefer"
    description: "savoir régler l'entrefer d'un capteur de vitesse"
    system: "vae"
  - slug: "vae-continuite-faisceau"
    description: "savoir tester la continuité d'un faisceau au multimètre"
    system: "vae"
tools:
  - "VAE équipé Bosch avec écran fonctionnel"
  - "smartphone avec application constructeur"
  - "multimètre"
  - "réglet"
  - "tableau des codes imprimé"
  - "carnet d'atelier"
safety:
  - "Un code 504 (signal de vitesse manipulé) est le marqueur d'un débridage : ne jamais tenter de le masquer ou de le contourner, et documenter la constatation avant toute intervention."
exercises:
  - title: "Provocation contrôlée et traitement de 3 codes Bosch"
    summary: "Tu provoques de façon non destructive au moins deux codes d'erreur (aimant écarté, éclairage débranché, connecteur de commande déconnecté), tu les lis, tu appliques la procédure de résolution puis tu vérifies l'effacement."
    criteria:
      - "1. Tableau des codes reconstitué avec au minimum 8 codes, chacun accompagné de sa famille, de sa cause la plus probable et de la première action à mener."
      - "2. Au moins 2 codes provoqués de façon réversible, lus à l'écran et notés avec leur libellé exact."
      - "3. Procédure de résolution appliquée et code effacé après remise en état, vérifié par un cycle d'extinction/rallumage complet : 0 code actif."
      - "4. Pour le code lié au capteur de vitesse, entrefer remesuré et consigné dans la plage constructeur avec au moins 2 mm de marge par rapport aux bornes."
      - "5. Fiche de décision rédigée pour 3 codes : action atelier possible, ou escalade vers atelier agréé, avec justification en 2 lignes chacune."
      - "6. Historique d'erreurs relevé dans l'application avant et après intervention, différence commentée par écrit."
references:
  - source: "Bosch eBike Systems"
    subject: "liste officielle des codes d'erreur et procédures de résolution des systèmes eBike"
    type: "doc"
  - source: "Upway"
    subject: "guide de dépannage des codes d'erreur Bosch pour vélos électriques"
    type: "article"
  - source: "E-MOUNTAINBIKE Magazine"
    subject: "codes d'erreur de VAE et leurs solutions : Bosch 503, 504 et suivants"
    type: "article"
  - source: "Bosch eBike Systems"
    subject: "application eBike Flow : lecture de l'historique d'erreurs et diagnostic"
    type: "outil"
  - source: "LEVA (Light Electric Vehicle Association)"
    subject: "méthode d'exploitation des codes constructeur en diagnostic atelier"
    type: "doc"
---

