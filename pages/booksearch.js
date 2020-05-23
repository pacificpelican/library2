import React, { useState } from "react";
import {Helmet} from "react-helmet";

//  import Okviewer from "okconceptviewer";
import Booklist from "../components/booklist";

function booksearch() {
  const [books, setBooks] = useState([]);
  const [searchedTitle, setSearchedTitle] = useState('');
  const lookUpSearch = () => {
    let dest = "/booksearch/" + searchedTitle;
    fetch(dest, { method: "get" })
      .then(function (response) {
        if (response.ok) {
          console.log("response ok");
          return response.json();
        } else {
          throw new Error(response.Error);
        }
      })
      .then(function (myReturn) {
        console.log(myReturn);
        setBooks(myReturn);
      });
  }
  return (
    <div id="BookSearch-main">
      <div id="BookSearch-main__html_Container">
        <header id="bookSearchHeader">
          <section id="bookSearchHeader__section">
            <h1 id="bookSearchHeader__section__h1">book search</h1>
            <h4>Look for a book</h4>
          </section>
        
          <section className="book-search-form"><span className="input-span">book title: </span>

          <input type="text" value={searchedTitle} onChange={e => setSearchedTitle(e.target.value)} />

          <span className="sideNote"></span></section>

        </header>

        <main id="searchOutput">
          <section id="commandCenter">
            <p>{searchedTitle}</p>
            <button id="runSearch" onClick={lookUpSearch}>look up</button>
          </section>

          <br className="spacer" />

          <section id="searchOutput_sortedData">
            <Booklist books={books} />
          
          </section>

          {/* <section id="searchOutput__ServerData">
            <Okviewer spreadsheetdata={books} />
          </section> */}
        </main>


      </div>
      <Helmet>
        <title>The Library of Progress | book search</title>
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

export default booksearch;
