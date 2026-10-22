# Study in Ukraine — Mobile App (Ionic / Cordova)

Arabic-language companion app for a study-abroad information service: university listings, admission procedures, services, study prices and specialties, photo galleries and a contact page.

> Built late 2017 / early 2018 with Ionic 3 + Cordova and shipped for Android (iOS build configuration also present). Published here as portfolio code.

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | Ionic **3.9.2** (`ionic-angular`) |
| Underlying framework | Angular **5.0.1**, TypeScript **2.4.2** |
| Packaging | Cordova — `cordova-android` 6.3.0, `cordova-ios` 4.5.4, `cordova-browser` 5.0.1 |
| Native plugins | camera, image picker, email composer, webview, splash screen, keyboard, whitelist, device |
| UI helpers | `ionic-img-viewer`, ionicons 3.0.0, Bootstrap 4 (beta) |
| Data | No backend — content is bundled in the app; `@ionic/storage` available for local storage |

## Features

- Side-menu navigation with nine pages: home, tourism, registration list, our services, important information, universities, prices & specialties, photos, contact us.
- RTL (Arabic) layout and localized UI strings.
- Image gallery with full-screen viewer (`ionic-img-viewer`).
- Camera / image-picker integration for photo uploads.
- Email composer for direct enquiry from the app.
- Splash screen and status-bar handling for a native feel.

## Project structure

```
src/app/            app module, component, navigation config
src/pages/          home, tourism, list, our-service, informations,
                    universites, prices-and-specialites, photos, contact-us
src/theme/          global SCSS
config.xml          Cordova app definition (name, plugins, permissions)
ionic.config.json   Ionic CLI project config
www/                compiled output (generated — not committed)
platforms/, plugins/ Cordova build artifacts (generated — not committed)
```

## Getting started locally

The project targets the legacy Ionic 3 toolchain; a matching Node version is required.

```bash
npm install
npm run ionic:serve          # dev server
npm run ionic:build          # production build
cordova run android         # after `ionic build` and installing the Cordova CLI
```

## Development timeline (estimated)

Scaffold created **16 November 2017**, first Cordova configuration **22 November 2017**, dependency lock **28 November 2017**, Android build artifacts **8 January 2018**. No Git history exists, so these come from file timestamps and package versions. Confidence: high for the Nov 2017 – Jan 2018 window.

## Notes & limitations

- Ionic 3 / Angular 5 are end-of-life; this is legacy code preserved as evidence of the project.
- The repository excludes build output (`www/`, `platforms/`, `plugins/`, `.sourcemaps/`) and `node_modules`.
- Phone numbers and e-mail addresses in `src/pages/contact-us/` are replaced with `[phone hidden]` / `[email hidden]` placeholders for publication.

## License

MIT — see [LICENSE](LICENSE). The code is released under MIT; third-party assets (client product photos, fonts, brand imagery) are not covered by this license and belong to their respective owners.
