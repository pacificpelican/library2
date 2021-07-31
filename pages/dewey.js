import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

function booksearch(props) {
  const [books, setBooks] = useState([]);
  const [searchedTitle, setSearchedTitle] = useState('');

  const goBack = () => {
    window.history.back();
  }

  useEffect(() => {
    lookUpSearch();
    if (props.backButtonOff) {
      let g = document.getElementById('backButton');
      g.style.display = "none";
    }
  }, [])

  const lookUpSearch = () => {
    if (true) {
      let dest = "/api/1/getdbdata/db/lop/object/userfiles"
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
            <button id="backButton" href="#" onClick={goBack}>
              ⬅️ back
            </button>
            <h1 id="lop">Library2</h1>
            <h4>List of All Book Titles</h4>
            <h6>as of {Date(Date.now()).toLocaleString()}</h6>
          </section>
          <section className="book-search-form">
            <ul id="booksList">
              {books.map((int) => {
                console.log(int);
                return (
                  <li className="int-book">
                    <i>{int.value.bookTitle}</i> <a href={'http://localhost:3020/permalink?query=' + int.value.locator}>📕</a>
                  </li>
                )
              }
              )}
            </ul>
          </section>
        </header>
      </div>

      <Helmet>
        <title>Library2 | book list</title>
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

          header#bookSearchHeader ul#booksList {
            column-count: 4;
            font-family: var(--uiFonts, serif);
            line-height: 1.65;
          }

          header#bookSearchHeader h1#lop {
            font-size: calc(0.9rem);
            font-family: var(--displayFonts, serif);
          }

          header#bookSearchHeader h4 {
            font-family: var(--uiFonts, serif);
          }

          header#bookSearchHeader button {
            width: calc(30pt + 8vw);
            height: calc(25pt + 1vh);
          }

          @media only screen and (min-width: 700px) {
            header#bookSearchHeader ul#booksList {
              column-count: 4;
            }
          }

          @media only screen and (max-width: 699px) {
            header#bookSearchHeader ul#booksList {
              column-count: 1;
            }
          }
          `}
      </style>
    </div>
  )
}

export default booksearch;
