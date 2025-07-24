# MKGBOX - NextJS 14 - Boilerplate

Ceci est un boilerplate NextJS pour marketingbox, elle contient toutes les configurations nécessaires pour un projet NextJS 14. Voici les technologies utilisées :

- [NextJS](https://nextjs.org/) pour le framework
- [TypeScript](https://www.typescriptlang.org/) pour le typage
- [ESLint](https://eslint.org/) pour le linter
- [TailwindCSS](https://tailwindcss.com/) pour le framework CSS
- [Framer Motion](https://www.framer.com/motion/) pour les animations

## Démarrer le projet

1. Cloner le projet `git clone https://gitlab.com/marketingbox/boilerplates/nextjs-14-boilerplate.git`
2. Installer les dépendances avec `pnpm install`
3. Lancer le projet en local avec `pnpm dev`

## Mettre en place l'environnement de STAGING

Par défaut, le projet est configuré pour utiliser l'environnement de staging. Cependant, vous devrez créer une branche `staging` et bien faire attention à ne pas supprimer le fichier `vercel.json` sur le branche `staging`.

## Mettre en place l'environnement de PRODUCTION

Pour mettre en place l'environnement de production, sur la branche `main`, vous devez supprimer le fichier `vercel.json` et mettre à jour les variables d'environnement dans votre déploiement Vercel : `NEXT_PUBLIC_ENV=production`.

## Activer la CI/CD

1. Renommez le fichier `template.gitlab-ci.yml` en `.gitlab-ci.yml` à la racine de votre projet :
   ```bash
   mv template.gitlab-ci.yml .gitlab-ci.yml
   ```
2. Configurez les variables CI/CD dans GitLab en modifiant (CUSTOMER) par le nom du client :
   - CUSTOMER_FTP_USERNAME (utilisateur FTP)
   - CUSTOMER_FTP_PASSWORD (mot de passe FTP)
   - CUSTOMER_FTP_HOST (adresse FTP)

## Structure

```
app/
 (home)/
  page.tsx
 layout.tsx
 global.css
components/
  common/
   index.ts
  index.ts
containers/
  common/
   Button.tsx
   CustomHead.tsx
   Section.tsx
   index.ts
  index.ts
 data/
 hooks/
 layouts/
  Footer.tsx
  Header.tsx
  index.ts
 libs/
  fonts.ts
 types/
  index.ts
 public/
  assets/
   images/
   icons/
   fonts/
  favicon.ico

```

- `public/` : Contiens toutes les ressources statiques ( images, fonts, etc. )
- `app/` : Contiens toutes les pages du projet
- `components/` : Contiens toutes les composants ( common, etc. )
- `containers/` : Contiens toutes les sections du projet
- `data/` : Contiens toutes les données statiques ( common, etc. )
- `hooks/` : Contiens toutes les hooks
- `layouts/` : Contiens toutes les layouts ( Header, Footer )
- `libs/` : Contiens toutes les librairies ( fonts, etc. )
- `types/` : Contiens toutes les types globaux
