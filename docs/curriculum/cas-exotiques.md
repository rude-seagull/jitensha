# Système « cas-exotiques »

> Part of the Jitensha curriculum — see [`CURRICULUM.md`](../../CURRICULUM.md) for the overview. Lesson data is French (course content); scaffolding is English per project rules.

Vélos anciens, pignon fixe, cargo et longtails, bikepacking, pliants, tandems et standards inhabituels : tout ce qui sort de l'ordinaire moderne. Ce système t'apprend à reconnaître, entretenir, réparer et transformer les machines que les autres ateliers refusent — filetages français et italiens, manivelles à clavettes, roues libres vissées, moyeux à vitesses anciens, directions à tringlerie, charnières de pliants, chaînes de synchronisation de tandem — jusqu'aux projets de restauration et de conversion néo-rétro complets.

**Progression logic:** Niveau 1 : apprendre à VOIR — reconnaître les familles de vélos atypiques, l'anatomie d'un vélo ancien, et juger si une vieille machine est roulable sans danger. Niveau 2 : les réglages et interventions simples propres à chaque famille (potence plongeur, dimensions de pneus vintage, dépose de roue libre, tension de chaîne fixie, pliage contrôlé, dynamo, trousse de terrain bikepacking). Niveau 3 : les révisions spécifiques — clavettes, boîtiers à filetage français/italien, manettes à friction, Sturmey-Archer, moyeu piste, excentrique de tandem, tringlerie de cargo, câbles longs, charnières de pliant, portage bikepacking. Niveau 4 : la maîtrise des standards — méthode d'identification de n'importe quelle pièce mystère, standards de direction anciens, conversions de taille de roue, entretien interne de roue libre, freinage tandem, diagnostic dynamo au multimètre. Niveau 5 : les projets de niveau cadre — cintrage à froid d'un cadre acier, dossier de restauration complet, matrice de conversion néo-rétro. Chaque niveau s'appuie sur les procédures génériques des autres systèmes (couple, roulements, freins, transmission) et n'enseigne que le delta exotique.

## Niveau 1 — Débutant

### 1. Panorama des vélos atypiques `panorama-velos-atypiques`

- **Durée :** 25 min
- **Prérequis :**
  - [Anatomie du vélo : nomme chaque pièce](fondamentaux.md) `anatomie-velo`
- **Outils :** Smartphone (photos), Lampe de poche, Carnet d'atelier

**Objectifs :**
- Identifier les six grandes familles de vélos atypiques (vintage, pignon fixe/singlespeed, cargo/longtail, bikepacking, pliant, tandem)
- Repérer pour chaque famille les deux ou trois particularités mécaniques qui changent ta façon de travailler dessus
- Savoir où trouver la documentation constructeur d'un vélo atypique (numéro de série, plaque, catalogues d'époque)

**TP — Safari d'identification**

En ville, dans un atelier participatif ou sur un corpus de photos fourni, tu identifies dix vélos atypiques, tu les classes par famille et tu notes pour chacun deux particularités mécaniques distinctives (type de potence, roue libre vissée, boîtier excentrique, charnière, tringlerie…).

Critères de validation :
1. 1. Dix vélos classés dans la bonne famille : au moins 9/10 corrects.
2. 2. Vingt particularités mécaniques notées (2 par vélo), chacune vérifiable sur la photo ou le vélo.
3. 3. Pour trois vélos, l'emplacement du numéro de série ou de la plaque constructeur est photographié.
4. 4. Fiche complétée dans le carnet d'atelier en 30 minutes maximum.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : glossaire illustré des types de vélos et composants
- article — Weelz : familles de vélos cargo et longtails en usage urbain
- article — Bikepacking.com : anatomie d'un vélo de bikepacking
- video — GCN : tour d'horizon des types de vélos et de leurs usages

### 2. Anatomie d'un vélo vintage `anatomie-velo-vintage`

- **Durée :** 30 min
- **Prérequis :**
  - [Panorama des vélos atypiques](#panorama-velos-atypiques) `panorama-velos-atypiques`
  - [Reconnaître les familles de vélos](fondamentaux.md) `familles-de-velos`
- **Outils :** Lampe de poche, Loupe ou appareil photo macro, Carnet d'atelier

**Objectifs :**
- Reconnaître au premier coup d'œil une potence plongeur, une roue libre vissée, des manivelles à clavettes et des manettes à friction
- Distinguer une roue libre vissée d'une cassette sans démonter la roue
- Estimer la décennie de fabrication d'un vélo grâce aux indices techniques (composants, gravures, style de raccords)

**TP — Fiche d'identité d'un vélo ancien**

Sur un vrai vélo vintage (le tien, celui d'un proche, ou en atelier participatif), tu remplis une fiche d'identification en douze points : type de potence, fixation des manivelles, roue libre ou cassette, type de manettes, type de freins, dimensions de roues marquées, marquages de tubes, etc. Tu conclus par une estimation de datation argumentée.

Critères de validation :
1. 1. Les douze points de la fiche sont renseignés, chacun avec une photo à l'appui.
2. 2. Le test visuel roue libre vs cassette est correct (vérification : position du contre-écrou et des méplats de l'outil, mouvement du corps au pédalage arrière).
3. 3. La datation estimée tombe dans une fourchette de ±10 ans, validée par recoupement (catalogue d'époque, forum, marquages de moyeux ou de dérailleur).
4. 4. Au moins trois indices de datation distincts sont cités dans l'argumentation.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : identifier et dater les vélos anciens, roue libre vs cassette
- article — Tonton Vélo : datation de cadres et catalogues d'époque francophones
- video — RJ The Bike Guy : visite guidée des composants d'un vélo vintage
- doc — Velo Orange : composants de style classique et leurs standards

### 3. Contrôle de sécurité d'un vélo ancien `controle-securite-velo-ancien`

- **Durée :** 30 min
- **Prérequis :**
  - [Le M-check : contrôle de sécurité en 8 minutes](fondamentaux.md) `m-check`
  - [Anatomie d'un vélo vintage](#anatomie-velo-vintage) `anatomie-velo-vintage`
  - [Anatomie du vélo : nomme chaque pièce](fondamentaux.md) `anatomie-velo`
- **Outils :** Lampe de poche, Pied à coulisse, Jauge d'usure de chaîne, Carnet d'atelier
- **⚠️ Sécurité :**
  - Une potence plongeur ou une tige de selle insérée au-dessous du repère MIN INSERT peut casser net en roulant : contrôle obligatoire avant tout essai.
  - Des flancs de pneus craquelés peuvent éclater au gonflage : gonfle progressivement et inspecte à mi-pression.
  - Des patins de freins durcis par l'âge ne freinent presque plus même bien réglés : test à l'arrêt obligatoire avant test roulant.

**Objectifs :**
- Dérouler une inspection de sécurité adaptée aux vélos anciens (corrosion, caoutchoucs durcis, aciers fatigués)
- Vérifier le repère d'insertion minimale d'une potence plongeur et d'une tige de selle
- Décider de façon argumentée si un vélo ancien est roulable en l'état, roulable après intervention, ou dangereux

**TP — Inspection quinze points d'un vélo cobaye ancien**

Tu passes un vélo ancien au crible d'une check-list de quinze points spécifiques (corrosion perforante aux zones critiques, insertion potence/tige, voile et fissures de jantes acier, flancs de pneus, patins durcis, jeu de direction, jeu de boîtier, état de la roue libre…) et tu rends un verdict écrit en trois catégories.

Critères de validation :
1. 1. Les quinze points sont contrôlés et cotés (OK / à surveiller / bloquant) avec photo pour chaque point non-OK.
2. 2. L'insertion de la potence et de la tige de selle est vérifiée physiquement (repère visible = bloquant), pas seulement supposée.
3. 3. Le test de freinage statique est effectué : à l'arrêt, levier serré, le vélo poussé ne doit pas faire glisser les patins sur la jante.
4. 4. Le verdict final (roulable / roulable après intervention / dangereux) est argumenté en cinq lignes maximum et cohérent avec les points bloquants relevés.
5. 5. L'inspection complète prend 25 minutes maximum.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : inspection de sécurité complète d'un vélo
- article — Sheldon Brown : remettre en service un vieux vélo
- article — Tonton Vélo : points de corrosion critiques sur cadres acier anciens
- video — RJ The Bike Guy : évaluer un vélo d'occasion ancien avant achat

## Niveau 2 — Intermédiaire

### 1. Potence plongeur : réglage, débloquage et serrage `potence-plongeur-reglage`

- **Durée :** 30 min
- **Prérequis :**
  - [Couple, tension, frottement : pourquoi un boulon tient](fondamentaux.md) `couple-tension-frottement`
  - [Contrôle de sécurité d'un vélo ancien](#controle-securite-velo-ancien) `controle-securite-velo-ancien`
- **Outils :** Clés Allen 6 mm, Clé dynamométrique 2-25 N·m, Maillet plastique, Graisse, Mètre ruban, Dégrippant
- **⚠️ Sécurité :**
  - Le repère MIN INSERT doit rester invisible : une potence trop sortie peut rompre le plongeur ou fissurer le pivot de fourche.
  - Ne tape jamais directement sur la vis d'expandeur sans l'avoir dévissée de quelques tours : tu détruirais le filetage.

**Objectifs :**
- Régler la hauteur et l'alignement d'une potence plongeur en respectant l'insertion minimale
- Débloquer un expandeur grippé sans abîmer la potence ni le pivot
- Serrer l'expandeur au couple correct et vérifier la tenue en rotation

**TP — Réglage complet d'une potence plongeur**

Sur un vélo à direction filetée, tu desserres l'expandeur (méthode du coup de maillet sur la vis dévissée si le cône est grippé), tu règles la hauteur à une cote cible donnée, tu alignes avec la roue, tu graisses le plongeur et tu resserres au couple.

Critères de validation :
1. 1. Hauteur de potence réglée à la cote demandée à ±2 mm (mesurée du dessus du jeu de direction au centre du cintre).
2. 2. Repère d'insertion minimale invisible, vérifié avant serrage final.
3. 3. Alignement potence/roue avant à ±1° (contrôle visuel roue bloquée entre les genoux).
4. 4. Expandeur serré au couple constructeur (typiquement 15-20 N·m) à la clé dynamométrique.
5. 5. Test de tenue : roue avant bloquée, la potence ne tourne pas sous un effort ferme sur le cintre.
6. 6. Plongeur ressorti graissé sur toute la zone insérée avant remontage.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : réglage et entretien des potences plongeur (quill stems)
- article — Sheldon Brown : potences plongeur, dimensions et débloquage
- video — RJ The Bike Guy : débloquer une potence plongeur grippée
- article — Bike Gremlin : standards de potences et diamètres de plongeurs

### 2. Dimensions de pneus et jantes vintage : décoder le chaos `pneus-jantes-vintage-dimensions`

- **Durée :** 30 min
- **Prérequis :**
  - [Choisir ses pneus et calculer la bonne pression](roues-et-pneus.md) `choix-pneus-et-pression`
- **Outils :** Pied à coulisse, Mètre ruban, Carnet d'atelier, Tables de correspondance ETRTO imprimées

**Objectifs :**
- Traduire les anciennes désignations (27 × 1 1/4, 650B, 26 × 1 3/8, 700B…) en cotes ETRTO
- Repérer les pièges classiques : 26 × 1 3/8 (590) incompatible avec 26 × 1.375 (584 ou 559), 27 pouces (630) différent de 700C (622)
- Mesurer une jante nue pour déterminer sa cote ETRTO réelle

**TP — Identification ETRTO de cinq jantes et verdicts de compatibilité**

Sur un lot de cinq jantes ou roues d'origines variées (dont au moins deux anciennes), tu mesures le diamètre d'accrochage et tu détermines la cote ETRTO. Puis tu rends un verdict de compatibilité pour trois couples pneu/jante donnés, pièges inclus.

Critères de validation :
1. 1. Les cinq cotes ETRTO identifiées sont correctes (5/5), avec la mesure du diamètre consignée à ±1 mm.
2. 2. Les trois verdicts de compatibilité pneu/jante sont corrects, avec justification chiffrée (cotes ETRTO des deux éléments).
3. 3. Au moins un piège de désignation (fraction vs décimale, 27" vs 700C) est identifié et expliqué par écrit en moins de cinq lignes.
4. 4. Tableau de correspondance personnel rempli dans le carnet : au minimum huit désignations anciennes avec leur ETRTO.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : tableau des dimensions de pneus et système ETRTO, pièges des désignations anciennes
- article — Rene Herse Cycles : le standard 650B, histoire et dimensions
- article — Park Tool : dimensionnement pneus et jantes
- article — Bike Gremlin : dimensions de pneus vélo expliquées

### 3. Roue libre vissée : identifier l'extracteur et déposer sans casse `roue-libre-identification-depose`

- **Durée :** 30 min
- **Prérequis :**
  - [Anatomie d'un vélo vintage](#anatomie-velo-vintage) `anatomie-velo-vintage`
  - [Anatomie du vélo : nomme chaque pièce](fondamentaux.md) `anatomie-velo`
  - [Déposer et reposer une roue](roues-et-pneus.md) `depose-repose-roue`
- **Outils :** Jeu d'extracteurs de roue libre, Étau ou grande clé plate 24 mm/clé à molette robuste, Graisse, Pied à coulisse, Chiffons
- **⚠️ Sécurité :**
  - Une roue libre est vissée par des années de pédalage : l'effort de dépose est violent. Maintiens l'extracteur plaqué (blocage rapide ou écrou) pour éviter le ripage qui détruit l'outil, la roue libre et tes phalanges.

**Objectifs :**
- Identifier le bon extracteur parmi les standards courants (Shimano cannelé, Suntour 2 et 4 ergots, Regina, Atom/Maillard…)
- Déposer une roue libre vissée sans riper ni détruire les cannelures
- Reposer une roue libre avec graissage du filetage pour la prochaine dépose

**TP — Dépose et repose d'une roue libre**

Sur une roue de vélo cobaye, tu identifies l'extracteur adapté, tu le verrouilles avec le blocage rapide, tu déposes la roue libre (à l'étau ou à la clé), tu nettoies et graisses le filetage du moyeu, puis tu revisses à la main et tu contrôles le fonctionnement.

Critères de validation :
1. 1. Extracteur correct identifié du premier coup (vérifié par engagement complet sans jeu dans les cannelures ou ergots).
2. 2. Dépose réalisée sans ripage : cannelures de la roue libre et de l'outil intactes à l'inspection après coup.
3. 3. Filetage du moyeu nettoyé et graissé avant repose (contrôle visuel : graisse visible sur tout le filetage).
4. 4. Roue libre revissée à la main jusqu'au contact, sans point dur ni faux filet.
5. 5. Après repose : rotation libre dans le sens roue libre, aucun jeu latéral perceptible à la main.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : dépose et pose des roues libres vissées, choix de l'extracteur
- article — Sheldon Brown : roues libres vissées : standards, extracteurs et pièges
- video — RJ The Bike Guy : déposer une roue libre avec et sans étau
- doc — Park Tool : identification des outils de roue libre FR-1 à FR-8

### 4. Pignon fixe : ratio, développement, skid patches et cadre légal `fixie-ratio-skid-legalite`

- **Durée :** 25 min
- **Prérequis :**
  - [Dépanner sa transmission sur la route](transmission.md) `depannage-transmission-sur-route`
- **Outils :** Calculatrice ou tableur, Mètre ruban, Craie, Carnet d'atelier
- **⚠️ Sécurité :**
  - En France, un vélo sur route doit avoir au moins un frein efficace — en pratique deux sont exigés par le Code de la route ; rouler brakeless est illégal et engage ta responsabilité en cas d'accident.
  - Le freinage par blocage de roue (skid) rallonge énormément les distances d'arrêt : ne compte jamais dessus comme frein principal.

**Objectifs :**
- Calculer le développement et le ratio d'une transmission fixie (plateau/pignon, gear inches, mètres de développement)
- Calculer le nombre de skid patches d'une combinaison et comprendre son impact sur l'usure du pneu
- Connaître le cadre légal français : frein avant obligatoire sur route, éclairage, et conséquences en cas de contrôle ou d'accident

**TP — Étude de trois ratios et vérification terrain**

Tu calcules développement, gear inches et skid patches pour trois combinaisons données (par exemple 46×16, 48×15, 44×17), tu recommandes un ratio pour un usage urbain vallonné, puis tu vérifies expérimentalement le nombre de skid patches sur un fixie réel (marquage du pneu à la craie et rotation).

Critères de validation :
1. 1. Les trois développements calculés sont exacts à ±1 % (formule : diamètre réel du pneu × π × plateau/pignon).
2. 2. Le nombre de skid patches est correct pour les trois combinaisons (dénominateur après simplification de la fraction ; ×2 si skid ambidextre avec numérateur pair... la règle exacte est énoncée sans erreur).
3. 3. La recommandation de ratio est justifiée par au moins deux arguments chiffrés (développement, cadence à 25 km/h).
4. 4. La vérification terrain à la craie confirme le calcul sur le vélo réel (nombre de zones marquées = nombre calculé).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : pignon fixe : ratios, skid patches, conseils de conduite
- outil — Sheldon Brown : calculateur de braquets et développements
- video — GCN : rouler en pignon fixe : technique et sécurité
- article — Weelz : réglementation vélo en France : freins et équipements obligatoires

### 5. Tension de chaîne sur pattes horizontales : la méthode propre `fixie-tension-chaine`

- **Durée :** 30 min
- **Prérequis :**
  - [Déposer et reposer une roue](roues-et-pneus.md) `depose-repose-roue`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
- **Outils :** Clé à douille 15 mm, Clé dynamométrique 10-60 N·m, Réglet, Tendeurs de chaîne (optionnel)
- **⚠️ Sécurité :**
  - Une chaîne de pignon fixe qui déraille peut bloquer la roue arrière : la tension et l'alignement ne sont pas cosmétiques, ce sont des éléments de sécurité.

**Objectifs :**
- Tendre une chaîne de fixie/singlespeed sur pattes horizontales ou track ends en gardant la roue centrée
- Détecter un point dur dû à un plateau ou pignon excentré et régler sur le point le plus tendu
- Serrer les écrous d'axe au couple et vérifier que la roue ne bouge pas sous effort

**TP — Tension et centrage complets**

Sur un fixie ou singlespeed, tu détends la roue, tu retends la chaîne à la valeur cible en reculant la roue symétriquement, tu contrôles la constance de la tension sur un tour de manivelle complet, tu centres la roue entre les bases et tu serres au couple.

Critères de validation :
1. 1. Battement vertical total de la chaîne de 10 à 15 mm au milieu du brin supérieur, mesuré au réglet.
2. 2. Variation de tension sur un tour de manivelle complet ≤ 5 mm de battement ; si supérieur, l'excentricité du plateau est diagnostiquée et le réglage fait au point le plus tendu.
3. 3. Roue centrée entre les bases : écart gauche/droite ≤ 1 mm mesuré au niveau du pneu.
4. 4. Écrous d'axe serrés à 30-40 N·m à la clé dynamométrique, rondelles crantées en place.
5. 5. Test d'effort : un coup de pédale violent à l'arrêt (frein serré) ne fait pas avancer l'axe dans les pattes (repère au feutre sur la patte intact).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : montage et tension de chaîne en pignon fixe
- article — Park Tool : tension de chaîne sur vélos singlespeed et à pattes horizontales
- video — Park Tool : réglage de chaîne singlespeed
- doc — Surly : utilisation des pattes horizontales et tendeurs

### 6. Vélo pliant : plier, déplier et contrôler sans rien casser `pliant-plier-controler`

- **Durée :** 25 min
- **Prérequis :**
  - Maîtriser le M-check standard *(fondamentaux)*
- **Outils :** Chronomètre, Carnet d'atelier
- **⚠️ Sécurité :**
  - Une charnière de cadre mal verrouillée peut se replier en roulant : le contrôle des leviers avant chaque départ n'est pas optionnel sur un pliant.

**Objectifs :**
- Exécuter la séquence de pliage/dépliage correcte d'un pliant (Brompton, Dahon, Tern ou équivalent) sans forcer
- Contrôler le verrouillage complet de chaque loquet et levier avant de rouler
- Repérer les signes d'usure précoce : jeu de charnière, levier qui ferme trop facilement, câbles pincés au pliage

**TP — Cycles de pliage chronométrés et check-list de verrouillage**

Sur un vélo pliant, tu apprends la séquence constructeur, tu réalises cinq cycles complets de pliage/dépliage, puis tu déroules une check-list de verrouillage en six points avant un essai roulant.

Critères de validation :
1. 1. Cinq cycles complets réalisés sans forcer aucun élément ni pincer aucun câble (inspection des gaines après chaque cycle).
2. 2. Dernier cycle de dépliage chronométré ≤ 60 secondes, tous verrous fermés.
3. 3. Check-list de verrouillage : 6/6 points contrôlés (charnière cadre, charnière potence, tige de selle, pédales, loquets secondaires, position des câbles).
4. 4. Jeu testé à la charnière principale dépliée : aucune mobilité perceptible en secouant l'avant et l'arrière du vélo en opposition.
5. 5. La séquence de pliage suivie correspond à l'ordre du manuel constructeur (vérification point par point).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Brompton : manuel du propriétaire : séquence de pliage et contrôles
- doc — Tern : guide d'entretien et de pliage des vélos pliants
- article — Park Tool : particularités d'entretien des vélos pliants
- article — Weelz : bien utiliser et entretenir un vélo pliant au quotidien

### 7. Dynamo dans le moyeu : brancher un éclairage fiable `dynamo-moyeu-installation`

- **Durée :** 35 min
- **Prérequis :**
  - [Déposer et reposer une roue](roues-et-pneus.md) `depose-repose-roue`
- **Outils :** Tournevis plat fin, Pince coupante/à dénuder, Connecteurs à languette 2,8 mm, Colliers rilsan, Chiffon

**Objectifs :**
- Installer et orienter correctement une roue à moyeu dynamo (sens de rotation, position du connecteur)
- Câbler un phare avant et un feu arrière : polarité, masse, connecteurs à languette
- Router le câblage proprement le long du cadre et de la fourche sans zone de cisaillement

**TP — Installation complète d'un éclairage dynamo**

Tu montes une roue à moyeu dynamo, tu câbles le phare avant puis le feu arrière (alimenté depuis le phare), tu routes les câbles le long de la fourche et du cadre, et tu valides le fonctionnement en roulant.

Critères de validation :
1. 1. Moyeu orienté selon le marquage constructeur (sens de rotation), connecteur accessible sans démonter la roue.
2. 2. Phare et feu arrière fonctionnent tous les deux dès l'allure de marche rapide (test sur 5 minutes de roulage sans aucune coupure).
3. 3. Feu de position (condensateur) : les deux feux restent allumés au moins 60 secondes à l'arrêt après le roulage.
4. 4. Câble avec mou contrôlé au niveau de la fourche : braquage butée à butée sans tension ni pincement du fil.
5. 5. Câblage fixé tous les 15-20 cm maximum, aucun fil libre au contact des rayons ou du pneu.
6. 6. Connexions testées à la traction (chaque cosse résiste à une traction ferme à la main).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Busch & Müller : notices de câblage phares et feux dynamo
- doc — Schmidt Maschinenbau (SON) : montage et connectique des moyeux dynamo
- article — Sheldon Brown : systèmes d'éclairage dynamo : câblage et masse
- article — Bikepacking.com : installer un éclairage dynamo pour la longue distance

### 8. Réparer en pleine cambrousse : la trousse et les gestes bikepacking `bikepacking-trousse-terrain`

- **Durée :** 35 min
- **Prérequis :**
  - [Talonnage, préventif et inserts : finaliser un montage tubeless](roues-et-pneus.md) `talonnage-tubeless-et-inserts`
  - [Mesurer l'usure d'une chaîne](transmission.md) `usure-chaine-mesure-jauge`
- **Outils :** Multi-outil avec dérive-chaîne, Kit mèches tubeless, Maillons rapides (au bon nombre de vitesses), Boot de pneu (ou billet plié), Mini-pompe ou cartouches CO2, Chambre de secours
- **⚠️ Sécurité :**
  - Une cartouche de CO2 se vide d'un coup et gèle : tiens-la par la tête en plastique, jamais à main nue sur le métal.

**Objectifs :**
- Composer une trousse de terrain minimale et complète pour l'autonomie (multi-outil, mèches, maillon rapide, boot de pneu, dérive-chaîne, rayons de secours)
- Poser une mèche tubeless sur le terrain sans déposer la roue
- Réparer une chaîne cassée au maillon rapide et poser un boot sur un flanc déchiré

**TP — Triathlon de réparation terrain chronométré**

Trois pannes simulées à réparer dehors, vélo debout contre un arbre (pas de pied d'atelier) : une crevaison tubeless perforante (mèche sans dépose de roue), une chaîne cassée (maillon rapide), un flanc entaillé (boot + chambre). Le tout avec ta trousse de terrain uniquement.

Critères de validation :
1. 1. Mèche posée en 8 minutes maximum, roue restée sur le vélo, pression remontée à au moins 2 bar à la mini-pompe.
2. 2. La réparation à la mèche tient 24 h avec une perte de pression ≤ 15 %.
3. 3. Chaîne réparée au maillon rapide en 5 minutes maximum, maillon verrouillé (traction en charge OK), aucun maillon raide au contrôle.
4. 4. Boot posé sur le flanc entaillé + chambre montée : gonflage à la pression d'usage sans hernie visible du boot.
5. 5. Inventaire de ta trousse consigné : chaque outil justifié par au moins une panne qu'il couvre, poids total pesé et noté.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Bikepacking.com : kit de réparation d'urgence pour le bikepacking
- video — Park Tool : réparations de chaîne sur le terrain
- article — Park Tool : réparation tubeless : mèches et boots
- video — GCN : réparations de bord de route essentielles

### 9. Vélos d'enfants : dimensionner, régler, sécuriser `velos-enfants`

- **Durée :** 35 min
- **Prérequis :**
  - [Le M-check : contrôle de sécurité en 8 minutes](fondamentaux.md) `m-check`
  - [Panorama des vélos atypiques](#panorama-velos-atypiques) `panorama-velos-atypiques`
  - [Régler sa selle : hauteur, assiette, serrage](direction-et-peripheriques.md) `reglages-selle-essentiels`
  - [Inspecter les freins et mesurer l'usure](freinage.md) `inspection-freins-usure`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
- **Outils :** Mètre ruban et livre rigide pour mesurer l'entrejambe, Balance (vélo et enfant), Clés Allen, tournevis plat et cruciforme, Clé dynamométrique petits couples (1-10 N·m), Frein-filet faible et graisse, Marqueur indélébile pour les repères de contrôle, Bouchons de cintre de rechange, Pompe à manomètre, Craie ou ruban pour tracer la ligne d'arrêt, Plots ou cônes pour l'essai roulé, Chiffon et dégraissant
- **⚠️ Sécurité :**
  - Bouchons de cintre manquants = extrémité tubulaire nue : en cas de chute, c'est un emporte-pièce sur l'abdomen ou le visage. Aucun vélo d'enfant ne quitte l'atelier sans ses 2 bouchons.
  - Sur un vélo à frein à rétropédalage seul, une chaîne qui déraille supprime tout le freinage : contrôle tension, alignement et carter, et privilégie un vélo doté en plus d'au moins un frein sur roue.
  - Repères d'enfoncement minimal de la tige de selle et de la potence plongeur : au-delà, la pièce casse, et un enfant n'a aucune capacité de rattrapage.
  - Les fixations des vélos d'enfants se desserrent vite : petits couples, chutes fréquentes, chocs. Recontrôle systématique à une semaine, puis tous les mois.
  - Les stabilisateurs donnent une fausse sécurité : ils ne freinent pas, ils font basculer en virage et ils retardent l'apprentissage de l'équilibre.
  - Un levier que l'enfant ne peut pas actionner à fond est un frein qui n'existe pas : la garde se règle pour sa main, pas pour la tienne.

**Objectifs :**
- Dimensionner un vélo d'enfant par la taille de roue ET l'entrejambe, plutôt que par l'âge affiché sur la boîte
- Régler les deux positions de selle utiles : apprentissage pieds à plat, puis efficacité
- Adapter les commandes à de petites mains : garde de levier, effort au levier, largeur de cintre, frein à rétropédalage et ses limites
- Évaluer le rapport masse du vélo / masse de l'enfant et ses conséquences réelles sur la conduite
- Conduire un M-check adapté à l'enfant et planifier les recontrôles imposés par le desserrage
- Organiser le sevrage des stabilisateurs

**TP — Adapter un vélo d'enfant à un enfant réel et le valider par un M-check adapté**

Avec un enfant réel et son vélo, tu mesures son entrejambe, tu confrontes la taille de roue à sa morphologie, tu règles les deux positions de selle et les commandes de frein pour sa main, tu contrôles le vélo point par point, puis tu valides par un essai roulé et une distance d'arrêt mesurée.

Critères de validation :
1. 1. Entrejambe mesuré pieds nus, livre rigide entre les jambes, 2 mesures cohérentes à ±5 mm.
2. 2. Taille de roue et hauteur de selle minimale du vélo confrontées à la mesure : écart chiffré documenté, vélo déclaré adapté, trop grand ou trop petit, par écrit.
3. 3. Position « apprentissage » : selle réglée pour que l'enfant pose les 2 pieds à plat au sol en étant assis, sans se déhancher, 3 essais sur 3.
4. 4. Position « efficacité » repérée au marqueur sur la tige de selle (pointes de pieds au sol, légère flexion du genou en bas du pédalage), repère d'enfoncement minimal respecté et vérifié à la dépose.
5. 5. Freins : garde des leviers réglée pour que l'enfant atteigne le point dur avec 2 doigts sans replier complètement la main ; il bloque la roue d'une seule main, main droite puis main gauche, 3 essais sur 3 de chaque côté.
6. 6. Essai roulé : arrêt en ≤ 3 m depuis une allure de ≈ 10 km/h, sur sol sec et plat, sans blocage brutal de la seule roue avant. 3 essais, les 3 réussis.
7. 7. Rapport masse du vélo / masse de l'enfant calculé et noté, objectif ≤ 30 % ; au-delà de 40 %, alerte écrite et au moins 3 pistes d'allègement listées.
8. 8. M-check adapté : 100 % des points contrôlés, dont 2 bouchons de cintre présents, poignées ne tournant pas à la main, carter ou protège-chaîne fixé, catadioptres complets, retenue secondaire de roue avant en place, aucune arête vive accessible.
9. 9. Couples repris sur au moins 6 points (potence, cintre, collier de selle, leviers, axes de roue, stabilisateurs le cas échéant), repères marqueur posés sur chacun pour le recontrôle.
10. 10. Recontrôle planifié et daté à 1 semaine, écrit sur la fiche remise aux parents avec les 5 points à revérifier.
11. 11. Si stabilisateurs présents : plan de sevrage écrit en 3 étapes datées (dépose des pédales ou passage draisienne, puis remontage, puis roulage libre).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Norme EN ISO 8098 : Exigences de sécurité des bicyclettes pour jeunes enfants : freinage, arêtes, fixations
- doc — woom : Guide de dimensionnement par entrejambe et politique de poids des vélos enfants
- doc — Islabikes : Géométrie et ergonomie spécifiques aux enfants : manivelles courtes, leviers à garde réglable
- article — Two Wheeling Tots : Rapport poids vélo / poids enfant et comparatifs de vélos enfants
- video — Park Tool : Entretien d'un frein à rétropédalage (coaster brake)
- doc — Sécurité routière / programme Savoir Rouler à Vélo : Apprentissage du vélo et équipement adapté à l'enfant

## Niveau 3 — Avancé

### 1. Manivelles à clavettes : dépose et repose dans les règles `manivelles-clavettes-service`

- **Durée :** 40 min
- **Prérequis :**
  - [Anatomie d'un vélo vintage](#anatomie-velo-vintage) `anatomie-velo-vintage`
  - [Anatomie du vélo : nomme chaque pièce](fondamentaux.md) `anatomie-velo`
  - [Révision complète d'un moyeu à cônes : démontage, graissage, remontage](roues-et-pneus.md) `revision-moyeu-cones-billes`
- **Outils :** Presse à clavettes (ou chasse-goupille + support massif), Maillet, Lime plate fine, Clé plate 9-10 mm, Graisse, Lunettes de protection, Clavettes neuves 9 ou 9,5 mm
- **⚠️ Sécurité :**
  - Ne chasse jamais une clavette au marteau sans soutenir fermement la manivelle par en dessous (support massif ou étau) : les chocs se transmettent aux billes du boîtier et les marquent définitivement.
  - Porte des lunettes : une clavette trempée peut éclater sous le chasse-goupille.

**Objectifs :**
- Déposer des clavettes de manivelle sans détruire le filetage ni les roulements du boîtier
- Choisir, orienter et ajuster (limage du plat) une clavette neuve
- Reposer et contrôler l'absence de jeu après mise en charge

**TP — Remplacement complet des deux clavettes**

Sur un pédalier à clavettes, tu déposes les deux clavettes (presse ou chasse + support), tu mesures leur diamètre, tu ajustes les clavettes neuves à la lime si nécessaire, tu reposes avec les plats opposés pour garder les manivelles à 180°, puis tu contrôles après essai en charge.

Critères de validation :
1. 1. Les deux clavettes déposées sans marquer les roulements (rotation du boîtier après coup : aucun point dur ni craquement nouveau).
2. 2. Diamètre des clavettes mesuré au pied à coulisse et consigné (9,0 ou 9,5 mm) — clavettes neuves du bon diamètre.
3. 3. Manivelles à 180° exactement après repose : clavettes montées plats opposés (l'une entre par la droite, l'autre par la gauche).
4. 4. Clavettes enfoncées à la presse jusqu'à l'appui franc, écrou serré modérément (l'écrou ne fait pas la tenue : c'est l'enfoncement du plat).
5. 5. Après 50 tours de pédalage en forte charge : aucun jeu ni craquement, écrous recontrôlés et resserrés une fois.
6. 6. Le contrôle est refait après la première vraie sortie et consigné dans le carnet (les clavettes se tassent).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : manivelles à clavettes : dépose, ajustage et repose
- video — RJ The Bike Guy : déposer des clavettes de pédalier sans outil spécialisé
- article — Park Tool : entretien des pédaliers anciens à axe carré et à clavettes
- article — Tonton Vélo : retours d'expérience sur le remplacement de clavettes

### 2. Boîtiers à filetage français, italien et suisse : identifier et réviser `boitier-filetages-francais-italien`

- **Durée :** 40 min
- **Prérequis :**
  - Avoir révisé un boîtier à cuvettes et billes en standard anglais BSA *(transmission)*
  - [Visserie : empreintes, filetages et pas inversés](fondamentaux.md) `empreintes-et-filetages`
- **Outils :** Pied à coulisse, Peigne à filets (métrique et impérial), Clé à ergots, Clé à cuvette plate, Graisse, Frein filet moyen, Chiffons et dégraissant

**Objectifs :**
- Identifier un boîtier français (35 × 1 mm), italien (36 × 24 TPI) ou suisse par mesure, sans se fier aux apparences
- Mémoriser les sens de filetage de chaque standard et leurs conséquences (cuvette droite italienne qui se dévisse en roulant)
- Réviser un boîtier à cuvettes et billes dans un de ces standards sans détruire les filets du cadre

**TP — Identification par mesure puis révision complète**

Sur un cadre ancien au boîtier inconnu, tu mesures le diamètre et le pas des cuvettes pour identifier le standard, tu annonces les sens de filetage AVANT de forcer, tu déposes, nettoies, regarnis de billes neuves et remontes avec les précautions propres au standard (frein filet ou serrage appuyé sur cuvette fixe italienne).

Critères de validation :
1. 1. Standard identifié correctement par la mesure : diamètre de cuvette au pied à coulisse à ±0,1 mm + pas vérifié au peigne à filets, consignés dans le carnet.
2. 2. Sens de filetage des deux cuvettes énoncés sans erreur avant tout démontage (français : les deux à droite ; italien : les deux à droite ; anglais : côté transmission à gauche).
3. 3. Démontage réalisé sans faux mouvement destructeur : filets du cadre intacts à l'inspection (aucun filet arraché ou croisé).
4. 4. Remontage graissé, billes neuves au bon nombre et au bon diamètre (comptage consigné), contre-écrou bloqué.
5. 5. Réglage final : zéro jeu à l'axe (test de basculement manivelle) ET rotation libre sans point dur sur 360°.
6. 6. Sur un standard italien ou français : mesure préventive anti-dévissage appliquée (frein filet ou couple appuyé) et notée.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : standards de boîtiers de pédalier français, italien, suisse et leurs sens de filetage
- article — Park Tool : standards et terminologie des boîtiers de pédalier
- article — Bike Gremlin : filetages de boîtier : dimensions et compatibilités
- doc — Velo Orange : solutions de remplacement pour boîtiers français et suisses
- article — Tonton Vélo : identification de boîtiers sur cadres français anciens

### 3. Manettes à friction : révision et art du réglage `manettes-friction-service`

- **Durée :** 30 min
- **Prérequis :**
  - [Diagnostiquer une transmission qui saute (méthode d'élimination)](transmission.md) `diagnostic-passage-defaillant`
  - [Régler les butées H et L d'un dérailleur arrière](transmission.md) `derailleur-arriere-butees-h-l`
- **Outils :** Tournevis plat, Clés Allen, Dégraissant, Graisse fine, Câble de dérailleur neuf, Pince coupe-câble

**Objectifs :**
- Démonter, nettoyer et remonter une manette à friction (downtube, cocotte ou bout de guidon) dans le bon ordre d'empilage
- Régler la friction pour tenir la vitesse sans rendre le levier dur
- Remplacer le câble et maîtriser le passage des vitesses à la friction (sans indexation)

**TP — Révision d'une manette downtube et test anti-dérive**

Tu démontes complètement une manette à friction en photographiant l'ordre d'empilage des rondelles, tu nettoies, tu remontes, tu remplaces le câble, puis tu règles la friction et tu valides par un test en charge : la manette doit tenir la vitesse sans dériver.

Critères de validation :
1. 1. Démontage/remontage complet avec ordre d'empilage documenté (photos) : la manette fonctionne au remontage du premier coup.
2. 2. Câble neuf posé, tendu sans mou, extrémité sertie d'un embout.
3. 3. Passage à la friction : tu atteins chaque pignon de la cassette/roue libre sans dépasser plus d'une fois par pignon (aller-retour complet).
4. 4. Zéro dérive : deux minutes de pédalage en forte charge sur le grand pignon sans que la manette ne se dévisse ni que la vitesse ne saute (0 auto-shift).
5. 5. Effort de levier homogène sur toute la course (pas de point dur ni de zone libre), vis de friction accessible et réglée à la main ou à l'outil selon le modèle.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : manettes à friction : fonctionnement, réglage et technique de passage
- article — Park Tool : manettes de dérailleur : types et entretien
- video — RJ The Bike Guy : démontage et révision de manettes downtube
- article — Rivendell : plaidoyer et mode d'emploi de la friction

### 4. Moyeu Sturmey-Archer 3 vitesses : réglage de la chaînette indicatrice `sturmey-archer-reglage`

- **Durée :** 35 min
- **Prérequis :**
  - [Régler un dérailleur avant](transmission.md) `derailleur-avant-reglage`
  - [Tension de chaîne sur pattes horizontales : la méthode propre](#fixie-tension-chaine) `fixie-tension-chaine`
- **Outils :** Clés plates 15 mm et 13 mm, Huile fluide (type SAE 20/30), Chiffons, Lampe de poche
- **⚠️ Sécurité :**
  - Un faux point mort (chaînette mal réglée) fait patiner le moyeu sous effort : la pédale part dans le vide d'un coup, genou dans le cintre et chute possible. Le test en charge après réglage est obligatoire.

**Objectifs :**
- Comprendre le principe du train épicycloïdal d'un moyeu 3 vitesses ancien (AW et dérivés)
- Régler la chaînette indicatrice à la fenêtre témoin pour obtenir trois vitesses franches
- Lubrifier le moyeu et diagnostiquer le faux point mort, panne dangereuse classique

**TP — Réglage complet et test des trois rapports**

Sur un vélo à moyeu Sturmey-Archer AW ou équivalent, tu inspectes la chaînette indicatrice, tu règles sa tension en 2e vitesse en alignant le repère dans la fenêtre de l'écrou d'axe, tu lubrifies, puis tu valides les trois rapports en charge.

Critères de validation :
1. 1. En 2e vitesse, l'extrémité de la tige indicatrice affleure l'extrémité de l'axe, vérifiée par la fenêtre témoin (tolérance : le repère constructeur, généralement à ras ±1 mm).
2. 2. Les trois vitesses passent nettement sur dix cycles complets 1-2-3-2-1 sans hésitation ni bruit de cliquetis anormal.
3. 3. Test anti-faux-point-mort : dix démarrages en forte charge dans chaque rapport, zéro patinage.
4. 4. Lubrification effectuée (quelques gouttes d'huile fluide par l'orifice si présent, ou aux extrémités d'axe) et consignée avec la date.
5. 5. Chaînette contre-écroutée : le réglage ne bouge pas après les tests (contrôle visuel à la fenêtre).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Sturmey-Archer : notice de réglage des moyeux 3 vitesses à chaînette indicatrice
- article — Sheldon Brown : moyeux Sturmey-Archer : réglage, entretien et faux point mort
- video — RJ The Bike Guy : réglage et entretien d'un moyeu 3 vitesses ancien
- article — Park Tool : réglage des moyeux à vitesses intégrées

### 5. Moyeu piste : monter pignon et contre-écrou sans risquer ta peau `fixie-moyeu-piste`

- **Durée :** 30 min
- **Prérequis :**
  - [Visserie : empreintes, filetages et pas inversés](fondamentaux.md) `empreintes-et-filetages`
  - [Tension de chaîne sur pattes horizontales : la méthode propre](#fixie-tension-chaine) `fixie-tension-chaine`
  - [Déposer et reposer une cassette](transmission.md) `cassette-depose-repose`
- **Outils :** Fouet à chaîne, Clé à ergots pour contre-écrou de piste, Clé dynamométrique 10-60 N·m, Graisse, Feutre peinture
- **⚠️ Sécurité :**
  - Sans contre-écrou correctement serré, le pignon se dévisse à la première retenue en rétropédalage : sur un fixie sans frein arrière mécanique, c'est la perte totale de la retenue. Le contre-écrou à pas inversé n'est pas décoratif.

**Objectifs :**
- Monter un pignon fixe et son contre-écrou (filetage inversé) sur un moyeu piste
- Serrer aux couples corrects avec fouet à chaîne et clé à ergots
- Contrôler la tenue de l'ensemble sous décélérations répétées

**TP — Montage pignon + contre-écrou et test de dévissage**

Tu déposes l'ancien pignon, tu nettoies et graisses les deux filetages du moyeu, tu visses le pignon au couple au fouet à chaîne, tu serres le contre-écrou (pas à gauche) à la clé à ergots, tu marques l'ensemble au feutre et tu valides par vingt décélérations en rétropédalage.

Critères de validation :
1. 1. Les deux filetages (pignon et contre-écrou) nettoyés et graissés avant montage.
2. 2. Pignon prévissé à la main puis serré à 40 N·m au fouet à chaîne (bras de levier et couple consignés).
3. 3. Contre-écrou à pas inversé serré à 30 N·m minimum à la clé à ergots.
4. 4. Repère au feutre peinture posé à cheval pignon/contre-écrou/moyeu.
5. 5. Après vingt décélérations franches en rétropédalage : repère parfaitement aligné (zéro dévissage), aucun jeu ni cliquetis au pignon.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : moyeux piste : montage du pignon fixe et du contre-écrou
- article — Park Tool : dépose et pose des pignons fixes et contre-écrous
- video — GCN : montage d'une transmission pignon fixe
- doc — Surly : moyeux flip-flop : côtés fixe et roue libre

### 6. Tandem : chaîne de synchronisation et boîtier excentrique `tandem-timing-excentrique`

- **Durée :** 35 min
- **Prérequis :**
  - [Mesurer l'usure d'une chaîne](transmission.md) `usure-chaine-mesure-jauge`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
- **Outils :** Clé à ergots ou Allen selon type d'excentrique, Clé dynamométrique 2-25 N·m, Réglet, Dérive-chaîne, Graisse

**Objectifs :**
- Comprendre l'architecture de transmission d'un tandem : chaîne de synchro à gauche, transmission classique à droite
- Régler la tension de la chaîne de synchro par rotation du boîtier excentrique
- Mettre les manivelles capitaine/stoker en phase et verrouiller l'excentrique

**TP — Réglage complet de la synchro d'un tandem**

Sur un tandem, tu débloques le boîtier excentrique avant, tu règles la tension de la chaîne de synchro par rotation de l'excentrique, tu phases les manivelles (en phase ou à 90° selon la préférence de l'équipage), tu rebloques et tu contrôles sur un tour complet.

Critères de validation :
1. 1. Battement vertical de la chaîne de synchro entre 5 et 10 mm au milieu du brin, mesuré au réglet.
2. 2. Tension homogène : variation de battement ≤ 5 mm sur un tour de manivelle complet.
3. 3. Manivelles capitaine et stoker en phase à ±2° (contrôle visuel avec les deux manivelles droites à l'horizontale).
4. 4. Excentrique verrouillé au couple constructeur, sans avoir marqué le boîtier ni le cadre (méplats intacts).
5. 5. Rotation de l'ensemble : 360° sans point dur, sans bruit de frottement de chaîne.
6. 6. Usure de la chaîne de synchro mesurée à la jauge et consignée avant remontage.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : mécanique du tandem : chaîne de synchro et excentrique
- doc — Thorn Cycles : guide technique tandem : excentriques et transmission
- article — Park Tool : particularités d'entretien des tandems
- doc — Santana : documentation technique tandems : timing et phasage

### 7. Biporteur : contrôler et régler la direction à tringlerie ou à câbles `cargo-direction-renvoi`

- **Durée :** 35 min
- **Prérequis :**
  - [Jeu de direction ahead : détecter le jeu et régler la précharge](direction-et-peripheriques.md) `precharge-jeu-direction-ahead`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
- **Outils :** Clés Allen et plates, Clé dynamométrique 2-25 N·m, Frein filet moyen, Rapporteur d'angle ou application inclinomètre, Graisse
- **⚠️ Sécurité :**
  - La direction d'un biporteur transporte souvent des enfants : une rotule desserrée ou un câble effiloché est un défaut bloquant, jamais un point à surveiller. En cas de doute, le vélo ne repart pas.

**Objectifs :**
- Comprendre les deux architectures de direction déportée des biporteurs : tringle rigide et câbles croisés
- Mesurer et rattraper le jeu de direction au niveau des rotules ou de la tension des câbles
- Contrôler l'ensemble de la chaîne de direction avant remise en service d'un vélo qui transporte des enfants

**TP — Inspection et réglage complet d'une direction déportée**

Sur un biporteur (tringle ou câbles), tu inspectes toute la chaîne de direction (pivot avant, rotules ou poulies, tringle ou câbles, pivot de guidon), tu mesures le jeu angulaire au guidon, tu rattrapes le jeu et tu valides braquage complet et absence de point dur.

Critères de validation :
1. 1. Jeu angulaire au guidon avant réponse de la roue mesuré ≤ 2° après réglage (mesuré roue avant bloquée, inclinomètre sur le cintre).
2. 2. Toutes les rotules/chapes serrées au couple constructeur avec frein filet, consignées une par une (nombre = nombre de points d'articulation).
3. 3. Braquage de butée à butée sans point dur ni bruit, roue avant levée.
4. 4. Sur direction à câbles : tensions gauche et droite équilibrées (flèche identique à ±2 mm sous la même pression du doigt), aucun toron cassé sur toute la longueur.
5. 5. Les deux jeux de direction (colonne de guidon et pivot de roue) contrôlés sans jeu : test de bascule frein avant serré, zéro clac perceptible.
6. 6. Verdict écrit avec les mesures : bon pour service ou immobilisé.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : entretien des vélos cargo : points de contrôle spécifiques
- article — Weelz : entretien courant d'un biporteur au quotidien
- doc — Urban Arrow : manuel d'entretien : direction à câbles
- doc — Babboe / Carqon : documentation technique direction à tringle de biporteur

### 8. Câbles et durites très longs : freiner net sur cargo, longtail et tandem `cargo-tandem-cables-longs`

- **Durée :** 35 min
- **Prérequis :**
  - [Remplacer câble et gaine de frein](freinage.md) `cable-gaine-frein-remplacement`
  - [Câbles et gaines : matériaux, coupe parfaite et routage externe](direction-et-peripheriques.md) `cables-gaines-routage-externe`
- **Outils :** Câble de frein tandem/cargo (2,5-3,5 m), Gaine de frein au mètre, Pince coupe-câble de qualité, Poinçon, Embouts de gaine et de câble, Lubrifiant PTFE pour câble
- **⚠️ Sécurité :**
  - Sur un vélo chargé de 100 kg et plus, un frein arrière médiocre ne pardonne pas : le test de blocage de roue en charge fait partie de la procédure, pas de la garantie.

**Objectifs :**
- Comprendre pourquoi un câble de plus de deux mètres rend un frein spongieux (friction cumulée, compression de gaine)
- Poser un câble/gaine long en optimisant le routage (arcs larges, gaine continue, gaine compressionless pour l'indexation)
- Choisir entre mécanique et hydraulique selon la longueur et savoir commander une durite sur mesure

**TP — Remplacement complet du câble de frein arrière d'un longtail**

Tu remplaces câble et gaine du frein arrière d'un longtail ou tandem (course supérieure à 2 m) : coupe propre de la gaine, routage en arcs continus, lubrification, réglage de la garde, et validation de la puissance au levier.

Critères de validation :
1. 1. Gaine coupée net et ébavurée à chaque extrémité (lumière du passage ronde, contrôle visuel), embouts posés partout.
2. 2. Routage : aucun rayon de courbure inférieur à 10 cm, aucun pincement aux colliers, le braquage complet ne tire pas sur la gaine.
3. 3. Le levier bloque la roue arrière chargée (20 kg sur le porte-bagage) avant les deux tiers de sa course.
4. 4. Retour de levier franc en moins d'une seconde, sans point dur (friction maîtrisée malgré la longueur).
5. 5. Garde réglée : la roue tourne libre, les patins/plaquettes lèchent à moins de 2 mm de course de levier morte.
6. 6. Câble sans mou ni toron cassé, extrémité sertie.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : pose de câbles et gaines : bonnes pratiques de routage
- article — Sheldon Brown : câblerie des tandems : longueurs et solutions
- doc — Jagwire : gaines au mètre et kits tandem/cargo
- doc — Thorn Cycles : freinage des tandems : choix techniques

### 9. Vélo pliant : service des charnières et rattrapage de jeu `pliant-service-charnieres`

- **Durée :** 40 min
- **Prérequis :**
  - [Vélo pliant : plier, déplier et contrôler sans rien casser](#pliant-plier-controler) `pliant-plier-controler`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
- **Outils :** Clés Allen, Clé dynamométrique 2-25 N·m, Comparateur ou jeu de cales, Graisse, Dégraissant, Manuel constructeur du modèle
- **⚠️ Sécurité :**
  - La charnière est un élément structurel : un axe usé ou un levier qui ferme sans résistance peut céder en roulant. Après tout réglage, le test de flexion mesuré est obligatoire avant l'essai roulant.

**Objectifs :**
- Mesurer objectivement le jeu d'une charnière de cadre et de potence de pliant
- Régler le serrage des leviers/loquets selon la procédure constructeur (effort de fermeture calibré)
- Lubrifier axes et portées, et identifier les pièces d'usure à remplacer (axes, bagues, crochets)

**TP — Service complet des charnières d'un pliant**

Sur un pliant, tu mesures le jeu initial des charnières (cadre et potence), tu démontes et nettoies les axes accessibles, tu regraisses, tu règles le serrage des leviers selon la procédure constructeur et tu valides par mesure comparative avant/après.

Critères de validation :
1. 1. Jeu initial mesuré et consigné : déflexion verticale en bout de cadre/potence sous 10 kg de charge, mesurée au comparateur ou à la cale.
2. 2. Après service : déflexion ≤ 1 mm sous la même charge de 10 kg au même point de mesure.
3. 3. Effort de fermeture des leviers conforme à la procédure constructeur : le levier se ferme à la paume avec une résistance franche, jamais au marteau, et ne se ferme pas sans résistance.
4. 4. Tous les axes et crochets nettoyés et regraissés, visserie au couple constructeur (valeurs consignées).
5. 5. Dix cycles de pliage après service : verrouillage franc à chaque cycle, aucun bruit de claquement nouveau.
6. 6. Pièces d'usure inspectées et verdict écrit (axes, bagues, crochets : OK ou à remplacer avec référence).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Brompton : procédures d'entretien des charnières et du crochet de fermeture
- doc — Tern : réglage des leviers de charnière et couples de serrage
- doc — Dahon : manuel de service des charnières de cadre
- article — Park Tool : entretien des vélos pliants

### 10. Bikepacking : monter porteurs, cages et sacoches sans ruiner le cadre `bikepacking-porteurs-fixations`

- **Durée :** 30 min
- **Prérequis :**
  - [Étalonne ta main : pratique délibérée du couple](fondamentaux.md) `etalonnage-sensoriel-couple`
  - [Porte-bagages : fixations, limites de charge et alternatives bikepacking](direction-et-peripheriques.md) `porte-bagages-charge`
- **Outils :** Clés Allen, Clé dynamométrique 2-14 N·m, Film de protection de cadre, Colliers de fixation (si pas d'inserts), Sangles, Balance
- **⚠️ Sécurité :**
  - Sur une fourche carbone sans inserts, ne monte jamais de colliers serrés sans validation constructeur : l'écrasement local peut amorcer une rupture.

**Objectifs :**
- Monter des cages cargo sur fourche (inserts filetés ou colliers) en respectant les limites de charge constructeur
- Protéger le cadre à chaque point de contact (film, tissu) et vérifier les dégagements en débattement
- Contrôler la tenue de l'ensemble chargé sous secousses

**TP — Équipement complet d'un vélo pour un week-end en autonomie**

Tu montes deux cages cargo sur fourche, une sacoche de selle et une sacoche de cadre : couples corrects, protection du cadre, chargement test et validation sous secousses, dégagements vérifiés.

Critères de validation :
1. 1. Visserie des cages serrée à 3 N·m ±10 % à la clé dynamométrique (inserts M5) ; limite de charge constructeur relevée et respectée (typiquement 3 kg par cage).
2. 2. Protection posée à chaque point de contact sacoche/cadre (contrôle : zéro contact direct peinture/sangle sur tout le tour).
3. 3. Test de secousses : vélo chargé (2 kg par cage, sacoches lestées) secoué vigoureusement 2 minutes — aucun glissement supérieur à 2 mm d'aucun élément (repères au feutre).
4. 4. Dégagement talon/sacoche arrière vérifié en pédalant : zéro contact sur 20 tours de manivelle.
5. 5. Dégagement pneu/sacoche et pneu/cage ≥ 5 mm, débattement et braquage compris (fourche comprimée si suspension).
6. 6. Poids total de l'équipement pesé et consigné poste par poste.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Bikepacking.com : guides de montage des sacoches et cages cargo
- doc — Tailfin : documentation de montage porteurs et limites de charge
- doc — Apidura : installation et protection du cadre
- doc — Salsa Cycles : inserts de fourche et charges maximales

### 11. Vélos couchés, tricycles et cycles adaptés : ce qui change mécaniquement `cycles-adaptes`

- **Durée :** 45 min
- **Prérequis :**
  - [Panorama des vélos atypiques](#panorama-velos-atypiques) `panorama-velos-atypiques`
  - [Câbles et durites très longs : freiner net sur cargo, longtail et tandem](#cargo-tandem-cables-longs) `cargo-tandem-cables-longs`
  - [Biporteur : contrôler et régler la direction à tringlerie ou à câbles](#cargo-direction-renvoi) `cargo-direction-renvoi`
  - [Calculer la longueur de chaîne](transmission.md) `chaine-longueur-calcul`
  - [Régler un frein à disque mécanique](freinage.md) `frein-disque-mecanique-reglage`
- **Outils :** Notices constructeur du cycle (couché, trike, handbike), Clés Allen et Torx, jeu de clés plates pour les contre-écrous de tringlerie, Clé dynamométrique, Comparateur à cadran et support magnétique, Règle longue et décamètre pour le pincement, Inclinomètre pour mesurer la pente d'essai, Jauge d'usure de chaîne et dérive-chaîne, Pince coupe-gaine de qualité et gaine compressionless, Câbles de très grande longueur et coupleurs si prévus, Graisse, lubrifiant chaîne et dégraissant, Lest ≥ 70 kg pour le test du frein de parking, Chronomètre, marqueur et appareil photo pour construire le schéma
- **⚠️ Sécurité :**
  - Le frein de parking est un organe de sécurité vital : c'est lui qui empêche la machine de partir pendant un transfert. Un cycle ne quitte jamais l'atelier avec un frein de parking qui ne tient pas en pente.
  - Du jeu dans une rotule de direction indirecte, c'est une perte de contrôle progressive puis totale : contrôle au comparateur, remise en jeu nul et contre-écrous serrés, aucune tolérance.
  - Sur un trike, un freinage avant déséquilibré fait braquer la machine toute seule (brake steer) : les deux freins avant se règlent ensemble et se testent à vitesse maîtrisée, casque et espace dégagé.
  - Un galet qui casse ou une chaîne qui saute de son tube libère plusieurs mètres de chaîne sous les jambes de l'utilisateur : usure et alignement se contrôlent à chaque révision.
  - Pour beaucoup d'utilisateurs, ce cycle est l'unique moyen de déplacement : aucune modification sans leur accord explicite, et tout ce qui relève du positionnement thérapeutique ou de l'appareillage revient à un professionnel de santé.

**Objectifs :**
- Identifier les familles de cycles adaptés : couchés long et court empattement, trikes tadpole et delta, tricycles adultes, handbikes, tandems adaptés, cycles d'aide à la mobilité
- Cartographier une transmission à galets : brins moteur et retour, tubes de chaîne, chaînes de 2 à 3 longueurs, entraînement par roue avant
- Contrôler et régler une direction indirecte : tringlerie, rotules, pincement, contre-écrous
- Gérer des câbles et gaines très longs sans perdre la puissance de freinage ni la précision de passage
- Contrôler et régler un frein de parking, organe vital lors des transferts
- Restituer le travail sous forme d'un schéma de routage exploitable par un autre mécanicien

**TP — Inspection et réglage complets d'un cycle adapté, schéma de routage à l'appui**

Sur un couché, un trike ou un cycle adapté, tu construis d'abord le schéma complet du routage (galets, tubes de chaîne, boucles de câble, coupleurs), puis tu contrôles et règles la transmission longue, la direction indirecte, chaque commande et le frein de parking, avant de valider par des essais mesurés — dont la tenue en pente en charge.

Critères de validation :
1. 1. Schéma de routage complet dessiné : 100 % des galets et renvois, tubes de chaîne, boucles, raccords et coupleurs représentés, longueurs de gaine relevées à ±10 mm, sens de passage indiqué.
2. 2. Chaîne : longueur totale relevée en nombre de maillons, usure mesurée à la jauge en 3 zones distinctes (brin moteur, brin retour, portion travaillant sur galets), écarts entre zones documentés.
3. 3. Tension du brin retour dans la plage constructeur : flèche mesurée à mi-portée, valeur relevée et comparée à la notice ; 0 contact chaîne/cadre ou chaîne/carénage sur toute la plage de vitesses.
4. 4. Galets : chacun tourne librement à la main, 0 jeu latéral perceptible, désalignement avec le brin ≤ 1 mm mesuré au réglet ; galets à gorges entamées identifiés et notés au rapport.
5. 5. Direction indirecte : chaque rotule contrôlée, jeu ≤ 0,5 mm au comparateur ; contre-écrous serrés au couple et repérés au marqueur.
6. 6. Pincement (toe-in) réglé à la valeur constructeur ±1 mm, mesuré aux jantes à hauteur d'axe, avant et arrière du diamètre, mesure répétée 2 fois avec le même résultat à ±1 mm.
7. 7. Commandes : chaque levier atteint son point dur avec ≥ 25 % de course restante ; l'utilisateur lui-même — pas seulement toi — bloque chaque roue freinée, testée roue par roue.
8. 8. Équilibrage du freinage avant sur trike : essai en ligne droite à 15 km/h, freinage avant à fond, déviation latérale ≤ 1 m sur 15 m, 3 essais concordants.
9. 9. Frein de parking : maintient le cycle chargé (utilisateur ou lest ≥ 70 kg) sur une pente mesurée à l'inclinomètre ≥ 8 %, pendant ≥ 60 s, sans aucun glissement, testé dans le sens montée et dans le sens descente.
10. 10. Réglage du boom / x-seam refait pour l'utilisateur : cote avant et après notée au millimètre, longueur de chaîne recalculée et corrigée si l'écart dépasse 20 mm.
11. 11. Validation d'usage : essai réalisé ou explicitement validé par l'utilisateur du cycle ; aucune modification conservée sans son accord, mention datée et signée sur la fiche.
12. 12. Rapport remis : schéma + relevés + pièces à surveiller, lisible et utilisable par un autre mécanicien sans avoir la machine sous les yeux.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — HP Velotechnik : Manuels Scorpion et Gekko : réglage du pincement, galets de chaîne et frein de parking
- doc — ICE Trikes : Manuel technique trike : direction indirecte, rotules, réglage du boom et longueur de chaîne
- doc — Cruzbike : Entraînement par roue avant : spécificités de transmission et de direction
- doc — Van Raam : Cycles adaptés, tricycles adultes et tandems côte à côte : entretien et sécurité
- outil — TerraCycle : Galets et renvois de chaîne pour vélos couchés : choix, montage et entretien des roulements
- article — Fédération Française Handisport : Cycles adaptés et handbikes : familles de matériel et rôle du professionnel de santé dans le réglage

### 12. Transporter des enfants et des charges : sièges, remorques, attelages `transport-enfants-charges`

- **Durée :** 45 min
- **Prérequis :**
  - [Vélos d'enfants : dimensionner, régler, sécuriser](#velos-enfants) `velos-enfants`
  - [Porte-bagages : fixations, limites de charge et alternatives bikepacking](direction-et-peripheriques.md) `porte-bagages-charge`
  - [Standards d'axes et d'entraxes : identifier ce que ton cadre accepte](roues-et-pneus.md) `standards-axes-roues`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
  - [Le M-check : contrôle de sécurité en 8 minutes](fondamentaux.md) `m-check`
- **Outils :** Siège enfant avec sa notice, Remorque avec son attelage et sa notice, Adaptateurs d'attelage pour axe traversant (pas et longueur adaptés), Clés Allen et Torx, Clé dynamométrique, Lest pesé : sacs de sable ou bidons d'eau, Balance ou pèse-bagage, Décamètre et craie pour les distances d'arrêt, Chronomètre ou compteur GPS, Marqueur indélébile pour repérer chaque serrage, Sangle de sécurité de remorque, Pompe à manomètre, Inclinomètre (ou application niveau) pour la pente latérale
- **⚠️ Sécurité :**
  - Un pied d'enfant dans les rayons, c'est une fracture ouverte : protections anti-rayons et sangles de repose-pieds sont non négociables et se contrôlent avant chaque départ.
  - Un attelage de remorque se double toujours d'une sangle de sécurité fixée sur un point structurel du vélo : si l'attelage lâche, la remorque reste liée.
  - Jamais d'enfant seul sur un vélo à l'arrêt, même béquille double déployée : le vélo bascule en une seconde et l'enfant tombe attaché à son siège.
  - Ne dépasse jamais la charge totale autorisée du cadre ni celle du porte-bagages. Beaucoup de cadres carbone, de fourches suspendues et de tiges de selle suspendues excluent explicitement le siège enfant : en cas de doute ou d'absence de notice, tu refuses le montage.
  - Charge = distances de freinage allongées et chaleur accumulée dans les freins. En descente longue, alterne les freins et évite le freinage continu ; sur frein sur jante, la surchauffe peut faire éclater le pneu.
  - Un blocage rapide de roue situé dans la boucle de charge d'un siège ou d'un attelage doit être remplacé par un axe boulonné quand le fabricant l'exige, et son levier ne doit jamais pouvoir être ouvert par l'enfant.

**Objectifs :**
- Vérifier la compatibilité d'un cadre, d'une fourche et d'un porte-bagages avec un siège enfant ou une remorque, notice constructeur à l'appui
- Poser un siège enfant avant ou arrière au couple, avec harnais, repose-pieds et protections de rayons conformes
- Identifier et monter un attelage de remorque (axe, patte, tige de selle), y compris sur axe traversant, et le doubler d'une sangle de sécurité
- Calculer une charge totale réelle et sa répartition, et refuser un montage qui dépasse une limite constructeur
- Mesurer l'effet de la charge sur les distances de freinage et adapter pressions et conduite
- Remettre à l'utilisateur une check-list pré-sortie réellement utilisable

**TP — Poser un siège enfant et un attelage de remorque sur deux vélos, puis rouler lesté**

Tu montes un siège enfant sur un vélo et un attelage de remorque sur un autre, en partant des notices constructeur et d'un bilan de masse chiffré. Tu valides ensuite par une sortie lestée de 10 km, des mesures de distance d'arrêt à vide et en charge, et un contrôle de desserrage par repères.

Critères de validation :
1. 1. Documents constructeur réunis pour les 2 vélos : charge totale autorisée du cadre, charge admissible du porte-bagages (classe ou valeur), compatibilité déclarée du siège et de la remorque. Valeurs recopiées sur la fiche, source citée.
2. 2. Bilan de masse chiffré : vélo + cycliste + enfant + siège ou remorque + bagages ≤ limite du cadre, ET charge appliquée au porte-bagages ≤ limite du porte-bagages, avec une marge conservée ≥ 5 %. Toute exclusion constructeur (carbone, tige suspendue, fourche suspendue) documentée et respectée.
3. 3. Siège enfant posé : 100 % des fixations au couple constructeur, repose-pieds sanglés, harnais 5 points réglé à ≤ 2 doigts de jeu au niveau des bretelles, protection anti-rayons en place et intacte.
4. 4. Dégagements mesurés autour du siège : ≥ 3 mm entre toute partie du siège ou du harnais et un élément mobile (roue, dérailleur, disque, ressort de selle), talons de l'enfant hors trajectoire de tout élément tournant.
5. 5. Attelage posé : type identifié (axe, patte, tige de selle), adaptateur d'axe traversant au bon pas et au bon couple, épingle ou clip verrouillé, garde au sol et distance au rotor ou au dérailleur ≥ 3 mm.
6. 6. Sangle de sécurité doublant l'attelage, fixée sur un point structurel ; testée seule en traction statique avec la remorque lestée ≥ 20 kg : elle retient sans se défaire ni glisser.
7. 7. Sortie lestée de 10 km (lest ≥ 15 kg côté remorque, ou masse équivalente à l'enfant côté siège) : 0 repère marqueur décalé, jeu à l'attelage ≤ 1 mm au contrôle final, 0 contact entre pièces mobiles.
8. 8. Distances d'arrêt mesurées au décamètre depuis 20 km/h, à vide puis en charge, 3 essais chacune : écart moyen calculé en mètres, noté et annoncé à l'utilisateur.
9. 9. Pressions de pneus réadaptées à la charge réelle, valeurs avant/après notées, limite maximale de la jante et du pneu respectée.
10. 10. Béquille double : le vélo chargé tient stable sur sol plat et sur une pente latérale de 3 % mesurée à l'inclinomètre ; consigne écrite « on ne laisse jamais l'enfant seul sur le vélo » remise avec la fiche.
11. 11. Check-list pré-sortie de 8 points remise à l'utilisateur et exécutée par lui, seul, en moins de 2 minutes chrono.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Norme EN 14344 : Sièges enfants pour cycles : classes de masse, exigences de harnais et de protections
- doc — Norme EN ISO 11243 : Porte-bagages pour bicyclettes : classes de charge et essais
- doc — Thule (Yepp) : Notices de sièges enfants : compatibilité de cadre, couples et limites de poids
- doc — Burley : Attelages de remorque, sangle de sécurité et compatibilité des pattes et axes
- doc — Weber : Attelage E et adaptateurs pour axes traversants : identification et montage
- article — FUB : Transporter ses enfants à vélo : solutions, réglementation et bonnes pratiques

## Niveau 4 — Expert

### 1. La méthode des pièces mystères : identifier n'importe quel standard `methode-identification-standards`

- **Durée :** 45 min
- **Prérequis :**
  - [Mesurer et décoder : pied à coulisse et marquages](fondamentaux.md) `pied-a-coulisse-et-marquages`
  - [Boîtiers à filetage français, italien et suisse : identifier et réviser](#boitier-filetages-francais-italien) `boitier-filetages-francais-italien`
  - [La carte d'identité d'un cadre : décoder tous ses standards](fondamentaux.md) `carte-identite-cadre`
- **Outils :** Pied à coulisse numérique 0,01 mm, Peigne à filets métrique et impérial, Micromètre (optionnel), Tables de standards imprimées, Carnet d'atelier

**Objectifs :**
- Dérouler une méthode systématique de mesure : diamètre au pied à coulisse, pas au peigne à filets, TPI vs métrique, jauge de profondeur
- Identifier les diamètres rares de périphériques (tiges de selle de 25,0 à 27,2 par 0,2 mm ; cintres 25,4/25,8/26,0/31,8 mm) et choisir la cale (shim) adaptée
- Croiser les mesures avec les tables de référence pour nommer le standard avec certitude, sans jamais forcer une pièce au montage

**TP — Huit pièces mystères**

Face à huit pièces anonymisées (tiges de selle, plongeur de potence, cuvette de boîtier, pédale ancienne, axe, collier…), tu appliques la méthode complète : mesures, croisement avec les tables, nom du standard, et pour chaque périphérique la solution de compatibilité moderne (cale, adaptateur, remplacement).

Critères de validation :
1. 1. Au moins 7 pièces sur 8 correctement identifiées (standard nommé et vérifiable).
2. 2. Chaque diamètre mesuré à ±0,05 mm et consigné ; chaque filetage caractérisé par diamètre ET pas (métrique ou TPI).
3. 3. Pour chaque tige de selle ou cintre : la cale ou l'alternative moderne est proposée avec ses cotes exactes.
4. 4. Zéro montage en force pendant tout le TP : toute hypothèse est validée par la mesure avant essai d'assemblage.
5. 5. Fiche de mesures rédigée réutilisable : un tiers pourrait retrouver tes identifications à partir de tes seules notes.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : tables exhaustives de standards : tiges de selle, cintres, filetages
- article — Bike Gremlin : standards et dimensions des composants vélo
- article — Park Tool : mesurer et identifier les composants
- doc — Velo Orange : cales et adaptateurs pour standards anciens
- doc — Problem Solvers : catalogue d'adaptateurs entre standards

### 2. Directions et potences anciennes : français, Raleigh 26 TPI, 1 pouce `direction-potence-standards-anciens`

- **Durée :** 35 min
- **Prérequis :**
  - [Jeu de direction fileté : réglage aux contre-écrous et entretien (ville et vintage)](direction-et-peripheriques.md) `jeu-direction-filete`
  - [La méthode des pièces mystères : identifier n'importe quel standard](#methode-identification-standards) `methode-identification-standards`
- **Outils :** Pied à coulisse numérique, Peigne à filets impérial et métrique, Tables de standards de direction, Carnet d'atelier
- **⚠️ Sécurité :**
  - Une potence de 22,2 mm forcée dans un pivot français de 22,0 mm fissure le pivot ; l'inverse (22,0 dans 22,2) laisse un jeu qui matera le plongeur. Mesure avant tout montage.

**Objectifs :**
- Distinguer par la mesure les standards de direction filetée : 1" ISO/anglais (24 TPI), français (25 × 1 mm), Raleigh (26 TPI), italien
- Différencier les plongeurs 22,2 mm (anglais) et 22,0 mm (français) et connaître les conséquences d'un mélange
- Proposer une solution de remplacement viable pour chaque cas (pièce NOS, adaptation, conversion aheadset à plongeur)

**TP — Identification de trois fourches et étude de cas**

Sur trois fourches filetées d'origines différentes, tu mesures diamètre et pas du filetage, tu identifies le standard, puis tu résous un cas pratique : remplacer la potence et le jeu de direction d'un vélo français des années 70 avec des pièces trouvables aujourd'hui.

Critères de validation :
1. 1. Les trois standards de fourche identifiés correctement (3/3), mesures consignées : diamètre à ±0,05 mm, pas au peigne à filets.
2. 2. Le diamètre intérieur de chaque pivot est mesuré et le diamètre de plongeur compatible annoncé sans erreur (22,0 vs 22,2 mm).
3. 3. L'étude de cas aboutit à une solution complète et chiffrée : références ou cotes des pièces, coût estimé, aucune incompatibilité résiduelle.
4. 4. Au moins deux solutions alternatives comparées dans l'étude de cas (par exemple pièce NOS vs adaptateur vs remplacement de fourche), avec un choix argumenté en cinq lignes.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : standards de jeux de direction et potences : anglais, français, Raleigh
- doc — Cane Creek : identification des jeux de direction et nomenclature SHIS
- doc — Velo Orange : jeux de direction et potences pour standards français
- article — Tonton Vélo : restauration de directions sur vélos français anciens
- article — Bike Gremlin : dimensions des jeux de direction filetés

### 3. Conversions de taille de roue : 27 pouces vers 700C, 700C vers 650B `conversion-650b-700c`

- **Durée :** 40 min
- **Prérequis :**
  - [Dimensions de pneus et jantes vintage : décoder le chaos](#pneus-jantes-vintage-dimensions) `pneus-jantes-vintage-dimensions`
  - [Réglage express d'un frein sur jante](freinage.md) `reglage-express-frein-jante`
- **Outils :** Pied à coulisse, Réglet, Mètre ruban, Roues de prêt au nouveau diamètre (idéalement), Carnet d'atelier
- **⚠️ Sécurité :**
  - Après conversion, vérifie que les patins portent entièrement sur la piste de freinage : un patin qui mord le pneu le découpe, un patin qui plonge sous la jante peut partir dans les rayons.

**Objectifs :**
- Calculer l'impact d'un changement de diamètre de jante sur la portée de frein, la garde au pneu et la hauteur de boîtier
- Vérifier sur le vélo la faisabilité d'une conversion avant d'acheter quoi que ce soit
- Rendre un verdict Go/NoGo documenté avec la liste des pièces nécessaires

**TP — Étude de conversion complète sur un vélo réel**

Sur un vélo en 27 pouces (630) ou 700C, tu réalises l'étude complète de conversion vers 700C ou 650B : mesure de la portée de frein actuelle et future, garde au pneu et aux garde-boue, delta de hauteur de boîtier, et verdict final avec liste de pièces.

Critères de validation :
1. 1. Delta de rayon calculé juste (par exemple 630→622 : +4 mm de portée de frein nécessaire ; 622→584 : +19 mm) et vérifié à la mesure sur le vélo à ±1 mm.
2. 2. Portée de frein disponible mesurée : la piste de freinage future tombe dans la plage de réglage des étriers (mesure consignée) ou un modèle d'étrier à portée adaptée est spécifié avec sa plage.
3. 3. Garde au pneu vérifiée aux quatre points critiques (fourche, ponts avant/arrière, bases) : ≥ 3 mm partout avec le pneu cible gonflé.
4. 4. Variation de hauteur de boîtier calculée à ±1 mm et impact sur la garde au sol des pédales évalué en virage.
5. 5. Verdict Go/NoGo écrit avec liste de pièces chiffrée (jantes ou roues, pneus, étriers ou patins déportés) ; toute incompatibilité rédhibitoire clairement identifiée.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : conversions 27 pouces vers 700C : freins et compatibilité
- article — Rene Herse Cycles : conversions 650B : intérêt, limites et méthode
- doc — Velo Orange : étriers longue portée pour conversions
- article — Bike Gremlin : interchangeabilité des tailles de roues

### 4. Entretien interne d'une roue libre : cliquets, billes et relubrification `roue-libre-entretien-interne`

- **Durée :** 40 min
- **Prérequis :**
  - [Roue libre vissée : identifier l'extracteur et déposer sans casse](#roue-libre-identification-depose) `roue-libre-identification-depose`
  - [Régler le jeu d'un moyeu à cônes et billes](roues-et-pneus.md) `reglage-cones-moyeu`
- **Outils :** Clé à ergots ou poinçon (plaque de fermeture), Huile fluide et graisse légère, Bac magnétique, Pinceau et dégraissant, Chiffons, Loupe

**Objectifs :**
- Relubrifier une roue libre sans démontage complet (méthode par gravité à l'huile)
- Ouvrir le corps d'une roue libre (plaque de fermeture à pas inversé), inspecter cliquets, ressorts et pistes
- Rattraper le jeu axial par les rondelles d'ajustement et remonter sans perdre une bille

**TP — Ouverture, inspection et remontage d'une roue libre**

Sur une roue libre sacrificielle puis une bonne : d'abord la méthode simple (rinçage/relubrification par gravité), ensuite l'ouverture complète — dévisser la plaque (pas inversé), compter et récupérer toutes les billes, inspecter cliquets et ressorts, regraisser léger et remonter.

Critères de validation :
1. 1. Méthode gravité : après rinçage et huilage, la roue libre tourne sans grippage et les cliquets claquent net (son franc et régulier sur un tour complet).
2. 2. Ouverture : plaque dévissée dans le bon sens (pas inversé annoncé avant), toutes les billes comptées à l'ouverture et au remontage (comptage consigné, zéro bille manquante).
3. 3. Cliquets et ressorts inspectés à la loupe : verdict écrit par cliquet (OK/usé/cassé).
4. 4. Jeu axial après remontage ≤ 0,5 mm (mesuré en poussant/tirant le corps fileté).
5. 5. Test d'engagement : vingt démarrages en forte charge, zéro patinage des cliquets.
6. 6. Graissage léger uniquement (pas de graisse épaisse qui colle les cliquets) — justifié par écrit en deux lignes.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : démontage et entretien interne des roues libres
- video — RJ The Bike Guy : ouvrir et réviser une roue libre vissée
- article — Park Tool : entretien des mécanismes de roue libre et cliquets
- article — Tonton Vélo : révision de roues libres anciennes (Atom, Maillard, Regina)

### 5. Freiner un tandem : frein de ralentissement et gestion de la chaleur `tandem-freinage-specifique`

- **Durée :** 40 min
- **Prérequis :**
  - [Inspecter les freins et mesurer l'usure](freinage.md) `inspection-freins-usure`
  - [Câbles et durites très longs : freiner net sur cargo, longtail et tandem](#cargo-tandem-cables-longs) `cargo-tandem-cables-longs`
- **Outils :** Clés Allen et plates, Clé dynamométrique, Thermomètre infrarouge, Manette à friction pour commande dédiée, Câblerie longue
- **⚠️ Sécurité :**
  - Sur un tandem chargé en longue descente, une jante qui dépasse la température critique fait éclater la chambre : c'est la raison d'être du frein de ralentissement. Ne pars jamais en montagne en tandem avec deux freins sur jante seuls.
  - Un tambour de ralentissement se règle pour ralentir, pas pour bloquer : il complète les freins principaux, il ne les remplace pas.

**Objectifs :**
- Comprendre le problème thermique du tandem : masse double, descentes longues, surchauffe de jante ou de disque
- Installer et régler un frein de ralentissement (tambour type Arai ou disque surdimensionné) sur commande dédiée
- Contrôler la température de jante et connaître les seuils de danger (éclatement de chambre)

**TP — Installation d'un troisième frein et test thermique**

Tu installes (ou révises) un frein de ralentissement sur moyeu arrière de tandem avec sa commande à friction dédiée, tu règles la garde, puis tu réalises un test thermique comparatif : température de jante mesurée à l'infrarouge après freinage soutenu, avec et sans le frein de ralentissement.

Critères de validation :
1. 1. Frein de ralentissement monté au couple constructeur, bras de réaction correctement ancré au cadre (contrôle : aucune rotation du corps sous freinage).
2. 2. Commande dédiée à friction : le frein tient la position choisie sans dériver pendant 2 minutes de roulage.
3. 3. Roue libre : à commande relâchée, la roue tourne au moins 5 secondes en roue libre sans frottement audible du tambour.
4. 4. Test thermique : après 2 minutes de freinage continu simulé (descente ou rouleau), température de jante mesurée à l'IR ≤ 80 °C avec le frein de ralentissement engagé.
5. 5. Les mesures avec/sans ralentisseur sont consignées et l'écart commenté (le ralentisseur doit décharger visiblement les freins de jante : écart ≥ 20 °C).
6. 6. Les deux freins principaux restent pleinement fonctionnels après le test (course de levier inchangée à ±10 %).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : freinage des tandems et freins de ralentissement
- doc — Thorn Cycles : guide freinage tandem : tambours et disques
- doc — Santana : gestion thermique du freinage en tandem
- doc — Arai : notice du frein tambour de ralentissement

### 6. Diagnostic d'un circuit dynamo au multimètre `dynamo-diagnostic`

- **Durée :** 35 min
- **Prérequis :**
  - [Dynamo dans le moyeu : brancher un éclairage fiable](#dynamo-moyeu-installation) `dynamo-moyeu-installation`
  - [Multimètre : prise en main sur un système 36/48 V](vae.md) `vae-multimetre-prise-en-main`
- **Outils :** Multimètre, Pince à dénuder, Connecteurs 2,8 mm neufs, Papier de verre fin (contacts), Colliers rilsan, Lampe témoin ou phare de test

**Objectifs :**
- Mesurer la tension de sortie d'un moyeu dynamo (courant alternatif ~6 V) et interpréter les valeurs
- Diagnostiquer méthodiquement une panne d'éclairage : moyeu, câble, masse, connecteur, phare
- Réparer les pannes classiques : masse par le cadre défaillante, connecteur oxydé, fil cisaillé au pivot de fourche

**TP — Chasse aux pannes sur circuit saboté**

Sur un vélo à dynamo dont le circuit a été saboté en deux points par un tiers (masse coupée, connecteur oxydé, fil cisaillé au choix), tu appliques l'arbre de diagnostic : test du moyeu à vide, continuité de chaque segment, contrôle des masses, puis réparation complète.

Critères de validation :
1. 1. Tension du moyeu mesurée à vide en AC : valeur non nulle et croissante avec la vitesse de rotation à la main (mesure consignée, typiquement 3-6 V à rotation vive).
2. 2. Chaque segment du circuit testé en continuité dans un ordre logique consigné (arbre de diagnostic écrit avant de toucher au vélo).
3. 3. Les deux pannes localisées en 15 minutes maximum chacune, multimètre à l'appui (pas de remplacement au hasard).
4. 4. Réparation durable : connecteurs neufs sertis, contacts nettoyés, continuité ≤ 1 Ω sur chaque segment réparé.
5. 5. Test final roulant : phare et feu arrière stables sur 5 minutes, feu de position fonctionnel à l'arrêt ≥ 60 secondes.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Busch & Müller : schémas de câblage et diagnostic des éclairages dynamo
- doc — Schmidt Maschinenbau (SON) : caractéristiques électriques des moyeux dynamo et tests
- article — Sheldon Brown : dépannage des circuits d'éclairage dynamo et problèmes de masse
- article — Bikepacking.com : fiabiliser un circuit dynamo en voyage

## Niveau 5 — Maître

### 1. Cintrage à froid d'un cadre acier : élargir l'arrière de 120 à 130 mm `cintrage-froid-cadre-acier`

- **Durée :** 45 min
- **Prérequis :**
  - [Graisse, pâte carbone, frein-filet, antiseize : quoi, où, pourquoi](fondamentaux.md) `pates-assemblage`
  - [Contrôler et redresser une patte de dérailleur au comparateur (DAG)](montage-et-peinture.md) `alignement-patte-dag`
  - [Conversions de taille de roue : 27 pouces vers 700C, 700C vers 650B](#conversion-650b-700c) `conversion-650b-700c`
- **Outils :** Ficelle fine, Réglet et pied à coulisse, Barre de levier (tube ou outil dédié), Outils d'alignement de pattes (ou grandes clés plates ajustées), Mètre ruban, Feutre
- **⚠️ Sécurité :**
  - Le cintrage à froid ne s'applique QU'À l'acier. Un cadre aluminium ou carbone cintré à froid casse — immédiatement ou, pire, plus tard en roulant. En cas de doute sur le matériau, abstiens-toi.
  - Écarte par petites passes progressives : un acier sur-cintré puis re-cintré en sens inverse s'écrouit et fragilise les bases.

**Objectifs :**
- Élargir l'espacement arrière d'un cadre acier (120/126 vers 130 mm) par cintrage à froid contrôlé et symétrique
- Contrôler l'alignement du triangle arrière à la ficelle et corriger l'asymétrie
- Réaligner les pattes de cadre pour qu'elles soient parallèles après écartement

**TP — Écartement 126 vers 130 mm avec contrôle d'alignement complet**

Sur un cadre acier des années 80, tu mesures l'espacement initial, tu traces l'axe du cadre à la ficelle (tube de direction → pattes, autour du tube de selle), tu écartes chaque base par passes successives en contrôlant la symétrie, puis tu réalignes les pattes au parallélisme.

Critères de validation :
1. 1. Espacement final à vide de 130 mm ±1 mm, mesuré entre les faces internes des pattes (le ressort élastique est anticipé : mesure après relâchement).
2. 2. Symétrie contrôlée à la ficelle : écart gauche/droite mesuré au tube de selle ≤ 1 mm.
3. 3. Chaque côté écarté par passes progressives documentées (au moins trois passes par côté, valeurs consignées) — jamais tout d'un coup ni un seul côté.
4. 4. Pattes parallèles après réalignement : une roue ou un axe test entre sans forcer et les écrous portent à plat (jour visible ≤ 0,5 mm à la cale sur chaque patte).
5. 5. La roue cible (130 mm) se monte sans écarter ni comprimer les bases à la main, et se centre dans le cadre (contrôle garde pneu symétrique à ±1 mm).
6. 6. Patte de dérailleur contrôlée à l'outil d'alignement après l'opération et corrigée si besoin.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : élargissement à froid des cadres acier et contrôle à la ficelle
- video — RJ The Bike Guy : écarter un cadre acier et réaligner les pattes
- article — Park Tool : alignement des pattes de cadre
- article — Tonton Vélo : passages en 130 mm sur cadres français anciens

### 2. Monter un dossier de restauration vintage complet `restauration-vintage-projet`

- **Durée :** 45 min
- **Prérequis :**
  - [La méthode des pièces mystères : identifier n'importe quel standard](#methode-identification-standards) `methode-identification-standards`
  - Avoir révisé boîtier exotique, roue libre et direction ancienne (leçons niveau 3-4 du système) *(cas-exotiques)*
  - [Retoucher la peinture d'un cadre : éclats, rayures, points de rouille](montage-et-peinture.md) `retouche-peinture-cadre`
- **Outils :** Pied à coulisse, Appareil photo, Balance, Jauge d'usure de chaîne, Tableur ou carnet d'atelier, Étiquettes et sachets zip

**Objectifs :**
- Évaluer un vélo ancien pièce par pièce et coter l'état de chaque composant
- Arbitrer entre conservation (patine, valeur historique), restauration à l'identique (NOS) et remplacement fonctionnel
- Construire un plan d'opérations ordonné, budgété et sourcé, digne d'un atelier professionnel

**TP — Dossier de restauration d'un vélo réel**

Sur un vélo ancien réel (le tien ou un cobaye), tu produis un dossier de restauration complet : inventaire coté, relevé des standards, arbitrages conserver/restaurer/remplacer justifiés, plan d'opérations ordonné, budget et sourcing. Le dossier doit permettre à un autre mécano d'exécuter la restauration sans toi.

Critères de validation :
1. 1. Inventaire d'au moins 25 composants, chacun photographié et coté A (bon) à D (mort), avec critère de cotation explicite.
2. 2. Au moins 8 standards mesurés et consignés (tige de selle, plongeur, boîtier, filetages de direction, ETRTO, entraxe arrière, pédales, roue libre).
3. 3. Arbitrage conserver/restaurer/remplacer justifié en une ligne minimum pour chaque composant coté C ou D.
4. 4. Plan d'opérations ordonné d'au moins 15 étapes, chaque étape avec sa durée estimée et ses outils.
5. 5. Budget total chiffré poste par poste avec une fourchette ±20 %, et au moins trois canaux de sourcing identifiés pour les pièces critiques (NOS, occasion, refabrication moderne).
6. 6. Test du dossier : un pair (ou toi après une semaine) peut reconstituer la première journée de travail sans question bloquante.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Tonton Vélo : méthodologie et fils de restauration documentés
- article — Sheldon Brown : philosophie de la restauration : conserver ou remplacer
- doc — Velo Orange : composants modernes de style classique pour restaurations
- article — The Radavist : portfolios de restaurations et choix esthétiques
- video — RJ The Bike Guy : restaurations complètes filmées étape par étape

### 3. Projet néo-rétro : moderniser un cadre ancien sans faute de compatibilité `neo-retro-conversion-projet`

- **Durée :** 45 min
- **Prérequis :**
  - [Cintrage à froid d'un cadre acier : élargir l'arrière de 120 à 130 mm](#cintrage-froid-cadre-acier) `cintrage-froid-cadre-acier`
  - [Conversions de taille de roue : 27 pouces vers 700C, 700C vers 650B](#conversion-650b-700c) `conversion-650b-700c`
  - [Utiliser ses vitesses : cadence et croisement](transmission.md) `utiliser-vitesses-cadence-croisement`
  - [Planifier un montage complet : la gamme d'assemblage](montage-et-peinture.md) `ordre-montage-cadre-nu`
- **Outils :** Pied à coulisse, Tableur, Tables de compatibilité, Carnet d'atelier

**Objectifs :**
- Concevoir la modernisation complète d'un cadre acier ancien : transmission indexée moderne, freinage actuel, roues récentes
- Construire une matrice de compatibilité exhaustive et lever chaque incompatibilité par une solution mesurée
- Chiffrer le projet et défendre les arbitrages (coût, réversibilité, respect du cadre)

**TP — Matrice de compatibilité et plan de conversion exécutable**

Pour un cadre ancien donné (mesuré réellement), tu conçois la conversion néo-rétro complète : chaque interface du vélo (entraxe arrière, roue, freins, boîtier, transmission, direction, tige, cintre) passe dans une matrice de compatibilité avec mesure à l'appui, solution retenue et coût. Le livrable est un plan de montage exécutable.

Critères de validation :
1. 1. Matrice couvrant au moins 12 interfaces, chacune avec : cote mesurée sur le cadre, cote de la pièce moderne visée, verdict compatible/adaptable/incompatible.
2. 2. Zéro incompatibilité non résolue dans le plan final : chaque point rouge a sa solution chiffrée (cale, adaptateur, cintrage, pièce spécifique).
3. 3. Toutes les mesures faites sur le cadre réel (pas de valeurs supposées) : au moins 10 mesures consignées à ±0,1 mm ou ±1 mm selon l'interface.
4. 4. Le plan précise le couple de serrage de chaque pièce neuve montée sur le cadre ancien (au moins 8 valeurs, sources citées).
5. 5. Budget total ±20 % avec au moins une alternative économique et une alternative premium comparées.
6. 6. Analyse de réversibilité : les opérations irréversibles (cintrage, ponçage, perçage éventuel) sont listées et justifiées en cinq lignes maximum.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Rene Herse Cycles : moderniser des cadres classiques : philosophie et technique
- article — Sheldon Brown : adapter des transmissions modernes sur cadres anciens
- article — Velo Orange : builds néo-rétro complets et choix de composants
- article — Bike Gremlin : compatibilités entre générations de composants
- article — The Radavist : exemples de conversions néo-rétro documentées
