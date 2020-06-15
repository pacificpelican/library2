import React from "react";
import { Helmet } from "react-helmet";

import VreelUpload from "../components/upload";
import Latest from "../components/latest";
import Booksearch from "./booksearch";
import Authorsearch from "../components/authorsearch";

function indexPage() {
  return (
    <div id="main">
      <div id="fContainer">
        <header id="topTier">
          <section id="topTier--title-section">
            <h1 id="frye">The Library of Progress</h1>
          </section>
          <section id="topTier--nav-section">
            <ul id="topTier--nav-section___nav">
              <li>
                <a href="#latest">Visit</a>
              </li>
              <li>
                <a href="#carousel">Exhibitions</a></li>
              <li>
                <a href="https://gallery.sf3am.com">Gallery</a></li>
              <li>
                <a href="/Desk">Data Desk </a>
              </li>
              <li>
                <a href="#upload">Upload</a>
              </li>
            </ul>
          </section>
          <section id="topTier--search-section">
            <a href="/booksearch">🔍</a>
          </section>
        </header>

        <main id="main-view">
          <section id="main-view--section-img">
            <article id="main-view--section-img___article">
              <img
                id="main-view--section-img___article-img"
                src={"./img/books.jpg"}
                alt="mainImg"
              />
            </article>
            <article id="main-view--section-img___article-caption">
              <h4 id="main-view--section-img___article-caption____h4">
                Powered by <a href="https://reactjs.org">React</a>, <a href="https://nextjs.org/">NextJS</a>, <a href="https://reactjs.org/docs/introducing-jsx.html">JSX</a>, <a href="https://nodejs.org">NodeJS</a>, <a href="http://techfort.github.io/LokiJS/">LokiJS</a>, <a href="https://web-component-boilerplate.pacificio.com/">web-component-boilerplate</a>, <a href="https://webpack.js.org/">Webpack</a>, and <a href="https://babeljs.io/">Babel</a>
              </h4>
              <h2 id="main-view--section-img___article-caption____h2">
                The Library of Progress is a collection for 21st Century Knowledge and Understanding
                </h2>
            </article>
          </section>
        </main>

        <section id="latest">
          <Latest />
        </section>

        <div id="upload">
          <VreelUpload />
        </div>

        <div className="searchDiv" id="bookSearch">
          <Booksearch backButtonOff />
        </div>

        <div className="searchDiv" id="authorSearch">
          <Authorsearch backButtonOff />
        </div>

        <main id="carousel">
          <section id="newsAndEvents">
            <article id="box1">
              <header id="newsAndEvents--box1__header"></header>
              <h3><i><a href="http://localhost:3020/permalink?query=5ebadb3e5744457d66de32f1-15893041260085604056f14b6a2">Ulysses</a></i> </h3>
              <aside>
                by James Joyce
              </aside>
              <main>
                1922
              </main>
              <p>
                <a href="https://www.bl.uk/20th-century-literature/articles/an-introduction-to-ulysses">"James Joyce's <i>Ulysses</i> may be more talked about than read."</a>
              </p>
            </article>
            <article id="box2">
              <header id="newsAndEvents--box2__header"></header>
              <h3><i><a href="http://localhost:3020/permalink?query=5ebae0145744457d66de32f2-1589305364386191072f14b6a2">Wuthering Heights</a></i></h3>
              <aside>
                by Emily Brontë
              </aside>
              <main>
                1847
              </main>
              <p>
                <a href="https://www.sparknotes.com/lit/wuthering/summary/">"When Heathcliff returns, he immediately sets about seeking revenge on all who have wronged him."</a>
              </p>
            </article>
            <article id="box3">
              <header id="newsAndEvents--box3__header"></header>
              <h3><i><a href="http://localhost:3020/permalink?query=5ebae44a5744457d66de32f3-15893064423036075459f14b6a2">Eloquent JavaScript</a></i></h3>
              <span>  </span>
              <aside>
                by Marijn Haverbeke
              </aside>
              <main>
                2015
              </main>
              <p>
                <a href="https://eloquentjavascript.net/">"Analogies that try to compare programs to objects we are familiar with tend to fall short."</a>
              </p>
            </article>
          </section>
        </main>

        <main id="grid">
          <section id="donate">
            <span><a href="https://pacificio.com/pay">donate</a></span>
          </section>
          <section id="store">
            <span><a href="https://altaredwood.com">store</a></span>
          </section>
          <section id="cafe">
            <span><a href="https://cafe.pacificio.com">cafe</a></span>
          </section>
        </main>

        <footer id="info">
          <aside id="copyright">
            <span id="designed"
            >(c) 2020 Created by <a href="https://danieljmckeown.com">Daniel J. McKeown</a> in Washington state</span>
          </aside>
          <br />
          <br />
          <br />
          <section id="github_link">
            <a href="https://github.com/pacificpelican/library2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 16" width="45" height="16"><path fill-rule="evenodd" d="M18.53 12.03h-.02c.009 0 .015.01.024.011h.006l-.01-.01zm.004.011c-.093.001-.327.05-.574.05-.78 0-1.05-.36-1.05-.83V8.13h1.59c.09 0 .16-.08.16-.19v-1.7c0-.09-.08-.17-.16-.17h-1.59V3.96c0-.08-.05-.13-.14-.13h-2.16c-.09 0-.14.05-.14.13v2.17s-1.09.27-1.16.28c-.08.02-.13.09-.13.17v1.36c0 .11.08.19.17.19h1.11v3.28c0 2.44 1.7 2.69 2.86 2.69.53 0 1.17-.17 1.27-.22.06-.02.09-.09.09-.16v-1.5a.177.177 0 00-.146-.18zM42.23 9.84c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25zm2.43-.16c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88zm-8.72-3.61h-2.1c-.11 0-.17.08-.17.19v5.44s-.55.39-1.3.39-.97-.34-.97-1.09V6.25c0-.09-.08-.17-.17-.17h-2.14c-.09 0-.17.08-.17.17v5.11c0 2.2 1.23 2.75 2.92 2.75 1.39 0 2.52-.77 2.52-.77s.05.39.08.45c.02.05.09.09.16.09h1.34c.11 0 .17-.08.17-.17l.02-7.47c0-.09-.08-.17-.19-.17zm-23.7-.01h-2.13c-.09 0-.17.09-.17.2v7.34c0 .2.13.27.3.27h1.92c.2 0 .25-.09.25-.27V6.23c0-.09-.08-.17-.17-.17zm-1.05-3.38c-.77 0-1.38.61-1.38 1.38 0 .77.61 1.38 1.38 1.38.75 0 1.36-.61 1.36-1.38 0-.77-.61-1.38-1.36-1.38zm16.49-.25h-2.11c-.09 0-.17.08-.17.17v4.09h-3.31V2.6c0-.09-.08-.17-.17-.17h-2.13c-.09 0-.17.08-.17.17v11.11c0 .09.09.17.17.17h2.13c.09 0 .17-.08.17-.17V8.96h3.31l-.02 4.75c0 .09.08.17.17.17h2.13c.09 0 .17-.08.17-.17V2.6c0-.09-.08-.17-.17-.17zM8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17z"></path></svg>
            </a>
          </section>
        </footer>
      </div>
      <Helmet>
        <title>The Library of Progress</title>
        <link rel="icon" href="favicon.ico" />
      </Helmet>

      <style>
        {`
          :root {
            --uiFonts: Ubuntu Mono, Inconsolata, Anonymous Pro, Hack,
              Menlo, monospace;
            --contentFonts: Ubuntu Sans, Lato, Open Sans, Lucida Grande,
              Segoe UI, Roboto, Helvetica, sans-serif;
            --displayFonts: Gentona, Baufra, Helvetica, sans-serif;
            --monoFonts: Anonymous Pro, Hack, Fira Sans, Inconsolata,
              monospace;
            --white-color: white;
          }
          html {
            box-sizing: border-box;
          }
          body {
            margin-left: 0px;
            margin-right: 0px;
            padding-left: 0px;
            padding-right: 0px;
            background: white;
          }
          section#main-view--section-img,
          section#newsAndEvents,
          main#grid {
            width: calc(85vw + 20px);
            margin-left: calc(4.25vw + 15pt);
          }
          a#newsAndEvents--box1__link___1,
          a#newsAndEvents--box1__link___2,
          a#newsAndEvents--box2__link___1,
          a#newsAndEvents--box3__link___1 {
            background: rgba(106, 158, 182, 0.815);
            color: var(--white-color, white);
            padding-inline-start: calc(1vw + 5px);
            padding-inline-end: calc(1vw + 5px);
            padding-block-start: calc(0.4vw + 5px);
            padding-block-end: calc(0.4vw + 5px);
          }
          #main-view--section-img___article-caption____h4 a {
            color: #434952;
          }
          #main-view--section-img___article-caption____h4 a:visited {
            color: #9babc2;
          }
          footer#readMore {
            margin-block-start: calc(2vh + 10px);
          }
          footer#info {
            font-family: var(--contentFonts, Helvetica);
            padding-left: calc(2vw + 10pt);
          }
          footer#info a {
            color: inherit;
          }
          section#newsAndEvents {
            margin-block-start: calc(2vh + 10px);
          }
          section#newsAndEvents img {
            max-width: 99%;
          }
          header#newsAndEvents--box1__header {
            margin-inline-start: calc(0px);
            height: calc(18vh + 100px);
            background: red;
            background-image: url("./img/aceofclubs.jpg");
          }
          header#newsAndEvents--box2__header {
            height: calc(18vh + 100px);
            background: blue;
            background-image: url("./img/Emily-Bront--portrait-for-007.jpg");
          }
          header#newsAndEvents--box3__header {
            height: calc(18vh + 100px);
            background: green;
            background-image: url("./img/EloquentJavaScript-cover-small.jpg");
          }
          section#donate,
          section#store,
          section#cafe {
            margin-inline-start: calc(2vw);
            height: calc(10vh + 100px);
            background: red;
          }
          section#store {
            background-image: url("./img/store2.jpg");
          }
          section#cafe {
            background-image: url("./img/espresso.jpg");
          }
          section#donate {
            background-image: url("./img/cash.jpg");
          }
          div#upload {
            background: #f7f3f0;
            margin-bottom: 10pt;
            margin-top: 12pt;
          }
          main#carousel p a {
            text-decoration: none;
            color: #b0b4b5;
          }
          main#carousel h3 a {
            text-decoration: overline;
            color: inherit;
          }
          .searchDiv {
            margin-left: calc(0.5vw);
            margin-right: calc(0.5vw);
            margin-top: calc(2vh + 3pt);
            padding-top: calc(2vh + 3pt);
            margin-bottom: calc(5px + 2vw);
          }
          #bookSearch {
            background: #d1d9e0;
          }
          #authorSearch {
            background: #e6f5f2;
          }
          @media (max-width: 779px) {
            section#donate,
            section#store,
            section#cafe {
              width: calc(80vw + 5px);
            }
            section#newsAndEvents article {
              width: calc(80vw + 5px);
              margin-left: calc(0.5vw);
              margin-right: calc(0.5vw);
              background: var(--beigeColor, white);
              margin-bottom: calc(5px + 2vw);
              padding-block-start: calc(5px + 1vw);
              padding-block-end: calc(5px + 2vw);
            }
            article#main-view--section-img___article img {
              width: calc(75vw + 25px);
            }
            header#topTier {
              margin-inline-start: calc(4vw + 10px);
            }
            #fContainer {
              margin-left: calc(-1vw - 5px);
            }
          }
          @media (min-width: 780px) {
            main#grid {
              display: flex;
            }
            h1#frye {
              margin-block-start: calc(1vh + 5px);
            }
            section#topTier--search-section {
              margin-block-start: calc(1vh + 5px);
            }
            section#donate,
            section#store,
            section#cafe {
              width: calc(30vw + 5px);
            }
            ul#topTier--nav-section___nav,
            section#newsAndEvents {
              display: flex;
            }
            header#topTier {
              display: flex;
              justify-content: space-evenly;
            }
            section#newsAndEvents article {
              width: calc(30vw + 20px);
              margin-left: calc(0.5vw);
              margin-right: calc(0.5vw);
              background: var(--beigeColor, white);
              margin-bottom: calc(5px + 2vw);
              padding-block-start: calc(5px + 1vw);
              padding-block-end: calc(5px + 2vw);
              padding-inline-start: calc(5px + 1vw);
              padding-inline-end: calc(5px + 2vw);
            }
            article#main-view--section-img___article img {
              width: 98%;
            }
            ul#topTier--nav-section___nav li {
              list-style: none;
              margin-inline-end: calc(2vw + 10px);
            }
          }
          main#grid, main#grid a {
            color: white;
            font-family: var(--uiFonts, monospace);
          }
          main#grid span {
            display: block;
            margin-inline-start: calc(4vw + 80px);
            margin-block-start: calc(5vw + 30px);
            font-size: calc(1.4rem);
          }
          h2#newsAndEvents--header,
          h5#ff,
          footer#purple {
            text-align: center;
          }
          h2#newsAndEvents--header,
          footer#purple {
            margin-block-start: calc(25px + 3vh);
          }
          header#topTier {
            font-family: var(--uiFonts, monospace);
          }
          main#main-view {
            font-family: var(--contentFonts, serif);
          }
          main#carousel {
            font-family: var(--displayFonts, sans-serif);
          }
          footer#info {
            background: lightblue;
            height: calc(50vh);
            margin-block-start: calc(15px + 5vh);
            padding-block-start: calc(5px + 1vw);
            padding-block-end: calc(5px + 2vw);
            margin-inline-start: calc(5px + 1vw);
            margin-inline-end: calc(5px + 2vw);
          }
          ul#topTier--nav-section___nav a {
            color: inherit;
            text-decoration: none;
          }
          `}
      </style>
    </div>
  )
}

export default indexPage;
