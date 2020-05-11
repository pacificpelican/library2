//  seis SpreadsheetCoreRecursiveClick copyright 2017-2018
//  SpreadsheetCoreRecursiveClick.js
//  mlBench & danmckeown.info
import React, { Component } from "react";
import Link from "next/link";

let lastkey = null;

class SpreadsheetCoreRecursiveClick extends Component {
  table = null;

  constructor() {
    super();
  }

  render(props) {
    let theStore = this.props.store;
    let theTable = this.props.table;

    var g;
    if (this.props.spreadsheetdata[0] !== undefined) {
      g = [{}, ...this.props.spreadsheetdata];
    } else {
      g = [this.props.spreadsheetdata];
    }

    return (
      <div id="desk" className="mlBench-content">
        <section className="keylibrary">
          {g.map(function(interVal) {
            let valArr = Object.keys(interVal);

            let retSet = [];

            for (let i = 0; i < valArr.length; i++) {
              if (typeof valArr[i] === "object") {
                //         do nothing
              } else {
                retSet.push(
                  <span key={valArr[i]} className="valHeaderRow">
                    {valArr[i] + " "}
                  </span>
                );
              }
            }
          })}
        </section>
        <section className="datalibrary">
          {g.map(function(interVal) {
            let keyArr = Object.keys(interVal);
            let valArr = Object.values(interVal);

            let retSet = [];

            for (let i = 0; i < keyArr.length; i++) {
              if (keyArr[i] === "locator") {
                lastkey = valArr[i];
              }
              if (typeof keyArr[i] === "object") {
                //  do nothing
              } else {
                retSet.push(
                  <span key={keyArr[i]} className="valHeaderRow">
                    {keyArr[i] + " "}
                  </span>
                );
              }
              if (i === keyArr.length - 1) {
                retSet.push(<div key={i+keyArr[i]+valArr[i]+`header`} className="endDividerHead" />);
              }
            }

            for (let i = 0; i < valArr.length; i++) {
              if (typeof valArr[i] === "object") {
                retSet.push(
                  <span key={valArr[i]} className="valSheetRow">
                    <SpreadsheetCoreRecursiveClick
                      spreadsheetdata={valArr[i]}
                      table={theTable}
                      store={theStore}
                    />
                  </span>
                );
              } else {
                let newdata = encodeURIComponent(JSON.stringify(valArr[i]));
                let newdataString = newdata.toString();
                retSet.push(
                  <span key={valArr[i]} className="valSheetRow">
                    <Link
                      href={{
                        pathname: "/Edit2",
                        query: {
                          tuple: lastkey,
                          val: newdataString,
                          store: theStore,
                          table: theTable,
                          objprop: keyArr[i]
                        }
                      }}
                    >
                      <a>{valArr[i] + " "}</a>
                    </Link>{" "}
                    <Link
                      href={{
                        pathname: "/View",
                        query: {
                          tuple: lastkey,
                          store: theStore,
                          table: theTable
                        }
                      }}
                    >
                      <a>🏤</a>
                    </Link>{" "}
                    <Link
                      href={{
                        pathname: "/Delete",
                        query: {
                          tuple: lastkey,
                          store: theStore,
                          table: theTable
                        }
                      }}
                    >
                      <a>❌</a>
                    </Link>
                  </span>
                );
              }
              if (i === keyArr.length - 1) {
                retSet.push(<div key={i+keyArr[i]+valArr[i]+`valz`} className="endDivider" />);
              }
            }

            return [...retSet];
          })}
        </section>
        <style jsx>{`
          .spread {
            font-family: "Ubuntu Mono", "Inconsolata", "Hack", "Fira Code",
              Menlo, monospace;
          }
          .keylibrary {
            display: flex;
            flex-direction: row;
          }
          span.valHeaderRow {
            background-color: lightblue;
            margin-top: 12px;
            margin-right: 10px;
            margin-bottom: 0.6rem;
            line-height: 1.3;
            text-align: left;
            padding-right: calc(1rem + 2.1vw);
          }
          span.valSheetRow {
            background-color: lightgray;
            margin-top: 12px;
            margin-right: 10px;
            margin-bottom: 0.6rem;
            line-height: 1.3;
            text-align: left;
            padding-right: calc(1rem);
          }
          span.valSheetRow a {
            text-decoration: none;
            color: black;
          }
        `}</style>
      </div>
    );
  }
}

export default SpreadsheetCoreRecursiveClick;
