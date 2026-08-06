# Système « suspension »

> Part of the Jitensha curriculum — see [`CURRICULUM.md`](../../CURRICULUM.md) for the overview. Lesson data is French (course content); scaffolding is English per project rules.

Système « suspension » de Jitensha : de la découverte des suspensions (fourches télescopiques, amortisseurs, fourches urbaines à ressort) jusqu'au service des cartouches hydrauliques niveau atelier pro. Couvre les concepts (SAG, rebond, compression HSC/LSC, progressivité/tokens), le réglage méthodique (bracketing façon Fox DIALED), l'entretien périodique (contrôle 25 h, service bas de fourche 50 h RockShox et Fox, service air can, fourches de vélo de ville), la chaîne cinématique des tout-suspendus (douilles, pivots, roulements de cadre, ratio de démultiplication) et, au niveau 5, la purge et le service des cartouches (Charger, FIT/GRIP) et des amortisseurs (IFP, recharge gaz). Tous les types de vélos concernés sont traités : VTT, gravel suspendu, vélo de ville/trekking, VAE et cargo. Les tiges de selle télescopiques et le jeu de direction appartiennent à d'autres systèmes et sont exclus.

**Progression logic:** Niveau 1 (Débutant) : lire et comprendre la suspension sans rien démonter — identifier les architectures sur tous types de vélos, nommer les pièces d'une fourche et d'un amortisseur, laver/inspecter correctement, savoir quand NE PAS rouler, utiliser les molettes et le blocage. Niveau 2 (Intermédiaire) : tout le réglage externe — pompe haute pression, SAG fourche puis amortisseur, rebond, compression basse vitesse, précharge des ressorts hélicoïdaux (y compris fourches de ville), adaptation aux masses élevées (VAE/cargo), et le contrôle périodique 25 h qui installe la discipline d'intervalles. Niveau 3 (Avancé) : on ouvre — identification exacte du modèle/kit/huiles (préalable obligatoire à tout service), tokens, service bas de fourche 50 h RockShox puis Fox (deux procédures distinctes), service d'une fourche urbaine à ressort, service air can, douilles d'amortisseur, contrôle des pivots de cadre. Niveau 4 (Expert) : affiner et diagnostiquer — bracketing, HSC/LSC sur cartouches haut de gamme, diagnostic méthodique (friction, jeu de bagues vs jeu de direction, perte d'amortissement), choix de tarage coil, cinématique des tout-suspendus, remplacement des roulements de pivots. Niveau 5 (Maître) : l'hydraulique interne — service des cartouches Charger (RockShox) et FIT/GRIP (Fox), puis service complet d'amortisseur avec réglage d'IFP et recharge en gaz. Chaque service de niveau 3+ exige la leçon d'identification modèle/kit ; chaque ouverture sous pression rappelle la règle de dépressurisation vérifiée deux fois.

## Niveau 1 — Débutant

### 1. Panorama des types de suspension `suspension-panorama-types`

- **Durée :** 25 min
- **Prérequis :**
  - [Anatomie du vélo : nomme chaque pièce](fondamentaux.md) `anatomie-velo`
- **Outils :** Mètre ruban ou réglet, Carnet d'atelier, Lampe d'inspection

**Objectifs :**
- Identifier les grandes architectures : vélo rigide, fourche télescopique, tout-suspendu, softail, fourche urbaine à ressort
- Distinguer une suspension à air d'une suspension à ressort hélicoïdal sans rien démonter
- Repérer la présence et le rôle de la suspension sur ville, trekking, VAE, cargo, gravel et VTT
- Estimer le débattement d'une fourche à partir du plongeur exposé

**TP — Safari suspension : classer trois vélos**

Sur trois vélos différents (idéalement un VTT, un vélo de ville ou VAE, et un rigide/gravel), tu identifies l'architecture de suspension, tu mesures le plongeur exposé pour estimer le débattement, et tu détermines air ou ressort en cherchant la valve Schrader ou la molette de précharge.

Critères de validation :
1. 1. Architecture de suspension correctement classée sur les 3 vélos (3/3, vérification croisée avec la fiche constructeur)
2. 2. Débattement estimé à ±10 mm de la valeur constructeur sur chaque fourche suspendue
3. 3. Air vs ressort identifié sans erreur (3/3), preuve à l'appui (photo de la valve ou de la molette de précharge)
4. 4. Tableau récapitulatif consigné dans le carnet d'atelier (type, débattement, technologie, marque/modèle)

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : principes de base des suspensions VTT
- video — GMBN Tech : comprendre les types de suspension VTT pour débutants
- article — Vojo Magazine : guide des suspensions VTT en français
- video — Fox (série DIALED) : introduction au fonctionnement d'une suspension

### 2. Anatomie d'une fourche télescopique `suspension-anatomie-fourche`

- **Durée :** 30 min
- **Prérequis :**
  - [Mesurer et décoder : pied à coulisse et marquages](fondamentaux.md) `pied-a-coulisse-et-marquages`
  - [Panorama des types de suspension](#suspension-panorama-types) `suspension-panorama-types`
- **Outils :** Pied à coulisse numérique, Lampe d'inspection, Carnet d'atelier

**Objectifs :**
- Nommer les pièces d'une fourche : té, plongeurs, fourreaux, joints racleurs, arceau, axe, valve, molettes
- Mesurer le diamètre des plongeurs au pied à coulisse et le relier aux gammes du marché (28 à 40 mm)
- Localiser le ressort (air ou coil) et la cartouche hydraulique dans les deux jambes
- Identifier les réglages présents sur une fourche donnée

**TP — Relevé d'identité complet d'une fourche**

Sur une fourche montée, tu pointes et nommes chaque élément visible, tu mesures le diamètre du plongeur, tu repères quelle jambe contient le ressort et laquelle contient l'hydraulique, et tu inventories tous les réglages accessibles.

Critères de validation :
1. 1. 10 éléments sur 10 nommés correctement en les pointant (té, plongeur, fourreau, joint racleur, arceau, axe, valve air ou précharge, molette rebond, molette compression/blocage, tétons de frein ou pattes)
2. 2. Diamètre du plongeur mesuré à ±0,2 mm d'une valeur standard du marché (28,6 / 30 / 32 / 34 / 35 / 36 / 38 mm) et gamme identifiée
3. 3. Côté ressort et côté hydraulique correctement attribués (vérification par la position valve/molette rebond)
4. 4. Inventaire des réglages complet et sans erreur, consigné dans le carnet

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SRAM/RockShox (portail service) : vue éclatée d'une fourche RockShox
- doc — Fox Factory (centre d'aide) : nomenclature des fourches Fox
- article — Park Tool : anatomie et terminologie des fourches suspendues
- article — Glisse Alpine : fonctionnement d'une fourche VTT en français

### 3. Anatomie d'un amortisseur arrière `suspension-anatomie-amortisseur`

- **Durée :** 30 min
- **Prérequis :**
  - [Mesurer et décoder : pied à coulisse et marquages](fondamentaux.md) `pied-a-coulisse-et-marquages`
  - [Anatomie d'une fourche télescopique](#suspension-anatomie-fourche) `suspension-anatomie-fourche`
- **Outils :** Pied à coulisse numérique, Mètre ruban, Carnet d'atelier

**Objectifs :**
- Nommer les pièces d'un amortisseur : corps, tige, air can, valve, réservoir piggyback, œillets
- Mesurer l'entraxe (eye-to-eye) et la course, et lire une désignation métrique (ex. 210×55) ou impériale
- Distinguer les montages : douilles standard, trunnion, bearing mount
- Repérer amortisseur à air vs coil et leurs réglages respectifs

**TP — Carte d'identité d'un amortisseur**

Sur un tout-suspendu (ou un amortisseur déposé), tu mesures l'entraxe, tu déduis la course à partir de la tige exposée et de la désignation, tu identifies le type de montage à chaque extrémité et tu inventories les réglages.

Critères de validation :
1. 1. Entraxe mesuré à ±1 mm de la désignation constructeur (ex. 210 mm)
2. 2. Course identifiée et cohérente avec la désignation (ex. 55 mm), vérification par la fiche du vélo
3. 3. Type de montage identifié correctement aux deux extrémités (standard/trunnion/bearing, 2/2)
4. 4. Technologie (air ou coil) et liste des réglages consignées sans erreur

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Fox Factory (centre d'aide) : dimensions et désignations des amortisseurs métriques
- doc — SRAM/RockShox (portail service) : gamme et montages des amortisseurs RockShox
- article — Vojo Magazine : comprendre les amortisseurs VTT : entraxe, course, trunnion
- video — GMBN Tech : anatomie d'un amortisseur arrière

### 4. Entretien courant d'une fourche `suspension-lavage-inspection`

- **Durée :** 30 min
- **Prérequis :**
  - Connaître les bases du nettoyage vélo (produits, ordre, rinçage) *(fondamentaux)*
  - [Anatomie d'un amortisseur arrière](#suspension-anatomie-amortisseur) `suspension-anatomie-amortisseur`
  - [Anatomie d'une fourche télescopique](#suspension-anatomie-fourche) `suspension-anatomie-fourche`
- **Outils :** Seau et brosse douce, Chiffons microfibre propres, Nettoyant vélo doux, Lampe d'inspection, Carnet d'atelier
- **⚠️ Sécurité :**
  - Une fuite d'huile de suspension qui atteint un disque ou des plaquettes de frein les contamine définitivement : distance de freinage rallongée. Toute fuite près d'un frein = contrôle immédiat.
  - Un plongeur profondément rayé ou une fourche qui claque = vélo interdit de sortie jusqu'à réparation.

**Objectifs :**
- Laver une suspension sans détruire les joints (jamais de jet haute pression sur les racleurs)
- Distinguer le film d'huile normal sur les plongeurs d'une vraie fuite
- Inspecter les 6 points critiques : plongeurs (rayures), racleurs, fuites, axe, fixations, tige d'amortisseur
- Décider si le vélo peut rouler ou doit passer à l'atelier

**TP — Lavage et inspection consignée**

Tu laves un vélo suspendu dans les règles, tu essuies les plongeurs et la tige d'amortisseur, puis tu déroules la grille d'inspection en 6 points avec photos et tu rends un verdict roule / roule pas argumenté.

Critères de validation :
1. 1. Lavage réalisé sans jet direct sur les joints racleurs ni sur les roulements (procédure observée ou auto-filmée)
2. 2. Plongeurs et tige essuyés : aucune trace de saleté sur un chiffon blanc passé après coup
3. 3. Grille d'inspection remplie 6/6 points avec photo pour chaque point
4. 4. Verdict roule / roule pas justifié par écrit en moins de 100 mots et validé (cohérent avec l'état réel)

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SRAM/RockShox : entretien courant et intervalles de maintenance des suspensions
- doc — Fox Factory (centre d'aide) : nettoyage et inspection avant/après sortie
- video — Park Tool : inspection de sécurité d'un VTT suspendu
- article — Endurotribe : entretien courant des suspensions en français

### 5. Molettes, clics et blocage `suspension-molettes-et-blocage`

- **Durée :** 25 min
- **Prérequis :**
  - [Anatomie d'une fourche télescopique](#suspension-anatomie-fourche) `suspension-anatomie-fourche`
- **Outils :** Carnet d'atelier
- **⚠️ Sécurité :**
  - Ne jamais descendre un sentier avec la fourche verrouillée : perte de contrôle et contraintes anormales sur le blocage.

**Objectifs :**
- Identifier chaque molette (rebond rouge, compression/blocage bleu en général) et son sens d'action
- Compter les clics d'une molette et noter une position de façon reproductible (depuis la butée fermée)
- Utiliser le blocage ou la position ferme à bon escient (route, bitume, jamais en descente)
- Manipuler le levier de blocage d'une fourche urbaine ou de VAE de ville

**TP — Cartographie des réglages d'un vélo**

Sur un vélo suspendu, tu identifies chaque molette, tu comptes deux fois le nombre total de clics de chacune, tu notes la position actuelle en clics depuis la position fermée, puis tu testes le blocage en poussant sur le guidon.

Critères de validation :
1. 1. Chaque molette correctement nommée (rebond / compression / blocage), 100 % de bonnes réponses
2. 2. Nombre total de clics compté deux fois par molette avec résultat identique aux deux comptages
3. 3. Position actuelle consignée en clics depuis la butée fermée pour toutes les molettes
4. 4. Test de blocage concluant : enfoncement de la fourche verrouillée < 10 mm sous poussée franche, retour au réglage initial vérifié

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Fox (série DIALED) : rôle des molettes de réglage et convention de comptage des clics
- doc — SRAM/RockShox : signification des réglages rebond et compression sur les fourches
- video — GMBN Tech : à quoi servent les molettes d'une suspension
- doc — SR Suntour : utilisation du blocage sur fourches urbaines et trekking

## Niveau 2 — Intermédiaire

### 1. La pompe haute pression `suspension-pompe-haute-pression`

- **Durée :** 25 min
- **Prérequis :**
  - [Anatomie d'une fourche télescopique](#suspension-anatomie-fourche) `suspension-anatomie-fourche`
- **Outils :** Pompe de suspension haute pression (jusqu'à 300 psi), Carnet d'atelier
- **⚠️ Sécurité :**
  - Ne jamais dépasser la pression maximale gravée ou documentée par le constructeur (souvent 163 psi sur certaines fourches, 350 psi sur certains amortisseurs) : risque de rupture des joints internes.

**Objectifs :**
- Utiliser une pompe de suspension : vissage progressif, lecture, purge fine
- Expliquer la chute apparente de pression au rebranchement (volume du flexible) et en tenir compte
- Respecter les pressions maximales constructeur de la fourche et de l'amortisseur
- Consigner les pressions dans le carnet pour les retrouver après un service

**TP — Gonflage et test de répétabilité**

Tu relèves la pression max au manuel, tu gonfles la fourche à une pression cible, puis tu débranches et rebranches la pompe trois fois en notant chaque lecture pour quantifier l'effet du flexible et apprendre à compenser.

Critères de validation :
1. 1. Pression maximale constructeur retrouvée dans le manuel et consignée avant tout gonflage
2. 2. Pression cible atteinte à ±5 psi à la première lecture
3. 3. Trois cycles débranchement/rebranchement effectués : dispersion des relectures < 5 psi
4. 4. Écart moyen dû au flexible quantifié et noté comme correction personnelle dans le carnet

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : utilisation d'une pompe de suspension
- doc — Fox Factory (centre d'aide) : pressions maximales et procédure de gonflage
- doc — SRAM/RockShox : tableaux de pression recommandée par poids de pilote
- article — Glisse Alpine : bien utiliser une pompe haute pression en français

### 2. Régler le SAG de la fourche `sag-fourche`

- **Durée :** 30 min
- **Prérequis :**
  - [La pompe haute pression](#suspension-pompe-haute-pression) `suspension-pompe-haute-pression`
- **Outils :** Pompe de suspension, Réglet ou mètre, Balance, Un mur ou un partenaire pour se stabiliser, Carnet d'atelier, balance permettant de se peser en tenue de sortie complète

**Objectifs :**
- Mesurer le SAG d'une fourche avec le joint torique témoin, en position de pilotage, équipé
- Choisir la cible selon la pratique : 15 % (XC) à 20 % (trail/enduro)
- Ajuster la pression pour atteindre la cible et obtenir des mesures répétables
- Consigner pression, poids équipé et SAG final dans le carnet

**TP — SAG fourche à ±2 %**

Pesé équipé, tu pars du tableau constructeur, tu montes sur le vélo en position d'attaque sans rebondir, tu descends délicatement, tu mesures l'enfoncement au joint témoin et tu itères la pression jusqu'à la cible.

Critères de validation :
1. 1. Poids équipé pesé et consigné à ±1 kg
2. 2. SAG final à ±2 % de la cible choisie (justifiée : XC 15 %, trail 18-20 %)
3. 3. Répétabilité : 3 mesures successives avec un écart maximal de 2 % entre elles
4. 4. Pression finale, cible et mesures consignées dans le carnet (réutilisables après un service)

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Fox (série DIALED) : réglage de base du SAG selon Jordi Cortes
- doc — SRAM/RockShox : procédure officielle de réglage du SAG
- video — Park Tool : réglage du SAG d'une fourche
- article — Endurotribe : méthode de réglage du SAG en français

### 3. Régler le SAG de l'amortisseur `sag-amortisseur`

- **Durée :** 30 min
- **Prérequis :**
  - [Régler le SAG de la fourche](#sag-fourche) `sag-fourche`
- **Outils :** Pompe de suspension, Pied à coulisse ou réglet, Balance, Carnet d'atelier

**Objectifs :**
- Mesurer le SAG arrière en pourcentage de la course de l'amortisseur (pas du débattement roue)
- Choisir la cible selon la pratique : 25 % (XC/trail) à 30 % (enduro/DH)
- Gérer les cas particuliers : trunnion, joint témoin peu accessible, amortisseur coil
- Équilibrer avant/arrière : cohérence entre SAG fourche et SAG amortisseur

**TP — SAG arrière à ±2 % et équilibre du vélo**

Tu mesures la course totale de l'amortisseur, tu règles la pression pour atteindre la cible en position assise puis en position d'attaque, et tu vérifies la cohérence avec le SAG avant réglé à la leçon précédente.

Critères de validation :
1. 1. Course de l'amortisseur mesurée ou relevée sur la désignation, consignée à ±1 mm
2. 2. SAG final à ±2 % de la cible choisie et justifiée
3. 3. Répétabilité : 3 mesures avec écart ≤ 2 %
4. 4. Équilibre documenté : SAG avant et arrière consignés côte à côte, écart avant/arrière expliqué en 2 phrases

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Fox (série DIALED) : réglage du SAG arrière et équilibre du châssis
- doc — SRAM/RockShox : réglage du SAG des amortisseurs (y compris trunnion)
- video — GMBN Tech : régler le SAG d'un amortisseur pas à pas
- article — Vojo Magazine : réglage suspension arrière en français

### 4. Régler le rebond : la molette qui change tout `suspension-reglage-rebond`

- **Durée :** 30 min
- **Prérequis :**
  - [Régler le SAG de l'amortisseur](#sag-amortisseur) `sag-amortisseur`
  - [Régler le SAG de la fourche](#sag-fourche) `sag-fourche`
  - [Molettes, clics et blocage](#suspension-molettes-et-blocage) `suspension-molettes-et-blocage`
- **Outils :** Carnet d'atelier, Un trottoir ou une marche basse

**Objectifs :**
- Comprendre ce que fait l'amortissement en détente (contrôle du retour du ressort)
- Retrouver le réglage de base constructeur (tableau pression/clics) et le poser
- Affiner avec le test du trottoir : un seul dépassement, pas d'oscillations
- Reconnaître les symptômes d'un rebond trop rapide (vélo éjectable) ou trop lent (suspension qui se tasse)

**TP — Rebond de base + test du trottoir**

Tu comptes la plage totale de clics, tu poses le réglage de base constructeur pour ta pression, puis tu descends d'un trottoir debout sur les pédales : tu ajustes clic par clic jusqu'à un retour contrôlé sans rebond multiple.

Critères de validation :
1. 1. Plage totale de clics comptée deux fois (résultats identiques) et réglage de base constructeur posé et consigné
2. 2. Test du trottoir : au réglage final, une seule oscillation maximum après l'impact, constatée sur 5 essais consécutifs
3. 3. Démonstration des deux extrêmes documentée : comportement à rebond tout ouvert puis tout fermé décrit en 2 phrases chacun
4. 4. Réglage final consigné en clics depuis la position fermée, avant ET arrière

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Fox (série DIALED) : réglage du rebond et erreurs classiques
- doc — SRAM/RockShox : tableaux de réglage rebond selon pression
- video — Vorsprung Suspension : comprendre l'amortissement en détente
- article — Endurotribe : régler son rebond en français

### 5. Compression basse vitesse et positions de pédalage `suspension-reglage-compression-lsc`

- **Durée :** 25 min
- **Prérequis :**
  - [Régler le rebond : la molette qui change tout](#suspension-reglage-rebond) `suspension-reglage-rebond`
- **Outils :** Collier rilsan ou joint torique témoin, Réglet, Carnet d'atelier

**Objectifs :**
- Comprendre ce que freine la compression basse vitesse : plongée au freinage, pompage au pédalage
- Utiliser les positions ouvert / médium / ferme des cartouches à 3 positions
- Mesurer objectivement l'effet d'un réglage LSC sur la plongée au freinage
- Savoir quand toucher la compression et quand ne pas y toucher (le SAG et le rebond d'abord)

**TP — Test A/B de plongée au freinage**

Sur un parking, tu freines fort de l'avant à vitesse identique avec la compression tout ouverte puis tout fermée (ou position ferme), et tu mesures la course consommée au joint témoin dans chaque configuration.

Critères de validation :
1. 1. Protocole respecté : même vitesse d'approche (même point de départ en roue libre), même point de freinage, 3 essais par configuration
2. 2. Course consommée mesurée au joint témoin pour chaque essai, tableau des 6 mesures consigné
3. 3. Écart moyen entre configuration ouverte et fermée ≥ 5 mm constaté et expliqué
4. 4. Position retenue pour ta pratique justifiée par écrit en moins de 80 mots

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Fox (série DIALED) : compression basse vitesse expliquée
- video — Vorsprung Suspension : différence compression basse et haute vitesse
- doc — SRAM/RockShox : positions ouvert/pédale/ferme des cartouches
- article — Glisse Alpine : compression : comprendre et régler en français

### 6. Suspensions à ressort `ressort-helicoidal-precharge`

- **Durée :** 30 min
- **Prérequis :**
  - [Régler le SAG de la fourche](#sag-fourche) `sag-fourche`
- **Outils :** Réglet, Carnet d'atelier, Clé plate ou à ergots selon l'amortisseur coil
- **⚠️ Sécurité :**
  - Un ressort hélicoïdal est stocké sous précontrainte : ne jamais démonter une bague de précharge d'amortisseur coil sans avoir détendu la précharge à zéro au préalable.

**Objectifs :**
- Comprendre le fonctionnement d'un ressort hélicoïdal : tarage en lbs/in, linéarité
- Régler la précharge sans dépasser la limite constructeur (souvent 2 à 3 tours max)
- Savoir que la précharge ajuste le SAG mais ne remplace JAMAIS un changement de tarage
- Régler la précharge d'une fourche urbaine ou trekking (molette supérieure SR Suntour et similaires)

**TP — Précharge maîtrisée sur suspension coil**

Sur une fourche coil (urbaine, trekking ou VTT) ou un amortisseur coil, tu lis le tarage gravé, tu mesures le SAG, tu ajustes la précharge en comptant les tours, et tu conclus si le tarage convient ou doit être remplacé.

Critères de validation :
1. 1. Tarage du ressort relevé (gravure ou documentation) et consigné
2. 2. Précharge comptée en tours exacts, jamais au-delà du maximum constructeur (≤ 3 tours ou valeur du manuel)
3. 3. SAG final à ±3 % de la cible OU constat argumenté que la cible est inatteignable en ≤ 3 tours et tarage de remplacement proposé
4. 4. SAG mesuré avant et après, les deux valeurs consignées

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SRAM/RockShox : réglage de précharge des ressorts hélicoïdaux
- doc — SR Suntour : réglage de précharge des fourches urbaines et trekking
- doc — Fox Factory (centre d'aide) : installation et précharge des ressorts coil
- video — GMBN Tech : suspension coil vs air, avantages et réglages

### 7. Régler une suspension pour VAE et vélo chargé `suspension-vae-cargo`

- **Durée :** 30 min
- **Prérequis :**
  - [Régler le SAG de l'amortisseur](#sag-amortisseur) `sag-amortisseur`
  - [Régler le SAG de la fourche](#sag-fourche) `sag-fourche`
  - [Suspensions à ressort](#ressort-helicoidal-precharge) `ressort-helicoidal-precharge`
  - [Reconnaître un VAE et identifier son architecture](vae.md) `vae-identifier-architecture`
- **Outils :** Pompe de suspension, Balance (pèse-personne), Réglet, Carnet d'atelier

**Objectifs :**
- Intégrer la masse réelle : pilote équipé + vélo lourd + bagages/enfants, pas seulement le poids du pilote
- Adapter les tableaux de pression constructeur (pensés pour un VTT léger) à un VAE ou un cargo
- Régler le SAG en configuration chargée et connaître les limites (pression max, tarage max disponible)
- Comprendre l'usure accélérée des suspensions sur VAE (masse, couple, kilométrage) et adapter les intervalles

**TP — SAG en charge sur VAE ou cargo**

Tu pèses le pilote équipé et la charge utile réelle (sacoches, siège enfant lesté), tu règles le SAG dans la configuration la plus lourde, puis tu consignes deux configurations (chargé / à vide) avec leurs pressions ou précharges.

Critères de validation :
1. 1. Masse totale en ordre de marche pesée et consignée à ±1 kg (pilote équipé + charge)
2. 2. SAG mesuré en configuration chargée à ±2 % de la cible
3. 3. Deux configurations documentées (chargé / à vide) avec pression ou précharge pour chacune
4. 4. Vérification explicite que la pression requise reste sous la pression max constructeur, consignée ; sinon, solution proposée (tarage supérieur, fourche renforcée)

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SRAM/RockShox : recommandations suspensions pour e-MTB
- doc — Fox Factory (centre d'aide) : réglages spécifiques e-bike des fourches et amortisseurs
- doc — SR Suntour : fourches renforcées pour VAE urbains et cargo
- article — E-MOUNTAINBIKE : réglage des suspensions sur e-MTB

### 8. Le contrôle 25 h : intervalles et couples `controle-25h-suspension`

- **Durée :** 30 min
- **Prérequis :**
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
  - [Entretien courant d'une fourche](#suspension-lavage-inspection) `suspension-lavage-inspection`
- **Outils :** Clé dynamométrique 2-14 N·m avec embouts hex/Torx, Réglet, Chiffons, Carnet d'atelier

**Objectifs :**
- Connaître le calendrier constructeur type : essuyage à chaque sortie, contrôle 25 h, service bas de fourche/air can 50 h, service complet 100-200 h
- Contrôler au couple la visserie de suspension : axe, vis de fixation d'amortisseur, colliers
- Exploiter le joint témoin : pourcentage de débattement réellement utilisé sur les dernières sorties
- Tenir un compteur d'heures de suspension dans le carnet d'atelier

**TP — Contrôle 25 h complet et documenté**

Tu déroules la checklist 25 h sur un vélo suspendu : essuyage et inspection des joints, contrôle au couple de toute la visserie de suspension, lecture du débattement utilisé au joint témoin, mise à jour du compteur d'heures.

Critères de validation :
1. 1. Tableau des intervalles du constructeur de TA suspension retrouvé et recopié dans le carnet (valeurs en heures)
2. 2. 100 % de la visserie de suspension contrôlée au couple documenté, aucun dépassement (liste cochée : axe, vis d'amortisseur, colliers)
3. 3. Débattement utilisé mesuré au joint témoin à ±5 mm et converti en pourcentage du débattement total
4. 4. Compteur d'heures estimé et consigné avec la date, prochaine échéance de service calculée

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SRAM/RockShox : intervalles de maintenance officiels des fourches et amortisseurs
- doc — Fox Factory (centre d'aide) : calendrier d'entretien des suspensions Fox
- article — Park Tool : couples de serrage des composants de suspension
- article — Vojo Magazine : quand entretenir ses suspensions en français

### 9. Tiges de selle et potences suspendues `tige-selle-potence-suspendues`

- **Durée :** 40 min
- **Prérequis :**
  - [Panorama des types de suspension](#suspension-panorama-types) `suspension-panorama-types`
  - [Suspensions à ressort](#ressort-helicoidal-precharge) `ressort-helicoidal-precharge`
  - [Tige de selle : graisser et prévenir le grippage](direction-et-peripheriques.md) `entretien-tige-selle`
  - [Régler sa selle : hauteur, assiette, serrage](direction-et-peripheriques.md) `reglages-selle-essentiels`
- **Outils :** Jeu de six pans 4, 5, 6 mm et torx T25/T30, Clé dynamométrique 2-20 N·m, Pèse-personne, Réglet et mètre ruban, Collier témoin ou joint torique de repère, Graisse et dégraissant, Kit d'élastomères ou de ressorts constructeur, Chasse-bagues ou tourillon adapté si bagues à remplacer, Chiffons non pelucheux
- **⚠️ Sécurité :**
  - Repère d'insertion minimale : une tige suspendue est plus longue et travaille en levier. Sortie au-delà du repère, elle casse ou fend le tube de selle.
  - Potence suspendue : contrôle le pivot, les bagues et les vis à chaque révision. Une rupture de potence en roulant, c'est la perte totale de direction.
  - Ressort ou élastomère sous précharge : desserre progressivement et reste hors de l'axe. L'énergie stockée peut projeter le bouchon et les pièces internes.

**Objectifs :**
- Distinguer tige suspendue à parallélogramme, tige télescopique à ressort et selle à ressorts, et savoir laquelle relève de quel entretien
- Choisir l'élastomère ou le ressort correspondant au poids réel du pratiquant en tenue de sortie
- Régler et vérifier un sag statique dans la fenêtre constructeur
- Démonter, nettoyer, graisser et contrôler les bagues et axes d'une tige ou d'une potence suspendue
- Détecter un jeu naissant au bec de selle ou au pivot de potence avant qu'il ne devienne dangereux

**TP — Précharge au poids réel, puis révision complète**

Sur une tige suspendue (parallélogramme ou télescopique) et une potence suspendue, tu règles la précharge au poids réel du pratiquant, tu mesures le sag, puis tu démontes pour graisser et contrôler les bagues avant essai routier.

Critères de validation :
1. 1. Pratiquant pesé en tenue de sortie, sacoches et bagages inclus s'ils sont habituels, valeur relevée à ±0,5 kg et consignée.
2. 2. Élastomère ou ressort sélectionné dans l'abaque constructeur d'après ce poids, référence notée, et écart au tableau justifié s'il y en a un.
3. 3. Sag statique mesuré au collier témoin, en position de conduite normale : valeur dans la fenêtre constructeur (souvent 15 à 25 % de la course) et à ±3 mm de la cible.
4. 4. Répétabilité du sag : 3 mesures successives avec une dispersion ≤ 2 mm entre la plus haute et la plus basse.
5. 5. Insertion minimale contrôlée : repère gravé entièrement engagé dans le tube de selle, marge restante mesurée en mm et écrite au carnet.
6. 6. Démontage complet : glissières, bagues et axes nettoyés puis regraissés, joints remontés dans le bon sens, aucune pièce remontée avec un jeu visible ou une usure au-delà de la limite constructeur.
7. 7. Jeu latéral au bec de selle mesuré au réglet avant et après révision : ≤ 1 mm après remontage, et gain chiffré par rapport à la valeur initiale.
8. 8. Parallélogramme : chaque axe contrôlé individuellement en poussant la selle d'avant en arrière, aucun claquement perceptible, toutes les vis serrées au couple constructeur relevé.
9. 9. Potence suspendue : ressort adapté au poids selon l'abaque, pivot exempt de point dur sur toute la course, et au moins 50 % de la course utilisée au franchissement d'une bordure simulée (mesuré au joint témoin).
10. 10. Essai routier de 3 km comprenant 5 franchissements de bordure : aucun claquement, aucune vis desserrée au contrôle final, hauteur de selle inchangée à ±2 mm.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SR Suntour : tige de selle NCX et potence suspendue : réglage de précharge et entretien
- doc — Cane Creek : Thudbuster : choix des élastomères selon le poids du cycliste
- doc — Redshift Sports : ShockStop : sélection des ressorts de potence et de tige par poids
- doc — Kinekt (BodyFloat) : tige à parallélogramme : réglage du ressort, entretien des pivots
- video — Park Tool : entretien d'une tige de selle : graissage, couples et repère d'insertion
- article — Vélotaf : confort et fiabilité des tiges suspendues sur VAE urbain et cargo

## Niveau 3 — Avancé

### 1. Identifier sa suspension `identifier-modele-kit-huiles`

- **Durée :** 30 min
- **Prérequis :**
  - [Anatomie d'un amortisseur arrière](#suspension-anatomie-amortisseur) `suspension-anatomie-amortisseur`
  - [Anatomie d'une fourche télescopique](#suspension-anatomie-fourche) `suspension-anatomie-fourche`
- **Outils :** Lampe d'inspection, Carnet d'atelier

**Objectifs :**
- Décoder le numéro de série ou le code produit d'une fourche/d'un amortisseur pour trouver modèle et année exacts
- Retrouver le manuel de service correspondant et le bon kit de joints (référence exacte)
- Lire un tableau d'huiles : grade (wt ne suffit pas, la viscosité cSt à 40 °C fait foi), volumes au ml près, graisses spécifiées
- Comprendre pourquoi improviser sur l'huile ou les joints ruine un service

**TP — Dossier de service complet avant d'ouvrir**

Pour une fourche ET un amortisseur donnés, tu retrouves modèle/année via le numéro de série, tu télécharges le manuel de service exact, et tu constitues la liste de courses : référence du kit joints, huiles avec grades et volumes, graisses, couples clés.

Critères de validation :
1. 1. Modèle et année identifiés pour les deux produits, vérification croisée réussie (décalcomanies + numéro de série concordants)
2. 2. Référence exacte du kit de joints trouvée pour chacun (référence constructeur ou équivalent SKF/Enduro documenté)
3. 3. Volumes d'huile relevés au ml près et grades exacts (viscosité cSt notée, pas seulement le wt) conformes au tableau constructeur
4. 4. Fiche de service d'une page rédigée : pièces, huiles, graisses, couples — utilisable telle quelle pour les leçons de service

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SRAM/RockShox (portail service) : recherche par numéro de série et catalogues de pièces détachées
- doc — Fox Factory (centre d'aide) : identification par code produit et tableaux d'huiles
- doc — SKF : kits de joints de suspension compatibles
- doc — Enduro Bearings / Enduro Fork Seals : correspondance kits joints par modèle de fourche

### 2. Tokens : régler la progressivité de ta fourche `tokens-fourche`

- **Durée :** 35 min
- **Prérequis :**
  - [Identifier sa suspension](#identifier-modele-kit-huiles) `identifier-modele-kit-huiles`
  - [Le contrôle 25 h : intervalles et couples](#controle-25h-suspension) `controle-25h-suspension`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
- **Outils :** Douille ou clé pour bouchon supérieur (souvent 24 ou 26 mm, ou outil cassette selon marque), Clé dynamométrique, Pompe de suspension, Tokens du bon diamètre de plongeur, Carnet d'atelier
- **⚠️ Sécurité :**
  - Dépressuriser TOTALEMENT la chambre à air avant de dévisser le bouchon supérieur : un bouchon dévissé sous pression devient un projectile. Vérifier deux fois (jauge à 0, puis appuyer à nouveau sur la valve).

**Objectifs :**
- Comprendre la courbe d'un ressort pneumatique et l'effet des réducteurs de volume (tokens)
- Décider s'il faut ajouter (talonnages fréquents) ou retirer (fin de course inutilisée) des tokens
- Déposer le bouchon supérieur, ajouter/retirer un token, remonter au couple
- Vérifier l'effet par la mesure du débattement utilisé

**TP — Ajout d'un token et mesure avant/après**

Tu mesures ta consommation de débattement sur un obstacle de référence, tu dépressurises, tu ajoutes un token, tu regonfles à la pression exacte, et tu compares la consommation sur le même obstacle.

Critères de validation :
1. 1. Dépressurisation vérifiée deux fois (jauge à 0 psi PUIS appui valve sans chuintement) avant ouverture
2. 2. Nombre de tokens final ≤ maximum constructeur pour le débattement de la fourche, consigné
3. 3. Bouchon supérieur remonté au couple du manuel (valeur notée, souvent autour de 28 N·m) et pression retrouvée à ±2 psi de la valeur initiale
4. 4. Débattement utilisé mesuré sur 3 passages du même obstacle avant et après : différence chiffrée consignée et cohérente (moins de course consommée avec token ajouté)

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SRAM/RockShox : installation des Bottomless Tokens
- doc — Fox Factory (centre d'aide) : réglage du volume d'air par spacers
- video — Fox (série DIALED) : progressivité et volume spacers
- video — Vorsprung Suspension : courbes de ressort pneumatique et volume

### 3. Service bas de fourche RockShox (50 h) `service-bas-fourche-rockshox`

- **Durée :** 45 min
- **Prérequis :**
  - [Identifier sa suspension](#identifier-modele-kit-huiles) `identifier-modele-kit-huiles`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
  - [Déposer et reposer une roue](roues-et-pneus.md) `depose-repose-roue`
- **Outils :** Clés hex/douilles selon manuel, Maillet plastique ou outil de décollage, Seringue graduée, Huile de bain au grade du manuel (souvent 0W-30), Kit joints (racleurs + mousses), Outil de pose de joints racleurs du bon diamètre, Graisse spécifiée (SRAM Butter ou équivalent), Bac de récupération d'huile, Alcool isopropylique et chiffons, Clé dynamométrique
- **⚠️ Sécurité :**
  - Dépressuriser totalement la chambre à air avant de toucher aux vis de pied, vérifier deux fois.
  - Huile de suspension et disques de frein ne cohabitent pas : déposer la roue et l'étrier ou les protéger ; toute goutte sur le disque = nettoyage complet à l'alcool isopropylique.
  - Recycler l'huile usagée en déchetterie, jamais à l'évier.

**Objectifs :**
- Réaliser le service 50 h complet d'une fourche RockShox : dépose des fourreaux, nettoyage, joints, bain d'huile
- Remplacer joints racleurs et anneaux de mousse avec le kit adapté
- Doser les volumes d'huile de bain à la seringue, au bon grade, dans chaque jambe
- Remonter au couple et valider l'étanchéité et le fonctionnement

**TP — Service 50 h complet sur fourche RockShox**

Tu déroules la procédure du manuel : dépressurisation, vis de pied, décollage des fourreaux, vidange, nettoyage et inspection, joints neufs posés à l'outil, mousses imbibées, volumes d'huile exacts à la seringue, remontage au couple, regonflage et re-réglage du SAG.

Critères de validation :
1. 1. Dépressurisation vérifiée deux fois avant démontage ; aucune pièce perdue (inventaire des pièces posées sur un plateau photographié avant remontage)
2. 2. Volumes d'huile de bain dosés à ±0,5 ml des valeurs du manuel pour chaque jambe, grades conformes à la fiche de service
3. 3. Visserie remontée aux couples du manuel, valeurs consignées (vis de pied, étrier si déposé)
4. 4. Aucune fuite ni suintement anormal après 30 compressions complètes puis 24 h d'attente vélo droit
5. 5. Plongeurs lubrifiés : après 10 cycles, un film d'huile fin et régulier est visible sous les racleurs ; SAG retrouvé à ±2 % de la valeur d'avant service

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SRAM/RockShox (portail service) : manuel de service bas de fourche par modèle et année
- video — RockShox (YouTube) : service bas de fourche 50 heures pas à pas
- article — SRAM : RockShox Fresh Tips : conseils de service
- video — Park Tool : principes du service de fourche suspendue
- article — Endurotribe : tutoriel service bas de fourche en français

### 4. Service bas de fourche Fox (50 h) `service-bas-fourche-fox`

- **Durée :** 45 min
- **Prérequis :**
  - [Service bas de fourche RockShox (50 h)](#service-bas-fourche-rockshox) `service-bas-fourche-rockshox`
  - [Identifier sa suspension](#identifier-modele-kit-huiles) `identifier-modele-kit-huiles`
- **Outils :** Douilles et clés selon manuel Fox, Rondelles d'écrasement neuves, Huile de bain Fox 20WT Gold ou équivalent documenté, Kit joints Fox du bon diamètre, Outil de pose de racleurs, Seringue graduée, Maillet plastique, Clé dynamométrique, Bac de récupération, Alcool isopropylique
- **⚠️ Sécurité :**
  - Dépressuriser totalement avant de dévisser les écrous de pied, vérifier deux fois.
  - Rondelles d'écrasement à usage unique : les réutiliser cause des fuites par les écrous de pied.
  - Protéger disque et plaquettes de toute projection d'huile.

**Objectifs :**
- Réaliser le service bas de fourche d'une Fox (32/34/36/38) en suivant le manuel du modèle exact
- Gérer les spécificités Fox : rondelles d'écrasement (crush washers) neuves, huile de bain 20WT Gold, volumes par modèle
- Transposer une compétence d'une marque à l'autre en s'appuyant sur le manuel, pas sur l'habitude
- Valider le service par les mêmes critères objectifs que sur RockShox

**TP — Service bas de fourche Fox documenté en autonomie**

Tu réalises le service complet d'une fourche Fox en suivant le manuel du modèle, en notant toi-même chaque étape, volume et couple : c'est le TP de transfert où tu prouves que tu sais travailler à partir d'une documentation constructeur seule.

Critères de validation :
1. 1. Fiche de service auto-rédigée AVANT intervention (volumes, couples, pièces) validée conforme au manuel Fox du modèle
2. 2. Rondelles d'écrasement remplacées à neuf (anciennes présentées comme preuve), écrous de pied au couple du manuel
3. 3. Volumes d'huile de bain à ±0,5 ml par jambe, grade conforme
4. 4. Aucune fuite après 30 compressions et 24 h d'attente ; SAG retrouvé à ±2 %
5. 5. Écart de procédure RockShox vs Fox : 3 différences concrètes listées de mémoire dans le carnet

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Fox Factory (centre d'aide) : manuel de service bas de fourche par modèle (32/34/36/38)
- video — Fox (YouTube) : tutoriel officiel lower leg service
- doc — Fox Factory (centre d'aide) : tableau volumes et grades d'huile par fourche
- video — GMBN Tech : service bas de fourche Fox pas à pas

### 5. Service d'une fourche urbaine à ressort `service-fourche-ville-ressort`

- **Durée :** 40 min
- **Prérequis :**
  - [Suspensions à ressort](#ressort-helicoidal-precharge) `ressort-helicoidal-precharge`
  - [Service bas de fourche RockShox (50 h)](#service-bas-fourche-rockshox) `service-bas-fourche-rockshox`
- **Outils :** Clés hex et douille selon modèle, Graisse au lithium ou graisse spécifiée, Chiffons et dégraissant, Clé dynamométrique, Étau avec mordaches (optionnel)
- **⚠️ Sécurité :**
  - Le ressort principal peut être préchargé : détendre la précharge à zéro et dévisser le bouchon supérieur en le retenant fermement.

**Objectifs :**
- Démonter une fourche urbaine/trekking à ressort ou élastomère (type SR Suntour NEX, CR, NCX)
- Nettoyer, inspecter ressort, élastomère, fourreaux et bagues de guidage
- Regraisser correctement et remonter dans l'ordre, au couple
- Décider quand une fourche urbaine se répare et quand elle se remplace (coût pièce vs coût fourche)

**TP — Reconditionnement complet d'une fourche urbaine**

Sur une fourche de vélo de ville, trekking ou VAE urbain, tu démontes bouchon, ressort/élastomère et plongeurs, tu nettoies et inspectes, tu regraisses généreusement, tu remontes au couple, et tu compares la fluidité avant/après.

Critères de validation :
1. 1. Démontage/remontage complet sans pièce restante ni pièce forcée (inventaire photo avant remontage)
2. 2. Inspection consignée : état du ressort/élastomère, des bagues et des fourreaux noté sur 3 niveaux (bon/usé/à remplacer) avec justification
3. 3. Après remontage : 10 compressions complètes fluides, sans point dur ni bruit métallique
4. 4. Visserie au couple du manuel (ou valeur générique documentée si manuel introuvable, choix justifié)
5. 5. Verdict économique rédigé : coût du reconditionnement vs remplacement de la fourche, en moins de 100 mots

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SR Suntour : manuels de service des fourches urbaines et trekking
- video — SR Suntour (YouTube) : démontage et entretien des fourches d'entrée de gamme
- article — Park Tool : entretien des fourches à ressort basiques
- article — Cyclurba : entretien fourche de vélo de ville en français

### 6. Service air can : joints et progressivité `service-air-can-amortisseur`

- **Durée :** 40 min
- **Prérequis :**
  - [Identifier sa suspension](#identifier-modele-kit-huiles) `identifier-modele-kit-huiles`
  - [Tokens : régler la progressivité de ta fourche](#tokens-fourche) `tokens-fourche`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
- **Outils :** Clés hex pour la visserie d'amortisseur, Sangle ou étau avec mordaches douces, Kit joints air can du modèle, Graisse spécifiée + lubrifiant interne (type Fox Float Fluid), Seringue graduée, Pick à joints non métallique, Pompe de suspension, Clé dynamométrique
- **⚠️ Sécurité :**
  - NE JAMAIS dévisser une air can sous pression : dépressuriser totalement, vérifier deux fois (jauge à 0 psi puis appui valve). Une air can éjectée sous 200 psi peut blesser gravement.
  - Sur les montages trunnion, suivre strictement l'ordre de démontage du manuel.

**Objectifs :**
- Déposer un amortisseur du cadre en repérant l'orientation de la visserie et des douilles
- Ouvrir l'air can en sécurité, remplacer les joints, regraisser (graisse + lubrifiant type Float Fluid)
- Ajouter ou retirer des spacers de volume dans l'air can pendant qu'elle est ouverte
- Regonfler en égalisant la chambre négative par paliers et re-régler le SAG

**TP — Service air can complet avec re-réglage**

Tu déposes l'amortisseur en photographiant l'orientation de chaque pièce, tu dépressurises et vérifies, tu ouvres l'air can, tu remplaces les joints et regraisses, tu ajustes les spacers si besoin, tu remontes, regonfles par paliers de 50 psi en cyclant pour égaliser la chambre négative, et tu re-règles le SAG.

Critères de validation :
1. 1. Dépressurisation vérifiée deux fois avant ouverture ; orientation de la visserie documentée par photos avant dépose
2. 2. Joints remplacés sans rayer les gorges (inspection à la loupe : aucune marque d'outil) et lubrifiant interne dosé à ±0,5 ml de la préconisation
3. 3. Regonflage par paliers de 50 psi maximum avec 5 cycles de compression entre chaque palier (égalisation de la chambre négative), procédure consignée
4. 4. Visserie de fixation remontée au couple du manuel, valeurs notées
5. 5. Perte de pression < 5 psi après 24 h et SAG retrouvé à ±2 % de la cible

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Fox Factory (centre d'aide) : service air can Float et réglage des volume spacers
- doc — SRAM/RockShox (portail service) : service air can Deluxe/Super Deluxe
- video — RockShox (YouTube) : service air can 50 heures
- article — Vojo Magazine : entretien amortisseur en français

### 7. Douilles et visserie d'amortisseur `douilles-amortisseur`

- **Durée :** 30 min
- **Prérequis :**
  - [Service air can : joints et progressivité](#service-air-can-amortisseur) `service-air-can-amortisseur`
  - [Mesurer et décoder : pied à coulisse et marquages](fondamentaux.md) `pied-a-coulisse-et-marquages`
- **Outils :** Outil d'extraction/pose de douilles (ou presse improvisée à tige filetée documentée), Pied à coulisse, Douilles et visserie neuves aux cotes, Graisse, Clé dynamométrique

**Objectifs :**
- Identifier l'usure des douilles (bagues DU) et de la visserie d'amortisseur : jeu, claquement au relevage
- Mesurer les dimensions du montage : largeur d'œillet, diamètre d'axe, entraxe des douilles
- Extraire et presser des douilles neuves sans marquer l'œillet
- Remonter avec la bonne orientation et au couple

**TP — Remplacement d'un jeu de douilles**

Tu diagnostiques le jeu en soulevant la selle (claquement caractéristique), tu déposes l'amortisseur, tu mesures les cotes du montage, tu extrais les anciennes douilles, tu presses les neuves d'équerre et tu vérifies la disparition du jeu.

Critères de validation :
1. 1. Cotes du montage mesurées à ±0,1 mm (largeur, diamètre d'axe) et concordantes avec la visserie commandée
2. 2. Extraction et pose sans marque sur l'œillet (inspection visuelle à la loupe, aucune bavure)
3. 3. Douille pressée d'équerre : la bague DU affleure symétriquement des deux côtés (écart ≤ 0,2 mm au pied à coulisse)
4. 4. Après remontage au couple : jeu nul au test de soulèvement de selle, aucun claquement sur 10 cycles

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Fox Factory (centre d'aide) : dimensions et remplacement de la visserie d'amortisseur
- doc — SRAM/RockShox : montage des douilles et entretoises d'amortisseur
- video — Park Tool : diagnostic des jeux dans la liaison amortisseur-cadre
- doc — Enduro Bearings : douilles à aiguilles de remplacement pour amortisseurs

### 8. Pivots de cadre : contrôle, jeu et couples `controle-pivots-tout-suspendu`

- **Durée :** 30 min
- **Prérequis :**
  - [Douilles et visserie d'amortisseur](#douilles-amortisseur) `douilles-amortisseur`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
  - [Régler le jeu d'un moyeu à cônes et billes](roues-et-pneus.md) `reglage-cones-moyeu`
- **Outils :** Clé dynamométrique et embouts hex/Torx, Manuel du cadre (tableau des couples de pivots), Pied d'atelier, Carnet d'atelier

**Objectifs :**
- Cartographier la cinématique de ton cadre : chaque pivot, chaque vis, chaque roulement
- Détecter un jeu de pivot : test latéral de la roue arrière, amortisseur déposé si besoin
- Contrôler tous les pivots au couple constructeur avec le tableau du manuel du cadre
- Distinguer jeu de pivot, jeu de douilles et jeu de moyeu

**TP — Audit complet de la cinématique**

Sur un tout-suspendu, tu dessines le schéma des pivots, tu testes le jeu roue arrière tenue (moyeu exclu au préalable), tu contrôles chaque vis de pivot au couple du manuel et tu remplis le tableau d'audit.

Critères de validation :
1. 1. Schéma de la cinématique dessiné avec 100 % des pivots localisés (vérification contre l'éclaté constructeur)
2. 2. Test de jeu réalisé dans le bon ordre : moyeu exclu d'abord, puis douilles, puis pivots — ordre consigné et justifié
3. 3. 100 % des vis de pivots contrôlées au couple du tableau constructeur, aucune vis oubliée (checklist cochée), valeurs consignées
4. 4. Toute anomalie (jeu, vis desserrée, frein filet mort) documentée avec plan d'action

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Park Tool : entretien des pivots de cadre tout-suspendu
- doc — Manuels constructeurs de cadres (Santa Cruz, Specialized, Canyon...) : tableaux de couples et éclatés de cinématique
- video — GMBN Tech : détecter et traiter le jeu dans une cinématique
- article — Endurotribe : entretien des pivots en français

## Niveau 4 — Expert

### 1. Le bracketing : affiner ses réglages `bracketing-fox-dialed`

- **Durée :** 40 min
- **Prérequis :**
  - [Compression basse vitesse et positions de pédalage](#suspension-reglage-compression-lsc) `suspension-reglage-compression-lsc`
  - [Régler le rebond : la molette qui change tout](#suspension-reglage-rebond) `suspension-reglage-rebond`
  - [Régler le SAG de l'amortisseur](#sag-amortisseur) `sag-amortisseur`
  - [Régler le SAG de la fourche](#sag-fourche) `sag-fourche`
  - [Tokens : régler la progressivité de ta fourche](#tokens-fourche) `tokens-fourche`
- **Outils :** Pompe de suspension, Carnet ou application de notes, Segment de test répétable (descente courte, 1-2 min), Chronomètre (optionnel)

**Objectifs :**
- Appliquer la méthode bracketing (encadrement) popularisée par Fox DIALED : tester au-delà de l'optimum dans les deux sens
- Ne changer qu'UNE variable à la fois et noter chaque run sur une grille
- Construire un protocole de test reproductible : même segment, mêmes conditions, runs consécutifs
- Converger vers un réglage validé par les sensations ET les mesures (joint témoin, chrono facultatif)

**TP — Session bracketing sur une variable**

Tu choisis UNE variable (ex. rebond fourche), tu roules le même segment 5 fois : réglage actuel, puis 2 clics plus ouvert, puis 4, retour, puis 2 et 4 clics plus fermé, en notant chaque run sur ta grille avant le run suivant.

Critères de validation :
1. 1. Une seule variable modifiée sur toute la session (toutes les autres consignées et inchangées, pression vérifiée avant chaque run à ±2 psi)
2. 2. 5 passages minimum sur le même segment, notes remplies À CHAUD après chaque run (grille : grip avant, grip arrière, fatigue mains, stabilité, note globale /10)
3. 3. Débattement utilisé relevé au joint témoin après chaque run et consigné
4. 4. Réglage final choisi et justifié par écrit en moins de 150 mots, avec comparaison chiffrée aux extrêmes testés

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Fox (série DIALED) : méthode de bracketing pour affiner les réglages
- video — Fox (série DIALED) : setup de base avant bracketing selon Jordi Cortes
- video — Vorsprung Suspension : méthodologie de test des réglages
- article — Endurotribe : affiner ses suspensions sur le terrain en français

### 2. HSC/LSC : dompter une cartouche haut de gamme `reglages-hsc-lsc`

- **Durée :** 35 min
- **Prérequis :**
  - [Le bracketing : affiner ses réglages](#bracketing-fox-dialed) `bracketing-fox-dialed`
  - [Compression basse vitesse et positions de pédalage](#suspension-reglage-compression-lsc) `suspension-reglage-compression-lsc`
- **Outils :** Clés ou molettes intégrées selon cartouche, Pompe de suspension, Carnet d'atelier, Segment de test avec freinage appuyé et gros impact identifié

**Objectifs :**
- Distinguer compression basse vitesse (mouvements du pilote) et haute vitesse (impacts) — vitesse de TIGE, pas du vélo
- Prendre en main une cartouche à 4 voies (GRIP2, Charger 3, RC2 : HSC, LSC, HSR, LSR)
- Poser les réglages de base constructeur puis isoler l'effet de chaque circuit par un test dédié
- Documenter une carte complète de réglages pour un vélo donné

**TP — Cartographie 4 voies d'une cartouche**

Tu comptes les plages de clics des 4 circuits, tu poses la base constructeur pour ton poids, puis tu isoles : test de plongée au freinage pour la LSC, gros impact répété pour la HSC, avec mesure au joint témoin à chaque configuration.

Critères de validation :
1. 1. Plage de clics de chaque circuit comptée deux fois (résultats identiques) et base constructeur posée et consignée
2. 2. Test LSC : écart de plongée au freinage ≥ 5 mm mesuré entre LSC ouverte et fermée, 3 essais par configuration
3. 3. Test HSC : débattement consommé sur le même impact mesuré au joint témoin à ±5 mm, HSC ouverte vs fermée, 3 passages par configuration
4. 4. Carte de réglages finale rédigée (4 valeurs en clics + pression + tokens) datée dans le carnet

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Fox Factory (centre d'aide) : guide de réglage GRIP2 (HSC/LSC/HSR/LSR)
- doc — SRAM/RockShox : guide de réglage Charger 3 avec ButterCups
- video — Vorsprung Suspension : compression haute vitesse expliquée (Tuesday Tune)
- video — Fox (série DIALED) : réglage fin des circuits haute et basse vitesse

### 3. Diagnostic méthodique d'une suspension malade `diagnostic-suspension`

- **Durée :** 45 min
- **Prérequis :**
  - [Service bas de fourche RockShox (50 h)](#service-bas-fourche-rockshox) `service-bas-fourche-rockshox`
  - [Service air can : joints et progressivité](#service-air-can-amortisseur) `service-air-can-amortisseur`
  - [T'équiper niveau 4 : diagnostic et électronique](fondamentaux.md) `outillage-expert`
  - [Jeu de direction ahead](direction-et-peripheriques.md) `precharge-jeu-direction-ahead`
- **Outils :** Pompe de suspension, Pied d'atelier, Lampe, Pied à coulisse, Carnet d'atelier

**Objectifs :**
- Construire un arbre de diagnostic : symptôme → hypothèses → tests discriminants → cause
- Reconnaître les pathologies classiques : friction excessive (stiction), claquement de top-out, perte de pression, bruit de succion (air dans l'hydraulique), perte d'amortissement, huile qui migre
- Discriminer jeu de bagues de fourche vs jeu de direction par le test différencié
- Chiffrer un plan de remise en état (pièces, temps, sous-traitance éventuelle)

**TP — Trois pannes, trois verdicts**

Sur un ou plusieurs vélos (dont un avec panne introduite volontairement par un tiers si possible), tu diagnostiques trois symptômes distincts en suivant ton arbre de décision, dont un cas de jeu à discriminer entre bagues et direction.

Critères de validation :
1. 1. Cause racine correctement identifiée dans 3 cas sur 3 (vérification par démontage ou par le tiers qui a introduit la panne)
2. 2. Test discriminant bagues vs direction exécuté et expliqué : frein avant serré + bascule (direction) vs fourche comprimée + poussée latérale sur les fourreaux (bagues), conclusion correcte
3. 3. Chaque diagnostic documenté : symptôme, hypothèses (≥ 2 par cas), test réalisé, verdict — sur une page par cas
4. 4. Devis de remise en état chiffré pour au moins un cas : pièces avec références, temps estimé à ±30 min, décision réparer/sous-traiter argumentée

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SRAM/RockShox (portail service) : guide de dépannage des fourches et amortisseurs
- doc — Fox Factory (centre d'aide) : FAQ pannes courantes et symptômes
- video — Vorsprung Suspension : diagnostic friction, bagues et amortissement
- video — Park Tool : diagnostic des jeux sur le train avant
- article — Glisse Alpine : diagnostiquer une fourche fatiguée en français

### 4. Cinématique : ratio, progressivité, anti-squat `cinematique-tout-suspendu`

- **Durée :** 40 min
- **Prérequis :**
  - [Anatomie d'un amortisseur arrière](#suspension-anatomie-amortisseur) `suspension-anatomie-amortisseur`
  - [Pivots de cadre : contrôle, jeu et couples](#controle-pivots-tout-suspendu) `controle-pivots-tout-suspendu`
- **Outils :** Mètre et réglet, Pompe de suspension (pour dégonfler/regonfler proprement), Sangle, Carnet d'atelier

**Objectifs :**
- Calculer le ratio de démultiplication moyen : débattement roue / course amortisseur
- Mesurer une courbe de ratio simplifiée en 3 points et qualifier la progressivité (linéaire, progressif, dégressif)
- Comprendre l'anti-squat et l'anti-rise dans les grandes lignes et leur impact sur le pédalage/freinage
- Identifier les architectures : mono-pivot, mono-pivot articulé, 4-bar/Horst, VPP/double biellette

**TP — Mesurer le ratio de son cadre en 3 points**

Amortisseur dégonflé (ou ressort déposé), tu comprimes la suspension par paliers : pour chaque tranche de course d'amortisseur (début, milieu, fin), tu mesures le déplacement vertical de l'axe de roue arrière et tu traces la courbe de ratio.

Critères de validation :
1. 1. Ratio moyen calculé (débattement roue mesuré / course amortisseur) à ±0,2 de la valeur constructeur
2. 2. Trois points de mesure réalisés (0-33 %, 33-66 %, 66-100 % de la course) avec déplacements roue mesurés à ±2 mm
3. 3. Courbe tracée et qualifiée correctement (progressif/linéaire/dégressif), pourcentage de progressivité calculé
4. 4. Architecture de 3 vélos différents identifiée correctement (3/3, photos annotées : position du pivot principal, biellettes, pivot Horst)

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- video — Vorsprung Suspension : leverage ratio et progressivité expliqués (Tuesday Tune)
- article — Vojo Magazine : comprendre les cinématiques de tout-suspendus en français
- outil — Linkage Design : base de données de courbes de cinématique
- video — GMBN Tech : les architectures de suspension arrière comparées

### 5. Choisir un tarage coil et passer au ressort `choix-ressort-coil`

- **Durée :** 35 min
- **Prérequis :**
  - [Suspensions à ressort](#ressort-helicoidal-precharge) `ressort-helicoidal-precharge`
  - [Cinématique : ratio, progressivité, anti-squat](#cinematique-tout-suspendu) `cinematique-tout-suspendu`
- **Outils :** Balance, Calculatrice, Pied à coulisse, Ressorts de test si disponibles, Carnet d'atelier
- **⚠️ Sécurité :**
  - Détendre la précharge à zéro avant de déposer un ressort ; ne jamais démonter la bague de retenue d'un ressort comprimé.

**Objectifs :**
- Calculer un tarage de ressort (lbs/in) à partir du poids pilote, du ratio de démultiplication moyen et du SAG cible
- Utiliser et croiser les calculateurs constructeurs pour valider ton calcul
- Évaluer une conversion air vers coil : compatibilité cadre (progressivité suffisante), poids, coût
- Vérifier le tarage par la mesure de SAG et ajuster d'un cran si nécessaire

**TP — Tarage calculé, tarage vérifié**

Pour un pilote et un vélo donnés, tu calcules le tarage théorique (poids × ratio moyen / (course × SAG cible)), tu le croises avec deux calculateurs constructeurs, puis tu montes le ressort le plus proche et tu valides par la mesure du SAG.

Critères de validation :
1. 1. Calcul manuel posé et détaillé dans le carnet, résultat à ±25 lbs/in des calculateurs constructeurs croisés (2 sources)
2. 2. Ressort choisi dans le pas standard le plus proche (incréments de 25 ou 50 lbs/in), choix justifié
3. 3. SAG mesuré avec le ressort monté à ±3 % de la cible avec précharge ≤ 2 tours
4. 4. Si conversion air→coil : compatibilité du cadre vérifiée et documentée (recommandation constructeur ou courbe de progressivité ≥ seuil conseillé)

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- outil — Fox Factory (centre d'aide) : calculateur de tarage de ressort coil
- doc — SRAM/RockShox : guide de sélection des ressorts Super Deluxe Coil
- video — Vorsprung Suspension : coil vs air et choix du tarage
- doc — Sprindex : ressorts à tarage ajustable

### 6. Remplacer les roulements de pivots de cadre `remplacement-roulements-pivots`

- **Durée :** 45 min
- **Prérequis :**
  - [Pivots de cadre : contrôle, jeu et couples](#controle-pivots-tout-suspendu) `controle-pivots-tout-suspendu`
  - [Moyeux à roulements scellés](roues-et-pneus.md) `service-roulements-scelles-moyeu`
  - [Graisse, pâte carbone, frein-filet, antiseize](fondamentaux.md) `pates-assemblage`
- **Outils :** Extracteur de roulements internes ou jeu d'extraction, Presse à tige filetée avec entretoises aux diamètres, Kit de roulements du cadre (références vérifiées), Graisse marine, Frein filet selon manuel, Clé dynamométrique, Pied à coulisse

**Objectifs :**
- Identifier les références de roulements de pivots (gravure : 608, 6902, 688...) et commander le bon kit
- Extraire des roulements de cadre sans marquer les logements (extracteur, presse à tige filetée)
- Presser les roulements neufs d'équerre, gérer graisse marine et frein filet selon manuel
- Régler les précharges éventuelles (colliers, axes coniques) et valider l'absence de jeu et de point dur

**TP — Remplacement complet des roulements d'une biellette**

Tu démontes une biellette ou un triangle arrière, tu relèves les références de chaque roulement, tu extrais proprement, tu presses les neufs à l'aide d'entretoises adaptées, tu remontes avec les bons produits et couples, et tu valides la cinématique.

Critères de validation :
1. 1. 100 % des références de roulements relevées et concordantes avec le kit commandé (tableau référence/position)
2. 2. Extraction sans dommage : logements inspectés à la lampe, aucune rayure profonde ni ovalisation détectée au pied à coulisse (cote du logement à ±0,05 mm de la cote nominale)
3. 3. Roulements pressés d'équerre et en butée : rotation douce au doigt, aucun point dur, sur 100 % des roulements posés
4. 4. Remontage au couple avec frein filet/graisse selon manuel (produits utilisés consignés vis par vis)
5. 5. Validation finale : cinématique cyclée 20 fois sans bruit, aucun jeu au test de la roue arrière

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Enduro Bearings : kits de roulements de pivots par cadre et outils d'extraction
- video — Park Tool : extraction et pose de roulements de cadre
- doc — Manuels constructeurs de cadres : procédure officielle de remplacement des roulements de cinématique
- video — GMBN Tech : remplacer les roulements de pivots pas à pas

## Niveau 5 — Maître

### 1. Service et purge d'une cartouche RockShox Charger `service-cartouche-charger`

- **Durée :** 45 min
- **Prérequis :**
  - [Service bas de fourche RockShox (50 h)](#service-bas-fourche-rockshox) `service-bas-fourche-rockshox`
  - [Service bas de fourche Fox (50 h)](#service-bas-fourche-fox) `service-bas-fourche-fox`
  - [Diagnostic méthodique d'une suspension malade](#diagnostic-suspension) `diagnostic-suspension`
  - [Identifier sa suspension](#identifier-modele-kit-huiles) `identifier-modele-kit-huiles`
- **Outils :** Douilles et clés à cassette selon manuel, Seringues de purge avec adaptateurs, Huile damper au grade exact du manuel (viscosité cSt vérifiée), Étau avec mordaches douces, Bac de récupération, Chiffons non pelucheux, Clé dynamométrique
- **⚠️ Sécurité :**
  - Dépressuriser la chambre à air avant tout démontage, vérifier deux fois.
  - Propreté chirurgicale : une poussière dans un clapet suffit à dégrader l'amortissement ; plan de travail nettoyé et chiffons non pelucheux obligatoires.
  - Huile usagée en déchetterie ; éviter tout contact prolongé avec la peau (gants nitrile).

**Objectifs :**
- Déposer une cartouche Charger complète de la fourche
- Comprendre l'architecture : cartouche scellée à membrane (bladder), circuit rebond, circuit compression
- Purger la cartouche avec l'huile au grade exact et chasser toute bulle d'air
- Reposer, remonter la fourche et valider un amortissement constant sur toute la course

**TP — Purge complète d'une cartouche Charger**

Tu déposes la cartouche, tu vidanges, tu remplis à la seringue avec l'huile exacte, tu cycles la tige pour chasser les bulles, tu dégazes la membrane selon la procédure du manuel, tu refermes et tu contrôles la consistance de l'amortissement avant remontage complet.

Critères de validation :
1. 1. Cartouche déposée et reposée sans dommage, toutes les étapes du manuel cochées sur une checklist imprimée
2. 2. Purge validée : aucune bulle visible en sortie sur 5 cycles lents complets de la tige, aucun bruit de succion
3. 3. Test de consistance : résistance homogène de la tige sur toute la course, sans point mou ni à-coup, en compression ET en détente (test aveugle réussi : un tiers ne détecte aucun point mou)
4. 4. Huile au grade du manuel (viscosité cSt consignée), fourche remontée aux couples documentés
5. 5. Aucune fuite après 24 h et comportement rebond/compression conforme : plage de clics produisant un changement perceptible et progressif, consigné

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — SRAM/RockShox (portail service) : manuel de service cartouche Charger par génération
- video — RockShox (YouTube) : service et purge de la cartouche Charger
- video — Vorsprung Suspension : fonctionnement interne des cartouches à bladder
- doc — SRAM : spécifications d'huiles et volumes par cartouche

### 2. Service d'une cartouche Fox FIT/GRIP `service-cartouche-fox-grip`

- **Durée :** 45 min
- **Prérequis :**
  - [Service et purge d'une cartouche RockShox Charger](#service-cartouche-charger) `service-cartouche-charger`
  - [Identifier sa suspension](#identifier-modele-kit-huiles) `identifier-modele-kit-huiles`
- **Outils :** Douilles et clés selon manuel Fox, Seringues de purge, Huiles Fox aux grades exacts (damper ET bain, différentes), Étau avec mordaches, Bac de récupération, Chiffons non pelucheux, Clé dynamométrique
- **⚠️ Sécurité :**
  - Dépressuriser la chambre à air avant démontage, vérifier deux fois.
  - Ne jamais intervertir huile de bain et huile de cartouche : viscosités différentes, amortissement ruiné.
  - Gants nitrile et huile usagée en déchetterie.

**Objectifs :**
- Distinguer les architectures Fox : FIT4 (bladder), GRIP/GRIP2 (IFP à ressort, semi-ouverte)
- Déposer, vidanger et purger une cartouche Fox avec l'huile et le volume exacts
- Maîtriser les spécificités : dégazage, remplissage sous niveau, réglage des circuits après remontage
- Transposer la compétence de purge d'une architecture à l'autre en travaillant au manuel

**TP — Purge d'une cartouche GRIP ou FIT4 en autonomie documentée**

Comme pour le TP Fox du bas de fourche, tu travailles au manuel seul : fiche auto-rédigée, dépose de la cartouche, vidange, purge selon l'architecture (bladder ou IFP ressort), contrôle de consistance et remontage complet.

Critères de validation :
1. 1. Fiche de service auto-rédigée avant intervention, validée conforme au manuel Fox (architecture identifiée correctement : bladder vs IFP)
2. 2. Purge sans bulles : 5 cycles lents sans bulle en sortie ni bruit de succion
3. 3. Consistance homogène de la tige sur toute la course, validée par test aveugle par un tiers
4. 4. Volumes et grades d'huile conformes au manuel (huile damper ≠ huile de bain, les deux consignées), couples de remontage documentés
5. 5. Aucune fuite après 24 h ; 3 différences procédurales Charger vs Fox listées de mémoire au carnet

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Fox Factory (centre d'aide) : manuels de service des cartouches FIT4, GRIP et GRIP2
- video — Fox (YouTube) : service officiel des cartouches
- doc — Fox Factory (centre d'aide) : tableau des huiles par circuit et par cartouche
- video — Vorsprung Suspension : différences bladder vs IFP dans les cartouches

### 3. Service d'amortisseur 1/3 `damper-demontage-diagnostic`

- **Durée :** 45 min
- **Prérequis :**
  - [Anatomie d'un amortisseur arrière](#suspension-anatomie-amortisseur) `suspension-anatomie-amortisseur`
  - [Identifier sa suspension](#identifier-modele-kit-huiles) `identifier-modele-kit-huiles`
  - [Service air can : joints et progressivité](#service-air-can-amortisseur) `service-air-can-amortisseur`
  - [Douilles et visserie d'amortisseur](#douilles-amortisseur) `douilles-amortisseur`
  - [Diagnostic méthodique d'une suspension malade](#diagnostic-suspension) `diagnostic-suspension`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
  - [Service d'une cartouche Fox FIT/GRIP](#service-cartouche-fox-grip) `service-cartouche-fox-grip`
  - [Service et purge d'une cartouche RockShox Charger](#service-cartouche-charger) `service-cartouche-charger`
- **Outils :** manuel de service constructeur du modèle exact, outils de maintien spécifiques (mors doux, berceau de corps, clé à ergots), clé dynamométrique 2-20 Nm, pied à coulisse et comparateur avec support, aiguille de dégonflage ou outil de purge d'azote selon modèle, bac de récupération d'huile et seringues graduées, chiffons non pelucheux et alcool isopropylique, lampe et loupe, appareil photo, gants nitrile et lunettes
- **⚠️ Sécurité :**
  - Un amortisseur contient une chambre à gaz sous 130 à 300 psi : ouvrir un corps sans avoir dépressurisé projette l'IFP, l'huile et parfois la tige comme un projectile. Dépressurisation vérifiée au manomètre avant toute clé.
  - La chambre air (positive et négative) doit être dégonflée séparément de la chambre à gaz : ce sont deux volumes distincts et l'un peut rester plein alors que l'autre est vide.
  - L'huile de suspension sous pression peut être injectée sous la peau : lunettes et gants obligatoires, jamais de main devant un orifice, jamais de doigt sur un joint sous pression pour « voir si ça fuit ».
  - Ne serre jamais le corps d'un amortisseur directement dans un étau à mors acier : tu ovalises l'alésage et l'amortisseur est mort. Mors doux ou berceau dédié.
  - Huile usagée = déchet dangereux : bidon dédié, dépôt en filière agréée, jamais à l'évier.

**Objectifs :**
- Dépressuriser et ouvrir un amortisseur en sécurité, dans le bon ordre.
- Lire l'usure réelle : tige, joint racleur, joint principal, IFP, bagues, huile.
- Trancher pièce par pièce ce qui se répare à l'atelier et ce qui repart chez le constructeur.
- Rédiger un rapport d'état chiffré et une commande de pièces sans approximation.

**TP — Ouvrir, inspecter et documenter un amortisseur, avec décision go/no-go par pièce**

Sur un amortisseur de récupération ou en fin de vie, tu conduis l'ouverture complète selon le manuel constructeur : dépressurisation contrôlée, dépose de l'air can, ouverture du corps, extraction de l'IFP, inspection de chaque pièce. Tu produis un rapport d'état chiffré et une commande de pièces exploitable.

Critères de validation :
1. 1. Dépressurisation prouvée avant ouverture : 0 bar résiduel constaté au manomètre sur la chambre à gaz ET chambre air à 0 psi, les deux relevés notés.
2. 2. Rapport d'état couvrant au minimum 12 points contrôlés : tige (chromage, rayures), joint racleur, joint principal, toriques du corps, IFP et son joint, bagues de guidage, alésage du corps, œillets, douilles, huile (couleur, odeur, particules), volume d'huile récupéré, filetages.
3. 3. Volume d'huile récupérée mesuré à ±2 mL et confronté à la spécification du manuel : écart consigné avec son interprétation (fuite, perte de charge, mauvais service antérieur).
4. 4. Tige contrôlée au comparateur : faux-rond ≤ 0,05 mm ; toute rayure longitudinale accrochant l'ongle est photographiée et déclarée éliminatoire avec justification écrite.
5. 5. Décision go / no-go écrite pour 100 % des pièces inspectées, chacune adossée à un critère chiffré ou à une référence de page du manuel — 0 décision « à l'œil » sans critère.
6. 6. Frontière atelier / retour usine tranchée sur au moins 3 opérations identifiées (par exemple re-chromage de tige, remplacement de bague sertie, ouverture d'un damper scellé), chacune avec sa raison technique.
7. 7. Photos référencées : ≥ 8, chacune reliée par un numéro à une ligne du rapport d'état.
8. 8. Commande de pièces établie avec références constructeur exactes (kit joints, IFP, bagues, huile), 0 « équivalent » proposé sans justification écrite de l'équivalence.
9. 9. Pièces déposées rangées et repérées dans l'ordre de démontage : au recomptage, 0 pièce manquante et 0 pièce non identifiée.
10. 10. Huile usagée collectée en bidon dédié et destination de la filière notée sur la fiche.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Fox Factory : manuel de service amortisseur (Float X, DPX2, DHX) : dépressurisation, ouverture et contrôle des pièces
- doc — SRAM / RockShox : Service Manual des amortisseurs Deluxe et Super Deluxe : intervalles, éclatés et pièces
- article — Shockcraft : diagnostic d'usure interne d'amortisseur et critères de rebut des tiges et bagues
- video — Vorsprung Suspension : anatomie d'un damper et lecture de l'usure des joints en atelier
- doc — Öhlins : procédures de service TTX et exigences de propreté en salle de montage
- video — Park Tool : organisation d'un poste de travail pour démontage de composants à huile

### 4. Service d'amortisseur 2/3 `damper-ifp-et-huile`

- **Durée :** 45 min
- **Prérequis :**
  - [Service d'amortisseur 1/3](#damper-demontage-diagnostic) `damper-demontage-diagnostic`
  - [Identifier sa suspension](#identifier-modele-kit-huiles) `identifier-modele-kit-huiles`
  - [Service et purge d'une cartouche RockShox Charger](#service-cartouche-charger) `service-cartouche-charger`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
- **Outils :** manuel de service constructeur du modèle exact, huile de suspension du grade prescrit, seringues graduées et éprouvette, outil de positionnement d'IFP du modèle, ou équivalent fabriqué, jauge de profondeur ou pied à coulisse à jauge, outil de maintien du corps (mors doux), clé dynamométrique 2-20 Nm, chiffons non pelucheux et alcool isopropylique, graisse de montage prescrite pour les joints
- **⚠️ Sécurité :**
  - L'huile de suspension sous pression peut être injectée sous la peau lors de la mise en place de l'IFP : lunettes, gants, et jamais la main dans l'axe de l'orifice quand tu pousses le piston.
  - Un volume d'huile trop important empêche l'IFP de descendre à la cote : la surpression peut expulser le bouchon au serrage. Si l'IFP ne descend pas librement à la cote, tu vidanges, tu ne forces pas.
  - Grade d'huile : une viscosité différente de la prescription change l'amortissement et peut faire caviter le damper. Ce n'est pas une préférence, c'est une spécification.
  - Huile usagée et chiffons imbibés : déchets dangereux, bidon et bac dédiés, jamais à l'évier ni à la poubelle ordinaire.

**Objectifs :**
- Choisir le grade et le volume d'huile exacts imposés par le manuel du modèle.
- Positionner l'IFP à la cote constructeur avec un outil de profondeur.
- Remplir et purger un damper sans emprisonner d'air.
- Vérifier l'absence d'air par un test de course reproductible avant la mise en gaz.

**TP — Régler l'IFP à la cote et purger un damper sans air résiduel**

Tu remontes le damper ouvert à la séance précédente : joints neufs graissés, IFP posé à la cote du manuel, remplissage au volume et au grade prescrits, purge complète. Tu valides l'absence d'air par un test de course avant de passer à la mise en gaz.

Critères de validation :
1. 1. Huile conforme : grade et référence du manuel, quantité mesurée à l'éprouvette à ±2 mL de la spécification, numéro de page du manuel noté sur la fiche.
2. 2. Joints neufs montés avec la graisse prescrite : 100 % des joints du kit remplacés, 0 joint d'origine réutilisé « parce qu'il avait l'air bon ».
3. 3. Hauteur d'IFP réglée à la cote du manuel à ±0,5 mm, mesurée à la jauge de profondeur ; deux mesures indépendantes concordantes à 0,2 mm près.
4. 4. Purge : après procédure complète, 0 bulle visible pendant 30 s d'observation continue (à la seringue ou au bain d'huile selon la méthode du manuel).
5. 5. Test de course : 10 cycles pleine course à effort manuel constant, 0 zone molle, 0 point mort en début de course, effort ressenti identique du 1er au 10e cycle.
6. 6. Contrôle de compressibilité : damper non pressurisé, la tige ne s'enfonce pas d'elle-même sous son propre poids et remonte sans à-coup — sinon air résiduel, on recommence la purge.
7. 7. Étanchéité de premier niveau : après les 10 cycles, papier absorbant appliqué 60 s sur le joint racleur, il ressort sec (0 trace d'huile).
8. 8. Couples de serrage des bouchons et têtes conformes au manuel, contrôlés à la clé dynamométrique, tolérance ±5 %.
9. 9. Propreté : 0 particule visible à la lampe dans l'huile prélevée en fin d'opération sur un chiffon blanc.
10. 10. Fiche de service renseignée : référence et lot d'huile, volume, cote IFP relevée, date, numéro de série de l'amortisseur — 0 champ vide.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Fox Factory : tableau des huiles, volumes et cotes de positionnement IFP par modèle d'amortisseur
- doc — SRAM / RockShox : procédure de remplissage et de réglage IFP des amortisseurs Super Deluxe
- article — Shockcraft : purge d'un damper d'amortisseur et pièges de l'air emprisonné
- video — Vorsprung Suspension : pourquoi la cote IFP conditionne la course et le comportement du damper
- doc — Motorex / Fuchs Silkolene : fiches techniques des huiles de suspension : viscosité, indice et compatibilité joints
- doc — Öhlins : procédure de remplissage et contrôle d'absence d'air

### 5. Service d'amortisseur 3/3 `damper-azote-et-validation`

- **Durée :** 40 min
- **Prérequis :**
  - [Service d'amortisseur 2/3](#damper-ifp-et-huile) `damper-ifp-et-huile`
  - [Douilles et visserie d'amortisseur](#douilles-amortisseur) `douilles-amortisseur`
  - [Régler le SAG de l'amortisseur](#sag-amortisseur) `sag-amortisseur`
  - [Régler le rebond : la molette qui change tout](#suspension-reglage-rebond) `suspension-reglage-rebond`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
- **Outils :** bouteille d'azote avec détendeur haute pression et manomètre, ou station de charge dédiée, aiguille de charge / adaptateur de valve du modèle, manomètre de contrôle indépendant pour recoupement, clés dynamométriques 2-20 Nm et 5-60 Nm, pompe haute pression pour la chambre air, eau savonneuse et pinceau pour test de fuite, pied à coulisse et collier témoin pour la mesure de course, thermomètre infrarouge, lunettes de protection
- **⚠️ Sécurité :**
  - L'azote est stocké à très haute pression : bouteille arrimée verticalement, détendeur contrôlé, chapeau en place au transport. Une bouteille qui tombe et casse son robinet devient un projectile.
  - N'utilise jamais d'oxygène, ni l'air d'un compresseur d'atelier huileux, pour charger une chambre de damper : mélange huile + oxygène sous pression = risque d'inflammation. Azote sec, ou air parfaitement sec et filtré si le constructeur l'autorise explicitement.
  - Ne dépasse jamais la pression constructeur de la chambre à gaz, même « un peu, pour compenser » : tu déformes l'IFP et tu peux faire sauter un circlip.
  - Lunettes obligatoires pendant toute la phase de charge et lors du premier cycle après charge.
  - Un amortisseur qui sort de cette leçon est un composant sous pression : dépressurisation obligatoire avant tout démontage ultérieur, y compris pour « juste vérifier ».

**Objectifs :**
- Recharger une chambre à gaz d'amortisseur à la pression constructeur, en sécurité.
- Remonter l'amortisseur aux couples prescrits, douilles et visserie comprises.
- Valider un service sans banc dyno : course, étanchéité, comportement sur le vélo.
- Archiver une fiche de service traçable et définir le prochain intervalle.

**TP — Recharger, remonter et valider l'amortisseur sur le vélo**

Tu charges la chambre à gaz à la pression du manuel, tu remontes l'amortisseur complet (air can, douilles, visserie) aux couples prescrits, puis tu valides le service sans banc : course restituée, étanchéité dans le temps, comportement mesuré sur le vélo et sur une sortie de contrôle.

Critères de validation :
1. 1. Matériel contrôlé avant charge : détendeur en état, manomètre recoupé avec un second manomètre indépendant (écart ≤ 5 %), bouteille arrimée, lunettes portées 100 % de la phase de charge.
2. 2. Pression de charge = spécification constructeur à ±5 % (exemple : 200 psi → 190-210 psi), relevée après 2 minutes de stabilisation et non au moment de la fermeture de la valve.
3. 3. Couples de remontage 100 % conformes au manuel, contrôlés à la clé dynamométrique, tolérance ±5 % ; douilles et entretoises remontées au bon jeu, 0 jeu perceptible à la main sur les œillets.
4. 4. Test d'étanchéité immédiat : eau savonneuse sur valve et joints, 0 bulle après 5 minutes d'observation.
5. 5. Test d'étanchéité différé : perte de pression de la chambre à gaz < 3 % après 72 h, et perte de la chambre air < 5 % sur la même durée.
6. 6. Course restituée : course mesurée au collier témoin ≥ 98 % de la course nominale du modèle, en compression plein débattement, hors vélo puis sur vélo.
7. 7. Validation sur vélo : SAG remis à la valeur cible à ±2 % du débattement, rebond réglé et vérifié (le vélo revient sans rebondir deux fois), 20 compressions plein débattement sans bruit anormal ni point dur.
8. 8. Sortie de contrôle de 30 minutes minimum sur un parcours défini et répétable ; au retour : 0 trace d'huile sur le racleur (papier absorbant, 60 s), température du corps au thermomètre IR < 60 °C.
9. 9. Comparatif avant/après documenté : SAG, nombre de clics de rebond retenus, ressenti noté sur 3 critères (sensibilité au départ, tenue en milieu de course, contrôle en fin de course), avec les valeurs d'avant service en regard.
10. 10. Fiche de service archivée : numéro de série, date, huile et volume, cote IFP, pression de gaz, couples appliqués, prochain intervalle de service en heures d'utilisation.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Fox Factory : procédure de recharge azote, pressions IFP par modèle et couples de remontage
- doc — SRAM / RockShox : charge de la chambre à gaz et remontage des amortisseurs Super Deluxe
- article — Shockcraft : azote contre air dans un damper : pourquoi, risques et pressions de service
- doc — Air Liquide : sécurité d'emploi des bouteilles de gaz comprimé et des détendeurs en atelier
- video — Vorsprung Suspension : valider un service d'amortisseur sans banc dyno : tests reproductibles
- doc — Öhlins : contrôle final et fiche de service d'un amortisseur remis en pression
