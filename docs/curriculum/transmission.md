# Système « transmission »

> Part of the Jitensha curriculum — see [`CURRICULUM.md`](../../CURRICULUM.md) for the overview. Lesson data is French (course content); scaffolding is English per project rules.

Tout ce qui transforme ton coup de pédale en avancement : chaînes, cassettes, pédaliers et plateaux, boîtiers de pédalier, ligne de chaîne, dérailleurs avant/arrière et indexation, manettes, groupes électroniques (Di2, SRAM AXS, Eagle T-Type sur UDH), moyeux à vitesses intégrées (Nexus, Alfine, Rohloff, Enviolo), courroie Gates Carbon Drive et conversion singlespeed. Du simple « je compte mes vitesses » jusqu'au montage complet d'un groupe neuf, au cirage en immersion et au sauvetage d'un filetage de pédale. Toutes les familles de vélos sont couvertes : ville, route, VTT, gravel, VAE, cargo, fixie, pliant.

**Progression logic:** La progression suit la chaîne causale de la transmission, pas l'ordre du catalogue. Niveau 1 : tu apprends à LIRE la transmission (nommer, identifier la famille et le groupe, reconnaître les manettes), à l'utiliser correctement (cadence, croisement, passage sans couple) et à faire les deux gestes qui sauvent une sortie (barillet, chaîne déraillée ou rompue) — plus la mesure d'usure de chaîne, seul contrôle chiffré accessible sans outillage. Niveau 2 : tu règles et tu remplaces, dans l'ordre imposé par la mécanique — longueur de chaîne, remplacement de chaîne, PUIS patte de dérailleur (rien ne se règle sur une patte tordue), butées H/L, indexation, vis B, dérailleur avant — puis les pièces tournantes accessibles (cassette, pédalier, plateaux). Chaque sous-réglage du dérailleur arrière est une leçon distincte parce que c'est là que les débutants confondent cause et symptôme. Niveau 3 : tu passes du réglage à la compréhension géométrique et à la révision — ligne de chaîne, boîtier fileté, révision du dérailleur, méthode de diagnostic par élimination, manettes, puis les transmissions alternatives (singlespeed, courroie Gates, moyeux intégrés) qui exigent toutes une maîtrise préalable de la ligne de chaîne et de la tension. Niveau 4 : décisions et systèmes fermés — compatibilités chiffrées (pull ratio, capacité), press-fit, les trois écosystèmes électroniques (Di2 câblé puis configuré, AXS, T-Type/UDH), le service interne des moyeux, et les spécificités VAE dont l'usure accélérée impose ses propres règles. Niveau 5 : craft d'atelier — monter un groupe complet de zéro avec fiche de couples, pousser le rendement au cirage en immersion, et réparer ce que les autres jettent. Les prérequis externes tombent naturellement : couple et filetages (fondamentaux) dès le niveau 2, câbles et gaines (direction-et-périphériques) à l'indexation, corps de cassette (roues-et-pneus) à la dépose de cassette, sécurité batterie (vae) au niveau 4.

## Niveau 1 — Débutant

### 1. Anatomie de la transmission : nommer et identifier `anatomie-transmission`

- **Durée :** 30 min
- **Prérequis :**
  - [T'équiper niveau 1 : le kit débutant et ton coin atelier](fondamentaux.md) `outillage-debutant`
- **Outils :** pied d'atelier, lampe frontale, chiffon, carnet d'atelier, smartphone pour les photos

**Objectifs :**
- Nommer sans hésiter les 14 pièces d'une transmission à dérailleurs
- Distinguer les 4 familles : dérailleurs, moyeu à vitesses intégrées, singlespeed/fixie, courroie
- Compter le nombre de vitesses et calculer le nombre de combinaisons réellement utilisables
- Lire les marquages d'un groupe pour identifier la marque, la série et le nombre de vitesses

**TP — Cartographie de 3 transmissions différentes**

Sur 3 vélos de familles différentes (par exemple un VTT 1×12, un vélo de ville à moyeu Nexus, un vélo de route 2×11), tu photographies et annotes chaque pièce, tu relèves tous les marquages lisibles et tu remplis une fiche d'identification par vélo.

Critères de validation :
1. Les 14 pièces sont nommées correctement sur chaque vélo : au moins 13/14 justes par vélo
2. La famille de transmission est annoncée en moins de 30 s par vélo, avec une justification écrite en une phrase
3. Le nombre de vitesses annoncé correspond au nombre de pignons réellement comptés : 3/3 justes
4. Marque, série et nombre de vitesses relevés depuis les marquages pour au moins 2 des 3 vélos
5. 3 fiches complètes avec photo annotée collées dans le carnet d'atelier

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Guide to Derailleurs & Shifting: Introduction
- doc — Shimano : documentation technique SI, nomenclature et hiérarchie des groupes
- article — Sheldon Brown : glossaire de la transmission (drivetrain, chainring, sprocket)
- doc — Cytech Theory One : module Bicycle Types & Anatomy
- article — Bike Gremlin : identifier un groupe et son nombre de vitesses

### 2. Manettes : reconnaître et utiliser chaque type `manettes-typologie-et-usage`

- **Durée :** 30 min
- **Prérequis :**
  - [Anatomie de la transmission : nommer et identifier](#anatomie-transmission) `anatomie-transmission`
- **Outils :** pied d'atelier, au moins 4 vélos à systèmes de commande différents, clé Allen 4, chronomètre

**Objectifs :**
- Identifier les grandes familles de manettes : Rapidfire Plus, brifter STI, Dual Control, DoubleTap, Ergopower, twist/grip, bar-end, friction, commande électronique
- Utiliser correctement chacune : sens des leviers, multi-passages, retour
- Localiser le barillet de chaque système et comprendre ce qu'il règle
- Distinguer une commande indexée d'une commande à friction

**TP — Circuit d'essai multi-manettes**

Tu passes sur au moins 4 vélos équipés de systèmes de commande différents. Sur chacun : identification du type, parcours de toute la plage de vitesses en montée puis en descente, localisation du barillet, verdict indexé ou friction.

Critères de validation :
1. 4 types de manettes différents essayés et nommés correctement : 4/4
2. Sur chaque vélo, montée puis descente de la totalité des pignons, 2 allers-retours, sans regarder ses mains
3. Position et fonction du barillet localisées sur chacun des 4 systèmes : 4/4
4. Verdict indexé ou friction annoncé et justifié pour chaque manette : 4/4 justes
5. Temps de passage du plus grand au plus petit pignon chronométré : inférieur ou égal à 5 s sur un système à trigger

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : types de manettes et principe de fonctionnement
- video — GCN : How to use your gears
- doc — Shimano : manuel SI Rapidfire Plus, fonctionnement des leviers
- doc — SRAM : principe DoubleTap, un levier deux fonctions
- doc — Campagnolo : utilisation des commandes Ergopower

### 3. Bien utiliser ses vitesses : cadence, anticipation, croisement de chaîne `utiliser-vitesses-cadence-croisement`

- **Durée :** 25 min
- **Prérequis :**
  - [Manettes : reconnaître et utiliser chaque type](#manettes-typologie-et-usage) `manettes-typologie-et-usage`
- **Outils :** vélo à dérailleurs 2× ou 3×, compteur avec capteur de cadence ou chronomètre, parcours avec une bosse identifiée, carnet d'atelier

**Objectifs :**
- Maintenir une cadence de pédalage dans une fourchette cible de 75 à 90 tr/min
- Identifier et éviter les combinaisons croisées qui usent la chaîne et le plateau
- Anticiper le passage avant la rupture de pente plutôt que sous la contrainte
- Relâcher la pression sur les pédales au moment du passage pour ne pas détruire la transmission

**TP — Séance cadence et chasse au croisement**

Environ 30 min de roulage : trois relevés de cadence d'une minute, identification physique des combinaisons croisées interdites sur un 2×, reproduction volontaire puis correction d'un frottement de chaîne sur la fourchette du dérailleur avant, et série de passages anticipés dans une bosse.

Critères de validation :
1. Sur 3 relevés d'une minute, la cadence moyenne tombe dans la fourchette 75-90 tr/min à plus ou moins 5 tr/min près
2. Sur un 2×, les 4 combinaisons croisées à éviter sont identifiées, listées et photographiées
3. 10 passages consécutifs réalisés avec relâchement de la pression : aucun craquement audible
4. Dans la bosse repérée, le passage est déclenché au moins 3 s avant la rupture de pente, 3 fois sur 3
5. Le frottement chaîne/fourchette est reproduit volontairement puis supprimé au trim ou à la manette, sans outil

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — GCN : cadence de pédalage et choix du braquet
- article — Bike Gremlin : cross-chaining, pourquoi et combien ça coûte
- article — Park Tool : principes de passage et usure liée à l'usage
- doc — Shimano : recommandations d'utilisation des combinaisons plateau/pignon

### 4. Mesurer l'usure d'une chaîne (et savoir quand il est déjà trop tard) `usure-chaine-mesure-jauge`

- **Durée :** 25 min
- **Prérequis :**
  - [Anatomie de la transmission : nommer et identifier](#anatomie-transmission) `anatomie-transmission`
- **Outils :** jauge d'usure de chaîne (type CC-3.2 ou CC-4), réglet acier 300 mm, pied à coulisse numérique, chiffon, carnet d'atelier

**Objectifs :**
- Mesurer l'allongement d'une chaîne à la jauge d'usure et au réglet acier (12 maillons = 304,8 mm neufs)
- Interpréter les seuils 0,5 %, 0,75 % et 1 % et les relier au nombre de vitesses
- Décider entre remplacer la chaîne seule ou la chaîne plus la cassette
- Détecter un saut de cassette provoqué par une chaîne remplacée trop tard

**TP — Mesure croisée sur 4 chaînes d'usure différente**

Tu mesures 4 chaînes d'états différents avec deux méthodes indépendantes (jauge et réglet 12 maillons), en trois points répartis sur la chaîne, puis tu rends un verdict de remplacement adapté au nombre de vitesses de chaque vélo.

Critères de validation :
1. Chaque chaîne est mesurée à la jauge ET au réglet sur 12 maillons : écart entre les deux méthodes inférieur à 0,25 %
2. Mesure répétée en 3 points répartis à environ 120° sur la chaîne, écart maximal relevé et consigné
3. Verdict conserver/remplacer cohérent avec le seuil du nombre de vitesses (0,5 % en 11 et 12 vitesses, 0,75 % jusqu'à 10 vitesses) : 4/4
4. Pour toute chaîne mesurée à 0,75 % ou plus, un test de saut est réalisé en tirant sur la chaîne au grand plateau et le résultat est noté
5. Les 4 résultats sont consignés au carnet avec le kilométrage estimé et la décision prise

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Chain wear, utilisation des jauges CC-3.2 et CC-4
- doc — Shimano : manuel SI, critère d'usure de chaîne et outil TL-CN42
- article — Bike Gremlin : chain wear measurement, pourquoi les jauges mentent
- doc — KMC : chain wear indicator et seuils de remplacement
- article — Zero Friction Cycling : mesure d'usure de chaîne, méthodologie de référence

### 5. Pédales : dépose, repose et le piège du pas inversé `pedales-depose-repose-filetage`

- **Durée :** 30 min
- **Prérequis :**
  - [Anatomie de la transmission : nommer et identifier](#anatomie-transmission) `anatomie-transmission`
  - [Visserie : empreintes, filetages et pas inversés](fondamentaux.md) `empreintes-et-filetages`
  - [T'équiper niveau 1 : le kit débutant et ton coin atelier](fondamentaux.md) `outillage-debutant`
- **Outils :** Clé à pédale 15 mm à long bras, Jeu de clés six pans, 6 et 8 mm (branche longue), Clé dynamométrique 10-60 N·m, Brosse laiton et chiffons propres, Dégraissant, Graisse ou antiseize (pâte cuivre/aluminium), Pied d'atelier, Lampe frontale
- **⚠️ Sécurité :**
  - Une pédale serrée « à la main » finit par se dévisser en roulant et arrache le filetage de la manivelle : le couple final est obligatoire, sur les deux côtés.
  - Avec la clé à pédale, pousse toujours de façon à ce que ta main s'éloigne des plateaux : un dérapage sur les dents entaille profondément.

**Objectifs :**
- Identifier à coup sûr la pédale gauche et la pédale droite sans notice, même quand le marquage L/R a disparu
- Expliquer pourquoi la pédale gauche a un filetage à gauche et dans quel sens elle se dévisse
- Choisir le bon outil entre clé à pédale 15 mm et six pans 8 mm et l'utiliser sans marquer la pièce
- Déposer, nettoyer, protéger et reposer une paire de pédales au couple constructeur
- Reconnaître un filetage de manivelle foiré et comprendre comment on en arrive là

**TP — Gauche ou droite, à l'aveugle, sur 5 vélos**

Sur cinq vélos différents (au moins un VTT, un vélo de ville et un VAE), tu identifies chaque pédale sans démonter, puis tu déposes les dix pédales, tu nettoies et protèges les filetages, et tu reposes au couple.

Critères de validation :
1. 1. Identification gauche/droite annoncée avant tout démontage : 10/10 bonnes réponses, en citant à chaque fois le repère utilisé (lettre L/R, sens du filet observé, méplat de clé).
2. 2. Sens de dévissage annoncé correctement pour chaque côté : pédale droite dans le sens antihoraire, pédale gauche dans le sens horaire, 10/10.
3. 3. Dépose des 10 pédales sans arrondir un seul six pans 8 mm et sans marquer un seul méplat 15 mm (contrôle visuel à la lampe).
4. 4. Filetages de manivelle et d'axe brossés au laiton puis dégraissés : aucun copeau ni résidu visible sur toute la longueur du filet, sur les 10 interfaces.
5. 5. Film continu de graisse ou d'antiseize sur les 10 filetages, sans coulure sur la face extérieure de la manivelle.
6. 6. Engagement à la main sur au moins 3 tours complets avant de toucher la clé, vérifié sur les 10 pédales (règle anti-foirage).
7. 7. Serrage final à 35 N·m ±10 % (31,5 à 38,5 N·m) à la clé dynamométrique, sauf valeur constructeur différente relevée et appliquée.
8. 8. Après 10 minutes de pédalage en charge, aucun claquement et aucun jeu détectable en tirant sur la pédale perpendiculairement à l'axe.

**TP — Autopsie d'un filetage foiré**

Sur trois manivelles de vélos cobayes dont une volontairement abîmée, tu classes l'état de chaque filetage et tu expliques le scénario qui l'a détruit.

Critères de validation :
1. 1. Classement des 3 filetages en « sain », « à retarauder », « mort » : 3/3 conformes au corrigé de l'atelier.
2. 2. Pour le filetage abîmé, description du scénario en 4 étapes maximum (mauvais côté, engagement de travers, clé utilisée trop tôt, effort maintenu).
3. 3. Démonstration du test manuel : la pédale saine se visse à la main sur au moins 3 tours sans effort ; le filetage douteux bloque avant 2 tours.
4. 4. Décision argumentée pour la manivelle abîmée : retaraudage, filet rapporté ou remplacement, avec renvoi explicite à la leçon de réparation de filetage.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : dépose et repose de pédales, filetage gauche à gauche
- doc — Shimano Dealer's Manual : couples de serrage des pédales et usage de l'outil TL-PD
- article — Sheldon Brown : filetages de pédales, pas inversé et manivelles foirées
- livre — Lennard Zinn : Zinn and the Art of Bicycle Maintenance — pédales et manivelles
- article — Matos Vélo : sauver un filetage de manivelle abîmé

## Niveau 2 — Intermédiaire

### 1. Calculer la longueur de chaîne `chaine-longueur-calcul`

- **Durée :** 35 min
- **Prérequis :**
  - [Mesurer l'usure d'une chaîne (et savoir quand il est déjà trop tard)](#usure-chaine-mesure-jauge) `usure-chaine-mesure-jauge`
  - [Déposer et reposer une roue : serrage rapide, axe traversant, écrous](roues-et-pneus.md) `depose-repose-roue`
- **Outils :** dérive-chaîne d'atelier, réglet acier, pied d'atelier, carnet d'atelier, chaîne neuve

**Objectifs :**
- Appliquer la méthode grand plateau / grand pignon + 2 maillons
- Appliquer la méthode par capacité de chape (wrap capacity) et la comparer à la première
- Adapter le calcul aux cas particuliers : 1×, VTT tout-suspendu (mesure amortisseur comprimé), chapes courtes/longues
- Vérifier le résultat avant de couper : nombre de maillons pair, chape ni en butée ni affaissée

**TP — Trois calculs, trois vélos**

Tu calcules la longueur de chaîne sur trois vélos de configurations différentes (un 2× route, un 1× VTT tout-suspendu, un 3× de randonnée) par les deux méthodes, tu compares les résultats, tu coupes et tu contrôles le comportement de la chape aux deux extrêmes.

Critères de validation :
1. Sur le 2× route : longueur obtenue par les deux méthodes, écart inférieur ou égal à 1 maillon
2. Sur le tout-suspendu : mesure effectuée amortisseur comprimé (axe de roue à sa distance maximale), procédure justifiée par écrit
3. Nombre de maillons toujours pair, vérifié avant toute coupe : 3/3
4. En grand plateau / grand pignon, la chape du dérailleur arrière n'est pas en butée (jeu angulaire visible)
5. En petit plateau / petit pignon, la chaîne ne touche pas la chape et le galet tendeur reste au moins 1 cm au-dessus de la position d'affaissement
6. Les 3 longueurs sont consignées en nombre de maillons dans le carnet, avec le modèle de dérailleur associé

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : Chain length sizing, méthodes et cas particuliers
- doc — Shimano : dealer manual, procédure de détermination de longueur de chaîne
- doc — SRAM : Eagle chain length et chain gap
- article — BikeRadar : how to size a bike chain
- article — Bike Gremlin : chain length calculation, formule et vérifications

### 2. Remplacer une chaîne : dérive-chaîne, attache rapide, rivet `chaine-remplacement`

- **Durée :** 40 min
- **Prérequis :**
  - [Calculer la longueur de chaîne](#chaine-longueur-calcul) `chaine-longueur-calcul`
  - savoir travailler proprement et consigner ses interventions au carnet d'atelier *(fondamentaux)*
- **Outils :** dérive-chaîne d'atelier, pince à attache rapide, chaîne neuve, attache rapide neuve du bon nombre de vitesses, rivet Shimano à ampoule, gants nitrile, dégraissant, chiffons
- **⚠️ Sécurité :**
  - Une attache rapide SRAM PowerLock 11 et 12 vitesses est à usage unique : la rouvrir puis la réutiliser, c'est programmer une rupture de chaîne en danseuse, avec le guidon dans les dents.

**Objectifs :**
- Déposer une chaîne usée sans abîmer les plaques latérales voisines
- Couper une chaîne neuve à la longueur calculée avec un dérive-chaîne d'atelier
- Fermer une chaîne à l'attache rapide (KMC MissingLink, SRAM PowerLock, Shimano Quick-Link) ou au rivet Shimano à ergot
- Respecter le sens de montage des chaînes directionnelles 11 et 12 vitesses

**TP — Remplacement complet et contrôle final**

Tu remplaces la chaîne d'un vélo en réel : mesure de l'ancienne, coupe de la neuve à la longueur calculée, fermeture par attache rapide sur un vélo et par rivet Shimano sur un second, puis validation en charge sur toute la cassette.

Critères de validation :
1. Chaîne coupée à la longueur calculée : nombre de maillons exactement conforme au calcul, tolérance zéro
2. Attache rapide verrouillée : clic audible, test de traction ferme, aucun jeu perceptible au maillon
3. Sens de montage respecté sur chaîne directionnelle (marquage lisible côté extérieur), vérifié en photo
4. Rivet Shimano : ergot cassé net, maillon souple après flexion latérale, aucun point dur en rotation
5. Essai final : 3 allers-retours complets sur toute la cassette, aucun saut ni bruit anormal
6. Ancienne chaîne mesurée avant dépose et son taux d'usure consigné au carnet

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Chain replacement, dérive-chaîne et attache rapide
- doc — Shimano : manuel SI, pose du rivet renforcé et de l'attache Quick-Link SM-CN900
- doc — SRAM : PowerLock, attache à usage unique, procédure de pose
- doc — KMC : MissingLink, réutilisable ou non selon le modèle
- article — Bike Gremlin : chain installation, erreurs classiques

### 3. Patte de dérailleur : contrôle visuel, standards et UDH `patte-derailleur-controle-visuel`

- **Durée :** 35 min
- **Prérequis :**
  - [Déposer et reposer une roue : serrage rapide, axe traversant, écrous](roues-et-pneus.md) `depose-repose-roue`
  - [Étalonne ta main : pratique délibérée du couple](fondamentaux.md) `etalonnage-sensoriel-couple`
- **Outils :** outil d'alignement de patte (type DAG-2.2), jeu de clés Allen, patte de rechange, réglet acier, pied d'atelier
- **⚠️ Sécurité :**
  - Une patte alu redressée deux fois casse un jour sous effort et envoie le dérailleur dans les rayons : roue détruite, blocage instantané de la roue arrière, chute. Au moindre doute, tu remplaces.

**Objectifs :**
- Reconnaître une patte tordue à l'œil puis la quantifier à l'outil d'alignement
- Mesurer l'écart en quatre positions angulaires et corriger progressivement
- Décider entre redressage et remplacement selon le matériau, l'historique et le type de patte
- Identifier une patte UDH et comprendre pourquoi elle change la donne

**TP — Mesure en quatre points et correction**

Sur un vélo dont la patte a été volontairement faussée, tu relèves l'écart à l'outil d'alignement en quatre positions (12 h, 3 h, 6 h, 9 h), tu corriges par petites passes, tu revérifies et tu rends une décision documentée redressage ou remplacement.

Critères de validation :
1. Écart relevé en mm dans les 4 positions angulaires avant toute intervention et consigné
2. Après correction, écart maximal entre les 4 positions inférieur ou égal à 2 mm, avec objectif 1 mm sur cadre acier ou patte alu forgée
3. Roue reposée : galet supérieur parallèle au plan de la cassette, contrôlé visuellement sur le plus petit ET le plus grand pignon
4. Décision redressage/remplacement écrite, avec matériau de la patte identifié et historique pris en compte
5. Vis de fixation de la patte serrées au couple constructeur, aucun jeu perceptible après essai

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Derailleur hanger alignment avec le DAG-2.2
- article — Park Tool : Derailleur Hanger Alignment, article de référence
- doc — Wheels Manufacturing : identification des pattes de dérailleur par référence
- doc — SRAM : spécification UDH, patte universelle
- article — Bike Gremlin : derailleur hanger, contrôle et redressage

### 4. Régler les butées H et L d'un dérailleur arrière `derailleur-arriere-butees-h-l`

- **Durée :** 30 min
- **Prérequis :**
  - [Patte de dérailleur : contrôle visuel, standards et UDH](#patte-derailleur-controle-visuel) `patte-derailleur-controle-visuel`
  - [Visserie : empreintes, filetages et pas inversés](fondamentaux.md) `empreintes-et-filetages`
- **Outils :** tournevis JIS n°2, jeu de clés Allen, pied d'atelier, lampe, réglet
- **⚠️ Sécurité :**
  - Une butée L mal réglée envoie la chaîne et le dérailleur entre la cassette et les rayons : roue détruite et blocage brutal. Le contrôle se fait toujours à la main, roue levée, avant de rouler.

**Objectifs :**
- Expliquer le rôle mécanique des butées et pourquoi elles se règlent câble détendu
- Régler la butée H pour aligner le galet supérieur sous le plus petit pignon
- Régler la butée L pour atteindre le plus grand pignon sans jamais entrer dans les rayons
- Reconnaître une vis JIS et utiliser le tournevis adapté sans l'abîmer

**TP — Réglage des butées à câble déposé**

Tu déposes le câble de dérailleur, tu règles la butée H sur le plus petit pignon puis la butée L en poussant la chape à la main jusqu'au plus grand pignon, et tu valides par une série de poussées manuelles en butée basse.

Critères de validation :
1. Câble de dérailleur déposé ou totalement desserré avant réglage, vérifié avant de commencer
2. Butée H : galet supérieur à l'aplomb du plus petit pignon, écart latéral inférieur ou égal à 0,5 mm au contrôle visuel de face
3. Butée L : en poussant la chape à fond à la main, la chaîne monte sur le plus grand pignon sans jamais dépasser vers les rayons, marge intérieure inférieure ou égale à 1 mm
4. Aucune trace de cam-out ni d'arrondi sur les vis H et L après réglage, contrôlé à la loupe
5. 10 poussées manuelles de la chape en butée basse consécutives sans déraillement côté rayons

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : Rear Derailleur Adjustment, butées H et L
- doc — Shimano : dealer manual, procédure de réglage des butées
- article — Bike Gremlin : Phillips, JIS and Pozidriv screwdrivers explained
- video — GCN : rear derailleur limit screws expliqués

### 5. Dépanner sa transmission sur la route `depannage-transmission-sur-route`

- **Durée :** 30 min
- **Prérequis :**
  - [Mesurer l'usure d'une chaîne (et savoir quand il est déjà trop tard)](#usure-chaine-mesure-jauge) `usure-chaine-mesure-jauge`
  - [Remplacer une chaîne : dérive-chaîne, attache rapide, rivet](#chaine-remplacement) `chaine-remplacement`
- **Outils :** multi-outil avec dérive-chaîne intégré, attache rapide de secours au bon nombre de vitesses, pince à attache rapide compacte, gants jetables, chronomètre

**Objectifs :**
- Corriger un passage hésitant au barillet, dans le bon sens, par quarts de tour
- Remettre une chaîne déraillée côté plateau sans outil et sans se salir
- Réparer une chaîne rompue avec une attache rapide de secours et un mini dérive-chaîne
- Neutraliser un dérailleur hors service et transformer le vélo en singlespeed de secours

**TP — Kit de secours et trois pannes simulées**

Un binôme introduit trois pannes sur ton vélo (chaîne déraillée, chaîne rompue, barillet désaxé de deux tours), plus une simulation de dérailleur hors service. Tu répares tout avec le seul contenu de ta sacoche, puis tu pèses et listes ton kit final.

Critères de validation :
1. Chaîne déraillée côté plateau remise en place en moins de 60 s, sans outil
2. Chaîne rompue volontairement puis réparée à l'attache rapide en moins de 8 min, vélo roulant ensuite 500 m sans saut
3. Passage hésitant introduit (barillet désaxé de 2 tours) puis corrigé en 6 clics de barillet maximum
4. Dérailleur simulé hors service : chaîne raccourcie, vélo transformé en singlespeed de secours et roulé sur 200 m
5. Kit de secours final pesé et listé : 200 g maximum, contenant une attache rapide compatible avec le nombre de vitesses du vélo

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : master link / quick link, pose et dépose sur le terrain
- video — GCN : roadside repairs, chaîne cassée et dérailleur HS
- article — Bike Gremlin : réparation d'urgence de la transmission
- article — Sheldon Brown : emergency singlespeed, raccourcir une chaîne en dépannage

### 6. Indexer un dérailleur arrière (tension de câble) `derailleur-arriere-indexation`

- **Durée :** 40 min
- **Prérequis :**
  - [Régler les butées H et L d'un dérailleur arrière](#derailleur-arriere-butees-h-l) `derailleur-arriere-butees-h-l`
  - [Câbles et gaines : matériaux, coupe parfaite et routage externe](direction-et-peripheriques.md) `cables-gaines-routage-externe`
- **Outils :** pince coupe-câble de qualité, clés Allen 4 et 5, tournevis, embouts de câble, pied d'atelier, lubrifiant fluide

**Objectifs :**
- Poser un câble de dérailleur sans mou et sans effilochage
- Trouver la tension de départ par la méthode du deuxième pignon
- Affiner au barillet par quarts de tour en déduisant le sens de correction du bruit entendu
- Valider l'indexation en montée ET en descente sur toute la cassette, en charge

**TP — Indexation complète et validation en trois allers-retours**

Tu poses un câble neuf, tu tends, tu indexes par la méthode du deuxième pignon, tu affines au barillet, puis tu valides en charge sur toute la cassette et tu recontrôles après vingt tours de pédale pour détecter le retassement du câble.

Critères de validation :
1. Passage net sur la totalité des pignons, montée ET descente, 3 allers-retours consécutifs
2. Aucun pignon ne demande plus d'un clic pour monter, aucun retard supérieur à un coup de pédale
3. Aucun bruit de frottement résiduel sur les 3 pignons centraux, en pédalant en charge
4. Barillet laissé avec au moins 2 tours de réserve de réglage dans chaque sens
5. Contrôle répété après 20 tours de pédale en charge : réglage inchangé, sinon reprise et nouveau contrôle
6. Câble coupé net, embout serti, longueur résiduelle comprise entre 15 et 20 mm

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : Rear Derailleur Adjustment, tension de câble et indexation
- video — Park Tool : Guide to Derailleurs & Shifting
- doc — Shimano : dealer manual, réglage de l'indexation et du barillet
- article — Bike Gremlin : rear derailleur indexing step by step
- video — GCN : how to index your gears perfectly

### 7. Régler la vis B (écart galet-cassette) `derailleur-arriere-vis-b`

- **Durée :** 25 min
- **Prérequis :**
  - [Indexer un dérailleur arrière (tension de câble)](#derailleur-arriere-indexation) `derailleur-arriere-indexation`
- **Outils :** tournevis ou clé Allen selon modèle, gabarit de B-gap constructeur, cales calibrées 5 et 6 mm, pied d'atelier

**Objectifs :**
- Expliquer l'effet du B-tension sur la netteté du passage et l'enroulement de la chaîne
- Régler l'écart galet supérieur / plus grand pignon selon la spécification constructeur
- Utiliser un gabarit de B-gap ou une cale calibrée plutôt que l'œil
- Contrôler l'écart sur le plus grand ET le plus petit pignon, et après changement de roue

**TP — Réglage de la vis B et mesure de son effet**

Tu mesures l'écart galet-cassette à la cale avant intervention, tu comptes le nombre de coups de pédale nécessaires pour monter sur le grand pignon, tu règles la vis B à la spec constructeur puis tu remesures les deux grandeurs.

Critères de validation :
1. Écart entre le galet supérieur et le plus grand pignon mesuré à la cale : conforme à la spécification constructeur à plus ou moins 0,5 mm
2. Contrôle sur le plus petit pignon : la chaîne ne frotte pas sur le galet, écart supérieur ou égal à 2 mm
3. Avant/après : le nombre de coups de pédale pour monter sur le plus grand pignon passe de 2 ou plus à 1
4. Chaîne enroulée sur au moins 3 dents du plus grand pignon, contrôle visuel photographié
5. Réglage recontrôlé après montage d'une roue différente : écart reconstaté puis corrigé, valeurs consignées

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : B-tension screw adjustment
- doc — Shimano : dealer manual, valeur de B-gap par groupe
- doc — SRAM : chain gap gauge, procédure de réglage
- article — BikeRadar : what the B-screw actually does

### 8. Régler un dérailleur avant `derailleur-avant-reglage`

- **Durée :** 40 min
- **Prérequis :**
  - [Indexer un dérailleur arrière (tension de câble)](#derailleur-arriere-indexation) `derailleur-arriere-indexation`
  - [Graisse, pâte carbone, frein-filet, antiseize : quoi, où, pourquoi](fondamentaux.md) `pates-assemblage`
- **Outils :** jeu de clés Allen, tournevis JIS, réglet acier, pince coupe-câble, clé dynamométrique 2-14 N·m, pied d'atelier

**Objectifs :**
- Positionner un dérailleur avant en hauteur et en angle par rapport au grand plateau
- Régler les butées L et H avec les jeux latéraux corrects
- Tendre le câble et utiliser le trim pour supprimer les frottements aux extrêmes
- Adapter la procédure aux fixations collier, braze-on et direct mount, en top-pull comme en bottom-pull

**TP — Dépose, repose et réglage complet d'un dérailleur avant 2×**

Tu déposes un dérailleur avant, tu le reposes en réglant hauteur puis angle, tu règles les deux butées avec les jeux mesurés au réglet, tu tends le câble et tu valides par des passages montants en charge.

Critères de validation :
1. Hauteur : écart entre le bas de la fourchette extérieure et le sommet des dents du grand plateau compris entre 1 et 3 mm, mesuré au réglet
2. Angle : fourchette parallèle au plateau, écart visuel inférieur ou égal à 1 mm sur toute la longueur de la fourchette
3. Butée L : jeu de 0,5 à 1 mm entre chaîne et fourchette intérieure, en petit plateau / grand pignon
4. Butée H : jeu de 0,5 à 1 mm entre chaîne et fourchette extérieure, en grand plateau / petit pignon
5. Passage montant sur le grand plateau réussi 5 fois sur 5 en charge, sans déraillement par-dessus
6. Trim utilisé pour supprimer tout frottement sur les deux pignons extrêmes, vérifié à l'oreille
7. Collier ou vis de fixation serrés au couple constructeur, contrôlé à la clé dynamométrique

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : Front Derailleur Adjustment
- doc — Shimano : dealer manual dérailleur avant, hauteur et angle
- doc — SRAM : front derailleur installation and adjustment
- video — GCN : how to set up a front derailleur
- article — Bike Gremlin : front derailleur types and adjustment

### 9. Déposer et reposer une cassette `cassette-depose-repose`

- **Durée :** 30 min
- **Prérequis :**
  - [Déposer et reposer une roue : serrage rapide, axe traversant, écrous](roues-et-pneus.md) `depose-repose-roue`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
- **Outils :** fouet à chaîne, démonte-cassette adapté au corps, clé plate 24 mm ou cliquet, clé dynamométrique 10-60 N·m, graisse, chiffons, appareil photo

**Objectifs :**
- Identifier le type de corps de cassette avant de choisir l'outil
- Utiliser correctement fouet à chaîne, démonte-cassette et clé
- Restituer l'ordre exact des pignons, araignées et entretoises
- Serrer le lockring au couple constructeur et contrôler l'absence de jeu

**TP — Dépose et repose sur deux corps de cassette différents**

Tu déposes et reposes une cassette sur deux roues à corps différents (par exemple HG et XD ou Microspline), en photographiant l'empilage avant démontage, en nettoyant et graissant les cannelures et en serrant au couple.

Critères de validation :
1. Type de corps identifié correctement avant démontage : 2/2, outil choisi juste du premier coup
2. Ordre des pignons et entretoises photographié avant dépose puis restitué à l'identique, contrôle par comparaison photo
3. Cannelures du corps et filetage du lockring nettoyés puis graissés : film visible, sans excès dégoulinant
4. Lockring serré au couple constructeur, typiquement de l'ordre de 40 N·m, à plus ou moins 10 %, contrôlé à la clé dynamométrique
5. Après repose : aucun jeu latéral perceptible à la main sur le plus grand pignon
6. Cannelure large de détrompage alignée : la cassette entre sans forcer sur toute sa hauteur

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Cassette removal and installation
- doc — Shimano : manuel SI, couple de serrage du lockring et ordre des pignons
- doc — SRAM : XD et XDR driver body, installation de cassette
- article — Bike Gremlin : cassette and freehub types

### 10. Déposer et reposer un pédalier `pedalier-depose-repose`

- **Durée :** 40 min
- **Prérequis :**
  - [Visserie : empreintes, filetages et pas inversés](fondamentaux.md) `empreintes-et-filetages`
  - [Mesurer et décoder : pied à coulisse et marquages](fondamentaux.md) `pied-a-coulisse-et-marquages`
- **Outils :** clés Allen 8 et 10, extracteur de manivelle carré/ISIS, outil de précharge Hollowtech, clé dynamométrique 10-60 N·m, maillet plastique, graisse, antiseize, chiffons

**Objectifs :**
- Identifier l'interface manivelle/axe : carré, Octalink, ISIS, Hollowtech II, GXP, DUB, axe intégré
- Choisir et utiliser le bon outil : extracteur, outil de précharge, boulon auto-extractible
- Régler la précharge pour supprimer le jeu sans créer de point dur
- Serrer chaque fixation au couple constructeur et graisser les portées correctement

**TP — Dépose et repose sur deux interfaces différentes**

Tu interviens sur deux pédaliers d'interfaces différentes (par exemple un carré conique et un Hollowtech II ou DUB) : identification avant démontage, dépose, nettoyage, graissage, repose et réglage de précharge.

Critères de validation :
1. Interface identifiée avant démontage : 2/2 justes, outil choisi correct du premier coup
2. Après repose, aucun jeu latéral détecté en tirant sur les manivelles à deux mains : 0 mm perceptible
3. Rotation libre : la manivelle lancée à la main effectue au moins un tour complet sans point dur
4. Couples respectés et contrôlés à plus ou moins 10 % : boulons de cuvette gauche Hollowtech II typiquement 12-14 N·m, boulon de manivelle sur carré typiquement 35-40 N·m
5. Portées et filets nettoyés puis graissés ou traités à l'antiseize selon le matériau, choix justifié par écrit
6. Manivelles à 180° exactement, contrôlé au réglet, aucune manivelle montée côté opposé

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Crank removal and installation, tous types d'interfaces
- doc — Shimano : dealer manual Hollowtech II, précharge et couples
- doc — SRAM : DUB crankset installation, préload spacer
- article — Bike Gremlin : crank and spindle interfaces explained
- doc — Campagnolo : Ultra-Torque, montage et réglage du jeu

### 11. Remplacer des plateaux `plateaux-remplacement`

- **Durée :** 35 min
- **Prérequis :**
  - [Déposer et reposer un pédalier](#pedalier-depose-repose) `pedalier-depose-repose`
  - [Mesurer et décoder : pied à coulisse et marquages](fondamentaux.md) `pied-a-coulisse-et-marquages`
- **Outils :** clé de maintien pour écrous de plateau, clé Allen 5 ou Torx T30, pied à coulisse numérique, clé dynamométrique 2-14 N·m, frein-filet moyen, dégraissant, comparateur ou référence fixe

**Objectifs :**
- Mesurer un entraxe (BCD) et compter les branches pour identifier un plateau
- Distinguer plateau 1× narrow-wide, direct mount 3 branches, plateaux 2× à rampes et ergots
- Respecter l'orientation de montage, notamment l'ergot anti-déraillement derrière la manivelle
- Serrer les vis de plateau au couple, en étoile, avec le frein-filet prescrit
- Diagnostiquer l'usure d'un plateau à la forme des dents

**TP — Mesure d'entraxe et remplacement de plateau**

Tu mesures le BCD d'un plateau au pied à coulisse et tu le recalcules par la formule du nombre de branches, tu remplaces un plateau 2× et un plateau 1× narrow-wide, puis tu contrôles voile et tenue de chaîne.

Critères de validation :
1. BCD mesuré au pied à coulisse puis recalculé par la formule : écart inférieur à 0,5 mm par rapport à la valeur constructeur
2. Orientation correcte : ergot ou goupille anti-déraillement positionné derrière la manivelle, contrôlé en photo
3. Vis de plateau serrées en étoile au couple du manuel, à plus ou moins 10 %, contrôlé à la clé dynamométrique
4. Voile latéral du plateau inférieur ou égal à 0,5 mm sur un tour complet, mesuré au comparateur ou par référence fixe
5. Sur le montage 1× : 20 tours de pédale en charge plus 10 tours en marche arrière, sans perte de chaîne
6. Usure des anciens plateaux documentée en photo (dents crochues, profil en vague) avec verdict écrit

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : Chainring removal and installation, mesure du BCD
- doc — Wolf Tooth : narrow-wide chainring, principe et limites
- doc — SRAM : direct mount 3-bolt chainring, couple et orientation
- doc — Shimano : manuel SI, couples des vis de plateau et rampes de passage
- article — Bike Gremlin : chainring wear and BCD measurement

### 12. Pédales automatiques : SPD, Look, Time, SPD-SL et plates à broches `pedales-automatiques-typologie`

- **Durée :** 35 min
- **Prérequis :**
  - [Pédales : dépose, repose et le piège du pas inversé](#pedales-depose-repose-filetage) `pedales-depose-repose-filetage`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
  - [Mesurer et décoder : pied à coulisse et marquages](fondamentaux.md) `pied-a-coulisse-et-marquages`
- **Outils :** Jeu de clés six pans 3, 4, 5 mm et torx T20/T25, Tournevis plat et cruciforme, Clé dynamométrique 2-20 N·m, Cales neuves et cales usées de référence, Réglet, rapporteur ou gabarit d'angle, Marqueur fin ou ruban de masquage, Chaussures compatibles, Home-trainer ou mur d'appui
- **⚠️ Sécurité :**
  - Apprends le déchaussage à l'arrêt, appuyé contre un mur ou sur home-trainer : la chute typique du débutant se produit à 0 km/h, pied resté bloqué.
  - Tension de déchaussage réglée trop fort = pied prisonnier en cas de chute. Commence à la tension mini et augmente d'un cran à la fois.
  - Une cale usée au-delà de son témoin déchausse toute seule en danseuse : c'est un déclencheur classique de chute, on remplace, on ne temporise pas.

**Objectifs :**
- Reconnaître les grands systèmes de pédales automatiques et associer chacun à sa cale
- Expliquer ce qu'est la liberté angulaire (float) et pourquoi elle protège tes genoux
- Régler la tension de déchaussage de façon symétrique et adaptée à ton niveau
- Choisir entre plates à broches, hybride et automatique selon l'usage réel du vélo
- Repérer une cale usée avant qu'elle ne te lâche en danseuse

**TP — Appariement à l'aveugle : 5 pédales, 5 cales**

Cinq paires pédale/cale mélangées sur l'établi (SPD, SPD-SL, Look Keo, Time ATAC, Crankbrothers), plus six cales dont deux usées. Tu apparies, tu nommes, tu tries.

Critères de validation :
1. 1. Appariement pédale/cale correct 5/5, en moins de 5 minutes chrono.
2. 2. Nom du système énoncé pour chacun des 5, plus son domaine d'usage typique (VTT/gravel à cale encastrée vs route à cale saillante) : 5/5.
3. 3. Liberté angulaire annoncée pour chaque cale à partir de son code ou de sa couleur (par exemple 0°, 4,5°, 6°, 9°) : 5/5, valeur vérifiée dans la doc constructeur.
4. 4. Sur les 6 cales, les 2 usées sont identifiées 2/2, avec justification chiffrée ou visuelle (témoin d'usure atteint, arête arrondie, jeu latéral > 2 mm une fois chaussée).
5. 5. Verdict d'usage rendu pour 3 vélos réels : plates à broches, hybride ou automatique, avec un argument technique par vélo (marche à pied, ville, rendement, technicité).

**TP — Symétrie de tension et mesure du float**

Sur une paire d'automatiques, tu remets les deux ressorts à zéro, tu règles une tension identique des deux côtés, puis tu mesures la liberté angulaire réelle et tu t'entraînes au déchaussage.

Critères de validation :
1. 1. Les deux vis de tension ramenées en butée mini puis remontées du même nombre de crans : écart final ≤ 1 cran entre gauche et droite, comptage annoncé à voix haute.
2. 2. Symétrie contrôlée aussi côté opposé pour les pédales double face : les 4 faces réglées, écart ≤ 1 cran.
3. 3. Liberté angulaire mesurée chaussure en place, talon déplacé jusqu'au point dur : valeur relevée à ±1° de la valeur annoncée par le constructeur.
4. 4. Déchaussage réussi 10 fois d'affilée de chaque pied sur home-trainer ou contre un mur, en moins de 0,5 s à chaque fois, sans regarder la pédale.
5. 5. Chaussage réussi 10 fois d'affilée par pied en moins de 2 s, sans reprise à la main.
6. 6. Vis de cales serrées au couple constructeur (souvent 4 à 6 N·m) à la dynamométrique, et position d'origine repérée au marqueur avant tout démontage.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Shimano : cales SPD SM-SH51/SH56 et SPD-SL SM-SH10/11/12, différences de dégagement
- doc — Look Cycle : cales Keo, liberté angulaire par couleur et réglage de la tension
- doc — Time Sport : système ATAC, float angulaire et latéral
- doc — Crankbrothers : cales premium, angle de relâchement 15°/20° et usure
- video — Park Tool : installation et réglage de cales de pédales automatiques
- article — Matos Vélo : comparatif des systèmes de pédales automatiques par usage

## Niveau 3 — Avancé

### 1. Mesurer et corriger la ligne de chaîne `ligne-de-chaine`

- **Durée :** 40 min
- **Prérequis :**
  - [Déposer et reposer un pédalier](#pedalier-depose-repose) `pedalier-depose-repose`
  - [Remplacer des plateaux](#plateaux-remplacement) `plateaux-remplacement`
  - [Mesurer et décoder : pied à coulisse et marquages](fondamentaux.md) `pied-a-coulisse-et-marquages`
- **Outils :** pied à coulisse numérique, réglet acier, jeu d'entretoises de boîtier, spacer de cassette 1,85 mm, fil à plomb ou cordeau, pied d'atelier

**Objectifs :**
- Définir la ligne de chaîne avant et arrière et savoir depuis quel plan on mesure
- Mesurer une ligne de chaîne au pied à coulisse et au réglet, de façon répétable
- Situer les valeurs de référence selon le type de vélo : route, VTT Boost et non-Boost, Super Boost, singlespeed
- Corriger un écart par entretoises de boîtier, axe de longueur différente, plateau à offset ou spacer de cassette

**TP — Relevé de ligne de chaîne sur trois vélos et correction d'un cas**

Tu mesures la ligne de chaîne avant et arrière sur trois vélos de familles différentes, tu compares chaque valeur à la spécification constructeur, puis tu corriges le vélo le plus décalé par entretoises ou changement de plateau et tu valides fonctionnellement.

Critères de validation :
1. Ligne de chaîne avant mesurée sur 3 vélos, deux mesures successives par vélo avec écart inférieur ou égal à 1 mm
2. Valeur relevée comparée à la spécification constructeur, écart annoncé en mm et interprété par écrit
3. Ligne de chaîne arrière (milieu de cassette) mesurée et écart avant/arrière calculé pour les 3 vélos
4. Sur le vélo corrigé : écart ramené à 1,5 mm maximum de la cible après intervention
5. Contrôle fonctionnel : sur 1×, aucun frottement chaîne/plateau ni au plus petit ni au plus grand pignon ; sur 2×, aucun trim nécessaire au milieu de cassette
6. Aucune modification n'a créé de contact manivelle/base : jeu mesuré supérieur ou égal à 3 mm

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : Chainline, définition et mesure
- doc — SRAM : Boost chainline 52 mm, spécification et compatibilités
- doc — Shimano : manuel SI, spécification de ligne de chaîne par groupe
- article — Sheldon Brown : chainline, calcul et cas du singlespeed
- article — Bike Gremlin : chainline explained and how to fix it

### 2. Boîtiers filetés : identifier et remplacer (BSA, italien, T47) `boitier-pedalier-filete`

- **Durée :** 45 min
- **Prérequis :**
  - [Déposer et reposer un pédalier](#pedalier-depose-repose) `pedalier-depose-repose`
  - [Graisse, pâte carbone, frein-filet, antiseize : quoi, où, pourquoi](fondamentaux.md) `pates-assemblage`
- **Outils :** outils de boîtier adaptés (type BBT-9, BBT-69, outil T47), clé dynamométrique 10-60 N·m, pied à coulisse numérique, graisse, antiseize, brosse laiton, dégraissant

**Objectifs :**
- Identifier un boîtier fileté par mesure : BSA 1,37" × 24 TPI, italien 36 × 24, français, T47 (M47 × 1,0)
- Mesurer la largeur de coquille (68, 70, 73, 83, 86 mm) et en déduire l'entretoisage
- Annoncer le sens de dévissage avant d'appliquer l'effort, y compris le pas inversé côté transmission en BSA
- Déposer, nettoyer, graisser et reposer un boîtier au couple, puis diagnostiquer un roulement en fin de vie

**TP — Dépose et repose de deux boîtiers filetés**

Tu identifies par mesure deux boîtiers filetés de standards différents, tu annonces le sens de dévissage avant d'agir, tu déposes, tu nettoies les filets, tu reposes au couple et tu diagnostiques l'état des roulements retirés.

Critères de validation :
1. Standard identifié par mesure du diamètre au pied à coulisse et de la largeur de coquille : 2/2 justes avant tout démontage
2. Sens de dévissage annoncé avant d'appliquer l'effort : 2/2 justes, y compris le pas à gauche côté transmission sur BSA
3. Filets nettoyés à la brosse et graisse ou antiseize appliqué sur toute la longueur du filet
4. Serrage au couple du manuel, typiquement 35 à 50 N·m, à plus ou moins 10 %, contrôlé à la clé dynamométrique
5. Après repose : rotation libre de l'axe sans point dur et aucun jeu latéral perceptible
6. État de chaque roulement déposé diagnostiqué (jeu, rugosité, corrosion) avec verdict écrit et photo

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : Bottom Bracket Standards and Terminology
- article — Park Tool : Bottom Bracket Identification
- doc — Shimano : dealer manual Hollowtech II, couples de cuvettes
- doc — Chris King : T47 standard, tolérances et installation
- article — Bike Gremlin : bottom bracket standards, thread directions

### 3. Entretenir ou remplacer un dérailleur arrière `derailleur-arriere-entretien-remplacement`

- **Durée :** 40 min
- **Prérequis :**
  - [Indexer un dérailleur arrière (tension de câble)](#derailleur-arriere-indexation) `derailleur-arriere-indexation`
  - [Régler la vis B (écart galet-cassette)](#derailleur-arriere-vis-b) `derailleur-arriere-vis-b`
  - [Cartographie complète de la visserie d'un vélo](fondamentaux.md) `cartographie-visserie`
- **Outils :** clés Allen 2, 2.5, 3 et 5, tournevis Torx T25, galets de rechange, dégraissant, graisse, lubrifiant fluide, clé dynamométrique 2-14 N·m, réglet

**Objectifs :**
- Déposer, nettoyer et remonter les galets guide et tension dans le bon sens
- Nettoyer et lubrifier le parallélogramme et le ressort de chape sans noyer les axes
- Mesurer le jeu des axes du parallélogramme et décider entretien ou remplacement
- Régler et tester un embrayage de chape (Shadow+, Type 2/3, Orbit)

**TP — Révision complète et test d'embrayage**

Tu révises un dérailleur arrière : dépose et remontage des galets dans le bon sens, nettoyage du parallélogramme, mesure du jeu en bout de chape, réglage puis test de l'embrayage, et revalidation de l'indexation.

Critères de validation :
1. Galets déposés, nettoyés, remontés dans le sens indiqué par les repères et vissés au couple du manuel, typiquement 2 à 4 N·m
2. Jeu latéral du parallélogramme mesuré en bout de chape avant et après : inférieur ou égal à 1 mm, sinon dérailleur déclaré à remplacer
3. Rotation des galets après remontage : au moins 2 tours libres à la chiquenaude
4. Embrayage activé : résistance de rappel de chape constatée et consignée ; désactivé pour la dépose de roue puis réactivé
5. Indexation revalidée après remontage : 3 allers-retours nets sur toute la cassette
6. Vis de fixation sur patte serrée au couple constructeur, typiquement 8 à 10 N·m, à plus ou moins 10 %

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Rear derailleur pulley replacement and service
- doc — Shimano : dealer manual, réglage de l'embrayage Shadow RD+
- doc — SRAM : Type 3 roller bearing clutch, entretien
- article — BikeRadar : clutch derailleurs, comment ça marche et quand les régler

### 4. Diagnostiquer une transmission qui saute (méthode d'élimination) `diagnostic-passage-defaillant`

- **Durée :** 40 min
- **Prérequis :**
  - [Patte de dérailleur : contrôle visuel, standards et UDH](#patte-derailleur-controle-visuel) `patte-derailleur-controle-visuel`
  - [Indexer un dérailleur arrière (tension de câble)](#derailleur-arriere-indexation) `derailleur-arriere-indexation`
  - [Mesurer l'usure d'une chaîne (et savoir quand il est déjà trop tard)](#usure-chaine-mesure-jauge) `usure-chaine-mesure-jauge`
  - [Le carnet d'atelier et la pratique délibérée](fondamentaux.md) `carnet-atelier`
- **Outils :** jauge d'usure de chaîne, outil d'alignement de patte, réglet acier, câble neuf de test, gaine de test, lampe, pied d'atelier, chronomètre

**Objectifs :**
- Construire un arbre de décision reliant symptôme et cause : patte, câble, gaine, chaîne, cassette, galets, embrayage, ligne de chaîne, plateau voilé
- Distinguer un saut sous couple (usure) d'une hésitation à l'indexation (câble ou réglage)
- Diagnostiquer un chain suck et remonter à sa cause
- Ne remplacer une pièce qu'après une mesure chiffrée qui le justifie

**TP — Trois pannes introduites, trois diagnostics chronométrés**

Un binôme introduit trois pannes différentes sur des vélos (par exemple gaine écrasée, chaîne à 1 % d'allongement sur cassette neuve, patte faussée de 4 mm). Tu diagnostiques chacune avec mesures à l'appui, tu réutilises ton arbre de décision et tu remets le vélo en état.

Critères de validation :
1. 3 pannes différentes diagnostiquées correctement, chacune en 10 min maximum, chrono à l'appui
2. Pour chaque panne, au moins 2 mesures chiffrées à l'appui du diagnostic (pourcentage d'usure, écart de patte en mm, contrôle de course de câble)
3. Aucune pièce remplacée sans mesure préalable justifiant le remplacement : 0 remplacement à l'aveugle
4. Un arbre de décision écrit d'au moins 8 branches est produit puis effectivement utilisé sur la troisième panne
5. Vélo remis en état : 3 allers-retours nets sur toute la cassette et aucun saut sous couple lors d'un sprint en danseuse de 10 s

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : shifting troubleshooting, symptômes et causes
- article — Bike Gremlin : drivetrain troubleshooting, méthode
- doc — Shimano : dealer manual, tableau de dépannage transmission
- video — GCN : why your gears skip and how to fix it
- article — Park Tool : chain suck, causes et remèdes

### 5. Manettes : entretien, câble rompu et remplacement `manette-entretien-cable`

- **Durée :** 40 min
- **Prérequis :**
  - [Indexer un dérailleur arrière (tension de câble)](#derailleur-arriere-indexation) `derailleur-arriere-indexation`
  - [Routage interne : passer câbles, gaines et durites dans le cadre sans y laisser tes nerfs](direction-et-peripheriques.md) `routage-interne-cadre`
- **Outils :** clés Allen 4 et 5, pince à becs fins, pince coupe-câble, dégraissant volatile, huile fine, tournevis JIS, inclinomètre ou application inclinomètre, clé dynamométrique 2-14 N·m
- **⚠️ Sécurité :**
  - Ne noie jamais un mécanisme de manette au dégraissant puissant : tu lessives la graisse des cliquets et la manette lâche quelques centaines de kilomètres plus tard, souvent en plein passage. Dégraissant volatile, puis relubrification immédiate.

**Objectifs :**
- Extraire un câble rompu à l'intérieur du corps d'une manette Rapidfire, STI, DoubleTap ou Ergopower
- Nettoyer et relubrifier un mécanisme à cliquets sans le noyer de dégraissant
- Remplacer une manette et régler sa position au cintre de façon symétrique
- Distinguer les manettes réellement réparables des boîtiers scellés à remplacer

**TP — Extraction et remplacement de câble sur deux manettes**

Sur deux manettes de familles différentes, tu provoques une rupture de câble à l'intérieur du corps, tu extrais le tronçon, tu passes un câble neuf, tu relubrifies le mécanisme et tu recales la position au cintre.

Critères de validation :
1. Câble rompu volontairement dans le corps de manette puis extrait sans démonter le capot : 2/2 réussis
2. Nouveau câble passé et ressorti par la gaine sans effilochage : 0 brin cassé, contrôlé à la loupe
3. Après remontage : indexation retrouvée, 3 allers-retours nets sur toute la cassette
4. Aucun cliquet ne saute sur 30 actionnements consécutifs après relubrification, effort au levier consigné avant et après
5. Position au cintre réglée : écart d'angle entre levier gauche et droit inférieur ou égal à 10°, mesuré à l'inclinomètre, colliers serrés au couple
6. Embout de câble serti, longueur résiduelle comprise entre 15 et 20 mm

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : Shifter cable replacement, extraction d'un câble rompu
- doc — Shimano : dealer manual STI et Rapidfire, cheminement du câble
- doc — Campagnolo : vue éclatée Ergopower et pièces de reconstruction
- article — Bike Gremlin : shifter maintenance and cable routing
- doc — SRAM : DoubleTap shifter service et remplacement de câble

### 6. Convertir un vélo en singlespeed `singlespeed-conversion`

- **Durée :** 45 min
- **Prérequis :**
  - [Mesurer et corriger la ligne de chaîne](#ligne-de-chaine) `ligne-de-chaine`
  - [Corps de roue libre : HG, XD/XDR, Microspline — identifier et entretenir](roues-et-pneus.md) `corps-roue-libre-standards-service`
  - [Tension de chaîne sur pattes horizontales : la méthode propre](cas-exotiques.md) `fixie-tension-chaine`
- **Outils :** kit d'entretoises singlespeed, fouet à chaîne, démonte-cassette, tendeur de chaîne, dérive-chaîne, pied à coulisse, réglet, clé dynamométrique, clé à cône 15 mm
- **⚠️ Sécurité :**
  - Sur un pignon fixe, le contre-écrou a un filetage à gauche : sans lui, le pignon se dévisse au rétropédalage et tu perds à la fois la transmission et ton frein moteur, souvent en descente.

**Objectifs :**
- Choisir un rapport cohérent avec l'usage et calculer le développement en mètres
- Aligner la ligne de chaîne avec un kit d'entretoises sur corps HG ou un moyeu dédié
- Gérer la tension de chaîne selon le type de pattes : horizontales, verticales avec tendeur, excentrique, magic gear
- Distinguer singlespeed et pignon fixe, et sécuriser un montage fixe avec son contre-écrou

**TP — Conversion complète avec contrôle de ligne et de tension**

Tu convertis un vélo à dérailleurs en singlespeed : choix et calcul du rapport, empilage des entretoises pour aligner la ligne de chaîne, gestion de la tension selon le type de pattes, puis validation en charge.

Critères de validation :
1. Rapport choisi et développement calculé en mètres, justifié par l'usage (ordre de 5,5 à 6,5 m pour un usage urbain)
2. Lignes de chaîne avant et arrière mesurées : écart entre les deux inférieur ou égal à 1 mm après empilage des entretoises
3. Tension de chaîne réglée : débattement vertical de 10 à 15 mm au milieu du brin supérieur, mesuré au réglet
4. Test : 50 tours de pédale en charge dont 10 en danseuse, sans déraillement
5. Sur pattes horizontales : roue centrée dans les bases, écart gauche/droite inférieur ou égal à 1 mm au réglet, écrous serrés au couple
6. Chaîne coupée à une longueur laissant une réserve de réglage : axe de roue non positionné en bout de patte

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : singlespeed conversions et magic gear
- article — Park Tool : single speed chain tension et kits d'entretoises
- doc — Surly : tendeur Singleator et pattes horizontales
- article — Bike Gremlin : singlespeed conversion, ligne de chaîne et tension
- article — Sheldon Brown : fixed gear, contre-écrou à filetage gauche

### 7. Courroie Gates Carbon Drive : alignement et tension `courroie-gates-tension-alignement`

- **Durée :** 40 min
- **Prérequis :**
  - [Mesurer et corriger la ligne de chaîne](#ligne-de-chaine) `ligne-de-chaine`
  - [Déposer et reposer une roue : serrage rapide, axe traversant, écrous](roues-et-pneus.md) `depose-repose-roue`
- **Outils :** smartphone avec l'application de mesure sonique Gates, jauge de tension type Krikit, réglet acier ou outil d'alignement laser, clés Allen, clé dynamométrique, pied d'atelier
- **⚠️ Sécurité :**
  - Ne fais jamais levier avec un tournevis pour enfiler une courroie carbone : tu romps des fibres invisibles à l'œil et la courroie casse plus tard sans prévenir. On desserre le tendeur ou on ouvre le maillon du cadre, point.

**Objectifs :**
- Monter une courroie sans la vriller ni faire levier, en passant par le maillon ouvrant du cadre ou le tendeur
- Mesurer la tension à l'application sonique Gates ou à la jauge de type Krikit et la ramener dans la plage constructeur
- Contrôler l'alignement des poulies avant et arrière et le corriger
- Diagnostiquer un saut de dents et l'usure d'une courroie

**TP — Contrôle et réglage complet d'une transmission à courroie**

Sur un vélo à courroie (ville, cargo ou VAE), tu contrôles l'alignement des poulies, tu mesures la tension en trois positions, tu la ramènes dans la plage constructeur et tu valides en charge, puis tu documentes l'état d'usure.

Critères de validation :
1. Tension mesurée au moins 3 fois en positions différentes de la courroie : dispersion inférieure ou égale à 10 Hz
2. Tension finale dans la plage constructeur du modèle, écart inférieur ou égal à 5 % de la valeur cible
3. Alignement des poulies contrôlé au réglet ou au laser : désalignement inférieur ou égal à 0,5 mm sur 100 mm
4. Après réglage : 30 tours de pédale en charge, aucun saut de dent et aucun crissement
5. État de la courroie documenté en photo (usure des dents, fibres apparentes) avec verdict conserver ou remplacer
6. Aucun outil n'a servi de levier au montage : procédure de dépose du tendeur ou d'ouverture du cadre respectée et décrite

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Gates Carbon Drive : Measuring Proper Belt Tension
- outil — Gates Carbon Drive : application Carbon Drive Belt Tension Tool, mesure sonique en Hz
- doc — Gates Carbon Drive : manuel d'installation CDX et CDN, alignement des poulies
- article — Bike Gremlin : belt drive bicycles, avantages et contraintes
- doc — Gates Carbon Drive : belt wear inspection guide

### 8. Moyeux à vitesses intégrées : réglage du câble (Nexus, Alfine, Enviolo) `moyeux-integres-reglage`

- **Durée :** 35 min
- **Prérequis :**
  - [Indexer un dérailleur arrière (tension de câble)](#derailleur-arriere-indexation) `derailleur-arriere-indexation`
  - [Déposer et reposer une roue : serrage rapide, axe traversant, écrous](roues-et-pneus.md) `depose-repose-roue`
- **Outils :** clés plates 15 mm, clés Allen, tournevis, câble et gaine de rechange, clé dynamométrique 10-60 N·m, pied d'atelier, chiffons

**Objectifs :**
- Identifier un moyeu intégré, son modèle et son nombre de rapports
- Régler l'indexation par superposition des repères, au rapport prescrit par le constructeur
- Régler un système à deux câbles de type Enviolo
- Déposer et reposer une roue à moyeu intégré : bras de réaction, rondelles anti-rotation, débranchement du câble

**TP — Réglage sur deux moyeux intégrés différents**

Sur deux vélos à moyeu intégré de types différents (par exemple un Nexus 8 et un Alfine 11 ou un Enviolo), tu identifies le modèle, tu déposes et reposes la roue, tu règles l'indexation par les repères et tu valides en charge.

Critères de validation :
1. Moyeu identifié (marque, modèle, nombre de rapports) sur les 2 vélos : 2/2 justes
2. Repères d'indexation parfaitement superposés au rapport prescrit par le constructeur, contrôle photographié
3. Passage net sur tous les rapports, montée ET descente, 3 allers-retours, roue soulevée puis en charge
4. Aucun rapport ne patine sous couple : 10 démarrages en charge sur le rapport le plus court, 0 patinage
5. Rondelles anti-rotation posées dans le bon sens, bras de réaction fixé, écrous d'axe serrés au couple constructeur, typiquement 30 à 45 N·m côté Shimano
6. Tension de chaîne ou de courroie recontrôlée après repose de roue : 10 à 15 mm de débattement pour une chaîne

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Shimano : dealer manual Nexus et Alfine, réglage par repères et couples d'axe
- doc — Enviolo : installation et réglage des câbles bipolaires
- article — Park Tool : internally geared hub adjustment
- article — Bike Gremlin : internally geared hubs, réglage et entretien
- doc — Rohloff : montage du bras de réaction et des rondelles anti-rotation

### 9. Choisir tes développements : plage, sauts et capacité de chape `choisir-developpements`

- **Durée :** 45 min
- **Prérequis :**
  - [Bien utiliser ses vitesses : cadence, anticipation, croisement de chaîne](#utiliser-vitesses-cadence-croisement) `utiliser-vitesses-cadence-croisement`
  - [Calculer la longueur de chaîne](#chaine-longueur-calcul) `chaine-longueur-calcul`
  - [Mesurer et corriger la ligne de chaîne](#ligne-de-chaine) `ligne-de-chaine`
  - [Déposer et reposer une cassette](#cassette-depose-repose) `cassette-depose-repose`
  - [Remplacer des plateaux](#plateaux-remplacement) `plateaux-remplacement`
- **Outils :** Mètre ruban et réglet, Calculateur de développements (tableur ou outil en ligne), Pied d'atelier, Fiches techniques constructeur (capacité de chape, pignon maxi), Dérive-chaîne et attaches rapides, Réglet ou outil de ligne de chaîne, Clé dynamométrique, Carnet d'atelier
- **⚠️ Sécurité :**
  - Dépasser le pignon maxi ou la capacité de chape annoncée : la chape talonne, la chaîne peut sauter derrière la cassette et bloquer la roue arrière en roulant.
  - Chaîne trop courte : blocage franc en grand-grand, dérailleur arraché et patte cassée, le plus souvent à l'accélération en côte.

**Objectifs :**
- Calculer un développement en mètres et l'amplitude totale d'une transmission en pourcentage
- Calculer la capacité totale nécessaire et la comparer à la capacité de chape du dérailleur
- Confronter une transmission à un profil de parcours réel et chiffrer ce qui manque
- Décider une conversion 2x vers 1x en vérifiant pignon maxi, longueur de chaîne et ligne de chaîne
- Adapter le braquet à l'usage réel : cargo chargé en côte, VAE, bikepacking montagne, ville plate

**TP — Audit de braquet et proposition chiffrée**

Tu relèves la transmission d'un vélo réel, tu calcules sa plage et ses sauts, tu la confrontes à un parcours que tu connais, puis tu proposes et tu montes une nouvelle combinaison plateau/cassette que tu valides sur le vélo.

Critères de validation :
1. 1. Relevé complet : nombre de dents de chaque plateau et de chaque pignon, circonférence de roue mesurée ou calculée à partir de l'ETRTO, marge d'erreur ≤ 1 %.
2. 2. Développement mini et maxi calculés en mètres par tour de pédale, exacts à ±0,05 m par rapport au corrigé.
3. 3. Amplitude totale calculée en pourcentage (grand rapport / petit rapport × 100), exacte à ±2 points.
4. 4. Tableau des sauts entre pignons consécutifs en pourcentage : aucun saut oublié, et identification du saut le plus grand de la cassette.
5. 5. Capacité totale calculée par la formule (grand plateau − petit plateau) + (grand pignon − petit pignon), résultat exact à la dent près, puis comparé à la capacité annoncée du dérailleur : verdict compatible/incompatible justifié.
6. 6. Confrontation au profil réel : pente maxi soutenue relevée sur la trace, vitesse d'ascension calculée à 70 tr/min sur le plus petit développement, verdict « braquet suffisant » ou déficit chiffré en mètres de développement.
7. 7. Nouvelle combinaison proposée avec vérification des 4 verrous : pignon maxi ≤ limite constructeur, capacité totale ≤ capacité de chape, longueur de chaîne recalculée, ligne de chaîne conservée à ≤ 1 mm d'écart mesuré.
8. 8. Montage réalisé sur vélo cobaye et validé en charge : passage net sur 100 % des pignons, 3 allers-retours montants et descendants, zéro déraillement, écart galet-cassette conforme sur le plus grand pignon.
9. 9. Fiche finale au carnet d'atelier : une recommandation chiffrée pour 4 usages (cargo chargé en côte, VAE, bikepacking montagne, ville plate), chacune avec plateau, cassette, développement mini et capacité vérifiée.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- outil — Ritzel-Rechner (Gear Calculator) : calcul de développements, gain ratio et comparaison de cassettes
- doc — Shimano Dealer's Manual : capacité totale de chape et pignon maximal par référence de dérailleur
- doc — SRAM : compatibilités Eagle et route : capacité, pignon maxi et longueur de chaîne
- video — Park Tool : méthodes de calcul de longueur de chaîne selon la transmission
- article — Rene Herse Cycles (Jan Heine) : choisir ses développements pour la randonnée chargée et la montagne
- article — Matos Vélo : convertir un double plateau en 1x sans se tromper de cassette

### 10. Réviser des pédales : roulements, axes, broches et mécanismes `pedales-entretien-roulements`

- **Durée :** 45 min
- **Prérequis :**
  - [Pédales : dépose, repose et le piège du pas inversé](#pedales-depose-repose-filetage) `pedales-depose-repose-filetage`
  - [Pédales automatiques : SPD, Look, Time, SPD-SL et plates à broches](#pedales-automatiques-typologie) `pedales-automatiques-typologie`
  - [Régler le jeu d'un moyeu à cônes et billes](roues-et-pneus.md) `reglage-cones-moyeu`
  - [Graisse, pâte carbone, frein-filet, antiseize : quoi, où, pourquoi](fondamentaux.md) `pates-assemblage`
- **Outils :** Douille de démontage de pédale (type Shimano TL-PD40 / TL-PD63) ou clé à cône fine 13/15 mm, Clés à cône fines et clé plate 7/8 mm, Pince à circlips intérieur/extérieur, Jeu de six pans 2, 2,5, 3 mm et torx T10/T20, Étau avec mors doux, Graisse roulement, dégraissant, chiffons non pelucheux, Frein-filet moyen (bleu), Comparateur ou V de contrôle pour axe, Bac de récupération et aimant à billes, Kit de joints/roulements constructeur
- **⚠️ Sécurité :**
  - Un axe de pédale tordu ou un corps fissuré se remplace, jamais ne se redresse : la rupture arrive en danseuse, à pleine charge, et la chute est violente.
  - Les broches de pédales plates entaillent profondément le tibia : manipule le vélo pédale en position basse et protège tes jambes pendant les essais.

**Objectifs :**
- Démonter une pédale à cônes et billes sans perdre une bille ni inverser un côté
- Regraisser et régler le jeu d'une pédale au même niveau d'exigence qu'un moyeu
- Détecter un axe tordu ou un corps fissuré et décider du remplacement
- Remplacer les broches d'une pédale plate, y compris une broche cassée dans le corps
- Entretenir le mécanisme de déchaussage d'une automatique pour retrouver une tension franche

**TP — Révision complète d'une paire à cônes et billes**

Tu démontes intégralement une paire de pédales à cônes et billes, tu comptes et regraisses, tu remontes et tu règles le jeu à la limite du perceptible.

Critères de validation :
1. 1. Comptage des billes annoncé au démontage et identique au remontage sur les deux pédales (par exemple 2 × 12 par côté), zéro bille perdue.
2. 2. Chemins de roulement et cônes nettoyés puis inspectés : verdict « lisse » ou « piqué » rendu pour chaque piste, avec décision de remplacement si piqué.
3. 3. Remplissage de graisse aux 2/3 environ du chemin de roulement, sans débordement dans le mécanisme ou sur le filetage d'axe.
4. 4. Après réglage : la pédale lancée à la main effectue au moins 3 tours libres et ne présente aucun point dur perceptible sur un tour complet.
5. 5. Jeu latéral mesuré au bord de la pédale (à environ 50 mm de l'axe) ≤ 0,3 mm au comparateur, et nul au ressenti pouce/index.
6. 6. Réglage conservé après serrage du contre-écrou : contrôlé deux fois, avant et après serrage final, sans dérive perceptible.
7. 7. Rectitude de l'axe contrôlée en rotation : faux-rond ≤ 0,5 mm, sinon axe déclaré bon pour le remplacement et l'argument est écrit au carnet.

**TP — Automatiques, broches et mécanismes**

Sur une paire d'automatiques et une paire de plates à broches, tu sers les roulements, tu rends au mécanisme de déchaussage une tension franche, et tu remets des broches neuves dont une cassée dans le corps.

Critères de validation :
1. 1. Paire d'automatiques démontée et regraissée : rotation libre ≥ 3 tours après impulsion, jeu latéral nul au ressenti, joints remontés dans le bon sens sur les 2 pédales.
2. 2. Mécanisme de déchaussage dégraissé, relubrifié et réglé : tension identique gauche/droite à ±1 cran, déchaussage franc 10 fois de suite par pédale.
3. 3. Ressorts, plaquettes de contact et vis de tension inspectés : tout élément déformé ou fissuré est identifié et remplacé, aucun élément douteux remonté.
4. 4. Pédales plates : 100 % des broches présentes, montées avec frein-filet moyen et serrées à la même hauteur, dépassement homogène à ±0,5 mm sur l'ensemble d'une face.
5. 5. Broche cassée dans le corps extraite sans agrandir le logement, filetage vérifié en revissant une broche neuve à la main sur toute sa longueur.
6. 6. Essai routier de 2 km : aucun bruit de roulement, aucun jeu apparu, tension de déchaussage inchangée.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : révision d'une pédale à cônes et billes, dépose de l'écrou d'axe
- doc — Shimano : service instructions pédales PD-M520/M540 et outil TL-PD40
- doc — Crankbrothers : kit de rebuild, joints et intervalles de service
- article — Sheldon Brown : roulements et axes de pédales, tolérances de jeu
- doc — OneUp Components : remplacement des broches de pédales plates et extraction d'une broche cassée

## Niveau 4 — Expert

### 1. Décider une compatibilité de transmission `compatibilite-transmission-decisions`

- **Durée :** 45 min
- **Prérequis :**
  - [Anatomie de la transmission : nommer et identifier](#anatomie-transmission) `anatomie-transmission`
  - [Mesurer et corriger la ligne de chaîne](#ligne-de-chaine) `ligne-de-chaine`
  - [Corps de roue libre : HG, XD/XDR, Microspline — identifier et entretenir](roues-et-pneus.md) `corps-roue-libre-standards-service`
- **Outils :** pied à coulisse numérique, tableaux de spécifications constructeur, tableur ou calculateur de développement, carnet d'atelier

**Objectifs :**
- Comparer les ratios de tirage (pull ratio) entre marques, générations et disciplines
- Calculer une capacité totale de chape et la confronter à la spécification du dérailleur
- Trancher un montage mixte ou mullet en s'appuyant sur des données chiffrées, pas sur des forums
- Calculer des développements en mètres et en gain ratio pour choisir cassette et plateaux selon l'usage

**TP — Cinq dossiers de compatibilité à trancher**

Tu instruis cinq cas réels de compatibilité (par exemple manette 10 vitesses avec dérailleur 11 vitesses, cassette 11-51 sur un dérailleur de capacité insuffisante, mullet route/VTT, cassette 12 vitesses sur corps HG, roue 8 vitesses sur cadre 11 vitesses) et tu rends un verdict chiffré pour chacun, puis tu construis un tableau de décision réutilisable.

Critères de validation :
1. 5 cas traités avec verdict compatible ou incompatible, chacun justifié par au moins une donnée chiffrée
2. Ratio de tirage ou capacité de chape cité explicitement pour au moins 4 des 5 cas
3. Capacité totale calculée (différence de plateaux plus différence de pignons) et comparée à la spec du dérailleur : erreur inférieure ou égale à 1 dent
4. Sur un vélo réel : développements minimum et maximum calculés en mètres et en gain ratio, et une cassette de remplacement proposée avec l'écart de développement chiffré
5. Un tableau de décision réutilisable est produit puis testé avec succès sur un sixième cas fourni par un tiers

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Shimano : compatibility charts par groupe et par génération
- doc — SRAM : drivetrain compatibility map, route et VTT
- article — Bike Gremlin : derailleur pull ratio et actuation ratio expliqués
- article — Park Tool : cassette, chain and derailleur compatibility
- outil — Sheldon Brown : gear calculator, développement et gain ratio

### 2. Boîtiers press-fit : identifier, extraire, poser `boitier-presse-fit`

- **Durée :** 45 min
- **Prérequis :**
  - [Boîtiers filetés : identifier et remplacer (BSA, italien, T47)](#boitier-pedalier-filete) `boitier-pedalier-filete`
  - [Déposer et reposer un pédalier](#pedalier-depose-repose) `pedalier-depose-repose`
  - [Mesurer et décoder : pied à coulisse et marquages](fondamentaux.md) `pied-a-coulisse-et-marquages`
- **Outils :** pied à coulisse numérique, extracteur de roulement press-fit, presse à jeu de direction ou presse à boîtier, graisse, frein-filet de fixation type Loctite 641, boîtier vissé de type thread-together, clé dynamométrique, chiffons
- **⚠️ Sécurité :**
  - Sur cadre carbone, jamais de marteau direct ni de chasse improvisé : l'alésage se fissure et le cadre est bon pour la poubelle. Presse alignée, effort progressif, contrôle visuel à chaque quart de tour.

**Objectifs :**
- Identifier BB30, PF30, BB86/92, BB90, BBRight, 386EVO et DUB press-fit par diamètre d'alésage et largeur de coquille
- Extraire des roulements ou cuvettes sans marquer l'alésage, y compris sur carbone
- Mesurer un alésage en plusieurs points et détecter un cadre hors tolérance
- Poser à la presse bien d'aplomb et traiter durablement un craquement (frein-filet de fixation ou solution vissée)

**TP — Extraction, pose et chasse au craquement**

Tu identifies un boîtier press-fit par mesure, tu mesures l'alésage en trois points pour vérifier sa conformité, tu extrais les roulements, tu reposes à la presse et tu valides par un test de craquement en danseuse.

Critères de validation :
1. Standard identifié par mesure : diamètre d'alésage à plus ou moins 0,05 mm et largeur de coquille à plus ou moins 0,2 mm, verdict correct
2. Alésage mesuré en 3 points à 60° : ovalisation relevée et verdict cadre conforme ou hors tolérance argumenté
3. Roulements extraits sans marque ni éclat sur l'alésage, contrôle visuel documenté en photo
4. Pose à la presse : cuvettes affleurantes et parallèles, écart de profondeur gauche/droite inférieur ou égal à 0,3 mm au pied à coulisse
5. Après montage : axe tournant librement (au moins 2 tours à la chiquenaude) et aucun jeu latéral perceptible
6. Test de craquement : 20 démarrages en danseuse sans bruit, sinon reprise avec frein-filet de fixation ou boîtier vissé, et solution documentée

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : Bottom Bracket Tool Selection: Press Fit
- video — Park Tool : press fit bottom bracket removal and installation
- doc — Wheels Manufacturing : thread-together bottom bracket, principe et tolérances
- doc — SRAM : DUB press fit installation manual
- article — Bike Gremlin : press-fit bottom brackets, craquements et solutions

### 3. Shimano Di2 : câblage et installation `di2-installation-cablage`

- **Durée :** 45 min
- **Prérequis :**
  - [Indexer un dérailleur arrière (tension de câble)](#derailleur-arriere-indexation) `derailleur-arriere-indexation`
  - [Régler un dérailleur avant](#derailleur-avant-reglage) `derailleur-avant-reglage`
  - [Routage interne : passer câbles, gaines et durites dans le cadre sans y laisser tes nerfs](direction-et-peripheriques.md) `routage-interne-cadre`
- **Outils :** outil d'insertion E-Tube (type TL-EW02), fils E-Tube de longueurs variées, tire-câble interne magnétique, clés Allen, clé dynamométrique 2-14 N·m, PC ou smartphone avec le logiciel E-Tube Project, chargeur Di2
- **⚠️ Sécurité :**
  - Les fils E-Tube ne se tirent jamais par le câble : on pousse et on tire sur le connecteur avec l'outil. Un contact arraché, c'est un composant à renvoyer, pas une réparation d'atelier.

**Objectifs :**
- Cartographier une architecture Di2 : jonctions, fils E-Tube, batterie interne ou externe, variantes semi-sans-fil
- Choisir les longueurs de fils et router proprement en interne
- Insérer et extraire les connecteurs E-Tube avec l'outil dédié, sans arracher les contacts
- Poser les dérailleurs, régler les butées mécaniques et définir le point de départ

**TP — Installation Di2 complète sur un vélo**

Tu dessines le schéma de câblage avant de commencer, tu relèves les longueurs de fils nécessaires, tu routes en interne, tu connectes tout à l'outil, tu vérifies la reconnaissance des composants dans le logiciel et tu règles le point de départ du dérailleur arrière.

Critères de validation :
1. Schéma de câblage dessiné avant montage avec longueurs relevées : écart inférieur ou égal à 50 mm par rapport aux fils réellement nécessaires
2. Toutes les connexions insérées à l'outil : test de traction douce sur chaque fil, 0 déconnexion
3. 100 % des composants apparaissent et sont reconnus dans le logiciel de diagnostic
4. Dérailleur arrière monté, butées mécaniques réglées et point de départ validé sur le plus petit pignon
5. Câbles fixés à l'intérieur du cadre : test de secousse verticale de 10 s, aucun claquement audible
6. Niveau de batterie relevé avant et après 100 passages, consommation cohérente avec la spécification constructeur

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Shimano : dealer manual Di2, schémas de câblage E-Tube
- outil — Shimano : logiciel E-Tube Project
- video — Park Tool : Di2 installation et principes de câblage
- video — GCN Tech : how to install Di2 from scratch
- doc — Shimano : manuel SI de la batterie interne et des jonctions

### 4. Di2 : configuration E-Tube, firmware et diagnostic de pannes `di2-etube-configuration`

- **Durée :** 40 min
- **Prérequis :**
  - [Shimano Di2 : câblage et installation](#di2-installation-cablage) `di2-installation-cablage`
  - savoir mener un diagnostic méthodique par élimination et documenter ses tests *(fondamentaux)*
- **Outils :** PC ou smartphone avec E-Tube Project, interface de diagnostic filaire ou liaison sans fil, batterie chargée, chargeur, carnet d'atelier

**Objectifs :**
- Mettre à jour le firmware de chaque unité et consigner les versions
- Personnaliser boutons, multi-shift, vitesse de passage et modes Synchro Shift ou Semi-Synchro
- Affiner l'indexation en mode ajustement depuis la manette
- Diagnostiquer et résoudre les pannes classiques : connexion, batterie, dérailleur en mode protection

**TP — Configuration complète et trois pannes simulées**

Tu mets à jour tous les firmwares, tu construis une carte de passage Synchro Shift personnalisée, tu affines l'indexation en mode ajustement, puis un binôme te soumet trois pannes simulées que tu dois diagnostiquer et résoudre.

Critères de validation :
1. Firmware à jour sur 100 % des composants, versions consignées au carnet avant et après
2. Synchro Shift configuré avec une carte de passage personnalisée, testée sur 2 allers-retours complets : aucune combinaison croisée interdite atteinte
3. Indexation affinée en mode ajustement : chaque pignon passe en un clic, 3 allers-retours nets
4. 3 pannes simulées (fil débranché, batterie déchargée, dérailleur en mode protection) identifiées et résolues, chacune en 10 min maximum
5. Procédure de réinitialisation du dérailleur après choc exécutée et validée par un passage complet
6. Un rapport écrit par panne : symptôme, tests réalisés, cause, correction

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Shimano : E-Tube Project user manual, personnalisation et firmware
- doc — Shimano : dealer manual Di2, mode ajustement et réinitialisation
- video — Park Tool : Di2 adjustment et dépannage
- video — GCN Tech : Di2 troubleshooting, pannes les plus fréquentes
- doc — Shimano : Synchro Shift et Semi-Synchro Shift, principe et paramétrage

### 5. SRAM AXS : installation, appairage et réglages `sram-axs-appairage`

- **Durée :** 40 min
- **Prérequis :**
  - [Indexer un dérailleur arrière (tension de câble)](#derailleur-arriere-indexation) `derailleur-arriere-indexation`
  - [Calculer la longueur de chaîne](#chaine-longueur-calcul) `chaine-longueur-calcul`
  - [Étalonne ta main : pratique délibérée du couple](fondamentaux.md) `etalonnage-sensoriel-couple`
- **Outils :** smartphone avec l'application AXS, batteries AXS et chargeur, clés Allen et Torx, clé dynamométrique 2-14 N·m, chaîne compatible et attache rapide, gabarit de chain gap si applicable

**Objectifs :**
- Installer un dérailleur AXS route ou VTT et gérer les batteries interchangeables
- Appairer les composants dans le bon ordre et vérifier la liaison dans l'application
- Régler l'indexation par micro-ajustement plutôt qu'au barillet
- Configurer les commandes et les modes de passage séquentiel ou compensé

**TP — Installation et paramétrage complet d'un groupe AXS**

Tu installes un groupe AXS, tu appaires tous les composants, tu règles butées ou chain gap selon le modèle, tu affines par micro-ajustement, tu configures un mode de passage et tu valides sur toute la cassette.

Critères de validation :
1. Appairage réussi de tous les composants, dérailleurs, manettes et commandes annexes : 100 % visibles dans l'application
2. Butées H et L réglées sur modèle route, ou chain gap réglé au gabarit sur modèle VTT, conformité contrôlée à l'outil fourni
3. Micro-ajustement utilisé : chaque pignon passe sans bruit, 3 allers-retours nets sur toute la cassette
4. Un mode de passage séquentiel ou compensé configuré et testé sur 20 passages : 0 combinaison croisée atteinte
5. Niveaux de batterie relevés et permutation avant/arrière exécutée en moins de 60 s
6. Firmware à jour sur chaque composant, versions consignées au carnet

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SRAM : eTap AXS user manual, appairage et micro-ajustement
- outil — SRAM : application AXS, configuration des commandes
- video — SRAM : Eagle AXS installation
- video — GCN Tech : SRAM AXS setup et personnalisation
- article — BikeRadar : SRAM AXS expliqué, batteries et compatibilités

### 6. SRAM Eagle Transmission T-Type sur UDH : montage et calibration `t-type-udh`

- **Durée :** 45 min
- **Prérequis :**
  - [Patte de dérailleur : contrôle visuel, standards et UDH](#patte-derailleur-controle-visuel) `patte-derailleur-controle-visuel`
  - [SRAM AXS : installation, appairage et réglages](#sram-axs-appairage) `sram-axs-appairage`
- **Outils :** clé dynamométrique 10-60 N·m, clé Torx T25, application AXS, batterie AXS chargée, chaîne Flattop Eagle et attache PowerLock, setup cog et gabarit fournis avec le groupe
- **⚠️ Sécurité :**
  - Le couple de l'axe du dérailleur T-Type est structurel : sous-serré, le dérailleur bouge et détruit cassette et chaîne en quelques sorties ; sur-serré, tu écrases l'interface du cadre. Clé dynamométrique obligatoire, valeur exacte du manuel, pas d'estimation.

**Objectifs :**
- Vérifier qu'un cadre est réellement compatible UDH avant toute commande
- Monter un dérailleur coaxial sans patte, sans butées H et L et sans vis B, avec le setup cog
- Expliquer pourquoi le réglage devient géométrique et non plus dépendant du câble ou de la patte
- Déterminer la longueur de chaîne par la méthode Transmission et valider le passage en charge

**TP — Montage T-Type complet et validation en charge**

Tu vérifies la compatibilité UDH du cadre, tu montes le dérailleur coaxial avec le setup cog au couple prescrit, tu détermines la longueur de chaîne par la méthode Transmission, tu appaires et tu valides par des passages sous couple.

Critères de validation :
1. Compatibilité UDH du cadre vérifiée par identification de la patte d'origine, verdict écrit avant toute commande de pièce
2. Setup cog utilisé et dérailleur monté sur l'axe au couple exact du manuel, à plus ou moins 5 %
3. Longueur de chaîne déterminée par la méthode Transmission : nombre de maillons juste du premier coup, aucune reprise
4. Aucun réglage de butée ni de vis B effectué : procédure constructeur respectée à 100 %
5. Test de passage en charge : 20 passages montants sous couple, 0 saut et 0 bruit anormal
6. 3 allers-retours complets sur les 12 pignons, nets, roue en charge sur home-trainer

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SRAM : Eagle Transmission installation manual, couples et setup cog
- video — SRAM : Eagle AXS Transmission System Installation
- article — BikeRadar : how to install and set up SRAM T-Type Eagle Transmission
- doc — SRAM : spécification Universal Derailleur Hanger (UDH)
- video — GCN Tech : T-Type Transmission, ce qui change vraiment

### 7. Moyeux à vitesses intégrées : vidange et service (Alfine, Rohloff, Enviolo) `igh-vidange-service`

- **Durée :** 40 min
- **Prérequis :**
  - [Moyeux à vitesses intégrées : réglage du câble (Nexus, Alfine, Enviolo)](#moyeux-integres-reglage) `moyeux-integres-reglage`
  - savoir organiser un poste de travail avec récupération de fluides et EPI *(fondamentaux)*
- **Outils :** kit de vidange constructeur (seringues graduées, tubes), huile de moyeu spécifique, bac de récupération, gants nitrile, chiffons, clés plates, clé dynamométrique, bidon étiqueté pour huile usagée
- **⚠️ Sécurité :**
  - Les huiles de moyeu usagées sont des déchets dangereux : récupération intégrale en bidon étiqueté, dépôt en déchetterie, jamais à l'évier ni au caniveau. Gants nitrile obligatoires, l'huile chargée de particules métalliques est irritante.

**Objectifs :**
- Exécuter une vidange Rohloff selon la périodicité constructeur (tous les 5000 km ou une fois par an)
- Réaliser un bain d'huile Alfine avec l'huile spécifique et le volume prescrit
- Entretenir un Enviolo et diagnostiquer un moyeu en fin de vie (patinage, bruit, jeu)
- Gérer les huiles usagées comme des déchets dangereux et tracer les échéances

**TP — Vidange complète avec relevé et suivi**

Tu réalises une vidange sur un moyeu intégré : extraction et mesure du volume usagé, analyse visuelle de l'huile, réinjection du volume prescrit, contrôle d'étanchéité à 24 h et validation fonctionnelle sur tous les rapports.

Critères de validation :
1. Volume extrait mesuré à la seringue graduée et comparé à la spécification constructeur, à plus ou moins 1 ml (ordre de 25 ml évacués et 12,5 ml réinjectés sur un Rohloff)
2. Aspect de l'huile usagée documenté en photo (couleur, particules) et interprété par écrit
3. Kilométrage et date consignés, prochaine échéance calculée et notée (5000 km ou 12 mois)
4. Après remontage : aucun suintement constaté après 24 h, vélo posé sur le flanc concerné
5. Test fonctionnel : tous les rapports passent, montée ET descente, 3 allers-retours, aucun patinage sur 10 démarrages en charge
6. Huile usagée stockée en bidon étiqueté et destination de dépôt identifiée

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Rohloff : Speedhub oil change manual, périodicité et volumes
- video — Rohloff : oil change procedure
- doc — Shimano : manuel SI Alfine SG-S700, bain d'huile et entretien
- doc — Enviolo : service manual, entretien et diagnostic
- article — Bike Gremlin : internally geared hub maintenance intervals

### 8. Transmission de VAE : usure accélérée et choix de composants `transmission-vae-usure-composants`

- **Durée :** 35 min
- **Prérequis :**
  - [Reconnaître un VAE et identifier son architecture](vae.md) `vae-identifier-architecture`
  - [Mesurer l'usure d'une chaîne (et savoir quand il est déjà trop tard)](#usure-chaine-mesure-jauge) `usure-chaine-mesure-jauge`
  - [Mesurer et corriger la ligne de chaîne](#ligne-de-chaine) `ligne-de-chaine`
- **Outils :** jauge d'usure de chaîne, pied à coulisse numérique, clés Allen et Torx, clé dynamométrique, outil d'extraction de plateau de moteur central, cales de contrôle d'entrefer, carnet d'atelier
- **⚠️ Sécurité :**
  - Avant toute intervention sur la transmission d'un VAE, retire la batterie et vérifie l'extinction du système : un moteur qui s'enclenche avec les doigts entre chaîne et plateau, c'est un doigt en moins.

**Objectifs :**
- Quantifier la surusure provoquée par le couple moteur et bâtir un plan d'entretien chiffré
- Choisir des composants adaptés : chaînes e-bike, cassettes acier, plateaux de moteur central
- Mesurer et respecter la ligne de chaîne imposée par un moteur pédalier
- Préserver la transmission avec les protections disponibles (capteur de passage, coupure de couple) et contrôler l'entrefer du capteur de vitesse après repose de roue

**TP — Bilan de transmission sur deux VAE**

Sur deux VAE de kilométrages connus, tu mesures l'usure de la transmission, tu la compares à un vélo musculaire équivalent, tu contrôles la ligne de chaîne du moteur central et l'entrefer du capteur, puis tu rédiges un plan d'entretien chiffré.

Critères de validation :
1. Batterie déposée et système consigné avant chaque intervention : 2/2, vérifié par un tiers
2. Usure de chaîne mesurée sur les 2 VAE et comparée à un vélo musculaire de kilométrage équivalent, ratio d'usure calculé et commenté
3. Plan d'entretien chiffré rédigé (périodicité de contrôle de chaîne en km selon l'usage) et justifié par les mesures
4. Ligne de chaîne du moteur central mesurée et comparée à la spécification constructeur : écart inférieur ou égal à 1 mm
5. Entrefer de l'aimant du capteur de vitesse contrôlé et remis dans la plage constructeur après repose de roue, valeur relevée
6. Composants de remplacement sélectionnés avec référence e-bike explicite (chaîne, cassette acier, plateau) et choix justifié par écrit

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Bosch eBike Systems : entretien de la transmission sur moteur central
- doc — Shimano : manuel SI STEPS, plateau et ligne de chaîne du moteur
- doc — KMC : chaînes e-bike, spécification et durée de vie
- article — E-MOUNTAINBIKE : usure des transmissions de VTTAE, comparatif terrain
- article — Bike Gremlin : e-bike drivetrain wear and component choice

## Niveau 5 — Maître

### 1. Installer un groupe complet : séquence, contrôles et points de non-retour `montage-groupe-complet`

- **Durée :** 35 min
- **Prérequis :**
  - [Déposer et reposer un pédalier](#pedalier-depose-repose) `pedalier-depose-repose`
  - [Mesurer et corriger la ligne de chaîne](#ligne-de-chaine) `ligne-de-chaine`
  - [Planifier un montage complet : la gamme d'assemblage](montage-et-peinture.md) `ordre-montage-cadre-nu`
  - [Câbles et gaines : matériaux, coupe parfaite et routage externe](direction-et-peripheriques.md) `cables-gaines-routage-externe`
- **Outils :** jeu complet de clés Allen et Torx, clés dynamométriques 2-14 et 10-60 N·m, outils de boîtier, dérive-chaîne d'atelier, pince coupe-câble et coupe-gaine, alésoir de gaine, tire-câble interne, graisse, frein-filet, fiche de couples imprimée

**Objectifs :**
- Ordonner un montage de transmission complet : boîtier, pédalier, dérailleurs, manettes, routage, chaîne, réglages
- Router et couper gaines et fils proprement, sans contact ni boucle parasite
- Régler l'ensemble d'un seul tenant, sans reprise, et documenter tous les couples appliqués
- Livrer un vélo au standard atelier avec fiche de contrôle

**TP — Montage complet chronométré et fiche de livraison**

Tu montes une transmission complète sur un cadre préparé, en respectant l'ordre de montage, en documentant chaque couple sur une fiche, puis tu valides par un essai de 30 min de roulage et un contrôle final sans reprise.

Critères de validation :
1. Groupe complet monté et réglé en 3 h maximum, chrono à l'appui, sans reprise après coup
2. Fiche de couples remplie : au moins 12 fixations documentées avec valeur cible et valeur appliquée, écart inférieur ou égal à 10 %
3. Toutes les gaines coupées d'équerre et alésées, embouts posés, aucune boucle en contact avec le cadre au braquage complet
4. Indexation : 3 allers-retours nets sur toute la cassette, montée et descente, en charge
5. Ligne de chaîne mesurée et conforme à plus ou moins 1 mm, longueur de chaîne validée en grand-grand et petit-petit
6. Contrôle après 30 min de roulage : aucun réglage à reprendre, aucun bruit, fiche de livraison signée

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : complete drivetrain installation, ordre de montage
- doc — Shimano : dealer manuals, séquence de montage et couples par groupe
- doc — SRAM : installation manuals, ordre de montage et couples
- video — GCN Tech : full bike build, partie transmission
- article — Bike Gremlin : bicycle assembly order and torque checklist

### 2. Transmission haut rendement : cirage en immersion et protocole d'atelier `transmission-cire-rendement`

- **Durée :** 45 min
- **Prérequis :**
  - [Mesurer l'usure d'une chaîne (et savoir quand il est déjà trop tard)](#usure-chaine-mesure-jauge) `usure-chaine-mesure-jauge`
  - [Remplacer une chaîne : dérive-chaîne, attache rapide, rivet](#chaine-remplacement) `chaine-remplacement`
  - [Ton calendrier d'entretien : 25 h, 50 h, 100 h](fondamentaux.md) `calendrier-entretien`
- **Outils :** mijoteuse dédiée à thermostat, paraffine et additifs, essence minérale et alcool dénaturé, bocaux à couvercle, crochet ou fil de suspension, thermomètre de cuisson, jauge d'usure de chaîne, gants nitrile, extincteur
- **⚠️ Sécurité :**
  - La cire fondue à 90 °C brûle en profondeur et s'enflamme si elle est surchauffée : mijoteuse à thermostat uniquement, jamais de casserole sur feu vif, extincteur à portée de main, gants et manches longues.
  - Les solvants de dégraissage sont inflammables et leurs vapeurs s'accumulent : ventilation permanente, aucune source de flamme ni de chaleur à proximité, bocaux fermés entre les bains.

**Objectifs :**
- Dégraisser une chaîne neuve à cœur selon un protocole solvant reproductible
- Cirer en immersion à température contrôlée et gérer les cycles de recire
- Mesurer le gain réel : usure sur intervalle, propreté, absence de contamination
- Comparer lubrifiant humide, sec et cire selon usage et météo, et mettre en place une rotation de chaînes

**TP — Protocole cire complet sur deux chaînes et suivi sur 500 km**

Tu dégraisses deux chaînes neuves à cœur selon un protocole en plusieurs bains, tu les cires en immersion à température contrôlée, tu mets en place une rotation, puis tu mesures l'usure et la propreté après 500 km d'usage réel.

Critères de validation :
1. Dégraissage validé : après le dernier bain, le solvant reste limpide et un chiffon blanc passé sur la chaîne ne montre aucune trace grise
2. Température de bain maintenue entre 85 et 95 °C, relevée au thermomètre 3 fois pendant l'immersion et consignée
3. Après refroidissement et cassage des maillons, 100 % des maillons articulent librement, contrôlé maillon par maillon
4. Usure mesurée à 0 km puis à 500 km : allongement inférieur ou égal à 0,05 % sur l'intervalle
5. Propreté : après 500 km, aucun dépôt noir sur un chiffon blanc passé sur la chaîne
6. Rotation de chaînes en place : au moins 2 chaînes identifiées et repérées, kilométrages tenus à jour au carnet

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Zero Friction Cycling : protocole de dégraissage et de cirage en immersion
- doc — Silca : hot melt wax, procédure et additifs
- doc — Molten Speed Wax : instructions de cirage et cycles de recire
- video — GCN Tech : chain wax vs oil, tests comparatifs
- article — Zero Friction Cycling : comparatif d'usure entre lubrifiants

### 3. Sauvetage transmission : manivelle grippée, vis cassée, interface abîmée `reparation-filetages-secours`

- **Durée :** 45 min
- **Prérequis :**
  - [Boîtiers filetés : identifier et remplacer (BSA, italien, T47)](#boitier-pedalier-filete) `boitier-pedalier-filete`
  - [Déposer et reposer un pédalier](#pedalier-depose-repose) `pedalier-depose-repose`
  - maîtriser tarauds, filières, pâtes de montage et notions de tolérance *(fondamentaux)*
  - [Réparer un filetage : taraud et filet rapporté (Helicoil)](fondamentaux.md) `filetages-reparation-taraud-helicoil`
- **Outils :** kit d'insert rapporté pour filetage de pédale, jeu de tarauds et filières, perceuse à colonne ou guide de perçage, extracteur de vis cassée, dégrippant pénétrant, pistolet à air chaud, étau avec mordaches, clé dynamométrique, pied à coulisse, équerre
- **⚠️ Sécurité :**
  - Une manivelle alu réparée par insert reste une pièce de sécurité : contrôle systématique après 100 km, et refus catégorique de réparation sur manivelle carbone ou sur toute manivelle présentant une fissure.
  - Chaleur et dégrippant : jamais de flamme sur un cadre carbone, ni à proximité d'une batterie, d'un pneu ou d'un flacon de solvant. Air chaud uniquement, ventilation, gants.

**Objectifs :**
- Réparer un filetage de pédale arraché dans une manivelle par insert rapporté ou surdimension
- Extraire un boulon de manivelle cassé sans agrandir le logement
- Décoller un boîtier grippé avec chaleur, pénétrant et couple contrôlé, sans arracher le filet du cadre
- Trancher entre réparation et remplacement sur des critères de sécurité et de coût, et tracer chaque pièce réparée

**TP — Trois sauvetages sur pièces sacrificielles**

Sur des pièces sacrificielles, tu répares un filetage de pédale arraché par insert, tu extrais un boulon de manivelle cassé et tu décolles un boîtier grippé, en documentant pour chaque cas la décision réparer ou remplacer.

Critères de validation :
1. Filetage de pédale réparé par insert : pédale vissée au couple d'environ 35 N·m, aucun jeu, contrôle refait après 20 km de test
2. Perçage d'insert réalisé d'équerre : écart d'axe inférieur ou égal à 1°, contrôlé à l'équerre ou au guide de perçage
3. Boulon cassé extrait sans agrandir le logement : diamètre contrôlé au pied à coulisse, augmentation inférieure ou égale à 0,2 mm
4. Boîtier grippé déposé sans arracher le filet du cadre : filets repassés au taraud, vissage manuel possible sur toute la longueur
5. Pour chacun des 3 cas, une décision réparer ou remplacer écrite avec argument sécurité et argument coût
6. Chaque pièce réparée marquée physiquement et tracée au carnet d'atelier avec date et échéance de contrôle

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : thread repair, tarauds et inserts rapportés
- article — Sheldon Brown : stripped pedal threads, réparation et alternatives
- doc — Wheels Manufacturing : inserts de filetage de pédale, procédure de pose
- article — Bike Gremlin : thread repair on bicycle components
- video — Park Tool : extraction d'une vis cassée et sauvetage de filetage de boîtier
