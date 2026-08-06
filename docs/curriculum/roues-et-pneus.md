# Système « roues-et-pneus »

> Part of the Jitensha curriculum — see [`CURRICULUM.md`](../../CURRICULUM.md) for the overview. Lesson data is French (course content); scaffolding is English per project rules.

Tout ce qui touche à la roue et au contact avec le sol : pneus et chambres à air, tubeless (conversion, réparation, inserts, pressions), moyeux à cônes et à roulements scellés, corps de roue libre (HG, XD/XDR, Microspline), dévoilage, centrage et tension des rayons, puis, au niveau maître, la construction complète de roues depuis zéro (ERD, calcul de rayons, laçage croisé par 3 et alternatifs, mise en tension, stress relieving, tolérances chiffrées). Le système couvre toutes les familles de vélos : ville, route, VTT, VAE, cargo, pliant, vintage et bikepacking.

**Progression logic:** Trois fils parallèles progressent ensemble et se rejoignent au niveau 5. Fil pneumatique : au niveau 1 le débutant apprend à lire, gonfler, démonter et réparer pneu et chambre (compétence de survie n°1 du cycliste) ; au niveau 2 il passe au choix raisonné des pneus, aux pressions calculées et au tubeless complet (compatibilité, ruban, talonnage, préventif, inserts, réparation) ; au niveau 4 il aborde les cas experts : jantes carbone et hookless, boyaux. Fil moyeux : détection de jeu au niveau 1 (via l'inspection), réglage des cônes au niveau 2, révisions complètes (cônes-billes et roulements scellés) et corps de roue libre au niveau 3, conversions d'axes et compatibilités croisées au niveau 4. Fil rayonnage : retouche de voile sur le vélo au niveau 2, dévoilage/centrage/tension au banc avec tensiomètre au niveau 3, diagnostic de fatigue au niveau 4, puis construction complète au niveau 5 en six leçons séquentielles (conception, métrologie ERD, calcul, laçage, mise en tension, finition aux tolérances pro : voile ≤ 0,25 mm, saut ≤ 0,5 mm, dish ≤ 0,5 mm, dispersion de tension ≤ 20 %) plus les laçages alternatifs (radial, croisé par 2, 36-40 trous cargo/tandem). Chaque leçon exige les précédentes de son fil ; le niveau d'une leçon correspond au moment où l'apprenant dispose des outils et des prérequis (couple, cassette, matériaux) enseignés ailleurs. Les guardrails sont respectés : cassettes et IGH restent dans transmission, freewheels vintage et réparation tubeless en rando dans cas-exotiques, moyeux dynamo dans cas-exotiques, M-check et discipline du couple dans fondamentaux ; montage-et-peinture référence la construction de roue d'ici.

## Niveau 1 — Débutant

### 1. Anatomie d'une roue : de la jante au moyeu `anatomie-roue`

- **Durée :** 25 min
- **Prérequis :**
  - [Anatomie du vélo : nomme chaque pièce](fondamentaux.md) `anatomie-velo`
- **Outils :** Un vélo complet, Une roue déposée (avant ou arrière), Lampe frontale ou baladeuse

**Objectifs :**
- Identifier et nommer tous les composants d'une roue : jante, fond de jante, œillets, rayons, écrous de rayon, moyeu, flasques, axe, corps de roue libre, pneu, chambre, valve
- Distinguer une roue avant d'une roue arrière et repérer le côté transmission en un coup d'œil
- Comprendre le principe de la roue précontrainte : les rayons travaillent en traction, jamais en compression
- Compter rayons et trous de jante et repérer les montages courants (28, 32, 36 trous)

**TP — Cartographie de deux roues**

Sur une roue de route et une roue de VTT ou de ville, pointe et nomme chaque composant, repère le sens de montage, compte rayons et trous, et note les différences entre les deux roues dans ton carnet d'atelier.

Critères de validation :
1. 1. 12 composants sur 12 nommés correctement sur chacune des deux roues
2. 2. Côté transmission identifié en moins de 10 secondes sur une roue arrière présentée au hasard
3. 3. Nombre de rayons et de trous compté sans erreur sur les deux roues
4. 4. Au moins 3 différences structurelles route/VTT notées dans le carnet (largeur de jante, section de pneu, nombre de rayons...)

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : vocabulaire et composants d'une roue de vélo
- article — Sheldon Brown : structure et fonctionnement des roues à rayons
- video — GCN en français : les composants d'un vélo expliqués aux débutants

### 2. Lire un pneu : ETRTO, pouces et repères d'usure `dimensions-pneu-etrto`

- **Durée :** 30 min
- **Prérequis :**
  - [Anatomie d'une roue : de la jante au moyeu](#anatomie-roue) `anatomie-roue`
- **Outils :** 5 pneus variés (route, VTT, ville, pliant ou vintage si possible), Pied à coulisse, Carnet d'atelier

**Objectifs :**
- Décoder les trois systèmes de dimensions : ETRTO (ex. 25-622), pouces (ex. 29×2.4) et notation française (ex. 700×25C)
- Convertir entre systèmes et éviter les pièges classiques (27 pouces ≠ 700C, 650B = 27,5 pouces, tailles de pliants 16/20 pouces)
- Évaluer l'usure d'un pneu : témoins, hernies, craquelures, carcasse apparente, et décider s'il doit être remplacé
- Lire les autres marquages du flanc : sens de rotation, pression min/max, tringle rigide ou souple

**TP — Relevé de marquages et verdicts d'usure**

Sur 5 pneus différents, relève tous les marquages du flanc, convertis chaque dimension dans les deux autres systèmes, mesure la largeur réelle au pied à coulisse et rends un verdict d'usure motivé pour chacun.

Critères de validation :
1. 1. Dimension ETRTO relevée et convertie correctement pour 5 pneus sur 5
2. 2. Largeur réelle mesurée au pied à coulisse avec un écart documenté vs la largeur nominale pour chaque pneu
3. 3. Verdict d'usure (OK / à surveiller / à remplacer) correct sur au moins 4 pneus sur 5, chaque verdict justifié par un signe observable précis
4. 4. Le piège 27 pouces vs 700C expliqué en moins de 60 secondes à voix haute

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : systèmes de dimensions des pneus de vélo
- doc — Schwalbe : tableau des dimensions ETRTO et marquages de pneus
- article — Bike Gremlin : standards de dimensions des pneus expliqués
- article — Park Tool : correspondance pneu, chambre et jante

### 3. Valves et gonflage : Presta, Schrader, Dunlop et la bonne pression `valves-et-gonflage`

- **Durée :** 30 min
- **Prérequis :**
  - [Lire un pneu : ETRTO, pouces et repères d'usure](#dimensions-pneu-etrto) `dimensions-pneu-etrto`
- **Outils :** Pompe à pied avec manomètre, Démonte-obus, Adaptateur Presta/Schrader, Manomètre digital (optionnel)
- **⚠️ Sécurité :**
  - Ne dépasse jamais la pression maximale la plus basse entre celle du pneu et celle de la jante : un pneu qui déjante sous pression explose et peut blesser gravement.

**Objectifs :**
- Identifier les trois types de valves (Presta, Schrader, Dunlop des vélos de ville) et utiliser les adaptateurs
- Démonter et remonter un obus de valve Presta et diagnostiquer une valve qui fuit
- Gonfler à une pression cible avec une pompe à pied à manomètre, en convertissant bar et psi
- Choisir une plage de pression de départ selon le type de vélo et la section du pneu

**TP — Session de gonflage de précision**

Sur trois vélos à valves différentes, gonfle chaque pneu à une pression cible calculée, vérifie au manomètre digital, puis démonte et remonte un obus Presta et re-teste l'étanchéité.

Critères de validation :
1. 1. Trois pneus gonflés à la cible avec un écart ≤ 5 % vérifié au manomètre digital
2. 2. Conversion bar/psi effectuée de tête avec un écart ≤ 10 % sur 5 valeurs proposées
3. 3. Obus démonté puis remonté : aucune fuite audible ni perte mesurable après 10 minutes
4. 4. Type de valve des trois vélos identifié sans erreur, adaptateur utilisé correctement au moins une fois

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : types de valves et gonflage des pneus
- video — Park Tool : gonfler un pneu de vélo, démonstration
- doc — Schwalbe : pression des pneus, principes et recommandations

### 4. Déposer et reposer une roue : serrage rapide, axe traversant, écrous `depose-repose-roue`

- **Durée :** 35 min
- **Prérequis :**
  - [Anatomie d'une roue : de la jante au moyeu](#anatomie-roue) `anatomie-roue`
  - [Mesurer et décoder : pied à coulisse et marquages](fondamentaux.md) `pied-a-coulisse-et-marquages`
- **Outils :** Pied d'atelier, Clé dynamométrique et embouts 5/6 mm, Clé plate 15 mm (écrous de ville), Cale d'écartement de plaquettes
- **⚠️ Sécurité :**
  - Un serrage rapide mal fermé peut lâcher la roue en roulant : le levier doit laisser une marque dans la paume et pointer vers l'arrière ou le haut.
  - Roue à disque déposée : ne touche jamais au levier de frein sans cale, sinon les pistons hydrauliques se referment.

**Objectifs :**
- Déposer et reposer une roue avant et arrière avec serrage rapide, axe traversant et écrous (vélo de ville)
- Fermer un serrage rapide correctement : position du levier, force de fermeture, ergots de sécurité
- Gérer la roue arrière sans toucher au dérailleur : bon pignon, geste d'extraction, remise en place
- Prendre les précautions frein à disque : ne jamais actionner le levier roue déposée, cale d'écartement

**TP — Rotation dépose/repose sur trois standards**

Dépose et repose la roue arrière sur trois vélos (serrage rapide, axe traversant, écrous), chronomètre-toi, et fais valider la fermeture du serrage rapide et le couple de l'axe.

Critères de validation :
1. 1. Roue arrière à serrage rapide déposée et reposée en moins de 2 minutes, sans toucher le disque ni forcer sur le dérailleur
2. 2. Serrage rapide fermé avec résistance à mi-course du levier et marque visible dans la paume ; levier orienté vers l'arrière ou le haut
3. 3. Axe traversant serré au couple gravé sur l'axe ou le cadre, avec un écart ≤ 10 % au contrôle croisé
4. 4. Écrous de ville serrés en alternance, roue centrée dans le cadre (écart visuel jante/haubans symétrique à ±1 mm)
5. 5. Après repose, la roue tourne sans frotter les plaquettes ou les patins sur un tour complet

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : dépose et pose d'une roue avant et arrière
- article — Park Tool : utilisation correcte du serrage rapide
- doc — Shimano : manuel du revendeur, axes traversants E-Thru
- video — GCN en français : enlever et remettre une roue arrière sans stress

### 5. Démonter et remonter un pneu à chambre sans pincer `demontage-pneu-chambre`

- **Durée :** 40 min
- **Prérequis :**
  - [Valves et gonflage : Presta, Schrader, Dunlop et la bonne pression](#valves-et-gonflage) `valves-et-gonflage`
  - [Déposer et reposer une roue : serrage rapide, axe traversant, écrous](#depose-repose-roue) `depose-repose-roue`
- **Outils :** Démonte-pneus (x3), Pompe à pied avec manomètre, Chambre à air de rechange, Talc (optionnel)

**Objectifs :**
- Déjanter un pneu avec ou sans démonte-pneus en utilisant le fond de gorge de la jante
- Remonter pneu et chambre sans pincement : pré-gonflage léger, talon dans la gorge, finition à la paume
- Venir à bout d'un pneu à tringle serrée sans casser de démonte-pneus ni abîmer la tringle
- Contrôler le centrage du talon avec la ligne témoin avant le gonflage final

**TP — Trois cycles complets démontage/remontage**

Sur la même roue, enchaîne trois cycles complets : déjantage, extraction de la chambre, remontage avec valve alignée sur le marquage du pneu, gonflage et contrôle de la ligne de talon. Le troisième cycle est chronométré.

Critères de validation :
1. 1. Trois remontages sans aucun pincement : la chambre tient la pression cible pendant 24 h avec une perte ≤ 5 %
2. 2. Ligne témoin du talon régulière sur toute la circonférence, ondulation ≤ 1 mm des deux côtés
3. 3. Valve perpendiculaire à la jante et alignée avec le marquage du pneu sur les trois remontages
4. 4. Troisième cycle complet réalisé en moins de 10 minutes
5. 5. Aucun démonte-pneus utilisé côté remontage sur au moins un des trois cycles (finition à la paume)

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : démontage et montage d'un pneu et d'une chambre
- article — Park Tool : montage des pneus à tringle serrée, astuces
- doc — Continental : instructions de montage des pneus vélo
- video — GCN en français : changer une chambre à air rapidement

### 6. Réparer une crevaison et diagnostiquer sa cause `reparation-crevaison-chambre`

- **Durée :** 40 min
- **Prérequis :**
  - [Démonter et remonter un pneu à chambre sans pincer](#demontage-pneu-chambre) `demontage-pneu-chambre`
- **Outils :** Kit de rustines vulcanisantes (dissolution + rustines), Bac d'eau, Craie ou marqueur, Papier de verre fin, Pompe à pied

**Objectifs :**
- Localiser une fuite (à l'oreille, à l'eau) et poser une rustine vulcanisante qui tient dans le temps
- Inspecter l'intérieur de la carcasse et le fond de jante pour trouver et éliminer la cause
- Diagnostiquer le type de crevaison d'après le motif du trou : perforation, pincement (double trou serpent), valve arrachée, rayon ou fond de jante
- Décider quand une chambre part à la poubelle (déchirure à la valve, trou trop grand, rustines multiples)

**TP — Réparations et quiz de diagnostic**

Répare deux chambres percées (dont une avec double trou de pincement), puis identifie la cause de crevaison sur quatre chambres mystères préparées à l'avance, uniquement d'après le motif des trous.

Critères de validation :
1. 1. Deux rustines posées : bords parfaitement collés (aucun soulèvement à l'ongle), chambre tenant la pression 24 h avec perte ≤ 5 %
2. 2. Cause identifiée correctement sur au moins 3 des 4 chambres mystères, avec justification
3. 3. Inspection systématique démontrée : carcasse palpée sur 100 % de la circonférence ET fond de jante contrôlé avant tout remontage
4. 4. Temps de réparation complète (localisation → rustine sèche prête à remonter) ≤ 15 minutes par chambre

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : réparation d'une chambre à air à la rustine
- doc — Rema Tip Top : application des rustines vulcanisantes
- article — Sheldon Brown : crevaisons, causes et prévention

## Niveau 2 — Intermédiaire

### 1. Standards d'axes et d'entraxes : identifier ce que ton cadre accepte `standards-axes-roues`

- **Durée :** 35 min
- **Prérequis :**
  - [Déposer et reposer une roue : serrage rapide, axe traversant, écrous](#depose-repose-roue) `depose-repose-roue`
  - [Mesurer et décoder : pied à coulisse et marquages](fondamentaux.md) `pied-a-coulisse-et-marquages`
- **Outils :** Pied à coulisse numérique, Réglet, 3 vélos ou cadres de générations différentes, Carnet d'atelier

**Objectifs :**
- Mesurer un entraxe (OLD) au pied à coulisse et le rattacher aux standards : 100/130 route, 100/135 QR, 12×100, 12×142, 15×110 et 12×148 Boost, 157 Super Boost
- Distinguer serrage rapide 5 mm, axes traversants 12 et 15 mm, et écrous pleins de vélo de ville
- Identifier le filetage et la longueur d'un axe traversant pour commander le bon rechange
- Déterminer quelle roue de remplacement est compatible avec un cadre donné

**TP — Fiche d'identité axes/entraxes de trois vélos**

Mesure entraxes avant et arrière, diamètres et types d'axes sur trois vélos de générations différentes, remplis une fiche standard pour chacun, puis choisis dans un catalogue fictif la roue de remplacement compatible.

Critères de validation :
1. 1. Six entraxes mesurés avec un écart ≤ 0,5 mm par rapport au standard réel identifié
2. 2. Standard nommé correctement (ex. 12×142) pour les 6 positions, y compris le filetage de l'axe traversant relevé
3. 3. Roue de remplacement compatible choisie correctement dans les 3 scénarios catalogue, incompatibilités justifiées
4. 4. Fiche complète consignée au carnet en moins de 30 minutes pour les trois vélos

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : standards d'axes et d'espacement des moyeux
- article — Bike Gremlin : entraxes de moyeux (OLD), standards expliqués
- outil — Robert Axle Project : identifier le filetage et la longueur d'un axe traversant
- article — Sheldon Brown : espacement des pattes de cadre et compatibilité

### 2. Choisir ses pneus et calculer la bonne pression `choix-pneus-et-pression`

- **Durée :** 45 min
- **Prérequis :**
  - [Lire un pneu : ETRTO, pouces et repères d'usure](#dimensions-pneu-etrto) `dimensions-pneu-etrto`
  - [Valves et gonflage : Presta, Schrader, Dunlop et la bonne pression](#valves-et-gonflage) `valves-et-gonflage`
- **Outils :** Pied à coulisse, Manomètre digital, Calculateur de pression (application ou tableau), Balance ou pèse-personne
- **⚠️ Sécurité :**
  - Jante hookless : la pression ne doit JAMAIS dépasser 5 bar / 72,5 psi, sous peine de déjantage brutal. Vérifie toujours la compatibilité pneu/jante annoncée par les deux fabricants.

**Objectifs :**
- Décrypter carcasse (TPI), gomme, bandes anti-crevaison et tringle souple/rigide pour choisir un pneu selon l'usage
- Prendre en compte les cas spéciaux : indice de charge pour cargo, marquage ECE-R75 obligatoire sur speed pedelec, pneus renforcés VAE, petites roues de pliant
- Calculer une pression optimale avant/arrière avec un calculateur (poids total, section réelle, largeur interne de jante, terrain)
- Appliquer strictement la limite hookless : jamais plus de 5 bar / 72,5 psi sur jante sans crochets

**TP — Trois scénarios de choix et de pression**

Pour trois cas concrets (route 28 mm cycliste 75 kg, VTT tubeless 2.4 pouces, biporteur chargé à 60 kg), choisis un pneu dans un catalogue en justifiant, calcule les pressions avant/arrière au calculateur, gonfle et vérifie au manomètre digital.

Critères de validation :
1. 1. Trois choix de pneus justifiés chacun par au moins 2 critères techniques (TPI, protection, indice de charge, marquage ECE-R75...)
2. 2. Pressions calculées avec les bons paramètres d'entrée (poids total vérifié à la balance, largeur interne de jante mesurée) pour les 3 scénarios
3. 3. Pressions réglées avec un écart ≤ 0,2 bar par rapport à la cible, vérifié au manomètre digital
4. 4. Sur un scénario hookless imposé, pression proposée ≤ 5 bar et compatibilité pneu/jante vérifiée dans le tableau fabricant sans erreur

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- outil — SRAM/Zipp : guide de calcul de pression des pneus AXS
- outil — Silca : calculateur de pression professionnel
- doc — Schwalbe : types de pneus, indices de charge et pneus VAE ECE-R75
- article — BikeRadar : pression des pneus, ce que dit la science
- doc — Zipp/SRAM : limite de pression des jantes hookless 72,5 psi

### 3. Fond de jante classique et ruban tubeless : la base de l'étanchéité `fond-de-jante-et-ruban-tubeless`

- **Durée :** 40 min
- **Prérequis :**
  - [Démonter et remonter un pneu à chambre sans pincer](#demontage-pneu-chambre) `demontage-pneu-chambre`
- **Outils :** Ruban tubeless (largeur = largeur interne + 2 à 4 mm), Fond de jante classique, Valves tubeless, Cutter ou poinçon, Chiffon et alcool isopropylique, Rouleau ou chambre gonflée pour maroufler

**Objectifs :**
- Reconnaître une jante tubeless-ready (profil, marquages) et choisir entre fond de jante classique et ruban tubeless
- Poser un fond de jante classique adapté (largeur, pression max) qui couvre tous les trous de rayon
- Poser un ruban tubeless : bonne largeur, tension constante, recouvrement à la valve, zéro pli ni bulle
- Percer proprement le passage de valve et monter une valve tubeless étanche

**TP — Deux jantes, deux techniques**

Dépose l'ancien fond de jante de deux roues, nettoie et dégraisse les fonds de jante, pose un fond classique sur la première et un ruban tubeless avec valve sur la seconde, puis teste l'étanchéité de la valve à l'eau savonneuse.

Critères de validation :
1. 1. Fond classique : centré sur toute la circonférence (±1 mm), tous les trous de rayon couverts, aucun bourrelet à la valve
2. 2. Ruban tubeless : posé en tension continue, zéro pli et zéro bulle au droit des trous de rayon, recouvrement de 10 à 20 cm passant sur le trou de valve
3. 3. Perçage de valve net (poinçon à chaud ou cutter en croix), valve serrée à la main : zéro bulle au test à l'eau savonneuse pendant 60 secondes
4. 4. Largeur de ruban choisie et justifiée par la mesure de la largeur interne de la jante au pied à coulisse

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : pose du fond de jante et du ruban tubeless
- doc — Stan's NoTubes : procédure officielle de pose du ruban tubeless
- doc — DT Swiss : préparation tubeless d'une jante, manuel technique

### 4. Talonnage, préventif et inserts : finaliser un montage tubeless `talonnage-tubeless-et-inserts`

- **Durée :** 45 min
- **Prérequis :**
  - [Fond de jante classique et ruban tubeless : la base de l'étanchéité](#fond-de-jante-et-ruban-tubeless) `fond-de-jante-et-ruban-tubeless`
  - [Choisir ses pneus et calculer la bonne pression](#choix-pneus-et-pression) `choix-pneus-et-pression`
- **Outils :** Pompe à fût (booster) ou compresseur, Préventif et seringue doseuse, Démonte-obus, Eau savonneuse en pulvérisateur, Insert anti-pincement et démonte-pneus renforcés, Manomètre digital
- **⚠️ Sécurité :**
  - Au talonnage, respecte la pression max du pneu ET de la jante, porte des lunettes et garde le visage à l'écart du plan de la roue : un talon qui lâche projette du préventif et peut déjanter violemment.

**Objectifs :**
- Faire claquer les talons d'un pneu tubeless avec pompe à fût, compresseur ou gonfleur, avec ou sans eau savonneuse
- Doser et injecter le préventif selon la section (30-60 ml route, 60-120 ml VTT) et le répartir correctement
- Vérifier l'étanchéité sur 24 h et corriger les fuites (talon, valve, ruban)
- Monter et démonter un insert anti-pincement et adapter le montage en conséquence

**TP — Conversion tubeless complète et étanche**

Monte un pneu tubeless sur ta jante rubanée : talonnage à sec, injection du préventif par la valve, répartition, gonflage à la pression cible et suivi de la pression sur 24 h.

Critères de validation :
1. 1. Les deux talons claquent et la ligne témoin est régulière sur 360° (ondulation ≤ 1 mm)
2. 2. Volume de préventif dosé à la seringue avec un écart ≤ 10 ml par rapport à la préconisation fabricant
3. 3. Perte de pression ≤ 10 % après 24 h, mesurée au manomètre digital
4. 4. Toute fuite détectée à l'eau savonneuse localisée et corrigée en une seule intervention

**TP — Montage d'un insert anti-pincement**

Démonte le pneu tubeless, installe un insert de la bonne taille, remonte, re-talonne et vérifie que la valve à embase dégagée fonctionne.

Critères de validation :
1. 1. Insert monté et pneu re-talonné en moins de 20 minutes
2. 2. Valve non obstruée : gonflage et dégonflage possibles, jet de préventif visible à l'injection
3. 3. Pression stable à 24 h avec perte ≤ 10 % malgré l'insert

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : montage tubeless complet, talonnage et préventif
- doc — Stan's NoTubes : dosage et entretien du préventif
- video — CushCore : installation d'un insert anti-pincement
- video — GCN en français : passer au tubeless sans compresseur

### 5. Réparer et entretenir un tubeless : mèches, patchs internes, préventif `reparation-entretien-tubeless`

- **Durée :** 40 min
- **Prérequis :**
  - [Talonnage, préventif et inserts : finaliser un montage tubeless](#talonnage-tubeless-et-inserts) `talonnage-tubeless-et-inserts`
- **Outils :** Kit mèches avec alène, Patchs internes et dissolution, Seringue et tuyau de jauge, Préventif, Pince coupante, Chiffons, alcool isopropylique
- **⚠️ Sécurité :**
  - Une mèche sur le flanc ou une coupure > 6 mm n'est qu'un dépannage : le pneu doit être remplacé ou réparé par patch interne avant de rouler à pression normale.

**Objectifs :**
- Réparer une coupure à la mèche sans démonter le pneu et juger si la réparation est durable
- Poser un patch interne vulcanisé sur une coupure trop grande pour une mèche
- Contrôler le niveau de préventif (secouage, jauge par la valve) et faire l'appoint au bon intervalle (2 à 6 mois selon climat)
- Nettoyer un pneu et une jante du préventif séché et décider de la fin de vie d'un pneu tubeless

**TP — Trois réparations sur pneu sacrifié**

Sur un pneu tubeless monté, perce une coupure de 3-4 mm en bande de roulement et répare à la mèche sous pression ; puis traite une coupure de 8 mm au patch interne ; termine par un contrôle de niveau et un appoint de préventif dosé.

Critères de validation :
1. 1. Mèche posée en moins de 3 minutes, pneu regonflé : pression de service tenue 24 h avec perte ≤ 10 %
2. 2. Patch interne : bords collés à 100 % (aucun soulèvement), pneu remonté et étanche 24 h
3. 3. Niveau de préventif estimé avant ouverture avec un écart ≤ 20 ml par rapport au volume réellement récupéré
4. 4. Appoint injecté par la valve sans déjanter, volume dosé à ±10 ml de la cible

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : réparation des pneus tubeless, mèches et patchs
- doc — Dynaplug : utilisation des mèches de réparation tubeless
- doc — Stan's NoTubes : intervalles de renouvellement du préventif
- video — Berm Peak : réparations tubeless comparées en conditions réelles

### 6. Retoucher un voile sur le vélo et contrôler l'usure de la jante `retouche-voile-et-usure-jante`

- **Durée :** 40 min
- **Prérequis :**
  - [Anatomie d'une roue : de la jante au moyeu](#anatomie-roue) `anatomie-roue`
- **Outils :** Clé à rayons de la bonne taille, Colliers rilsan, Règle courte et pied à coulisse, Marqueur, Pied d'atelier
- **⚠️ Sécurité :**
  - Une jante à patins usée au-delà du témoin peut éclater sous la pression du pneu : concavité marquée ou fissures = remplacement immédiat, pas de retouche.

**Objectifs :**
- Choisir la bonne clé à rayons (3,23 / 3,30 / 3,45 mm) et comprendre le sens de rotation des écrous vus depuis le pneu
- Corriger un voile latéral léger directement sur le vélo en utilisant patins, plaquettes ou un collier rilsan comme comparateur
- Contrôler l'usure d'une jante à freinage sur jante : témoins, concavité mesurée à la règle et au pied à coulisse, fissures aux œillets
- Savoir s'arrêter : reconnaître quand la roue relève du banc de dévoilage ou du remplacement de jante

**TP — Retouche d'un voile de 2 mm et audit d'usure**

Sur une roue volontairement voilée à 2 mm, ramène le voile sous 1 mm avec des corrections d'un quart de tour maximum, puis rends un verdict d'usure documenté sur trois jantes différentes.

Critères de validation :
1. 1. Voile latéral ramené de 2 mm à ≤ 1 mm, mesuré au comparateur improvisé (rilsan ou patin)
2. 2. Aucune correction supérieure à 1/2 tour d'écrou par passe ; toutes les corrections consignées au carnet
3. 3. Verdict d'usure correct sur 3 jantes sur 3 (OK / à surveiller / à remplacer), avec mesure de concavité chiffrée à l'appui
4. 4. Tension au son homogène après retouche : aucun rayon franchement détendu (contrôle par pincement des paires)

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : dévoilage d'urgence d'une roue sur le vélo
- article — Park Tool : usure des jantes à freinage sur jante, quand remplacer
- article — Sheldon Brown : principes du dévoilage de roue
- doc — Mavic : témoins d'usure des jantes, documentation technique

### 7. Régler le jeu d'un moyeu à cônes et billes `reglage-cones-moyeu`

- **Durée :** 40 min
- **Prérequis :**
  - [Standards d'axes et d'entraxes : identifier ce que ton cadre accepte](#standards-axes-roues) `standards-axes-roues`
  - Connaître la logique serrage/contre-écrou et l'usage des clés plates fines *(fondamentaux)*
- **Outils :** Clés à cônes 13/14/15/16/17 mm, Clé plate pour contre-écrou, Étau avec mordaches (optionnel), Chiffon

**Objectifs :**
- Diagnostiquer un moyeu : jeu latéral à la jante, rotation rugueuse, point dur
- Utiliser les clés à cônes pour régler contre-écrou et cône sans tout démonter
- Intégrer l'effet du serrage rapide : régler avec un jeu résiduel infime qui disparaît une fois la roue serrée
- Vérifier le réglage final : rotation libre, zéro jeu perceptible au niveau de la jante

**TP — Réglage avant et arrière au jeu zéro**

Sur un vélo à moyeux à cônes (ville ou vintage), diagnostique l'état des deux moyeux, règle-les, remonte les roues et valide le comportement sous serrage rapide.

Critères de validation :
1. 1. Diagnostic initial consigné : jeu et rugosité notés pour chaque moyeu avant intervention
2. 2. Après réglage, roue montée et serrée : aucun jeu perceptible en poussant latéralement la jante, avant et arrière
3. 3. L'axe tourne entre les doigts sans point dur ni accrochage sur un tour complet
4. 4. Contre-écrous bloqués : le réglage ne bouge pas après 10 rotations rapides de la roue et une re-vérification
5. 5. Réglage complet des deux moyeux en moins de 40 minutes

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : réglage d'un moyeu à cônes et billes
- video — Park Tool : ajustement des moyeux cup-and-cone, démonstration
- article — Sheldon Brown : réglage des cônes de moyeux
- doc — Shimano : manuel du revendeur, moyeux à billes

### 8. Roue en rade au bord de la route : dépannages d'urgence `depannage-roue-terrain`

- **Durée :** 40 min
- **Prérequis :**
  - [Déposer et reposer une roue : serrage rapide, axe traversant, écrous](#depose-repose-roue) `depose-repose-roue`
  - [Démonter et remonter un pneu à chambre sans pincer](#demontage-pneu-chambre) `demontage-pneu-chambre`
  - [Réparer une crevaison et diagnostiquer sa cause](#reparation-crevaison-chambre) `reparation-crevaison-chambre`
  - [Retoucher un voile sur le vélo et contrôler l'usure de la jante](#retouche-voile-et-usure-jante) `retouche-voile-et-usure-jante`
  - [Réparer et entretenir un tubeless : mèches, patchs internes, préventif](#reparation-entretien-tubeless) `reparation-entretien-tubeless`
- **Outils :** Démonte-pneus, Chambre de secours et rustines, Rustines de flanc (boot) ou matière de fortune : emballage de barre, billet, morceau de vieux pneu, Mèches tubeless et outil d'insertion, Pompe de terrain et cartouches CO2, Clé à rayons du bon calibre, Rayon d'urgence textile ou articulé, Colliers Rilsan et ruban adhésif toilé, Multitool, Chronomètre
- **⚠️ Sécurité :**
  - Une rustine de flanc est un dépannage de retour, rien d'autre : pression réduite d'environ 20 %, pas de descente rapide, et surveillance de la hernie à chaque arrêt.
  - Rayon cassé laissé battant : il casse ses voisins et la roue s'affaisse. On le replie ou on le retire, systématiquement.
  - Une jante entaillée, fendue ou dont le crochet est ouvert n'est pas dépannable : la roue est hors service, on ne la regonfle pas.
  - Cartouche CO2 : le corps givre instantanément et colle à la peau. Manipule avec un manchon ou un chiffon épais.
  - Frein sur jante rouvert ou desserré pour laisser passer une roue voilée : tu roules alors avec un freinage dégradé, adapte ta vitesse et annonce-le.

**Objectifs :**
- Poser une rustine de flanc (boot) qui tient jusqu'à la maison et connaître ses limites
- Neutraliser un rayon cassé et redonner à la roue une géométrie roulable
- Ramener un voile qui frotte à une valeur acceptable sans banc ni tensiomètre
- Talonner un tubeless sans compresseur, ou décider de passer une chambre
- Décider à quelle vitesse et sur quel terrain tu rentres avec une roue dégradée

**TP — Atelier sabotage : trois roues, une sacoche**

Trois roues cobayes sont sabotées à l'avance : un flanc entaillé sur 12 mm, un rayon coupé, un voile latéral de 8 mm. Tu les remets en état roulable avec le seul contenu de ta sacoche, chrono en main.

Critères de validation :
1. 1. Chaque cas traité en moins de 20 minutes chrono, diagnostic compris, avec le seul contenu réel de la sacoche.
2. 2. Flanc entaillé : boot posé et centré sur la coupure, pneu regonflé à une pression réduite d'au moins 20 % par rapport à la pression habituelle, aucune hernie dépassant 2 mm au contrôle visuel et tactile.
3. 3. Étanchéité du cas flanc : perte de pression ≤ 0,3 bar après 15 minutes, mesurée au manomètre, et boot toujours en place après un tour de roue en charge.
4. 4. Rayon cassé : rayon replié sur ses voisins ou remplacé par un rayon d'urgence, au maximum un tour de détente sur chacun des 2 rayons voisins, voile résiduel ≤ 3 mm mesuré au patin ou à l'étrier de référence.
5. 5. Roue au rayon cassé remontée dans le cadre : passage libre garanti, frein rouvert ou desserré si nécessaire, et le fait est annoncé comme freinage dégradé.
6. 6. Voile de 8 mm ramené à ≤ 3 mm sans banc de dévoilage, en ne touchant qu'aux rayons de la zone concernée, tension restant homogène au son sur la zone retouchée.
7. 7. Valve arrachée : diagnostic rendu et solution appliquée (passage en chambre, remplacement de valve tubeless si emportée), avec justification du choix.
8. 8. Tubeless récalcitrant : talonnage obtenu sans compresseur sur au moins 2 des cas tentés (montage à sec, sangle de serrage de flanc, coup de pompe rapide) ou décision documentée de passer une chambre en retirant le préventif.
9. 9. Verdict de retour rendu pour chacune des 3 roues : vitesse maximale annoncée, type de terrain accepté, et interdiction éventuelle de descente — 3/3 verdicts cohérents avec l'état réel de la roue.
10. 10. Contrôle final : pour chaque roue, aucun élément de dépannage ne touche une partie mobile (rayons, patin, étrier, base) au braquage et en rotation.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : remplacer ou neutraliser un rayon cassé et retendre la zone
- article — Sheldon Brown : réparations d'urgence : boot de flanc, roue voilée, retour à la maison
- doc — Schwalbe : coupures de flanc, limites de réparation et pression de secours
- doc — FiberFix : rayon d'urgence : pose, tension et limites d'usage
- article — Bikepacking.com : dépannage tubeless sans compresseur sur le terrain
- article — Vélotaf : contenu réel d'une trousse de dépannage roue au quotidien

## Niveau 3 — Avancé

### 1. Dévoiler au banc : voile latéral et saut radial `devoilage-banc-lateral-radial`

- **Durée :** 45 min
- **Prérequis :**
  - [Retoucher un voile sur le vélo et contrôler l'usure de la jante](#retouche-voile-et-usure-jante) `retouche-voile-et-usure-jante`
- **Outils :** Banc de dévoilage, Clés à rayons, Huile pénétrante, Marqueur, Tenseur de rayon plat (rayons aéro)

**Objectifs :**
- Installer et calibrer un banc de dévoilage (palpeurs, centrage approximatif) et y monter tout type de roue
- Localiser précisément les zones de voile et appliquer la logique de correction croisée gauche/droite
- Corriger le saut radial (bosses et plats) sans dégrader le voile latéral
- Traiter les écrous grippés d'une roue ancienne : huile pénétrante, maintien du rayon, remplacement d'écrou

**TP — Remise en état d'une roue d'occasion**

Prends une roue d'occasion voilée (voile > 2 mm), monte-la au banc, corrige d'abord le latéral puis le radial en passes alternées, et consigne chaque passe dans ton carnet.

Critères de validation :
1. 1. Voile latéral final ≤ 0,5 mm mesuré au palpeur du banc
2. 2. Saut radial final ≤ 1 mm mesuré au palpeur du banc
3. 3. Corrections limitées à 1/4 de tour par écrou et par passe dans la phase de finition
4. 4. Aucun rayon détendu à la fin (contrôle par pincement de toutes les paires), aucun écrou arrondi
5. 5. Carnet renseigné : nombre de passes, zones corrigées, sens des corrections

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : dévoilage latéral et radial d'une roue au banc
- video — Park Tool : dévoiler une roue, démonstration complète
- livre — Roger Musson : The Professional Guide to Wheel Building, chapitres dévoilage
- article — Sheldon Brown : dévoilage et géométrie de la roue

### 2. Centrage (dish) et tension des rayons au tensiomètre `centrage-dish-et-tension`

- **Durée :** 45 min
- **Prérequis :**
  - [Dévoiler au banc : voile latéral et saut radial](#devoilage-banc-lateral-radial) `devoilage-banc-lateral-radial`
- **Outils :** Jauge de centrage (dish), Tensiomètre avec tableau de conversion, Banc de dévoilage, Clés à rayons, Tableur ou carnet pour relevés

**Objectifs :**
- Mesurer le centrage d'une roue avec une jauge de dish par la méthode du retournement
- Corriger un défaut de centrage sans créer de voile : passes complètes d'un même côté
- Mesurer la tension au tensiomètre, convertir la lecture en kgf via le tableau, et viser la cible du fabricant de jante
- Homogénéiser la tension côté par côté et comprendre l'asymétrie gauche/droite d'une roue arrière ou à disque

**TP — Audit tension/centrage puis correction complète**

Sur trois roues, mesure le dish ; puis choisis-en une, relève la tension de tous les rayons dans un tableau, corrige le centrage et homogénéise la tension jusqu'aux tolérances.

Critères de validation :
1. 1. Dish mesuré sur 3 roues par retournement, mesures répétables à ±0,25 mm
2. 2. Roue corrigée : dish final ≤ 0,5 mm
3. 3. Relevé de tension complet consigné (tous les rayons, deux colonnes gauche/droite) avec conversion en kgf
4. 4. Dispersion de tension finale ≤ 20 % par côté, tension moyenne côté le plus tendu dans la plage du fabricant de jante
5. 5. Voile latéral resté ≤ 0,5 mm après toutes les corrections

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : centrage de roue et utilisation de la jauge de dish
- doc — Park Tool : mesure de tension des rayons et tableau de conversion du tensiomètre
- doc — DT Swiss : tensions cibles selon jante et rayons
- livre — Roger Musson : The Professional Guide to Wheel Building, tension et centrage

### 3. Remplacer un rayon cassé et retendre la zone `remplacement-rayon-casse`

- **Durée :** 40 min
- **Prérequis :**
  - [Dévoiler au banc : voile latéral et saut radial](#devoilage-banc-lateral-radial) `devoilage-banc-lateral-radial`
  - [Centrage (dish) et tension des rayons au tensiomètre](#centrage-dish-et-tension) `centrage-dish-et-tension`
  - [Déposer et reposer une cassette](transmission.md) `cassette-depose-repose`
- **Outils :** Rayons de rechange et écrous, Clés à rayons, Fouet à chaîne et démonte-cassette, Tensiomètre, Banc de dévoilage, Aimant ou tournevis fin pour guider l'écrou

**Objectifs :**
- Déterminer la longueur du rayon de remplacement en mesurant un rayon homologue du même côté
- Enfiler un rayon neuf à travers flasque, cassette et disque sans tout démonter quand c'est possible
- Remplacer l'écrou par le trou de jante en gérant la contrainte du ruban tubeless
- Retendre la zone et redévoiler pour retrouver les tolérances

**TP — Remplacement côté cassette**

Sur une roue arrière dont un rayon côté transmission a été coupé, mesure la longueur nécessaire, dépose la cassette, monte le rayon neuf, retends et redévoile.

Critères de validation :
1. 1. Longueur du rayon de remplacement correcte à ±1 mm (vérifiée par comparaison avec un homologue déposé)
2. 2. Tête de rayon orientée dans le bon sens (motif intérieur/extérieur respecté) et croisements reproduits à l'identique
3. 3. Tension du rayon neuf à ±10 % de la moyenne de son côté au tensiomètre
4. 4. Voile latéral final ≤ 0,5 mm, saut ≤ 1 mm
5. 5. Intervention complète (cassette comprise) en moins de 40 minutes

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : remplacement d'un rayon cassé
- article — Sheldon Brown : remplacer un rayon et retendre une roue
- doc — Sapim : gammes de rayons et écrous, documentation technique

### 4. Boyaux : coller un tubular dans les règles de l'art `collage-boyaux`

- **Durée :** 45 min
- **Prérequis :**
  - [Démonter et remonter un pneu à chambre sans pincer](#demontage-pneu-chambre) `demontage-pneu-chambre`
- **Outils :** Colle à boyau ou ruban spécifique, Pinceau, Jante à boyau, Boyau (occasion acceptée pour l'exercice), Alcool ou solvant de nettoyage, Gants nitrile
- **⚠️ Sécurité :**
  - Travaille dans un local ventilé : les solvants de la colle à boyau sont volatils et inflammables.
  - Un boyau mal collé se déjante en virage : c'est une chute assurée. Le test d'adhérence n'est pas optionnel.

**Objectifs :**
- Situer le boyau aujourd'hui : compétition, cyclocross basse pression, vélos vintage — et ses contraintes
- Préparer jante et boyau : pré-étirement, couches de colle multiples sur jante et bande de fond, temps de séchage
- Poser le boyau centré, valve droite, et contrôler l'adhérence après polymérisation
- Connaître l'alternative ruban adhésif spécifique et ses limites

**TP — Collage complet et test d'arrachement**

Prépare une jante à boyau (nettoyage, deux à trois couches de colle espacées), pré-étire et encolle le boyau, pose-le centré, laisse polymériser 24 h puis réalise le test d'arrachement au pouce.

Critères de validation :
1. 1. Couches de colle appliquées selon le planning fabricant (nombre et temps de séchage consignés au carnet)
2. 2. Boyau centré : liseré de bande de fond visible et régulier à ±1 mm sur les deux côtés, sur toute la circonférence
3. 3. Valve perpendiculaire à la jante, sans contrainte latérale
4. 4. Après 24 h : impossible de décoller le talon au pouce sur aucun point de la circonférence (test type Park Tool)
5. 5. Roue gonflée à pression de service : aucune ondulation du boyau à la rotation au banc (faux-rond ≤ 1 mm)

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : collage d'un boyau, procédure complète
- doc — Vittoria : instructions officielles de collage des boyaux
- doc — Continental : montage des boyaux de compétition
- video — GCN : coller un boyau comme un mécano pro

### 5. Révision complète d'un moyeu à cônes : démontage, graissage, remontage `revision-moyeu-cones-billes`

- **Durée :** 45 min
- **Prérequis :**
  - [Régler le jeu d'un moyeu à cônes et billes](#reglage-cones-moyeu) `reglage-cones-moyeu`
  - Connaître les familles de graisses et leur application *(fondamentaux)*
- **Outils :** Clés à cônes, Pinceau et graisse roulements, Dégraissant et bac, Pince brucelles ou aimant à billes, Chiffons, Pied à coulisse (diamètre des billes)

**Objectifs :**
- Démonter entièrement un moyeu à cônes en documentant l'ordre des pièces (photo ou gabarit)
- Inspecter cuvettes et cônes : reconnaître piqûres, ovalisation et chemins de billes marqués
- Choisir la taille et le nombre de billes corrects (3/16 pouce avant, 1/4 pouce arrière en général) et doser la graisse
- Remonter, régler et valider un moyeu qui tourne soyeux sans jeu

**TP — Révision d'un moyeu arrière d'occasion**

Démonte complètement un moyeu arrière à cônes, dégraisse tout, rends un verdict sur chaque surface de roulement, remonte avec billes et graisse neuves, règle et valide.

Critères de validation :
1. 1. Démontage documenté : ordre des pièces reconstituable sans hésitation au remontage (photo ou gabarit accepté)
2. 2. Nombre et diamètre de billes corrects des deux côtés, vérifiés au pied à coulisse
3. 3. Verdict cuvettes/cônes argumenté (au moins un défaut réel identifié ou absence de défaut justifiée à la lumière rasante)
4. 4. Après remontage : rotation sans point dur, zéro jeu à la jante une fois la roue serrée
5. 5. Le réglage tient après 20 tours de roue rapides et une nuit : re-contrôle identique le lendemain

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : révision complète d'un moyeu à cônes et billes
- article — Park Tool : démontage et graissage des moyeux, guide écrit
- doc — Shimano : manuel du revendeur, entretien des moyeux
- article — Sheldon Brown : entretien des roulements à cônes

### 6. Moyeux à roulements scellés : extraction et pose de cartouches `service-roulements-scelles-moyeu`

- **Durée :** 45 min
- **Prérequis :**
  - [Révision complète d'un moyeu à cônes : démontage, graissage, remontage](#revision-moyeu-cones-billes) `revision-moyeu-cones-billes`
  - Comprendre le principe presse/extraction et les appuis corrects sur bagues de roulement *(fondamentaux)*
- **Outils :** Extracteur de roulements ou chasse adapté, Presse à roulements ou tige filetée + entretoises, Jeu de douilles comme appuis, Maillet, Graisse de montage, Pied à coulisse
- **⚠️ Sécurité :**
  - Extraction au chasse et au maillet : porte des lunettes, un éclat de roulement trempé peut être projeté.

**Objectifs :**
- Lire une référence de roulement (6001, 6902, 15267...) et retrouver ses dimensions
- Diagnostiquer une cartouche morte : rotation granuleuse, jeu, points durs axe déposé
- Extraire des cartouches au chasse-goupille ou à l'extracteur sans marquer les portées
- Presser des cartouches neuves bien d'équerre en appuyant sur la bague correcte, et régler la précharge si le moyeu en dispose

**TP — Remplacement des deux cartouches d'un moyeu avant**

Identifie les références des roulements d'un moyeu avant, extrais les deux cartouches, nettoie les portées, presse les neuves et valide la rotation.

Critères de validation :
1. 1. Références des roulements lues et dimensions vérifiées au pied à coulisse (écart ≤ 0,1 mm sur alésage et diamètre externe)
2. 2. Extraction sans marquer les portées : inspection visuelle à la lampe, zéro rayure nouvelle
3. 3. Cartouches pressées à fond et d'équerre : aucun jour visible au contact de l'épaulement, pressage effectué par la bague externe uniquement
4. 4. Axe remonté : rotation libre sans point dur, zéro jeu latéral à la jante roue serrée
5. 5. Intervention complète en moins de 45 minutes

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : remplacement de roulements cartouche de moyeu
- doc — Enduro Bearings : guide des dimensions et références de roulements vélo
- video — Hope : service des moyeux Pro, roulements scellés

### 7. Corps de roue libre : HG, XD/XDR, Microspline — identifier et entretenir `corps-roue-libre-standards-service`

- **Durée :** 45 min
- **Prérequis :**
  - [Déposer et reposer une cassette](transmission.md) `cassette-depose-repose`
  - [Moyeux à roulements scellés : extraction et pose de cartouches](#service-roulements-scelles-moyeu) `service-roulements-scelles-moyeu`
  - [Révision complète d'un moyeu à cônes : démontage, graissage, remontage](#revision-moyeu-cones-billes) `revision-moyeu-cones-billes`
- **Outils :** Fouet à chaîne et démonte-cassette, Clés Allen dont 17 mm, Dégraissant, pinceau, Huile pour roue libre ou graisse ratchet, Chiffons, Gants nitrile

**Objectifs :**
- Identifier les standards de corps : Shimano HG (9/10/11v route/VTT), SRAM XD et XDR, Shimano Microspline, et les distinguer d'une roue libre à visser vintage
- Déposer et reposer un corps de roue libre selon le système du fabricant (vis centrale, capuchons emmanchés, clé Allen 17 mm)
- Nettoyer et relubrifier cliquets et ressorts avec le bon lubrifiant (huile ou graisse légère, jamais de graisse épaisse qui colle les cliquets)
- Entretenir un système à crabots type ratchet (nettoyage, graisse spécifique, remontage des ressorts)

**TP — Identification puis service complet d'une roue libre**

Identifie le standard de 3 corps de roue libre présentés (physiques ou photos), puis dépose le corps de ta roue arrière, nettoie cliquets ou crabots, relubrifie, remonte et teste l'engagement sous charge.

Critères de validation :
1. 1. Standards identifiés correctement sur 3 corps sur 3, avec le critère discriminant énoncé pour chacun (cannelures, butée 11v, diamètre)
2. 2. Corps déposé et reposé selon la procédure du fabricant, visserie au couple prescrit avec un écart ≤ 10 %
3. 3. Cliquets ou crabots nettoyés et relubrifiés : cliquetis net et régulier à la rotation libre
4. 4. Test d'engagement : 10 coups de pédale en danseuse sans aucun saut ni glissement
5. 5. Une roue libre à visser vintage distinguée d'un corps à cassette en moins de 30 secondes (l'entretien vintage complet relève d'un autre module)

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : types de corps de cassette et compatibilités
- video — Park Tool : service d'un corps de roue libre à cliquets
- doc — DT Swiss : entretien du système star ratchet
- doc — SRAM : spécifications des corps XD et XDR
- doc — Shimano : documentation Microspline

### 8. Science du pneu : carcasse, gomme, largeur réelle et choix par usage `science-du-pneu`

- **Durée :** 40 min
- **Prérequis :**
  - [Lire un pneu : ETRTO, pouces et repères d'usure](#dimensions-pneu-etrto) `dimensions-pneu-etrto`
  - [Choisir ses pneus et calculer la bonne pression](#choix-pneus-et-pression) `choix-pneus-et-pression`
  - [Mesurer et décoder : pied à coulisse et marquages](fondamentaux.md) `pied-a-coulisse-et-marquages`
  - [Fond de jante classique et ruban tubeless : la base de l'étanchéité](#fond-de-jante-et-ruban-tubeless) `fond-de-jante-et-ruban-tubeless`
- **Outils :** Pied à coulisse à grande capacité (ou pied à coulisse et réglet), Jeu de cales d'épaisseur, Deux jantes de largeur interne différente (par exemple 19 et 25 mm), Trois pneus de largeurs nominales différentes, Pompe à manomètre fiable, Démonte-pneus, Tableau ETRTO de correspondance jante/pneu, Appareil photo, Carnet d'atelier
- **⚠️ Sécurité :**
  - Garde au cadre et à la fourche : vise au minimum 4 mm de chaque côté et 6 mm en couronne, pneu gonflé. Un pneu qui touche sous charge ou par temps de boue peut bloquer la roue.
  - Pneus VAE : respecte le marquage e-bike et la vitesse homologuée (25 km/h, ou 45 km/h pour un speed pedelec). Un pneu sous-classé chauffe et peut lâcher.
  - Jante hookless : seuls des pneus explicitement homologués tubeless hookless sont admis, et la pression maximale de la jante prime (souvent 5 bar / 72,5 psi). Un pneu non homologué peut déjanter d'un coup.

**Objectifs :**
- Décoder une carcasse : TPI, tringle, ceinture anti-crevaison et rôle des flancs
- Expliquer le compromis gomme : grip, résistance au roulement et longévité
- Mesurer la largeur réelle d'un pneu selon la largeur interne de jante et anticiper la garde au cadre
- Choisir un pneu hiver, clouté ou renforcé VAE en lisant les marquages de vitesse et de charge
- Associer un dessin de bande de roulement à un terrain et défendre le choix techniquement

**TP — Largeur annoncée contre largeur réelle**

Trois pneus, deux jantes de largeur interne différente, six montages. Tu mesures, tu confrontes à la valeur nominale, tu contrôles la garde au cadre et tu rends une recommandation par usage.

Critères de validation :
1. 1. Six montages réalisés (3 pneus × 2 jantes), chaque pneu gonflé à sa pression d'usage et laissé au moins 24 h avant mesure.
2. 2. Largeur réelle relevée au pied à coulisse au point le plus large, à 0,5 mm près, et consignée face à la largeur nominale : écart calculé pour les 6 montages.
3. 3. Hauteur du pneu relevée également pour les 6 montages, à 0,5 mm près, avec au moins une conséquence chiffrée par pneu (variation de hauteur de boîtier ou de garde au sol).
4. 4. Tendance dégagée et écrite : variation de largeur réelle par millimètre de largeur interne de jante, cohérente avec les 6 mesures.
5. 5. Garde mesurée aux 4 points critiques (bases, haubans, pont de fourche, base côté transmission) pour chaque montage : valeur en mm et verdict passe / ne passe pas, seuils ≥ 4 mm latéral et ≥ 6 mm en couronne.
6. 6. Décodage complet de chaque pneu : TPI, type de tringle (souple ou rigide), technologie de protection anti-crevaison, présence d'un marquage e-bike ou d'une vitesse homologuée, indication de charge — aucune information disponible sur le flanc n'est omise.
7. 7. Classement des 3 pneus par usage (route rapide, ville hiver, gravel mixte, VTT boue, VAE chargé) : 3/3 classements justifiés par au moins deux caractéristiques techniques chacun.
8. 8. Recommandation écrite pour 3 profils imposés (VAE urbain toute l'année, gravel mixte, VTT hivernal clouté) : pour chacun, largeur compatible avec la jante et le cadre, pression de départ chiffrée, et compromis grip/roulement/longévité explicité.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Schwalbe Technical Info : carcasses, TPI, gommes, pneus cloutés et marquages e-bike
- doc — Continental : pneus e-bike, marquage de vitesse et homologation ECE-R75
- doc — ETRTO : correspondances largeur de jante interne / largeur de pneu admissible
- article — Rene Herse Cycles (Jan Heine) : souplesse de carcasse, largeur et résistance au roulement réelle
- article — Bicycle Rolling Resistance : protocoles de mesure et compromis gomme grip / roulement / usure
- article — Matos Vélo : largeur annoncée contre largeur mesurée selon la jante

## Niveau 4 — Expert

### 1. Diagnostiquer bruits et fatigue d'une roue `diagnostic-bruits-roue`

- **Durée :** 45 min
- **Prérequis :**
  - [Centrage (dish) et tension des rayons au tensiomètre](#centrage-dish-et-tension) `centrage-dish-et-tension`
  - Connaître la méthodologie générale de diagnostic par élimination *(fondamentaux)*
- **Outils :** Banc de dévoilage, Tensiomètre, Tournevis long ou stéthoscope d'atelier, Huile fine (goutte aux croisements), Carnet d'atelier

**Objectifs :**
- Isoler méthodiquement un bruit de roue : croisements de rayons, œillets, interface écrou/jante, roulements, interface cassette/corps
- Reconnaître un roulement mourant à l'oreille et au toucher, roue montée puis démontée
- Lire les schémas de casse de rayons : casse au coude = fatigue et tension insuffisante ou hétérogène, casse au filet = autre cause
- Évaluer la vie résiduelle d'une roue : historique de casses, corrosion des écrous, marquage du corps de roue libre par la cassette

**TP — Deux pannes sonores à isoler**

Sur un vélo préparé avec deux bruits induits côté roues (par exemple croisement sec et cassette mal serrée), applique un protocole d'élimination écrit, isole les deux causes, corrige et valide.

Critères de validation :
1. 1. Les deux causes isolées en 30 minutes maximum, protocole d'élimination consigné étape par étape
2. 2. Aucun remplacement de pièce non justifié : chaque hypothèse testée avant d'agir
3. 3. Après correction, silence confirmé sur 3 sprints en danseuse et 3 freinages appuyés
4. 4. Relevé de tension effectué et verdict de vie résiduelle argumenté (chiffres de dispersion à l'appui)

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : diagnostiquer les bruits et craquements côté roues
- livre — Jobst Brandt : The Bicycle Wheel, fatigue des rayons
- article — Bike Gremlin : causes de casse de rayons
- livre — Roger Musson : The Professional Guide to Wheel Building, durabilité et tension

### 2. Conversions d'axes, capuchons et compatibilités croisées `conversions-axes-et-compatibilites`

- **Durée :** 40 min
- **Prérequis :**
  - [Standards d'axes et d'entraxes : identifier ce que ton cadre accepte](#standards-axes-roues) `standards-axes-roues`
  - [Corps de roue libre : HG, XD/XDR, Microspline — identifier et entretenir](#corps-roue-libre-standards-service) `corps-roue-libre-standards-service`
  - [Centrage (dish) et tension des rayons au tensiomètre](#centrage-dish-et-tension) `centrage-dish-et-tension`
- **Outils :** Capuchons de conversion du fabricant du moyeu, Corps de roue libre alternatif, Jauge de centrage, Pied à coulisse, Tableaux de compatibilité fabricants, Clés Allen

**Objectifs :**
- Convertir un moyeu d'un standard à l'autre avec les capuchons d'extrémité du fabricant (QR vers axe traversant, 142 vers 148 quand c'est prévu)
- Changer un corps de roue libre entre standards sur un même moyeu et vérifier la ligne de chaîne résultante
- Décider si une conversion Boost par entretoises est acceptable et re-centrer la roue en conséquence
- Trancher des cas de compatibilité complexes avec les tableaux fabricants au lieu de deviner

**TP — Conversion réelle plus batterie de cas d'école**

Convertis un moyeu réel (capuchons et corps de roue libre), contrôle le dish après conversion, puis tranche cinq scénarios de compatibilité écrits (roue, cadre, cassette, rotor) à l'aide des tableaux fabricants.

Critères de validation :
1. 1. Capuchons remplacés et corps échangé : montage conforme au tableau du fabricant, visserie au couple prescrit ±10 %
2. 2. Dish contrôlé après conversion : ≤ 0,5 mm, correction effectuée si nécessaire
3. 3. Roue montée dans le cadre cible : rotor aligné dans l'étrier sans caler plus de 0,2 mm de rattrapage, cassette sans jeu
4. 4. 4 scénarios de compatibilité sur 5 tranchés correctement, chaque verdict sourcé (document fabricant cité)

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — DT Swiss : tableaux de conversion des capuchons de moyeux
- doc — Hope : options de conversion des moyeux, documentation
- outil — Robert Axle Project : identification des axes et adaptateurs
- article — Bike Gremlin : compatibilités moyeux, corps et cassettes

### 3. Jantes carbone et hookless : inspection et compatibilités strictes `jantes-carbone-et-hookless`

- **Durée :** 40 min
- **Prérequis :**
  - [Acier, alu, carbone, titane : reconnaître et respecter chaque matériau](fondamentaux.md) `materiaux-cadres`
  - [Choisir ses pneus et calculer la bonne pression](#choix-pneus-et-pression) `choix-pneus-et-pression`
  - [Centrage (dish) et tension des rayons au tensiomètre](#centrage-dish-et-tension) `centrage-dish-et-tension`
- **Outils :** Lampe puissante, Pièce de monnaie ou manche léger (tap test), Pied à coulisse, Tableaux de compatibilité hookless des fabricants, Tensiomètre, Manomètre digital
- **⚠️ Sécurité :**
  - Une jante carbone endommagée peut céder brutalement en roulant : au moindre doute après un impact, la roue ne repart pas chez son propriétaire sans inspection complète.
  - Hookless : ne monte jamais un pneu absent du tableau de compatibilité et ne dépasse jamais 5 bar / 72,5 psi.

**Objectifs :**
- Inspecter une jante carbone après impact : examen visuel à la lumière rasante, tap test, zones critiques (crochets, œillets, piste de freinage)
- Comprendre les limites thermiques des jantes carbone à patins et les patins spécifiques obligatoires
- Appliquer le protocole hookless complet : tableau de compatibilité pneu/jante des deux fabricants, pression max 5 bar / 72,5 psi, largeur interne vs section
- Respecter les tensions de rayons maximales spécifiées par les fabricants de jantes carbone

**TP — Protocole d'inspection et validation hookless**

Déroule un protocole d'inspection en 10 points sur une jante carbone (dont une zone endommagée si disponible), puis valide ou refuse trois combinaisons pneu/jante hookless avec les tableaux fabricants et monte la combinaison validée.

Critères de validation :
1. 1. Protocole en 10 points déroulé et consigné, zones critiques toutes couvertes ; défaut présent détecté et localisé si la jante d'exercice en comporte un
2. 2. Trois combinaisons pneu/jante hookless tranchées correctement (3/3) avec référence au tableau des deux fabricants
3. 3. Montage validé : pression réglée ≤ 5 bar avec marge, largeur réelle du pneu monté mesurée au pied à coulisse et consignée après 24 h
4. 4. Relevé de tension de la roue carbone : aucune valeur au-dessus du maximum spécifié par le fabricant de la jante

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Zipp/SRAM : règles hookless et pression maximale 72,5 psi
- doc — ENVE : tableau de compatibilité pneus/jantes hookless
- article — BikeRadar : hookless, avantages et controverses
- video — Park Tool : particularités d'entretien des roues carbone

### 4. Roues VAE et cargo : renforts, moteurs moyeu et contrôles spécifiques `roues-vae-et-cargo`

- **Durée :** 45 min
- **Prérequis :**
  - [Reconnaître un VAE et identifier son architecture](vae.md) `vae-identifier-architecture`
  - [Déposer et reposer une roue : serrage rapide, axe traversant, écrous](#depose-repose-roue) `depose-repose-roue`
  - [Centrage (dish) et tension des rayons au tensiomètre](#centrage-dish-et-tension) `centrage-dish-et-tension`
- **Outils :** Clé dynamométrique haute plage (jusqu'à 40 N·m), Clés plates 18/19 mm, Tensiomètre, Rilsans de guidage de câble, Support ou sangle pour soutenir la roue lourde
- **⚠️ Sécurité :**
  - Système éteint et batterie déposée ou déconnectée AVANT de toucher au connecteur moteur : jamais de débranchement sous tension.
  - Une roue motorisée pèse 4 à 6 kg de plus qu'une roue classique : gare aux doigts entre pattes et axe à la repose, travaille à deux si besoin.

**Objectifs :**
- Identifier ce qui distingue une roue VAE/cargo : rayons 13G/12G, jantes à œillets renforcés, 36 à 40 trous, petites roues 20 pouces fortement chargées
- Déposer et reposer une roue à moteur moyeu sans endommager connecteur ni câble, avec bras de couple correctement orienté
- Serrer les écrous d'axe moteur au couple prescrit et comprendre pourquoi un axe moteur ne doit jamais tourner dans les pattes
- Auditer la tension d'une roue motorisée dont le couple moteur détend les rayons plus vite qu'une roue classique

**TP — Dépose/repose d'une roue moteur et audit de tension**

Sur un VAE à moteur moyeu arrière (ou une roue moteur d'exercice), coupe le système, débranche proprement le connecteur, dépose la roue, inspecte le câblage, repose avec bras de couple, serre au couple, puis réalise un audit complet de tension des rayons.

Critères de validation :
1. 1. Séquence de sécurité respectée à 100 % : contact coupé, batterie déconnectée, connecteur débranché sans traction sur le câble (broches inspectées, zéro broche pliée)
2. 2. Bras de couple remonté dans la bonne orientation et écrous d'axe serrés au couple constructeur avec un écart ≤ 10 %
3. 3. Câble moteur re-routé et fixé : aucun point de frottement ni rayon de courbure serré, validation photo au carnet
4. 4. Audit de tension consigné : dispersion calculée, alerte levée si > 25 %, plan de correction proposé
5. 5. Test fonctionnel final : assistance active et aucune vibration anormale sur 500 m d'essai

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Grin Technologies : bras de couple et axes de moteurs moyeu
- doc — Bafang : manuel d'installation des moteurs moyeu
- doc — Schwalbe : pneus renforcés pour VAE et vélos cargo
- doc — Sapim : rayons renforcés pour roues à fortes charges

## Niveau 5 — Maître

### 1. Concevoir une roue : théorie de la précontrainte et choix des composants `conception-roue-composants`

- **Durée :** 45 min
- **Prérequis :**
  - [Dévoiler au banc : voile latéral et saut radial](#devoilage-banc-lateral-radial) `devoilage-banc-lateral-radial`
  - [Centrage (dish) et tension des rayons au tensiomètre](#centrage-dish-et-tension) `centrage-dish-et-tension`
  - [Corps de roue libre : HG, XD/XDR, Microspline — identifier et entretenir](#corps-roue-libre-standards-service) `corps-roue-libre-standards-service`
  - [Standards d'axes et d'entraxes : identifier ce que ton cadre accepte](#standards-axes-roues) `standards-axes-roues`
- **Outils :** Catalogues fabricants (jantes, moyeux, rayons), Carnet d'atelier ou tableur, Grille de conception fournie par la leçon

**Objectifs :**
- Expliquer le fonctionnement d'une roue précontrainte selon Brandt : la charge détend les rayons inférieurs, la roue « suspend » le moyeu
- Choisir les rayons : lisses, double butted 2.0-1.8-2.0, aéro, straight-pull — et comprendre pourquoi le butted vit plus longtemps
- Choisir écrous (laiton vs alu), jante (profil, largeur interne, asymétrique) et nombre de trous selon le cahier des charges
- Produire une fiche de conception complète : usage, poids du cycliste, tensions cibles, références

**TP — Deux fiches de conception opposées**

Rédige la fiche de conception complète de deux roues arrière que tout oppose : randonneuse pour cycliste de 100 kg chargé, et roue XC légère pour compétiteur de 62 kg. Chaque choix doit être justifié et chiffré.

Critères de validation :
1. 1. Les 10 champs de la fiche remplis pour chaque roue : usage, trous, croisement, jante, rayons, écrous, moyeu, tension cible, poids estimé, budget
2. 2. Tension cible conforme à la préconisation du fabricant de jante choisi (valeur et source citées)
3. 3. Chaque choix justifié en une phrase technique ; correction contre grille : ≥ 8 choix pertinents sur 10
4. 4. Le principe de précontrainte expliqué par écrit en moins de 150 mots, sans erreur conceptuelle (validation par pair ou correcteur)

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- livre — Jobst Brandt : The Bicycle Wheel, théorie de la roue précontrainte
- livre — Roger Musson : The Professional Guide to Wheel Building, choix des composants
- article — Sheldon Brown : construction de roues, principes
- doc — DT Swiss : gammes de rayons et recommandations d'usage
- doc — Sapim : choix rayons et écrous selon l'application

### 2. Mesurer l'ERD et la géométrie du moyeu `mesure-erd-geometrie-moyeu`

- **Durée :** 40 min
- **Prérequis :**
  - [Concevoir une roue : théorie de la précontrainte et choix des composants](#conception-roue-composants) `conception-roue-composants`
  - [Mesurer et décoder : pied à coulisse et marquages](fondamentaux.md) `pied-a-coulisse-et-marquages`
- **Outils :** Deux rayons coupés + écrous (pige ERD maison) ou pige du commerce, Pied à coulisse numérique, Réglet, Marqueur, Tableur ou carnet

**Objectifs :**
- Mesurer l'ERD d'une jante avec deux rayons étalonnés et des écrous, et croiser avec la valeur publiée
- Mesurer un moyeu : diamètre de perçage des flasques (PCD), distance centre-flasque gauche et droite
- Comprendre pourquoi une erreur d'ERD de 2 mm ruine un calcul de rayons
- Constituer une fiche de mesures fiable prête pour le calculateur

**TP — Métrologie croisée sur deux jantes et un moyeu**

Mesure l'ERD de deux jantes par la méthode des deux rayons, en deux positions à 90°, compare aux valeurs publiées, puis mesure PCD et distances centre-flasque d'un moyeu arrière et remplis la fiche calculateur.

Critères de validation :
1. 1. ERD mesuré en deux positions par jante : écart entre les deux positions ≤ 1 mm, moyenne retenue consignée
2. 2. Écart entre ton ERD mesuré et la valeur publiée ≤ 1 mm, ou anomalie documentée et re-mesurée
3. 3. PCD des deux flasques mesuré au pied à coulisse avec la méthode centre-à-centre : écart ≤ 0,5 mm entre trois mesures répétées
4. 4. Distances centre-flasque gauche/droite calculées depuis les mesures aux contre-écrous, cohérentes à ±0,5 mm avec la documentation du moyeu si disponible
5. 5. Fiche calculateur complète et relue : zéro champ manquant

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- livre — Roger Musson : mesure de l'ERD, méthode fiable
- article — Park Tool : déterminer la longueur de rayons, mesures préalables
- outil — DT Swiss : calculateur de rayons, définitions des mesures
- article — Wheel Fanatyk : précision des mesures en construction de roues

### 3. Calculer les longueurs de rayons `calcul-longueur-rayons`

- **Durée :** 35 min
- **Prérequis :**
  - [Mesurer l'ERD et la géométrie du moyeu](#mesure-erd-geometrie-moyeu) `mesure-erd-geometrie-moyeu`
- **Outils :** Calculateur de rayons (deux différents), Fiche de mesures de la leçon précédente, Tableur ou carnet

**Objectifs :**
- Comprendre la formule de longueur de rayon (trigonométrie flasque/jante/croisement) sans la subir
- Utiliser deux calculateurs (DT Swiss, Sapim) et croiser leurs résultats avec tes mesures
- Gérer les asymétries : longueurs différentes gauche/droite sur roue arrière et roue à disque
- Appliquer les règles d'arrondi et anticiper la plage utile du filetage dans l'écrou

**TP — Trois calculs croisés et une vérification terrain**

Calcule les longueurs pour trois configurations (avant 32 trous croisé 3, arrière disque asymétrique, 36 trous cargo), croise deux calculateurs, puis vérifie ton résultat sur une roue déjà construite en observant l'affleurement du rayon dans l'écrou.

Critères de validation :
1. 1. Trois configurations calculées avec longueurs gauche/droite distinctes quand la géométrie l'exige
2. 2. Écart entre les deux calculateurs ≤ 0,5 mm par configuration ; tout écart supérieur investigué et expliqué
3. 3. Règle d'arrondi appliquée et justifiée par écrit pour chaque longueur retenue
4. 4. Vérification terrain : sur la roue témoin, l'affleurement constaté (rayon dans la fente de l'écrou) cohérent avec le calcul refait à partir de ses composants, à ±1 mm

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- outil — DT Swiss : calculateur de longueur de rayons
- outil — Sapim : calculateur de rayons
- article — Park Tool : détermination de la longueur des rayons
- livre — Roger Musson : The Professional Guide to Wheel Building, calcul et tables

### 4. Lacer une roue arrière 32 trous croisé par 3 `lacage-croise-3`

- **Durée :** 45 min
- **Prérequis :**
  - [Calculer les longueurs de rayons](#calcul-longueur-rayons) `calcul-longueur-rayons`
- **Outils :** Jante 32 trous, moyeu arrière, rayons deux longueurs, écrous, Tournevis ou visseuse à embout écrou de rayon, Goutte d'huile ou spoke prep pour filets et portées, Chiffon

**Objectifs :**
- Placer le rayon-clé par rapport au trou de valve pour que l'étiquette du moyeu reste lisible et la valve accessible entre deux rayons parallèles
- Lacer les quatre groupes de rayons dans l'ordre : têtes intérieures/extérieures, tirants et poussants, sans jamais se perdre
- Entrelacer correctement le dernier croisement et respecter le décalage des flasques
- Auto-contrôler son laçage avant toute mise en tension : motif, valve, orientation des têtes

**TP — Laçage complet zéro défaut**

Lace une roue arrière 32 trous en croisé par 3 : rayon-clé, quatre groupes, entrelacement du dernier croisement, écrous vissés d'un nombre de filets identique. Si le motif est faux, tu délaces et tu recommences.

Critères de validation :
1. 1. Trou de valve encadré par deux rayons quasi parallèles : gonflage possible sans gymnastique, étiquette du moyeu lisible depuis la valve
2. 2. Motif vérifié : 100 % des croisements par 3, dernier croisement entrelacé sur les 32 rayons, alternance têtes intérieures/extérieures correcte
3. 3. Longueurs gauche/droite non interverties (vérification par l'affleurement homogène des filets)
4. 4. Tous les écrous vissés au même nombre de filets apparents (±1 filet) : roue prête pour la mise en tension
5. 5. Laçage complet sans erreur en 45 minutes maximum après entraînement (2e ou 3e tentative)

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : laçage des rayons, série construction de roue
- livre — Roger Musson : The Professional Guide to Wheel Building, méthode de laçage
- article — Sheldon Brown : laçage croisé par 3, procédure historique
- video — GCN : construire une roue, épisode laçage

### 5. Mise en tension progressive d'une roue neuve `mise-en-tension-roue-neuve`

- **Durée :** 45 min
- **Prérequis :**
  - [Lacer une roue arrière 32 trous croisé par 3](#lacage-croise-3) `lacage-croise-3`
  - [Centrage (dish) et tension des rayons au tensiomètre](#centrage-dish-et-tension) `centrage-dish-et-tension`
- **Outils :** Banc de dévoilage, Clés à rayons, Tensiomètre et tableau de conversion, Jauge de centrage, Feutre, Tournevis fendu ou nipple driver

**Objectifs :**
- Amener tous les écrous à une profondeur de filet identique (mise à zéro) au tournevis ou à la visseuse débrayée
- Monter la tension par passes complètes de demi-tour puis quart de tour, en gardant voile et dish sous contrôle dès le début
- Empêcher le vrillage des rayons : repère feutre ou maintien du rayon plat, et détecter le vrillage au son
- Atteindre la tension cible du fabricant en homogénéisant au tensiomètre

**TP — De la roue molle à 100 % de la tension cible**

Pars de ta roue lacée : mise à zéro des écrous, montée en tension par passes complètes avec contrôle du voile toutes les deux passes, marquage feutre anti-vrillage, palier à 80 % puis 100 % de la cible, relevé final complet.

Critères de validation :
1. 1. Mise à zéro : profondeur de filet identique sur les 32 écrous (±1 filet) avant la première passe de tension
2. 2. Montée en tension en passes complètes uniquement ; carnet indiquant chaque passe (fraction de tour, mesure de contrôle)
3. 3. Zéro vrillage résiduel : les repères feutre sur 8 rayons témoins sont alignés en fin de montée
4. 4. Dish maintenu ≤ 1 mm pendant toute la montée (contrôles consignés aux paliers 50 %, 80 %, 100 %)
5. 5. Tension finale côté le plus tendu : moyenne à ±5 % de la cible fabricant, mesurée au tensiomètre sur tous les rayons

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- livre — Roger Musson : The Professional Guide to Wheel Building, montée en tension
- video — Park Tool : construire une roue, mise en tension
- article — Wheel Fanatyk : contrôle du vrillage et qualité de tension
- doc — DT Swiss : manuel du tensiomètre et tensions maximales

### 6. Finition d'une roue neuve : stress relieving et tolérances pro `finition-roue-stress-relieving`

- **Durée :** 45 min
- **Prérequis :**
  - [Mise en tension progressive d'une roue neuve](#mise-en-tension-roue-neuve) `mise-en-tension-roue-neuve`
- **Outils :** Banc de dévoilage, Tensiomètre, Jauge de centrage, Clés à rayons, Gants (pression des paires de rayons)

**Objectifs :**
- Détendre la roue (stress relieving) : pression des paires de rayons, mise en place des coudes dans les flasques
- Boucler les cycles finition : micro-dévoilage, centrage, homogénéisation jusqu'à stabilité totale
- Valider la roue aux tolérances professionnelles : voile ≤ 0,25 mm, saut ≤ 0,5 mm, dish ≤ 0,5 mm, dispersion ≤ 20 %
- Savoir décider un relaçage complet plutôt que des corrections sans fin sur une roue qui ne converge pas

**TP — Validation finale type atelier**

Effectue trois cycles complets stress relieving + reprise (voile, saut, dish, tension), puis fais valider ta roue sur les cinq tolérances chiffrées et un test en charge. C'est l'atelier de validation du rayonnage.

Critères de validation :
1. 1. Voile latéral ≤ 0,25 mm au palpeur
2. 2. Saut radial ≤ 0,5 mm au palpeur
3. 3. Dish ≤ 0,5 mm à la jauge par retournement
4. 4. Dispersion de tension ≤ 20 % par côté (objectif ≤ 10 % côté le plus tendu), relevé complet consigné
5. 5. Stabilité : après le 3e cycle de stress relieving, plus aucun claquement et dérive de voile ≤ 0,1 mm ; sinon, diagnostic écrit et décision relaçage assumée
6. 6. Test en charge (montée en danseuse ou presse sur la jante) puis re-contrôle : les quatre tolérances toujours tenues

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- livre — Roger Musson : The Professional Guide to Wheel Building, stress relieving et finition
- livre — Jobst Brandt : The Bicycle Wheel, détente des rayons
- video — Park Tool : construire une roue, finition et contrôles
- article — Sheldon Brown : stress relieving, pourquoi et comment

### 7. Laçages alternatifs : radial, croisé par 2, straight-pull, roues fortes `lacages-alternatifs`

- **Durée :** 45 min
- **Prérequis :**
  - [Finition d'une roue neuve : stress relieving et tolérances pro](#finition-roue-stress-relieving) `finition-roue-stress-relieving`
- **Outils :** Jantes et moyeux d'exercice variés (dont straight-pull si possible), Rayons adaptés à chaque schéma, Banc de dévoilage, tensiomètre, jauge de dish, Calculateur de rayons
- **⚠️ Sécurité :**
  - Jamais de laçage radial sur une flasque qui transmet un couple (disque, moteur, roue arrière côté transmission) ni sur un moyeu non homologué radial par son fabricant : risque d'arrachement de flasque.

**Objectifs :**
- Choisir un schéma de laçage selon l'usage : radial à l'avant (quand le moyeu l'autorise), croisé par 2, croisé par 3 ou 4 pour tandem et cargo
- Comprendre pourquoi une roue à disque ou à moteur exige du croisé : transmission du couple de freinage et de pédalage
- Lacer un moyeu straight-pull sans se faire piéger par l'ordre imposé par le moyeu
- Construire des roues fortes : 36-40 trous, rayons renforcés, jantes à double œillet pour cargo, tandem et VAE

**TP — Une roue avant radiale et un plan de roue cargo**

Construis une roue avant radiale sur moyeu homologué (calcul, laçage, tension, finition), puis produis le dossier complet d'une roue arrière cargo 36 trous croisé 4 : calcul, choix des composants, schéma de laçage annoté.

Critères de validation :
1. 1. Vérification préalable documentée : le fabricant du moyeu autorise le radial (source citée) ; à défaut, schéma croisé 2 replié justifié
2. 2. Roue radiale finie aux tolérances : voile ≤ 0,25 mm, saut ≤ 0,5 mm, dish ≤ 0,5 mm, dispersion ≤ 20 %
3. 3. Tension radiale cible ajustée selon la préconisation fabricant (le radial charge plus la flasque), valeur justifiée par écrit
4. 4. Dossier cargo complet : longueurs calculées et croisées sur deux calculateurs (écart ≤ 0,5 mm), composants renforcés choisis et justifiés, schéma de laçage croisé 4 annoté sans erreur
5. 5. Quiz schémas : associer 5 usages (route légère, disque avant, tandem, moteur moyeu, ville) au bon laçage, ≥ 4/5

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : schémas de laçage et mises en garde du radial
- livre — Roger Musson : The Professional Guide to Wheel Building, variantes de laçage
- doc — DT Swiss : moyeux straight-pull, ordres de laçage
- doc — Sapim : rayons renforcés pour tandem et cargo
- livre — Jobst Brandt : The Bicycle Wheel, influence du schéma de laçage
