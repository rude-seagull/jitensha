# Système « freinage »

> Part of the Jitensha curriculum — see [`CURRICULUM.md`](../../CURRICULUM.md) for the overview. Lesson data is French (course content); scaffolding is English per project rules.

Tout ce qui arrête un vélo : freins sur jante (dual pivot, V-brake, cantilever), disques mécaniques et hydrauliques, fluides (minérale vs DOT), purges Shimano et SRAM, durites, plaquettes et patins, disques Center Lock et 6 trous, jusqu'aux freins de moyeu des vélos de ville et au dimensionnement thermique des freinages cargo/tandem. Le système où l'erreur ne pardonne pas : chaque leçon se termine par un frein qui arrête réellement le vélo, avec des critères chiffrés.

**Progression logic:** Niveau 1 : lire et sécuriser — identifier chaque architecture de frein, mesurer l'usure, rattraper un frein sur jante au barillet. Niveau 2 : régler et remplacer sur systèmes mécaniques — patins, câbles, les trois familles de freins sur jante, puis entrée dans le disque par la voie mécanique (rotors, centrage, plaquettes, rodage, diagnostic des bruits et contamination) : tout se fait sans ouvrir de circuit hydraulique. Niveau 3 : ouvrir l'hydraulique — principe de Pascal et discipline des fluides d'abord, puis les deux purges canoniques (Shimano entonnoir, SRAM Bleeding Edge), les deux raccourcissements de durite, l'entretien des pistons, le dévoilage de disque, et l'application aux vélos lourds (VAE, cargo). Niveau 4 : diagnostiquer et reconstruire — arbre de décision des pannes hydrauliques, réhabilitation d'étrier et de levier aux kits joints, purges hors Shimano/SRAM, compatibilités inter-standards, et les freins que le syllabus ignorait : tambour/roller des vélos de ville, freins jante vintage. Niveau 5 : concevoir — monter un freinage hydraulique complet depuis des pièces neuves en boîte (système sec), et dimensionner un freinage pour charges extrêmes (cargo, tandem, descente) avec note de calcul thermique. Chaque niveau réutilise les critères de validation du précédent comme acquis : le rodage appris au niveau 2 valide les purges du niveau 3, le centrage du niveau 2 valide les reconstructions du niveau 4.

## Niveau 1 — Débutant

### 1. Panorama des systèmes de freinage `panorama-systemes-freinage`

- **Durée :** 25 min
- **Prérequis :**
  - [Anatomie du vélo : nomme chaque pièce](fondamentaux.md) `anatomie-velo`
- **Outils :** Lampe de poche, Smartphone (photos pour le carnet d'atelier)

**Objectifs :**
- Identifier les 8 grandes familles de freins : dual pivot, V-brake, cantilever, disque mécanique, disque hydraulique, roller brake, tambour, rétropédalage
- Tracer la chaîne complète d'un freinage : levier → câble ou durite → étrier → surface de freinage
- Associer chaque type de frein aux vélos qui le portent (route, VTT, ville, hollandais, cargo, VAE, vintage)
- Reconnaître au premier coup d'œil si un frein est à câble ou hydraulique

**TP — Safari d'identification sur vélos réels**

Sur au moins 3 vélos différents (les tiens, ceux d'amis, un parking à vélos), identifie chaque frein avant et arrière, son mode d'actionnement et sa surface de freinage, puis remplis un tableau vélo ↔ architecture de freinage dans ton carnet.

Critères de validation :
1. 1. Sur un jeu de 8 photos ou fiches couvrant les 8 familles, au moins 7/8 identifiées correctement du premier coup.
2. 2. Sur 3 vélos réels, la chaîne complète levier → transmission d'effort → étrier → surface de freinage est tracée et nommée sans erreur pour chaque frein.
3. 3. Le tableau récapitulatif (type de vélo, frein AV, frein AR, câble/hydraulique) est rempli en moins de 15 minutes.
4. 4. Pour chaque vélo, tu annonces correctement quel fluide ou câble serait nécessaire pour l'entretenir (vérifié contre les marquages du levier).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : Types de freins vélo et leur fonctionnement (Brake Systems Overview)
- article — Sheldon Brown : Glossaire et typologie des freins de bicyclette
- video — GCN Tech : Freins sur jante vs freins à disque expliqués
- article — Bike Gremlin : Types de freins de vélo : avantages et inconvénients

### 2. Inspecter les freins et mesurer l'usure `inspection-freins-usure`

- **Durée :** 35 min
- **Prérequis :**
  - [Panorama des systèmes de freinage](#panorama-systemes-freinage) `panorama-systemes-freinage`
  - [Mesurer et décoder : pied à coulisse et marquages](fondamentaux.md) `pied-a-coulisse-et-marquages`
- **Outils :** Pied à coulisse numérique, Lampe de poche, Loupe ou appareil photo macro, Carnet d'atelier
- **⚠️ Sécurité :**
  - Un levier qui vient toucher le guidon ou une garniture sous le témoin d'usure = vélo interdit de route jusqu'à réparation.
  - Ne touche jamais la piste de freinage d'un disque à mains nues : le sébum contamine les plaquettes.

**Objectifs :**
- Exécuter le contrôle freinage du M-check avant chaque sortie en moins de 60 secondes
- Mesurer l'épaisseur de garniture des plaquettes de disque et repérer les témoins d'usure des patins
- Mesurer l'épaisseur d'un disque et la comparer au minimum gravé par le fabricant
- Repérer un indicateur d'usure de jante et un câble effiloché
- Décider pièce par pièce : OK, à surveiller, ou à remplacer immédiatement

**TP — Audit d'usure complet d'un vélo cobaye**

Sur un vélo cobaye, mesure et consigne l'état de chaque pièce d'usure du freinage : plaquettes ou patins, disques ou pistes de jante, câbles ou durites, puis rends un verdict écrit pour chaque pièce.

Critères de validation :
1. 1. Épaisseur de garniture mesurée sur 4 plaquettes (ou 4 patins) à ±0,1 mm au contrôle croisé ; seuil appliqué correctement (garniture disque ≥ 0,5 mm hors support).
2. 2. Épaisseur du disque mesurée au pied à coulisse et comparée au marquage constructeur (ex. « MIN TH 1.5 ») : verdict correct.
3. 3. Sur 6 pièces d'usure présentées (mélange de neuves, usées, mortes), verdict OK / à surveiller / à remplacer correct pour au moins 5/6.
4. 4. Test fonctionnel : à pleine force, le levier ne touche jamais le guidon et la roue se bloque ; les deux conditions vérifiées AV et AR.
5. 5. Le contrôle pré-ride complet (leviers, usure visuelle, fixations) est exécuté en moins de 60 secondes chrono.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : Quand remplacer plaquettes de disque et patins (pad wear inspection)
- doc — Shimano (manuel du revendeur) : Épaisseurs minimales plaquettes et disques
- video — GCN Tech : Contrôle sécurité du vélo avant de rouler (M-check)
- article — Matos Vélo : Usure des jantes et témoins d'usure

### 3. Réglage express d'un frein sur jante `reglage-express-frein-jante`

- **Durée :** 30 min
- **Prérequis :**
  - [Inspecter les freins et mesurer l'usure](#inspection-freins-usure) `inspection-freins-usure`
  - [Valves et gonflage : Presta, Schrader, Dunlop](roues-et-pneus.md) `valves-et-gonflage`
- **Outils :** Clés Allen 2-5 mm, Tournevis cruciforme, Mètre ruban ou réglet

**Objectifs :**
- Rattraper l'usure des patins avec le barillet de tension sans toucher au câble
- Régler la garde du levier (reach) pour ta taille de main
- Ouvrir et refermer correctement le débrayage (quick release d'étrier route, noodle de V-brake)
- Reconnaître quand le barillet ne suffit plus et qu'il faut reprendre le câble

**TP — Dérèglement volontaire et rattrapage chrono**

Un binôme (ou toi-même) détend le barillet à fond et ouvre le débrayage ; tu remets le frein en état de rouler uniquement avec le barillet et la garde, trois fois de suite.

Critères de validation :
1. 1. Patins à 1-2 mm de la jante de chaque côté après réglage (mesuré au réglet).
2. 2. Freinage franc obtenu dans le premier tiers de la course du levier ; le levier ne touche jamais le guidon.
3. 3. La roue tourne 10 tours sans aucun frottement audible ni visible.
4. 4. Débrayage refermé et vérifié avant chaque test (contrôle croisé) : 3/3 essais sans oubli.
5. 5. Réglage complet refait en moins de 5 minutes sur chacun des 3 essais.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Réglage des freins à étrier route (caliper brake adjustment)
- article — Park Tool : Rôle et usage du barillet de tension
- video — GCN Tech : Régler ses freins route en 5 minutes

### 4. Frein à disque : le contrôle express `controle-express-frein-disque`

- **Durée :** 35 min
- **Prérequis :**
  - [Inspecter les freins et mesurer l'usure](#inspection-freins-usure) `inspection-freins-usure`
  - [Déposer et reposer une roue](roues-et-pneus.md) `depose-repose-roue`
  - [Panorama des systèmes de freinage](#panorama-systemes-freinage) `panorama-systemes-freinage`
- **Outils :** Clés six pans 5 mm et torx T25, Clé dynamométrique 2-20 N·m, Alcool isopropylique et chiffons propres non pelucheux, Lampe frontale ou feuille blanche pour le contre-jour, Carte de visite ou cale papier fine, Gants nitrile propres, Réglet
- **⚠️ Sécurité :**
  - Ne touche jamais la piste de freinage du disque ni la surface des plaquettes avec les doigts : le gras de la peau suffit à diviser le freinage.
  - Aucun dégraissant en aérosol, lubrifiant de chaîne ou nettoyant siliconé à proximité d'un disque : une plaquette contaminée se remplace, elle ne se lave pas.
  - Vélo sans roue : n'actionne pas le levier. Les pistons sortent, l'étrier se referme et le remontage devient un chantier.
  - Après une longue descente, un disque dépasse largement 200 °C : ne le touche pas à mains nues.
  - Levier qui vient au cintre, huile sur l'étrier ou sur le disque : on ne roule pas et on ne bricole pas. C'est de l'hydraulique, ça relève des leçons dédiées.

**Objectifs :**
- Localiser l'origine d'un frottement de disque avant de toucher quoi que ce soit
- Recentrer un étrier sans outil spécial et retrouver une roue qui tourne libre
- Mesurer la garde d'un levier et décider si le vélo est utilisable en l'état
- Manipuler disque et plaquettes sans jamais les contaminer
- Reconnaître les situations où l'on ne touche à rien et où l'on passe la main à l'hydraulique

**TP — Zéro frottement sur 3 vélos**

Trois vélos à disque différents dont un VAE ou un cargo, tous avec un frottement. Tu diagnostiques avant d'agir, tu corriges dans le bon ordre, et tu rends chaque vélo avec une roue libre et un disque propre.

Critères de validation :
1. 1. Origine du frottement annoncée avant toute intervention sur les 3 vélos (roue mal remise, étrier décentré, disque voilé, piston collé) : 3/3 diagnostics conformes au corrigé.
2. 2. Étape 1 systématique : roue redéposée et reposée correctement, axe traversant serré au couple constructeur ou blocage rapide bien assis dans les pattes. Nombre de cas résolus à cette seule étape consigné.
3. 3. Recentrage d'étrier réalisé dans l'ordre : desserrage des 2 vis de fixation, levier maintenu serré à fond, resserrage alterné en croix au couple constructeur (typiquement 6 à 8 N·m).
4. 4. Résultat mesuré sur les 3 vélos : roue lancée à la main effectue au moins 8 tours libres et aucun frottement n'est audible à 1 m dans une pièce calme.
5. 5. Contrôle au contre-jour : jeu visible et à peu près égal des deux côtés du disque, aucun contact permanent constaté sur un tour complet de roue.
6. 6. Garde du levier mesurée au réglet : le point de contact est atteint alors qu'il reste au moins 25 mm entre le levier et le cintre. Tout vélo hors critère est classé « ne pas toucher, hydraulique » et le motif est écrit.
7. 7. Zéro contamination : disque manipulé uniquement par les branches ou la périphérie extérieure, nettoyage final à l'alcool isopropylique avec chiffon propre, gants portés. Aucune trace grasse au contrôle final.
8. 8. Essai freiné : 10 freinages progressifs à basse vitesse par vélo, sans hurlement continu ni perte de mordant, et sans réapparition du frottement.
9. 9. Chaque vélo traité en moins de 10 minutes, diagnostic compris.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : centrer un étrier de frein à disque et supprimer le frottement
- doc — Shimano Dealer's Manual : alignement d'étrier, couples de fixation et manipulation des plaquettes
- doc — SRAM : procédure d'alignement étrier/disque et avertissements de contamination
- video — Global Cycling Network : éliminer un frottement de frein à disque sans outil spécial
- article — Matos Vélo : décontaminer disque et plaquettes : ce qui marche et ce qui est un mythe

## Niveau 2 — Intermédiaire

### 1. Remplacer et aligner des patins de frein sur jante `remplacement-patins-jante`

- **Durée :** 35 min
- **Prérequis :**
  - [Réglage express d'un frein sur jante](#reglage-express-frein-jante) `reglage-express-frein-jante`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
- **Outils :** Clés Allen 4-5 mm, Clé dynamométrique 2-14 N·m, Cale de toe-in ou élastique large, Dégraissant doux, Patins neufs adaptés
- **⚠️ Sécurité :**
  - Jante carbone = patins spécifiques carbone obligatoires : des patins alu détruisent la résine et peuvent provoquer l'éclatement de la jante en descente.

**Objectifs :**
- Distinguer patins à cartouche (route), patins sur tige filetée (V-brake) et patins tenon (cantilever)
- Remplacer des cartouches en respectant le sens de montage et la goupille
- Aligner un patin sur la piste de freinage : hauteur, assiette, débord
- Régler le toe-in (pincement avant) pour éliminer le sifflement
- Choisir la gomme adaptée : jante alu, jante carbone, conditions humides

**TP — Remplacement complet des 4 patins d'un vélo**

Remplace les patins avant et arrière d'un vélo (cartouche ou tige filetée selon le cobaye), aligne-les sur la piste et règle le toe-in, puis valide par un test de freinage.

Critères de validation :
1. 1. Chaque patin couvre la piste de freinage sans toucher le pneu ni dépasser sous la jante : débord ≤ 0,5 mm toléré, vérifié aux 4 patins.
2. 2. Toe-in de 0,5 à 1 mm mesuré à la cale : l'avant du patin touche avant l'arrière.
3. 3. Serrage au couple gravé sur l'étrier (typiquement 5-7 N·m), consigné dans le carnet.
4. 4. Cartouches montées dans le bon sens (goupille ou fermeture vers l'arrière) : contrôle visuel 4/4.
5. 5. Après 10 freinages d'essai depuis 15 km/h : aucun sifflement, freinage franc dans le premier tiers de course.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Remplacement et alignement des patins de frein sur jante
- article — Park Tool : Brake pad alignment et toe-in
- article — Sheldon Brown : Patins, gommes et surfaces de jante
- doc — SwissStop : Choix des gommes selon jante alu ou carbone

### 2. Remplacer câble et gaine de frein `cable-gaine-frein-remplacement`

- **Durée :** 40 min
- **Prérequis :**
  - [Câbles et gaines : coupe et routage externe](direction-et-peripheriques.md) `cables-gaines-routage-externe`
  - [Remplacer et aligner des patins de frein sur jante](#remplacement-patins-jante) `remplacement-patins-jante`
- **Outils :** Coupe-câble/coupe-gaine de qualité, Poinçon ou pointe pour rouvrir la lumière, Pince à sertir ou pince plate, Embouts de gaine et de câble, Lubrifiant léger (téflon), Quatrième main (optionnel)
- **⚠️ Sécurité :**
  - Une gaine de dérailleur (compressionless) montée sur un frein peut éclater sous l'effort de freinage : vérifie toujours le marquage « brake » de la gaine.

**Objectifs :**
- Choisir la bonne gaine (spiralée pour le freinage) et le bon câble (tête poire ou tonneau selon levier)
- Couper une gaine proprement et rouvrir la lumière sans bavure
- Poser embouts de gaine et embout de câble, lubrifier là où il faut
- Régler la tension initiale du câble et la course du levier
- Dimensionner les longueurs pour une rotation complète du guidon

**TP — Remplacement câble + gaine complet sur un frein arrière**

Remplace intégralement câble et gaine du frein arrière d'un vélo cobaye (le trajet le plus long), du levier à l'étrier, et règle la tension pour un freinage franc.

Critères de validation :
1. 1. Chaque coupe de gaine présente une lumière parfaitement ronde et sans bavure (contrôle à la loupe).
2. 2. Longueur de gaine : le guidon tourne de butée à butée sans tendre le câble ni provoquer de freinage parasite.
3. 3. Embout de câble serti, aucun brin effiloché après 20 actionnements à pleine force.
4. 4. Freinage franc dans la première moitié de course du levier ; blocage de roue possible.
5. 5. L'étrier revient seul en position ouverte en moins de 1 seconde après relâchement (test de friction du câble).
6. 6. Barillet laissé avec 2-3 tours de réserve pour le rattrapage d'usure futur.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Remplacement de câble et gaine de frein (drop bar et flat bar)
- article — Park Tool : Housing and cable cutting : techniques de coupe
- doc — Jagwire : Types de gaines et embouts de freinage
- article — Matos Vélo : Changer ses câbles et gaines de frein

### 3. Régler un étrier dual pivot (route) `reglage-etrier-dual-pivot`

- **Durée :** 25 min
- **Prérequis :**
  - [Remplacer câble et gaine de frein](#cable-gaine-frein-remplacement) `cable-gaine-frein-remplacement`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
- **Outils :** Clés Allen 4-5 mm, Clé plate fine 10 mm (vieux étriers), Clé dynamométrique 2-14 N·m, Réglet

**Objectifs :**
- Centrer un étrier dual pivot avec la vis de centrage et l'écrou de fixation
- Régler l'écartement des patins et la tension du ressort de rappel
- Diagnostiquer un étrier qui frotte d'un côté après chaque freinage
- Monter/démonter un étrier à fixation centrale (écrou noyé) au couple

**TP — Dépose, repose et centrage complet d'un étrier route**

Démonte complètement l'étrier avant d'un vélo route, remonte-le au couple, recâble-le et centre-le parfaitement.

Critères de validation :
1. 1. Écrou de fixation central serré au couple constructeur (typiquement 8-10 N·m), valeur consignée.
2. 2. Écart patin-jante symétrique gauche/droite à ±0,5 mm près (mesuré au réglet).
3. 3. Aucun frottement sur un tour complet de roue, vérifié après 10 freinages à pleine force (l'étrier ne se décale pas).
4. 4. Le levier revient franchement seul ; course morte < 1/4 de la course totale.
5. 5. Réglage reproductible : centrage refait en moins de 3 minutes après dérèglement volontaire.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Réglage des étriers dual pivot et side pull
- doc — Shimano (manuel du revendeur) : Montage et réglage étriers route BR-série
- video — GCN Tech : Centrer ses freins route qui frottent

### 4. Régler un V-brake de A à Z `reglage-v-brake`

- **Durée :** 30 min
- **Prérequis :**
  - [Remplacer câble et gaine de frein](#cable-gaine-frein-remplacement) `cable-gaine-frein-remplacement`
  - [Remplacer et aligner des patins de frein sur jante](#remplacement-patins-jante) `remplacement-patins-jante`
- **Outils :** Clés Allen 4-5 mm, Tournevis cruciforme (vis de ressort), Clé dynamométrique 2-14 N·m, Réglet
- **⚠️ Sécurité :**
  - Un levier à tirage court (route/cantilever) sur un V-brake donne un freinage ON/OFF brutal qui bloque la roue : vérifie toujours la compatibilité de tirage.

**Objectifs :**
- Monter noodle et soufflet correctement et régler la longueur de câble
- Équilibrer les deux bras avec les vis de tension de ressort
- Régler hauteur et assiette des patins sur tige filetée (jeu de cales sphériques)
- Vérifier la compatibilité levier : tirage long V-brake vs tirage court cantilever/route

**TP — Remise en état complète d'un V-brake déréglé**

Sur un VTT ou vélo de ville cobaye, démonte les patins, détends les ressorts, décâble, puis remonte et règle tout : patins, câble, équilibrage des bras.

Critères de validation :
1. 1. Patins à 1-1,5 mm de la jante de chaque côté, couvrant la piste sans toucher le pneu (4 patins vérifiés).
2. 2. Test de la feuille de papier : les deux patins touchent la jante simultanément (la feuille se coince en même temps des deux côtés).
3. 3. Équilibrage : après 10 freinages, aucun bras ne reste collé ni décalé de plus de 1 mm par rapport à l'autre.
4. 4. Noodle engagé à fond dans son logement, soufflet en place, câble sans mou.
5. 5. Blocage de roue obtenu avant la mi-course du levier ; aucun contact levier-guidon.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Réglage des freins linear pull / V-brake
- doc — Shimano (manuel du revendeur) : Réglage V-brake BR-T série
- article — Sheldon Brown : Direct pull cantilevers (V-brakes) : géométrie et tirage

### 5. Régler un frein cantilever (et mini-V) `reglage-cantilever`

- **Durée :** 35 min
- **Prérequis :**
  - [Régler un V-brake de A à Z](#reglage-v-brake) `reglage-v-brake`
- **Outils :** Clés Allen 4-5 mm, Clé plate 10 mm, Troisième/quatrième main (très utile), Cale de toe-in, Réglet
- **⚠️ Sécurité :**
  - Sur un cantilever avant sans patte de garde-boue ni butée de câble sécurisée, un câble transversal qui saute peut se prendre dans le pneu et bloquer la roue avant : vérifie la présence d'un rattrapage (réflecteur, patte).

**Objectifs :**
- Régler la hauteur du câble transversal (straddle) et son effet sur la puissance
- Régler des patins tenon avec toe-in prononcé pour éliminer le broutage
- Équilibrer les ressorts des deux bras
- Différencier cantilever, mini-V et V-brake et leurs leviers compatibles
- Reconnaître les montages vintage, touring et cyclocross

**TP — Réglage complet d'un cantilever de randonneuse ou cyclocross**

Sur un vélo à cantilevers (vintage, touring ou CX), règle la hauteur du straddle, les patins tenon avec toe-in, l'équilibrage, et élimine tout broutage au test.

Critères de validation :
1. 1. Hauteur du straddle réglée et justifiée par écrit (compromis puissance/garde au pneu) ; angle du câble transversal cohérent avec la doc du modèle.
2. 2. Les deux bras touchent la jante simultanément (test feuille de papier).
3. 3. Toe-in de 1 mm mesuré à la cale sur les 4 patins tenon.
4. 4. 5 freinages d'arrêt complet depuis 15 km/h : aucun broutage (judder) ni sifflement.
5. 5. Blocage de roue possible ; levier jamais au contact du guidon.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Réglage des freins cantilever
- article — Sheldon Brown : Cantilever brakes : géométrie, straddle et mécanique du tirage
- video — GCN Tech : Régler des cantilevers de cyclocross
- article — Bike Gremlin : Compatibilité leviers et freins à tirage court/long

### 6. Monter un disque et centrer l'étrier `montage-rotor-centrage-etrier`

- **Durée :** 40 min
- **Prérequis :**
  - [Inspecter les freins et mesurer l'usure](#inspection-freins-usure) `inspection-freins-usure`
  - Savoir serrer au couple, y compris avec un embout Torx T25 *(fondamentaux)*
  - [Déposer et reposer une roue](roues-et-pneus.md) `depose-repose-roue`
- **Outils :** Clé Torx T25, Clé dynamométrique 2-14 N·m et 10-60 N·m, Outil Center Lock (type démonte-cassette ou externe selon lockring), Clés Allen 4-5 mm, Lampe ou feuille blanche (contraste visuel), Gants nitrile ou chiffon propre
- **⚠️ Sécurité :**
  - Ne touche jamais la piste de freinage du disque à mains nues.
  - Un disque peut dépasser 200 °C après un freinage prolongé : laisse refroidir avant toute intervention.
  - Bords de disque coupants : manipule par le centre ou les aérations.

**Objectifs :**
- Différencier Center Lock et 6 trous et monter chacun au couple
- Respecter le sens de rotation du disque et l'ordre de serrage en étoile
- Identifier les standards de fixation d'étrier : Post Mount, Flat Mount, IS
- Centrer un étrier par la méthode serrage-en-freinant puis affiner à l'œil
- Contrôler l'absence de frottement de façon reproductible

**TP — Montage croisé 6 trous + Center Lock et double centrage**

Monte un disque 6 trous sur une roue et un Center Lock sur une autre (ou successivement sur la même selon matériel), remonte les roues et centre les deux étriers jusqu'à zéro frottement.

Critères de validation :
1. 1. Disque 6 trous : 6 vis Torx serrées en étoile au couple gravé (typiquement 6,2 N·m ou 4 N·m selon marque), progression en 2 passes.
2. 2. Center Lock : lockring serré à 40 N·m avec l'outil adapté au type d'axe.
3. 3. Sens de rotation respecté : flèche du disque conforme, contrôle photo dans le carnet.
4. 4. Après centrage : aucun contact plaquette-disque sur 10 tours de roue complets, à l'oreille et contre fond blanc.
5. 5. Jeu visuel symétrique de part et d'autre du disque (contrôle à la lampe).
6. 6. Centrage reproductible : après dépose/repose de la roue, le frein reste silencieux (sinon recommencer).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Montage des disques 6 trous et Center Lock
- article — Park Tool : Centrage et alignement d'un étrier de frein à disque
- doc — Shimano (manuel du revendeur) : Couples et procédure Center Lock
- doc — SRAM : Montage des rotors et adaptateurs Post Mount/Flat Mount

### 7. Remplacer des plaquettes de frein à disque `remplacement-plaquettes-disque`

- **Durée :** 30 min
- **Prérequis :**
  - [Monter un disque et centrer l'étrier](#montage-rotor-centrage-etrier) `montage-rotor-centrage-etrier`
- **Outils :** Repousse-piston plastique ou démonte-pneu propre, Pince à bec fin, Clé Allen 3 mm ou pince pour goupille, Alcool isopropylique ≥ 90 %, Chiffons propres non pelucheux, Cale de transport (bloc jaune), Gants nitrile
- **⚠️ Sécurité :**
  - N'actionne JAMAIS le levier d'un frein hydraulique roue déposée sans cale : les pistons sortent et le remontage devient une purge.
  - Toute trace de gras sur plaquettes ou disque ruine le freinage : gants ou mains dégraissées obligatoires.

**Objectifs :**
- Repousser les pistons proprement avec un outil non métallique
- Identifier le système de retenue : goupille filetée, goupille fendue, clip, aimant
- Monter plaquettes et ressort d'écartement dans le bon sens
- Nettoyer l'étrier sans contaminer les surfaces de friction
- Adapter la procédure aux étriers 2 et 4 pistons

**TP — Remplacement des plaquettes avant et arrière**

Remplace les plaquettes des deux étriers d'un vélo à disques (mécanique ou hydraulique), en repoussant les pistons et en nettoyant les étriers, puis vérifie le point de contact.

Critères de validation :
1. 1. Pistons repoussés à fond, uniquement avec un outil non métallique appuyé sur les anciennes plaquettes ou un repousse-piston.
2. 2. Plaquettes neuves + ressort montés dans le bon sens ; goupille serrée au couple ou goupille fendue repliée : contrôle croisé 2/2 étriers.
3. 3. Aucune trace de doigt ni de gras sur les garnitures (manipulation par le support uniquement).
4. 4. Après repose des roues et 10 pompages : point de contact ferme et constant, aucun frottement sur roue libre.
5. 5. Anciennes plaquettes mesurées et consignées (épaisseur restante, usure symétrique ou non) avec interprétation écrite.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Remplacement des plaquettes de frein à disque
- doc — Shimano (manuel du revendeur) : Remplacement plaquettes et cales de transport
- doc — SRAM : Manuel plaquettes et pistons des étriers MTB
- article — Matos Vélo : Changer ses plaquettes de frein à disque

### 8. Composés de plaquettes et rodage (bed-in) `plaquettes-composes-rodage`

- **Durée :** 30 min
- **Prérequis :**
  - [Remplacer des plaquettes de frein à disque](#remplacement-plaquettes-disque) `remplacement-plaquettes-disque`
- **Outils :** Plaquettes neuves, Décamètre ou mètre à roulette (mesure de distance d'arrêt), Craie ou marqueurs de sol, Compteur ou GPS (vitesse)
- **⚠️ Sécurité :**
  - Le rodage se fait dans un lieu sans circulation : les premières décélérations sont faibles et la puissance monte brutalement en fin de rodage.
  - Ne bloque jamais la roue pendant le rodage : le transfert de matière doit rester progressif.

**Objectifs :**
- Choisir entre organique (résine), métallique (fritté) et semi-métallique selon l'usage
- Vérifier la compatibilité plaquette-disque (marquage « Resin only »)
- Exécuter un rodage complet de 20-30 freinages progressifs
- Mesurer objectivement le gain de puissance apporté par le rodage
- Reconnaître le glaçage et savoir le traiter

**TP — Rodage mesuré avant/après**

Sur plaquettes et/ou disque neufs, mesure ta distance d'arrêt depuis 20 km/h avant rodage, exécute le protocole de 20-30 freinages progressifs, puis re-mesure.

Critères de validation :
1. 1. Choix de composé correct et justifié sur 3 scénarios imposés (ex. VAE cargo hiver → métallique ; route carbone silencieuse → résine ; usage mixte → semi-métallique) : 3/3.
2. 2. Compatibilité vérifiée : marquage du disque contrôlé avant montage (« Resin only » vs fritté), verdict consigné.
3. 3. Protocole exécuté : 20 freinages de 25 à 5 km/h sans jamais bloquer la roue ni s'arrêter complètement, puis 5 freinages plus appuyés.
4. 4. Distance d'arrêt depuis 20 km/h réduite d'au moins 20 % après rodage (moyenne de 3 mesures avant / 3 après).
5. 5. Surface des plaquettes inspectée après rodage : aspect mat homogène, aucune zone brillante (glaçage).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Bed-in : rodage des freins à disque
- doc — SRAM : Procédure officielle de rodage des plaquettes
- doc — Shimano : Compatibilité disques et plaquettes résine/métal
- article — BikeRadar : Organique vs métallique : quel composé choisir

### 9. Régler un frein à disque mécanique `frein-disque-mecanique-reglage`

- **Durée :** 35 min
- **Prérequis :**
  - [Remplacer câble et gaine de frein](#cable-gaine-frein-remplacement) `cable-gaine-frein-remplacement`
  - [Monter un disque et centrer l'étrier](#montage-rotor-centrage-etrier) `montage-rotor-centrage-etrier`
- **Outils :** Clés Allen 3-5 mm, Clé Torx T25, Réglet ou jeu de cales d'épaisseur, Lampe

**Objectifs :**
- Comprendre l'architecture à piston mobile unique (plaquette fixe + mobile) vs double piston mécanique
- Régler l'écartement de la plaquette fixe à la molette (type BB7) puis la mobile au câble
- Régler un étrier mécanique double piston (type Spyre) des deux côtés
- Compenser l'usure des plaquettes sans démontage
- Choisir le bon tirage (route vs flat bar) pour un disque mécanique

**TP — Réglage complet d'un disque mécanique dégradé**

Sur un vélo à disques mécaniques (gravel, ville ou VTT d'entrée de gamme), reprends tout : centrage, écartement des deux plaquettes, tension de câble, et valide au test de freinage.

Critères de validation :
1. 1. Jeu plaquette fixe-disque réglé à 0,2-0,4 mm (cale d'épaisseur ou méthode constructeur : contact puis recul d'un cran).
2. 2. Aucun frottement sur 10 tours de roue après réglage.
3. 3. Blocage de roue obtenu avant la mi-course du levier.
4. 4. Rattrapage d'usure démontré : dérègle d'un cran, rattrape à la molette et au barillet en moins de 2 minutes sans démontage.
5. 5. Course morte du levier < 1/4 de la course totale et retour franc du levier.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Réglage des freins à disque mécaniques
- doc — Avid/SRAM : Manuel de réglage BB5/BB7
- doc — TRP : Réglage de l'étrier mécanique double piston Spyre
- article — Bike Gremlin : Freins à disque mécaniques : forces et faiblesses

### 10. Bruits de freinage : diagnostic et décontamination `bruits-freins-diagnostic-decontamination`

- **Durée :** 35 min
- **Prérequis :**
  - [Monter un disque et centrer l'étrier](#montage-rotor-centrage-etrier) `montage-rotor-centrage-etrier`
  - [Composés de plaquettes et rodage (bed-in)](#plaquettes-composes-rodage) `plaquettes-composes-rodage`
  - [Ton calendrier d'entretien : 25 h, 50 h, 100 h](fondamentaux.md) `calendrier-entretien`
- **Outils :** Alcool isopropylique ≥ 90 %, Chiffons propres non pelucheux, Papier abrasif 120-180 (patins jante), Lampe, Gants nitrile
- **⚠️ Sécurité :**
  - Alcool isopropylique : inflammable, à utiliser loin de toute flamme et dans un local ventilé.
  - Des plaquettes imbibées d'huile ou de liquide hydraulique se remplacent : aucun nettoyage ne garantit un freinage sûr.

**Objectifs :**
- Différencier au son : sifflement (contamination/glaçage), broutage (toe-in/surface), ding-ding régulier (voile), frottement continu (centrage)
- Appliquer une méthode de diagnostic en éliminant une cause à la fois
- Décontaminer un disque à l'alcool isopropylique et statuer sur des plaquettes contaminées
- Nettoyer une piste de jante encrassée
- Prévenir la contamination lors des lubrifications et lavages

**TP — Trois pannes sonores à résoudre**

Un binôme (ou toi-même en aveugle différé) introduit 3 défauts sur un vélo cobaye : étrier décentré, disque légèrement contaminé (trace de doigt gras), patin/plaquette mal aligné. Diagnostique puis traite chaque panne.

Critères de validation :
1. 1. Pour chacune des 3 pannes : cause écrite dans le carnet AVANT tout démontage, confirmée ensuite — 3/3 diagnostics corrects.
2. 2. Décontamination du disque : nettoyage à l'alcool isopropylique jusqu'à ce qu'un chiffon blanc ressorte sans aucune trace grise/grasse.
3. 3. Décision plaquettes correcte : contamination superficielle vs imbibée, verdict justifié (remplacement si doute).
4. 4. Après traitement : 10 freinages depuis 20 km/h sans sifflement ni broutage, puissance conforme (blocage possible).
5. 5. Liste écrite de 5 gestes de prévention (lubrification chaîne roue masquée, dégraissant jamais en spray près des disques, etc.).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Pourquoi mes freins à disque font du bruit (diagnostic)
- doc — SRAM : Nettoyage et décontamination des disques
- video — GCN Tech : Éliminer les sifflements de freins à disque
- article — BikeRadar : Contamination des plaquettes : causes et solutions

### 11. Freins en rade en pleine sortie `depannage-freins-terrain`

- **Durée :** 40 min
- **Prérequis :**
  - [Frein à disque : le contrôle express](#controle-express-frein-disque) `controle-express-frein-disque`
  - [Inspecter les freins et mesurer l'usure](#inspection-freins-usure) `inspection-freins-usure`
  - [Remplacer des plaquettes de frein à disque](#remplacement-plaquettes-disque) `remplacement-plaquettes-disque`
  - [Remplacer câble et gaine de frein](#cable-gaine-frein-remplacement) `cable-gaine-frein-remplacement`
  - [Réparer en pleine cambrousse](cas-exotiques.md) `bikepacking-trousse-terrain`
- **Outils :** Multitool avec six pans 2 à 6 mm et torx T25, Plaquettes de secours dans leur emballage, Câble de frein de secours et serre-câble, Petite pince, Colliers Rilsan et sangle velcro, Chiffon propre et lingettes d'alcool isopropylique, Gants nitrile, Chronomètre
- **⚠️ Sécurité :**
  - Plaquette usée jusqu'au support métallique : on ne redescend pas, on pousse le vélo. Le support détruit le disque et le freinage disparaît d'un coup.
  - Levier qui vient toucher le cintre ou fuite d'huile visible : vélo immobilisé. Aucune réparation de fortune ne rend un circuit hydraulique fiable au bord de la route.
  - Fluide DOT : corrosif pour la peau, les yeux et la peinture. Gants obligatoires, rinçage abondant à l'eau en cas de contact.
  - Descente longue en charge (VAE, cargo, tandem chargé) : freinage par appuis francs et alternés, jamais en traînant, sinon fading puis ébullition du fluide et perte totale de frein.
  - Un seul frein opérationnel : retour au pas, sur terrain plat, jamais en descente, et jamais avec le seul frein avant sur un vélo lourdement chargé.

**Objectifs :**
- Poser un diagnostic de panne de frein en moins de trois minutes, sur le bord de la route
- Trancher entre réparer, dégrader et rouler autrement, ou immobiliser le vélo
- Exécuter les dépannages qui tiennent la route : plaquette déboîtée, câble rompu, disque tordu
- Gérer une longue descente en charge sans provoquer de fading ni d'ébullition du fluide
- Énoncer sans hésiter la liste de ce sur quoi on ne repart jamais

**TP — Cinq pannes, cinq verdicts**

Cinq pannes de frein sont préparées et tirées au sort : plaquette usée au support en pleine descente, levier qui vient au cintre, câble rompu, plaquette déboîtée, disque tordu qui bloque. Pour chacune tu diagnostiques, tu tranches, tu exécutes.

Critères de validation :
1. 1. Diagnostic posé et verdict rendu en moins de 3 minutes chrono pour chacune des 5 pannes.
2. 2. Verdict de sécurité correct 5/5 par rapport au corrigé, chaque verdict étant l'un des trois : réparer sur place, dégrader et rentrer en mode réduit, vélo immobilisé.
3. 3. Pour chaque cas réparable, la remise en service est exécutée avec le seul contenu réel de ta sacoche, sans emprunt à l'établi.
4. 4. Efficacité contrôlée après réparation : arrêt complet depuis 15 km/h en moins de 12 m sur sol sec avec le seul frein remis en service.
5. 5. Disque tordu qui bloque : redressage tenté puis, si le frottement persiste, plaquettes déposées ou étrier déposé et sanglé, roue redevenue libre sur au moins 8 tours, et le frein concerné est déclaré hors service à voix haute.
6. 6. Câble rompu : câble de secours passé et tendu, garde au levier reconstituée avec au moins 25 mm restant au point de contact, brin coupé et embout ou boucle sécurisée, aucun brin libre près des rayons.
7. 7. Liste des interdits énoncée sans oubli : 5 situations sur lesquelles on ne repart jamais, formulées en une phrase chacune.
8. 8. Protocole anti-fading énoncé et appliqué sur une descente d'essai ou en simulation : appuis alternés, arrêts de refroidissement, vitesse cible, adaptation à la charge réelle du vélo.
9. 9. Bilan de trousse : liste écrite des éléments qui t'ont manqué pendant l'exercice, avec au moins 3 ajouts concrets décidés et effectivement mis dans la sacoche.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : dépannage de frein sur la route : câble rompu, plaquette déboîtée
- doc — Shimano : limites d'usure des plaquettes et avertissements sur l'usage au-delà
- doc — SRAM : surchauffe, fading et gestion des longues descentes en freinage hydraulique
- doc — Magura : point de levier errant, échauffement et comportement du fluide en descente
- article — Bikepacking.com : réparations de freins sur le terrain en voyage chargé
- article — Vélotaf : freinage des vélos lourds et chargés en usage quotidien

### 12. Poser et régler un levier de frein `pose-reglage-levier-frein`

- **Durée :** 35 min
- **Prérequis :**
  - [Panorama des systèmes de freinage](#panorama-systemes-freinage) `panorama-systemes-freinage`
  - [Remplacer poignées et grips](direction-et-peripheriques.md) `remplacer-poignees-grips`
  - [Aligner et resserrer le cockpit](direction-et-peripheriques.md) `alignement-cockpit-serrage`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
- **Outils :** Clés six pans 3, 4, 5 mm et torx T25, Clé dynamométrique 2-20 N·m, Réglet et niveau ou application inclinomètre, Ruban de masquage et marqueur fin, Dégraissant et chiffons, Pied d'atelier, Appareil photo ou smartphone pour les contrôles de position
- **⚠️ Sécurité :**
  - Collier de levier sur cintre carbone : couple constructeur strict (souvent 2,5 à 5 N·m). Une surcharge amorce une fissure et le cintre casse en danseuse.
  - Un levier repositionné ne doit jamais mettre la durite ou la gaine en tension, ni la couder serré : rupture de gaine ou point de levier qui fuit au braquage complet.
  - Après tout démontage, vérifie quel levier commande quel frein : inverser avant et arrière sur un vélo prêté est un piège grave.

**Objectifs :**
- Poser et positionner un levier de frein sur cintre plat, cintre route et cintre ville
- Régler l'angle du levier dans l'alignement de l'avant-bras et vérifier la symétrie
- Ajuster le reach (garde au cintre) à la taille de main du pratiquant
- Serrer un collier au couple, y compris sur cintre carbone, sans marquer ni fissurer
- Vérifier la compatibilité de tirage entre levier et frein avant de monter quoi que ce soit

**TP — Trois cockpits, trois logiques**

Tu montes et règles les leviers sur trois postes de pilotage différents : un cintre plat de VTT, un cintre route à cocottes, un cintre ville relevé. Pour chacun, tu justifies le tirage avant de serrer.

Critères de validation :
1. 1. Compatibilité de tirage annoncée et justifiée pour les 3 postes (long pull pour V-brake, short pull pour cantilever et route, hydraulique) : 3/3 corrects, avec la solution proposée en cas de mélange (levier adapté ou poulie de conversion).
2. 2. Cintre plat : l'extrémité du levier tombe sous la première phalange de l'index, mains en position normale sur les grips, contrôle photo à l'appui.
3. 3. Angle sur cintre plat réglé dans l'alignement de l'avant-bras, typiquement 35 à 45° sous l'horizontale, écart gauche/droite ≤ 2° mesuré à l'inclinomètre.
4. 4. Cintre route : sommet des cocottes aligné avec la partie basse plate du cintre, différence de hauteur gauche/droite ≤ 2 mm mesurée depuis une référence fixe.
5. 5. Reach réglé à la main du pratiquant : le doigt attaque le levier sans extension excessive, et il reste au moins 20 mm entre le levier et le cintre au point de contact.
6. 6. Symétrie de position latérale : distance bout de cintre / collier identique à gauche et à droite à ±2 mm sur les 3 postes.
7. 7. Colliers serrés au couple constructeur à la dynamométrique (souvent 4 à 6 N·m, moins sur carbone), valeur relevée et écrite pour chacun des 6 leviers, aucune marque sur les cintres.
8. 8. Cheminement contrôlé : au braquage complet à gauche et à droite, aucune gaine ni durite tendue, aucun rayon de courbure inférieur au minimum constructeur.
9. 9. Test dynamique de 200 m avec un freinage d'urgence par vélo : aucun levier ne pivote dans son collier, correspondance avant/arrière vérifiée et annoncée.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Shimano Dealer's Manual : montage des leviers, couples de collier et compatibilités de tirage
- doc — SRAM : colliers MatchMaker, couples de serrage et positionnement des leviers
- video — Park Tool : positionner et régler l'angle des leviers de frein
- doc — Problem Solvers : Travel Agent : convertir un tirage de câble entre V-brake et levier route
- doc — Ritchey : couples de serrage sur cintres carbone et zones de collier autorisées

## Niveau 3 — Avancé

### 1. Hydraulique : principe et discipline des fluides `hydraulique-principe-fluides`

- **Durée :** 40 min
- **Prérequis :**
  - [Bruits de freinage : diagnostic et décontamination](#bruits-freins-diagnostic-decontamination) `bruits-freins-diagnostic-decontamination`
  - [Remplacer des plaquettes de frein à disque](#remplacement-plaquettes-disque) `remplacement-plaquettes-disque`
- **Outils :** Deux bacs ou zones de travail étiquetés « MINÉRALE » et « DOT », Gants nitrile, Lunettes de protection, Seringues d'exercice et eau colorée, Étiqueteuse ou marqueur permanent
- **⚠️ Sécurité :**
  - Le DOT est corrosif (peinture, peau) et hygroscopique : gants nitrile + lunettes obligatoires, flacon refermé immédiatement, jamais de flacon entamé depuis des mois pour une purge.
  - Ne JAMAIS mélanger fluides ni matériel : de l'huile minérale dans un frein DOT (ou l'inverse) détruit les joints — défaillance totale possible en descente.
  - Jamais de DOT 5 (silicone) dans un frein vélo : seuls DOT 4 et 5.1 sont compatibles entre eux.

**Objectifs :**
- Expliquer la transmission de pression : maître-cylindre, pistons d'étrier, rapport de démultiplication
- Comprendre l'auto-ajustement par rollback des joints carrés et la compensation d'usure par le réservoir
- Différencier huile minérale (Shimano, Magura, TRP, Campagnolo) et DOT 4/5.1 (SRAM) : hygroscopie, points d'ébullition sec/humide
- Appliquer la règle absolue de non-mélange : fluides, kits, seringues, chiffons séparés
- Identifier le fluide requis sur n'importe quel frein via marquages et documentation

**TP — Mise en place du poste de purge et gymnastique des seringues**

Monte ton poste de travail hydraulique à deux zones strictement séparées, identifie le fluide requis sur 5 freins différents, puis entraîne-toi au geste de purge (chasser les bulles, pousser sans à-coups) avec de l'eau colorée.

Critères de validation :
1. 1. Fluide correct identifié sur 5 modèles de freins différents (marquage levier, couleur de bouchon, documentation) : 5/5.
2. 2. Poste à deux zones : chaque outil, seringue et chiffon étiqueté et rangé dans sa zone ; zéro pièce croisée au contrôle surprise.
3. 3. EPI (gants nitrile + lunettes) porté en continu pendant tout l'exercice de manipulation.
4. 4. Geste seringue : chasser l'air d'une seringue d'eau colorée jusqu'à zéro bulle visible, 3 fois de suite, sans éclaboussure.
5. 5. Explication écrite en moins de 150 mots du rapport de démultiplication avec un calcul correct à ±10 % (surface maître-cylindre vs somme des pistons d'étrier).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SRAM : DOT fluid : manipulation, sécurité et compatibilité
- doc — Shimano : Huile minérale : spécifications et précautions
- video — Park Tool : Comment fonctionne un frein à disque hydraulique
- article — BikeRadar : Huile minérale vs DOT : différences et incompatibilité
- article — Bike Gremlin : Fluides de frein hydraulique expliqués

### 2. Purger un frein Shimano (huile minérale, entonnoir) `purge-shimano-entonnoir`

- **Durée :** 45 min
- **Prérequis :**
  - [Hydraulique : principe et discipline des fluides](#hydraulique-principe-fluides) `hydraulique-principe-fluides`
  - [Remplacer des plaquettes de frein à disque](#remplacement-plaquettes-disque) `remplacement-plaquettes-disque`
- **Outils :** Kit de purge Shimano (entonnoir + bouchon, seringue ou poire, tuyau), Huile minérale Shimano, Cale de purge jaune, Clés Allen 3-4 mm, clé plate 7 mm, Clé dynamométrique 2-14 N·m, Alcool isopropylique et chiffons, Gants nitrile, lunettes
- **⚠️ Sécurité :**
  - Plaquettes déposées et rangées loin du poste avant d'ouvrir le circuit : une goutte d'huile les condamne.
  - L'huile minérale est moins agressive que le DOT mais reste un contaminant absolu des freinages : nettoyage total obligatoire.

**Objectifs :**
- Préparer le frein : levier horizontal, plaquettes déposées, cale de purge en place
- Exécuter la purge par gravité puis par poussée depuis l'étrier avec l'entonnoir au levier
- Chasser les bulles résiduelles du levier (tapotements, actionnements, inclinaisons)
- Fermer proprement : bouchon d'entonnoir, vis de purge au couple, nettoyage complet
- Valider la purge par des critères objectifs de fermeté

**TP — Purge complète avant + arrière d'un vélo Shimano**

Purge les deux freins d'un vélo équipé Shimano (VTT ou route), du montage de l'entonnoir au test final sur route, en consignant chaque étape.

Critères de validation :
1. 1. Levier ferme : le point de contact ne dérive pas de plus de 3 mm (mesuré à l'extrémité du levier) sur 20 pompages consécutifs.
2. 2. Aucune bulle ne remonte dans l'entonnoir après 30 secondes d'actionnements et tapotements finaux.
3. 3. Vis de purge et bouchons serrés au couple du manuel du revendeur, valeurs consignées.
4. 4. Test d'étanchéité : papier blanc sous levier et étrier pendant 12 h — zéro trace d'huile.
5. 5. Test route : blocage de roue possible, point de contact identique à froid et après 10 freinages appuyés.
6. 6. Plaquettes remontées non contaminées : pas de sifflement ni perte de puissance après remontage.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Shimano (manuel du revendeur) : Procédure officielle de purge à l'entonnoir
- video — Park Tool : Purge frein Shimano huile minérale
- video — GCN Tech : Purge des freins route hydrauliques Shimano
- article — Matos Vélo : Purger ses freins Shimano pas à pas

### 3. Purger un frein SRAM (DOT, Bleeding Edge) `purge-sram-bleeding-edge`

- **Durée :** 45 min
- **Prérequis :**
  - [Purger un frein Shimano (huile minérale, entonnoir)](#purge-shimano-entonnoir) `purge-shimano-entonnoir`
- **Outils :** Kit de purge SRAM (2 seringues, raccords Bleeding Edge et filetés), DOT 5.1 neuf en flacon scellé, Cale de purge SRAM, Clés Torx T10/T25, Allen 4 mm, Clé dynamométrique 2-14 N·m, Alcool isopropylique, chiffons dédiés DOT, Gants nitrile, lunettes
- **⚠️ Sécurité :**
  - DOT corrosif : gants nitrile + lunettes en continu ; toute goutte sur la peinture ou la peau se rince immédiatement à l'eau.
  - DOT hygroscopique : uniquement un flacon neuf ou récemment ouvert ; un DOT saturé d'humidité bout dans l'étrier en descente (perte totale de freinage).
  - Matériel exclusivement DOT : jamais le kit minérale, jamais l'inverse.

**Objectifs :**
- Préparer les deux seringues (remplissage 3/4 - 1/4, dégazage) et le frein (levier horizontal, cale)
- Connecter l'outil Bleeding Edge à l'étrier et la seringue au port du levier
- Pousser le fluide de l'étrier vers le levier, créer la dépression de dégazage, fermer dans le bon ordre
- Régler le contact point (si présent) après purge
- Nettoyer toute trace de DOT et éliminer les déchets correctement

**TP — Purge Bleeding Edge complète avec fiche de traçabilité**

Purge un frein SRAM (Guide, Code, Level ou DB) selon la procédure officielle seringue-à-seringue, avec dégazage par dépression, et documente fluide, date et couples dans le carnet.

Critères de validation :
1. 1. Seringues préparées sans bulle visible après dégazage (tapotement + dépression), contrôle avant connexion.
2. 2. Ordre des opérations respecté : port Bleeding Edge fermé AVANT retrait de la seringue étrier (zéro goutte perdue à l'étrier).
3. 3. Levier ferme : dérive du point de contact ≤ 3 mm sur 20 pompages ; pas de sensation spongieuse en fin de course.
4. 4. Nettoyage : lingette blanche passée sur levier, durite et étrier ressort sans trace ; test papier 12 h sans fuite.
5. 5. Fiche de traçabilité complète : fluide (DOT 5.1), date d'ouverture du flacon, couples de vis de purge, kilométrage estimé.
6. 6. Test route : blocage de roue, point de contact stable après 10 freinages appuyés, rodage refait si plaquettes neuves.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SRAM : Bleeding Edge : manuel officiel de purge DOT
- video — SRAM : Vidéo officielle purge MTB Bleeding Edge
- video — Park Tool : Purge des freins SRAM au DOT
- article — BikeRadar : Purger des freins SRAM : guide complet

### 4. Raccourcir une durite Shimano (olive et insert) `raccourcir-durite-shimano`

- **Durée :** 35 min
- **Prérequis :**
  - [Purger un frein Shimano (huile minérale, entonnoir)](#purge-shimano-entonnoir) `purge-shimano-entonnoir`
- **Outils :** Coupe-durite ou cutter à guillotine, Presse à insert (ou étau + douille), Olive et insert neufs BH90 ou BH59, Clés plates 8 mm, clé dynamométrique 2-14 N·m, Kit entonnoir Shimano + huile minérale, Gants nitrile, chiffons
- **⚠️ Sécurité :**
  - Une olive réutilisée ou un insert mal enfoncé = fuite sous pression au premier freinage fort : olive et insert NEUFS à chaque intervention, sans exception.

**Objectifs :**
- Déterminer la bonne longueur de durite : rotation du guidon, rayon de courbure, trajet propre
- Couper une durite BH90/BH59 d'équerre et enfoncer l'insert (connecting insert) à ras
- Monter olive neuve et raccord au couple sans vriller la durite
- Compenser la perte de fluide par une purge rapide au levier
- Savoir quand une purge complète s'impose après raccourcissement

**TP — Raccourcissement d'une durite trop longue côté levier**

Sur un vélo dont la durite avant fait une boucle disgracieuse, détermine la longueur cible, coupe, pose insert + olive neufs, remonte et purge, puis teste sous effort.

Critères de validation :
1. 1. Longueur validée AVANT coupe : guidon de butée à butée sans tension ni pincement, rayon de courbure jamais inférieur au minimum visuel (pas de pli).
2. 2. Coupe parfaitement d'équerre (contrôle visuel à la loupe), insert enfoncé à ras de la durite à la presse.
3. 3. Raccord serré au couple du manuel (typiquement 5-7 N·m) sans rotation de la durite pendant le serrage.
4. 4. Test de pression : levier maintenu serré à fond 30 secondes, 3 fois — zéro suintement au raccord (papier blanc).
5. 5. Levier ferme après purge rapide (dérive ≤ 3 mm sur 20 pompages) ; sinon purge complète exécutée et notée.
6. 6. Test route avec 5 freinages d'urgence depuis 25 km/h : aucune fuite, aucun changement de point de contact.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Shimano (manuel du revendeur) : Raccourcissement de durite SM-BH90 : olive et insert
- video — Park Tool : Couper et raccorder une durite hydraulique
- video — GCN Tech : Raccourcir ses durites de freins route

### 5. Raccourcir une durite SRAM (barb et olive DOT) `raccourcir-durite-sram`

- **Durée :** 35 min
- **Prérequis :**
  - [Raccourcir une durite Shimano (olive et insert)](#raccourcir-durite-shimano) `raccourcir-durite-shimano`
  - [Purger un frein SRAM (DOT, Bleeding Edge)](#purge-sram-bleeding-edge) `purge-sram-bleeding-edge`
- **Outils :** Coupe-durite, Porte-barb ou clé Torx T8 selon modèle, Barb et olive neufs SRAM, Clé plate 8 mm, clé dynamométrique 2-14 N·m, Kit purge SRAM + DOT 5.1, Gants nitrile, lunettes, chiffons dédiés DOT
- **⚠️ Sécurité :**
  - DOT : EPI complet, protection de la peinture (le DOT décape les vernis en quelques minutes).
  - Barb et olive neufs à chaque coupe : une fuite DOT contamine irrémédiablement plaquettes et disque.

**Objectifs :**
- Identifier le type de raccord SRAM du modèle (barb vissé, Stealth-a-majig, compression fitting)
- Couper et préparer la durite, visser le barb sans l'endommager
- Monter l'ensemble olive + écrou de compression au couple
- Purger après intervention selon la méthode Bleeding Edge
- Gérer le cas particulier des durites pré-remplies (connexion sans purge)

**TP — Mise à longueur d'une durite SRAM avec purge finale**

Raccourcis la durite arrière d'un vélo SRAM (le trajet le plus long), pose barb + olive neufs, purge en Bleeding Edge et valide sous effort.

Critères de validation :
1. 1. Barb vissé droit et à fond dans la durite (aucun filet visible), sans déformation de la gaine externe.
2. 2. Écrou de compression serré au couple du manuel SRAM, consigné.
3. 3. Test de pression : levier serré à fond 30 secondes ×3 — zéro suintement (papier blanc au raccord).
4. 4. Purge finale : levier ferme, dérive du point de contact ≤ 3 mm sur 20 pompages.
5. 5. Nettoyage DOT total : lingette blanche sans trace sur tout le circuit ; déchets DOT stockés dans un contenant fermé étiqueté.
6. 6. 5 freinages d'urgence depuis 25 km/h sans variation de point de contact ni fuite.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SRAM : Hose shortening and bleed manual (DOT MTB)
- doc — SRAM : Stealth-a-majig : connexion de durite pré-remplie
- video — Park Tool : Raccourcissement de durite SRAM
- article — BikeRadar : Raccourcir une durite de frein à disque

### 6. Entretenir la mobilité des pistons d'étrier `entretien-pistons-etrier`

- **Durée :** 30 min
- **Prérequis :**
  - [Remplacer des plaquettes de frein à disque](#remplacement-plaquettes-disque) `remplacement-plaquettes-disque`
  - [Hydraulique : principe et discipline des fluides](#hydraulique-principe-fluides) `hydraulique-principe-fluides`
- **Outils :** Repousse-piston plastique, Cale d'épaisseur pour bloquer un piston (bloc ou vieux jeu de plaquettes), Coton-tige et chiffon non pelucheux, Fluide du circuit (huile minérale OU DOT selon frein), Lampe, loupe, Gants nitrile
- **⚠️ Sécurité :**
  - Ne lubrifie JAMAIS un piston avec autre chose que le fluide de son propre circuit : graisse, silicone ou WD-40 détruisent les joints.
  - Pistons céramique (Shimano) fragiles : jamais de pince métallique directe, jamais de sortie au-delà de la moitié du piston.

**Objectifs :**
- Diagnostiquer un piston paresseux ou collé (usure asymétrique, frottement récurrent)
- Faire sortir les pistons de façon contrôlée et alternée sans les éjecter
- Nettoyer et lubrifier les pistons avec le seul produit autorisé : le fluide du circuit
- Rétablir une sortie symétrique des pistons (2 et 4 pistons)
- Savoir quand l'entretien ne suffit plus et qu'une réhabilitation complète s'impose

**TP — Massage complet des pistons d'un étrier paresseux**

Sur un étrier à usure asymétrique constatée, fais sortir chaque piston à tour de rôle (les autres bloqués), nettoie, lubrifie au fluide, refais des cycles, et vérifie la symétrie retrouvée.

Critères de validation :
1. 1. Diagnostic initial consigné : écart de sortie mesuré ou usure plaquettes comparée (photo dans le carnet).
2. 2. Chaque piston sorti au maximum de moitié, jamais éjecté, les autres bloqués par cale : zéro incident sur toute la séance.
3. 3. Après entretien : les pistons sortent visuellement de façon synchrone sur 5 actionnements lents (écart estimé < 1 mm).
4. 4. Rétraction complète obtenue au repousse-piston sans forcer.
5. 5. Remontage : aucun frottement sur 10 tours de roue, point de contact ferme et constant sur 10 pompages.
6. 6. Aucune trace de fluide hors de l'étrier après essuyage final (papier blanc).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Pistons d'étrier collés : nettoyage et mobilité
- doc — Shimano (manuel du revendeur) : Entretien des étriers et pistons céramique
- article — Epic Bleed Solutions : Technique du massage de pistons (sticky pistons)
- doc — SRAM : Entretien des étriers Guide/Code

### 7. Dévoiler un disque de frein `devoilage-disque`

- **Durée :** 25 min
- **Prérequis :**
  - [Monter un disque et centrer l'étrier](#montage-rotor-centrage-etrier) `montage-rotor-centrage-etrier`
  - [T'équiper niveau 3](fondamentaux.md) `outillage-avance`
- **Outils :** Pied à dévoiler les disques (rotor truing fork), Comparateur à cadran sur support (ou repère fixe + jeu de cales), Marqueur effaçable, Gants propres ou chiffon, Pied d'atelier
- **⚠️ Sécurité :**
  - Disque froid uniquement : après un freinage, un disque peut rester brûlant plusieurs minutes.
  - Piste de freinage jamais touchée à mains nues, même pendant le dévoilage : travaille au chiffon ou en gants propres.

**Objectifs :**
- Localiser précisément la zone voilée (repère fixe ou comparateur)
- Redresser au pied à dévoiler (rotor truing fork) par petites touches
- Distinguer voile réparable et disque à remplacer (pliure, surchauffe bleuie, sous épaisseur mini)
- Contrôler le résultat au comparateur ou par la méthode du jeu à l'étrier

**TP — Dévoilage d'un disque qui fait ding-ding**

Sur une roue dont le disque touche les plaquettes une fois par tour, localise le voile, marque-le, redresse par touches successives et contrôle au comparateur jusqu'à la tolérance.

Critères de validation :
1. 1. Zone voilée localisée et marquée au marqueur : le point de contact identifié correspond au point de correction (vérifié au comparateur).
2. 2. Voile résiduel ≤ 0,2 mm au comparateur (ou : aucun contact plaquettes sur un tour complet avec étrier correctement centré).
3. 3. Épaisseur du disque vérifiée ≥ au minimum gravé avant toute correction ; disque bleui ou plié → verdict remplacement justifié.
4. 4. Aucune trace de doigt sur la piste en fin d'intervention (contrôle visuel en lumière rasante).
5. 5. Résultat stable : le disque reste dans la tolérance après 10 freinages appuyés puis refroidissement.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Dévoiler un disque de frein (rotor truing)
- article — Park Tool : Outil DT-2 et méthode de mesure du voile de disque
- video — GCN Tech : Réparer un disque qui frotte

### 8. Freinage des vélos lourds : VAE et cargo `freinage-vae-cargo`

- **Durée :** 35 min
- **Prérequis :**
  - [Monter un disque et centrer l'étrier](#montage-rotor-centrage-etrier) `montage-rotor-centrage-etrier`
  - [Composés de plaquettes et rodage (bed-in)](#plaquettes-composes-rodage) `plaquettes-composes-rodage`
  - [Cadre légal du VAE : EN 15194, 25 km/h, 250 W](vae.md) `vae-cadre-legal-en15194`
- **Outils :** Clés Allen/Torx, clé dynamométrique 2-14 N·m, Adaptateur Post Mount +20 ou +43 mm, Disque 180/203 mm adapté, Décamètre (mesure de distance d'arrêt), Charge d'essai arrimée (sacs, lest) pour cargo
- **⚠️ Sécurité :**
  - VAE : coupe l'assistance et retire la batterie avant toute intervention sur les freins (leviers à capteur de coupure).
  - Vélo chargé = distances d'arrêt fortement rallongées : tout test se fait dans un espace sans circulation, charge arrimée.
  - Vérifie la taille de disque maximale autorisée par la fourche et le cadre avant tout upgrade.

**Objectifs :**
- Quantifier pourquoi un VAE/cargo use ses freins 2 à 3 fois plus vite (masse, vitesse moyenne, fréquence d'arrêts)
- Établir un plan d'entretien freinage renforcé avec intervalles chiffrés
- Monter un disque plus grand avec l'adaptateur Post Mount correct
- Choisir plaquettes (métalliques) et disques adaptés aux charges
- Repérer les leviers à coupure moteur des VAE et travailler sans déclencher l'assistance

**TP — Upgrade de freinage d'un VAE ou cargo + plan d'entretien**

Sur un VAE ou vélo cargo, passe le frein avant (ou arrière selon configuration) à un disque plus grand avec l'adaptateur correct, monte des plaquettes métalliques, rode, et mesure le gain en charge.

Critères de validation :
1. 1. Plan d'entretien écrit avec intervalles chiffrés (contrôle plaquettes toutes les X centaines de km selon usage, purge annuelle, couples à re-vérifier) adapté au vélo et à sa charge.
2. 2. Adaptateur correct choisi (calcul taille actuelle → taille cible) et serré au couple ; disque conforme aux limites cadre/fourche (doc vérifiée).
3. 3. Centrage : aucun frottement sur 10 tours ; couples de l'étrier et de l'adaptateur consignés.
4. 4. Rodage complet effectué en charge réduite avant le test.
5. 5. Distance d'arrêt mesurée chargé depuis 15 km/h : amélioration ≥ 15 % vs configuration d'origine (moyenne de 3 mesures avant/après).
6. 6. Batterie retirée pendant toute l'intervention (VAE) : consigné au carnet.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Shimano : Gamme freins VAE/cargo et recommandations de disques
- doc — Magura : Freins 4 pistons pour VAE et charges lourdes
- doc — Bosch eBike Systems : Entretien des VAE : périodicités freinage
- article — BikeRadar : Choisir taille de disque et plaquettes pour e-bike
- article — Vélo Vert : Entretien spécifique des freins de VAE

## Niveau 4 — Expert

### 1. Diagnostic hydraulique avancé `diagnostic-hydraulique-avance`

- **Durée :** 40 min
- **Prérequis :**
  - [Purger un frein SRAM (DOT, Bleeding Edge)](#purge-sram-bleeding-edge) `purge-sram-bleeding-edge`
  - [Entretenir la mobilité des pistons d'étrier](#entretien-pistons-etrier) `entretien-pistons-etrier`
  - [Purger un frein Shimano (huile minérale, entonnoir)](#purge-shimano-entonnoir) `purge-shimano-entonnoir`
  - [Diagnostiquer un craquement](fondamentaux.md) `diagnostic-craquements`
- **Outils :** Kits de purge Shimano et SRAM complets, Papier blanc, lingettes, Sangle (maintien du levier serré une nuit), Comparateur ou réglet (mesure de course au levier), Gants nitrile, lunettes
- **⚠️ Sécurité :**
  - Un frein au diagnostic incertain ne reprend pas la route : la validation finale se fait toujours par test statique complet avant tout essai roulant.

**Objectifs :**
- Construire et appliquer un arbre de décision : spongieux (air) vs point de contact errant (wandering bite point) vs levier au guidon (usure/fuite/pistons repoussés)
- Localiser l'air : levier, durite ou étrier, par les tests d'inclinaison et de pompage
- Détecter une fuite lente : test papier, test de pression maintenue, inspection des raccords et soufflets
- Identifier les causes du wandering bite point Shimano et les traitements possibles
- Confirmer chaque hypothèse par un test AVANT de démonter

**TP — Trois pannes hydrauliques en aveugle**

Un binôme introduit 3 défauts distincts sur des freins cobayes (air dans le circuit, piston partiellement collé, plaquettes usées + niveau bas simulé). Tu diagnostiques chaque panne avec test de confirmation avant d'ouvrir quoi que ce soit, puis tu remets en état.

Critères de validation :
1. 1. Arbre de décision personnel rédigé (symptôme → tests → causes) et utilisé pendant l'exercice.
2. 2. 3/3 causes identifiées correctement, chacune confirmée par un test non invasif (inclinaison, pompage, sangle de nuit, papier) AVANT démontage — consigné au carnet.
3. 3. Test de la sangle interprété correctement : levier durci au matin = air confirmé.
4. 4. Remise en état complète : point de contact stable à ≤ 3 mm de dérive sur 20 pompages, sur les 3 freins.
5. 5. Compte-rendu écrit par panne : symptôme, hypothèses, tests, cause, remède, durée d'intervention.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Diagnostic des freins hydrauliques : levier mou, frottements, fuites
- doc — Shimano (manuel du revendeur) : Tableaux de dépannage freins hydrauliques
- article — BikeRadar : Wandering bite point : causes et solutions
- article — Epic Bleed Solutions : Localiser l'air dans un circuit hydraulique

### 2. Réhabiliter un étrier : pistons et joints neufs `rehabilitation-etrier-joints`

- **Durée :** 45 min
- **Prérequis :**
  - [Diagnostic hydraulique avancé](#diagnostic-hydraulique-avance) `diagnostic-hydraulique-avance`
  - [Entretenir la mobilité des pistons d'étrier](#entretien-pistons-etrier) `entretien-pistons-etrier`
  - [Raccourcir une durite Shimano (olive et insert)](#raccourcir-durite-shimano) `raccourcir-durite-shimano`
- **Outils :** Kit joints/pistons du modèle exact, Compresseur ou pompe avec embout (basse pression) OU seringue de poussée hydraulique, Pique plastique (dépose joints), coton-tiges, Fluide du circuit, Clé dynamométrique 2-14 N·m, Loupe, lampe, Gants nitrile, lunettes, bac de récupération
- **⚠️ Sécurité :**
  - Extraction à l'air comprimé : piston éjecté = projectile. Chiffon épais dans l'étrier, pression minimale, jamais les doigts devant le piston, lunettes obligatoires.
  - DOT : EPI complet et récupération des fluides usagés en contenant fermé (déchetterie).
  - Pistons céramique : toute ébréchure, même minime = piston au rebut.

**Objectifs :**
- Extraire les pistons sans dommage (poussée hydraulique ou air comprimé basse pression)
- Déposer les joints carrés, nettoyer les gorges et les alésages
- Remonter pistons et joints neufs lubrifiés au fluide du circuit
- Reconstituer l'étanchéité entre demi-étriers si l'étrier se sépare (joints internes, vis au couple)
- Décider réhabilitation vs remplacement selon l'état des alésages

**TP — Réhabilitation complète d'un étrier fuyard ou grippé**

Sur un étrier de récupération qui fuit ou dont un piston est mort, démonte tout, remplace pistons et joints, remonte, purge et valide l'étanchéité sur 24 h.

Critères de validation :
1. 1. Pistons extraits sans rayure ni éclat (inspection à la loupe, photos avant/après au carnet).
2. 2. Gorges de joints et alésages nettoyés : aucun dépôt visible à la loupe, aucun produit autre que le fluide du circuit utilisé.
3. 3. Joints neufs montés lubrifiés au fluide ; pistons rentrés droits sans forcer.
4. 4. Vis de réunion des demi-étriers (le cas échéant) au couple du fabricant, consigné.
5. 5. Après purge : sortie symétrique des pistons sur 5 actionnements, point de contact stable (≤ 3 mm sur 20 pompages).
6. 6. Étanchéité : zéro trace sur papier blanc après 24 h levier sanglé serré.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SRAM : Service kits étriers : éclatés et procédures
- doc — Magura : Remplacement des pistons et joints d'étrier
- article — Epic Bleed Solutions : Extraction et remplacement de pistons d'étrier
- video — Park Tool : Entretien approfondi des étriers hydrauliques

### 3. Réviser un levier : maître-cylindre et kit joints `revision-levier-maitre-cylindre`

- **Durée :** 40 min
- **Prérequis :**
  - [Réhabiliter un étrier : pistons et joints neufs](#rehabilitation-etrier-joints) `rehabilitation-etrier-joints`
- **Outils :** Kit de révision du levier (modèle exact), Circlips et pinces adaptées, Torx T8-T10, Fluide du circuit, Bac magnétique (petites pièces), Loupe, lampe, Clé dynamométrique 2-14 N·m, Gants nitrile, lunettes
- **⚠️ Sécurité :**
  - DOT dans les leviers SRAM : mêmes EPI et discipline que pour la purge.
  - Ressorts et circlips sous tension : lunettes pendant le démontage.

**Objectifs :**
- Démonter un levier hydraulique : axe, came, piston de maître-cylindre, ressort, membrane de réservoir
- Remplacer le kit joints du maître-cylindre et la membrane (bladder)
- Comprendre le rôle du timing port et pourquoi un joint gonflé le bouche (levier qui ne revient pas)
- Régler garde et course morte (free stroke / contact point) après remontage
- Décider révision vs remplacement du levier complet

**TP — Révision complète d'un levier fatigué**

Sur un levier de récupération (point mou, levier qui revient mal ou suinte), démonte le maître-cylindre, remplace joints et membrane, remonte, purge et règle la garde.

Critères de validation :
1. 1. Démontage documenté : photo de chaque étape, toutes les pièces dans le bac — zéro pièce restante ou perdue au remontage.
2. 2. Diagnostic du kit déposé écrit : quel joint était en cause et pourquoi (gonflement, entaille, usure).
3. 3. Remontage : piston coulisse sans point dur sur toute sa course avant fermeture.
4. 4. Après purge : levier ferme, retour complet du levier en < 1 s, point de contact stable (≤ 3 mm sur 20 pompages).
5. 5. Garde et free stroke réglés selon le manuel, valeurs consignées.
6. 6. Étanchéité 24 h : zéro trace au corps de levier et au raccord de durite (papier blanc).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SRAM : Lever service kits : procédures de révision
- doc — Shimano (manuel du revendeur) : Éclatés de leviers et pièces détachées
- article — Epic Bleed Solutions : Timing port et levier qui ne revient pas
- doc — Magura : Révision des leviers MT

### 4. Purger hors Shimano/SRAM `purges-magura-trp-campagnolo`

- **Durée :** 40 min
- **Prérequis :**
  - [Purger un frein SRAM (DOT, Bleeding Edge)](#purge-sram-bleeding-edge) `purge-sram-bleeding-edge`
  - [Purger un frein Shimano (huile minérale, entonnoir)](#purge-shimano-entonnoir) `purge-shimano-entonnoir`
  - [Hydraulique : principe et discipline des fluides](#hydraulique-principe-fluides) `hydraulique-principe-fluides`
- **Outils :** Kit de purge Magura (seringues, Royal Blood), Adaptateurs/raccords selon marque, Documentation officielle du modèle traité, Clé dynamométrique 2-14 N·m, Gants nitrile, lunettes, chiffons
- **⚠️ Sécurité :**
  - Chaque marque a SON fluide minéral homologué : Royal Blood dans un Shimano (ou l'inverse) peut dégrader les joints — respecte la préconisation constructeur.
  - Même discipline de séparation du matériel qu'entre minérale et DOT : un kit par famille de fluide.

**Objectifs :**
- Purger un frein Magura au Royal Blood (minérale, deux seringues)
- Adapter la méthode aux TRP et Tektro (minérale, variantes entonnoir/seringue)
- Connaître les spécificités Campagnolo (minérale, outillage dédié) et savoir chercher la doc du modèle exact
- Purger un frein jante hydraulique Magura HS11/HS33 (VAE urbains, trials)
- Généraliser : lire n'importe quelle procédure constructeur et l'exécuter en sécurité

**TP — Purge d'un système non-Shimano/SRAM avec sa doc officielle**

Sur le système disponible (Magura MT, TRP, Campagnolo ou Magura HS), télécharge la procédure officielle du modèle, prépare le bon fluide et le bon kit, exécute la purge et valide aux mêmes critères que les purges canoniques.

Critères de validation :
1. 1. Fluide exact identifié via la doc officielle du modèle (référence consignée) : 1/1, zéro approximation.
2. 2. Procédure du constructeur suivie point par point, écarts éventuels justifiés par écrit.
3. 3. Levier ferme : dérive du point de contact ≤ 3 mm sur 20 pompages (pour HS : les deux patins avancent simultanément et reviennent franchement).
4. 4. Zéro croisement de matériel entre kits (contrôle du poste en fin de séance).
5. 5. Étanchéité 12 h au papier blanc : zéro trace.
6. 6. Fiche comparative rédigée : différences clés de cette purge vs Shimano et SRAM (3 points minimum).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Magura : Purge Royal Blood des freins MT et HS
- doc — TRP : Procédures de purge des freins hydrauliques route et VTT
- doc — Campagnolo : Manuel technique freins à disque hydrauliques
- video — Park Tool : Purge des freins Magura

### 5. Compatibilités de freinage `compatibilite-freinage`

- **Durée :** 35 min
- **Prérequis :**
  - [Régler un frein à disque mécanique](#frein-disque-mecanique-reglage) `frein-disque-mecanique-reglage`
  - [Régler un V-brake de A à Z](#reglage-v-brake) `reglage-v-brake`
  - [La carte d'identité d'un cadre](fondamentaux.md) `carte-identite-cadre`
- **Outils :** Pied à coulisse, Documentation constructeurs (tableaux de compatibilité), Adaptateurs de disque assortis, Carnet d'atelier
- **⚠️ Sécurité :**
  - Un mélange levier/étrier non validé se teste TOUJOURS à l'arrêt puis à basse vitesse avant tout usage réel : un ratio inadapté donne un frein trop faible ou un blocage brutal.

**Objectifs :**
- Maîtriser les ratios de tirage : levier route vs V-brake vs cantilever vs mini-V, et les adaptateurs (travel agent)
- Cartographier les fixations d'étrier (IS, Post Mount, Flat Mount) et calculer l'adaptateur pour toute taille de disque
- Évaluer un mélange levier/étrier inter-marques : fluide, volume de réservoir, raccords de durite
- Choisir une taille de disque selon usage, poids et autorisations cadre/fourche
- Rendre un verdict compatibilité argumenté et documenté

**TP — Trois études de cas + un montage d'adaptateur**

Résous 3 cas de compatibilité imposés (ex. : levier route méca + étrier V-brake ? levier Shimano + étrier TRP minérale ? passer un Flat Mount de 140 à 160 mm ?), puis réalise physiquement un changement de taille de disque avec adaptateur.

Critères de validation :
1. 1. 3/3 verdicts corrects et argumentés par écrit (ratio de tirage, fluide, fixation, volume), sources constructeur citées.
2. 2. Tableau des standards rempli sans documentation : ≥ 9/10 cases correctes (tirages, fixations, fluides par marque).
3. 3. Montage réel : adaptateur correct calculé et monté au couple, disque conforme aux limites du cadre/fourche (doc vérifiée).
4. 4. Après montage : centrage parfait, aucun frottement sur 10 tours, blocage de roue au test.
5. 5. Un cas piège détecté : au moins une incompatibilité dangereuse identifiée et refusée avec justification.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : Standards de fixation des étriers et adaptateurs de disque
- article — Bike Gremlin : Compatibilité leviers/étriers et ratios de tirage
- article — Sheldon Brown : Tirage des leviers et familles de freins sur jante
- doc — Shimano : Tableaux de compatibilité freinage

### 6. Freins de moyeu : roller brake et tambour `freins-tambour-rollerbrake`

- **Durée :** 40 min
- **Prérequis :**
  - [Remplacer câble et gaine de frein](#cable-gaine-frein-remplacement) `cable-gaine-frein-remplacement`
  - [Régler le jeu d'un moyeu à cônes et billes](roues-et-pneus.md) `reglage-cones-moyeu`
- **Outils :** Graisse spéciale Shimano Roller Brake (tube injecteur), Clés à cônes 15-17 mm, Clés plates, clé dynamométrique, Bac de nettoyage et dégraissant, Graisse haute température (coaster), Gants
- **⚠️ Sécurité :**
  - Uniquement la graisse spécifique Shimano dans un roller brake : une graisse standard supprime l'effet freinant progressif (blocage brutal de la roue).
  - Le bras de réaction DOIT être fixé au cadre : sans lui, le corps de frein tourne avec la roue au premier freinage.

**Objectifs :**
- Identifier les trois familles : Shimano Roller Brake, tambour classique (Sturmey-Archer), rétropédalage (coaster)
- Entretenir un roller brake : injection de la graisse spéciale Shimano, contrôle du refroidisseur
- Régler câble et bras de réaction d'un frein à tambour
- Démonter, nettoyer, regraisser et remonter un moyeu à rétropédalage
- Savoir pourquoi ces freins équipent les vélos de ville et leurs limites (fading en descente)

**TP — Entretien croisé roller brake + rétropédalage**

Sur un vélo de ville hollandais ou équivalent, regraisse le roller brake selon la procédure Shimano ; sur un moyeu coaster de récupération, démonte, nettoie, regraisse et remonte l'ensemble du mécanisme.

Critères de validation :
1. 1. Roller brake : graisse spéciale injectée par l'orifice dédié (quantité selon spec du modèle, consignée), freinage progressif restauré sans blocage brutal sur 5 essais.
2. 2. Bras de réaction fixé et serré au couple sur les deux systèmes, contrôle croisé.
3. 3. Coaster : démontage complet documenté (photos), zéro pièce restante au remontage, ordre des masselottes/cames respecté.
4. 4. Coaster remonté : jeu de moyeu correct (pas de jeu latéral perceptible, rotation libre), freinage fonctionnel dès le premier quart de tour de rétropédalage.
5. 5. Test : arrêt complet depuis 15 km/h en moins de 6 m sur sol sec pour chaque système.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Shimano (manuel du revendeur) : Entretien des Roller Brakes et graisse spécifique
- article — Sheldon Brown : Coaster brakes : fonctionnement et entretien
- doc — Sturmey-Archer : Freins à tambour : montage et réglage
- article — Park Tool : Entretien des moyeux à rétropédalage

### 7. Freins vintage sur jante `freins-vintage-jante-service`

- **Durée :** 40 min
- **Prérequis :**
  - [Régler un frein cantilever (et mini-V)](#reglage-cantilever) `reglage-cantilever`
  - Notions d'identification des standards anciens et filetages français/italiens *(cas-exotiques)*
- **Outils :** Clés plates fines 8-10 mm (contre-écrous), Dérouillant doux, laine d'acier 000, pâte à polir, Graisse pour pivots, Patins compatibles jante acier, Troisième main, Chiffons
- **⚠️ Sécurité :**
  - Jante acier chromée mouillée : distance d'arrêt jusqu'à 3-4 fois supérieure — préviens toujours le propriétaire et teste par temps sec d'abord.
  - Contrôle les contre-écrous de pivot après réglage : un étrier vintage desserré peut basculer dans les rayons.

**Objectifs :**
- Identifier les architectures anciennes : centerpull (Mafac, Universal), single pivot, delta, U-brake, freins à tringles (rod brakes)
- Restaurer un étrier vintage : démontage, dérouillage, polissage, regraissage des pivots
- Choisir des patins modernes compatibles jantes acier chromées (et comprendre pourquoi elles freinent si mal mouillées)
- Régler un centerpull : câble transversal, porte-patins, toe-in
- Sourcer les pièces : tirages, câbles à tête spécifique, patins pour étriers anciens

**TP — Restauration fonctionnelle d'un frein centerpull**

Sur un vélo vintage (randonneuse, demi-course), démonte complètement le frein centerpull avant, restaure-le (nettoyage, polissage, graisse), remonte avec patins neufs adaptés et règle jusqu'à un freinage mesurable.

Critères de validation :
1. 1. Démontage/remontage complet documenté : zéro pièce restante, rondelles et entretoises dans l'ordre d'origine (photo de référence).
2. 2. Pivots regraissés : les deux bras pivotent librement et reviennent seuls sous le ressort, sans point dur.
3. 3. Patins choisis et justifiés par écrit selon la jante (acier chromé vs alu) ; toe-in 1 mm réglé.
4. 4. Les deux patins touchent simultanément (test feuille de papier) ; câble transversal symétrique.
5. 5. Distance d'arrêt depuis 15 km/h sur sol sec améliorée d'au moins 20 % vs état initial (3 mesures avant/après).
6. 6. Contre-écrous serrés et vérifiés après 10 freinages à pleine force (aucun desserrage).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : Centerpull, side pull et freins anciens : réglage et entretien
- article — Park Tool : Réglage des freins à étrier anciens
- livre — Vintage Bicycle Press / Jan Heine : Restauration des freins Mafac et compatibilité patins
- article — Bike Café (FR) : Restaurer un vélo vintage : le poste freinage

## Niveau 5 — Maître

### 1. Monter un freinage hydraulique complet `montage-freinage-hydraulique-neuf`

- **Durée :** 45 min
- **Prérequis :**
  - [Raccourcir une durite Shimano (olive et insert)](#raccourcir-durite-shimano) `raccourcir-durite-shimano`
  - [Raccourcir une durite SRAM (barb et olive DOT)](#raccourcir-durite-sram) `raccourcir-durite-sram`
  - [Routage interne : câbles, gaines et durites](direction-et-peripheriques.md) `routage-interne-cadre`
  - [Planifier un montage complet : la gamme d'assemblage](montage-et-peinture.md) `ordre-montage-cadre-nu`
- **Outils :** Freins neufs en boîte (ou levier + étrier + durite au mètre), Coupe-durite, presse à insert, connectique neuve (olives, inserts/barbs), Kit de purge de la marque + fluide neuf, Outil de routage interne, Clé dynamométrique 2-14 N·m, Gants nitrile, lunettes
- **⚠️ Sécurité :**
  - Système monté de zéro = zéro historique : le test statique complet (pression maintenue, étanchéité 24 h) est obligatoire avant le premier tour de roue.
  - Discipline des fluides identique aux purges : EPI, séparation des kits, fluide neuf scellé.

**Objectifs :**
- Planifier le montage : trajets de durites, longueurs, ordre des opérations sur un vélo complet
- Couper et raccorder une durite aux DEUX extrémités (levier et étrier) avec connectique neuve
- Remplir et purger un système livré sec ou dépareillé (levier seul + étrier seul + durite au mètre)
- Intégrer le passage interne des durites sans pincement ni bruit
- Livrer un freinage neuf : rodage, contrôle final, fiche de traçabilité

**TP — Installation complète avant + arrière sur un vélo en montage**

Sur un vélo en cours de montage (ou un cobaye dont tu déposes l'ancien freinage), installe un freinage hydraulique neuf : durites coupées aux deux bouts à la bonne longueur, passage interne, remplissage à sec, purge, rodage et livraison documentée.

Critères de validation :
1. 1. Longueurs validées avant coupe : rotation complète du guidon sans tension, aucune boucle parasite, durite arrière sans pincement dans le cadre (test sonore : zéro claquement en secouant le vélo).
2. 2. 4 raccords neufs (2 par frein) montés au couple constructeur, consignés ; zéro fuite au test de pression maintenue (levier sanglé 1 h puis papier blanc).
3. 3. Remplissage à sec réussi : levier ferme, dérive du point de contact ≤ 3 mm sur 20 pompages, sur les deux freins.
4. 4. Étanchéité 24 h : zéro trace aux 4 raccords, aux leviers et aux étriers.
5. 5. Centrage : aucun frottement sur 10 tours, AV et AR ; rodage complet exécuté (20-30 freinages).
6. 6. Livraison : blocage des deux roues possible, distance d'arrêt depuis 25 km/h mesurée et consignée, fiche de traçabilité complète (fluide, couples, longueurs, date).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Shimano (manuel du revendeur) : Installation complète d'un groupe frein hydraulique
- doc — SRAM : Installation des freins route et MTB depuis la boîte
- video — Park Tool : Montage de freins hydrauliques sur vélo complet
- video — GCN Tech : Monter un vélo de A à Z : le poste freinage

### 2. Concevoir un freinage pour charges extrêmes `conception-freinage-charges-extremes`

- **Durée :** 40 min
- **Prérequis :**
  - [Monter un freinage hydraulique complet](#montage-freinage-hydraulique-neuf) `montage-freinage-hydraulique-neuf`
  - [Compatibilités de freinage](#compatibilite-freinage) `compatibilite-freinage`
  - [Freinage des vélos lourds : VAE et cargo](#freinage-vae-cargo) `freinage-vae-cargo`
  - [Relevé géométrique complet d'un cadre](fondamentaux.md) `releve-geometrique-cadre`
- **Outils :** Calculatrice et carnet (note de calcul), Documentation constructeurs (limites de poids, tailles maxi), Composants d'upgrade selon spec (disques, adaptateurs, plaquettes), Clé dynamométrique, Décamètre, chronomètre, thermomètre infrarouge (optionnel)
- **⚠️ Sécurité :**
  - Respecte les limites de masse totale autorisée par les constructeurs de freins et de fourche : un freinage sous-dimensionné sur cargo chargé peut perdre toute puissance par fading en descente.
  - Tout test anti-fading se fait sur route fermée ou déserte, en augmentant la charge progressivement, jamais avec des passagers.

**Objectifs :**
- Calculer l'énergie à dissiper (E = ½mv² + m·g·h) et la comparer à la capacité thermique du freinage
- Dimensionner : nombre de pistons, taille et épaisseur de disque, composé de plaquettes, refroidissement
- Connaître les solutions spécifiques : drag brake de tandem, double étrier, disques 220-223 mm, limites constructeur de masse totale
- Spécifier un freinage complet pour un cahier des charges donné (cargo biporteur, tandem chargé, VTT de descente)
- Mettre en œuvre l'upgrade et le valider par un protocole anti-fading mesuré

**TP — Note de calcul + upgrade validé anti-fading**

Rédige la note de calcul complète pour un vélo à charge lourde réel (cargo chargé ou tandem), spécifie le freinage cible en la confrontant aux docs constructeur, réalise l'upgrade et valide-le par un protocole de freinages répétés en descente.

Critères de validation :
1. 1. Note de calcul correcte à ±10 % : énergie cinétique à 25 km/h et énergie potentielle sur un dénivelé de 50 m pour la masse totale réelle (pesée ou calculée poste par poste).
2. 2. Spécification complète et cohérente : chaque choix (pistons, diamètre/épaisseur de disque, composé, adaptateurs) justifié et conforme aux limites documentées des constructeurs (masse maxi, taille maxi fourche/cadre).
3. 3. Upgrade monté : tous couples consignés, centrage sans frottement, rodage complet.
4. 4. Protocole anti-fading : 10 freinages consécutifs depuis 25 km/h en charge, à moins de 30 s d'intervalle — allongement de la course du levier ≤ 5 mm et distance d'arrêt du 10e freinage ≤ 120 % de celle du 1er.
5. 5. Aucune fuite ni odeur de surchauffe après le protocole ; disque inspecté (pas de bleuissement).
6. 6. Dossier livré : note de calcul, spec, mesures avant/après, préconisations d'entretien chiffrées pour l'utilisateur.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Magura : Freinage pour cargo et limites de masse totale
- doc — SRAM : Disques 220 mm et freins 4 pistons : domaines d'usage
- article — Sheldon Brown : Freinage des tandems et drag brakes
- article — BikeRadar : Fading : comprendre la surchauffe des freins à disque
- article — Vélo Vert : Freinage de descente : dimensionnement et endurance
