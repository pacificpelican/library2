# The Library of Progress

*a tool for knowledge diffusion*

*copyright 2020 by [Daniel J McKeown](https://danieljmckeown.com) all rights reserved*

## What it does

- upload files (preferably epubs and pdfs) which will go to the /public/uploads directory
- meta-data about the post is saved to /db/lop.json using [LokiJS](http://techfort.github.io/LokiJS/)
- View recent uploads and download files or save perma-links
- clicking on 🔍 in the upper right corner opens a read-update-destroy tool powered by [Seis](https://seis.pacificio.com) (default collection is `userfiles`)

## How to set up

### Install it and run (required [NodeJS](https://nodejs.org/en/)):

```bash
npm install
npm run dev
# or
yarn install
yarn run dev
```

### Visit the site at its port 3020

```bash
open http://localhost:3020
```

## Info about the create-next-app scaffold: Custom Express Server example

* The site was scaffoled with the [Custom server and routing](https://github.com/zeit/next.js#custom-server-and-routing) example with [create-next-app](https://nextjs.org/blog/create-next-app) in 2020; this provided a starting point for developing the React components and Express routes that make up the functionality of this tool.
