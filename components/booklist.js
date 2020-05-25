import React, { useState, useEffect } from "react";

const urlBase = 'http://localhost:3020/uploads/';
const urlPermalinkBase = 'http://localhost:3020/permalink?query=';

function booklist(props) {
  let [item, setItem] = useState(props.books);

  let lucidaFonts = "Lucida Sans, Lucida Sans Regular, Lucida Grande, Lucida Sans Unicode, Geneva, Verdana, sans-serif";
  let systemFonts = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif";

  let fontSet = Object.assign({}, {systemFonts: systemFonts, lucidaFonts: lucidaFonts});

  return(
    <div id="latestBooks">
      
      <ul id="booksCollection">
        {props.books.map(function(ibook) {
          console.log("book: ");
          console.log(ibook);
          return(
          <li key={ibook.bookTitle}><span className="bookTitle">{ibook.bookTitle}</span> <span className="divider">|</span> <span className="author">{ibook.bookAuthor ? ibook.bookAuthor : '(author missing)'}</span> <span className="divider">|</span> <span className="year">{ibook.bookYear ? ibook.bookYear : '(year missing)'}</span> <span className="link"><a href={urlPermalinkBase + ibook.locator}>link</a></span> · <span className="download"><a href={urlBase + ibook.vFile}>download</a></span></li>
          )
        })}
      </ul>

      <style>{`
        div#latestBooks {
          background: #e8effa;
          padding-left: calc(2.5vw);
          padding-right: calc(2.5vw);
          padding-bottom: calc(5px + 2vw);
          padding-top: calc(10pt + 1vw);
        }
        div#latestBooks h3 {
          font-family: ${fontSet.lucidaFonts};
          font-size: calc(1.314rem);
        }
        div#latestBooks ul#booksCollection li {
          margin-bottom: calc(1vh + 5pt);
          font-family: ${fontSet.systemFonts};
          font-size: calc(1.127rem);
        }
        div#latestBooks span.divider {
          color: azure;
        }
        div#latestBooks a {
          color: #4e5ba6;
          font-size: calc(0.95rem);
        }
        div#latestBooks a:visited {
          color: #6e73e6;
        }
        div#latestBooks a:hover {
          color: #e6806a;
        }
        div#latestBooks span.author {
          color: #57585c;
        }
        div#latestBooks span.year {
          color: #7c8da1;
        }
      `}</style>
    </div>
  )
}

export default booklist;
