# Système « montage-et-peinture »

> Part of the Jitensha curriculum — see [`CURRICULUM.md`](../../CURRICULUM.md) for the overview. Lesson data is French (course content); scaffolding is English per project rules.

Du cadre nu au vélo fini, signé de tes mains : préparation mécanique du cadre (taraudage, surfaçage, alignement de patte et de cadre), montage complet ordonné et documenté (routage, montage à blanc, serrage au couple, M-check de livraison, y compris VAE et cargo), puis peinture custom de A à Z — décapage adapté au matériau, apprêt époxy, bases, Spray.Bike, masquage fine line, decals, vernis 2K sous EPI isocyanates, correction des défauts et découverte du thermolaquage.

**Progression logic:** Le système démarre dès le niveau 2 par la finition accessible à tous (retouches de peinture, protection de cadre) : premier contact avec le substrat sans risque. Le niveau 3 introduit le diagnostic du cadre lui-même (inspection fissures/corrosion, patte de dérailleur au comparateur DAG) — des compétences déjà rentables pour l'entretien courant. Le niveau 4 professionnalise la lecture du cadre : alignement général, fiche de montage exhaustive des standards, réparation de filetages — tout ce qui conditionne un montage réussi. Le niveau 5 déroule ensuite trois arcs strictement séquencés qui reproduisent le flux d'atelier réel : (1) préparation mécanique du cadre nu (taraudage/surfaçage BB, tube de direction, interfaces secondaires, pose du jeu de direction, coupe de pivot) ; (2) montage complet (gamme d'assemblage, routage, montage à blanc, serrage final tracé, M-check de livraison, déclinaisons VAE/cargo/bikepacking) ; (3) chaîne peinture dans l'ordre chimique incompressible (sécurité isocyanates et cabine d'abord, puis décapage par matériau, apprêt, base, Spray.Bike, masquage, decals, vernis 2K, correction des défauts, remise en service, ouverture thermolaquage). Les gestes qui appartiennent à d'autres systèmes (service du jeu de direction, montage des roues, discipline du couple, purges) sont exigés en prérequis, jamais dupliqués : ici on les orchestre dans le contexte d'un build complet.

## Niveau 2 — Intermédiaire

### 1. Retoucher la peinture d'un cadre `retouche-peinture-cadre`

- **Durée :** 30 min
- **Prérequis :**
  - [Graisse, pâte carbone, frein-filet, antiseize](fondamentaux.md) `pates-assemblage`
  - Savoir nettoyer et dégraisser correctement un cadre *(fondamentaux)*
- **Outils :** Papier abrasif grains 400/600/1000, Convertisseur de rouille, Stylo ou pot de peinture de retouche, Vernis transparent 1K (ou vernis à ongles incolore), Alcool isopropylique, Chiffons microfibre, Cotons-tiges, Loupe ou lampe frontale

**Objectifs :**
- Distinguer un défaut cosmétique d'un dégât qui menace le cadre (rouille active, fissure sous la peinture)
- Traiter un point de rouille naissant sur un cadre acier (ponçage localisé, convertisseur)
- Appliquer une retouche propre et discrète au pinceau ou au stylo
- Sceller et protéger la retouche pour qu'elle tienne dans le temps

**TP — Retouche de trois éclats sur un cadre cobaye**

Sur un cadre acier ou alu marqué par l'usage, tu sélectionnes trois éclats (dont au moins un avec rouille naissante), tu les traites de bout en bout et tu documentes le résultat.

Critères de validation :
1. 1. Les trois zones poncées ne présentent plus aucune trace de rouille visible à la loupe avant application de la retouche.
2. 2. La retouche déborde de moins de 1 mm autour de l'éclat d'origine.
3. 3. Après séchage de 24 h, la marche entre retouche et peinture d'origine est à peine perceptible à l'ongle.
4. 4. Photos avant/après consignées au carnet d'atelier avec produits utilisés et temps de séchage.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : retouche et entretien de la peinture d'un cadre
- video — GCN : réparer les éclats de peinture sur un cadre de vélo
- article — Bike Gremlin : traitement de la rouille sur cadre acier
- doc — Spray.Bike : produits de retouche et pocket cans

### 2. Protéger un cadre : film et protège-base `protection-cadre-film`

- **Durée :** 30 min
- **Prérequis :**
  - [Dégraisser la transmission à fond](fondamentaux.md) `degraissage-transmission`
- **Outils :** Film polyuréthane (prédécoupé ou en rouleau), Protège-base, Cutter et ciseaux fins, Raclette souple, Pulvérisateur eau + goutte de savon, Alcool isopropylique, Chiffons microfibre, Sèche-cheveux (optionnel)

**Objectifs :**
- Repérer les zones d'usure d'un cadre : frottement de gaines, base côté chaîne, ragage de talon, points de portage
- Poser un film de protection polyuréthane sans bulles ni plis
- Poser un protège-base (néoprène ou adhésif) durable
- Adapter la protection au type de vélo (VTT, cargo chargé, bikepacking avec sacoches)

**TP — Protection complète d'un vélo en service**

Tu identifies les points d'usure réels d'un vélo utilisé quotidiennement (traces existantes = preuves), puis tu poses film et protège-base sur les quatre zones les plus exposées.

Critères de validation :
1. 1. Les quatre zones d'usure critiques sont identifiées et couvertes (croisement de gaines au tube de direction, base droite, tube diagonal face aux projections, zone de talon ou de sacoche selon le vélo).
2. 2. Aucune bulle de plus de 2 mm visible sur les films posés (les micro-bulles d'eau de pose doivent disparaître sous 48 h).
3. 3. Découpes suivant le contour des tubes à 2 mm près, sans chevauchement sur les zones de serrage (collier de selle, portées).
4. 4. Après 24 h, aucun bord de film ne se soulève (test ongle léger sur chaque bord).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — 3M : pose de film polyuréthane de protection (PPF)
- video — All Mountain Style : pose de kits de protection de cadre
- video — GCN Tech : protéger son cadre des frottements et impacts

## Niveau 3 — Avancé

### 1. Redresser une patte de dérailleur au DAG `alignement-patte-dag`

- **Durée :** 30 min
- **Prérequis :**
  - [Patte de dérailleur](transmission.md) `patte-derailleur-controle-visuel`
  - Roue arrière montée, centrée et serrée correctement (la jante sert de référence de mesure) *(roues-et-pneus)*
  - [T'équiper niveau 3](fondamentaux.md) `outillage-avance`
- **Outils :** Comparateur de patte (Park Tool DAG-2.2 ou équivalent), Pied d'atelier, Clés Allen, Loupe, Patte de rechange (démonstration)

**Objectifs :**
- Mesurer le désalignement d'une patte aux quatre points cardinaux avec un outil DAG
- Redresser une patte alu par passes progressives sans la fragiliser
- Décider quand remplacer plutôt que redresser (fissure, patte déjà redressée, alu écroui)
- Situer l'UDH et la patte SRAM Transmission : ce qui disparaît, ce qui reste à contrôler

**TP — Mesure et redressage d'une patte désalignée**

Sur un vélo cobaye dont la patte a été volontairement faussée, tu mesures l'écart aux quatre points, tu redresses par passes, puis tu valides par l'indexation.

Critères de validation :
1. 1. Écarts mesurés à 3 h, 6 h, 9 h et 12 h consignés avant et après intervention.
2. 2. Après redressage, écart entre le point le plus proche et le plus éloigné de la jante ≤ 4 mm (tolérance Park Tool), idéalement ≤ 2 mm.
3. 3. Contrôle à la loupe : aucune fissure ni amorce de rupture sur la patte redressée.
4. 4. Validation fonctionnelle : passage net sur tous les pignons, montée et descente, sur 2 allers-retours consécutifs.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : alignement de patte de dérailleur avec le DAG-2.2
- article — Park Tool : Derailleur Hanger Alignment (procédure et tolérances)
- doc — SRAM : standard UDH et montage Full Mount T-Type
- article — Bike Gremlin : pattes de dérailleur : rôle, matériaux, remplacement

## Niveau 4 — Expert

### 1. Contrôler l'alignement d'un cadre `controle-alignement-cadre`

- **Durée :** 40 min
- **Prérequis :**
  - [La carte d'identité d'un cadre](fondamentaux.md) `carte-identite-cadre`
  - [Inspecter un cadre : fissures, fatigue, impacts](fondamentaux.md) `inspection-cadre`
- **Outils :** Ficelle fine non élastique, Pied à coulisse, Réglet métallique, Jauges d'alignement de pattes (Park Tool FAG-2 ou équivalent), Pied d'atelier, Carnet d'atelier

**Objectifs :**
- Réaliser un contrôle d'alignement à la ficelle (string check) et interpréter l'écart
- Mesurer l'écartement des pattes arrière (120/126/130/135/142/148 mm) et le comparer au standard nominal
- Contrôler le parallélisme des pattes avec des jauges dédiées
- Savoir ce qui se redresse à froid (acier uniquement) et ce qui ne se redresse jamais (alu, carbone)

**TP — Bilan d'alignement complet d'un cadre acier**

Sur un cadre acier nu, tu réalises le contrôle ficelle, la mesure d'écartement et le contrôle de parallélisme des pattes, puis tu rédiges un bilan avec décision.

Critères de validation :
1. 1. Contrôle ficelle : écarts gauche/droite mesurés au tube de selle, symétrie ≤ 2 mm ou défaut chiffré et consigné.
2. 2. Écartement des pattes mesuré au pied à coulisse : écart ≤ 1 mm par rapport au standard nominal identifié.
3. 3. Parallélisme des pattes contrôlé aux jauges : faces des jauges parallèles avec un jour ≤ 0,5 mm.
4. 4. Bilan écrit rendu : cadre droit / redressable à froid (acier) / hors service, avec les trois mesures à l'appui.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Sheldon Brown : vérification et redressage d'alignement de cadre acier
- article — Park Tool : alignement des pattes de cadre avec les jauges FAG-2
- article — Bike Gremlin : écartements de pattes arrière et compatibilités (OLD)
- livre — Roger Musson : notion de centrage et références de mesure

### 2. Établir la fiche de montage d'un cadre nu `fiche-montage-cadre-nu`

- **Durée :** 45 min
- **Prérequis :**
  - [Anatomie du poste de pilotage](direction-et-peripheriques.md) `anatomie-poste-pilotage`
  - [Boîtiers filetés : identifier et remplacer](transmission.md) `boitier-pedalier-filete`
  - [Freinage des vélos lourds : VAE et cargo](freinage.md) `freinage-vae-cargo`
  - Connaître les formats d'axes et d'écartements de roues *(roues-et-pneus)*
  - [Mesurer et décoder : pied à coulisse et marquages](fondamentaux.md) `pied-a-coulisse-et-marquages`
  - [La carte d'identité d'un cadre](fondamentaux.md) `carte-identite-cadre`
- **Outils :** Pied à coulisse numérique, Réglet, Lampe, Fiche de montage vierge (modèle fourni), Fiches techniques des composants pressentis, Carnet d'atelier

**Objectifs :**
- Relever et mesurer toutes les interfaces d'un cadre : boîtier, tube de direction (SHIS), tige de selle, collier, axes, fixations de freins, patte/UDH, passage de pneu, routage
- Vérifier la compatibilité de chaque composant pressenti avec les fiches fabricants
- Rédiger une fiche de montage exploitable : pièces, produits d'assemblage, couples cibles
- Anticiper les pièges classiques (cône de fourche 1,5 pouce, di2 vs mécanique, durite intégrée, entraxe de collier)

**TP — Fiche de montage complète d'un cadre réel**

Sur un cadre nu (ou un vélo que tu déshabilles mentalement), tu mesures et identifies chaque interface, tu choisis un groupe complet compatible et tu rédiges la fiche de montage.

Critères de validation :
1. 1. Les 12 interfaces du cadre identifiées et consignées sans case vide : boîtier, haut et bas du tube de direction (code SHIS), tige de selle, collier, axe avant, axe arrière, frein avant, frein arrière, patte, passage pneu maxi, type de routage.
2. 2. Diamètre de tige de selle mesuré au pied à coulisse à ±0,1 mm et confirmé par le marquage ou la documentation du cadre.
3. 3. Liste de composants établie : zéro conflit détecté au contrôle croisé avec les fiches fabricants (contrôle par un tiers ou en autocontrôle documenté).
4. 4. Tableau des couples de serrage et des produits d'assemblage complété pour 100 % des interfaces listées.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Cane Creek : guide d'identification des jeux de direction (SHIS)
- article — Park Tool : standards et identification des boîtiers de pédalier
- article — Bike Gremlin : compatibilités transmission et standards de cadre
- doc — SRAM : spécifications UDH et documentation de montage
- livre — Lennard Zinn : préparer un montage complet : choix et compatibilité des composants

### 3. La chaîne peinture `process-peinture-securite-epi`

- **Durée :** 35 min
- **Prérequis :**
  - Organisation d'un poste de travail propre et méthodique *(fondamentaux)*
- **Outils :** Masque à cartouches A2P3 + cartouches neuves, Combinaison jetable, Gants nitrile, Bâches et film plastique, Ventilateur d'extraction, Bandelette ou fumigène de contrôle de flux, Fiches de données de sécurité (FDS) des produits, Hygromètre/thermomètre
- **⚠️ Sécurité :**
  - Isocyanates du durcisseur 2K : toxiques par inhalation et sensibilisants à vie (asthme professionnel). Masque à cartouches A2P3 en bon état, combinaison, gants nitrile et ventilation forcée — non négociable, même pour « juste une passe ».
  - Jamais de pulvérisation 2K dans un local habité ou non ventilé ; un masque anti-poussière FFP ne protège PAS des vapeurs.

**Objectifs :**
- Décrire la chaîne complète : décapage → apprêt → base → décor → vernis, avec les temps de recouvrement
- Différencier 1K et 2K et comprendre pourquoi le durcisseur isocyanate change tout côté sécurité
- T'équiper correctement : masque à cartouches A2P3, combinaison, gants nitrile, ventilation
- Monter une cabine de peinture improvisée et ventilée dans un espace amateur

**TP — Monter ta cabine et valider tes EPI**

Avant de toucher un aérosol, tu montes ta cabine improvisée, tu vérifies ton masque, tu lis les FDS de tes produits et tu écris ton plan de peinture complet.

Critères de validation :
1. 1. Cabine improvisée montée : sens du flux d'air vérifié (bandelette ou fumée) avec extraction vers l'extérieur, zone de passage balisée.
2. 2. Essai d'étanchéité du masque réalisé (contrôles en pression positive et négative) : aucune fuite perçue, date des cartouches notée.
3. 3. FDS des trois produits prévus lues : pictogrammes de danger et EPI requis restitués par écrit sans erreur pour chacun.
4. 4. Plan de chaîne peinture rédigé : chaque couche avec son temps de recouvrement et sa fenêtre, sourcé sur les fiches techniques.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — INRS : risques des isocyanates et protection respiratoire en peinture
- doc — SprayMax : fiches techniques et de sécurité des aérosols 2K
- doc — 3M : choix et test d'étanchéité des masques à cartouches
- video — Spray.Bike : vue d'ensemble du processus de peinture d'un cadre

### 4. Décaper un cadre acier `decapage-cadre-acier`

- **Durée :** 45 min
- **Prérequis :**
  - [La chaîne peinture](#process-peinture-securite-epi) `process-peinture-securite-epi`
  - [Anatomie du vélo : nomme chaque pièce](fondamentaux.md) `anatomie-velo`
- **Outils :** Décapant chimique gel, Spatule plastique, Papier abrasif grains 80 à 240, Brosse laiton et laine d'acier, Convertisseur de rouille, Bouchons et ruban aluminium (filetages/portées), Gants butyle ou nitrile épais, Lunettes, Dégraissant silicone-free
- **⚠️ Sécurité :**
  - Décapant chimique : corrosif pour la peau et les yeux. Gants épais (butyle de préférence), lunettes fermées, travail en extérieur ou sous forte ventilation.
  - Ponçage d'anciennes peintures : masque FFP2 minimum — les peintures de cadres anciens peuvent contenir du plomb.

**Objectifs :**
- Choisir la méthode de décapage : décapant chimique, ponçage mécanique, sablage sous-traité
- Protéger filetages, alésages et portées de roulements avant toute attaque
- Éliminer la rouille (mécanique + convertisseur) jusqu'au métal sain
- Amener le substrat à l'état « prêt à apprêter » : propre, mat, dégraissé, intouchable à mains nues

**TP — Décapage complet d'un cadre acier sacrificiel**

Tu masques les zones mécaniques, tu décapes le cadre jusqu'au métal, tu traites la rouille et tu valides l'état de surface prêt à apprêter.

Critères de validation :
1. 1. Filetages de boîtier, tube de selle et portées de roulements bouchés/masqués avant attaque : contrôle après décapage = zéro produit ou abrasif à l'intérieur.
2. 2. Surface décapée à ≥ 95 % de métal nu : aucune écaille non adhérente restante au test de la spatule.
3. 3. Rouille traitée : aucune réapparition de trace orange après 24 h en atmosphère d'atelier.
4. 4. Dégraissage final validé : l'eau mouille en film continu sans perler, et un chiffon blanc passé sur le cadre reste propre.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Spray.Bike : préparation et décapage d'un cadre avant peinture
- article — Sheldon Brown : préparation d'un cadre acier pour repeinture
- article — INRS : risques chimiques des décapants et EPI adaptés
- doc — SprayMax : préparation du support avant système 2K

### 5. Préparer un cadre alu ou carbone pour la peinture `preparation-peinture-alu-carbone`

- **Durée :** 40 min
- **Prérequis :**
  - [Inspecter un cadre : fissures, fatigue, impacts](fondamentaux.md) `inspection-cadre`
- **Outils :** Papier abrasif à l'eau grains 320/400/600, Cale à poncer souple, Mastic polyester fin + durcisseur, Primaire d'accrochage (etch primer pour alu), Masque FFP3, Aspiration ou seau d'eau (ponçage humide), Dégraissant, Lampe de contrôle en lumière rasante
- **⚠️ Sécurité :**
  - Poussière de carbone : fibres irritantes pour la peau et les voies respiratoires. Ponçage à l'eau ou aspiration à la source + masque FFP3 obligatoires.
  - Ne jamais décaper chimiquement un cadre carbone : le décapant attaque la résine époxy et détruit la structure.

**Objectifs :**
- Comprendre pourquoi décapant fort et sablage agressif sont interdits sur le carbone
- Mater un cadre carbone au ponçage fin sans exposer les fibres
- Préparer l'aluminium : matage, gestion de l'anodisation, primaire d'accrochage
- Rattraper les petits défauts au mastic et les rendre invisibles

**TP — Matage et rattrapage sur deux substrats**

Tu prépares une zone d'un cadre alu (matage + primaire d'accrochage) et un cadre ou une pièce carbone (ponçage humide + mastic sur un défaut), avec contrôle en lumière rasante.

Critères de validation :
1. 1. Carbone : vernis d'origine maté à 100 % au grain 320-400, aucune fibre exposée au contrôle en lumière rasante.
2. 2. Ponçage humide : zéro poussière libre sur le poste (chiffon de contrôle blanc propre en fin de séance).
3. 3. Alu : surface matée et primaire d'accrochage appliqué dans la fenêtre de recouvrement de la fiche technique (heures notées au carnet).
4. 4. Défaut masticé : après ponçage, marche indétectable au doigt et invisible en lumière rasante à 30 cm.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Spray.Bike : préparation des cadres alu et carbone
- video — Luescher Teknik : ce que la peinture peut cacher ou abîmer sur un cadre carbone
- doc — 3M : abrasifs et méthode de ponçage humide
- doc — SprayMax : primaires d'accrochage par type de substrat

### 6. Appliquer l'apprêt époxy 2K `appret-epoxy-2k`

- **Durée :** 40 min
- **Prérequis :**
  - [Préparer un cadre alu ou carbone pour la peinture](#preparation-peinture-alu-carbone) `preparation-peinture-alu-carbone`
  - [Décaper un cadre acier](#decapage-cadre-acier) `decapage-cadre-acier`
  - [La chaîne peinture](#process-peinture-securite-epi) `process-peinture-securite-epi`
- **Outils :** Apprêt époxy 2K (aérosol activable ou pistolet), Balance ou doseur (si pistolet), Masque A2P3, combinaison, gants nitrile, Papier à l'eau grain 400 + guide de ponçage (poudre contrastée), Chiffon collant (tack cloth), Potence de suspension du cadre, Thermomètre/hygromètre
- **⚠️ Sécurité :**
  - Apprêt 2K = durcisseur isocyanate : masque A2P3, gants nitrile, combinaison et ventilation forcée pour toute la durée de l'application et du désolvatage.

**Objectifs :**
- Expliquer le triple rôle de l'apprêt : accrochage, anticorrosion, fond uniforme
- Activer un produit 2K en respectant ratio et pot life
- Appliquer en couches croisées fines à distance constante
- Poncer l'apprêt au guide pour une surface parfaitement uniforme

**TP — Apprêtage complet de ton cadre**

Tu actives l'apprêt, tu l'appliques en couches croisées sur le cadre suspendu, puis tu ponces au guide jusqu'à une surface uniforme prête pour la base.

Critères de validation :
1. 1. Mélange activé selon le ratio de la fiche technique (erreur de dosage ≤ 5 %) et heure de fin de pot life notée avant la première passe.
2. 2. Deux couches croisées appliquées : recouvrement de 50 % entre passes, distance de pulvérisation maintenue entre 15 et 20 cm.
3. 3. Après séchage : zéro coulure sur l'ensemble du cadre.
4. 4. Ponçage au guide grain 400 : 100 % de la poudre guide éliminée, aucune zone brillante résiduelle, aucun perçage jusqu'au substrat.
5. 5. Aucune transparence du substrat en lumière rasante (épaisseur régulière).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SprayMax : application des apprêts 2K en aérosol
- video — Spray.Bike : Prep and Prime : apprêter un cadre
- article — INRS : protection respiratoire lors de l'application de produits 2K
- doc — 3M : ponçage au guide et préparation entre couches

### 7. Poser la base couleur `base-couleur-aerosol`

- **Durée :** 40 min
- **Prérequis :**
  - [Appliquer l'apprêt époxy 2K](#appret-epoxy-2k) `appret-epoxy-2k`
  - [La chaîne peinture](#process-peinture-securite-epi) `process-peinture-securite-epi`
- **Outils :** Aérosols de base couleur (qualité carrosserie), Tube d'entraînement (chute acier ou vieux cadre), Masque à cartouches A2 minimum, Chiffon collant, Lampe de contrôle, Chronomètre et carnet (journal des passes)
- **⚠️ Sécurité :**
  - Même en base 1K, les solvants projetés imposent masque à cartouches A2 et ventilation : un local fermé sans extraction est exclu.

**Objectifs :**
- Maîtriser le geste aérosol : distance, vitesse, déclenchement hors pièce, recouvrement 50 %
- Monter l'opacité par couches fines successives sans coulure
- Gérer les zones pièges d'un cadre : boîtier, jonctions de tubes, pattes, passages internes
- Tenir un journal des passes avec les temps de recouvrement de la fiche technique

**TP — Mise en couleur complète du cadre**

Après échauffement sur tube témoin, tu poses la base couleur sur tout le cadre en couches croisées, journal des passes à l'appui.

Critères de validation :
1. 1. Échauffement validé sur tube témoin : 3 passes consécutives sans coulure avant d'attaquer le cadre.
2. 2. Opacité complète : aucune variation de teinte ni transparence visible en lumière du jour à 1 m.
3. 3. Zéro coulure sur le cadre ; état de surface lisse au toucher (peau d'orange limitée).
4. 4. Zones difficiles (boîtier, jonctions, pattes) couvertes sans surcharge : aucune coulure dans les angles internes.
5. 5. Journal des passes tenu et horodaté : temps de recouvrement de la fiche technique respectés à 100 %.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Spray.Bike : Base Coat : technique de mise en couleur
- doc — SprayMax : bases couleur et fenêtres de recouvrement
- video — Fat Creations : gestuelle de pulvérisation sur cadre de vélo

### 8. Peindre au Spray.Bike : la technique poudre-aérosol `technique-spray-bike`

- **Durée :** 35 min
- **Prérequis :**
  - [Préparer un cadre alu ou carbone pour la peinture](#preparation-peinture-alu-carbone) `preparation-peinture-alu-carbone`
  - [Décaper un cadre acier](#decapage-cadre-acier) `decapage-cadre-acier`
  - [Poser la base couleur](#base-couleur-aerosol) `base-couleur-aerosol`
- **Outils :** Bombes Spray.Bike (couleur + fixateur éventuel), Masque à cartouches A2, Gants nitrile, Chiffon collant, Tube témoin, Lampe de contrôle

**Objectifs :**
- Comprendre ce qui distingue Spray.Bike d'une peinture solvant classique (poudre acrylique, application très proche, toucher sec rapide)
- Appliquer à 5-10 cm avec la gestuelle spécifique, sans les réflexes carrosserie
- Choisir la préparation adaptée et décider vernis ou pas selon l'usage
- Explorer la gamme : Pocket, effets (Keirin flake), transparents

**TP — Mise en couleur Spray.Bike et comparatif raisonné**

Tu peins un cadre (ou un triangle avant sacrificiel) au Spray.Bike en appliquant la gestuelle spécifique, puis tu rédiges un comparatif avec la base solvant classique.

Critères de validation :
1. 1. Application à 5-10 cm régulière : couverture uniforme dès la première couche sur au moins 90 % de la surface.
2. 2. Zéro coulure (avec cette formule, toute coulure = distance ou dosage fautifs : cause analysée et consignée le cas échéant).
3. 3. Toucher sec en 20 min maximum : aucun marquage au doigt ganté après ce délai.
4. 4. Comparatif écrit Spray.Bike vs base solvant : au moins 5 différences observées et documentées (préparation, gestuelle, rendu, résistance, vernis).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Spray.Bike : Part One : Prep and Prime
- video — Spray.Bike : Part Two : Base Coat et effets
- doc — Spray.Bike : guide officiel d'application et gamme de produits

### 9. Poser des décalcomanies : sous vernis ou sur vernis `pose-decals`

- **Durée :** 30 min
- **Prérequis :**
  - [Poser la base couleur](#base-couleur-aerosol) `base-couleur-aerosol`
- **Outils :** Decals (waterslide et vinyle), Bac d'eau tiède + goutte de savon, Raclette souple feutrée, Réglet et ruban repère, Aiguille fine, Chiffon microfibre

**Objectifs :**
- Distinguer waterslide, vinyle à transfert et vinyle épais — et où chacun se pose dans la chaîne
- Positionner des decals avec repères mesurés, symétriques des deux côtés
- Marouffler sans bulles ni plis sur des tubes cylindriques
- Décider sous-vernis (protégé, définitif) vs sur-vernis (remplaçable)

**TP — Pose d'un jeu complet de decals**

Tu poses un jeu de decals (tube diagonal des deux côtés + tube de selle) avec repérage mesuré, puis tu valides l'adhérence avant vernissage.

Critères de validation :
1. 1. Alignement : axe de chaque décal parallèle à l'axe du tube à ±1 mm sur sa longueur, hauteurs gauche/droite identiques à ±1 mm.
2. 2. Zéro bulle > 1 mm après maroufflage ; micro-bulles percées à l'aiguille invisibles à 50 cm.
3. 3. Waterslide : temps de trempage conforme à la notice, aucun déchirement ni pli à la pose.
4. 4. Bords totalement adhérents avant vernissage : test à l'ongle léger sans soulèvement sur 100 % du périmètre.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SprayMax : vernir par-dessus des decals : compatibilités
- video — Fat Creations : pose de decals sous vernis sur cadre custom
- doc — Spray.Bike : finitions et personnalisation d'un cadre peint

### 10. Masquer des motifs : fine line, bi-ton et dégradés `masquage-fine-line`

- **Durée :** 45 min
- **Prérequis :**
  - [Poser la base couleur](#base-couleur-aerosol) `base-couleur-aerosol`
- **Outils :** Ruban fine line 3 et 6 mm, Ruban de masquage carrosserie, Papier de masquage et film, Cutter de précision, Réglet souple, Crayon gras, Aérosols de couleur secondaire, Masque à cartouches A2

**Objectifs :**
- Concevoir un motif simple et le reporter symétriquement sur le cadre
- Poser du ruban fine line sur des tubes courbes sans facettes
- Masquer les grandes zones (papier, film) sans brouillard infiltré
- Démasquer au bon moment pour des arêtes nettes sans arrachement

**TP — Bi-ton avec liseré sur cadre en cours de peinture**

Tu conçois un motif bi-ton avec liseré traversant un raccord de tubes, tu masques, tu peins la deuxième couleur et tu démasques au timing optimal.

Critères de validation :
1. 1. Ruban fine line posé sur au moins un raccord de tube courbe : ligne fluide, aucune facette visible à 50 cm.
2. 2. Démasquage à peinture « hors poussière » : arêtes nettes avec bavures ≤ 0,5 mm sur toute la longueur, zéro arrachement de la couche inférieure.
3. 3. Zéro brouillard de pulvérisation sur les zones masquées (contrôle complet après démasquage).
4. 4. Symétrie gauche/droite du motif : écart ≤ 1 mm mesuré au réglet depuis des repères fixes du cadre.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — 3M : rubans fine line : pose sur surfaces courbes
- video — Fat Creations : masquage de motifs custom sur cadres
- video — Spray.Bike : masquages et effets décoratifs

### 11. Vernir au 2K : activation, application, durcissement `vernis-2k-aerosol`

- **Durée :** 40 min
- **Prérequis :**
  - [Masquer des motifs : fine line, bi-ton et dégradés](#masquage-fine-line) `masquage-fine-line`
  - [Poser des décalcomanies : sous vernis ou sur vernis](#pose-decals) `pose-decals`
  - [La chaîne peinture](#process-peinture-securite-epi) `process-peinture-securite-epi`
- **Outils :** Aérosol vernis 2K (type SprayMax 2K), Masque A2P3 + cartouches neuves, Combinaison et gants nitrile, Chiffon collant, Thermomètre/hygromètre, Néon ou lampe tubulaire (contrôle du tendu), Chronomètre
- **⚠️ Sécurité :**
  - Vernis 2K = isocyanates : masque A2P3 à cartouches neuves, combinaison, gants nitrile, ventilation forcée du début de l'application à la fin du désolvatage. Un masque anti-poussière ne protège PAS.
  - Aérosol activé = utilisable environ 24-48 h : planifie l'intégralité du vernissage avant de percuter le durcisseur.

**Objectifs :**
- Activer un aérosol 2K (percussion du durcisseur) et planifier autour du pot life de 24-48 h
- Appliquer couche d'accroche puis couches pleines pour un tendu brillant sans coulure
- Contrôler température et hygrométrie pour éviter voile et peau d'orange
- Respecter le durcissement complet avant manipulation et remontage

**TP — Vernissage 2K complet de ton cadre**

Tu actives l'aérosol, tu vernis le cadre en trois couches et tu contrôles tendu, brillance et durcissement selon la fiche technique.

Critères de validation :
1. 1. EPI complet porté sans interruption (autocontrôle photo horodaté en début et fin de session).
2. 2. Une couche d'accroche fine + deux couches pleines : brillance uniforme, zéro coulure sur tout le cadre.
3. 3. Tendu contrôlé : le reflet d'un néon à 30 cm reste lisible avec une déformation faible (peau d'orange limitée).
4. 4. Aucune zone mate (manque) détectée en lumière rasante.
5. 5. Durcissement respecté : aucun marquage à l'ongle après le délai de la fiche technique (typiquement 24 h à 20 °C), date de remontage planifiée en conséquence.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SprayMax : aérosol 2K : activation, application, temps de séchage
- video — Spray.Bike : vernir un cadre : Clear Coat
- article — INRS : isocyanates : prévention lors de la mise en œuvre de vernis 2K

### 12. Le thermolaquage (powder coating) `thermolaquage-decouverte`

- **Durée :** 30 min
- **Prérequis :**
  - [Décaper un cadre acier](#decapage-cadre-acier) `decapage-cadre-acier`
  - [Vernir au 2K : activation, application, durcissement](#vernis-2k-aerosol) `vernis-2k-aerosol`
  - [La carte d'identité d'un cadre](fondamentaux.md) `carte-identite-cadre`
- **Outils :** Bouchons filetés et masquages silicone haute température, Fiche de travail pour le prestataire, Pied à coulisse, Étiquettes

**Objectifs :**
- Comprendre le principe : poudre électrostatique + cuisson 160-200 °C, et ses conséquences
- Identifier ce qui passe au four (acier, alu nu) et ce qui est exclu (carbone, inserts collés, pièces plastiques)
- Préparer un cadre pour le thermolaqueur : bouchons haute température, consignes de masquage, fiche de travail
- Comparer thermolaquage et peinture liquide : coût, durabilité, épaisseur, finesse de finition

**TP — Préparer et spécifier un cadre pour thermolaquage**

Tu prépares un cadre acier pour l'envoi chez un thermolaqueur : éligibilité vérifiée, masquages haute température posés, fiche de consignes rédigée, et comparatif chiffré avec ta peinture liquide.

Critères de validation :
1. 1. Fiche d'éligibilité remplie sans erreur : matériau, inserts collés ou soudés, pièces à déposer, décision go/no-go argumentée.
2. 2. 100 % des filetages et portées protégés par bouchons/masquages haute température (compte des points protégés = compte des interfaces de la fiche de montage).
3. 3. Fiche de consignes au prestataire rédigée : zones à masquer, épaisseur maxi aux portées, teinte RAL, finition.
4. 4. Comparatif écrit thermolaquage vs peinture liquide sur 5 critères minimum (coût, durabilité, épaisseur, finesse, réparabilité), chiffré à partir d'un devis réel ou d'une grille tarifaire.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Qualisteelcoat : principes et exigences du thermolaquage
- article — Spray.Bike : comparaison des finitions de cadre
- article — Sheldon Brown : options de refinition d'un cadre acier

## Niveau 5 — Maître

### 1. Tarauder et surfacer un boîtier fileté `taraudage-surfacage-boitier`

- **Durée :** 45 min
- **Prérequis :**
  - [Installer un groupe complet](transmission.md) `montage-groupe-complet`
  - [Étalonne ta main : pratique délibérée du couple](fondamentaux.md) `etalonnage-sensoriel-couple`
  - [Établir la fiche de montage d'un cadre nu](#fiche-montage-cadre-nu) `fiche-montage-cadre-nu`
- **Outils :** Jeu taraud/surfaceur guidé (Park Tool BTS-1 ou équivalent, ou service atelier), Huile de coupe, Pinceau et dégraissant, Graisse de montage, Chiffons, Cuvette ou boîtier neuf pour test

**Objectifs :**
- Identifier le filetage du boîtier (BSA 1,37"×24 TPI, italien 36×24, T47) et le sens de chaque côté
- Passer les tarauds guidés sans croiser les filets, peinture ou pas
- Surfacer les deux faces du boîtier pour des portées parallèles
- Savoir quand s'abstenir : press-fit, boîtier carbone à insert collé, filets déjà nets

**TP — Préparation complète d'un boîtier BSA peint**

Sur un cadre acier ou alu dont le boîtier est encombré de peinture ou de bavures, tu tarauds les deux côtés puis tu surfaces les deux faces, jusqu'au vissage à la main.

Critères de validation :
1. 1. Sens des filets identifié et annoncé à voix haute avant tout engagement : côté transmission = pas à gauche (BSA), côté gauche = pas à droite. Zéro erreur tolérée.
2. 2. Tarauds engagés à la main sur au moins 2 tours avant tout effort : aucun croisement de filet constaté.
3. 3. Après passage, une cuvette ou un boîtier neuf se visse à la main, sans outil, sur toute la course des deux côtés.
4. 4. Surfaçage : trace de coupe continue sur 360° des deux faces (appui complet), contrôlée en lumière rasante.
5. 5. Boîtier nettoyé (zéro copeau au chiffon et à l'aimant) et filets graissés avant remontage.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : taraudage et surfaçage de boîtier de pédalier
- article — Park Tool : standards de boîtiers et sélection d'outils
- article — Bike Gremlin : filetages de boîtier de pédalier (BSA, italien, T47)
- doc — Unior : outillage de préparation de cadre : mode d'emploi

### 2. Surfacer et aléser le tube de direction d'un cadre `surfacage-tube-direction`

- **Durée :** 40 min
- **Prérequis :**
  - [Anatomie du poste de pilotage](direction-et-peripheriques.md) `anatomie-poste-pilotage`
  - [Réviser un jeu de direction ahead](direction-et-peripheriques.md) `revision-jeu-direction-ahead`
- **Outils :** Fraise à surfacer/aléser guidée pour tube de direction (ou service atelier), Pied à coulisse numérique, Huile de coupe, Dégraissant, chiffons, Lampe, Cuvettes de jeu de direction pour contrôle à blanc

**Objectifs :**
- Expliquer pourquoi des faces non parallèles condamnent un jeu de direction à s'user vite
- Mesurer l'alésage et le comparer à la norme SHIS visée avant toute coupe
- Utiliser une fraise guidée pour surfacer (et aléser si nécessaire) les deux extrémités
- Identifier les cas interdits : cadres carbone, cuvettes intégrées IS, tubes déjà à la cote

**TP — Surfaçage des deux faces d'un tube de direction métallique**

Sur un cadre acier ou alu à cuvettes externes ou semi-intégrées, tu mesures, tu surfaces les deux faces à la fraise guidée et tu valides par un montage à blanc des cuvettes.

Critères de validation :
1. 1. Diamètre d'alésage mesuré haut et bas avant intervention, consigné à 0,05 mm près et comparé à la norme SHIS visée.
2. 2. Trace de coupe continue sur 360° des deux faces après fraisage (aucune zone non touchée).
3. 3. Cuvettes posées à blanc : aucun jour visible à la lampe entre cuvette et face, sur toute la circonférence.
4. 4. Tube nettoyé, copeaux évacués, portées légèrement graissées, le tout consigné avec photos au carnet.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : surfaçage et alésage du tube de direction
- doc — Cane Creek : préparation du cadre et tolérances des logements de jeu de direction
- doc — Chris King : exigences de préparation du tube de direction avant pose
- outil — Unior : fraises de surfaçage de tube de direction

### 3. Préparer les interfaces secondaires `preparation-interfaces-secondaires`

- **Durée :** 35 min
- **Prérequis :**
  - [Réparer un filetage](fondamentaux.md) `filetages-reparation-taraud-helicoil`
  - [Panorama des systèmes de freinage](freinage.md) `panorama-systemes-freinage`
- **Outils :** Alésoir ou brosse cylindrique de tube de selle, Fraise à surfacer post-mount (ou service atelier), Tarauds M5/M6/M10×1, Huile de coupe, Pied à coulisse, Tige de selle au diamètre nominal, Graisse ou pâte carbone selon matériau

**Objectifs :**
- Aléser ou nettoyer un tube de selle pour une insertion sans point dur ni jeu
- Surfacer des tasseaux post-mount pour un étrier d'aplomb
- Repasser tous les petits filetages du cadre : porte-bidon, garde-boue, porte-bagages, patte M10×1
- Contrôler la profondeur d'insertion mini de la tige de selle par rapport au cadre

**TP — Tour complet des interfaces d'un cadre avant montage**

Sur le cadre destiné à ton montage complet, tu prépares tube de selle, tasseaux et chaque filetage secondaire, avec contrôle fonctionnel systématique.

Critères de validation :
1. 1. La tige de selle au diamètre nominal coulisse sur toute la profondeur d'insertion sans point dur, avec un jeu latéral < 1 mm mesuré en rotation.
2. 2. Tasseaux post-mount surfacés : étrier monté et centré sans recours à plus de 0,2 mm de cales de correction.
3. 3. 100 % des inserts M5/M6 du cadre acceptent une vis vissée à la main sur toute la longueur (compte des inserts consigné).
4. 4. Filetage de patte M10×1 repassé : le dérailleur (ou un gabarit) se visse sans effort ni jeu anormal.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : surfaçage des tasseaux de frein à disque (DT-5.2)
- article — Park Tool : préparation du tube de selle et diamètres de tige
- article — Bike Gremlin : diamètres de tige de selle et ajustement
- doc — Unior : outillage de préparation post-mount et tube de selle

### 4. Presser un jeu de direction neuf `pose-jeu-direction-cadre-nu`

- **Durée :** 30 min
- **Prérequis :**
  - [Jeu de direction ahead](direction-et-peripheriques.md) `precharge-jeu-direction-ahead`
  - [Surfacer et aléser le tube de direction d'un cadre](#surfacage-tube-direction) `surfacage-tube-direction`
  - Lire la nomenclature SHIS *(direction-et-peripheriques)*
  - [Extraire et presser cuvettes et crown race](direction-et-peripheriques.md) `remplacer-cuvettes-direction`
- **Outils :** Presse à jeu de direction (Park Tool HHP-2 ou presse à tige filetée M12 maison), Adaptateurs/coupelles adaptés au diamètre, Chasse-cône de fourche (ou tube PVC ajusté pour cône fendu), Graisse de montage, Jeu de cales de 0,05 mm, Lampe

**Objectifs :**
- Choisir les adaptateurs de presse et vérifier la correspondance SHIS cadre/jeu de direction
- Presser les cuvettes parfaitement d'aplomb, sans marquer le cadre
- Poser le cône de fourche (crown race) plein ou fendu avec l'outil adapté
- Contrôler l'assise complète et la rotation avant de poursuivre le montage

**TP — Pose complète d'un jeu de direction sur cadre préparé**

Tu presses les deux cuvettes sur le cadre de ton montage, tu poses le cône de fourche, puis tu valides l'assise et la rotation par un montage à blanc de la fourche.

Critères de validation :
1. 1. Cuvettes pressées : contact périphérique complet, aucun jour visible à la lampe sur 360° entre cuvette et face du tube.
2. 2. Progression à la presse régulière : aucun basculement de cuvette supérieur à 1 mm en cours de course (contrôle visuel continu).
3. 3. Cône de fourche en butée : aucune cale de 0,05 mm ne passe entre le cône et son appui, sur toute la circonférence.
4. 4. Fourche montée à blanc : rotation libre sans point dur, jeu réglé, test de bascule frein avant serré négatif.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : installation d'un jeu de direction (presse et crown race)
- article — Park Tool : Headset Installation : procédures par type EC/ZS/IS
- doc — Cane Creek : notice de pose des jeux de direction et couples associés
- livre — Roger Musson : fabrication d'une presse à cuvettes à tige filetée

### 5. Couper un pivot de fourche `coupe-pivot-fourche`

- **Durée :** 45 min
- **Prérequis :**
  - [Presser un jeu de direction neuf](#pose-jeu-direction-cadre-nu) `pose-jeu-direction-cadre-nu`
  - [Jeu de direction ahead](direction-et-peripheriques.md) `precharge-jeu-direction-ahead`
  - [Étalonne ta main : pratique délibérée du couple](fondamentaux.md) `etalonnage-sensoriel-couple`
- **Outils :** Guide de coupe (Park Tool SG-6/SG-8 ou équivalent), Scie à métaux lame fine (32 TPI) ou lame carbone, Lime fine et papier 400, Chasse-étoile, Expandeur carbone + clé dynamométrique, Réglet et pied à coulisse, Ruban de masquage, Masque FFP3 et aspiration (carbone)
- **⚠️ Sécurité :**
  - Poussières de carbone : fibres irritantes pour peau et poumons. Coupe avec masque FFP3, aspiration à la source, nettoyage humide du poste.
  - Un pivot coupé trop court est irrécupérable et un pivot/potence mal serrés = perte de direction. Mesure deux fois, coupe une fois, et respecte scrupuleusement les couples.
  - Pivot carbone : jamais d'étoile (les griffes fissurent le composite) — expandeur obligatoire, et toujours une entretoise d'au moins 5 mm au-dessus de la potence.

**Objectifs :**
- Déterminer la longueur de coupe par un empilement à blanc (roulements, entretoises, potence, marge)
- Couper droit au guide de coupe et ébavurer proprement, alu comme carbone
- Poser une étoile (pivot alu) ou un expandeur (pivot carbone) et régler la précharge
- Appliquer les règles carbone : lame appropriée, entretoise au-dessus de la potence, jamais d'étoile

**TP — Coupe et équipement du pivot de ton montage**

Sur la fourche de ton montage complet, tu calcules la longueur, tu coupes au guide, tu ébavures, tu poses étoile ou expandeur selon le matériau, puis tu règles la précharge.

Critères de validation :
1. 1. Longueur de coupe calculée par empilement mesuré + marge, vérifiée par un second calcul indépendant avant de scier : zéro écart entre les deux calculs.
2. 2. Coupe d'équerre : écart ≤ 0,5 mm mesuré à l'équerre sur le diamètre du pivot.
3. 3. Bord ébavuré et chanfreiné : passage du doigt sans accroche, aucune écharde ni fibre soulevée (carbone).
4. 4. Étoile chassée à 15 ± 2 mm sous le bord et perpendiculaire, OU expandeur serré au couple fabricant consigné.
5. 5. Remontage final : aucun jeu au test de bascule frein avant serré, rotation libre, et configuration conforme (pivot 3-5 mm sous le capot en alu, entretoise ≥ 5 mm au-dessus de la potence en carbone).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : longueur et coupe du pivot de fourche
- article — Park Tool : pose d'étoile et d'expandeur (Star Nut and Compression Plug)
- doc — ENVE : consignes de coupe et de montage des pivots carbone
- video — GCN Tech : couper un pivot de fourche carbone proprement

### 6. Planifier un montage complet : la gamme d'assemblage `ordre-montage-cadre-nu`

- **Durée :** 35 min
- **Prérequis :**
  - [Établir la fiche de montage d'un cadre nu](#fiche-montage-cadre-nu) `fiche-montage-cadre-nu`
  - [Couple, tension, frottement](fondamentaux.md) `couple-tension-frottement`
- **Outils :** Fiche de montage, Carnet d'atelier ou tableur, Bacs de tri pour visserie, Étiquettes, Fiches techniques des composants

**Objectifs :**
- Établir la séquence de montage optimale : préparation cadre → routage → direction → transmission → freins → cockpit → roues → finitions
- Associer à chaque interface le bon produit : graisse, pâte carbone, frein-filet, antiseize, ou rien
- Préparer le poste : visserie triée, couples listés, outillage disposé dans l'ordre de la gamme
- Identifier les dépendances bloquantes (routage interne avant fourche, durite avant cockpit intégré)

**TP — Rédaction de ta gamme de montage**

Tu rédiges la gamme d'assemblage complète du vélo que tu vas monter, étape par étape, avec produits et couples, puis tu la fais contrôler (pair ou autocontrôle différé de 24 h).

Critères de validation :
1. 1. Gamme écrite d'au moins 20 étapes ordonnées : au contrôle croisé, aucune étape n'oblige à défaire une étape précédente.
2. 2. Pour chaque interface, le produit d'assemblage choisi (graisse / pâte carbone / frein-filet / antiseize / à sec) est justifié en une ligne.
3. 3. Tableau des couples complété pour 100 % des fixations prévues, source de chaque valeur citée (fiche fabricant ou table de référence).
4. 4. Poste organisé : visserie triée par sous-ensemble et étiquetée en 10 min maximum, chrono à l'appui.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- livre — Park Tool : Big Blue Book of Bicycle Repair : séquence de montage d'un vélo
- video — GCN Tech : dream build : montage complet commenté d'un vélo de route
- video — Berm Peak : montage complet d'un VTT à partir du cadre nu
- livre — Lennard Zinn : ordre des opérations et produits d'assemblage

### 7. Router gaines et durites dans un cadre nu `routage-cadre-nu`

- **Durée :** 45 min
- **Prérequis :**
  - [Câbles et gaines : coupe et routage externe](direction-et-peripheriques.md) `cables-gaines-routage-externe`
  - [Raccourcir une durite Shimano (olive et insert)](freinage.md) `raccourcir-durite-shimano`
  - [Planifier un montage complet : la gamme d'assemblage](#ordre-montage-cadre-nu) `ordre-montage-cadre-nu`
- **Outils :** Kit de routage interne magnétique (Park Tool IR-1.2 ou équivalent), Gaines, durites, câbles neufs, Coupe-gaine et coupe-durite, Mousses anti-bruit, Ruban de masquage, Lampe et endoscope (optionnel)

**Objectifs :**
- Planifier les longueurs de gaines et durites avant le montage du cockpit
- Tirer des lignes en interne avec un outil magnétique ou des guides, sans y passer des heures
- Traiter le routage intégré (durites dans le cintre/potence) et ses contraintes d'ordre
- Installer l'anti-bruit : mousses, gaines silencieuses, guides internes

**TP — Routage complet du cadre de ton montage**

Tu tires toutes les lignes du vélo (dérailleur, freins, tige télescopique ou dynamo selon le vélo) dans l'ordre de ta gamme, longueurs validées cintre braqué.

Critères de validation :
1. 1. Chaque ligne interne tirée en 15 min maximum (chrono par ligne consigné).
2. 2. Longueurs validées : rotation du cintre à 90° des deux côtés sans tension, sans pli et sans arrachement de gaine.
3. 3. Test de secousse du cadre : aucun claquement de gaine ou durite interne (mousses posées où nécessaire).
4. 4. Aucun rayon de courbure inférieur au minimum fabricant ; le câble coulisse dans chaque gaine sans friction perceptible à la main.
5. 5. Schéma de routage final documenté (photo annotée) pour la maintenance future.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : routage interne avec l'IR-1.2
- doc — Shimano : dealer manual : routage des gaines et durites par famille de cadres
- doc — SRAM : manuel de routage des durites et conduite interne
- video — GCN Tech : astuces de routage interne sans outil dédié

### 8. Le montage à blanc : tout valider avant de serrer `montage-a-blanc`

- **Durée :** 35 min
- **Prérequis :**
  - [Router gaines et durites dans un cadre nu](#routage-cadre-nu) `routage-cadre-nu`
  - [Mesurer et corriger la ligne de chaîne](transmission.md) `ligne-de-chaine`
  - [Choisir ses pneus et calculer la bonne pression](roues-et-pneus.md) `choix-pneus-et-pression`
- **Outils :** Ensemble des composants du montage, Pied à coulisse et réglet, Clés Allen/Torx, Fiche d'anomalies, Chronomètre

**Objectifs :**
- Assembler l'ensemble du vélo sans couple final pour débusquer les conflits
- Contrôler passage de pneu, garde au talon, croisements de durites, longueur de chaîne
- Vérifier la ligne de chaîne mesurée contre la cible fabricant
- Transformer chaque anomalie en action corrective avant l'assemblage définitif

**TP — Montage à blanc intégral de ton vélo**

Tu assembles tout le vélo à couple réduit, tu mesures les jeux critiques et tu dresses la liste exhaustive des anomalies avec leur correction.

Critères de validation :
1. 1. Montage à blanc complet réalisé en 90 min maximum.
2. 2. Passage de pneu mesuré : au moins 4 mm de garde entre pneu et cadre/fourche en tout point, valeur mini consignée.
3. 3. Ligne de chaîne mesurée : conforme à ±2 mm de la cible fabricant.
4. 4. Liste d'anomalies consignée (longueurs, entretoises, butées, conflits) avec une correction décidée pour 100 % d'entre elles.
5. 5. Longueur de chaîne validée grand plateau/grand pignon selon la méthode fabricant avant coupe définitive.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : dimensionnement de chaîne et contrôles avant assemblage
- video — Berm Peak : erreurs classiques lors d'un montage complet
- livre — Lennard Zinn : vérifications de compatibilité au montage
- article — Bike Gremlin : ligne de chaîne : mesure et valeurs cibles

### 9. L'assemblage final `assemblage-final-couples`

- **Durée :** 45 min
- **Prérequis :**
  - [Le montage à blanc : tout valider avant de serrer](#montage-a-blanc) `montage-a-blanc`
  - [T'équiper niveau 2 : couple, transmission, câblerie](fondamentaux.md) `outillage-intermediaire`
  - Savoir indexer une transmission complète *(transmission)*
  - [Remplacer des plaquettes de frein à disque](freinage.md) `remplacement-plaquettes-disque`
- **Outils :** Clés dynamométriques 2-14 N·m et 10-60 N·m, Jeu d'embouts, Graisse, pâte carbone, frein-filet, antiseize, Marqueur de contrôle de serrage, Gamme de montage imprimée, Chronomètre
- **⚠️ Sécurité :**
  - Cockpit et direction : une potence, un expandeur ou un levier de frein sous-serrés peuvent lâcher en roulant. Chaque fixation de la ligne de direction et de freinage doit être serrée au couple ET cochée — aucune exception.

**Objectifs :**
- Exécuter ta gamme de montage dans l'ordre, sans improvisation
- Appliquer le bon produit à chaque interface puis serrer chaque fixation au couple documenté
- Tracer chaque serrage : case cochée, marquage de contrôle sur les vis critiques
- Effectuer les réglages intégrés au montage (indexation, centrage des étriers, jeu de direction)

**TP — Assemblage définitif de ton vélo complet**

Tu montes définitivement le vélo en suivant ta gamme, chaque serrage tracé, chaque réglage intégré au bon moment, chrono en marche.

Critères de validation :
1. 1. 100 % des fixations serrées au couple et cochées sur la gamme : aucune case vide au contrôle final.
2. 2. Au moins 10 vis critiques (potence, expandeur, leviers, étriers, tige de selle, axes) marquées au marqueur de contrôle vis/support.
3. 3. Zéro retour en arrière non prévu dans la gamme, ou chaque écart consigné comme anomalie de gamme avec cause.
4. 4. Transmission indexée (passage net sur tous les pignons, 3 allers-retours) et freins fonctionnels (course de levier stable) à l'issue du montage.
5. 5. Temps total d'assemblage consigné : objectif ≤ 4 h pour un premier montage complet.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : tableau des couples de serrage par composant
- article — Bike Gremlin : couples de serrage des pièces de vélo (N·m)
- video — GCN Tech : montage complet pro : méthode et ordre de serrage
- livre — Park Tool : Big Blue Book : checklist d'assemblage final

### 10. Contrôle final et première sortie `m-check-livraison`

- **Durée :** 30 min
- **Prérequis :**
  - [Le M-check : contrôle de sécurité en 8 minutes](fondamentaux.md) `m-check`
  - [L'assemblage final](#assemblage-final-couples) `assemblage-final-couples`
  - [Composés de plaquettes et rodage (bed-in)](freinage.md) `plaquettes-composes-rodage`
- **Outils :** Checklist M-check de livraison, Clés dynamométriques, Manomètre, Casque et équipement pour la sortie d'essai, Appareil photo, Carnet d'atelier
- **⚠️ Sécurité :**
  - Premier roulage d'un vélo neuf : freins non rodés et serrages non éprouvés. Effectue les tests statiques et le rodage des freins AVANT tout freinage d'urgence en conditions réelles.

**Objectifs :**
- Dérouler un M-check exhaustif sur un vélo qui n'a jamais roulé
- Réaliser les tests statiques de sécurité : bascule frein serré, torsion cockpit, appui tige de selle
- Conduire une sortie d'essai structurée puis re-contrôler les couples critiques
- Constituer le dossier de livraison : fiche de montage, couples, photos, préconisations de rodage

**TP — Livraison de ton montage complet**

Tu passes ton vélo fraîchement monté au M-check de livraison, tu fais la sortie d'essai, tu re-contrôles, et tu archives le dossier complet.

Critères de validation :
1. 1. Checklist M-check d'au moins 25 points renseignée, zéro anomalie bloquante restante.
2. 2. Tests statiques : aucun glissement de potence, cintre ou tige de selle sous effort de torsion manuel (repères marqueur intacts).
3. 3. Sortie d'essai d'au moins 15 min : toutes les vitesses passées, freinage appuyé des deux freins après rodage, aucun bruit parasite au retour.
4. 4. Re-contrôle post-sortie des couples critiques : zéro desserrage constaté (toute reprise consignée).
5. 5. Dossier de livraison archivé : fiche de montage, tableau des couples, photos, schéma de routage, date.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : inspection de sécurité complète d'un vélo (M-check)
- doc — Cytech : standards de contrôle avant livraison (PDI)
- video — GCN : vérifications avant la première sortie

### 11. Adapter le montage `montage-vae-cargo-specifiques`

- **Durée :** 40 min
- **Prérequis :**
  - [Reconnaître un VAE et identifier son architecture](vae.md) `vae-identifier-architecture`
  - [Panorama des vélos atypiques](cas-exotiques.md) `panorama-velos-atypiques`
  - [Contrôle final et première sortie](#m-check-livraison) `m-check-livraison`
  - [Le M-check : contrôle de sécurité en 8 minutes](fondamentaux.md) `m-check`
- **Outils :** Clés dynamométriques, Documentation constructeur du système moteur, Réglet (entrefer capteur), Gaines/durites grande longueur, Colliers et guides de faisceau
- **⚠️ Sécurité :**
  - VAE : batterie déposée et système hors tension avant toute intervention sur le moteur, le faisceau ou les connecteurs. Ne débranche jamais un connecteur sous tension.

**Objectifs :**
- Intégrer les contraintes VAE dans la gamme : moteur, faisceau, batterie, capteur de vitesse, couples constructeur
- Adapter le routage aux vélos cargo et longtails : longueurs XXL, direction par câble ou tringlerie
- Prévoir les spécificités bikepacking/randonneuse : inserts multiples, dynamo et son câblage, porte-bagages
- Repérer ce qui change sur pliants et petites roues (longueurs, pliage, câbles traversants)

**TP — Gamme comparée et intervention spécifique**

Tu rédiges un comparatif des gammes de montage pour trois types de vélos, puis tu exécutes les points spécifiques sur le vélo non standard dont tu disposes (VAE, cargo ou bikepacking).

Critères de validation :
1. 1. Tableau comparatif rédigé pour trois types (VAE, cargo, bikepacking) : au moins 5 différences de gamme par type, chacune sourcée (doc constructeur ou observation).
2. 2. Sur le vélo disponible : les points de montage spécifiques exécutés avec 100 % des couples constructeur respectés et consignés.
3. 3. Si VAE : entrefer du capteur de vitesse mesuré au réglet et dans la plage constructeur (ex. 3-17 mm pour Shimano STEPS).
4. 4. Si cargo à direction déportée : guidon et roue alignés à ±2°, aucun point dur sur toute la course de braquage.
5. 5. Test fonctionnel final : 10 min de roulage, toutes fonctions opérationnelles (assistance, éclairage, direction) sans bruit parasite.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Bosch eBike Systems : consignes de montage et couples des systèmes moteur
- doc — Shimano : dealer manual STEPS : capteur de vitesse et faisceau
- doc — Tern : spécificités d'assemblage et de contrôle des vélos cargo
- article — Park Tool : particularités d'atelier sur vélos électriques

### 12. Corriger les défauts `defauts-peinture-polissage`

- **Durée :** 40 min
- **Prérequis :**
  - [Vernir au 2K : activation, application, durcissement](#vernis-2k-aerosol) `vernis-2k-aerosol`
- **Outils :** Papier à l'eau grains 1500/2000/3000, Cale souple, Compound de polissage + polish de finition, Chiffons microfibre, Lampe de contrôle, Loupe

**Objectifs :**
- Diagnostiquer les défauts classiques et leur cause racine : coulure, peau d'orange, fisheyes, voile, cloques, poussières incluses
- Poncer un défaut à l'eau (1500 → 3000) sans percer le vernis
- Polir au compound pour restaurer la brillance d'origine
- Décider quand la correction suffit et quand il faut revernir

**TP — Diagnostic et correction d'un défaut réel**

Tu identifies les défauts d'un vernis (les tiens ou des échantillons), tu ponces à l'eau une coulure ou une inclusion, puis tu polis jusqu'à brillance uniforme.

Critères de validation :
1. 1. Tableau de diagnostic : 5 défauts identifiés (photos ou pièces réelles) avec cause racine correcte pour au moins 4 sur 5.
2. 2. Coulure ou inclusion poncée à l'eau (1500 → 2000 → 3000) : disparue au toucher et en lumière rasante, sans perçage du vernis.
3. 3. Polissage : brillance restaurée, indiscernable des zones adjacentes à 50 cm sous lampe.
4. 4. Contrôle final : aucun voile de base couleur visible sur le chiffon de polissage (épaisseur de vernis préservée).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — 3M : ponçage à l'eau et polissage des vernis automobiles
- doc — SprayMax : défauts d'application des 2K et remèdes
- video — Fat Creations : correction et finition d'une peinture de cadre

### 13. Après la peinture : démasquer et retarauder `remise-en-service-apres-peinture`

- **Durée :** 30 min
- **Prérequis :**
  - [Vernir au 2K : activation, application, durcissement](#vernis-2k-aerosol) `vernis-2k-aerosol`
  - [Tarauder et surfacer un boîtier fileté](#taraudage-surfacage-boitier) `taraudage-surfacage-boitier`
  - [Surfacer et aléser le tube de direction d'un cadre](#surfacage-tube-direction) `surfacage-tube-direction`
- **Outils :** Tarauds (M5, M10×1, boîtier si nécessaire), Alésoir ou papier fin pour tube de selle, Pied à coulisse, Cutter de précision, Graisse de montage, Chiffons

**Objectifs :**
- Démasquer filetages, alésages et portées sans marquer la peinture fraîche
- Repasser les filetages et calibrer les portées envahies par la peinture
- Contrôler les diamètres critiques (tube de selle, tube de direction, boîtier) après surépaisseur
- Relancer le montage : ce qui doit attendre le durcissement à cœur

**TP — Remise en service mécanique du cadre peint**

Tu libères toutes les interfaces mécaniques du cadre fraîchement peint, tu contrôles les cotes et tu valides que le cadre est prêt pour un montage complet.

Critères de validation :
1. 1. Démasquage complet : zéro trace de ruban ou bouchon oublié, arêtes de peinture nettes aux interfaces (découpe au cutter si besoin, sans écaillage).
2. 2. Tous les filetages acceptent leur vis à la main sur toute la longueur après repassage.
3. 3. Tube de selle : la tige au diamètre nominal coulisse sans point dur (surépaisseur de peinture éliminée).
4. 4. Diamètres critiques re-mesurés au pied à coulisse et conformes aux valeurs d'avant peinture à ±0,1 mm.
5. 5. Aucun montage en force constaté au remontage des cuvettes et du boîtier (vissage/pressage fluide).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : préparation de cadre : reprises après peinture
- article — Sheldon Brown : remontage d'un cadre repeint
- doc — Spray.Bike : durcissement et manipulation d'un cadre fraîchement peint

### 14. Périphériques et intérieur des tubes `peripheriques-et-interieur-tubes`

- **Durée :** 45 min
- **Prérequis :**
  - [La chaîne peinture](#process-peinture-securite-epi) `process-peinture-securite-epi`
  - [Décaper un cadre acier](#decapage-cadre-acier) `decapage-cadre-acier`
  - [Poser la base couleur](#base-couleur-aerosol) `base-couleur-aerosol`
  - [Appliquer l'apprêt époxy 2K](#appret-epoxy-2k) `appret-epoxy-2k`
  - [Après la peinture : démasquer et retarauder](#remise-en-service-apres-peinture) `remise-en-service-apres-peinture`
  - [Acier, alu, carbone, titane](fondamentaux.md) `materiaux-cadres`
- **Outils :** cire de cavité ou huile protectrice de corps creux avec sonde d'injection 360°, endoscope / caméra d'inspection 5-8 mm, bouchons, adhésif de masquage, graisse ou vernis pelable pour protéger filetages et portées, apprêt réactif (wash primer) pour supports zingués et galvanisés, abrasifs 180 à 800, laine d'acier 0000, tampon abrasif fin, produit de conversion de rouille et polish à chrome, aérosols ou pistolet selon le process retenu, lampe rasante et lampe d'inspection, support tournant et crochets pour égouttage tête en bas, masque à cartouches A2P3, gants nitrile, lunettes, ventilation forcée, taraud de nettoyage et vis d'essai pour contrôle des filetages
- **⚠️ Sécurité :**
  - Injecter un produit solvanté en aérosol dans un volume clos crée une atmosphère de vapeurs inflammables à l'intérieur du cadre : aucune flamme, aucune source d'étincelle, aucun décapeur thermique dans la pièce, ventilation forcée pendant et après.
  - Masque à cartouches A2P3 obligatoire pour l'injection et pour les apprêts réactifs : les wash primers contiennent de l'acide phosphorique et des solvants agressifs pour les voies respiratoires.
  - Ne bouche jamais définitivement les trous de drainage d'un cadre acier : ce sont eux qui évacuent la condensation et le produit en excès. Un trou obstrué transforme un tube en réservoir d'eau.
  - Poussière de ponçage de vieilles peintures : sur un cadre ancien, elle peut contenir du plomb ou des chromates. Ponçage humide, aspiration, masque P3, jamais de ponçage à sec en local non ventilé.
  - Produit anticorrosion dans un filetage de boîtier ou sur une portée de roulement de direction : le film gras empêche le serrage de tenir son couple et fausse une pose de cuvette. Masquage obligatoire avant, nettoyage et contrôle après.
  - Chiffons imbibés de cire, d'huile ou de solvant : risque d'auto-échauffement en tas. Bac métallique fermé et évacuation en filière déchets dangereux.

**Objectifs :**
- Préparer et peindre les périphériques : fourche rigide, garde-boue, porte-bagages, potence, jante.
- Traiter un support galvanisé, zingué ou chromé avec l'apprêt réactif adapté.
- Restaurer un chrome piqué et poser honnêtement la limite du récupérable.
- Traiter l'intérieur des tubes d'un cadre acier à la cire de cavité ou à l'huile protectrice, orifice par orifice.
- Protéger filetages, portées de roulement et trous de drainage pendant et après le traitement.

**TP — Protéger l'intérieur d'un cadre acier et refinir deux périphériques**

Sur un cadre acier décapé ou fraîchement repeint, tu conduis le traitement anticorrosion interne complet : repérage des orifices, masquage des zones fonctionnelles, injection à la sonde, contrôle de couverture, égouttage, remise en service. En parallèle tu refinis deux périphériques de natures différentes (par exemple un garde-boue chromé piqué et un porte-bagages galvanisé, ou une fourche rigide acier et une potence).

Critères de validation :
1. 1. Cartographie des orifices : 100 % des orifices du cadre listés et repérés (boîtier, tube de selle, tube de direction, perçages de bases et haubans, passages de câbles, trous de drainage, ergots). Recomptage physique en fin de séance : écart 0.
2. 2. Masquage avant injection : 100 % des filetages (boîtier, porte-bagages, tasseaux, dérailleur avant), des portées de roulement et des zones de collage protégés. Contrôle après traitement : vis d'essai ou taraud de nettoyage passe à la main sur 100 % des filetages, sans point dur.
3. 3. Conditions d'injection respectées : cadre à 20-25 °C, produit tempéré, sonde 360° introduite à fond puis retirée en rotation continue, chaque tube traité depuis au moins deux orifices opposés.
4. 4. Couverture interne prouvée et documentée, au choix : ressuage constaté à 100 % des orifices témoins opposés, OU inspection à l'endoscope avec 0 zone sèche continue de plus de 3 cm sur les zones critiques (bases, haubans, bas du tube de selle, pourtour du boîtier).
5. 5. Égouttage tête en bas ≥ 24 h puis séchage ≥ 48 h avant remontage ; excès essuyé, 0 coulure figée à l'extérieur du cadre.
6. 6. Trous de drainage vérifiés libres après séchage : passage d'un fil de 1 mm sur 100 % d'entre eux.
7. 7. Deux périphériques traités, de supports différents ; préparation documentée pour chacun (acier nu, zingué/galvanisé, chromé) et apprêt réactif appliqué sur 100 % des surfaces zinguées ou galvanisées — 0 peinture posée directement sur zinc.
8. 8. Qualité de finition des périphériques : 0 coulure de plus de 5 mm, 0 zone à nu au contrôle en lumière rasante, tendu régulier sur toutes les faces visibles, arêtes couvertes.
9. 9. Adhérence contrôlée après durcissement complet (≥ 7 jours) par test de quadrillage sur une zone cachée : classe 0 ou 1 exigée.
10. 10. Chrome piqué : zone traitée d'au moins 10 cm², rouille éliminée à 100 % au contrôle visuel et tactile, brillance restaurée, photos avant/après, et limite honnête consignée par écrit (piqûres résiduelles documentées, pronostic de tenue).
11. 11. Remise en service : 0 filetage obstrué, 0 portée de roulement contaminée (contrôle au chiffon blanc), jeu de direction et boîtier remontés au couple et tournant sans point dur.
12. 12. Fiche produit archivée : nom du produit interne, date de traitement, orifices traités, intervalle de renouvellement prévu.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — J.P. Weigle Frame Saver : protection anticorrosion de l'intérieur des tubes d'un cadre acier : produit et méthode d'application
- doc — Dinitrol : cires de cavité ML et 1000 : sondes d'injection, temps d'égouttage et couverture des corps creux
- article — Bicycle Quarterly (Jan Heine) : traitement interne des cadres acier et longévité en usage pluvieux
- article — Sheldon Brown : entretien et restauration des pièces chromées de vélos anciens
- doc — Glasurit / Standox : apprêts réactifs (wash primer) sur acier galvanisé et supports zingués
- doc — INRS : application de produits en aérosol et travaux en cavité : ventilation, EPI et risque incendie
