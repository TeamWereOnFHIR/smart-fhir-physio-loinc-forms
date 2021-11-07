# SMART on FHIR Physiotherapy LOINC Forms

SMART on FHIR Physiotherapy LOINC Forms App is a project that digitises LOINC forms
and physiotherapy workflows via a custom SMART on FHIR app and is designed to take
advantage of the capabilities digital tech provides beyond simple form recreation.

The app currently uses the [Physical therapy initial visit form](https://forms.loinc.org/76453-0) [1], [2]
from the [Loinc](https://loinc.org) standard [3].

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

## Smarthealthit sandbox server setup

**Temporary Notice**

We are urrently setup to launch on the [SmartHealthIt](https://smarthealthit.org/) FHIR Sandbox (Server endpoint url: `https://r4.smarthealthit.org`).
Therefore the app will require manual posting of the `Questionnaire` FHIR Resource
for the loinc form provided by [LHC Forms](https://lhcforms.nlm.nih.gov/lhcforms) [4], this is provided under `src/assets/fhir`.

Once the resource is in the FHIR Server, update the `FhirResources.sandboxQLoincPhysioFormId` value in `src/services/constants` to the new resource id.
This will not be required when this app is setup on a standalone FHIR server that does not clean up/remove new resources.
In that case `FhirServiceConstants` under `src/services/constants` can be updated for a new FHIR server.

# Tech/Libraries used

**ReactJs**: [https://reactjs.org/](https://reactjs.org/)

**Formik**: [https://formik.org/](https://formik.org/)

**Redux**: [https://redux.js.org/](https://redux.js.org/)

**Redux Toolkit**: [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)

**Smart on FHIR JS Client**: [http://docs.smarthealthit.org/client-js/](http://docs.smarthealthit.org/client-js/)

**TailwindCSS**: [https://tailwindcss.com/](https://tailwindcss.com/)

## Additional assets used

**Loading Indcator**: Loading indicator code customised from original created by [wadday](https://tailwindcomponents.com/component/animated-ellipsis) [5].

# Development

Development reference for the dev team.

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

# References

[1] LOINC, _LHC Forms Demo - 76453-0 - Physical therapy initial visit panel_, Regenstrief Institute Inc, 2021, [Online], Available: [https://forms.loinc.org/76453-0](https://forms.loinc.org/76453-0)

[2] LOINC, _76453-0 - Physical therapy initial visit panel_, Regenstrief Institute Inc, 2021, [Online], Available: [https://loinc.org/76453-0/](https://loinc.org/76453-0/)

[3] LOINC, _LOINC from Regenstrief_, Regenstrief Institute Inc, 2021, [Online], Available: [https://loinc.org/](https://loinc.org/)

[4] LHNCBC, _LHC Fhir Tools_, National Library of Medicine, 2021, [Online], Available: [https://lhcforms.nlm.nih.gov/lhcforms](https://lhcforms.nlm.nih.gov/lhcforms)

[5] wadday, _Animated ellipsis by wadday | Widget_, tailwindcomponents, 2021, [Online], Available: [https://tailwindcomponents.com/component/animated-ellipsis](https://tailwindcomponents.com/component/animated-ellipsis)
