//  seis copyright 2017-2019
//  Delete.js
//  via mlBench & danmckeown.info
import React, { Component } from "react";
import { withRouter } from 'next/router';

import { Button } from '@smooth-ui/core-sc';
import Card from '@material-ui/core/Card';

import Headernav from "../components/Headernav";
import Footernav from "../components/Footernav";

import reloadOnce from "../components/reloadOnce";

class Delete extends Component {
  state = {
    Ok: true,
    entry: '',
    cryptonowNumber: 0,
    userObjectAsk: '_',
    wildMode: true
  };

  constructor(props) {
    super();

    this.handlecValueChange = this.handlecValueChange.bind(this);
  }

  handlecValueChange = (event) => {
    console.log(event.target.value)
    let capturedVal = event.target.value;
    this.setState({ userObjectAsk: capturedVal });
  }

  handlesubmit = (event) => {
    const {router} = this.props;
    console.log("about to update collection");
    let cont = this.letServerUpdate(router.query.store, router.query.table, router.query.tuple);
  }

  letServerUpdate(store, obj, tuple) {
    console.log("running letServerUpdate");
    let apiUrlPrefix = '';
    let dest;

    dest = apiUrlPrefix + '/api/1/deletedata/db/' + store + '/object/' + obj + '/tuple/' + tuple;

    console.log("dest: " + dest);

    fetch(dest, {method: 'post'})
      .then(function(response) {
        if (response.ok) {
          console.log("response ok");
          return response.json();
        }
        else {
          throw new Error(response.Error);
        }
    })
      .then(function(myReturn) {
        console.log(myReturn);
    });
  }

  componentDidMount(props) {
    const {router} = this.props;
    this.setState({userObjectAsk : router.query.val});
  }

  goBack() {
    window.history.back();
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
          apple-picker Object Deleter<span id="rollLink">
            {" "}
            <a href="#" onClick={reloadOnce}>
              reload()
            </a>
          </span>
        </h1>
        
        <section id="user-input">
          <Button size="lg" onClick={this.handlesubmit} variant="danger" fontFamily="monospace" id="lookupDB">
            delete from DB
          </Button>
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
        `}</style>
      </div>
    );
  }
}

export default withRouter(Delete);
