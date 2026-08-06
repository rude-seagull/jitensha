---
title: "Codes d'erreur des autres systèmes"
level: 4
system: "vae"
order: 1
status: "draft"
duration: 40
objectives:
  - "Retrouver la documentation de codes d'un système peu documenté à partir des marquages du moteur"
  - "Décrypter la logique commune aux codes constructeur : famille, gravité, organe concerné"
  - "Diagnostiquer un système léger (Mahle X35/X20, Fazua Ride 60, TQ) dont l'interface est réduite à des LED"
  - "Construire une fiche de correspondance réutilisable pour l'atelier"
prerequisites:
  - slug: "vae-codes-erreur-bosch"
    description: "savoir lire et exploiter les codes d'erreur Bosch"
    system: "vae"
  - slug: "vae-codes-erreur-shimano-steps"
    description: "savoir utiliser E-TUBE PROJECT et lire les codes Shimano STEPS"
    system: "vae"
  - slug: "vae-identifier-architecture"
    description: "savoir identifier la marque et la génération d'un système à partir de ses marquages"
    system: "vae"
tools:
  - "VAE de marques variées ou documentation de plusieurs systèmes"
  - "smartphone avec applications constructeur (Mission Control, RideControl, Fazua Toolbox, Bafang Go)"
  - "multimètre"
  - "carnet d'atelier ou classeur de fiches"
  - "lampe d'inspection"
safety: []
exercises:
  - title: "Construction d'un classeur de codes multi-marques et diagnostic d'un système à LED"
    summary: "Tu constitues une fiche de codes par marque pour au moins quatre systèmes non Bosch/Shimano, puis tu diagnostiques un système à interface LED en décodant sa signalisation lumineuse."
    criteria:
      - "1. 4 fiches marques minimum créées (parmi Yamaha, Brose/Specialized, Fazua, Mahle, Bafang, Giant, TQ), chacune comportant au moins 5 codes ou signalisations avec cause et action."
      - "2. Pour chaque marque, la méthode d'accès au diagnostic est documentée : écran, application, LED, ou interface atelier, avec la manipulation exacte en 3 étapes maximum."
      - "3. Système à interface LED décodé : au moins 2 signalisations distinctes reproduites et interprétées correctement, validées par la documentation constructeur."
      - "4. Tableau de correspondance transversal produit, regroupant les codes des 4 marques par famille d'organe : batterie, moteur, capteur de vitesse, capteur de couple, communication ; au moins 4 familles remplies pour chaque marque."
      - "5. Test à l'aveugle : sur un système imposé par un tiers, la fiche correspondante est retrouvée et la première action de diagnostic annoncée en moins de 3 minutes."
      - "6. Classeur archivé sous forme exploitable (papier ou numérique), consultable par un tiers sans explication."
references:
  - source: "Yamaha"
    subject: "codes de diagnostic des systèmes PW-X3 et PWseries"
    type: "doc"
  - source: "Specialized"
    subject: "diagnostic des systèmes Brose via Mission Control et codes associés"
    type: "doc"
  - source: "Fazua"
    subject: "signalisation et codes du système Ride 60, diagnostic par Toolbox"
    type: "doc"
  - source: "Mahle / ebikemotion"
    subject: "codes lumineux iWoc des systèmes X35 et X20"
    type: "doc"
  - source: "Bafang"
    subject: "table des codes d'erreur affichés par les écrans DP C18 et 500C"
    type: "doc"
  - source: "E-MOUNTAINBIKE Magazine"
    subject: "panorama des codes d'erreur VAE toutes marques et de leurs solutions"
    type: "article"
---

