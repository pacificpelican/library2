# The Library of Progress

*a tool for knowledge diffusion*

*copyright 2020 by [Dan McKeown](https://danmckeown.info)*

## What it does

- upload files (preferably epubs and pdfs) which will go to the /public/uploads directory
- meta-data about the post is saved to /db/lop.json using [LokiJS](http://techfort.github.io/LokiJS/)
- View recent uploads and download files or share perma-links

## How to set up

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

## Info about the create-next-app scaffold: Custom Express Server example

Most of the times the default Next server will be enough but sometimes you want to run your own server to customize routes or other kind of the app behavior. Next provides a [Custom server and routing](https://github.com/zeit/next.js#custom-server-and-routing) so you can customize as much as you want.

Because the Next.js server is just a node.js module you can combine it with any other part of the node.js ecosystem. in this case we are using express to build a custom router on top of Next.

The example shows a server that serves the component living in `pages/a.js` when the route `/b` is requested and `pages/b.js` when the route `/a` is accessed. This is obviously a non-standard routing strategy. You can see how this custom routing is being made inside `server.js`.
