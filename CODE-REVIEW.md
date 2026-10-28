# Rapport d'analyse du code

**Projet :** `SAULNIER_Simon_Portefolio`  
**Stack observée :** Nuxt 4, Vue 3, TypeScript, Nuxt UI, Tailwind CSS 4  
**Périmètre :** configuration, CI, composants, pages, styles, assets et dépendances suivis par Git.

## Synthèse exécutive

Le projet est un portfolio Nuxt statique, lisible et bien adapté à une présentation personnelle : le routage par fichiers est simple, Nuxt UI fournit une base cohérente de composants et les pages de compétences sont accessibles directement par URL. En revanche, le code est actuellement difficile à faire évoluer : les six pages de compétences répètent le même rendu, les données sont mélangées aux templates et le CV est copié dans `cv.vue` et `contact.vue`.

Le dépôt n'est pas dans un état de qualité automatisée acceptable : `npm run typecheck` échoue sur les types de traces et les couleurs Nuxt UI ; `npm run lint` retourne **737 erreurs et 229 avertissements sur 15 fichiers**. Une ressource référencée est aussi absente : `app/pages/competence/developper.vue:97` utilise `/img/dev/2-3-mvc.png`, mais ce fichier n'existe pas dans `public/img/dev`.

## 1. Bilan architectural

### Structure actuelle

```text
app/
├── app.vue                 # shell global : header, footer, SEO global
├── app.config.ts           # thème Nuxt UI
├── components/
│   ├── AppLogo.vue         # composant non utilisé
│   └── TemplateMenu.vue    # navigation principale
├── pages/
│   ├── index.vue           # accueil
│   ├── cv.vue
│   ├── contact.vue
│   └── competence/*.vue    # six pages presque isomorphes
└── assets/css/main.css
public/img/                 # preuves visuelles et audio
```

### Pertinence

La séparation Nuxt `app/`, `components/` et `pages/` est pertinente pour un portfolio sans backend métier. Les données sont statiques, donc leur présence côté client n'est pas un problème de confidentialité en soi. Le choix de `public/img` est également adapté aux chemins `/img/...` utilisés dans les templates.

Les principaux écarts architecturaux sont :

- Le module `@nuxt/content`, la base `.data/content/contents.sqlite` et `better-sqlite3` sont présents, mais aucune page n'utilise le contenu Nuxt. Cela ajoute du poids et une étape de génération sans bénéfice visible.
- Le rendu des cartes de compétences est répété six fois, avec les mêmes blocs conditionnels image/audio et le même pied de navigation.
- Les données de CV sont dupliquées intégralement dans `cv.vue` et `contact.vue`, ce qui rend toute correction de date, d'orthographe ou de stack incohérente entre les deux pages.
- `AppLogo.vue` et le dossier `app/assets/img` semblent être des reliquats du starter ou d'une ancienne implémentation ; l'application utilise actuellement du texte dans le header et des assets `public/`.
- `arboresence.md` est obsolescent : il ne contient pas `contact.vue`, plusieurs images actuellement présentes dans `public/`, ni l'état réel des dossiers.

## 2. Dettes techniques et solutions

### 2.1 Typecheck bloqué par les unions de traces

Les objets `traces` sont inférés séparément. Une trace avec seulement `texte` produit donc une union où `image` et `alt` n'existent pas, alors que le template les lit dans plusieurs pages. Exemple concerné : `app/pages/competence/developper.vue:97-188`.

```ts
// État actuel : les propriétés optionnelles ne sont pas déclarées comme telles.
traces: [
  { texte: '...', image: '/img/dev/1-1.png', alt: '...' },
  { texte: '...' }
]
```

Créer un type partagé et typer les tableaux :

```ts
// app/types/portfolio.ts
export interface Trace {
  texte: string
  image?: string
  alt?: string
  audio?: string
}

export interface AcItem {
  id: string
  titre: string
  description: string
  icon: string
  traces: Trace[]
}
```

```ts
// dans chaque page de compétence
import type { AcItem } from '~/types/portfolio'

const acNiveau1: AcItem[] = [
  {
    id: 'AC1',
    titre: '...',
    description: '...',
    icon: 'i-heroicons-...',
    traces: [{ texte: '...' }]
  }
]
```

Cette correction supprime les erreurs `TS2339` tout en conservant le rendu conditionnel existant.

### 2.2 API Nuxt UI incorrecte pour la couleur `gray`

`app/pages/cv.vue:141-143,189` et `app/pages/contact.vue:141-143,189` utilisent `color="gray"`. Nuxt UI 4 attend notamment `neutral`, ce qui provoque `TS2322`.

```vue
<!-- À corriger dans cv.vue et contact.vue -->
<UBadge color="neutral" variant="solid" icon="i-heroicons-phone">
  {{ contact.telephone }}
</UBadge>
```

Le même remplacement doit être appliqué au badge des hobbies. Une fois les types corrigés, `npm run typecheck` devrait pouvoir valider les templates.

### 2.3 Référence d'asset cassée

`app/pages/competence/developper.vue:97` référence :

```ts
image: '/img/dev/2-3-mvc.png'
```

Or `public/img/dev/2-3-mvc.png` est absent. Il faut soit ajouter l'image sous ce nom, soit corriger le chemin vers un fichier existant. Une référence cassée dégrade directement la preuve affichée et ne déclenche pas nécessairement une erreur TypeScript.

### 2.4 Duplication complète du CV

`app/pages/contact.vue` et `app/pages/cv.vue` contiennent les mêmes constantes `contact`, `competences`, `stackTechnique`, `stages`, `projets`, `experiences`, `benevolat`, `diplomes`, `langues` et `hobbys`. Cette duplication est une source de divergence silencieuse.

Extraire les données dans un composable ou, pour des données immuables, dans un module :

```ts
// app/data/cv.ts
export const cvData = {
  contact: {
    nom: 'SAULNIER SIMON',
    recherche: 'STAGE INFORMATIQUE',
    formation: 'BUT INFO 3ème année - Saint-Dié-des-Vosges',
    telephone: '06 08 13 44 05',
    email: 'simonsaulnier40@gmail.com',
    localisation: 'Saint-Dié-des-Vosges, 88100'
  },
  competences: ['Backend', 'Frontend', 'Dev d’application'],
  // stackTechnique, stages, projets, expériences, bénévolat, diplômes, langues, hobbies
} as const
```

```ts
// cv.vue et contact.vue
import { cvData } from '~/data/cv'
const { contact, competences, ...sections } = cvData
```

La page contact peut ensuite présenter un résumé ou réutiliser un composant `CvSection`, sans recopier les données.

### 2.5 Composants de compétence mal isolés

Chaque page répète deux grilles `UCard`, la boucle des traces et la navigation précédente/suivante. Les seules différences sont les données, le titre, l'introduction et les liens.

Extraire un composant générique :

```vue
<!-- app/components/CompetenceLevel.vue -->
<script setup lang="ts">
import type { AcItem } from '~/types/portfolio'

defineProps<{
  title: string
  items: AcItem[]
}>()
</script>

<template>
  <section class="flex flex-col gap-6">
    <h2 class="text-2xl font-semibold text-secondaire">{{ title }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <UCard v-for="item in items" :key="item.id" class="bg-fond/50 border border-primaire/20">
        <template #header>
          <div class="flex items-center gap-3">
            <UIcon :name="item.icon" class="w-6 h-6 text-primaire" />
            <h3 class="font-bold text-lg text-texte">{{ item.id }} - {{ item.titre }}</h3>
          </div>
        </template>
        <p class="text-sm text-texte/80">{{ item.description }}</p>
        <div v-for="(trace, index) in item.traces" :key="`${item.id}-${index}`">
          <p>{{ trace.texte }}</p>
          <audio v-if="trace.audio" controls :src="trace.audio" />
          <img v-if="trace.image" :src="trace.image" :alt="trace.alt ?? ''" />
        </div>
      </UCard>
    </div>
  </section>
</template>
```

Le parent ne garderait alors que les données et réduirait fortement le risque de corriger un comportement dans cinq fichiers au lieu d'un seul.

### 2.6 Qualité statique et formatage

Le lint est bloqué par un volume important de règles de formatage Vue : espaces en fin de ligne, lignes vides dans les tags, attributs trop nombreux sur une ligne et formatage incohérent. Le volume est amplifié par les pages dupliquées. Il faut d'abord factoriser les composants, puis lancer le formatage ESLint sur le périmètre applicatif ; corriger manuellement les erreurs métier avant d'accepter le pipeline.

Exemple de commande existante :

```bash
npm run lint
```

La CI utilise pourtant `pnpm install`, alors que le dépôt suivi contient `package-lock.json` et aucun `pnpm-lock.yaml`. Il faut choisir un seul gestionnaire et aligner `packageManager`, le lockfile, la documentation et la CI. Pour conserver la CI actuelle, le choix cohérent est de versionner `pnpm-lock.yaml` et d'utiliser `pnpm` localement.

### 2.7 Configuration et contenu inutilisés

`@nuxt/content` est activé sans collection ni contenu consommé ; le typecheck signale d'ailleurs l'absence de configuration de contenu. Deux options propres :

```ts
// nuxt.config.ts : si le portfolio reste purement statique
modules: [
  '@nuxt/eslint',
  '@nuxt/ui',
  '@nuxt/image'
]
```

Ou bien créer une vraie collection `content.config.ts` et déplacer les données éditoriales dans `content/`. Pour ce projet, la suppression du module est probablement la solution la plus simple tant qu'aucun contenu Markdown n'est rendu.

### 2.8 Accessibilité, SEO et liens

Les images sont généralement dotées d'un `alt`, mais `trace.alt` devrait être rendu explicitement obligatoire lorsque `image` est présent. Le template global fournit un SEO unique ; les pages de compétences et le CV ne définissent pas de titre ou description spécifiques. Ajouter un `useSeoMeta` par page améliore le partage et l'indexation.

Les coordonnées du CV sont affichées comme du texte. Si elles sont destinées à être actionnables, utiliser des liens explicites :

```vue
<a :href="`tel:${contact.telephone.replaceAll(' ', '')}`">
  {{ contact.telephone }}
</a>
<a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
```

Les cartes de traces utilisent `:key="index"` dans les six pages. Une clé stable basée sur l'item et l'index (`${ac.id}-${index}`) est préférable si les traces sont réordonnées.

## 3. Raccourcis et optimisations

1. **Centraliser le modèle de données.** Mettre les six compétences dans `app/data/competences.ts`, le CV dans `app/data/cv.ts`, puis créer une page ou un composant de rendu commun. Cela réduit le code, facilite la relecture et permet d'ajouter une compétence sans dupliquer 150 lignes de template.
2. **Créer un composable de navigation.** Les libellés et routes « précédent/suivant » sont répétés dans chaque page. Un tableau ordonné `competenceNavigation` et un composable `useCompetenceNavigation(currentSlug)` peuvent calculer les deux liens sans copier les routes.
3. **Utiliser `NuxtImg` pour les images.** Le module `@nuxt/image` est installé mais les pages utilisent `<img>`. Remplacer les images de preuve par `<NuxtImg>` avec `width`, `height`, `loading="lazy"` et `format="webp"` peut réduire le poids et limiter le layout shift.
4. **Supprimer les reliquats.** Retirer `AppLogo.vue`, les assets non référencés et les dépendances/modules réellement inutilisés après vérification. Cela réduit le bundle mental et le temps de génération.
5. **Pré-rendre les routes publiques.** La règle actuelle ne pré-rend que `/`. Pour un portfolio statique, ajouter les pages publiques aux `routeRules` ou définir un rendu statique adapté au déploiement Vercel, afin que les pages de compétences ne dépendent pas d'un fallback serveur.

## 4. Prochaines étapes prioritaires

### 1. Rétablir le pipeline de qualité

Corriger les types `Trace`, remplacer `gray` par `neutral`, réparer l'asset MVC manquant, puis réduire les erreurs ESLint. Objectif : `npm run typecheck` sans erreur et `npm run lint` sans erreur bloquante.

### 2. Factoriser le rendu et les données

Créer `app/types/portfolio.ts`, `app/data/cv.ts`, `app/data/competences.ts`, puis extraire `CompetenceLevel` et le rendu d'une trace. Supprimer la copie de CV de `contact.vue` et conserver une seule source de vérité.

### 3. Aligner la chaîne de livraison

Choisir npm ou pnpm, versionner le lockfile correspondant et modifier la CI pour employer exactement le même outil. Dans le même passage, retirer `@nuxt/content`/`better-sqlite3` si aucun contenu dynamique n'est prévu, ou documenter et configurer leur usage.

## Annexe : constats vérifiables

| Contrôle | Résultat |
|---|---|
| `npm run typecheck` | Échec : propriétés optionnelles des traces et `color="gray"` |
| `npm run lint` | 737 erreurs, 229 avertissements |
| Asset `/img/dev/2-3-mvc.png` | Absent |
| Pages de compétence | 6 pages avec structure de rendu largement dupliquée |
| Données CV | Dupliquées dans `cv.vue` et `contact.vue` |
| CI / gestionnaire | CI en pnpm, lockfile suivi en npm |
