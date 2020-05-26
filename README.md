# The Library of Progress

*a tool for knowledge diffusion*

*copyright 2020 by [Daniel J McKeown](https://danieljmckeown.com) all rights reserved*

## What it does

- upload files (preferably epubs and pdfs) which will go to the /public/uploads directory
  - `upload` component has a form with these fields
    * book title
    * book year
    * book url
    * book author 
    * book stars (1 to 5)
    * book tags: (comma separated)
    * notes *texarea*
- meta-data about the post is saved to /db/lop.json using [LokiJS](http://techfort.github.io/LokiJS/)
- View recent uploads (`latest` component shows the last 20) and download files or save perma-links
- the `parmalink` page can show a book based on a `query` parameter of the book's locator (a kind of ID for a Library of Progress book)
- clicking on `Data Desk` in the top navigation menu opens a read-update-destroy tool powered by [Seis](https://seis.pacificio.com) (default collection is `userfiles`)
- clicking on 🔍 in the upper right corner opens the `booksearch` page
- when a user uplaods data, by default Git is set up to ignore those files (in the `/public/uploads` directory) so while the `db/lop.json` file keeps track of the uploads (allowing features like the `permalink` to connect the list on the web page to the undelying uploaded book file) and it is tracked by Git by default, the uploaded files are not part of the Git working directory (unless the `public/uploads` line were to be deleted from the `.gitignore` file).

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
