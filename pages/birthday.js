import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { Helmet } from "react-helmet";

const ReactMarkdown = require('react-markdown');

let urlBase = 'http://localhost:3020/uploads/';

function starMachine(stars) {
  let retStars = '';
  if ((stars > 0) && (stars < 6)) {
    for (let i = 0; i < stars; i++) {
      retStars = retStars + '★';
    }
  }
  return retStars;
}

function permalink(props) {
  let [item, setItem] = useState([]);

  const router = useRouter();

  useEffect(() => {
    console.log(router.asPath);

    let theLocator = router.asPath;

    let theLocator1 = theLocator.replace('/birthday?birthday=', '');

    console.log('locator: ' + theLocator1);

    let dest = '/api/1/getdbdata/db/lop/object/birthdays/tuple/' + theLocator1;

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
      });

  }, [])

  return (
    <div id="latestBooks">
      <h3>Birthday Record 🎂 {item.locator}</h3>

      <ul id="booksCollection">
        <li key={item.birthdayName}>
          <span className="bookTitle">{item.birthdayName ? item.birthdayName : '(no name found)'}</span>
          <span className="divider">{" "}|{" "}</span>
          <span id="author">{item.birthdayDate ? item.birthdayDate : '(birthday missing)'}</span>
        </li>
       
      </ul>

      <p id="bookNotes">
        <ReactMarkdown source={item.birthdayNotes} />
      </p>

      <footer id="permalink-footer">
        Birthday Calendar from <span id="lopItemFooterSpan"><a href="../../..">The Library of Progress</a></span>
      </footer>

      <Helmet>
        <title>
          {`${item.birthdayName} | The Library of Progress Birthday Calendar`}
        </title>
      </Helmet>

      <style>{`
        div#latestBooks {
          background: #f7f7eb;
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
          font-size: calc(1.420rem);
        }
        footer#permalink-footer, footer#permalink-footer a {
          color: #788080;
          font-size: calc(0.7777rem);
          font-family: source-code-pro, Anonymous Pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
        }
        a.linkLink {
          text-decoration: none;
        }
        p#bookNotes {
          font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
          font-size: calc(1.014rem);
        }
        span.divider {
          color: azure;
        }
        span#author {
          color: #7c918f;
        }
        span#year {
          color: #303837;
        }
      `}</style>
    </div>
  )
}

export default permalink;
