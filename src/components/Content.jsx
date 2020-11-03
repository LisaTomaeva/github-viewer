import React, { Component, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, useParams, Link, useRouteMatch } from 'react-router-dom';
import { getTree } from '../actions/NavActions.js';


export function Content(props)  {

  const match = useRouteMatch();

  useEffect(() => {
    props.getTree(match.params.owner, match.params.repo)    
  });

  const text = useSelector((state) => { 
    return state.reducers.masterBranch.currentFile
  })
  return (
    <div className="Content">
      {text}
    </div>
  )}
    const mapDispatchToProps = {
      getTree,
    }
      
    export default connect(null, mapDispatchToProps)(Content);
  
