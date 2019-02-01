import React, { Component } from "react";
import { Button, FormGroup, FieldGroup, PageHeader, FormControl, Col, Image, Jumbotron, Nav, NavItem, Row } from 'react-bootstrap';

import './Dashboard.css';
import DashboardNav from "./DashboardNav";

export default class Dashboard extends Component {
    handleOnSuccess(token, metadata) {
        // send token to client server
      }
      handleOnExit() {
        // handle the case when your user exits Link
      }

  render() {
    return (
    <div>
        <DashboardNav/>
    </div>
    );
  }
}