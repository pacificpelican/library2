import React from "react";
import {Helmet} from "react-helmet";

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
                <a href="http://gallery.sf3am.com">Gallery</a></li>
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
                Powered by <a href="https://reactjs.org">react</a>, <a href="https://reactjs.org/docs/introducing-jsx.html">JSX</a>, and <a href="https://webpack.js.org/">Webpack</a>
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
                <a href="https://www.bl.uk/20th-century-literature/articles/an-introduction-to-ulysses">"James Joyce's Ulysses may be more talked about than read."</a>
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
            <span>cafe</span>
          </section>
        </main>

        <footer id="info">
          <aside id="copyright">
            <span id="designed"
            >(c) 2020 Created by <a href="https://danieljmckeown.com">Daniel J. McKeown</a> in Washington state</span>
          </aside>
        </footer>
      </div>
      <Helmet>
        <title>The Library of Progress</title>
        <link rel="icon" href="favicon.ico" />
      </Helmet>
      <style>
        {`
          :root {
            --uiFonts: "Ubuntu Mono", "Inconsolata", "Anonymous Pro", "Hack",
              Menlo, monospace;
            --contentFonts: "Ubuntu Sans", "Lato", "Open Sans", "Lucida Grande",
              "Segoe UI", "Roboto", Helvetica, sans-serif;
            --displayFonts: "Gentona", "Baufra", Helvetica, sans-serif;
            --monoFonts: "Anonymous Pro", "Hack", "Fira Sans", "Inconsolata",
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
          footer#readMore {
            margin-block-start: calc(2vh + 10px);
          }
          footer#info {
            font-family: var(--contentFonts, 'Helvetica');
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
