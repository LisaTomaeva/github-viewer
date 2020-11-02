import React, { Component, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useParams, Link, useRouteMatch } from 'react-router-dom';

export default function Menu() {
      let { owner, repo } = useParams();

      return (
        <div className="Nav">
          menu
          <Link to={`/${owner}/${repo}`}>Content</Link>
        </div>

      );
  }

  const mapStateToProps = (state, ownProps) => ({
  })
  