import React, { Component, useEffect, useState } from "react";
import Okviewer from "okconceptviewer";

let latestItems = [];

let urlBase = 'http://localhost:3020/uploads/';

function latest() {
  let [item, setItem] = useState([]);
 // let [link, setLink] = useState('TheGirlOnTheTrain-2015-PaulaHawkins-5eba1bca4d8e7667e241a188-15892551147642430458b499c8a.epub');
  useEffect(() => {   
    let dest = '/listlatest';

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
        //latestItems = myReturn;
      });

  }, [])

  return(
    <div id="latestBooks">
      <h3>Latest</h3>
      
      <ul id="booksCollection">
        {item.map(function(ibook) {
          console.log(ibook);
          return(
            <li><span className="bookTitle">{ibook.bookTitle}</span> <span className="divider">|</span> <span className="link"><a href={urlBase + ibook.vFile}>link</a></span></li>
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
          font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          font-size: calc(1.127rem);
        }
      `}</style>
    </div>
  )
}

export default latest;