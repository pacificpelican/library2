//  seis copyright 2017-2019
//  Desk.js
//  via mlBench & danmckeown.info
import React, { Component } from "react";

import Spreadsheet from "../components/Spreadsheet";

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';

import Headernav from "../components/Headernav";
import Footernav from "../components/Footernav";

import reloadOnce from "../components/reloadOnce";

class Desk extends Component {
  state = {
    Ok: true,
    userObjectAsk: "",
    userDBrequest: "lop",
    dbdata: "-",
    dbdataArr: []
  };
  keyLibrary = new Set();
  lastOne = [];

  constructor() {
    super();

    this.handlecValueChange = this.handlecValueChange.bind(this);
    this.handleLookupButton = this.handleLookupButton.bind(this);
  }

  runDBlookup(dbOBJ, db = 'seisdb') {
    let that = this;
    let dest = "/api/1/getdbdata/db/" + db + "/object/" + dbOBJ;
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
        that.setState({ dbdata: myReturn, dbdataArr: myReturn });
      });
  }

  goBack() {
    window.history.back();
  }

  pickSeis = () => {
    this.setState({ userObjectAsk: "userfiles"});
  }

  handlecValueChange(event) {
    let capturedVal = event.target.value;
    this.setState({ userObjectAsk: capturedVal });
  }

  handleDBvalChange = (event) => {
    let capturedVal = event.target.value;
    this.setState({ userDBrequest: capturedVal });
  }

  handleLookupButton(event) {
    let cont = this.runDBlookup(this.state.userObjectAsk, this.state.userDBrequest);
  }

  componentDidMount = () => {
    if (this.props.userObjectAsk) {
      this.setState({userObjectAsk: this.props.userObjectAsk})
    }
    if (this.props.userDBrequest) {
      this.setState({userDBrequest: this.props.userDBrequest})
    }
  }

  render() {
    console.log("keyLibrary: " + this.keyLibrary);

    return (
      <div id="deskContainer" className="mlBench-content-wrappers">
        <button id="backButton" href="#" onClick={this.goBack}>
          ⬅️ back
        </button>

        <Headernav />

        <h1 id="desk">
          apple-picker Яecursive Object Desk<span id="rollLink">
            {" "}
            <a href="#" onClick={reloadOnce}>
              reload()
            </a>
          </span>
        </h1>

        <section id="dbInput">
          <section id="user-db-input">
            <span id="db-label">database: </span><Input id="user-db-name-input" onChange={this.handleDBvalChange} value={this.state.userDBrequest} />
          </section>
        </section>
        
        <aside>
          app database table: [<span id="clickSeis" onClick={this.pickSeis}>userfiles</span>]
          <br />
          <br />
        </aside>
        <section id="user-input">
          <Input
            id="crypto_output"
            onChange={this.handlecValueChange}
            value={this.state.userObjectAsk}
          />
          <Button variant="contained" color="primary" onClick={this.handleLookupButton} id="lookupDB">
            lookup in DB
          </Button>
        </section>
        <Card id="results">
          <Spreadsheet dbdataArr={this.state.dbdataArr} table={this.state.userObjectAsk} store={this.state.userDBrequest} />
        </Card>

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
          }
          #lookupDB {
            margin-left: calc(1vh + 10px);
          }
          #results {
            font-family: "Inconsolata", "Anonymous Pro", "Hack", Menlo, monospace;
          }
          div#deskContainer {
            background: #f7f8f9;
          }
          section#dbInput {
            margin-bottom: calc(3vh + 10px);
          }
          span#db-label {
            font-family: Courier, sans-serif;
          }
        `}</style>
      </div>
    );
  }
}

export default Desk;
