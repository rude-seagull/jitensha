---
title: "Concevoir un freinage pour charges extrêmes"
level: 5
system: "freinage"
order: 2
status: "draft"
duration: 40
objectives:
  - "Calculer l'énergie à dissiper (E = ½mv² + m·g·h) et la comparer à la capacité thermique du freinage"
  - "Dimensionner : nombre de pistons, taille et épaisseur de disque, composé de plaquettes, refroidissement"
  - "Connaître les solutions spécifiques : drag brake de tandem, double étrier, disques 220-223 mm, limites constructeur de masse totale"
  - "Spécifier un freinage complet pour un cahier des charges donné (cargo biporteur, tandem chargé, VTT de descente)"
  - "Mettre en œuvre l'upgrade et le valider par un protocole anti-fading mesuré"
prerequisites:
  - slug: "montage-freinage-hydraulique-neuf"
    description: "Avoir suivi freinage-vae-cargo, compatibilite-freinage et montage-freinage-hydraulique-neuf"
    system: "freinage"
  - slug: "compatibilite-freinage"
    description: "Avoir suivi freinage-vae-cargo, compatibilite-freinage et montage-freinage-hydraulique-neuf"
    system: "freinage"
  - slug: "freinage-vae-cargo"
    description: "Avoir suivi freinage-vae-cargo, compatibilite-freinage et montage-freinage-hydraulique-neuf"
    system: "freinage"
  - slug: "releve-geometrique-cadre"
    description: "Notions de géométrie et de répartition des masses d'un cadre"
    system: "fondamentaux"
tools:
  - "Calculatrice et carnet (note de calcul)"
  - "Documentation constructeurs (limites de poids, tailles maxi)"
  - "Composants d'upgrade selon spec (disques, adaptateurs, plaquettes)"
  - "Clé dynamométrique"
  - "Décamètre, chronomètre, thermomètre infrarouge (optionnel)"
safety:
  - "Respecte les limites de masse totale autorisée par les constructeurs de freins et de fourche : un freinage sous-dimensionné sur cargo chargé peut perdre toute puissance par fading en descente."
  - "Tout test anti-fading se fait sur route fermée ou déserte, en augmentant la charge progressivement, jamais avec des passagers."
exercises:
  - title: "Note de calcul + upgrade validé anti-fading"
    summary: "Rédige la note de calcul complète pour un vélo à charge lourde réel (cargo chargé ou tandem), spécifie le freinage cible en la confrontant aux docs constructeur, réalise l'upgrade et valide-le par un protocole de freinages répétés en descente."
    criteria:
      - "1. Note de calcul correcte à ±10 % : énergie cinétique à 25 km/h et énergie potentielle sur un dénivelé de 50 m pour la masse totale réelle (pesée ou calculée poste par poste)."
      - "2. Spécification complète et cohérente : chaque choix (pistons, diamètre/épaisseur de disque, composé, adaptateurs) justifié et conforme aux limites documentées des constructeurs (masse maxi, taille maxi fourche/cadre)."
      - "3. Upgrade monté : tous couples consignés, centrage sans frottement, rodage complet."
      - "4. Protocole anti-fading : 10 freinages consécutifs depuis 25 km/h en charge, à moins de 30 s d'intervalle — allongement de la course du levier ≤ 5 mm et distance d'arrêt du 10e freinage ≤ 120 % de celle du 1er."
      - "5. Aucune fuite ni odeur de surchauffe après le protocole ; disque inspecté (pas de bleuissement)."
      - "6. Dossier livré : note de calcul, spec, mesures avant/après, préconisations d'entretien chiffrées pour l'utilisateur."
references:
  - source: "Magura"
    subject: "Freinage pour cargo et limites de masse totale"
    type: "doc"
  - source: "SRAM"
    subject: "Disques 220 mm et freins 4 pistons : domaines d'usage"
    type: "doc"
  - source: "Sheldon Brown"
    subject: "Freinage des tandems et drag brakes"
    type: "article"
  - source: "BikeRadar"
    subject: "Fading : comprendre la surchauffe des freins à disque"
    type: "article"
  - source: "Vélo Vert"
    subject: "Freinage de descente : dimensionnement et endurance"
    type: "article"
---

