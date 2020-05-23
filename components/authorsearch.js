import React, { useState } from "react";
import { Helmet } from "react-helmet";

import Booklist from "./booklist";

function authorsearch(props) {
  const [books, setBooks] = useState([]);
  const [searchedTitle, setSearchedTitle] = useState('');
  const goBack = () => {
    window.history.back();
  }

  const lookUpSearch = () => {
    if (searchedTitle !== '') {
      let dest = "/authorsearch/" + searchedTitle;
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
  }
  return (
    <div id="BookSearch-main">
      <div id="BookSearch-main__html_Container">
        <header id="bookSearchHeader">
          <section id="bookSearchHeader__section">
            <h1 id="bookSearchHeader__section__h1">author search</h1>
          </section>

          <section className="book-search-form"><span className="input-span">search by name: </span>

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
        <title>The Library of Progress | author search</title>
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

          div#BookSearch-main__html_Container {
            margin-left: 10pt;
            margin-right: 10pt;
            margin-top: 11pt;
            margin-bottom: 9pt;
          }

          div#BookSearch-main__html_Container h1 {
            font-family: var(--monoFonts, monospace);
            font-size: calc(1.2rem);
          }

          div#BookSearch-main__html_Container h4 {
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
            font-size: calc(0.9rem);
          }

          div#BookSearch-main__html_Container span {
            font-family: var(--contentFonts, monospace);
            font-size: calc(0.88rem);
          }
  
          @media (max-width: 800px) {
						button#runSearch {
							width: calc(30pt + 30vw);
							height: calc(25pt + 1vh);
							background: #f5f0f0;
            }
            button#backButton {
							width: calc(20pt + 30vw);
							height: calc(15pt + 1vh);
							background: cornflowerblue;
						}
						div#BookSearch-main__html_Container input {
							width: calc(30pt + 27vw);
							height: calc(25pt + 1vh);
							font-size: calc(1.2rem);
							background: #f0f1f5;
							margin-bottom: calc(5pt + 1vh);
						}
						label#quantity {
							display: block;
						}
					}
					@media (min-width: 801px) {
						button#runSearch {
							width: calc(30pt + 8vw);
							height: calc(25pt + 1vh);
            }
            button#backButton {
							width: calc(7pt + 8vw);
							height: calc(15pt + 1vh);
              background: #dadee3;
              color: black
						}
						div#BookSearch-main__html_Container input {
							width: calc(30pt + 18vw);
							height: calc(25pt + 1vh);
							font-size: calc(1.2rem);
							background: #f0f1f5;
						}
						input#submitter {
							margin-top: calc(5pt + 1vh);
						}
					}
          `}
      </style>
    </div>
  )
}

export default authorsearch;
