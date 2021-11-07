# SMART on FHIR Physiotherapy LOINC Forms

SMART on FHIR Physiotherapy LOINC Forms App is a project that digitises LOINC forms
and physiotherapy workflows via a custom SMART on FHIR app and is designed to take
advantage of the capabilities digital tech provides beyond simple form recreation.

# Team We're on FHIR

We are a project team formed in the 2021 offering of COMP3820 Digital Health at
The University of Queensland. Our team comprises skills in both UX and Development:

- Finn Beardmore (finnbutler)
- Jameson Nguyen (JNRuan)
- Yilin Su (suylyus)

# Setup

## Requirements

This app is built with ReactJS and requires:

- Nodejs (LTS 14+)
- If React error occurs 'Cannot find typescript' try the following command: npm i -D @types/node typescript ts-node

## How to setup the App

1. Clone this repo
2. In the root directory of this repo run `npm i` to install packages
3. `npm start` to run react app, by default on `localhost:3000` (Note that app will reload on code changes, but failing this you can terminate and restart app)

## On smarthealthit sandbox server

Please note that you have to post a Questionnaire Resource to the sandbox server first,
and update the FhirResources.sandboxQLoincPhysioFormId value to the new resource id.

This will not be an issue when this app is no longer living on a sandbox server.

# Development

## Merge Policy

### Branch off `develop` branch

- Suggested branch naming: `feature/short-feature-desc-devname` or `fix/short-bug-desc-devname`
- When code is finished and tested, make a pull request (PR), or merge request (MR) if you prefer, with details of feature (or even screenshots) into develop branch.
- When code is code reviewed by another developer and any changes made, reviewer can approve for merger into `develop` branch.
- **Tip**: It is a good idea to use `git pull origin develop` to pull develop branch into your feature branch for latest development code or to fix merge conflicts prior to PR/MR.

### Mergers into `main` branch

- Code in `develop` will be merged into `main` branch weekly if required, or when demoes of stable code is needed.

## ESlint and Prettier for VSCode

This project can use ESLint for linting, and Prettier for code formatting.

First install eslint and prettier VSCode extensions.

In VSCode recommend the following in your settings.json:

```
// Sets Prettier as default and format on save.
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true,

// Auto tab selection:
"editor.tabSize": 4,
"[javascript]": {
    "editor.tabSize": 2
},
"[json]": {
    "editor.tabSize": 2
},
// Tab to be spaces
"editor.insertSpaces": true,
```

To lint in cmd line use `npm run lint`.

## React Naming Conventions

When naming files for `Components`, use PascalCase. For example, a service would be called `someService.js` whereas a form component might be called `SomeUniqueForm.js`.

## App structure

Proposed app structure.

```
app/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ common/
│  │  ├─ constants/
│  │  ├─ theme/
│  │  ├─ utils/
│  ├─ components/
│  │  ├─ ...component/
│  ├─ features/
│  │  ├─ ...features/
│  ├─ redux/
│  │  ├─ slices/
│  ├─ router/
│  ├─ services/
│  ├─ App.js
│  ├─ index.js
```

**assets**: Assets for this app, e.g., images.

**common**: Holds all common functionality that is shared throughout the app, excluding shared components.

**components**: Shared reusable 'dumb' components that merely take in parameters as props to be rendered as part of larger components and features. Each component can have its own .js and .css file as needed. Components can be grouped based on functionality where logical.

**features**: This name can change, other names include containers, view, screens, etc. Encompasses unique features that make up the app. Each feature can have its own .js, .css, constants, etc, as needed. Features are housed in their own internal folders.

**Redux**: Redux state management and store for state. Slices contains the state slice and building blocks of each logical state required in the app that can be used throughout the app without mutation within the component hierarchy.

**Router**: Holds all app router related functionality.

**Services**: Should hold all service and/or api related modules that deal with retrieving data, parsing data, and small bits of logic.

**App.js** The entry point to react apps.

**index.js** The root of the app.
