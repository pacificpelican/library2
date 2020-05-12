# The Library of Progress

*a tool for knowledge diffusion*

*copyright 2020 by [Daniel J McKeown](https://danieljmckeown.com)*

## What it does

- upload files (preferably epubs and pdfs) which will go to the /public/uploads directory
- meta-data about the post is saved to /db/lop.json using [LokiJS](http://techfort.github.io/LokiJS/)
- View recent uploads and download files or save perma-links
- clicking on 🔍 in the upper right corner opens a read-update-destroy tool powered by [Seis](https://seis.pacificio.com)

## How to set up

Install it and run:

```bash
npm install
npm run dev
# or
yarn install
yarn run dev
```

## Info about the create-next-app scaffold: Custom Express Server example

* scaffoled with the [Custom server and routing](https://github.com/zeit/next.js#custom-server-and-routing) example with create-next-app in 2020
