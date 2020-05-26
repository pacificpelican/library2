import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import Booklist from "../components/booklist";

function booksearch(props) {
  const [books, setBooks] = useState([]);
  const [searchedTitle, setSearchedTitle] = useState('');
  const goBack = () => {
    window.history.back();
  }

  useEffect(() => {
    if (props.backButtonOff) {
      let g = document.getElementById('backButton');
      g.style.display = "none";
    }
  }, [])

  const lookUpSearch = () => {
    if (searchedTitle !== '') {
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
  }
  return (
    <div id="BookSearch-main">
      <div id="BookSearch-main__html_Container">

        <header id="bookSearchHeader">
          <section id="bookSearchHeader__section">
            <h1 id="bookSearchHeader__section__h1">book search <span className="case">case sensitive</span></h1>
            <button id="backButton" href="#" onClick={goBack}>
              ⬅️ back
            </button>
            <h4>Look for a book</h4>
          </section>
          <section className="book-search-form"><span className="input-span">book title: </span>
            <input type="text" value={searchedTitle} onChange={e => setSearchedTitle(e.target.value)} />
            <span className="sideNote"></span>
          </section>
        </header>

        <main id="searchOutput">
          <section id="commandCenter">
            {/* <p>{searchedTitle}</p> */}
            <button id="runSearch" onClick={lookUpSearch}>look up</button>
          </section>
          <br className="spacer" />
          <section id="searchOutput_sortedData">
            <Booklist books={books} />
          </section>
        </main>

      </div>

      <Helmet>
        <title>The Library of Progress | book search</title>
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
            font-family: var(--contentFonts, monospace);
            font-size: calc(0.9rem);
          }

          div#BookSearch-main__html_Container span {
            font-family: var(--uiFonts, monospace);
            font-size: calc(0.88rem);
          }

          button#runSearch {
            margin-top: 11pt;
          }

          span.case {
            font-family: var(--contentFonts, monospace);
            font-size: calc(0.7rem);
            color: gray;
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

export default booksearch;
