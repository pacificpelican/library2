import React, { Component, useEffect, useState } from "react";
import Okviewer from "okconceptviewer";

let latestItems = [];

function latest() {
  let [item, setItem] = useState([]);
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
      <Okviewer spreadsheetdata={item} />
    </div>
  )
}

export default latest;