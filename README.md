# Next + Netlify Starter

[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/LoneRifle/next-netlify-starter)
![Build](https://github.com/LoneRifle/next-netlify-starter/actions/workflows/build.yml/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/35424851-768d-49bc-8b2a-c76731b49d3a/deploy-status)](https://app.netlify.com/sites/next-netlify-starter-lonerifle/deploys)

This is a [Next.js](https://nextjs.org/) v12 project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and set up to be instantly deployed to [Netlify](https://url.netlify.com/SyTBPVamO)!

This project is a very minimal starter that includes 2 sample components, a global stylesheet, a `netlify.toml` for deployment, and a `jsconfig.json` for setting up absolute imports and aliases. It also includes the [Essential Next.js Build Plugin](https://github.com/netlify/netlify-plugin-nextjs), which will allow for you to implement features like Preview Mode, server-side rendering/incremental static regeneration via Netlify Functions, and internationalized routing.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/LoneRifle/next-netlify-starter&utm_source=github&utm_medium=nextstarter-cs&utm_campaign=devex-cs)

(If you click this button, it will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify)

## Table of Contents:

- [Getting Started](#getting-started)
- [Installation options](#installation-options)
- [Testing](#testing)
  - [Included Default Testing](#included-default-testing)
  - [Removing Dependabot](#removing-Dependabot)
  - [Removing Cypress](#removing-cypress)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

### Installation

1. Create a new repo using this repo as a template
2. Go to repo settings
3. Under general, enable auto-merge
4. Under branches, create a branch protection rule for the default branch that
   requires the `test-cypress / main` statuses to pass before merging
5. Connect to [Netlify](https://url.netlify.com/Bk4UicocL) manually (the `netlify.toml` file is the one you'll need to make sure stays intact to make sure the export is done and pointed to the right stuff)
6. _Disable_ deploys in the created Netlify site, as you will use `.github/workflows/deploy-netlify.yml` instead
7. Stash repo secrets under repo settings -> Secrets
  - `NETLIFY_AUTH_TOKEN` - In Netlify, under User settings -> Applications, create a personal access token
  - `NETLIFY_SITE_ID` - Obtained from Site settings -> Site details

## Testing

### Included Default Testing

We’ve included some tooling that helps us maintain these templates. This template currently uses:

- [Dependabot](https://github.com/dependabot) - to regularly update our dependencies
- [Cypress](https://www.cypress.io/) - to run tests against how the template runs in the browser
- [Cypress Netlify Build Plugin](https://github.com/cypress-io/netlify-plugin-cypress) - to run our tests during our build process

If your team is not interested in this tooling, you can remove them with ease!

### Removing Dependabot

In order to keep our project up-to-date with dependencies we use a tool called [Dependabot](https://github.com/dependabot). If you’re not interested in this tooling, delete the `.github/workflows/approve-merge-deps.yml` and `.github/dependabot.yml` files and commit that onto your main branch.

### Removing Cypress

For our testing, we use [Cypress](https://www.cypress.io/) for end-to-end testing. This makes sure that we can validate that our templates are rendering and displaying as we’d expect. 

If you’d like to remove Cypress entirely, delete the entire `cypress` folder and the `cypress.config.ts` file. Then remove the dependency using:

```bash
npm uninstall -S cypress
```
