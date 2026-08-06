---
title: "Codes Shimano STEPS et diagnostic par E-TUBE PROJECT"
level: 3
system: "vae"
order: 8
status: "draft"
duration: 40
objectives:
  - "Distinguer les codes E (erreurs bloquantes) et W (avertissements) sur un système STEPS"
  - "Traiter les codes de référence E010, E020, W011 et W013 selon la procédure Shimano"
  - "Utiliser E-TUBE PROJECT pour lire l'état des composants, restaurer un firmware et consulter le journal"
  - "Vérifier une liaison E-TUBE et les câbles EW-SD50 / EW-SD300 quand la communication est en défaut"
prerequisites:
  - slug: "vae-apps-appairage-firmware"
    description: "savoir appairer un vélo avec une application constructeur et effectuer une mise à jour firmware"
    system: "vae"
  - slug: "vae-continuite-faisceau"
    description: "savoir tester la continuité d'un faisceau et manipuler la connectique"
    system: "vae"
  - slug: "vae-capteur-vitesse-aimant-entrefer"
    description: "savoir régler l'entrefer d'un capteur de vitesse"
    system: "vae"
tools:
  - "VAE équipé Shimano STEPS"
  - "ordinateur ou smartphone avec E-TUBE PROJECT"
  - "interface de connexion SM-PCE02 ou liaison Bluetooth"
  - "outil de dépose des câbles E-TUBE (TL-EW02 ou équivalent)"
  - "multimètre"
  - "réglet"
  - "carnet d'atelier"
safety:
  - "Ne jamais interrompre une restauration de firmware d'unité moteur : batterie chargée à plus de 50 % et alimentation de l'ordinateur sécurisée avant de lancer l'opération."
exercises:
  - title: "Diagnostic STEPS complet et traitement d'un W013"
    summary: "Tu connectes un système STEPS à E-TUBE PROJECT, tu relèves l'état de tous les composants, tu provoques et traites un avertissement de capteur (W013 par réinitialisation pied sur pédale, ou W011 par décalage d'aimant) et tu documents l'intervention."
    criteria:
      - "1. Connexion établie à E-TUBE PROJECT et liste complète des composants détectés relevée : au minimum unité moteur, batterie, écran/commande, capteur de vitesse, avec numéro de version pour chacun."
      - "2. Distinction E/W restituée par écrit avec 4 codes de référence expliqués : E010, E020, W011, W013, cause principale et action associée."
      - "3. Au moins 1 avertissement provoqué de façon réversible, lu, puis effacé par la procédure officielle ; effacement confirmé par un cycle d'alimentation complet."
      - "4. Pour W013 : redémarrage effectué sans appui sur les pédales, procédure décrite en 5 étapes numérotées, résultat vérifié 2 fois sur 2."
      - "5. Pour W011 : entrefer aimant/capteur mesuré et rétabli dans la plage 3-17 mm avec au moins 2 mm de marge, valeur consignée."
      - "6. Journal de diagnostic exporté ou recopié au carnet, comportant date, codes relevés, actions menées, état final sans code actif."
references:
  - source: "Shimano"
    subject: "liste des codes d'erreur et d'avertissement STEPS et procédures de résolution"
    type: "doc"
  - source: "Shimano"
    subject: "E-TUBE PROJECT Professional : diagnostic, restauration de firmware et journal"
    type: "outil"
  - source: "Shimano"
    subject: "documentation technique des câbles EW-SD50 / EW-SD300 et de l'outil de dépose"
    type: "doc"
  - source: "E-MOUNTAINBIKE Magazine"
    subject: "codes d'erreur Shimano STEPS et solutions pratiques"
    type: "article"
  - source: "Upway"
    subject: "dépannage des systèmes Shimano STEPS en atelier"
    type: "article"
---

