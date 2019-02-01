import React, { Component } from 'react';
import { Button, FormGroup, FieldGroup, PageHeader, FormControl, Col, Image, Jumbotron, Nav, NavItem, Row } from 'react-bootstrap';
import { Route, Switch, Redirect } from 'react-router-dom';

import NotificationSystem from 'react-notification-system';

import './Dashboard.css';
import DashboardNav from './DashboardNav';

//Charts
import CreditUtil from './Charts/CreditUtil';
import PBvAB from './Charts/PBvAB';


export default class Dashboard extends Component {
  
  render() {

    return (
    <div>
        <DashboardNav/>
        <div className='charts'>
          <PBvAB/>          
          <CreditUtil/>   
        </div>       
      </div>
    );  
  }
}