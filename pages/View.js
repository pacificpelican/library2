//  seis copyright 2017-2019
//  View.js
//  via mlBench & danmckeown.info
import React, { Component } from "react";
import { withRouter } from 'next/router';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import Headernav from "../components/Headernav";
import Footernav from "../components/Footernav";

import reloadOnce from "../components/reloadOnce";

import SpreadsheetcoreRecursive from "okconceptviewer";

class View extends Component {
  state = {
    Ok: true,
    entry: '',
    dbdataArr: []
  };

  constructor(props) {
    super();
  }

  runDBlookup(item = null, dbOBJ = 'seis', db = 'seisdb') {
    let that = this;
    let dest = "/api/1/getdbdata/db/" + db + "/object/" + dbOBJ + "/tuple/" + item;
    console.log("FETCH REQUEST URL:")
    console.log(dest);
    fetch(dest, {})
      .then(function (response) {
        if (response.ok) {
          for (var e in response.json) {
            console.log(e);
          }

          return response.json();
        }
        throw new Error("Network did not respond.");
        return response.blob();
      })
      .then(function (myReturn) {
        that.setState({ dbdataArr: myReturn });
      });
  }

  goBack() {
    window.history.back();
  }

  lookUp = () => {
    const {router} = this.props;
    const tuple = router.query.tuple;
    let store = router.query.store;
    let table = router.query.table;
    this.runDBlookup(tuple, table, store);
  }

  render(props) {
    const {router} = this.props;
    const tuple = router.query.tuple;
    let store = router.query.store;
    let table = router.query.table;

    return (
      <div id="editContainer" className="mlBench-content-wrappers">
        <button id="backButton" href="#" onClick={this.goBack}>
          ⬅️ back
        </button>

        <Headernav />
        
        <h1 id="desk">
          Seis Object Viewer<span id="rollLink">
            {" "}
            <a href="#" onClick={reloadOnce}>
              reload()
            </a>
          </span>
        </h1>
        
        <section id="user-input">
         
        </section>
        <Card>
          <section id="propsInfo">
            <span>
            tuple: {tuple}
            <br />
            table: {table}
            <br />
            store: {store}
            </span>
          </section>
        </Card>

        <Button id="lookup" onClick={this.lookUp}>
          look up
        </Button>

        <section id="outputData">
          <SpreadsheetcoreRecursive spreadsheetdata={this.state.dbdataArr} />
        </section>

        <Footernav />
        
        <style jsx global>{`
          h1#desk, aside {
            font-family: Futura, "Ubuntu", "Lucida Grande", "Roboto", Helvetica,
              sans-serif;
          }
          footer#deskFooter {
            margin-top: 2em;
            font-family: Ubuntu, Roboto, Helvetica, sans-serif;
          }
          section#user-input {
            margin-bottom: calc(3vh + 10px);
            color: white;
          }
          section#user-input a {
            color: white;
          }
          #lookupDB {
            margin-left: calc(1vh + 10px);
          }
          div#deskContainer {
            background: #f7f8f9;
          }
          section#propsInfo {
            font-family: "Roboto", "Ubuntu Sans", "Segoe UI", "Lucida Sans", Helvetica, sans-serif;
          }
          section#outputData {
            margin-block-start: calc(2vh + 5px);
            padding-inline-start: calc(2vh + 5px);
          }
          span#valHeaderRow, span#valSheetRow {
            display: block;
            margin-block-start: calc(2vh + 5px);
            margin-block-end: calc(2vh + 5px);
            padding-inline-start: calc(2vh + 5px);
          }
          div#desk-wrapper.mlBench-content div#desk {
            width: 80vw;
            display: grid;
            grid-auto-columns: 75vw;
            grid-gap: 10px;
            grid-auto-rows: auto;
          }
        `}</style>
      </div>
    );
  }
}

export default withRouter(View);
