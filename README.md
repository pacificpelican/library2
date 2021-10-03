# *Library2*

*a tool for knowledge collection*

*copyright 2020-2021 by [Daniel J McKeown](https://danieljmckeown.com) all rights reserved*

## What it does

- upload files (preferably epubs and pdfs) which will go to the /public/uploads directory
  - `upload` component (included in index page) has a form with these fields
    * book title
    * book year
    * book url
    * book author 
    * book stars (1 to 5)
    * book tags: (comma separated)
    * notes *texarea*
- meta-data about the post is saved to /db/lop.json using [LokiJS](http://techfort.github.io/LokiJS/)
- view recent uploads (`latest` component shows the last 20) and download files or save perma-links
- the `parmalink` page can show a book based on a `query` parameter of the book's locator (a kind of ID for a Library2 book)
- clicking on `Data Desk` in the top navigation menu opens a read-update-destroy tool called `Desk` extracted from [Seis](https://github.com/pacificpelican/seis) (default database is `lop` and default collection is `userfiles`)
- clicking on 🔍 in the upper right corner opens the `booksearch` page
  - the search components `authorsearch` and `booksearch` use API routes specific to the property being searched e.g. `'/booksearch/:searchString`
  - one of the search routes is `/md5search/:searchString` where searchString is the md5 string created by the upload library `express-fileupload` so for example this search should return all entries with the file being `Dubliners` from Gutenberg (the specific one I downloaded in 2020): `http://localhost:3020/md5search/190849e0e2f0615686bd80a6d8570469`
- when a user uplaods data, by default Git is set up to ignore those files (in the `/public/uploads` directory) so while the `db/lop.json` file keeps track of the uploads (allowing features like the `permalink` to connect the list on the web page to the undelying uploaded book file) and it is tracked by Git by default, the uploaded files are not part of the Git working directory (unless the `public/uploads` line were to be deleted from the `.gitignore` file).

![bookshelf-image](./public/img/books.jpg)

## How to set up

### Install it and run (requires [NodeJS](https://nodejs.org/en/)):

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

### QuickStart

- **Before the first time you run the app you probably want to delete the `lop.json` file**: you can do this in the terminal with `rm ./db/lop.json` or you can use the red-orange `delete all data` button on the index page
- Visit the site's upload section at http://localhost:3020#upload: `open http://localhost:3020#upload`
- Upload your pdf or epub file

## Video

- [This screencast from 2021](https://www.youtube.com/watch?v=ErDMRlUDlXI) walks through setting up and using library2

- [This older screencast](https://www.youtube.com/watch?v=_LOOBmu5-Ho&t=41s) takes a look at an early version of the project

## Info about the create-next-app scaffold: Custom Express Server example

* The site was scaffolded with the [Custom server and routing](https://github.com/zeit/next.js#custom-server-and-routing) example with [create-next-app](https://nextjs.org/blog/create-next-app) in 2020; this provided a starting point for developing the React components and Express routes that make up the functionality of this tool.
