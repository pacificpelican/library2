import React, { Component, useEffect, useState } from "react";

const urlBase = 'http://localhost:3020/uploads/';
const urlPermalinkBase = 'http://localhost:3020/permalink?query=';

function latest() {
  let [item, setItem] = useState([]);
  useEffect(() => {   
    let dest = '/listbooks';

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
        setItem(myReturn);
      });

  }, [])

  return(
    <div id="latestBooks">
      <h3>Latest</h3>
      
      <ul id="booksCollection">
        {item.map(function(ibook) {
          console.log(ibook);
          return(
          <li key={ibook.bookTitle}><span className="bookTitle">{ibook.bookTitle}</span> <span className="divider">|</span> <span id="author">{ibook.bookAuthor ? ibook.bookAuthor : '(author missing)'}</span> <span className="divider">|</span> <span id="author">{ibook.bookYear ? ibook.bookYear : '(year missing)'}</span> <span className="link"><a href={urlPermalinkBase + ibook.locator}>link</a></span> · <span className="download"><a href={urlBase + ibook.vFile}>download</a></span></li>
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
          font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
          font-size: calc(1.314rem);
        }
        ul#booksCollection li {
          margin-bottom: calc(1vh + 5pt);
          font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          font-size: calc(1.127rem);
        }
      `}</style>
    </div>
  )
}

export default latest;