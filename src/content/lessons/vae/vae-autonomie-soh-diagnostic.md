---
title: "Perte d'autonomie : mesurer la santé réelle d'un pack"
level: 4
system: "vae"
order: 6
status: "draft"
duration: 45
objectives:
  - "Distinguer une perte d'autonomie due au pack d'une perte due à l'usage, au terrain, au poids ou aux pneus"
  - "Relever le nombre de cycles et la capacité restante annoncée par l'outil de diagnostic constructeur"
  - "Réaliser un test de décharge encadré et en déduire une capacité mesurée en Wh"
  - "Rendre au client un verdict chiffré et honnête sur l'état de santé du pack"
prerequisites:
  - slug: "vae-mesure-batterie-tension-soc"
    description: "savoir mesurer un pack et interpréter tension et état de charge"
    system: "vae"
  - slug: "vae-apps-appairage-firmware"
    description: "savoir extraire les données de diagnostic depuis une application constructeur"
    system: "vae"
  - slug: "science-du-pneu"
    description: "savoir contrôler la pression et l'état d'un pneu et son influence sur la résistance au roulement"
    system: "roues-et-pneus"
tools:
  - "multimètre numérique"
  - "wattmètre / testeur de capacité DC adapté à la tension du pack (si disponible)"
  - "applications de diagnostic constructeur"
  - "home-trainer ou parcours de référence"
  - "balance pour peser vélo et charge"
  - "chronomètre et compteur GPS"
  - "carnet d'atelier"
safety:
  - "Un test de décharge produit de la chaleur : surveiller le pack en continu, le poser sur support incombustible, arrêter immédiatement si la température de surface dépasse 45 °C."
  - "Ne jamais décharger un pack sous le seuil de coupure BMS avec une charge externe non régulée : la sous-décharge profonde détruit les cellules et crée un risque à la recharge."
exercises:
  - title: "Bilan de santé d'un pack et parcours de référence"
    summary: "Tu établis le bilan de santé d'un pack en croisant trois sources : les données du diagnostic constructeur, une mesure de capacité par décharge encadrée, et un parcours de référence reproductible avec relevé de consommation."
    criteria:
      - "1. Capacité nominale du pack relevée en Wh depuis l'étiquette, et données constructeur extraites : nombre de cycles et capacité restante annoncée si disponibles, valeurs notées avec la date."
      - "2. Parcours de référence défini et documenté : distance, dénivelé, niveau d'assistance imposé, pression des pneus contrôlée à ±0,2 bar, masse totale pesée à ±1 kg près."
      - "3. Parcours effectué 2 fois avec relevé de la consommation en Wh ou en pourcentage d'état de charge : écart entre les deux passages inférieur ou égal à 10 %, sinon un troisième passage est effectué."
      - "4. Consommation ramenée en Wh/km calculée et comparée aux ordres de grandeur usuels (environ 8-15 Wh/km en ville, 15-25 Wh/km en VTTAE, 20-35 Wh/km en cargo chargé), écart commenté."
      - "5. Capacité réelle estimée en Wh et état de santé exprimé en pourcentage de la capacité nominale, avec la méthode de calcul écrite."
      - "6. Température du pack relevée au début, à mi-parcours et en fin de test : aucune valeur supérieure à 45 °C, sinon test interrompu et incident consigné."
      - "7. Verdict client rédigé en moins de 150 mots, contenant le chiffre de santé, les facteurs d'usage identifiés, et une recommandation explicite (conserver, changer, adapter l'usage)."
references:
  - source: "Battery University"
    subject: "mesure de l'état de santé (SOH) d'un pack lithium-ion et méthodes de test de capacité"
    type: "article"
  - source: "Bosch eBike Systems"
    subject: "lecture du nombre de cycles et de l'état de la batterie via l'outil de diagnostic"
    type: "doc"
  - source: "Shimano"
    subject: "informations d'état de batterie disponibles dans E-TUBE PROJECT"
    type: "outil"
  - source: "Upway"
    subject: "comment évaluer l'autonomie réelle et la santé d'une batterie de vélo électrique"
    type: "article"
  - source: "LEVA (Light Electric Vehicle Association)"
    subject: "protocoles de test de capacité en atelier"
    type: "doc"
---

