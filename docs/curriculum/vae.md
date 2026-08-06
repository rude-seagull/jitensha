# Système « vae »

> Part of the Jitensha curriculum — see [`CURRICULUM.md`](../../CURRICULUM.md) for the overview. Lesson data is French (course content); scaffolding is English per project rules.

Parcours complet VAE : de l'identification d'une motorisation et de la survie d'une batterie Li-ion (niveau 1) jusqu'au diagnostic électrique au multimètre, à la lecture des codes constructeurs (Bosch, Shimano STEPS, Yamaha, Brose, Fazua, Mahle, Bafang), à la dépose moteur, au montage/programmation d'un kit Bafang, au diagnostic BMS et à la conception d'un retrofit complet (niveau 5). Le système couvre l'électrique et l'électronique du vélo à assistance : architectures pédalier vs moyeu, capteurs couple/cadence/vitesse, packs Li-ion et BMS, connectique Higo/Julet, codes d'erreur, cadre légal EN 15194 et pratiques d'atelier (stockage, transport, refus d'intervention). Tout ce qui est mécanique pure (chaîne, freins, roulements, rayonnage) reste chez les systèmes correspondants et n'apparaît ici qu'en prérequis.

**Progression logic:** Niveau 1 : on n'ouvre rien, on observe et on ne détruit rien — identifier l'architecture, comprendre ce que la batterie tolère, savoir reconnaître un incident Li-ion, piloter l'écran, connaître le cadre légal EN 15194 et protéger l'électronique de l'eau. Niveau 2 : gestes d'atelier sans instrument de mesure — dépose/repose batterie, réglage capteur de vitesse et entrefer, périphériques électriques, appairage et mise à jour firmware, arbre de décision « ça n'assiste plus ». Niveau 3 : l'instrument entre en jeu — prise en main du multimètre sur un système 36/48 V, mesure de pack et de chargeur, continuité de faisceau, connectique Higo/Julet, sertissage/soudure, lecture structurée des codes Bosch puis Shimano STEPS, dépose d'une roue moteur avec bras de couple. Niveau 4 : diagnostic profond et intervention lourde — codes des autres marques, capteur de couple, dépose/repose d'un moteur pédalier, test des phases et capteurs Hall d'un moyeu, diagnostic BMS et pack ouvert, mesure de SOH/autonomie, installation et programmation d'un kit Bafang, et compréhension technique et juridique du débridage (pour le détecter et le refuser). Niveau 5 : niveau atelier professionnel — conception d'un retrofit complet sur n'importe quel type de vélo (ville, vintage, cargo, pliant), reconstruction d'un pack cellule par cellule, conformité de l'atelier (stockage, transport, déchets, traçabilité) et méthode de traque des pannes intermittentes. Chaque niveau suppose acquis le contrôle au couple (fondamentaux) et, à partir du niveau 3, la discipline de mesure et le carnet d'atelier.

## Niveau 1 — Débutant

### 1. Reconnaître un VAE et identifier son architecture `vae-identifier-architecture`

- **Durée :** 30 min
- **Prérequis :**
  - [Anatomie du vélo : nomme chaque pièce](fondamentaux.md) `anatomie-velo`
  - savoir lire une étiquette de composant et relever un numéro de série *(fondamentaux)*
- **Outils :** lampe frontale, chiffon microfibre, smartphone pour photographier les étiquettes, carnet d'atelier ou fiche d'identité imprimée, miroir d'inspection

**Objectifs :**
- Distinguer un moteur pédalier (mid-drive) d'un moteur moyeu avant ou arrière en moins de 30 secondes
- Identifier la marque, la génération et la puissance nominale d'un système à partir de ses étiquettes
- Localiser les cinq organes électriques d'un VAE : moteur, batterie, écran/commande, capteur de vitesse, faisceau
- Expliquer ce que chaque architecture change pour l'usure, l'entretien et la réparation

**TP — Fiche d'identité électrique de 3 VAE différents**

Sur trois VAE de familles différentes (ville à moteur pédalier, VTTAE, VAE à moteur moyeu ou vélo pliant/gravel léger), tu remplis une fiche d'identité complète sans démonter quoi que ce soit : architecture, marque, génération, puissance nominale, capacité batterie, type d'écran, emplacement du capteur de vitesse.

Critères de validation :
1. 1. Architecture (pédalier / moyeu avant / moyeu arrière) identifiée correctement sur 3 vélos sur 3, validée par un tiers ou par la fiche constructeur.
2. 2. Marque et référence du moteur relevées sur l'étiquette pour 3 vélos sur 3, avec la puissance nominale en watts recopiée telle qu'imprimée.
3. 3. Capacité de la batterie relevée en Wh et tension nominale en V pour 3 vélos sur 3 ; si seuls V et Ah sont indiqués, le calcul Wh = V x Ah est posé par écrit.
4. 4. Les 5 organes électriques localisés et photographiés sur chaque vélo, soit 15 photos minimum, chacune légendée.
5. 5. Fiche complète remplie en moins de 12 minutes par vélo sur le troisième vélo.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Bosch eBike Systems : identification des générations de systèmes (Active Line, Performance Line CX, Smart System) et de leurs composants
- doc — Shimano : gamme STEPS E5000 / E6100 / E7000 / EP6 / EP801 et repérage des unités moteur
- doc — Cytech Theory One : module e-bike : typologie des motorisations et anatomie d'un pedelec
- article — E-MOUNTAINBIKE Magazine : comparatif des motorisations VAE et de leurs caractéristiques techniques
- doc — LEVA (Light Electric Vehicle Association) : glossaire et fondamentaux du light electric vehicle

### 2. Charger et stocker une batterie Li-ion sans la tuer `vae-batterie-charge-stockage`

- **Durée :** 30 min
- **Prérequis :**
  - [Reconnaître un VAE et identifier son architecture](#vae-identifier-architecture) `vae-identifier-architecture`
- **Outils :** chargeur d'origine du vélo, local tempéré (15-20 °C), carnet d'atelier, thermomètre d'ambiance
- **⚠️ Sécurité :**
  - Ne jamais charger une batterie sans surveillance possible : pas de charge la nuit ni en l'absence prolongée du domicile.
  - Charger sur une surface non combustible, loin des matières inflammables, jamais dans une issue de secours ou une cage d'escalier.
  - N'utiliser que le chargeur d'origine ou un chargeur explicitement homologué par le constructeur pour ce pack : une tension de fin de charge inadaptée peut provoquer un emballement thermique.
  - Ne jamais charger un pack sorti du froid tant qu'il n'est pas revenu à température ambiante (charge sous 0 °C = dépôt de lithium métallique et dégradation irréversible).

**Objectifs :**
- Expliquer le lien entre tension par cellule, état de charge et vieillissement d'un pack Li-ion
- Appliquer la règle de stockage à 40-60 % de charge et la contrôler sur l'écran ou les LED du pack
- Identifier les températures de charge, d'usage et de stockage admissibles
- Établir une routine de charge qui maximise la durée de vie d'un pack

**TP — Mise en stockage longue durée d'un pack et journal de charge**

Tu prépares une batterie pour un stockage de plusieurs semaines : amener l'état de charge dans la fenêtre 40-60 %, la placer dans un environnement conforme, et tenir sur 2 semaines un journal de charge documentant les cycles et l'évolution de l'indicateur.

Critères de validation :
1. 1. État de charge amené entre 40 % et 60 % et vérifié sur l'indicateur du pack ou de l'écran ; valeur relevée et notée avec la date.
2. 2. Lieu de stockage documenté avec température relevée au thermomètre, comprise entre 10 °C et 20 °C, hors gel et hors exposition solaire directe.
3. 3. Journal de charge tenu sur 14 jours minimum, avec au moins 5 entrées datées comportant état de charge avant, état après, durée de charge.
4. 4. Rédaction en moins de 150 mots de la raison pour laquelle un stockage à 100 % dégrade plus vite le pack qu'un stockage à 50 %.
5. 5. Contrôle final : dérive de l'indicateur de charge sur 14 jours de stockage inférieure à 2 barres ou à 10 % de l'indication initiale.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Bosch eBike Systems : recommandations officielles de charge, de stockage et de température pour les batteries PowerPack et PowerTube
- doc — Shimano : manuel utilisateur des batteries STEPS : charge, stockage, plages de température
- article — Battery University : vieillissement des cellules lithium-ion en fonction de l'état de charge et de la température
- doc — LEVA (Light Electric Vehicle Association) : bonnes pratiques de charge et de stockage des packs de mobilité légère
- article — Upway : entretien et durée de vie d'une batterie de vélo électrique

### 3. Batterie Li-ion : reconnaître le danger et réagir à un incident `vae-securite-li-ion-incident`

- **Durée :** 30 min
- **Prérequis :**
  - [Charger et stocker une batterie Li-ion sans la tuer](#vae-batterie-charge-stockage) `vae-batterie-charge-stockage`
- **Outils :** gants de manutention, bac métallique ou seau métallique à couvercle, sable sec ou vermiculite, extincteur adapté (eau pulvérisée avec additif) accessible, détecteur de fumée dans le local, appareil photo pour tracer l'état du pack
- **⚠️ Sécurité :**
  - Une cellule gonflée, percée, déformée ou ayant subi un choc violent est un pack condamné : il ne se répare pas, ne se recharge pas, ne se transporte pas normalement.
  - Un emballement thermique produit son propre oxygène : l'étouffement ne fonctionne pas, seul un refroidissement massif et prolongé limite la propagation. Ne jamais tenter d'éteindre un pack en feu à l'intérieur d'un local — évacuer et appeler les secours.
  - Les fumées d'un pack Li-ion en emballement contiennent du fluorure d'hydrogène et sont gravement toxiques : évacuation immédiate, jamais d'inhalation même brève.
  - Un pack tombé ou accidenté peut entrer en emballement plusieurs heures après le choc : isolation en extérieur sur support incombustible pendant au moins 24 h avant toute manipulation.
  - Ne jamais percer, poncer, chauffer, immerger, court-circuiter ni ouvrir un pack à ce niveau de formation.

**Objectifs :**
- Reconnaître les signes d'un pack compromis : gonflement, déformation, choc, odeur, échauffement, coulure
- Décrire le mécanisme d'emballement thermique et pourquoi il ne s'arrête pas tout seul
- Appliquer une procédure de mise en sécurité d'un pack suspect
- Refuser correctement une intervention sur un pack dangereux et orienter vers la bonne filière

**TP — Inspection de sécurité de 5 packs et rédaction d'une procédure d'urgence**

Tu inspectes visuellement et tactilement cinq batteries (idéalement d'âges et d'états variés), tu classes chacune en apte / à surveiller / à isoler, et tu rédiges puis affiches la procédure d'urgence de ton espace de travail.

Critères de validation :
1. 1. Grille d'inspection de 8 points minimum appliquée aux 5 packs (déformation du boîtier, jeu, traces de choc, corrosion des contacts, odeur, échauffement au repos, fuite, état du connecteur).
2. 2. Classement en 3 catégories justifié par écrit pour chacun des 5 packs, en 2 lignes minimum par pack.
3. 3. Procédure d'urgence écrite en 10 étapes numérotées maximum, tenant sur une page A4, et affichée à moins de 2 m du point de charge.
4. 4. Point de charge réaménagé : distance minimale de 1 m mesurée entre le pack en charge et toute matière combustible, surface support incombustible, détecteur de fumée à moins de 3 m.
5. 5. Restitution orale ou écrite en moins de 3 minutes de la conduite à tenir face à un pack gonflé apporté par un client, incluant le refus d'intervention et l'orientation vers la filière de collecte.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — INRS : risques liés aux batteries lithium-ion : emballement thermique, prévention et conduite à tenir
- doc — LEVA (Light Electric Vehicle Association) : sécurité incendie des batteries de vélos et engins électriques légers en atelier
- doc — Bosch eBike Systems : consignes constructeur en cas de batterie endommagée ou accidentée
- article — Battery University : mécanisme de l'emballement thermique et sécurité des accumulateurs lithium-ion
- doc — Corepile / filière de collecte des piles et accumulateurs : conditions de reprise et de collecte des batteries de vélo endommagées

### 4. Écran et commande : piloter l'assistance et lire ce que la machine dit `vae-ecran-modes-assistance`

- **Durée :** 25 min
- **Prérequis :**
  - [Reconnaître un VAE et identifier son architecture](#vae-identifier-architecture) `vae-identifier-architecture`
- **Outils :** VAE avec batterie chargée, notice constructeur de l'écran, carnet d'atelier, chronomètre
- **⚠️ Sécurité :**
  - L'aide à la poussée entraîne le vélo sans que tu pédales : la déclencher en tenant fermement le guidon, roue arrière au sol ou vélo à l'arrêt maîtrisé, jamais avec le vélo suspendu au pied d'atelier sans avoir sécurisé la roue.

**Objectifs :**
- Naviguer dans les menus d'un écran VAE (Bosch, Shimano, Bafang, Mahle) sans documentation
- Expliquer ce que fait réellement chaque niveau d'assistance et l'aide à la poussée
- Relever les informations de diagnostic accessibles depuis l'écran : autonomie, kilométrage moteur, version logicielle, code d'erreur
- Régler les paramètres utilisateur : circonférence de roue, unités, luminosité, remise à zéro des compteurs

**TP — Exploration complète de l'interface et relevé de diagnostic**

Sur au moins deux systèmes de marques différentes, tu explores l'intégralité des menus, tu relèves les informations de diagnostic disponibles et tu reconfigures les réglages utilisateur, puis tu compares les logiques d'interface.

Critères de validation :
1. 1. Arborescence complète des menus reconstituée par écrit pour 2 systèmes de marques différentes, avec au minimum 8 entrées de menu par système.
2. 2. Relevé documenté de 4 informations de diagnostic par système : kilométrage total, version logicielle ou firmware, capacité/autonomie estimée, présence ou absence de code d'erreur actif.
3. 3. Circonférence ou diamètre de roue vérifié dans les réglages et corrigé si l'écart avec la taille réelle du pneu dépasse 2 %.
4. 4. Aide à la poussée activée et chronométrée en sécurité : fonctionnement confirmé, vitesse observée nettement inférieure à celle de la marche rapide, arrêt immédiat au relâchement du bouton.
5. 5. Passage manuel sur les 4 ou 5 niveaux d'assistance à l'arrêt puis en roulant sur 200 m, avec description écrite en une phrase du ressenti par niveau.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Bosch eBike Systems : manuels des écrans Purion, Intuvia, Kiox et System Controller / LED Remote (Smart System)
- doc — Shimano : manuels des écrans et commandes STEPS (SC-E5000, SC-E7000, EN600) et menus de réglage
- doc — Bafang : manuels des écrans DP C18, DP C07 et 500C : menus utilisateur et paramètres accessibles
- doc — Mahle / ebikemotion : interface iWoc et lecture d'état sur les systèmes X35 et X20
- article — Upway : comprendre les niveaux d'assistance et leur impact sur l'autonomie

### 5. Ce qu'est légalement un VAE : EN 15194, 25 km/h et 250 W `vae-cadre-legal-en15194`

- **Durée :** 30 min
- **Prérequis :**
  - [Reconnaître un VAE et identifier son architecture](#vae-identifier-architecture) `vae-identifier-architecture`
- **Outils :** étiquettes et notices de plusieurs VAE, compteur GPS ou application smartphone, carnet d'atelier, piste plate et sécurisée d'au moins 200 m
- **⚠️ Sécurité :**
  - Toute vérification de vitesse de coupure se fait sur une voie fermée à la circulation ou une piste privée, casque porté, jamais en trafic.

**Objectifs :**
- Énoncer les quatre critères qui font d'un vélo un pedelec au sens de la norme EN 15194
- Distinguer pedelec, speed pedelec (L1e-B) et cyclomoteur électrique, et les obligations attachées à chacun
- Classer un vélo donné dans la bonne catégorie à partir de ses étiquettes et de son comportement
- Expliquer pourquoi l'assistance doit se couper à 25 km/h et ce que signifie « 250 W de puissance nominale continue »

**TP — Classement légal de 4 machines et test de coupure d'assistance**

Tu classes quatre engins (un VAE de ville, un VTTAE, si possible un speed pedelec ou une trottinette/vélo à accélérateur, et un vélo musculaire) dans la bonne catégorie juridique, puis tu mesures la vitesse réelle de coupure de l'assistance sur les VAE disponibles.

Critères de validation :
1. 1. Tableau de classement rempli pour 4 machines avec, pour chacune : catégorie légale, puissance nominale relevée, présence ou non d'un marquage de conformité, obligations associées (plaque, casque, assurance, âge minimum).
2. 2. Vitesse de coupure mesurée sur au moins 2 VAE : l'assistance cesse à une vitesse comprise entre 24 et 27 km/h relevée au GPS, sur 3 essais concordants à ±1 km/h.
3. 3. Décroissance progressive de l'assistance observée et décrite avant la coupure, sur au moins 1 des 2 vélos.
4. 4. Vérification que l'assistance ne fonctionne pas sans pédalage sur chaque VAE testé, hors aide à la poussée : 3 essais, résultat identique 3 fois.
5. 5. Rédaction en moins de 200 mots de la différence entre puissance nominale continue et puissance de crête, avec un exemple chiffré tiré d'une étiquette réelle.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Norme EN 15194 : exigences applicables aux cycles à assistance électrique (EPAC) : coupure à 25 km/h, 250 W nominaux, assistance au pédalage
- doc — Règlement UE 168/2013 : catégorie L1e-B et statut du speed pedelec 45 km/h
- doc — Sécurité routière / code de la route (France) : statut du VAE, obligations d'équipement et d'assurance
- article — Fédération française des usagers de la bicyclette (FUB) : réglementation du vélo à assistance électrique et du speed pedelec
- doc — Cytech Theory One : module e-bike : cadre normatif et catégories légales

### 6. Protéger l'électronique : lavage, pluie et humidité `vae-protection-eau-electronique`

- **Durée :** 35 min
- **Prérequis :**
  - [Déposer et reposer une roue : serrage rapide, axe traversant, écrous](roues-et-pneus.md) `depose-repose-roue`
  - [Laver ton vélo et lubrifier la chaîne](fondamentaux.md) `lavage-et-lubrification`
  - [Batterie Li-ion : reconnaître le danger et réagir à un incident](#vae-securite-li-ion-incident) `vae-securite-li-ion-incident`
- **Outils :** seau, éponge, brosses douces, dégraissant de chaîne (sans projection vers le moteur), chiffons microfibre, graisse diélectrique ou spray contacts, compresseur basse pression ou soufflette (usage prudent), pied d'atelier
- **⚠️ Sécurité :**
  - Jamais de nettoyeur haute pression sur un VAE : le jet force l'eau à travers les joints de moteur, de moyeu et de connecteur, et provoque des pannes différées non couvertes par la garantie.
  - Retirer la batterie avant tout lavage et ne la reposer que sur des contacts parfaitement secs : de l'eau entre les contacts d'un pack sous tension crée un chemin de courant et corrode les broches.
  - Ne jamais souffler de l'air comprimé directement dans un connecteur ouvert ou vers un joint de moteur.

**Objectifs :**
- Situer les points d'entrée d'eau d'un VAE : connecteurs, contacts batterie, capot moteur, passages de câbles, écran
- Laver un VAE sans provoquer de panne électrique différée
- Contrôler et entretenir les contacts de batterie et les connecteurs exposés
- Expliquer pourquoi les indices IP annoncés ne dispensent pas de précautions

**TP — Lavage complet d'un VAE et remise en état de la connectique**

Tu laves un VAE encrassé de la bonne manière, tu contrôles et traites l'ensemble des points d'entrée d'eau, et tu vérifies ensuite que le système fonctionne intégralement.

Critères de validation :
1. 1. Batterie déposée avant lavage et contacts protégés ; aucun jet dirigé vers moteur, écran ou connecteur, contrôlé par un observateur ou par autofilmage.
2. 2. Inventaire écrit d'au moins 6 points d'entrée d'eau identifiés sur le vélo travaillé, avec leur état (joint présent, capuchon manquant, oxydation).
3. 3. Contacts de batterie et de support nettoyés puis traités à la graisse diélectrique : aucune trace verte ou blanche visible à la loupe après traitement.
4. 4. Séchage vérifié : aucun résidu d'eau visible dans les logements de contact et sous le capot de commande après 15 minutes, contrôle à la lampe.
5. 5. Remise en service réussie : batterie reposée, système démarré du premier coup, aucun code d'erreur affiché, assistance fonctionnelle sur les 4 ou 5 niveaux.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Bosch eBike Systems : consignes de nettoyage et d'entretien d'un vélo équipé, interdiction du nettoyeur haute pression
- doc — Shimano : entretien des unités STEPS et précautions de lavage
- video — Park Tool : nettoyage d'un vélo électrique et précautions spécifiques
- doc — Higo : indices de protection IP des connecteurs de mobilité électrique et limites d'usage
- article — Upway : nettoyer un vélo électrique sans l'endommager

## Niveau 2 — Intermédiaire

### 1. Déposer et reposer une batterie : verrous, rails et packs intégrés `vae-depose-repose-batterie`

- **Durée :** 30 min
- **Prérequis :**
  - [Batterie Li-ion : reconnaître le danger et réagir à un incident](#vae-securite-li-ion-incident) `vae-securite-li-ion-incident`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
- **Outils :** clés Allen 3/4/5 mm, clé dynamométrique 2-14 N·m, clés du verrou de batterie, graisse silicone et lubrifiant sec pour barillet, graisse diélectrique, chiffons, loupe ou lampe d'inspection
- **⚠️ Sécurité :**
  - Toujours couper le système avant de déposer un pack : extraire une batterie sous tension use les contacts par arc électrique.
  - Ne jamais forcer un pack qui résiste : un pack de 3 à 4 kg qui tombe sur un sol dur devient un pack accidenté à isoler 24 h.
  - Ne jamais lubrifier un barillet de verrou avec un produit gras qui capte la poussière : lubrifiant sec uniquement.

**Objectifs :**
- Déposer et reposer sans forcer les principales familles de packs : porte-bagage, tube diagonal externe, semi-intégré, intégré (PowerTube, packs sous cache)
- Diagnostiquer un verrou de batterie dur, grippé ou mal réglé et le remettre en état
- Contrôler l'état mécanique et électrique de l'interface pack/support
- Régler le jeu et l'alignement d'un support pour supprimer les coupures d'assistance dues aux vibrations

**TP — Dépose/repose chronométrée sur 3 formats et remise en état d'un verrou**

Tu déposes et reposes des batteries de trois formats différents jusqu'à fluidité, puis tu démontes, nettoies, lubrifies et règles un support de batterie récalcitrant.

Critères de validation :
1. 1. Dépose et repose réussies sur 3 formats de packs différents, 3 fois chacun, sans à-coup ni point dur, et sans jamais reposer le pack en forçant.
2. 2. Temps de dépose + repose inférieur à 30 secondes par pack au troisième essai, sur les 3 formats.
3. 3. Verrou démonté, nettoyé et lubrifié : la clé tourne sur toute sa course sans point dur et le pack se libère du premier coup 5 fois sur 5.
4. 4. Jeu du pack dans son support mesuré ou évalué après réglage : aucun déplacement perceptible à la main sur les 3 axes, et aucune coupure d'assistance après 2 minutes de secousses volontaires du vélo au pied d'atelier.
5. 5. Toutes les vis de support reserrées au couple constructeur, valeurs notées au carnet, écart de contrôle croisé inférieur ou égal à 10 %.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Bosch eBike Systems : montage et dépose des batteries PowerPack et PowerTube, réglage du support et du verrou
- doc — Shimano : dépose et repose des batteries STEPS BT-E8010 / BT-E8035 et de leurs supports
- article — Upway : batterie de vélo électrique bloquée ou verrou grippé : diagnostic et remise en état
- doc — LEVA (Light Electric Vehicle Association) : contrôle des interfaces de connexion des packs en atelier

### 2. Capteur de vitesse : aimant, entrefer et remplacement `vae-capteur-vitesse-aimant-entrefer`

- **Durée :** 35 min
- **Prérequis :**
  - [Écran et commande : piloter l'assistance et lire ce que la machine dit](#vae-ecran-modes-assistance) `vae-ecran-modes-assistance`
  - [Déposer et reposer une roue : serrage rapide, axe traversant, écrous](roues-et-pneus.md) `depose-repose-roue`
- **Outils :** réglet ou pied à coulisse, clés Allen 2,5/3/4 mm, clé dynamométrique 2-14 N·m, colliers de serrage (rilsan) neufs, aimant de rechange adapté au système, lampe d'inspection
- **⚠️ Sécurité :**
  - Ne jamais déplacer l'aimant sur un rayon en le forçant : un aimant serré sur un rayon aluminium ou carbone peut l'amorcer ; desserrer complètement avant de coulisser.

**Objectifs :**
- Expliquer le rôle du capteur de vitesse dans la coupure d'assistance et dans le calcul d'autonomie
- Régler l'entrefer aimant/capteur dans la tolérance constructeur (typiquement 5-17 mm côté Bosch, 3-17 mm côté Shimano)
- Diagnostiquer les symptômes d'un capteur défaillant : assistance saccadée, coupure prématurée, vitesse à zéro, code d'erreur
- Remplacer un capteur de vitesse et son câble en respectant le cheminement d'origine

**TP — Réglage d'entrefer et remise en service d'un capteur déréglé**

Tu dérègles volontairement l'aimant d'un capteur de vitesse, tu observes et notes le symptôme produit, puis tu rétablis un entrefer conforme et tu valides sur route ou sur home-trainer.

Critères de validation :
1. 1. Entrefer mesuré au réglet avant intervention et noté ; valeur cible constructeur retrouvée dans la documentation et recopiée.
2. 2. Dérèglement volontaire au-delà de la tolérance suivi du relevé écrit du symptôme exact observé (vitesse affichée, comportement de l'assistance, code éventuel), en 3 lignes minimum.
3. 3. Entrefer rétabli et mesuré dans la tolérance constructeur, avec une marge d'au moins 2 mm par rapport à chaque borne de la plage.
4. 4. Alignement latéral aimant/capteur contrôlé : décalage inférieur ou égal à 2 mm, vérifié à l'œil et au réglet.
5. 5. Validation dynamique : vitesse affichée cohérente avec un GPS à ±1 km/h sur un parcours de 500 m, et assistance continue sans coupure sur 3 minutes de roulage.
6. 6. Câble du capteur fixé au cadre avec au moins 3 points d'attache, aucun frottement pneu/manivelle constaté après un tour de roue complet.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Bosch eBike Systems : positionnement de l'aimant de capteur de vitesse et plage d'entrefer admissible
- doc — Shimano : capteur de vitesse SM-DUE11 / disque à aimant : entrefer 3-17 mm et procédure de montage
- article — E-MOUNTAINBIKE Magazine : codes d'erreur liés au capteur de vitesse (Bosch 503, Shimano W011) et solutions
- article — Upway : diagnostic d'un capteur de vitesse de VAE défaillant
- doc — Bafang : réglage du nombre d'aimants et de la circonférence de roue pour la mesure de vitesse

### 3. Périphériques électriques : coupure au frein, éclairage et port USB `vae-peripheriques-electriques`

- **Durée :** 30 min
- **Prérequis :**
  - [Reconnaître un VAE et identifier son architecture](#vae-identifier-architecture) `vae-identifier-architecture`
  - [Remplacer câble et gaine de frein](freinage.md) `cable-gaine-frein-remplacement`
- **Outils :** clés Allen 3/4/5 mm, clé dynamométrique 2-14 N·m, colliers rilsan, graisse diélectrique, lampe d'inspection, notice de câblage du système
- **⚠️ Sécurité :**
  - Un capteur de coupure au frein défaillant en position « ouverte » laisse le moteur assister pendant le freinage : essai obligatoire avant toute remise en circulation.
  - Ne jamais brancher un éclairage non prévu directement sur le pack : la sortie éclairage du contrôleur est régulée et fusible, un branchement direct crée un risque de court-circuit sur une source à très forte intensité.

**Objectifs :**
- Identifier les capteurs de coupure d'assistance intégrés aux leviers de frein et vérifier leur fonctionnement
- Câbler et diagnostiquer un éclairage alimenté par la batterie de traction
- Contrôler la tension et le fusible d'un circuit d'éclairage 6 V ou 12 V dérivé du système
- Diagnostiquer une panne de périphérique sans mettre en cause le moteur

**TP — Contrôle des coupures de frein et remise en service de l'éclairage**

Tu valides le fonctionnement des capteurs de coupure au frein sur un VAE qui en est équipé, tu diagnostiques une panne d'éclairage alimenté par la batterie, et tu remets le circuit en état.

Critères de validation :
1. 1. Test de coupure réalisé sur les deux leviers, vélo au pied d'atelier roue arrière libre : l'assistance cesse en moins de 0,5 seconde à chaque actionnement, 5 essais par levier, 10 réussites sur 10.
2. 2. Course de levier au déclenchement mesurée et notée ; déclenchement obtenu avant le point de morsure des plaquettes sur les deux leviers.
3. 3. Panne d'éclairage diagnostiquée par élimination documentée en au moins 4 étapes (source, connecteur, câble, luminaire), avec conclusion écrite désignant l'organe fautif.
4. 4. Circuit remis en service : feu avant et feu arrière fonctionnels, allumage/extinction pilotés depuis l'écran ou la commande, testés 3 fois chacun.
5. 5. Faisceau refixé avec au moins 4 points d'attache, aucune boucle libre supérieure à 30 mm et aucun frottement sur pneu, fourche ou direction en butée gauche comme droite.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Bosch eBike Systems : raccordement de l'éclairage sur le système et caractéristiques de la sortie d'éclairage
- doc — Shimano : câblage STEPS : leviers avec contacteur d'assistance et alimentation de l'éclairage
- doc — Bafang : capteurs de coupure au frein (brake cut-off) : types hydraulique et mécanique, câblage
- doc — Higo : connecteurs d'éclairage et de capteur de frein pour systèmes de mobilité électrique
- doc — LEVA (Light Electric Vehicle Association) : circuits auxiliaires d'un light electric vehicle et protection par fusible

### 4. Applications constructeur : appairage, mise à jour firmware et journal `vae-apps-appairage-firmware`

- **Durée :** 35 min
- **Prérequis :**
  - [Reconnaître un VAE et identifier son architecture](#vae-identifier-architecture) `vae-identifier-architecture`
  - [Écran et commande : piloter l'assistance et lire ce que la machine dit](#vae-ecran-modes-assistance) `vae-ecran-modes-assistance`
- **Outils :** smartphone avec applications constructeur installées, câble de charge et prise secteur, batterie chargée à plus de 50 %, connexion internet stable, carnet d'atelier
- **⚠️ Sécurité :**
  - Ne jamais lancer une mise à jour avec une batterie sous 50 % ou un smartphone en fin de charge : une interruption en cours d'écriture peut rendre un composant inutilisable et non réparable hors atelier agréé.
  - Ne pas déplacer ni faire rouler le vélo pendant une mise à jour.

**Objectifs :**
- Appairer un VAE avec l'application officielle de son constructeur
- Effectuer une mise à jour de firmware sans briquer le système
- Extraire d'une application les données de diagnostic : historique d'erreurs, kilométrage moteur, état de la batterie, versions logicielles
- Documenter une intervention logicielle dans le carnet d'atelier

**TP — Appairage, extraction de diagnostic et mise à jour documentée**

Sur au moins deux systèmes de marques différentes, tu appaires le vélo à l'application officielle, tu extrais l'ensemble des données de diagnostic disponibles et tu réalises une mise à jour firmware si elle est proposée, en documentant tout.

Critères de validation :
1. 1. Appairage réussi sur 2 systèmes de marques différentes, avec compte constructeur créé et vélo enregistré.
2. 2. Fiche de diagnostic remplie par système avec au minimum 5 données : versions firmware de chaque composant, kilométrage moteur, nombre de cycles ou santé batterie si disponible, historique d'erreurs, date de dernière mise à jour.
3. 3. Mise à jour effectuée ou, si aucune n'est disponible, capture écran de la page confirmant que le système est à jour ; état avant et après consigné.
4. 4. Aucun code d'erreur actif après l'opération, vérifié sur l'écran et dans l'application.
5. 5. Compte-rendu d'intervention rédigé au carnet en moins de 10 lignes, contenant date, versions avant/après, durée de l'opération et anomalies rencontrées.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- outil — Bosch eBike Systems : application eBike Flow et eBike Connect : appairage, mises à jour et données de diagnostic
- outil — Shimano : E-TUBE PROJECT Cyclist et Professional : appairage, mise à jour firmware et lecture d'erreurs
- outil — Specialized : application Mission Control : diagnostic, mise à jour et paramétrage des systèmes Brose
- outil — Giant : application RideControl : appairage et mise à jour des systèmes SyncDrive
- outil — Fazua : Fazua Toolbox : mise à jour et paramétrage du système Ride 60

### 5. « Ça n'assiste plus » : arbre de décision sans instrument `vae-panne-assistance-arbre-decision`

- **Durée :** 40 min
- **Prérequis :**
  - [Déposer et reposer une batterie : verrous, rails et packs intégrés](#vae-depose-repose-batterie) `vae-depose-repose-batterie`
  - [Capteur de vitesse : aimant, entrefer et remplacement](#vae-capteur-vitesse-aimant-entrefer) `vae-capteur-vitesse-aimant-entrefer`
  - [Le carnet d'atelier et la pratique délibérée](fondamentaux.md) `carnet-atelier`
- **Outils :** chargeur d'origine, lampe d'inspection, chiffons, graisse diélectrique, fiche d'arbre de décision imprimée, chronomètre
- **⚠️ Sécurité :**
  - Ne jamais tester une assistance au pied d'atelier avec un vélo mal fixé : le couple d'un moteur pédalier peut faire basculer un vélo dont la roue arrière entraîne dans le vide.

**Objectifs :**
- Conduire un interrogatoire client structuré pour cadrer une panne d'assistance
- Dérouler un arbre de décision en 12 points allant de l'alimentation au capteur, sans multimètre
- Isoler en moins de 10 minutes la famille de la panne : alimentation, communication, capteur, mécanique, utilisateur
- Rédiger un diagnostic intermédiaire justifiant l'escalade vers un diagnostic instrumenté

**TP — Trois pannes introduites, trois diagnostics chronométrés**

Un binôme introduit trois pannes non destructives sur un VAE (connecteur débranché, aimant décalé, contact batterie encrassé, niveau d'assistance à zéro, verrou mal engagé…) et tu dois, pour chacune, dérouler ton arbre de décision et désigner la cause.

Critères de validation :
1. 1. Arbre de décision écrit avant l'exercice, comportant au minimum 12 points de contrôle ordonnés du plus probable/rapide au plus coûteux.
2. 2. Cause exacte identifiée pour 3 pannes sur 3, chacune en moins de 10 minutes, chronomètre à l'appui.
3. 3. Pour chaque panne, la liste des points d'arbre effectivement parcourus est consignée : aucun point sauté avant celui qui a révélé la cause.
4. 4. Aucun démontage réalisé au-delà de ce que le point d'arbre exigeait : zéro démontage inutile sur les 3 pannes.
5. 5. Pour la panne la plus difficile, rédaction d'un diagnostic intermédiaire de 10 lignes maximum indiquant ce qui a été éliminé, ce qui reste suspect et quelle mesure instrumentée serait nécessaire ensuite.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : méthodologie de diagnostic par élimination appliquée à l'atelier
- article — Upway : vélo électrique qui n'assiste plus : causes fréquentes et ordre de vérification
- doc — Bosch eBike Systems : guide de dépannage utilisateur et vérifications préalables au diagnostic atelier
- doc — Shimano : guide de dépannage STEPS et vérifications préliminaires
- doc — LEVA (Light Electric Vehicle Association) : démarche de diagnostic structurée sur un light electric vehicle

## Niveau 3 — Avancé

### 1. Multimètre : prise en main sur un système 36/48 V `vae-multimetre-prise-en-main`

- **Durée :** 40 min
- **Prérequis :**
  - [Batterie Li-ion : reconnaître le danger et réagir à un incident](#vae-securite-li-ion-incident) `vae-securite-li-ion-incident`
  - [Le carnet d'atelier et la pratique délibérée](fondamentaux.md) `carnet-atelier`
- **Outils :** multimètre numérique (catégorie CAT III minimum, cordons fusibles), pointes de test fines / micro-grip, pince crocodile, résistances et piles de calibration pour l'entraînement, carnet d'atelier, gants d'électricien fins (facultatif mais recommandé)
- **⚠️ Sécurité :**
  - Un pack VAE délivre plusieurs dizaines d'ampères en court-circuit : une pointe de test qui glisse entre deux broches provoque un arc, projette du métal fondu et peut initier un emballement. Retirer bagues, montre et bracelets avant toute mesure.
  - Ne jamais mesurer une intensité en série sur un circuit de traction avec un multimètre standard : la gamme A d'un multimètre grand public est fusible et largement insuffisante.
  - Toujours vérifier que le multimètre est bien en position tension avant de toucher deux points sous tension : une mesure en position résistance ou intensité sur un pack crée un court-circuit franc.
  - Mesurer un pack déposé, posé à plat sur un support isolant et incombustible, jamais en équilibre sur un établi encombré.

**Objectifs :**
- Configurer un multimètre pour mesurer une tension continue, une continuité et une résistance
- Mesurer sans risque sur un système 36 V, 43,2 V ou 48 V et comprendre pourquoi le danger vient du courant, pas de la tension
- Interpréter une mesure : valeur attendue, tolérance, mesure aberrante
- Construire et utiliser des pointes de test adaptées à la connectique fine d'un VAE

**TP — Série de 20 mesures calibrées et rédaction d'un protocole de mesure**

Tu t'entraînes sur des cibles connues (piles, résistances, câbles coupés, chargeur) jusqu'à obtenir des mesures fiables et répétables, puis tu rédiges le protocole de mesure que tu appliqueras sur VAE.

Critères de validation :
1. 1. 20 mesures réalisées et consignées : 8 tensions continues, 6 continuités, 6 résistances, chacune avec valeur attendue et valeur lue.
2. 2. Écart entre valeur lue et valeur attendue inférieur ou égal à 2 % sur les 8 mesures de tension.
3. 3. Continuité correctement conclue sur 6 cas sur 6, dont au moins 2 cas de circuit ouvert volontairement créés.
4. 4. Répétabilité démontrée : 3 mesures successives du même point de tension avec une dispersion inférieure ou égale à 0,05 V.
5. 5. Protocole écrit en 8 étapes numérotées maximum, comprenant la vérification du calibre, la vérification des cordons, la vérification du multimètre sur une source connue avant chaque session, et les règles de sécurité applicables.
6. 6. Test de chute : le protocole est appliqué de mémoire, sans le relire, sur une mesure surprise, et les 8 étapes sont effectivement exécutées.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — LEVA (Light Electric Vehicle Association) : usage du multimètre en diagnostic de vélo à assistance électrique
- doc — Fluke : principes de mesure au multimètre numérique et catégories de sécurité CAT
- article — Bike Gremlin : bases de l'électricité appliquée au vélo : tension, intensité, résistance
- article — Grin Technologies : méthodes de mesure sur les systèmes de propulsion électrique de vélo
- doc — Bafang : tableaux de valeurs de référence pour les contrôles électriques des kits

### 2. Mesurer un pack : tension, état de charge et premières conclusions `vae-mesure-batterie-tension-soc`

- **Durée :** 40 min
- **Prérequis :**
  - [Multimètre : prise en main sur un système 36/48 V](#vae-multimetre-prise-en-main) `vae-multimetre-prise-en-main`
  - [Batterie Li-ion : reconnaître le danger et réagir à un incident](#vae-securite-li-ion-incident) `vae-securite-li-ion-incident`
- **Outils :** multimètre numérique, pointes de test fines, support isolant et incombustible, chargeur d'origine, tableau de conversion tension/état de charge, carnet d'atelier
- **⚠️ Sécurité :**
  - Ne jamais court-circuiter les bornes de sortie d'un pack, même une fraction de seconde : l'arc peut souder les pointes et amorcer un emballement.
  - Un pack qui affiche 0 V en sortie n'est pas forcément vide : c'est souvent un BMS en protection. Ne pas conclure « pack mort » et ne surtout pas tenter de le réveiller par une source externe non maîtrisée.
  - Un pack dont la tension par cellule est descendue sous 2,5 V est en sous-décharge profonde : sa recharge peut provoquer un court-circuit interne. Ne pas le recharger, le mettre en filière.

**Objectifs :**
- Mesurer la tension d'un pack aux bornes de sortie et sur le connecteur de décharge
- Convertir tension mesurée et état de charge pour un pack 10S (36 V), 12S (43,2 V) et 13S (48 V)
- Détecter une coupure BMS et distinguer un pack déchargé d'un pack protégé ou mort
- Décider, sur la base de mesures, si un pack part en diagnostic approfondi, en recharge ou en filière de collecte

**TP — Campagne de mesure sur 3 packs et diagnostic argumenté**

Tu mesures trois packs d'âges et d'états différents, tu établis pour chacun tension mesurée, tension par cellule déduite, état de charge estimé, et tu rends un diagnostic écrit avec décision.

Critères de validation :
1. 1. Configuration série (10S / 12S / 13S) déterminée correctement pour 3 packs sur 3, à partir de la tension nominale imprimée sur l'étiquette.
2. 2. Tension de sortie mesurée sur 3 packs, chaque mesure répétée 3 fois avec une dispersion inférieure ou égale à 0,05 V.
3. 3. Tension moyenne par cellule calculée et notée pour chaque pack, avec 2 décimales, et positionnée sur le tableau de conversion (4,20 V = 100 %, ~3,70 V ≈ 50 %, 3,00 V = seuil bas).
4. 4. État de charge estimé par la mesure comparé à l'indication de l'écran ou des LED du pack : écart relevé et commenté, avec une explication écrite si l'écart dépasse 15 points.
5. 5. Diagnostic écrit rendu pour chaque pack en 5 lignes maximum, se terminant par une décision explicite : remise en service, diagnostic approfondi, ou mise en filière de collecte.
6. 6. Au moins un cas de coupure BMS reconnu ou, à défaut, description écrite des trois signes qui l'auraient distingué d'un pack vide.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Battery University : courbe tension/état de charge des cellules lithium-ion et interprétation en circuit ouvert
- doc — LEVA (Light Electric Vehicle Association) : contrôle de la tension d'un pack et rôle protecteur du BMS
- article — Grin Technologies : diagnostic de packs de vélos électriques : tensions de référence et coupure BMS
- doc — Bosch eBike Systems : caractéristiques électriques des batteries PowerPack et PowerTube
- doc — Bafang : spécifications des packs 36 V et 48 V et seuils de protection basse tension

### 3. Chargeur : contrôler la sortie et identifier un chargeur inadapté `vae-chargeur-controle-mesure`

- **Durée :** 30 min
- **Prérequis :**
  - [Multimètre : prise en main sur un système 36/48 V](#vae-multimetre-prise-en-main) `vae-multimetre-prise-en-main`
  - [Charger et stocker une batterie Li-ion sans la tuer](#vae-batterie-charge-stockage) `vae-batterie-charge-stockage`
- **Outils :** multimètre numérique, pointes de test fines adaptées au connecteur de charge, chargeurs de plusieurs marques/tensions, chronomètre, carnet d'atelier
- **⚠️ Sécurité :**
  - Un chargeur délivrant 54,6 V branché sur un pack 36 V (fin de charge 42 V) surcharge massivement les cellules et provoque un emballement : vérifier la tension de sortie AVANT tout branchement sur un pack inconnu.
  - Ne jamais mesurer la sortie d'un chargeur en insérant les pointes dans le connecteur au risque de les faire glisser : utiliser des pointes fines et une main seulement, l'autre main hors du circuit.
  - Écarter systématiquement les chargeurs sans marquage de conformité, sans indication de tension/courant de sortie, ou dont le cordon ou le boîtier est endommagé.

**Objectifs :**
- Mesurer la tension de sortie à vide d'un chargeur et la confronter à la tension de fin de charge attendue du pack
- Identifier un chargeur non conforme, contrefait ou destiné à une autre chimie/tension
- Diagnostiquer une charge qui ne démarre pas : chargeur, câble, connecteur, port, BMS
- Expliquer les phases de charge courant constant / tension constante et pourquoi la fin de charge est lente

**TP — Contrôle de 4 chargeurs et diagnostic d'une charge défaillante**

Tu mesures la sortie à vide de quatre chargeurs, tu vérifies la compatibilité de chacun avec les packs disponibles, puis tu diagnostiques une chaîne de charge volontairement mise en défaut.

Critères de validation :
1. 1. Tension de sortie à vide mesurée pour 4 chargeurs, chaque valeur notée à 0,1 V près, et confrontée à la valeur imprimée sur l'étiquette : écart relevé pour chacun.
2. 2. Verdict de compatibilité rendu pour chaque couple chargeur/pack disponible : au moins 1 incompatibilité correctement détectée et justifiée par le calcul de tension de fin de charge (nombre de cellules en série x 4,2 V).
3. 3. Polarité et brochage du connecteur de charge vérifiés au multimètre sur 2 chargeurs, avec schéma dessiné au carnet.
4. 4. Chaîne de charge défaillante diagnostiquée en moins de 12 minutes, avec l'organe fautif désigné parmi : prise secteur, chargeur, cordon, connecteur, port du pack, BMS.
5. 5. Montée en charge observée sur un pack pendant 15 minutes : tension du pack relevée à t0, t+5, t+10, t+15 minutes, courbe croissante confirmée, valeurs consignées.
6. 6. Rédaction en moins de 120 mots de la différence entre la phase à courant constant et la phase à tension constante, avec explication du ralentissement en fin de charge.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Battery University : algorithme de charge CC/CV des accumulateurs lithium-ion
- doc — LEVA (Light Electric Vehicle Association) : contrôle et sélection des chargeurs pour véhicules électriques légers
- doc — Bosch eBike Systems : caractéristiques des chargeurs et compatibilité avec les packs de la gamme
- doc — INRS : risques liés aux chargeurs non conformes de batteries lithium-ion
- doc — Bafang : spécifications de charge des packs 36 V et 48 V et connecteurs de charge

### 4. Tester la continuité d'un faisceau et localiser une coupure `vae-continuite-faisceau`

- **Durée :** 40 min
- **Prérequis :**
  - [Multimètre : prise en main sur un système 36/48 V](#vae-multimetre-prise-en-main) `vae-multimetre-prise-en-main`
  - [« Ça n'assiste plus » : arbre de décision sans instrument](#vae-panne-assistance-arbre-decision) `vae-panne-assistance-arbre-decision`
- **Outils :** multimètre numérique avec buzzer de continuité, cordons rallongés ou fil de rappel, pointes de test fines, loupe, lampe d'inspection, papier millimétré ou tablette pour le schéma
- **⚠️ Sécurité :**
  - Toujours déposer la batterie et attendre la décharge des capacités avant un test de continuité : mesurer une continuité sur un circuit sous tension fausse la mesure et peut détruire le multimètre.

**Objectifs :**
- Établir le brochage d'un câble VAE à partir de la documentation ou par déduction
- Tester la continuité fil à fil d'un faisceau moteur, écran ou capteur
- Localiser une coupure ou un court-circuit entre conducteurs par mesure et par test de mouvement
- Reconstituer un schéma de faisceau exploitable pour un vélo non documenté

**TP — Cartographie complète d'un faisceau et localisation d'une coupure introduite**

Tu relèves le brochage complet d'un faisceau (moteur ou capteur), tu en dessines le schéma, puis un binôme introduit une coupure ou un mauvais contact que tu dois localiser à moins de 10 cm près.

Critères de validation :
1. 1. Schéma de faisceau dessiné avec identification de chaque conducteur : couleur, broche de départ, broche d'arrivée, fonction supposée ; au minimum 5 conducteurs cartographiés.
2. 2. Continuité vérifiée sur 100 % des conducteurs cartographiés, valeurs de résistance notées (attendu inférieur à 1 ohm sur un conducteur sain de moins de 2 m).
3. 3. Absence de court-circuit entre conducteurs vérifiée pour toutes les paires : résistance mesurée supérieure à 1 mégohm sur 100 % des paires testées.
4. 4. Coupure introduite localisée à moins de 10 cm près, en moins de 15 minutes, position annoncée avant vérification.
5. 5. Test de mouvement réalisé : le faisceau est fléchi et vrillé sur toute sa longueur pendant la mesure de continuité, et tout contact intermittent détecté est signalé avec sa position.
6. 6. Schéma final photographié ou scanné et archivé au carnet, réutilisable par un tiers sans explication orale.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — LEVA (Light Electric Vehicle Association) : test de continuité et cartographie des faisceaux sur véhicules électriques légers
- article — Grin Technologies : brochages standards des câbles moteur, capteur Hall et accélérateur
- doc — Bafang : schémas de câblage et brochages des kits BBS et moteurs moyeu
- doc — Higo : brochages et codes couleur des connecteurs de mobilité électrique
- doc — Shimano : câblage E-TUBE / EW-SD50 et EW-SD300 : cheminement et contrôle des liaisons

### 5. Connectique Higo et Julet : identifier, ouvrir, entretenir, remplacer `vae-connecteurs-higo-julet`

- **Durée :** 40 min
- **Prérequis :**
  - [Tester la continuité d'un faisceau et localiser une coupure](#vae-continuite-faisceau) `vae-continuite-faisceau`
  - [Protéger l'électronique : lavage, pluie et humidité](#vae-protection-eau-electronique) `vae-protection-eau-electronique`
- **Outils :** multimètre numérique, clés plates fines ou clé dédiée Higo, extracteur de broche / outil de dépose de contact, graisse diélectrique, nettoyant contacts électroniques, gaine thermorétractable, loupe binoculaire ou loupe éclairante, pied à coulisse
- **⚠️ Sécurité :**
  - Ne jamais forcer un connecteur en le tirant par le câble : l'arrachement d'un conducteur dans la surmoulure crée une panne intermittente très difficile à retrouver ensuite.
  - Ne jamais brancher deux connecteurs de brochages différents même s'ils s'accouplent mécaniquement : une inversion d'alimentation détruit un contrôleur ou un écran instantanément.

**Objectifs :**
- Identifier les familles de connecteurs VAE : Higo Z910, mini-B, séries 2 à 6 broches, Julet et équivalents
- Débrancher et rebrancher un connecteur étanche sans casser le détrompeur ni déformer les broches
- Diagnostiquer et traiter une oxydation ou un contact intermittent
- Remplacer un connecteur défectueux par un modèle compatible en respectant le brochage et l'étanchéité

**TP — Inventaire de connectique et remplacement d'un connecteur oxydé**

Tu inventories et identifies la connectique de plusieurs VAE, tu ouvres, nettoies et regraisses des connecteurs, puis tu remplaces un connecteur dégradé en validant continuité et étanchéité.

Critères de validation :
1. 1. Inventaire de 8 connecteurs minimum sur au moins 2 vélos : famille, nombre de broches, diamètre mesuré au pied à coulisse, fonction, état.
2. 2. Débranchement et rebranchement effectués sur 8 connecteurs sur 8 sans casse de détrompeur, sans broche tordue et sans traction sur le câble, contrôlé à la loupe après opération.
3. 3. Connecteurs nettoyés et regraissés : aucune trace d'oxydation visible à la loupe et résistance de contact mesurée inférieure à 1 ohm sur chaque paire de broches.
4. 4. Un connecteur remplacé de bout en bout : brochage identique à l'origine vérifié conducteur par conducteur au multimètre, 100 % de correspondance avant remise sous tension.
5. 5. Étanchéité du connecteur remplacé assurée par gaine thermorétractable à colle ou joint d'origine ; test de fonctionnement après 5 minutes d'aspersion douce d'eau : aucun défaut, aucun code d'erreur.
6. 6. Effort d'accouplement contrôlé : le connecteur remplacé se verrouille avec un clic franc et ne se désaccouple pas sous une traction manuelle modérée maintenue 10 secondes.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Higo : catalogue des séries Z910, mini-B et connecteurs multi-broches, brochages et indices IP
- doc — Julet : gamme de connecteurs étanches pour vélos électriques et correspondances
- article — Grin Technologies : choix et remplacement des connecteurs sur systèmes de propulsion électrique
- doc — LEVA (Light Electric Vehicle Association) : maintenance de la connectique et prévention des contacts intermittents
- doc — Bafang : connectique d'origine des kits et références de remplacement

### 6. Sertir, souder et réparer un conducteur de VAE `vae-sertissage-reparation-fil`

- **Durée :** 45 min
- **Prérequis :**
  - [Multimètre : prise en main sur un système 36/48 V](#vae-multimetre-prise-en-main) `vae-multimetre-prise-en-main`
  - [Connectique Higo et Julet : identifier, ouvrir, entretenir, remplacer](#vae-connecteurs-higo-julet) `vae-connecteurs-higo-julet`
- **Outils :** pince à dénuder de précision, pince à sertir à matrice (pas de pince universelle), fer à souder à panne fine, 300-350 °C, étain avec flux, ou fil à souder sans plomb, gaine thermorétractable à colle, diamètres variés, décapeur thermique, troisième main / étau de précision, multimètre, dynamomètre à traction ou balance à ressort
- **⚠️ Sécurité :**
  - Fer à souder : brûlures et projections d'étain. Support obligatoire, lunettes de protection, jamais de soudure au-dessus d'une batterie ou d'un pack.
  - Les fumées de flux sont irritantes pour les voies respiratoires : travailler avec extraction ou ventilation, jamais penché au-dessus de la panne.
  - Ne jamais souder ni sertir sur un circuit sous tension, et jamais sur un pack : batterie déposée et éloignée du poste de soudure.

**Objectifs :**
- Choisir la section de conducteur adaptée entre circuit de signal et circuit de puissance
- Réaliser un sertissage conforme et le contrôler mécaniquement et électriquement
- Souder un conducteur fin sans fondre l'isolant ni créer de soudure sèche
- Restaurer l'isolation et l'étanchéité d'une réparation avec gaine thermorétractable à colle

**TP — Série de 10 jonctions et test d'arrachement**

Tu réalises dix jonctions sur chutes de câble — cinq sertissages et cinq soudures — sur des sections de signal et de puissance, puis tu les soumets à un test de traction et à un contrôle électrique.

Critères de validation :
1. 1. 10 jonctions réalisées : 5 par sertissage, 5 par soudure, dont au moins 3 sur des conducteurs de section signal inférieure ou égale à 0,5 mm².
2. 2. Résistance mesurée de chaque jonction inférieure ou égale à 0,1 ohm au-delà de la résistance du conducteur seul, sur 10 jonctions sur 10.
3. 3. Test de traction : aucune jonction ne se sépare sous une traction manuelle ferme maintenue 10 secondes ; si un dynamomètre est disponible, aucune rupture sous 30 N pour les sections signal.
4. 4. Aucune soudure sèche : à la loupe, chaque soudure présente un aspect brillant et mouillant, sans bille ni fissure ; les jonctions mates sont refaites et recomptées.
5. 5. Isolant restauré sur 10 jonctions sur 10 par gaine thermorétractable à colle, recouvrement d'au moins 10 mm de part et d'autre de la zone dénudée, colle visiblement extrudée aux extrémités.
6. 6. Aucun brin de cuivre visible sur les 10 jonctions terminées, contrôlé à la loupe.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — NASA Workmanship Standards : critères d'acceptation d'un sertissage et d'une soudure de conducteur
- doc — LEVA (Light Electric Vehicle Association) : module pratique sertissage et soudure sur véhicules électriques légers
- article — Grin Technologies : choix de section de câble et réalisation de jonctions sur circuits de puissance
- doc — Higo : préparation des conducteurs et montage des contacts sur connecteurs étanches
- doc — Weller : réglage de température et technique de soudure sur conducteurs fins

### 7. Lire et exploiter les codes d'erreur Bosch `vae-codes-erreur-bosch`

- **Durée :** 40 min
- **Prérequis :**
  - [Écran et commande : piloter l'assistance et lire ce que la machine dit](#vae-ecran-modes-assistance) `vae-ecran-modes-assistance`
  - [Capteur de vitesse : aimant, entrefer et remplacement](#vae-capteur-vitesse-aimant-entrefer) `vae-capteur-vitesse-aimant-entrefer`
  - [Tester la continuité d'un faisceau et localiser une coupure](#vae-continuite-faisceau) `vae-continuite-faisceau`
- **Outils :** VAE équipé Bosch avec écran fonctionnel, smartphone avec application constructeur, multimètre, réglet, tableau des codes imprimé, carnet d'atelier
- **⚠️ Sécurité :**
  - Un code 504 (signal de vitesse manipulé) est le marqueur d'un débridage : ne jamais tenter de le masquer ou de le contourner, et documenter la constatation avant toute intervention.

**Objectifs :**
- Lire un code d'erreur Bosch sur écran Purion, Intuvia, Kiox ou via l'application
- Interpréter les familles de codes : moteur, éclairage, capteur de vitesse, authentification batterie, communication
- Traiter en autonomie les codes courants 500, 502, 503, 504 et 530 selon la procédure appropriée
- Décider quand un code impose l'escalade vers un atelier agréé disposant de l'outil de diagnostic constructeur

**TP — Provocation contrôlée et traitement de 3 codes Bosch**

Tu provoques de façon non destructive au moins deux codes d'erreur (aimant écarté, éclairage débranché, connecteur de commande déconnecté), tu les lis, tu appliques la procédure de résolution puis tu vérifies l'effacement.

Critères de validation :
1. 1. Tableau des codes reconstitué avec au minimum 8 codes, chacun accompagné de sa famille, de sa cause la plus probable et de la première action à mener.
2. 2. Au moins 2 codes provoqués de façon réversible, lus à l'écran et notés avec leur libellé exact.
3. 3. Procédure de résolution appliquée et code effacé après remise en état, vérifié par un cycle d'extinction/rallumage complet : 0 code actif.
4. 4. Pour le code lié au capteur de vitesse, entrefer remesuré et consigné dans la plage constructeur avec au moins 2 mm de marge par rapport aux bornes.
5. 5. Fiche de décision rédigée pour 3 codes : action atelier possible, ou escalade vers atelier agréé, avec justification en 2 lignes chacune.
6. 6. Historique d'erreurs relevé dans l'application avant et après intervention, différence commentée par écrit.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Bosch eBike Systems : liste officielle des codes d'erreur et procédures de résolution des systèmes eBike
- article — Upway : guide de dépannage des codes d'erreur Bosch pour vélos électriques
- article — E-MOUNTAINBIKE Magazine : codes d'erreur de VAE et leurs solutions : Bosch 503, 504 et suivants
- outil — Bosch eBike Systems : application eBike Flow : lecture de l'historique d'erreurs et diagnostic
- doc — LEVA (Light Electric Vehicle Association) : méthode d'exploitation des codes constructeur en diagnostic atelier

### 8. Codes Shimano STEPS et diagnostic par E-TUBE PROJECT `vae-codes-erreur-shimano-steps`

- **Durée :** 40 min
- **Prérequis :**
  - [Applications constructeur : appairage, mise à jour firmware et journal](#vae-apps-appairage-firmware) `vae-apps-appairage-firmware`
  - [Tester la continuité d'un faisceau et localiser une coupure](#vae-continuite-faisceau) `vae-continuite-faisceau`
  - [Capteur de vitesse : aimant, entrefer et remplacement](#vae-capteur-vitesse-aimant-entrefer) `vae-capteur-vitesse-aimant-entrefer`
- **Outils :** VAE équipé Shimano STEPS, ordinateur ou smartphone avec E-TUBE PROJECT, interface de connexion SM-PCE02 ou liaison Bluetooth, outil de dépose des câbles E-TUBE (TL-EW02 ou équivalent), multimètre, réglet, carnet d'atelier
- **⚠️ Sécurité :**
  - Ne jamais interrompre une restauration de firmware d'unité moteur : batterie chargée à plus de 50 % et alimentation de l'ordinateur sécurisée avant de lancer l'opération.

**Objectifs :**
- Distinguer les codes E (erreurs bloquantes) et W (avertissements) sur un système STEPS
- Traiter les codes de référence E010, E020, W011 et W013 selon la procédure Shimano
- Utiliser E-TUBE PROJECT pour lire l'état des composants, restaurer un firmware et consulter le journal
- Vérifier une liaison E-TUBE et les câbles EW-SD50 / EW-SD300 quand la communication est en défaut

**TP — Diagnostic STEPS complet et traitement d'un W013**

Tu connectes un système STEPS à E-TUBE PROJECT, tu relèves l'état de tous les composants, tu provoques et traites un avertissement de capteur (W013 par réinitialisation pied sur pédale, ou W011 par décalage d'aimant) et tu documents l'intervention.

Critères de validation :
1. 1. Connexion établie à E-TUBE PROJECT et liste complète des composants détectés relevée : au minimum unité moteur, batterie, écran/commande, capteur de vitesse, avec numéro de version pour chacun.
2. 2. Distinction E/W restituée par écrit avec 4 codes de référence expliqués : E010, E020, W011, W013, cause principale et action associée.
3. 3. Au moins 1 avertissement provoqué de façon réversible, lu, puis effacé par la procédure officielle ; effacement confirmé par un cycle d'alimentation complet.
4. 4. Pour W013 : redémarrage effectué sans appui sur les pédales, procédure décrite en 5 étapes numérotées, résultat vérifié 2 fois sur 2.
5. 5. Pour W011 : entrefer aimant/capteur mesuré et rétabli dans la plage 3-17 mm avec au moins 2 mm de marge, valeur consignée.
6. 6. Journal de diagnostic exporté ou recopié au carnet, comportant date, codes relevés, actions menées, état final sans code actif.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Shimano : liste des codes d'erreur et d'avertissement STEPS et procédures de résolution
- outil — Shimano : E-TUBE PROJECT Professional : diagnostic, restauration de firmware et journal
- doc — Shimano : documentation technique des câbles EW-SD50 / EW-SD300 et de l'outil de dépose
- article — E-MOUNTAINBIKE Magazine : codes d'erreur Shimano STEPS et solutions pratiques
- article — Upway : dépannage des systèmes Shimano STEPS en atelier

### 9. Roue à moteur moyeu : dépose, repose et bras de couple `vae-roue-moteur-torque-arm`

- **Durée :** 40 min
- **Prérequis :**
  - [Déposer et reposer une roue : serrage rapide, axe traversant, écrous](roues-et-pneus.md) `depose-repose-roue`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
  - [Connectique Higo et Julet : identifier, ouvrir, entretenir, remplacer](#vae-connecteurs-higo-julet) `vae-connecteurs-higo-julet`
- **Outils :** clés plates 17/18 mm ou clé à douille selon axe, clé dynamométrique 10-60 N·m, bras de couple adapté, rondelles cannelées / rondelles anti-rotation d'origine, frein-filet moyenne résistance, pied à coulisse, lampe d'inspection, colliers rilsan
- **⚠️ Sécurité :**
  - Une roue à moteur moyeu qui se déchausse sous couple à l'avant provoque une chute grave : sur une fourche aluminium ou carbone, un bras de couple est impératif et un moteur avant est à proscrire sur fourche carbone.
  - Un câble d'alimentation pincé lors de la repose peut créer un court-circuit entre phases : contrôler visuellement son cheminement avant tout serrage final.
  - Ne jamais déposer une roue moteur sans avoir coupé le système et déposé la batterie.

**Objectifs :**
- Déposer et reposer une roue à moteur moyeu sans contraindre le câble d'alimentation
- Expliquer le couple de réaction sur les pattes et pourquoi un bras de couple est nécessaire
- Poser et régler un bras de couple sur des pattes acier, aluminium ou en dropout traversant
- Contrôler l'état des pattes après usage et détecter un début de matage

**TP — Dépose/repose complète avec pose et contrôle d'un bras de couple**

Tu déposes une roue à moteur moyeu, tu inspectes les pattes, tu poses ou reposes un bras de couple correctement orienté, puis tu valides le montage par un test de couple et un contrôle après roulage.

Critères de validation :
1. 1. Dépose réalisée avec batterie déposée et système coupé, connecteur moteur débranché sans traction sur le câble, contrôlé à la loupe après opération.
2. 2. État des pattes documenté : mesure de la largeur d'encoche au pied à coulisse et comparaison gauche/droite, écart relevé ; toute trace de matage photographiée et notée.
3. 3. Bras de couple posé du bon côté par rapport au sens de rotation du moteur, orientation justifiée par écrit en 2 lignes.
4. 4. Écrous d'axe serrés au couple constructeur à la clé dynamométrique, valeurs consignées, contrôle croisé avec un écart inférieur ou égal à 10 %.
5. 5. Cheminement du câble moteur validé : aucune tension du câble en butée de direction gauche comme droite (moteur avant), aucun contact avec le pneu ou le disque, au moins 3 points de fixation.
6. 6. Contrôle après roulage : 2 km parcourus dont 5 démarrages en pleine assistance, puis re-contrôle du couple des écrous d'axe — desserrage constaté nul ou inférieur à 5 % du couple appliqué.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Grin Technologies : dimensionnement et pose des bras de couple (torque arms) sur moteurs moyeu
- doc — Bafang : montage des kits moteur moyeu : rondelles anti-rotation, couples de serrage et cheminement du câble
- doc — LEVA (Light Electric Vehicle Association) : contraintes mécaniques appliquées aux pattes par un moteur moyeu
- video — Park Tool : dépose et repose de roue avec axe à écrous et contrôle des pattes
- doc — Mahle / ebikemotion : intégration des moyeux moteur X35 et X20 et prescriptions de montage

### 10. Cartographier un faisceau : topologie, brochage et schéma d'un système non documenté `vae-cartographie-faisceau-brochage`

- **Durée :** 45 min
- **Prérequis :**
  - [Tester la continuité d'un faisceau et localiser une coupure](#vae-continuite-faisceau) `vae-continuite-faisceau`
  - [Multimètre : prise en main sur un système 36/48 V](#vae-multimetre-prise-en-main) `vae-multimetre-prise-en-main`
  - [Connectique Higo et Julet : identifier, ouvrir, entretenir, remplacer](#vae-connecteurs-higo-julet) `vae-connecteurs-higo-julet`
  - [Reconnaître un VAE et identifier son architecture](#vae-identifier-architecture) `vae-identifier-architecture`
  - [Le carnet d'atelier et la pratique délibérée](fondamentaux.md) `carnet-atelier`
- **Outils :** multimètre TRMS avec fusible HRC, pointes de touche fines et sondes de rétro-sondage (back-probe), pinces crocodile et fils de test, extracteur de contacts / outil de dépose de broches, loupe éclairante ou lampe frontale, étiquettes autocollantes et marqueur indélébile, appareil photo (smartphone) pour la traçabilité, pied à coulisse pour mesurer le pas et le diamètre des connecteurs, carnet, papier millimétré ou tableur pour le schéma, gaine thermo et adhésif toilé pour remise en état
- **⚠️ Sécurité :**
  - Un pack VAE 36/48 V n'électrocute pas mais délivre plusieurs centaines d'ampères en court-circuit : une pointe de touche qui ponte deux broches peut vaporiser du métal et enflammer un faisceau. Débranche la batterie pour toute mesure de continuité.
  - Ne sonde jamais un connecteur en enfonçant une pointe de touche dans une cavité femelle : tu écartes le contact et tu crées une panne intermittente définitive. Utilise le rétro-sondage côté fil ou un cordon de dérivation.
  - Ne perce jamais l'isolant d'un fil pour mesurer : le point de perçage devient un amorçage de corrosion. Pratique proscrite en VAE, contrairement à l'automobile ancienne.
  - Batterie déposée et posée à distance pendant les phases de démontage : un pack qui bascule sur un faisceau nu, c'est un arc et un début d'incendie.

**Objectifs :**
- Relever la topologie complète d'un faisceau VAE : nœuds, branches, connecteurs, points de masse.
- Décoder le brochage d'un connecteur inconnu à partir du détrompeur, de la numérotation et des couleurs de fils.
- Construire un schéma de câblage exploitable pour un système sans documentation constructeur.
- Prédire une tension attendue à un point précis du faisceau, puis la vérifier au multimètre.
- Sonder un connecteur sans déformer ni polluer ses contacts.

**TP — Carte de faisceau complète d'un VAE non documenté, validée par prédiction de tensions**

Tu prends un VAE sans documentation (no-name, kit, ou système ancien). Tu relèves physiquement chaque connecteur, tu établis le brochage de chacun, tu redessines le faisceau au propre, puis tu prouves que ta carte est juste : tu écris cinq tensions attendues AVANT de les mesurer, et tu les mesures.

Critères de validation :
1. 1. Inventaire exhaustif : le nombre de connecteurs listés sur la carte est strictement égal au nombre de connecteurs recomptés sur le vélo — écart 0.
2. 2. Chaque connecteur est documenté sur une ligne de tableau à 6 colonnes minimum (repère physique, type/famille, nombre de broches, sens du détrompeur, couleur de chaque fil, fonction retenue) : 0 case vide, 0 mention « inconnu » sans hypothèse écrite.
3. 3. Chaque liaison de la carte est prouvée par une mesure de continuité < 1 Ω entre ses deux extrémités : aucune liaison déduite « à la couleur » ou « au bon sens ».
4. 4. Cinq tensions sont écrites et signées AVANT toute mesure (au minimum : sortie pack, alimentation contrôleur, ligne d'alimentation capteur, ligne de signal capteur au repos, ligne d'éclairage). 5/5 vérifiées dans la tolérance : ±2 % sur la tension pack, ±0,3 V sur toute ligne ≤ 12 V.
5. 5. Le schéma redessiné au propre est lisible par un tiers : une autre personne de l'atelier retrouve le point de mesure d'une fonction que tu lui nommes en moins de 60 secondes, sans que tu parles.
6. 6. Les points de masse sont identifiés et hiérarchisés : au moins un point de masse commun localisé, résistance mesurée < 0,5 Ω entre ce point et le négatif du pack.
7. 7. Intégrité de la connectique après sondage : 100 % des connecteurs se reconnectent avec le clic ou le vissage d'origine, et le vélo passe un essai de 200 m avec assistance nominale, sans code d'erreur ni coupure.
8. 8. La carte est archivée dans le carnet d'atelier avec date, marque/modèle, numéro de série ou signes distinctifs, et photos référencées (≥ 6, chacune liée à une ligne du tableau).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Grin Technologies : brochages des connecteurs de VAE (Higo, Julet, JST) et conventions de couleurs de fils
- doc — Bosch eBike Systems : architecture système et repérage de la connectique sur un VAE de série
- livre — Micah Toll : lire et reconstituer le câblage d'un kit électrique sans notice
- article — Fluke : rétro-sondage et mesure de tension sur faisceau sans endommager les contacts
- doc — L'Heureux Cyclage : fiches techniques d'atelier vélo : méthode de relevé et de documentation
- video — Electrify Bike Co : diagnostic de faisceau et identification de fils sur moteurs moyeu et contrôleurs génériques

## Niveau 4 — Expert

### 1. Codes d'erreur des autres systèmes : Yamaha, Brose, Fazua, Mahle, Bafang, Giant `vae-codes-erreur-autres-marques`

- **Durée :** 40 min
- **Prérequis :**
  - [Lire et exploiter les codes d'erreur Bosch](#vae-codes-erreur-bosch) `vae-codes-erreur-bosch`
  - [Codes Shimano STEPS et diagnostic par E-TUBE PROJECT](#vae-codes-erreur-shimano-steps) `vae-codes-erreur-shimano-steps`
  - [Reconnaître un VAE et identifier son architecture](#vae-identifier-architecture) `vae-identifier-architecture`
- **Outils :** VAE de marques variées ou documentation de plusieurs systèmes, smartphone avec applications constructeur (Mission Control, RideControl, Fazua Toolbox, Bafang Go), multimètre, carnet d'atelier ou classeur de fiches, lampe d'inspection

**Objectifs :**
- Retrouver la documentation de codes d'un système peu documenté à partir des marquages du moteur
- Décrypter la logique commune aux codes constructeur : famille, gravité, organe concerné
- Diagnostiquer un système léger (Mahle X35/X20, Fazua Ride 60, TQ) dont l'interface est réduite à des LED
- Construire une fiche de correspondance réutilisable pour l'atelier

**TP — Construction d'un classeur de codes multi-marques et diagnostic d'un système à LED**

Tu constitues une fiche de codes par marque pour au moins quatre systèmes non Bosch/Shimano, puis tu diagnostiques un système à interface LED en décodant sa signalisation lumineuse.

Critères de validation :
1. 1. 4 fiches marques minimum créées (parmi Yamaha, Brose/Specialized, Fazua, Mahle, Bafang, Giant, TQ), chacune comportant au moins 5 codes ou signalisations avec cause et action.
2. 2. Pour chaque marque, la méthode d'accès au diagnostic est documentée : écran, application, LED, ou interface atelier, avec la manipulation exacte en 3 étapes maximum.
3. 3. Système à interface LED décodé : au moins 2 signalisations distinctes reproduites et interprétées correctement, validées par la documentation constructeur.
4. 4. Tableau de correspondance transversal produit, regroupant les codes des 4 marques par famille d'organe : batterie, moteur, capteur de vitesse, capteur de couple, communication ; au moins 4 familles remplies pour chaque marque.
5. 5. Test à l'aveugle : sur un système imposé par un tiers, la fiche correspondante est retrouvée et la première action de diagnostic annoncée en moins de 3 minutes.
6. 6. Classeur archivé sous forme exploitable (papier ou numérique), consultable par un tiers sans explication.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Yamaha : codes de diagnostic des systèmes PW-X3 et PWseries
- doc — Specialized : diagnostic des systèmes Brose via Mission Control et codes associés
- doc — Fazua : signalisation et codes du système Ride 60, diagnostic par Toolbox
- doc — Mahle / ebikemotion : codes lumineux iWoc des systèmes X35 et X20
- doc — Bafang : table des codes d'erreur affichés par les écrans DP C18 et 500C
- article — E-MOUNTAINBIKE Magazine : panorama des codes d'erreur VAE toutes marques et de leurs solutions

### 2. Diagnostiquer un capteur de couple et distinguer couple, cadence et vitesse `vae-diagnostic-capteur-couple`

- **Durée :** 45 min
- **Prérequis :**
  - [Lire et exploiter les codes d'erreur Bosch](#vae-codes-erreur-bosch) `vae-codes-erreur-bosch`
  - [Multimètre : prise en main sur un système 36/48 V](#vae-multimetre-prise-en-main) `vae-multimetre-prise-en-main`
  - [Capteur de vitesse : aimant, entrefer et remplacement](#vae-capteur-vitesse-aimant-entrefer) `vae-capteur-vitesse-aimant-entrefer`
- **Outils :** multimètre numérique, applications de diagnostic constructeur, pied d'atelier stable, home-trainer ou rouleau, balance ou masse étalon pour appliquer un couple connu à la manivelle, chronomètre, carnet d'atelier
- **⚠️ Sécurité :**
  - Tester une assistance au pied d'atelier avec la roue arrière libre : sécuriser le vélo, s'écarter de la trajectoire de la chaîne et ne jamais approcher les doigts du plateau en rotation.
  - Un capteur de couple qui envoie un offset non nul peut provoquer une assistance sans pédalage : ne jamais remettre en circulation un vélo présentant ce symptôme.

**Objectifs :**
- Expliquer la différence de comportement entre une assistance pilotée par capteur de couple et une assistance pilotée par capteur de cadence
- Localiser le capteur de couple selon l'architecture : axe de pédalier, base arrière, patte arrière, moyeu instrumenté
- Reconnaître la signature d'un capteur de couple défaillant : assistance en tout ou rien, à-coups, offset au repos, assistance résiduelle
- Réaliser les tests d'initialisation et de valeur au repos permettant de conclure sans démontage lourd

**TP — Caractérisation comparée de deux systèmes et diagnostic d'un capteur suspect**

Tu compares en mesures le comportement d'un VAE à capteur de couple et d'un VAE à capteur de cadence, tu documentes leurs signatures, puis tu appliques la procédure de diagnostic à un capteur de couple suspect ou volontairement perturbé.

Critères de validation :
1. 1. Protocole comparatif appliqué sur 2 vélos d'architectures de capteurs différentes : temps de montée en assistance mesuré au chronomètre depuis l'arrêt, sur 3 essais par vélo, valeurs moyennes consignées.
2. 2. Signature de chaque système décrite par écrit sur 5 critères : latence au démarrage, modulation avec l'effort, comportement en danseuse, comportement à cadence élevée sans effort, comportement à l'arrêt du pédalage.
3. 3. Valeur de couple au repos lue dans l'outil de diagnostic ou déduite du comportement : offset nul ou dans la tolérance constructeur, résultat consigné.
4. 4. Procédure d'initialisation du capteur appliquée conformément à la documentation (redémarrage sans appui sur les pédales, calibration en atelier), et effet mesuré avant/après.
5. 5. Test de linéarité grossière : trois niveaux d'effort croissants appliqués à la manivelle, l'assistance produite croît de façon monotone sur 3 essais sur 3, ou anomalie documentée.
6. 6. Conclusion écrite en 8 lignes maximum désignant l'organe suspect (capteur, faisceau, contrôleur, mécanique de transmission) et la mesure suivante à réaliser.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Bosch eBike Systems : principe de mesure du couple, de la cadence et de la vitesse dans les Drive Units
- doc — Shimano : capteur de couple STEPS, procédure d'initialisation et avertissement W013
- doc — Bafang : capteurs de couple et capteurs de cadence à disque PAS : principes et contrôle
- doc — LEVA (Light Electric Vehicle Association) : typologie des capteurs d'assistance et méthodes de test
- article — E-MOUNTAINBIKE Magazine : comparatif du ressenti et du fonctionnement des capteurs de couple selon les motorisations

### 3. Déposer et reposer un moteur pédalier `vae-depose-repose-moteur-mid-drive`

- **Durée :** 45 min
- **Prérequis :**
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
  - [Déposer et reposer un pédalier](transmission.md) `pedalier-depose-repose`
  - [Déposer et reposer une batterie : verrous, rails et packs intégrés](#vae-depose-repose-batterie) `vae-depose-repose-batterie`
- **Outils :** clés Allen et Torx complètes, clé dynamométrique 2-14 N·m et 10-60 N·m, extracteur de manivelle ou outil dédié à l'interface, clé à ergots pour bagues de blocage, graisse et pâte de montage adaptée au cadre, frein-filet moyenne résistance, dégraissant, réglet et jauge de planéité ou règle, pied d'atelier
- **⚠️ Sécurité :**
  - Un moteur pédalier pèse 2,5 à 4 kg : le soutenir avant de retirer la dernière vis, sinon il tombe sur le pédalier ou sur le pied de l'opérateur.
  - Batterie déposée et système coupé avant toute intervention : une connexion accidentelle sur un moteur non fixé peut le faire tourner.
  - Toujours reposer sur boulonnerie d'origine ou conforme : les vis d'interface moteur reprennent l'intégralité du couple moteur, une vis de qualité inférieure peut céder en roulage.

**Objectifs :**
- Déposer un moteur pédalier (interface Bosch, Shimano, Yamaha, Brose) en respectant l'ordre de démontage et les repères
- Contrôler l'interface cadre/moteur : planéité, jeu, corrosion, état des inserts filetés
- Reposer le moteur avec la boulonnerie, les couples et les protections d'origine
- Diagnostiquer et supprimer un craquement provenant de l'interface moteur

**TP — Dépose complète, contrôle d'interface et repose au couple**

Tu déposes intégralement un moteur pédalier, tu documents et contrôles l'interface cadre, puis tu le reposes selon la procédure constructeur et tu valides l'absence de bruit et de jeu.

Critères de validation :
1. 1. Ordre de démontage documenté avant intervention en au moins 10 étapes numérotées, et respecté sans improvisation.
2. 2. Photographies de repérage prises avant chaque débranchement : au minimum 6 photos, permettant à un tiers de rebrancher sans documentation.
3. 3. Interface cadre contrôlée : planéité vérifiée à la règle, absence de jeu constatée, état des inserts filetés vérifié vis par vis (aucun filet arraché), résultat consigné pour chaque point de fixation.
4. 4. Repose effectuée avec la totalité des vis d'origine, serrées au couple constructeur dans l'ordre prescrit, valeurs notées ; contrôle croisé avec un écart inférieur ou égal à 10 %.
5. 5. Étanchéité restaurée : joints et caches reposés, aucun passage de câble laissé sans protection ni point d'usure.
6. 6. Validation dynamique : 3 km de roulage dont 10 relances en pleine assistance et 5 relances en danseuse, aucun craquement, aucun jeu perceptible à la manivelle après roulage.
7. 7. Aucun code d'erreur actif après remise en service, vérifié à l'écran et dans l'application.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Bosch eBike Systems : instructions de montage des Drive Units et couples de serrage d'interface
- doc — Shimano : manuels de dépose et de repose des unités STEPS EP8 / EP801 et E7000
- doc — Yamaha : montage des unités PW series sur cadre et prescriptions de serrage
- article — E-MOUNTAINBIKE Magazine : remplacement d'un moteur de VAE en atelier : étapes et pièges
- video — Park Tool : dépose de pédalier et contrôle d'interface de boîtier

### 4. Diagnostiquer un moteur moyeu : phases, capteurs Hall et contrôleur `vae-diagnostic-moteur-moyeu`

- **Durée :** 45 min
- **Prérequis :**
  - [Multimètre : prise en main sur un système 36/48 V](#vae-multimetre-prise-en-main) `vae-multimetre-prise-en-main`
  - [Cartographier un faisceau : topologie, brochage et schéma d'un système non documenté](#vae-cartographie-faisceau-brochage) `vae-cartographie-faisceau-brochage`
  - [Roue à moteur moyeu : dépose, repose et bras de couple](#vae-roue-moteur-torque-arm) `vae-roue-moteur-torque-arm`
- **Outils :** multimètre numérique avec gamme résistance basse et gamme tension continue, pointes de test fines, alimentation 5 V stabilisée ou source depuis le contrôleur, pied d'atelier, carnet d'atelier, schéma de brochage du moteur
- **⚠️ Sécurité :**
  - Les phases d'un moteur moyeu en rotation génèrent une tension : ne jamais toucher les broches nues pendant qu'on fait tourner la roue à la main.
  - Court-circuiter deux phases d'un moteur en rotation provoque un freinage brutal : effectuer ce test uniquement avec la roue démontée du vélo et solidement maintenue.
  - Batterie déposée pour toute mesure de résistance et d'isolement.

**Objectifs :**
- Identifier les conducteurs d'un moteur moyeu : trois phases de puissance et cinq fils de capteurs Hall
- Mesurer la résistance entre phases et l'isolement phase/carcasse pour détecter un bobinage défaillant
- Tester les capteurs Hall en rotation lente et interpréter la séquence obtenue
- Isoler la panne entre moteur, faisceau et contrôleur par mesures croisées

**TP — Bilan électrique complet d'un moteur moyeu**

Tu réalises le bilan électrique complet d'un moteur moyeu : équilibre des phases, isolement, test des capteurs Hall en rotation, puis tu conclus sur l'état du moteur en isolant contrôleur et faisceau.

Critères de validation :
1. 1. Brochage identifié et noté : 3 phases et 5 conducteurs de capteurs (alimentation, masse, 3 signaux), avec code couleur relevé et schéma dessiné.
2. 2. Résistance mesurée entre les 3 paires de phases : les 3 valeurs sont cohérentes entre elles avec une dispersion inférieure ou égale à 10 %, valeurs notées à 0,1 ohm près ; toute dispersion supérieure est signalée comme bobinage suspect.
3. 3. Isolement phase/carcasse mesuré sur les 3 phases : résistance supérieure à 1 mégohm sur 3 mesures sur 3, sinon défaut d'isolement déclaré.
4. 4. Test de rotation libre : la roue tourne à la main sans point dur, et sa décélération libre est chronométrée puis comparée phases ouvertes / phases court-circuitées, différence nette constatée et notée.
5. 5. Capteurs Hall testés sous 5 V en rotation lente : les 3 signaux basculent chacun entre état haut et état bas, avec 6 combinaisons distinctes observées sur un tour de moteur, séquence consignée.
6. 6. Conclusion écrite en 10 lignes maximum désignant l'organe fautif (moteur, faisceau, contrôleur) et la mesure de confirmation restante, avec la décision de remplacement ou de réparation.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Grin Technologies : diagnostic des moteurs moyeu : test des phases, des capteurs Hall et de l'isolement
- doc — Bafang : brochages des moteurs moyeu et valeurs de contrôle des capteurs Hall
- doc — LEVA (Light Electric Vehicle Association) : diagnostic des moteurs brushless de véhicules électriques légers
- doc — Mahle / ebikemotion : architecture des moyeux moteur X35 / X20 et diagnostic constructeur
- doc — Fluke : mesure d'isolement et de résistance faible sur bobinages

### 5. BMS et pack ouvert : diagnostic d'un déséquilibre cellulaire `vae-bms-pack-diagnostic`

- **Durée :** 45 min
- **Prérequis :**
  - [Charger et stocker une batterie Li-ion sans la tuer](#vae-batterie-charge-stockage) `vae-batterie-charge-stockage`
  - [Sertir, souder et réparer un conducteur de VAE](#vae-sertissage-reparation-fil) `vae-sertissage-reparation-fil`
  - [Batterie Li-ion : reconnaître le danger et réagir à un incident](#vae-securite-li-ion-incident) `vae-securite-li-ion-incident`
  - [Perte d'autonomie : mesurer la santé réelle d'un pack](#vae-autonomie-soh-diagnostic) `vae-autonomie-soh-diagnostic`
- **Outils :** multimètre numérique, pointes de test très fines, support isolant incombustible, tournevis de précision et outil de dépose de collage, gants isolants, sable sec ou bac de confinement à proximité, extincteur adapté accessible, thermomètre infrarouge, carnet d'atelier
- **⚠️ Sécurité :**
  - Ouvrir un pack Li-ion est l'opération la plus dangereuse de tout le cursus : un tournevis qui glisse entre deux bandes de nickel provoque un court-circuit franc, un arc et un emballement en quelques secondes. Aucune ouverture sans espace dégagé, sans support incombustible et sans moyen d'extinction à portée immédiate.
  - Isoler la panne du tournevis (gaine thermorétractable) et ne jamais utiliser d'outil métallique nu à l'intérieur d'un pack.
  - N'ouvrir un pack que déchargé au niveau de stockage, jamais un pack pleinement chargé.
  - N'ouvrir jamais un pack gonflé, percé, chaud, corrodé ou ayant subi un choc : il part directement en filière.
  - Travailler seul est proscrit : une seconde personne informée doit être présente ou joignable immédiatement.

**Objectifs :**
- Décrire les fonctions d'un BMS : protection en surcharge, en sous-décharge, en surintensité, en température, et équilibrage
- Mesurer les tensions par groupe cellulaire au connecteur d'équilibrage et calculer la dispersion
- Interpréter une coupure BMS et distinguer défaut de cellule, défaut de BMS et défaut de connectique interne
- Décider en connaissance de cause entre réparation, reconstruction et mise en filière

**TP — Relevé d'équilibrage sur un pack de formation et décision argumentée**

Sur un pack de formation ou un pack en fin de vie destiné à la filière, tu mesures la tension de chaque groupe cellulaire au connecteur d'équilibrage, tu calcules la dispersion et tu rends une décision technique argumentée.

Critères de validation :
1. 1. Poste de travail préparé et validé avant ouverture : surface incombustible, dégagement minimum de 1 m, moyen d'extinction à moins de 2 m, seconde personne présente ou joignable — checklist signée.
2. 2. Nombre de groupes série identifié (10S, 12S, 13S…) et confirmé par le nombre de conducteurs du connecteur d'équilibrage : cohérence vérifiée avant toute mesure.
3. 3. Tension mesurée pour 100 % des groupes cellulaires, chaque valeur notée à 0,01 V près, avec la somme des groupes comparée à la tension totale mesurée en sortie : écart inférieur ou égal à 0,1 V.
4. 4. Dispersion calculée : écart entre le groupe le plus haut et le plus bas, exprimé en volts et en pourcentage, avec verdict appliqué — moins de 0,05 V pack sain, 0,05 à 0,30 V déséquilibre à surveiller, plus de 0,30 V groupe défaillant.
5. 5. Température de chaque zone du pack relevée au thermomètre infrarouge avant, pendant et 10 minutes après l'intervention : aucune élévation supérieure à 5 °C constatée.
6. 6. Décision écrite rendue en 10 lignes maximum, argumentée par les mesures, entre : rééquilibrage/remise en service, reconstruction, remplacement complet, mise en filière — avec le coût et le risque de chaque option.
7. 7. Pack refermé et sécurisé, ou étiqueté et placé en confinement, à la fin de la séance : aucun pack ouvert laissé sans surveillance.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Battery University : rôle et fonctionnement d'un Battery Management System, équilibrage des groupes série
- doc — LEVA (Light Electric Vehicle Association) : diagnostic de pack et procédures de sécurité pour l'ouverture d'une batterie
- doc — INRS : prévention du risque d'emballement thermique lors des interventions sur batteries lithium-ion
- article — Grin Technologies : architecture des packs de vélos électriques et diagnostic des BMS
- doc — Bafang : spécifications des BMS et seuils de protection des packs de kits

### 6. Perte d'autonomie : mesurer la santé réelle d'un pack `vae-autonomie-soh-diagnostic`

- **Durée :** 45 min
- **Prérequis :**
  - [Mesurer un pack : tension, état de charge et premières conclusions](#vae-mesure-batterie-tension-soc) `vae-mesure-batterie-tension-soc`
  - [Applications constructeur : appairage, mise à jour firmware et journal](#vae-apps-appairage-firmware) `vae-apps-appairage-firmware`
  - [Science du pneu : carcasse, gomme, largeur réelle et choix par usage](roues-et-pneus.md) `science-du-pneu`
- **Outils :** multimètre numérique, wattmètre / testeur de capacité DC adapté à la tension du pack (si disponible), applications de diagnostic constructeur, home-trainer ou parcours de référence, balance pour peser vélo et charge, chronomètre et compteur GPS, carnet d'atelier
- **⚠️ Sécurité :**
  - Un test de décharge produit de la chaleur : surveiller le pack en continu, le poser sur support incombustible, arrêter immédiatement si la température de surface dépasse 45 °C.
  - Ne jamais décharger un pack sous le seuil de coupure BMS avec une charge externe non régulée : la sous-décharge profonde détruit les cellules et crée un risque à la recharge.

**Objectifs :**
- Distinguer une perte d'autonomie due au pack d'une perte due à l'usage, au terrain, au poids ou aux pneus
- Relever le nombre de cycles et la capacité restante annoncée par l'outil de diagnostic constructeur
- Réaliser un test de décharge encadré et en déduire une capacité mesurée en Wh
- Rendre au client un verdict chiffré et honnête sur l'état de santé du pack

**TP — Bilan de santé d'un pack et parcours de référence**

Tu établis le bilan de santé d'un pack en croisant trois sources : les données du diagnostic constructeur, une mesure de capacité par décharge encadrée, et un parcours de référence reproductible avec relevé de consommation.

Critères de validation :
1. 1. Capacité nominale du pack relevée en Wh depuis l'étiquette, et données constructeur extraites : nombre de cycles et capacité restante annoncée si disponibles, valeurs notées avec la date.
2. 2. Parcours de référence défini et documenté : distance, dénivelé, niveau d'assistance imposé, pression des pneus contrôlée à ±0,2 bar, masse totale pesée à ±1 kg près.
3. 3. Parcours effectué 2 fois avec relevé de la consommation en Wh ou en pourcentage d'état de charge : écart entre les deux passages inférieur ou égal à 10 %, sinon un troisième passage est effectué.
4. 4. Consommation ramenée en Wh/km calculée et comparée aux ordres de grandeur usuels (environ 8-15 Wh/km en ville, 15-25 Wh/km en VTTAE, 20-35 Wh/km en cargo chargé), écart commenté.
5. 5. Capacité réelle estimée en Wh et état de santé exprimé en pourcentage de la capacité nominale, avec la méthode de calcul écrite.
6. 6. Température du pack relevée au début, à mi-parcours et en fin de test : aucune valeur supérieure à 45 °C, sinon test interrompu et incident consigné.
7. 7. Verdict client rédigé en moins de 150 mots, contenant le chiffre de santé, les facteurs d'usage identifiés, et une recommandation explicite (conserver, changer, adapter l'usage).

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Battery University : mesure de l'état de santé (SOH) d'un pack lithium-ion et méthodes de test de capacité
- doc — Bosch eBike Systems : lecture du nombre de cycles et de l'état de la batterie via l'outil de diagnostic
- outil — Shimano : informations d'état de batterie disponibles dans E-TUBE PROJECT
- article — Upway : comment évaluer l'autonomie réelle et la santé d'une batterie de vélo électrique
- doc — LEVA (Light Electric Vehicle Association) : protocoles de test de capacité en atelier

### 7. Installer un kit Bafang BBS01 / BBS02 / BBSHD `vae-bafang-installation`

- **Durée :** 45 min
- **Prérequis :**
  - [Boîtiers filetés : identifier et remplacer (BSA, italien, T47)](transmission.md) `boitier-pedalier-filete`
  - [Mesurer et corriger la ligne de chaîne](transmission.md) `ligne-de-chaine`
  - [Sertir, souder et réparer un conducteur de VAE](#vae-sertissage-reparation-fil) `vae-sertissage-reparation-fil`
  - [La clé dynamométrique : choisir, utiliser, préserver](fondamentaux.md) `cle-dynamometrique`
- **Outils :** outil de démontage de boîtier fileté adapté, clé à ergots Bafang fournie, clé dynamométrique 2-14 N·m et 10-60 N·m, pied à coulisse, réglet, jauge de ligne de chaîne ou règle, frein-filet moyenne résistance, colliers rilsan et gaine spiralée, dérive-chaîne, pied d'atelier
- **⚠️ Sécurité :**
  - Un kit BBS02 750 W ou un BBSHD dépasse largement les 250 W nominaux de la norme EN 15194 : le vélo obtenu n'est pas un pedelec homologué et ne peut légalement circuler sur la voie publique en UE. L'installation doit être annoncée comme telle et destinée à un usage privé ou à une machine relevant d'une autre catégorie.
  - Sans capteurs de coupure au frein, le moteur continue d'assister pendant le freinage : leur montage n'est pas optionnel.
  - Le couple d'un BBSHD peut détruire un dérailleur en changeant de vitesse sous charge : un capteur de coupure de vitesse (gear sensor) est fortement recommandé.
  - Ne jamais monter un moteur pédalier sur un cadre carbone sans validation explicite du fabricant du cadre : la plaque anti-rotation concentre les efforts sur le boîtier.

**Objectifs :**
- Vérifier la compatibilité d'un cadre : largeur et type de boîtier, dégagement de base, matériau, place pour la batterie
- Déposer le pédalier d'origine et installer le moteur avec sa plaque anti-rotation et ses bagues de blocage
- Raccorder le faisceau complet : écran, accélérateur éventuel, capteurs de coupure au frein, capteur de vitesse
- Contrôler la ligne de chaîne et régler la transmission après motorisation

**TP — Installation complète d'un kit sur cadre cobaye et mise en service**

Tu contrôles la compatibilité d'un cadre, tu installes intégralement un kit moteur pédalier avec sa connectique, tu règles la transmission et tu valides le fonctionnement au banc puis en roulage.

Critères de validation :
1. 1. Fiche de compatibilité remplie avant démontage : largeur de boîtier mesurée au pied à coulisse (68, 73, 100 mm…), type de filetage identifié, dégagement de base mesuré, matériau du cadre relevé — 5 points renseignés.
2. 2. Moteur monté avec la totalité de la visserie prévue, bagues de blocage serrées à la clé à ergots, plaque anti-rotation en appui plan sur le cadre sans jeu perceptible à la main.
3. 3. Dégagement entre le carter moteur et la base arrière mesuré : au minimum 5 mm en tout point, valeur notée, sinon entretoises ajoutées et remesurées.
4. 4. Ligne de chaîne mesurée après montage et écart avec la ligne d'origine inférieur ou égal à 3 mm, sinon corrigé par entretoise ou plateau adapté.
5. 5. Faisceau complet raccordé et testé point par point : écran, capteurs de coupure au frein (les deux), capteur de vitesse, accélérateur si présent — 100 % des organes fonctionnels au premier essai après vérification du brochage.
6. 6. Test de coupure au frein validé : l'assistance cesse en moins de 0,5 seconde sur chaque levier, 5 essais par levier.
7. 7. Boulonnerie intégralement serrée au couple avec valeurs notées ; contrôle croisé, écart inférieur ou égal à 10 %.
8. 8. Roulage de validation de 5 km avec 10 relances : aucun desserrage constaté au recontrôle, aucun frottement, aucun contact de faisceau, aucune erreur affichée.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Bafang : manuel d'installation des kits BBS01, BBS02 et BBSHD, compatibilités de boîtier et couples de serrage
- article — Luna Cycle : guide d'installation et pièges courants des kits BBS02 et BBSHD
- video — Chaîne francophone spécialisée VAE (YouTube) : kit pédalier Bafang BBS02B : installation pas à pas
- article — Grin Technologies : intégration d'un kit de motorisation sur un vélo existant : contraintes mécaniques et électriques
- doc — Norme EN 15194 : limites de puissance nominale et de vitesse applicables à un vélo motorisé après conversion

### 8. Programmer un contrôleur Bafang au câble USB-TTL `vae-bafang-programmation`

- **Durée :** 45 min
- **Prérequis :**
  - [Installer un kit Bafang BBS01 / BBS02 / BBSHD](#vae-bafang-installation) `vae-bafang-installation`
  - [Mesurer un pack : tension, état de charge et premières conclusions](#vae-mesure-batterie-tension-soc) `vae-mesure-batterie-tension-soc`
  - connaître le cadre légal EN 15194 et les catégories de véhicules *(vae)*
- **Outils :** câble de programmation USB-TTL Bafang, ordinateur avec pilote série et logiciel de configuration Bafang, batterie chargée à plus de 50 %, pied d'atelier, chronomètre et compteur GPS, carnet d'atelier
- **⚠️ Sécurité :**
  - Une protection basse tension (LVC) réglée trop bas conduit à la sous-décharge profonde du pack et à sa destruction : la valeur doit toujours respecter le seuil du BMS et la chimie des cellules.
  - Un courant limite supérieur à ce que supportent le pack, le BMS et le câblage provoque une surchauffe, un déclenchement permanent ou un incendie : ne jamais dépasser la valeur admissible du maillon le plus faible de la chaîne.
  - Modifier les paramètres pour dépasser 25 km/h d'assistance ou 250 W nominaux sur un vélo destiné à la voie publique en UE constitue un débridage : hors du cadre du cursus.
  - Ne jamais tester une configuration modifiée en roulant avant un essai au pied d'atelier roue libre.

**Objectifs :**
- Établir la liaison entre un contrôleur Bafang et un ordinateur via un câble USB-TTL et le logiciel de configuration
- Sauvegarder la configuration d'origine avant toute modification et savoir la restaurer
- Comprendre et régler les paramètres essentiels : protection basse tension, courant limite, tables d'assistance, diamètre de roue, nombre d'aimants, paramètres de démarrage et d'arrêt
- Configurer un kit dans le respect des limites légales et documenter les valeurs appliquées

**TP — Sauvegarde, modification encadrée et validation d'une configuration**

Tu établis la liaison, tu sauvegardes la configuration d'origine, tu appliques une configuration conforme aux limites légales et adaptée à un usage donné, puis tu la valides par mesure avant de restaurer l'original.

Critères de validation :
1. 1. Liaison établie et configuration d'origine intégralement sauvegardée dans un fichier daté et archivé, avant toute écriture — sauvegarde vérifiée en la rouvrant.
2. 2. Tableau des paramètres rempli avec, pour au moins 10 paramètres : nom, valeur d'origine, valeur cible, justification en une ligne.
3. 3. Protection basse tension réglée à une valeur cohérente avec la configuration du pack, avec le calcul posé (nombre de cellules en série x tension de coupure par cellule) et la valeur du BMS respectée.
4. 4. Diamètre de roue et nombre d'aimants renseignés conformément au vélo : vitesse affichée cohérente avec un GPS à ±1 km/h sur 500 m.
5. 5. Vitesse de coupure vérifiée sur route fermée : assistance coupée à 25 km/h ±1 km/h, 3 essais concordants.
6. 6. Comportement de démarrage réglé et validé : temps entre le premier coup de pédale et le début de l'assistance mesuré au chronomètre, valeur cible atteinte à ±0,3 seconde sur 3 essais.
7. 7. Temps de coupure à l'arrêt du pédalage mesuré : inférieur ou égal à 1 seconde sur 3 essais sur 3.
8. 8. Configuration d'origine restaurée en fin de séance et vérifiée par relecture : 100 % des paramètres identiques à la sauvegarde.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- outil — Bafang : logiciel de configuration des contrôleurs BBS et description des paramètres Basic, Pedal Assist et Throttle
- article — Luna Cycle : guide de programmation des kits BBS01 / BBS02 / BBSHD et valeurs recommandées
- video — Chaîne spécialisée VAE (YouTube) : programmation d'un contrôleur Bafang : paramètres expliqués un par un
- article — Endless Sphere : retours d'expérience communautaires sur les réglages de contrôleurs Bafang et leurs limites
- doc — Norme EN 15194 : exigences de coupure d'assistance et de puissance applicables à un cycle à assistance électrique

### 9. Débridage : mécanismes, détection et conséquences `vae-debridage-detection`

- **Durée :** 35 min
- **Prérequis :**
  - connaître le cadre légal EN 15194 et les catégories de véhicules électriques *(vae)*
  - [Lire et exploiter les codes d'erreur Bosch](#vae-codes-erreur-bosch) `vae-codes-erreur-bosch`
  - [Capteur de vitesse : aimant, entrefer et remplacement](#vae-capteur-vitesse-aimant-entrefer) `vae-capteur-vitesse-aimant-entrefer`
- **Outils :** VAE variés, dont au moins un présentant des traces d'intervention, applications de diagnostic constructeur, lampe d'inspection et miroir, réglet, appareil photo, modèle de fiche de refus d'intervention
- **⚠️ Sécurité :**
  - Un vélo débridé dépasse la vitesse pour laquelle ses freins, ses pneus et son cadre ont été homologués : ne jamais l'essayer sur route ouverte, ne jamais le rendre en l'état sans l'avoir signalé au client par écrit.
  - En cas d'accident, un vélo débridé est requalifié en cyclomoteur non homologué : l'assurance peut refuser sa garantie et la responsabilité de l'intervenant peut être engagée.

**Objectifs :**
- Décrire les mécanismes techniques de débridage : boîtier sur capteur, aimant déporté, modification logicielle, remplacement de composant
- Détecter un débridage sur un vélo entrant à l'atelier par lecture d'indices matériels et logiciels
- Énoncer les conséquences juridiques, assurantielles et de garantie d'un vélo débridé
- Formuler et justifier un refus d'intervention conforme à la déontologie professionnelle

**TP — Audit de conformité de 3 VAE et rédaction d'une fiche de refus**

Tu réalises un audit de conformité sur trois VAE en cherchant systématiquement les indices de débridage, matériels et logiciels, puis tu rédiges la fiche de refus d'intervention type de ton atelier.

Critères de validation :
1. 1. Grille d'audit construite avec au minimum 10 points de contrôle : position et nombre d'aimants, présence d'un module intercalé sur le faisceau, câblage non d'origine, écran non d'origine, historique d'erreurs, version firmware, vitesse maximale relevée, kilométrage incohérent, traces de démontage, joint ou vis marquée.
2. 2. Grille appliquée intégralement à 3 vélos, avec résultat consigné pour chacun des 10 points sur chacun des vélos, soit 30 lignes renseignées.
3. 3. Vérification logicielle réalisée sur les vélos dont le système le permet : historique d'erreurs relevé, présence ou absence de codes liés à la manipulation du signal de vitesse notée.
4. 4. Vitesse de coupure mesurée au GPS sur voie fermée pour chaque vélo essayable : conclusion conforme / non conforme argumentée, 3 essais par vélo.
5. 5. Verdict rendu par écrit pour 3 vélos sur 3 avec le niveau de certitude (conforme, suspect, débridage établi) et les indices qui le fondent.
6. 6. Fiche de refus d'intervention rédigée en une page maximum, comportant : constat factuel, référence à la réglementation, conséquences pour le client, proposition de remise en conformité, emplacement de signature.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Norme EN 15194 : conditions de conformité d'un cycle à assistance électrique et perte de conformité après modification
- doc — Règlement UE 168/2013 : requalification d'un cycle motorisé dépassant les limites du pedelec
- doc — Bosch eBike Systems : détection des manipulations du signal de vitesse et code d'erreur associé
- article — Fédération française des usagers de la bicyclette (FUB) : conséquences légales et assurantielles du débridage d'un vélo à assistance électrique
- article — E-MOUNTAINBIKE Magazine : tuning et débridage des VAE : réalité technique et conséquences

### 10. Remplacer une batterie : compatibilité, marché, arnaques et fin de vie `vae-remplacer-batterie-marche`

- **Durée :** 45 min
- **Prérequis :**
  - [Mesurer un pack : tension, état de charge et premières conclusions](#vae-mesure-batterie-tension-soc) `vae-mesure-batterie-tension-soc`
  - [Perte d'autonomie : mesurer la santé réelle d'un pack](#vae-autonomie-soh-diagnostic) `vae-autonomie-soh-diagnostic`
  - [Charger et stocker une batterie Li-ion sans la tuer](#vae-batterie-charge-stockage) `vae-batterie-charge-stockage`
  - [Batterie Li-ion : reconnaître le danger et réagir à un incident](#vae-securite-li-ion-incident) `vae-securite-li-ion-incident`
  - [Déposer et reposer une batterie : verrous, rails et packs intégrés](#vae-depose-repose-batterie) `vae-depose-repose-batterie`
  - [Chargeur : contrôler la sortie et identifier un chargeur inadapté](#vae-chargeur-controle-mesure) `vae-chargeur-controle-mesure`
- **Outils :** multimètre, pied à coulisse et réglet pour relever les interfaces mécaniques, balance (le poids d'un pack trahit une capacité fantaisiste), appareil photo pour documenter références, étiquettes et numéros de série, tableur pour le comparatif chiffré, application constructeur ou outil de diagnostic (E-TUBE, Bosch, Bafang) selon le système, bac de transport non conducteur pour le pack déposé
- **⚠️ Sécurité :**
  - Un pack tiers non certifié (pas de marquage crédible, pas d'EN 50604 / UN 38.3, pas de cellules identifiables) est un risque d'incendie réel : refuse-le, quel que soit le prix.
  - Cellules contrefaites : une cellule 18650 vendue 6000 mAh n'existe pas. Une capacité impossible signe une cellule recyclée, dégradée ou fausse — et un emballement thermique probable.
  - Un chargeur non apparié au nouveau pack (tension de fin de charge, courant, connecteur identique mais polarité différente) détruit le pack et peut l'enflammer. Vérifie la sortie au multimètre avant le premier branchement.
  - Un pack gonflé, percé, tombé ou ayant pris l'eau ne se transporte pas comme un déchet ordinaire : procédure batterie endommagée, emballage dédié, point de collecte prévenu à l'avance.
  - Une batterie Li-ion ne va jamais à la poubelle, ni en benne tout-venant, ni au conteneur métal : filière de reprise dédiée, obligatoire et gratuite pour le détenteur.

**Objectifs :**
- Statuer sur la compatibilité mécanique ET électronique d'un pack de remplacement, authentification constructeur comprise.
- Comparer packs d'origine, packs tiers et packs reconditionnés sur des critères chiffrés.
- Débusquer une capacité annoncée incohérente, une cellule contrefaite et une garantie sans valeur.
- Calculer un coût par cycle et arbitrer entre réparer, remplacer et changer de vélo.
- Orienter le pack déposé vers une filière de reprise réglementaire et documenter la traçabilité.

**TP — Dossier de remplacement pour deux VAE : un système propriétaire récent, un no-name obsolète**

Tu traites deux cas opposés : un VAE récent à système propriétaire (Bosch, Shimano, Yamaha, Specialized…) et un VAE d'entrée de gamme ou ancien dont le pack n'est plus fabriqué. Pour chacun tu constitues un dossier : identité complète du pack, trois offres chiffrées, contrôles de cohérence, coût par cycle, verdict argumenté, et solution de fin de vie pour le pack déposé.

Critères de validation :
1. 1. Fiche d'identité complète pour les deux packs : marque du système, tension nominale, capacité annoncée en Ah et en Wh, référence constructeur, connectique, type d'interface (rail, semi-intégré, intégré), numéro de série — 0 champ manquant.
2. 2. Six offres au total (3 par vélo), chacune renseignée avec prix TTC, capacité annoncée, cellules annoncées (marque et format), garantie en mois ET en cycles, délai d'obtention et statut du vendeur.
3. 3. Contrôle de cohérence Wh appliqué aux 6 offres : Wh annoncés comparés à V nominal × Ah. Écart > 5 % → offre classée « suspecte » avec la ligne de calcul écrite.
4. 4. Contrôle de plausibilité par cellule : capacité annoncée du pack divisée par le nombre de cellules déduit de la config S/P. Toute valeur > 5000 mAh en 18650 ou > 5500 mAh en 21700 est signalée comme impossible, avec justification.
5. 5. Compatibilité tranchée en deux volets pour chaque offre : mécanique (interface, entraxe de fixation relevé au pied à coulisse à ±1 mm, verrou, dégagement cadre) et électronique (tension de coupure, connectique, authentification / dialogue constructeur), chacun statué oui / non / à tester avec la méthode de test.
6. 6. Coût par cycle calculé pour les 6 offres : prix ÷ nombre de cycles garantis jusqu'à 80 % de SoH, deux décimales, classement final du moins cher au plus cher au cycle.
7. 7. Filière de fin de vie identifiée nommément pour les deux packs déposés : nom de l'éco-organisme ou du point de collecte, procédure d'emballage (bornes isolées, pack non endommagé), preuve de dépôt ou bordereau prévu.
8. 8. Verdict argumenté de 15 lignes maximum par vélo, citant au moins un critère éliminatoire chiffré, et incluant l'option « ne pas remplacer » (reconditionnement, changement de vélo) chiffrée elle aussi.
9. 9. Pour le VAE obsolète : au moins une piste de contournement documentée (pack générique + adaptation de support, reconditionnement du boîtier d'origine, changement d'architecture) avec ses limites de sécurité, de garantie et de légalité.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Bosch eBike Systems : authentification des PowerPack, compatibilité inter-générations et packs non homologués
- doc — ADEME : filière de responsabilité élargie du producteur et reprise des batteries de VAE
- doc — Corepile : collecte et emballage des batteries de vélo à assistance électrique, y compris packs endommagés
- doc — Règlement (UE) 2023/1542 relatif aux batteries : marquage, information sur la capacité et durabilité des batteries
- article — UFC-Que Choisir : capacités surévaluées et garanties sur les batteries de VAE
- livre — Micah Toll — DIY Lithium Batteries : reconnaître une cellule contrefaite et évaluer un pack du marché

## Niveau 5 — Maître

### 1. Concevoir un retrofit complet : ville, vintage, pliant, cargo `vae-retrofit-conception`

- **Durée :** 45 min
- **Prérequis :**
  - [Installer un kit Bafang BBS01 / BBS02 / BBSHD](#vae-bafang-installation) `vae-bafang-installation`
  - [Roue à moteur moyeu : dépose, repose et bras de couple](#vae-roue-moteur-torque-arm) `vae-roue-moteur-torque-arm`
  - [Perte d'autonomie : mesurer la santé réelle d'un pack](#vae-autonomie-soh-diagnostic) `vae-autonomie-soh-diagnostic`
  - savoir identifier les matériaux de cadre et évaluer leurs limites *(fondamentaux)*
  - [Compatibilités de freinage : tirages, fixations, mélanges de marques](freinage.md) `compatibilite-freinage`
  - [Roues VAE et cargo : renforts, moteurs moyeu et contrôles spécifiques](roues-et-pneus.md) `roues-vae-et-cargo`
- **Outils :** pied à coulisse, réglet et mètre ruban, balance (vélo, charge utile), catalogue de kits et de packs, tableur pour le dimensionnement, appareil photo, carnet d'atelier
- **⚠️ Sécurité :**
  - Aucun moteur moyeu avant sur une fourche carbone, et aucun moteur moyeu sur des pattes aluminium sans bras de couple correctement dimensionné.
  - Un cadre ancien fatigué, corrodé ou fissuré ne se motorise pas : la motorisation augmente la masse, la vitesse moyenne et les efforts, et transforme une fissure dormante en rupture.
  - Un retrofit modifie la conformité du vélo : au-delà de 250 W nominaux ou de 25 km/h d'assistance, le vélo n'est plus un pedelec au sens de EN 15194 et ne peut pas circuler comme tel.
  - Sur un cargo ou un longtail, le dimensionnement du freinage et des roues doit être revu pour la masse totale réellement transportée, pas pour la masse à vide.

**Objectifs :**
- Choisir une architecture de motorisation adaptée à un vélo donné et à son usage réel
- Valider la compatibilité mécanique complète : cadre, matériau, pattes, boîtier, roues, freins, transmission, place batterie
- Dimensionner la batterie à partir d'un besoin d'autonomie chiffré et d'une consommation estimée en Wh/km
- Rédiger un dossier de conception défendable, incluant les limites légales et les points de refus

**TP — Dossier de conception de retrofit pour 2 vélos de types différents**

Tu produis un dossier de conception complet pour deux retrofits contrastés — par exemple un vélo de ville acier ancien et un cargo longtail, ou un pliant — chaque dossier allant du besoin client au choix de composants et aux limites du projet.

Critères de validation :
1. 1. Cahier des charges chiffré rédigé pour chaque vélo : autonomie visée en km, dénivelé type, masse totale transportée pesée ou estimée, usage (urbain, cargo, loisir), budget.
2. 2. Consommation estimée en Wh/km justifiée pour chaque projet, puis capacité de pack calculée avec une marge d'au moins 20 % ; calcul posé et vérifiable.
3. 3. Fiche de compatibilité mécanique remplie pour chaque vélo avec au minimum 10 mesures relevées : largeur et filetage de boîtier, largeur et matériau des pattes, type de fourche, diamètre de roue, largeur de pneu, entraxe, type de freins, dégagement de base, points de fixation batterie disponibles, état du cadre.
4. 4. Architecture retenue (pédalier ou moyeu, avant ou arrière) justifiée par écrit en 10 lignes maximum par projet, avec l'architecture écartée et la raison de son rejet.
5. 5. Points de refus explicités : au moins 2 configurations envisagées puis rejetées pour raison de sécurité ou de conformité, avec l'argument technique correspondant.
6. 6. Statut légal du vélo résultant énoncé pour chaque projet : pedelec conforme, ou hors catégorie, avec les conséquences pour l'utilisateur.
7. 7. Nomenclature complète établie par projet, avec au moins 12 lignes (moteur, pack, support, écran, capteurs, connectique, bras de couple, visserie, freins, roues, transmission, consommables) et un prix estimé.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Grin Technologies : choix d'une motorisation et dimensionnement d'un pack pour une conversion de vélo
- doc — Bafang : gammes de kits pédalier et moyeu, compatibilités de cadre et de roue
- doc — Norme EN 15194 : conditions à respecter pour qu'un vélo converti reste un cycle à assistance électrique
- doc — LEVA (Light Electric Vehicle Association) : conception et intégration d'un système de propulsion sur un cycle existant
- article — Sheldon Brown : évaluation de l'état et des limites d'un cadre ancien avant transformation
- doc — Cycles cargo — documentation constructeur : charges admissibles, dimensionnement du freinage et des roues sur longtail et biporteur

### 2. Atelier VAE : stockage, transport, déchets et traçabilité `vae-atelier-conformite-stockage`

- **Durée :** 45 min
- **Prérequis :**
  - [Batterie Li-ion : reconnaître le danger et réagir à un incident](#vae-securite-li-ion-incident) `vae-securite-li-ion-incident`
  - [Perte d'autonomie : mesurer la santé réelle d'un pack](#vae-autonomie-soh-diagnostic) `vae-autonomie-soh-diagnostic`
  - [Le carnet d'atelier et la pratique délibérée](fondamentaux.md) `carnet-atelier`
  - [Passer pro : certifications, formations, statut](fondamentaux.md) `passer-pro`
- **Outils :** armoire ou bac de stockage résistant au feu, sacs de confinement pour batteries, détecteur de fumée et extincteur adapté, thermomètre d'ambiance, étiquettes de traçabilité, modèles de fiches de réception et de décharge, tableur ou logiciel d'atelier
- **⚠️ Sécurité :**
  - La zone de charge doit être séparée du stock de matières combustibles, dotée d'un détecteur de fumée, et jamais placée dans un cheminement d'évacuation.
  - Une batterie endommagée ou suspecte est isolée immédiatement dans un contenant dédié, à l'écart des packs sains, et n'est jamais chargée ni expédiée par voie normale.
  - Les batteries endommagées relèvent de dispositions de transport spécifiques et ne peuvent pas être remises à un transporteur ordinaire : leur enlèvement passe par une filière habilitée.
  - Une batterie ne se jette jamais avec les déchets courants : filière de collecte des accumulateurs uniquement.

**Objectifs :**
- Aménager une zone de stockage et de charge de batteries conforme au risque incendie
- Appliquer les règles de transport des batteries : UN 38.3, dispositions ADR, cas particulier des batteries endommagées
- Orienter une batterie en fin de vie ou accidentée vers la bonne filière de collecte
- Mettre en place la traçabilité d'atelier : fiche de réception, relevé d'état, décharge client, archivage des interventions

**TP — Audit et mise en conformité d'un espace de travail VAE**

Tu audites ton espace de travail actuel selon une grille de conformité, tu le réaménages, puis tu mets en place le jeu de documents de traçabilité que tu utiliseras sur toute intervention VAE.

Critères de validation :
1. 1. Grille d'audit de 15 points minimum construite et appliquée : distance aux combustibles, nature du support de charge, détection incendie, moyen d'extinction, ventilation, contenant de confinement, séparation packs sains/suspects, éclairage, accès dégagé, affichage des consignes, présence d'un tiers joignable, stockage à l'état de charge de conservation, température du local, contrôle des chargeurs, procédure d'urgence affichée.
2. 2. Écarts constatés corrigés : au moins 80 % des points non conformes de l'audit initial sont conformes après réaménagement, avec photos avant/après.
3. 3. Distance minimale de 1 m mesurée entre tout pack en charge et toute matière combustible, et support de charge incombustible vérifié.
4. 4. Zone de confinement des packs suspects opérationnelle : contenant identifié, étiquetage en place, capacité d'accueillir au moins 2 packs isolés l'un de l'autre.
5. 5. Jeu de documents produit et utilisable : fiche de réception VAE (au moins 12 champs), fiche d'état de batterie à la réception, décharge client pour intervention à risque, fiche de refus d'intervention, fiche de mise en filière — 5 documents finalisés.
6. 6. Registre de traçabilité créé et testé sur 3 interventions fictives ou réelles : chaque entrée contient date, vélo, numéro de série du pack, état à la réception, opérations, valeurs de couple, état à la restitution.
7. 7. Procédure de transport rédigée en une page : conditions d'expédition d'un pack sain, conditions d'un pack endommagé, coordonnées de la filière de collecte identifiée localement.
8. 8. Restitution orale de 5 minutes maximum devant un tiers, expliquant l'aménagement retenu et justifiant 3 arbitrages faits sous contrainte d'espace ou de budget.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — INRS : stockage et charge des batteries lithium-ion en milieu professionnel : prévention du risque incendie
- doc — Accord ADR : transport des batteries au lithium, dispositions applicables et cas des batteries endommagées
- doc — Règlement ONU / manuel d'épreuves et de critères : exigences UN 38.3 pour l'expédition des batteries lithium
- doc — Corepile / filière de collecte des piles et accumulateurs : conditions de collecte et de reprise des batteries de vélos électriques
- doc — LEVA (Light Electric Vehicle Association) : organisation et conformité d'un atelier de maintenance de véhicules électriques légers
- doc — Cytech : exigences documentaires et traçabilité des interventions en atelier professionnel

### 3. Traquer une panne intermittente sur un VAE `vae-panne-intermittente`

- **Durée :** 45 min
- **Prérequis :**
  - [Tester la continuité d'un faisceau et localiser une coupure](#vae-continuite-faisceau) `vae-continuite-faisceau`
  - [Diagnostiquer un moteur moyeu : phases, capteurs Hall et contrôleur](#vae-diagnostic-moteur-moyeu) `vae-diagnostic-moteur-moyeu`
  - savoir extraire et interpréter les journaux et codes de plusieurs marques *(vae)*
  - [Ton calendrier d'entretien : 25 h, 50 h, 100 h](fondamentaux.md) `calendrier-entretien`
- **Outils :** multimètre numérique, idéalement avec fonction min/max ou enregistrement, pointes de test fines et cordons longs, home-trainer permettant de charger le moteur, pistolet thermique ou sèche-cheveux et bombe de froid (test thermique), brumisateur d'eau (test d'humidité contrôlé), caméra ou smartphone pour filmer l'écran en roulage, carnet d'atelier et fiche de suivi
- **⚠️ Sécurité :**
  - Les tests d'humidité contrôlée se font sur des zones ciblées et à faible débit, jamais sur la batterie, ses contacts ou un connecteur ouvert.
  - Les tests thermiques ne dépassent jamais les températures admissibles des composants et ne sont jamais appliqués à une batterie.
  - Toute mesure en roulage se fait sur home-trainer ou avec un opérateur dédié : jamais de manipulation de multimètre par le pilote en mouvement.

**Objectifs :**
- Construire un protocole de reproduction d'une panne qui n'apparaît qu'en roulage
- Mesurer une chute de tension sous charge et l'utiliser pour localiser un contact dégradé
- Appliquer un test de mouvement (wiggle test) instrumenté sur faisceau et connectique
- Exploiter les journaux constructeur pour corréler un évènement à un code et clore un diagnostic

**TP — Résolution d'une panne intermittente introduite par un tiers**

Un binôme introduit un défaut intermittent (contact partiellement dessoudé, connecteur mal verrouillé, conducteur amorcé sous la gaine, capteur en limite de tolérance) et tu dois le reproduire, le localiser et le corriger en appliquant une méthode écrite.

Critères de validation :
1. 1. Protocole de reproduction écrit avant intervention, en 8 étapes numérotées maximum, précisant les conditions à faire varier : charge, vibration, température, humidité, angle de direction, position du faisceau.
2. 2. Panne reproduite volontairement au moins 3 fois, avec les conditions exactes de chaque occurrence consignées.
3. 3. Test de mouvement instrumenté réalisé sur 100 % des connecteurs accessibles et sur toute la longueur du faisceau, avec le multimètre en surveillance de continuité ou de tension.
4. 4. Chute de tension sous charge mesurée aux bornes d'au moins 3 liaisons suspectes pendant une assistance soutenue : valeur relevée pour chacune, toute chute supérieure à 0,3 V sur une liaison de puissance signalée comme anormale.
5. 5. Journal constructeur consulté et corrélé : au moins un évènement du journal rapproché d'une occurrence reproduite, ou absence de corrélation constatée et commentée.
6. 6. Origine exacte localisée et annoncée avant vérification, avec une précision de 10 cm sur le faisceau ou l'organe désigné nommément.
7. 7. Réparation réalisée puis validée : 30 minutes de sollicitation reproduisant les conditions ayant provoqué la panne, sans aucune occurrence, et 20 km de roulage sans récidive.
8. 8. Rapport de diagnostic rédigé en une page maximum : symptôme, conditions de reproduction, hypothèses testées et éliminées, mesures décisives, réparation, validation.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Park Tool : méthodologie de diagnostic des bruits et défauts intermittents en atelier
- doc — LEVA (Light Electric Vehicle Association) : diagnostic des défauts intermittents sur systèmes électriques de mobilité légère
- doc — Fluke : usage des fonctions min/max et d'enregistrement pour capturer un défaut fugitif
- article — Grin Technologies : mesure de chute de tension sous charge et localisation des contacts dégradés
- doc — Bosch eBike Systems : exploitation du journal d'évènements et de l'historique d'erreurs en diagnostic atelier

### 4. Reconstruire un pack 2/3 : soudure par points et assemblage mécanique `vae-pack-assemblage-soudure`

- **Durée :** 45 min
- **Prérequis :**
  - [Reconstruire un pack 1/3 : choisir et apparier les cellules](#vae-pack-choix-cellules) `vae-pack-choix-cellules`
  - [Sertir, souder et réparer un conducteur de VAE](#vae-sertissage-reparation-fil) `vae-sertissage-reparation-fil`
  - [Batterie Li-ion : reconnaître le danger et réagir à un incident](#vae-securite-li-ion-incident) `vae-securite-li-ion-incident`
- **Outils :** soudeuse par points à décharge capacitive ou machine à transformateur adaptée, bande de nickel pur 0,15 à 0,20 mm, largeur adaptée au courant, rondelles isolantes (fish paper) et film Kapton, holders / spacers plastiques pour cellules, ruban adhésif fibre et gaine thermorétractable de pack, pince coupante et cisaille à métal fine, multimètre et charge de test connue pour la mesure de chute de tension, thermomètre infrarouge, lunettes de protection et gants non conducteurs, bac de sable ou extincteur adapté à portée immédiate
- **⚠️ Sécurité :**
  - Une soudeuse par points délivre plusieurs centaines d'ampères : un contact accidentel entre l'électrode et le pôle opposé crée un court-circuit franc sur des cellules chargées. Une seule électrode en main, l'autre posée, jamais de câblage bricolé.
  - Interdiction absolue de souder à l'étain directement sur le pôle d'une cellule cylindrique : la chaleur transmise dégrade le séparateur et le joint d'évent. On soude par points, ou on prend des cellules à languettes soudées d'usine.
  - Ne place jamais un point de soudure sur l'évent de la cellule (couronne du pôle positif) : tu condamnes sa sécurité intégrée.
  - Étincelles et projections métalliques à chaque point : lunettes obligatoires, plan de travail dégagé de tout solvant, chiffon gras et papier.
  - Un pack en cours d'assemblage est sous tension dès le premier groupe relié : outils isolés, un seul outil conducteur en main à la fois, moyen d'extinction à portée immédiate.
  - Le nickel doit être du nickel pur, pas de l'acier nickelé : l'acier nickelé résiste, chauffe et crée des points chauds. Vérifie par la fiche fournisseur et par mesure de résistance.

**Objectifs :**
- Régler une soudeuse par points et produire un point reproductible sur cellule cylindrique.
- Juger la qualité d'un point de soudure par test d'arrachement et par mesure de résistance.
- Dimensionner et poser bandes de nickel, liaisons fusibles et isolants.
- Assurer le maintien mécanique et la gestion thermique du pack avant fermeture.
- Vérifier l'absence de conducteur exposé avant toute mise sous tension.

**TP — Souder, tester à l'arrachement et assembler mécaniquement le pack**

Tu règles la machine sur des cellules de rebut, tu valides tes réglages par un test d'arrachement documenté, puis tu réalises l'assemblage complet : bandes, liaisons, fusibles, isolants, maintien mécanique et gestion thermique. Le pack sort de la séance prêt pour le BMS, mais pas encore câblé.

Critères de validation :
1. 1. Réglage machine consigné par écrit avant production : énergie (J) ou durée d'impulsion, épaisseur et largeur du nickel, pression d'électrode, nombre de points par plot (≥ 2 points par cellule et par pôle).
2. 2. Test d'arrachement sur 10 éprouvettes réalisées sur cellules de rebut avec les mêmes réglages : 10/10 doivent se déchirer dans la bande de nickel avant que le point ne lâche. Un seul nugget arraché du pôle = réglages refusés, on recommence.
3. 3. Placement : 0 point sur l'évent de la cellule, distance au bord du pôle ≥ 1 mm, aucune zone re-soudée plus de 2 fois au même endroit.
4. 4. Résistance des interconnexions mesurée par chute de tension sous charge connue : chaque liaison inter-groupes ≤ la valeur cible calculée pour la section de nickel retenue, dispersion entre liaisons ≤ 20 %.
5. 5. Thermique de soudure contrôlée : température du corps de cellule mesurée au thermomètre IR immédiatement après soudure < 40 °C sur un échantillon d'au moins 10 cellules.
6. 6. Isolation : rondelle isolante en place sur 100 % des pôles positifs, film Kapton ou équivalent sur 100 % des arêtes et retours de bande, 0 conducteur nu accessible en fin d'assemblage (vérification à la pointe de touche sur toutes les faces).
7. 7. Isolement pack / enveloppe : résistance mesurée ≥ 10 MΩ entre le négatif du pack et toute partie métallique extérieure.
8. 8. Liaisons fusibles (si le montage en prévoit) : section et longueur documentées, courant de fusion estimé et cohérent avec le courant maximal du contrôleur, 100 % des cellules concernées équipées.
9. 9. Maintien mécanique : après 30 s de secousses manuelles franches, 0 déplacement de cellule, 0 point rompu, et les tensions de chaque groupe parallèle relevées avant/après identiques à ±0,01 V.
10. 10. Gestion thermique : espacement conforme au plan (holders posés à 100 %), 0 cellule en contact direct avec une autre sans isolant, chemin d'évacuation de chaleur documenté sur le plan du pack.
11. 11. Traçabilité : ≥ 8 photos référencées, dont une vue d'ensemble de chaque face du pack avant fermeture, et plan de câblage des groupes mis à jour.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- livre — Micah Toll — DIY Lithium Batteries : soudure par points sur cellules cylindriques, choix du nickel et liaisons fusibles
- outil — Keenlab kWeld : réglage d'une soudeuse à décharge capacitive et test d'arrachement des points
- video — Jehu Garcia : assemblage de packs Li-ion : bandes de nickel, isolants et maintien mécanique
- article — Battery University (Cadex) : interconnexions, résistance parasite et points chauds dans un pack
- video — GreatScott! : comparatif des méthodes d'assemblage de packs et pièges de la soudure à l'étain
- doc — INRS : prévention du risque incendie lors de l'assemblage d'accumulateurs lithium

### 5. Reconstruire un pack 3/3 : BMS, câblage et première charge surveillée `vae-pack-bms-premiere-charge`

- **Durée :** 45 min
- **Prérequis :**
  - [Reconstruire un pack 2/3 : soudure par points et assemblage mécanique](#vae-pack-assemblage-soudure) `vae-pack-assemblage-soudure`
  - [BMS et pack ouvert : diagnostic d'un déséquilibre cellulaire](#vae-bms-pack-diagnostic) `vae-bms-pack-diagnostic`
  - [Chargeur : contrôler la sortie et identifier un chargeur inadapté](#vae-chargeur-controle-mesure) `vae-chargeur-controle-mesure`
  - [Charger et stocker une batterie Li-ion sans la tuer](#vae-batterie-charge-stockage) `vae-batterie-charge-stockage`
  - [Atelier VAE : stockage, transport, déchets et traçabilité](#vae-atelier-conformite-stockage) `vae-atelier-conformite-stockage`
- **Outils :** BMS adapté (S correct, courants continu et de crête suffisants, port de charge séparé ou commun selon le montage), multimètre de résolution 0,01 V, fer à souder et connectique de fils d'équilibrage, chargeur à courant réglable ou alimentation de laboratoire pour la première charge, charge résistive ou banc de décharge pour le test de capacité, thermomètre infrarouge et sonde de température, support incombustible et bac ou sac de charge, extincteur adapté ou bac de sable, détecteur de fumée dans la pièce, chronomètre et feuille de relevé
- **⚠️ Sécurité :**
  - Le câblage des fils d'équilibrage est l'étape la plus dangereuse d'un rebuild : un fil inversé ou décalé d'un rang court-circuite un ou plusieurs groupes à travers le BMS et peut mettre le feu instantanément. Ordre croissant obligatoire, du B- vers le dernier, mesure au voltmètre avant chaque insertion.
  - Ne branche jamais le connecteur d'équilibrage complet d'un seul geste sans avoir vérifié fil à fil : c'est la cause n°1 de BMS détruits et de packs partis en fumée.
  - Première charge à courant réduit, en présence physique permanente, sur support incombustible, à distance de tout combustible, moyen d'extinction à portée. Jamais de charge de nuit, jamais dans un couloir d'évacuation, jamais sans surveillance.
  - Un pack neuf reconstruit n'a aucun historique : les 3 premiers cycles sont des cycles de qualification, pas des cycles d'usage. Ne le monte pas sur un vélo avant de les avoir faits.
  - Toute température de cellule > 45 °C en charge, toute odeur, tout gonflement, tout claquement : arrêt immédiat, débranchement, mise à l'écart en extérieur sur support incombustible, aucune tentative de « voir si ça repart ».

**Objectifs :**
- Choisir un BMS cohérent avec la configuration S/P, le courant de décharge et le mode de charge.
- Câbler les fils d'équilibrage dans l'ordre correct et vérifier chaque fil avant insertion.
- Contrôler le pack avant la toute première mise sous tension : isolement, polarité, tensions de groupes.
- Conduire une première charge surveillée dans des conditions de sécurité incendie maîtrisées.
- Valider le pack : équilibrage, coupures du BMS, capacité restituée, et archiver la fiche de vie.

**TP — Câbler le BMS, vérifier avant mise sous tension, conduire la première charge**

Tu câbles les fils d'équilibrage dans l'ordre en vérifiant chacun au voltmètre avant insertion, tu passes la checklist de pré-mise-sous-tension, puis tu conduis la première charge complète sous surveillance, suivie d'un cycle de décharge de validation.

Critères de validation :
1. 1. BMS justifié par écrit : nombre de S conforme au pack, courant continu ≥ courant maximal du contrôleur avec marge ≥ 20 %, courant de crête admissible, seuils de coupure haute et basse, port de charge commun ou séparé — 0 caractéristique non vérifiée sur la notice.
2. 2. Ordre de câblage respecté et consigné : B- d'abord, puis B1, B2… jusqu'au dernier, sans saut. Checklist ligne par ligne, chaque ligne cochée au moment même du branchement.
3. 3. Vérification avant insertion sur 100 % des fils : mesure entre le fil considéré et le B-. L'écart entre deux fils consécutifs égale la tension d'un groupe parallèle à ±0,05 V ; la tension au dernier fil égale la tension totale du pack à ±0,10 V. Aucun fil inséré sans mesure préalable écrite.
4. 4. Contrôle avant mise sous tension : isolement ≥ 10 MΩ entre le pack et toute partie métallique de l'enveloppe ; polarité de sortie confirmée par deux mesures indépendantes.
5. 5. Consommation à vide du BMS mesurée après activation, ≤ la valeur annoncée par la notice.
6. 6. Conditions de charge vérifiées et cochées avant branchement : support incombustible, ≥ 1 m de tout combustible, extincteur ou bac de sable à portée, détecteur de fumée dans la pièce, présence humaine 100 % de la durée.
7. 7. Première charge à courant limité (≤ 1 A pour un pack de VAE standard) ; relevé de tension pack et de température toutes les 15 minutes sur une feuille ; seuil d'arrêt immédiat fixé à 45 °C et respecté.
8. 8. Fin de charge : delta entre le groupe parallèle le plus haut et le plus bas ≤ 30 mV ; aucun groupe > 4,25 V ; coupure de charge du BMS effective (courant résiduel < 100 mA).
9. 9. Coupure haute vérifiée réellement, pas seulement lue dans la notice : la charge s'arrête d'elle-même, sans intervention.
10. 10. Cycle de décharge de validation : au moins 20 % de la capacité nominale restituée sur charge connue, 0 coupure intempestive, delta entre groupes ≤ 50 mV en fin de test.
11. 11. Fiche de vie du pack créée et archivée : date, configuration S/P, numéros de lot des cellules, référence BMS, relevés de la première charge, tensions de groupes en fin de charge — 0 champ vide.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- doc — Daly / JBD (Jiabaida) : notice de câblage des fils d'équilibrage et séquence de branchement d'un BMS
- livre — Micah Toll — DIY Lithium Batteries : connexion du BMS, ordre des fils d'équilibrage et première charge d'un pack neuf
- article — Battery University (Cadex) : charge CC/CV, équilibrage passif et critères de fin de charge d'un pack Li-ion
- video — Jehu Garcia : câblage et test d'un BMS sur pack reconstruit, erreurs classiques
- doc — INRS : charge et stockage des accumulateurs lithium en atelier : mesures de prévention incendie
- doc — EN 50604-1 : exigences de sécurité applicables aux batteries lithium de cycles à assistance électrique

### 6. Reconstruire un pack 1/3 : choisir et apparier les cellules `vae-pack-choix-cellules`

- **Durée :** 45 min
- **Prérequis :**
  - [BMS et pack ouvert : diagnostic d'un déséquilibre cellulaire](#vae-bms-pack-diagnostic) `vae-bms-pack-diagnostic`
  - [Mesurer un pack : tension, état de charge et premières conclusions](#vae-mesure-batterie-tension-soc) `vae-mesure-batterie-tension-soc`
  - [Perte d'autonomie : mesurer la santé réelle d'un pack](#vae-autonomie-soh-diagnostic) `vae-autonomie-soh-diagnostic`
  - [Batterie Li-ion : reconnaître le danger et réagir à un incident](#vae-securite-li-ion-incident) `vae-securite-li-ion-incident`
  - [Atelier VAE : stockage, transport, déchets et traçabilité](#vae-atelier-conformite-stockage) `vae-atelier-conformite-stockage`
  - savoir diagnostiquer un BMS et mesurer l'équilibrage d'un pack ouvert *(vae)*
  - [Sertir, souder et réparer un conducteur de VAE](#vae-sertissage-reparation-fil) `vae-sertissage-reparation-fil`
  - maîtriser intégralement les règles de sécurité Li-ion et la conduite en cas d'incident *(vae)*
- **Outils :** multimètre de résolution 0,01 V minimum, testeur de résistance interne 4 fils ou banc à charge connue, chargeur/déchargeur analyseur de cellules pour mesure de capacité, support de cellules isolé et bac non conducteur, marqueur indélébile et étiquettes numérotées, balance de précision 0,1 g, thermomètre infrarouge, tableur pour le tri et l'appariement
- **⚠️ Sécurité :**
  - Une cellule Li-ion nue court-circuitée par un outil, un bijou ou une chute sur une surface métallique part en emballement thermique en quelques secondes. Plan de travail non conducteur, ni montre ni bague, un seul lot ouvert à la fois.
  - Une cellule descendue sous 2,5 V est réputée dégradée ; sous 2,0 V elle peut avoir formé des dendrites de cuivre : recharge interdite, direction recyclage. C'est le critère le plus souvent ignoré des rebuilds ratés.
  - Ne mélange jamais des cellules de chimies, formats, âges ou marques différents dans un même pack : le groupe le plus faible se fait tirer du courant par les autres et chauffe.
  - Stockage du lot en attente d'assemblage à 3,6-3,8 V par cellule, bornes protégées, dans un contenant incombustible, à l'écart de tout combustible.
  - Cellules récupérées (portables, trottinettes) : historique inconnu, micro-court-circuits invisibles. À proscrire pour un pack de VAE qui roule sur route.

**Objectifs :**
- Choisir une chimie et un format de cellule adaptés à l'usage, au courant demandé et au volume disponible.
- Calculer la configuration S/P d'un pack pour une tension et une capacité cibles.
- Mesurer capacité réelle et résistance interne d'un lot de cellules et les apparier en groupes parallèles.
- Sourcer des cellules authentiques et écarter un lot douteux avant assemblage.
- Tracer un lot de cellules pour rendre le pack diagnosticable des années plus tard.

**TP — Constituer et apparier un lot de cellules pour un pack cible**

Tu définis une cible (tension nominale, capacité Wh, courant continu maximal), tu en déduis la configuration S/P, puis tu qualifies un lot d'au moins 16 cellules : marquage, OCV, résistance interne, capacité réelle par cycle contrôlé, et enfin constitution des groupes parallèles appariés.

Critères de validation :
1. 1. Cahier des charges écrit avant tout achat : tension nominale visée, tension de fin de charge (4,20 V × S), tension de coupure basse, capacité Wh cible, courant continu et courant de crête demandés par le contrôleur. 0 valeur estimée au jugé.
2. 2. Configuration S/P calculée et justifiée : S déduit de la tension du contrôleur (compatible avec ses coupures haute et basse, 0 erreur), P déduit du courant par cellule (courant crête ÷ P ≤ courant continu admissible de la fiche technique, marge ≥ 20 %). Wh théoriques recalculés et à ±5 % de la cible.
3. 3. Lot d'au moins 16 cellules du même modèle, même lot de production si possible ; chaque cellule porte un numéro unique indélébile reporté dans le tableur.
4. 4. OCV mesurée à 0,01 V près sur 100 % des cellules ; toute cellule < 2,50 V est écartée, consignée et dirigée vers le recyclage — 0 exception.
5. 5. Résistance interne mesurée 3 fois par cellule ; dispersion des 3 mesures ≤ 5 %, sinon contact ou température en cause et on refait.
6. 6. Capacité réelle mesurée par cycle de décharge contrôlée à courant documenté ; toute cellule restituant ≤ 80 % de la capacité nominale annoncée est écartée.
7. 7. Appariement : à l'intérieur de chaque groupe parallèle, écart de capacité ≤ 3 % entre la plus faible et la plus forte, et écart de résistance interne ≤ 15 %.
8. 8. Équilibre inter-groupes : écart de capacité moyenne entre deux groupes parallèles quelconques ≤ 2 %.
9. 9. Mise à niveau avant assemblage : toutes les cellules retenues à la même tension à ±0,02 V le jour de l'assemblage.
10. 10. Authenticité et traçabilité : fiche de lot renseignée (fournisseur, date, numéro de lot, fiche technique du fabricant, photos des marquages) pour 100 % des cellules, plus un contrôle de plausibilité par pesée comparée à la masse de la fiche technique, écart ≤ 5 %.

**Pistes de références** *(URLs vérifiées à la rédaction de la leçon)* :
- article — Battery University (Cadex) : chimies Li-ion (NMC, NCA, LFP), formats 18650/21700 et effets de l'appariement
- doc — Samsung SDI / Molicel : fiches techniques de cellules cylindriques : courant continu, résistance interne, courbes de décharge
- livre — Micah Toll — DIY Lithium Batteries : calcul de configuration S/P et sélection de cellules pour un pack de VAE
- article — lygte-info (Henrik Karlsen) : tests indépendants de cellules 18650/21700 et détection des capacités surévaluées
- outil — Testeur de résistance interne 4 fils (type YR1035+) : protocole de mesure de résistance interne sur cellule cylindrique
- doc — INRS : risques des accumulateurs lithium : stockage, manipulation et prévention de l'emballement thermique
