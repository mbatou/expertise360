# Expertise 360 — Inventaire de contenu pour reconstruction

> **Source :** https://www.expert-360.com/ (crawl intégral)
> **Objet :** tout le contenu et la structure de la page unique, prêts à reconstruire.
> **Stack cible :** Next.js + Supabase (les collections répétables sont fournies en JSON pour être mappées en composants ou seedées en base).

Le contenu textuel est repris **verbatim** du site. Les collections (services, équipe, secteurs, méthode…) sont données en JSON. Les correctifs à appliquer pendant la reconstruction sont listés en **§13**.

---

## 1. Métadonnées & marque

| Élément | Valeur |
|---|---|
| `<title>` actuel | `EXPERTISE 360 — Cabinet de Conseil Financier` |
| `lang` | `fr` |
| `meta description` | **absente** → à créer (voir §13) |
| Open Graph / Twitter | **absents** → à créer |
| Favicon | **absent** → à créer |
| Nom de marque | Expertise 360 |
| Logo (marque texte) | Pastille arrondie or contenant « E3⁶⁰ », suivie de « EXPERTISE 360 » (« EXPERTISE » blanc, « 360 » or) |
| Palette | Navy `#0A1F44` (dominante) · Or `#C9A24B` (accent) · fonds clairs pour sections alternées |
| Localisation | Dakar, Sénégal · Zone UEMOA · International |

**Ancres de navigation (one-page) :** `#services`, `#expertise`, `#equipe`, `#secteurs`, `#approche`, `#contact`.

```json
{
  "nav": [
    { "label": "Services",       "href": "#services" },
    { "label": "Expertise",      "href": "#expertise" },
    { "label": "Équipe",         "href": "#equipe" },
    { "label": "Secteurs",       "href": "#secteurs" },
    { "label": "Approche",       "href": "#approche" },
    { "label": "Nous contacter", "href": "#contact", "cta": true }
  ]
}
```

---

## 2. Hero

- **Eyebrow :** `Cabinet de Conseil Financier — Dakar · Afrique`
- **Titre H1 :** `Votre partenaire stratégique pour l'excellence financière`
  - *(mise en valeur : « l'excellence financière » en or)*
- **Sous-titre :** `Stratégie · Risque · Financement · Formation`
- **Paragraphe :**
  > Expertise 360 accompagne les institutions financières, les PME et les organisations internationales dans leur développement, la gestion de leurs risques et le renforcement de leurs capacités — avec une vision à 360° ancrée sur plus de 28 ans d'expérience terrain.
- **CTA 1 :** `Découvrir nos services` → `#services`
- **CTA 2 :** `Prendre rendez-vous` → `#contact`

---

## 3. Barre de statistiques

```json
[
  { "value": "28+",  "label": "Années d'expérience" },
  { "value": "4",    "label": "Organisations internationales" },
  { "value": "360°", "label": "Couverture des besoins" },
  { "value": "2",    "label": "Fonds d'investissement gérés" }
]
```

---

## 4. Services — « Nos Domaines d'Intervention »

- **Eyebrow :** `Ce que nous faisons`
- **Titre H2 :** `Nos Domaines d'Intervention`
- **Intro :**
  > Un spectre complet d'expertises au service des institutions financières, des PME et des projets de développement en Afrique et à l'international.

*(`emoji` = pictogramme actuel à remplacer ; `icon` = icône Lucide recommandée — voir §13.)*

```json
[
  {
    "id": "plans-strategiques",
    "title": "Élaboration de Plans Stratégiques",
    "description": "Accompagnement dans la conception de plans de développement à 3-5 ans : diagnostic stratégique (SWOT/PESTEL), définition des axes prioritaires, tableaux de bord et BSC pour institutions financières et PME.",
    "emoji": "📊", "icon": "line-chart"
  },
  {
    "id": "gestion-risques",
    "title": "Gestion des Risques Financiers",
    "description": "Mise en place et renforcement de dispositifs de gestion des risques (crédit, liquidité, marché, opérationnel) conformes aux normes BCEAO, COBAC et standards internationaux Bâle II/III.",
    "emoji": "🛡️", "icon": "shield-check"
  },
  {
    "id": "produits-financiers",
    "title": "Développement de Produits Financiers",
    "description": "Conception de produits adaptés aux besoins spécifiques : finance agricole, produits de microfinance, instruments de financement des PME, produits d'épargne et de crédit innovants.",
    "emoji": "🌾", "icon": "coins"
  },
  {
    "id": "analyse-due-diligence",
    "title": "Analyse Financière & Due Diligence",
    "description": "Diagnostic approfondi de la santé financière des organisations, évaluation avant investissement, notation interne, analyse de portefeuille et recommandations stratégiques d'optimisation.",
    "emoji": "🔍", "icon": "search-check"
  },
  {
    "id": "mobilisation-financements",
    "title": "Recherche & Mobilisation de Financements",
    "description": "Identification des sources de financement adaptées (bailleurs multilatéraux, fonds d'impact, marchés financiers), montage de dossiers et accompagnement dans les négociations de financement.",
    "emoji": "💰", "icon": "hand-coins"
  },
  {
    "id": "gestion-changement",
    "title": "Gestion du Changement",
    "description": "Élaboration de plans de conduite du changement pour l'appropriation de projets de transformation interne, digitalisation et réformes organisationnelles au sein des institutions financières.",
    "emoji": "🔄", "icon": "refresh-cw"
  },
  {
    "id": "formation-ia",
    "title": "Formation : IA & Gestion des Risques",
    "description": "Programmes de renforcement de capacités sur l'utilisation de l'Intelligence Artificielle dans la gestion des risques : scoring crédit, détection de fraude, analyse prédictive et modélisation.",
    "emoji": "🤖", "icon": "brain-circuit"
  },
  {
    "id": "inclusion-finance-verte",
    "title": "Inclusion Financière & Finance Verte",
    "description": "Études, évaluations et stratégies d'inclusion financière ; développement de produits et d'indicateurs de performance pour la finance verte et l'investissement à impact social et environnemental.",
    "emoji": "🌍", "icon": "sprout"
  },
  {
    "id": "conseil-imf",
    "title": "Conseil aux Institutions de Microfinance",
    "description": "Appui institutionnel global aux IMF : gouvernance, gestion du portefeuille à risque, conformité réglementaire, digitalisation des opérations et amélioration de la performance sociale.",
    "emoji": "🏦", "icon": "building-2"
  }
]
```

---

## 5. Valeur ajoutée + carte fondateur (section « Expertise » / ancre `#expertise`)

- **Eyebrow :** `Notre valeur ajoutée`
- **Titre H2 :** `Une Expertise Forgée au Plus Haut Niveau`
- **Intro :**
  > Expertise 360 conjugue la rigueur des standards internationaux et la connaissance intime des réalités africaines pour des recommandations véritablement actionnables.

**5 points** *(⚠️ le 5ᵉ n'apparaissait pas sur les captures) :*

```json
[
  { "title": "Standards internationaux", "text": "Maîtrise des normes Bâle, BCEAO, COBAC, IFRS et des meilleures pratiques mondiales du secteur financier." },
  { "title": "Connaissance du terrain africain", "text": "Compréhension fine des marchés UEMOA, des contraintes de liquidité et des dynamiques des PME locales." },
  { "title": "Réseau institutionnel", "text": "Relations établies avec les bailleurs multilatéraux, fonds d'impact et institutions de développement (Banque Mondiale, UNCDF…)." },
  { "title": "Approche sur mesure", "text": "Chaque mission est structurée selon les spécificités de l'organisation : taille, secteur, enjeux stratégiques et contexte réglementaire." },
  { "title": "Transfert de compétences", "text": "Toutes nos interventions intègrent un volet formation pour pérenniser les acquis au sein des équipes." }
]
```

**Carte fondateur (encadré) :**

```json
{
  "name": "Djibril MBENGUE",
  "role": "Fondateur & Consultant Principal",
  "subtitle": "Expert en Finance & Investissement",
  "experienceBadge": "28 ans d'expérience",
  "credentials": [
    { "label": "Banque Mondiale — Washington, D.C.", "emoji": "🌐", "icon": "globe" },
    { "label": "UNCDF — Finance Inclusive", "emoji": "🌐", "icon": "globe" },
    { "label": "OIKOCREDIT Sénégal — Fonds d'Impact", "emoji": "💼", "icon": "briefcase" },
    { "label": "GROFIN — Investissement PME Afrique", "emoji": "💼", "icon": "briefcase" },
    { "label": "Institutions financières — Sénégal", "emoji": "🇸🇳", "icon": "flag" }
  ]
}
```

---

## 6. Équipe — « Notre Équipe »

- **Eyebrow :** `Les hommes et femmes derrière notre expertise`
- **Titre H2 :** `Notre Équipe`
- **Intro :**
  > Des professionnels aguerris, formés aux meilleurs standards internationaux, engagés pour le développement financier de l'Afrique.
- **Ligne de bas de section :** `Vous souhaitez rejoindre l'équipe ?` + lien `Contactez-nous` → `#contact`

```json
[
  {
    "name": "Djibril MBENGUE",
    "role": "Fondateur & Consultant Principal",
    "isFounder": true,
    "bio": "Expert en finance d'entreprise, gestion des risques et investissement à impact. 28 ans d'expérience entre Dakar, Washington et les marchés africains.",
    "tags": ["Gestion des risques", "Stratégie", "Impact Finance", "PME & IMF"],
    "photo": "https://www.expert-360.com/djibril-mbengue.jpg",
    "cv": "https://www.expert-360.com/cv-djibril-mbengue.pdf"
  },
  {
    "name": "Tamsir FALL",
    "role": "Consultant Senior — Finance Islamique & Microfinance",
    "isFounder": false,
    "initials": "TF",
    "bio": "Spécialiste de la finance islamique et de l'assistance technique aux institutions de microfinance. Expert en développement de nouveaux produits agricoles et en études et recherche appliquée au secteur financier.",
    "tags": ["Finance islamique", "Microfinance", "Produits agricoles", "Études & Recherche"],
    "cv": null, "cvStatus": "CV à venir"
  },
  {
    "name": "Mamadou MBENGUE",
    "role": "Consultant Senior — Stratégie & Innovation Digitale",
    "isFounder": false,
    "initials": "MM",
    "bio": "Expert en stratégie d'entreprise et gestion des PME. Spécialiste de la structuration de financements complexes et de l'exploitation des données et de l'intelligence artificielle au service de la performance financière.",
    "tags": ["Stratégie", "Gestion PME", "Structuration financière", "Data & IA"],
    "cv": null, "cvStatus": "CV à venir"
  },
  {
    "name": "Diarry SOW",
    "role": "Experte Seniore — Sécurité & Gestion des Risques",
    "isFounder": false,
    "initials": "DS",
    "bio": "Experte en sécurité active et passive des institutions financières et en gestion des risques opérationnels. Spécialiste du fundraising et de la redevabilité des organisations auprès de leurs bailleurs et partenaires.",
    "tags": ["Sécurité institutionnelle", "Gestion des risques", "Fundraising", "Redevabilité"],
    "cv": null, "cvStatus": "CV à venir"
  }
]
```

---

## 7. Secteurs — « Secteurs Accompagnés »

- **Eyebrow :** `Nos marchés cibles`
- **Titre H2 :** `Secteurs Accompagnés`
- **Intro :**
  > Nous intervenons auprès d'un large spectre d'organisations dans le secteur financier africain et international.

```json
[
  { "label": "Banques commerciales",            "emoji": "🏦", "icon": "landmark" },
  { "label": "Institutions de microfinance (IMF)", "emoji": "🤝", "icon": "users" },
  { "label": "PME & Entreprises",               "emoji": "🏭", "icon": "briefcase" },
  { "label": "Agrobusiness & Finance agricole", "emoji": "🌱", "icon": "wheat" },
  { "label": "Organisations internationales",   "emoji": "🌍", "icon": "globe" },
  { "label": "Fonds d'investissement",          "emoji": "💹", "icon": "trending-up" },
  { "label": "Régulateurs & Banques centrales", "emoji": "🏛️", "icon": "scale" },
  { "label": "Finance verte & Impact",          "emoji": "♻️", "icon": "leaf" }
]
```

---

## 8. Méthode — « Une Approche Structurée en 4 Étapes »

- **Eyebrow :** `Notre méthode`
- **Titre H2 :** `Une Approche Structurée en 4 Étapes`
- **Intro :**
  > Chaque mission suit un processus rigoureux garantissant des livrables de qualité et un impact mesurable.

```json
[
  { "step": "01", "title": "Diagnostic",       "emoji": "🔎", "icon": "search",       "text": "Analyse approfondie de la situation actuelle : état financier, environnement réglementaire, positionnement concurrentiel et enjeux clés." },
  { "step": "02", "title": "Conception",       "emoji": "🗺️", "icon": "pen-tool",     "text": "Élaboration de solutions sur mesure : plan stratégique, dispositif de gestion des risques, produit financier ou programme de formation adapté." },
  { "step": "03", "title": "Mise en œuvre",    "emoji": "⚙️", "icon": "settings",     "text": "Accompagnement opérationnel dans le déploiement : ateliers de travail, renforcement de capacités, suivi-évaluation et ajustements en temps réel." },
  { "step": "04", "title": "Mesure d'impact",  "emoji": "📈", "icon": "bar-chart-3",  "text": "Évaluation des résultats par rapport aux objectifs initiaux, production de rapports et recommandations pour pérenniser les acquis." }
]
```

---

## 9. Contact — « Prêt à transformer votre organisation ? »

- **Eyebrow :** `Travaillons ensemble`
- **Titre H2 :** `Prêt à transformer votre organisation ?`
- **Intro :**
  > Que vous soyez une institution financière cherchant à renforcer sa stratégie, une PME en quête de financement ou une organisation souhaitant former ses équipes, Expertise 360 est votre partenaire de confiance.

**Coordonnées :**

```json
{
  "email_actuel": "contact@expertise360.com",
  "email_corrige": "contact@expert-360.com",
  "localisation": "Dakar, Sénégal · Afrique de l'Ouest",
  "couverture": "Sénégal · Zone UEMOA · International"
}
```
> ⚠️ L'e-mail affiché (`@expertise360.com`) ne correspond pas au domaine (`expert-360.com`). À corriger — voir §13.

**Formulaire — « Demande de consultation » :**

```json
{
  "title": "Demande de consultation",
  "fields": [
    { "name": "nom",          "label": "Prénom & Nom",        "type": "text",     "required": true,  "placeholder": "Jean Dupont" },
    { "name": "organisation", "label": "Organisation",         "type": "text",     "required": false, "placeholder": "Nom de votre institution" },
    { "name": "email",        "label": "Email professionnel",  "type": "email",    "required": true,  "placeholder": "vous@organisation.com" },
    { "name": "type_mission", "label": "Type de mission",      "type": "select",   "required": false, "options": [
        "Plan stratégique de développement",
        "Gestion des risques",
        "Développement de produits financiers",
        "Analyse financière & Due Diligence",
        "Recherche de financement",
        "Formation & Renforcement de capacités",
        "Inclusion financière / Finance verte",
        "Autre"
      ], "placeholder": "Sélectionner un domaine" },
    { "name": "message",      "label": "Votre message",        "type": "textarea", "required": true,  "placeholder": "Décrivez brièvement votre besoin ou projet..." }
  ],
  "submit": "Envoyer la demande →"
}
```

---

## 10. Footer

- **Marque :** `EXPERTISE 360`
- **Tagline :**
  > Cabinet de conseil financier au service du développement des institutions et des entreprises en Afrique.
- **Copyright :** `© 2025 Expertise 360 — Tous droits réservés`
- **Ligne localisation :** `Dakar, Sénégal · Zone UEMOA · International`

```json
{
  "columns": [
    { "title": "Navigation", "links": [
      { "label": "Nos services",   "href": "#services" },
      { "label": "Notre équipe",   "href": "#equipe" },
      { "label": "Secteurs",       "href": "#secteurs" },
      { "label": "Notre approche", "href": "#approche" }
    ]},
    { "title": "Services", "links": [
      { "label": "Plans stratégiques",  "href": "#services" },
      { "label": "Gestion des risques", "href": "#services" },
      { "label": "Produits financiers", "href": "#services" },
      { "label": "Formation & IA",      "href": "#services" }
    ]},
    { "title": "Secteurs", "links": [
      { "label": "Banques & IMF",            "href": "#secteurs" },
      { "label": "PME & Agrobusiness",       "href": "#secteurs" },
      { "label": "Finance verte",            "href": "#secteurs" },
      { "label": "Bailleurs internationaux", "href": "#secteurs" }
    ]},
    { "title": "Contact", "links": [
      { "label": "Demande de mission", "href": "#contact" },
      { "label": "Nous écrire",        "href": "#contact" }
    ]}
  ]
}
```

---

## 11. Assets référencés (à récupérer / recréer)

| Asset | URL actuelle | Note |
|---|---|---|
| Photo fondateur | `https://www.expert-360.com/djibril-mbengue.jpg` | à récupérer / re-shooter en HD |
| CV fondateur (PDF) | `https://www.expert-360.com/cv-djibril-mbengue.pdf` | à récupérer |
| Photos Tamsir / Mamadou / Diarry | — | inexistantes (avatars à initiales) → prévoir shoot (voir proposition) |
| CV Tamsir / Mamadou / Diarry | — | « CV à venir » |
| Favicon / logo vectoriel | — | à créer |

---

## 12. Structure de page (ordre des sections)

1. Header (nav sticky) + logo
2. Hero (`#accueil` / haut de page)
3. Barre de statistiques
4. Services — `#services`
5. Valeur ajoutée + carte fondateur — `#expertise`
6. Équipe — `#equipe`
7. Secteurs — `#secteurs`
8. Méthode — `#approche`
9. Contact (coordonnées + formulaire) — `#contact`
10. Footer

---

## 13. Notes de reconstruction (correctifs à intégrer)

Ces points reprennent l'audit — à corriger *pendant* la reconstruction :

1. **Formulaire fonctionnel.** Câbler le formulaire à un vrai backend. Sur ton stack : une route/Server Action Next.js qui insère dans une table Supabase `leads` (nom, organisation, email, type_mission, message, created_at), + notification e-mail (Resend ou équivalent). Champs avec `name`, `id`, `label` associés, `required`, et états succès/erreur à l'écran.
2. **Accessibilité du formulaire.** Labels associés (`for`/`id`), `aria-required`, focus visible — ne pas utiliser les placeholders comme labels.
3. **SEO / métadonnées.** Ajouter `meta description`, Open Graph + Twitter cards, favicon, `canonical`, et un JSON-LD `FinancialService` (nom, Dakar/SN, fondateur). Proposition de description : *« Expertise 360, cabinet de conseil financier à Dakar : stratégie, gestion du risque, financement et formation pour banques, IMF, PME et organisations de développement. »*
4. **Navigation mobile.** Menu hamburger accessible (`aria-expanded`, fermeture Échap), et corriger le débordement du titre hero (`clamp()` + `overflow-wrap`).
5. **E-mail ↔ domaine.** Remplacer `contact@expertise360.com` par `contact@expert-360.com` (ou sécuriser le domaine `expertise360.com`).
6. **Palette.** Ramener toute la page sur navy + or ; supprimer les couleurs parasites (teal, bleu, violet) présentes sur les eyebrows, les puces ✓ et les avatars d'équipe.
7. **Icônes.** Remplacer tous les emojis par un jeu Lucide homogène (mapping fourni dans chaque section : champ `icon`).
8. **Équipe.** Traitement d'avatar unique et cohérent ; le badge « Fondateur » reste le seul marqueur de rang (pas d'anneau or sur un autre profil).
9. **Typographie.** Sortir de la police système : titres *Fraunces*, corps *Inter* (ou *Spectral* + *Source Sans 3*).
10. **Contraste.** Relever le gris clair sur navy au niveau AA.
11. **Socle technique.** Repo Git + déploiement continu (Vercel s'intègre nativement à ton stack Next.js).
12. **Marque.** Toujours afficher « Expertise 360 » (jamais « Expert 360 ») pour se distinguer de l'australien expert360.com.

---

*Contenu extrait de expert-360.com — prêt à alimenter la reconstruction (composants + seed Supabase).*
