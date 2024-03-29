﻿import React from "react";
import { Route } from "react-router";
import Layout from ".././layout/Layout";
import Home from ".././pages/Home";
import UserManagement from ".././pages/UserManagement";
import CardForm from ".././pages/Card";
import Classroom from ".././pages/Classroom";

export default () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route path="/userManagement" component={UserManagement} />
    <Route path="/card" component={CardForm} />
    <Route path="/classroom" component={Classroom} />
  </Layout>
);
