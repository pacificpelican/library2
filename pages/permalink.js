import React, { Component, useEffect, useState } from "react";
import { useRouter } from 'next/router';

let latestItems = [];

let urlBase = 'http://localhost:3020/uploads/';

function permalink(props) {
  let [item, setItem] = useState([]);

  const router = useRouter();

 // let [link, setLink] = useState('TheGirlOnTheTrain-2015-PaulaHawkins-5eba1bca4d8e7667e241a188-15892551147642430458b499c8a.epub');
  useEffect(() => {   
    console.log(router.asPath);

    let theLocator = router.asPath;
    
    let theLocator1 = theLocator.replace('/permalink?query=', '');

    console.log('locator: ' + theLocator1);

    let dest = '/api/1/getdbdata/db/lop/object/userfiles/tuple/' + theLocator1;

    console.log(dest);

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
      <h3>Book Record {item.locator}</h3>
      
      <ul id="booksCollection">

   
            <li key={item.bookTitle}><span className="bookTitle">{item.bookTitle}</span> <span className="divider">|</span> <span id="author">{item.bookAuthor ? item.bookAuthor : '(author missing)'}</span> <span className="divider">|</span> <span id="author">{item.bookYear ? item.bookYear : '(year missing)'}</span> <span className="link"><a href={urlBase + item.vFile}>download</a></span></li>


      </ul>

      <footer id="permalink-footer">
        <span id="lopItemFooterSpan"><a href="../../..">The Library of Progress</a></span>
      </footer>

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
        footer#permalink-footer, footer#permalink-footer a {
          color: #788080;
          font-size: calc(0.7777rem);
          font-family: source-code-pro, Anonymous Pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        }
      `}</style>
    </div>
  )
}

export default permalink;