---
title: "Diagnostic d'un circuit dynamo au multimètre"
level: 4
system: "cas-exotiques"
order: 6
status: "draft"
duration: 35
objectives:
  - "Mesurer la tension de sortie d'un moyeu dynamo (courant alternatif ~6 V) et interpréter les valeurs"
  - "Diagnostiquer méthodiquement une panne d'éclairage : moyeu, câble, masse, connecteur, phare"
  - "Réparer les pannes classiques : masse par le cadre défaillante, connecteur oxydé, fil cisaillé au pivot de fourche"
prerequisites:
  - slug: "dynamo-moyeu-installation"
    description: "Savoir installer un éclairage dynamo (dynamo-moyeu-installation)"
    system: "cas-exotiques"
  - slug: "vae-multimetre-prise-en-main"
    description: "Savoir utiliser un multimètre : continuité et mesure de tension"
    system: "vae"
tools:
  - "Multimètre"
  - "Pince à dénuder"
  - "Connecteurs 2,8 mm neufs"
  - "Papier de verre fin (contacts)"
  - "Colliers rilsan"
  - "Lampe témoin ou phare de test"
safety: []
exercises:
  - title: "Chasse aux pannes sur circuit saboté"
    summary: "Sur un vélo à dynamo dont le circuit a été saboté en deux points par un tiers (masse coupée, connecteur oxydé, fil cisaillé au choix), tu appliques l'arbre de diagnostic : test du moyeu à vide, continuité de chaque segment, contrôle des masses, puis réparation complète."
    criteria:
      - "1. Tension du moyeu mesurée à vide en AC : valeur non nulle et croissante avec la vitesse de rotation à la main (mesure consignée, typiquement 3-6 V à rotation vive)."
      - "2. Chaque segment du circuit testé en continuité dans un ordre logique consigné (arbre de diagnostic écrit avant de toucher au vélo)."
      - "3. Les deux pannes localisées en 15 minutes maximum chacune, multimètre à l'appui (pas de remplacement au hasard)."
      - "4. Réparation durable : connecteurs neufs sertis, contacts nettoyés, continuité ≤ 1 Ω sur chaque segment réparé."
      - "5. Test final roulant : phare et feu arrière stables sur 5 minutes, feu de position fonctionnel à l'arrêt ≥ 60 secondes."
references:
  - source: "Busch & Müller"
    subject: "schémas de câblage et diagnostic des éclairages dynamo"
    type: "doc"
  - source: "Schmidt Maschinenbau (SON)"
    subject: "caractéristiques électriques des moyeux dynamo et tests"
    type: "doc"
  - source: "Sheldon Brown"
    subject: "dépannage des circuits d'éclairage dynamo et problèmes de masse"
    type: "article"
  - source: "Bikepacking.com"
    subject: "fiabiliser un circuit dynamo en voyage"
    type: "article"
---

