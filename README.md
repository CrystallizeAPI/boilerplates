# Crystallize Legacy Boilerplates

Here are managed all the Legacy, one shot made Crystallize Boilerplates.

There is another mono repository with up-to-date, state of the art boilerplates here: https://github.com/CrystallizeAPI/superfast-boilerplates 

---

In order to simplify their maintenance they are all in this Git Repository.

All contributions will happen here:
- PRs and Issues are therefore open, discuss, contribute in one place
- Many things will be shared accross the `components`: Coding Standards, CI & Automations, Tests, etc.

✅ Nevertheless, all the `components` (here boilerplates) will continue to be independant and pushed in their own repository. (through magic mechanisms that we have internally)

## Managed Repositories

| Boilerplates | Licence(s) |
| ------------ | ---------- |
| [Service API - KOAJS (WiP)](https://github.com/CrystallizeAPI/service-api-koajs) | ![MIT] |
| [Next JS](https://github.com/CrystallizeAPI/crystallize-nextjs-boilerplate) | ![MIT] |
| [Remix Boilerplate](https://github.com/CrystallizeAPI/product-storytelling-examples) | ![MIT] |
| [Conference](https://github.com/CrystallizeAPI/conference-boilerplate) | ![MIT] |
| [Content Commerce](https://github.com/CrystallizeAPI/content-commerce-boilerplate) | ![MIT] |
| [Service API](https://github.com/CrystallizeAPI/service-api-boilerplate) | ![MIT] |
| [Nuxt JS](https://github.com/CrystallizeAPI/crystallize-nuxtjs-boilerplate) | ![MIT] |
| [Gatsby](https://github.com/CrystallizeAPI/crystallize-gatsby-boilerplate) | ![MIT] |
| [SaaS](https://github.com/CrystallizeAPI/crystallize-saas-boilerplate) | ![MIT] |
| [React Native](https://github.com/CrystallizeAPI/crystallize-react-native-boilerplate) | ![MIT] |
| [Flutter](https://github.com/CrystallizeAPI/crystallize-flutter-boilerplate) | ![MIT] |
| [Astro](https://github.com/CrystallizeAPI/dounut-astro) | ![MIT] |
| [Svelte](https://github.com/CrystallizeAPI/dounut-svelte) | ![MIT] |
| [Product Configurator](https://github.com/CrystallizeAPI/product-configurator) | ![MIT] |

## Contributions

- Pull Requests and Issues should start with `[$COMPONENT_NAME]`

### Adding a new Component (Boilerplate)

```bash
make add-component COMPONENT=my-new-component
```

> If not already done, you still need create the Github sub-repository and add an entry in `components/manifest.json`


[MIT]: https://img.shields.io/badge/license-MIT-green?style=flat-square&labelColor=black
