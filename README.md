# Web app for IdéSYS

> IdéSYS Nuxt.js webapp for ERP

This is a nuxt project.
It uses the vue.js javascript framework and the nuxt SSR library.

sudo apt install npm
npm install -g npx
npx create-nuxt-app idesys-webapp

Options chosen:
- Typescript
- yarn
- Vuetify front-end framework
- axios
- PWA
- ESLint
- Prettier
- Jest test framework
- SSR

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ export BASE_API_URL=http://127.0.0.1:3001/
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## TODO

 - improve error handling: notification
 - restrict access to authenticated user
 - store token in a cookie to keep logged in when F5 (refresh the page)



# IdéSYS-ERP

This project is under development.

## Setup Google API

 - go in the google cloud platform
 - create a project
 - create a service account
 - download the keys
 - enable domain-wide delegation
 - code:
  - get the delegated credentials
  - make the API call
 - Enable GDrive API at https://console.developers.google.com/apis/api/drive.googleapis.com/overview


### POC

Step 1: use the python google api library and domain wide delegation to access google api

Step 2: use the http method (with JWT) to facilitate the change of programming language.

## TODO

 - register and login into IdéSYS-ERP webapp with a google account
