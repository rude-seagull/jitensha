---
title: "Diagnostiquer un moteur moyeu : phases, capteurs Hall et contrôleur"
level: 4
system: "vae"
order: 4
status: "draft"
duration: 45
objectives:
  - "Identifier les conducteurs d'un moteur moyeu : trois phases de puissance et cinq fils de capteurs Hall"
  - "Mesurer la résistance entre phases et l'isolement phase/carcasse pour détecter un bobinage défaillant"
  - "Tester les capteurs Hall en rotation lente et interpréter la séquence obtenue"
  - "Isoler la panne entre moteur, faisceau et contrôleur par mesures croisées"
prerequisites:
  - slug: "vae-multimetre-prise-en-main"
    description: "savoir mesurer tension, continuité et résistance au multimètre en sécurité"
    system: "vae"
  - slug: "vae-cartographie-faisceau-brochage"
    description: "savoir cartographier un faisceau et relever un brochage"
    system: "vae"
  - slug: "vae-roue-moteur-torque-arm"
    description: "savoir déposer et reposer une roue à moteur moyeu"
    system: "vae"
tools:
  - "multimètre numérique avec gamme résistance basse et gamme tension continue"
  - "pointes de test fines"
  - "alimentation 5 V stabilisée ou source depuis le contrôleur"
  - "pied d'atelier"
  - "carnet d'atelier"
  - "schéma de brochage du moteur"
safety:
  - "Les phases d'un moteur moyeu en rotation génèrent une tension : ne jamais toucher les broches nues pendant qu'on fait tourner la roue à la main."
  - "Court-circuiter deux phases d'un moteur en rotation provoque un freinage brutal : effectuer ce test uniquement avec la roue démontée du vélo et solidement maintenue."
  - "Batterie déposée pour toute mesure de résistance et d'isolement."
exercises:
  - title: "Bilan électrique complet d'un moteur moyeu"
    summary: "Tu réalises le bilan électrique complet d'un moteur moyeu : équilibre des phases, isolement, test des capteurs Hall en rotation, puis tu conclus sur l'état du moteur en isolant contrôleur et faisceau."
    criteria:
      - "1. Brochage identifié et noté : 3 phases et 5 conducteurs de capteurs (alimentation, masse, 3 signaux), avec code couleur relevé et schéma dessiné."
      - "2. Résistance mesurée entre les 3 paires de phases : les 3 valeurs sont cohérentes entre elles avec une dispersion inférieure ou égale à 10 %, valeurs notées à 0,1 ohm près ; toute dispersion supérieure est signalée comme bobinage suspect."
      - "3. Isolement phase/carcasse mesuré sur les 3 phases : résistance supérieure à 1 mégohm sur 3 mesures sur 3, sinon défaut d'isolement déclaré."
      - "4. Test de rotation libre : la roue tourne à la main sans point dur, et sa décélération libre est chronométrée puis comparée phases ouvertes / phases court-circuitées, différence nette constatée et notée."
      - "5. Capteurs Hall testés sous 5 V en rotation lente : les 3 signaux basculent chacun entre état haut et état bas, avec 6 combinaisons distinctes observées sur un tour de moteur, séquence consignée."
      - "6. Conclusion écrite en 10 lignes maximum désignant l'organe fautif (moteur, faisceau, contrôleur) et la mesure de confirmation restante, avec la décision de remplacement ou de réparation."
references:
  - source: "Grin Technologies"
    subject: "diagnostic des moteurs moyeu : test des phases, des capteurs Hall et de l'isolement"
    type: "article"
  - source: "Bafang"
    subject: "brochages des moteurs moyeu et valeurs de contrôle des capteurs Hall"
    type: "doc"
  - source: "LEVA (Light Electric Vehicle Association)"
    subject: "diagnostic des moteurs brushless de véhicules électriques légers"
    type: "doc"
  - source: "Mahle / ebikemotion"
    subject: "architecture des moyeux moteur X35 / X20 et diagnostic constructeur"
    type: "doc"
  - source: "Fluke"
    subject: "mesure d'isolement et de résistance faible sur bobinages"
    type: "doc"
---

