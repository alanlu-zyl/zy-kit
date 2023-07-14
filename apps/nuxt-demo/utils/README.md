# Utils Directory

Nuxt 3 uses the [`utils/` directory](https://nuxt.com/docs/guide/directory-structure/utils) to automatically import helper functions and other utilities throughout your application using [auto-imports](https://nuxt.com/docs/guide/concepts/auto-imports)!

::alert{type=info}
The main purpose of the [`utils/` directory](https://nuxt.com/docs/guide/directory-structure/utils) is to allow a semantic distinction between your Vue composables and other auto-imported utility functions.

The way `utils/` auto-imports work and are scanned is identical to [the composables/ directory](https://nuxt.com/docs/guide/directory-structure/composables). You can see examples and more information about how they work in that section of the docs.
::

::alert{type=info}
These utils are only available within the Vue part of your app. Within the [server directory](https://nuxt.com/docs/guide/directory-structure/server#server-utilities), we auto import exported functions and variables from `~/server/utils` instead.
::
