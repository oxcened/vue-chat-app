# Vue Chat App

[![medium story](https://img.shields.io/badge/Medium-Story-%23000?logo=medium)](https://medium.com/@alen.ajam/building-a-simple-chat-app-with-vue-js-462c4a53c6ad)
[![repository license](https://img.shields.io/github/license/oxcened/vue-chat-app)](https://github.com/oxcened/vue-chat-app/blob/master/LICENSE.md)

A simple chat app which illustrates all the fundamentals of Vue.js.

Read the companion story on [Medium](https://medium.com/@alen.ajam/building-a-simple-chat-app-with-vue-js-462c4a53c6ad).

## Table of contents

1. [Run on your machine](#run-on-your-machine)
1. [Build for production](#build-for-production)
1. [Maintainers](#maintainers)
1. [License](#license)

## Run on your machine

1. Install dependencies

    ```
    yarn
    ```

1. Setup firebase
    1. This app is meant to work on top of a [Firebase](https://firebase.google.com/) project, so you should create your
       own.
    1. Initialize [Firestore](https://firebase.google.com/docs/firestore/quickstart).
    1. [Obtain the project config object](https://firebase.google.com/docs/web/learn-more#config-object).
    1. Create an `.env` file in the root of the project. Learn more [here](https://cli.vuejs.org/guide/mode-and-env.html#environment-variables).
    1. Place inside of it the config object like in `.env.example`.
    1. Create a `.firebaserc` file in the root of the project like `.firebaserc.example`.

1. Run the app
    ```
    yarn serve
    ```

## Build for production

1. Setup environment

   The same as the third step of [Run on your machine](#run-on-your-machine) applies. Learn
   more [here](https://cli.vuejs.org/guide/mode-and-env.html#environment-variables).

1. Build the app
    ```
    yarn build
    ```
    
## Maintainers

- [oxcened](https://github.com/oxcened)

## License

This project is [MIT licensed](https://github.com/oxcened/vue-chat-app/blob/master/LICENSE.md).
