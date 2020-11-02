import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, useParams, Link, useRouteMatch } from 'react-router-dom';
import { getTree } from '../actions/NavActions.js';


export function Content(props)  {

  const a = useRouteMatch()


  useEffect(() => {
    props.getTree(a.params.owner, a.params.repo)    
  });

      return (
        <div className="Content">
          content
        </div>
      )
      }
      const mapDispatchToProps = {
        getTree,
      }
      
    export default connect(null, mapDispatchToProps)(Content);
  
