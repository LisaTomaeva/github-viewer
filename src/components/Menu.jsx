import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, useParams, Link, useRouteMatch } from 'react-router-dom';
import TreeMenu from 'react-simple-tree-menu';
import { connect, useSelector } from 'react-redux';
import { getFolder, getFile } from '../actions/NavActions.js';

export function Menu(props) {
      let { owner, repo } = useParams();
      
      const tree = useSelector((state) => { 
        return (state.reducers.masterBranch.tree.map(item => ({
          key: item.sha,
          label: item.path,
          type: item.type
       }))
      )})

      function openItem(item) {
        const treeItem = tree.find(i => i.key === item.key)
        if(treeItem.type === "blob") {
          props.getFile(item.key)
        } else {
          props.getFolder(item.key)
        }
      }

      return (
        <div className="Nav">
          <h1>{`${owner} / ${repo}`}</h1>
          <Link to={`/${owner}/${repo}`}>Content</Link>
          <TreeMenu data={tree} onClickItem={openItem}/>
        </div>

      );
  }

  const mapDispatchToProps = {
    getFolder, 
    getFile
  }

  export default connect(null, mapDispatchToProps)(Menu);

  