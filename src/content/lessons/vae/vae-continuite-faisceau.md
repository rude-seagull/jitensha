---
title: "Tester la continuité d'un faisceau et localiser une coupure"
level: 3
system: "vae"
order: 4
status: "draft"
duration: 40
objectives:
  - "Établir le brochage d'un câble VAE à partir de la documentation ou par déduction"
  - "Tester la continuité fil à fil d'un faisceau moteur, écran ou capteur"
  - "Localiser une coupure ou un court-circuit entre conducteurs par mesure et par test de mouvement"
  - "Reconstituer un schéma de faisceau exploitable pour un vélo non documenté"
prerequisites:
  - slug: "vae-multimetre-prise-en-main"
    description: "savoir utiliser un multimètre en continuité et en résistance"
    system: "vae"
  - slug: "vae-panne-assistance-arbre-decision"
    description: "savoir dérouler un arbre de décision de panne d'assistance"
    system: "vae"
tools:
  - "multimètre numérique avec buzzer de continuité"
  - "cordons rallongés ou fil de rappel"
  - "pointes de test fines"
  - "loupe"
  - "lampe d'inspection"
  - "papier millimétré ou tablette pour le schéma"
safety:
  - "Toujours déposer la batterie et attendre la décharge des capacités avant un test de continuité : mesurer une continuité sur un circuit sous tension fausse la mesure et peut détruire le multimètre."
exercises:
  - title: "Cartographie complète d'un faisceau et localisation d'une coupure introduite"
    summary: "Tu relèves le brochage complet d'un faisceau (moteur ou capteur), tu en dessines le schéma, puis un binôme introduit une coupure ou un mauvais contact que tu dois localiser à moins de 10 cm près."
    criteria:
      - "1. Schéma de faisceau dessiné avec identification de chaque conducteur : couleur, broche de départ, broche d'arrivée, fonction supposée ; au minimum 5 conducteurs cartographiés."
      - "2. Continuité vérifiée sur 100 % des conducteurs cartographiés, valeurs de résistance notées (attendu inférieur à 1 ohm sur un conducteur sain de moins de 2 m)."
      - "3. Absence de court-circuit entre conducteurs vérifiée pour toutes les paires : résistance mesurée supérieure à 1 mégohm sur 100 % des paires testées."
      - "4. Coupure introduite localisée à moins de 10 cm près, en moins de 15 minutes, position annoncée avant vérification."
      - "5. Test de mouvement réalisé : le faisceau est fléchi et vrillé sur toute sa longueur pendant la mesure de continuité, et tout contact intermittent détecté est signalé avec sa position."
      - "6. Schéma final photographié ou scanné et archivé au carnet, réutilisable par un tiers sans explication orale."
references:
  - source: "LEVA (Light Electric Vehicle Association)"
    subject: "test de continuité et cartographie des faisceaux sur véhicules électriques légers"
    type: "doc"
  - source: "Grin Technologies"
    subject: "brochages standards des câbles moteur, capteur Hall et accélérateur"
    type: "article"
  - source: "Bafang"
    subject: "schémas de câblage et brochages des kits BBS et moteurs moyeu"
    type: "doc"
  - source: "Higo"
    subject: "brochages et codes couleur des connecteurs de mobilité électrique"
    type: "doc"
  - source: "Shimano"
    subject: "câblage E-TUBE / EW-SD50 et EW-SD300 : cheminement et contrôle des liaisons"
    type: "doc"
---

