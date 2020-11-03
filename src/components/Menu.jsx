import React from 'react';
import { BrowserRouter as Router, Route, Switch, useParams, Link, useRouteMatch } from 'react-router-dom';
import TreeMenu from 'react-simple-tree-menu';
import { connect, useSelector } from 'react-redux';
import { getFolder, getFile } from '../actions/NavActions.js';

export function Menu(props) {
      let { owner, repo } = useParams();
      
      const tree = useSelector((state) => { 
        return (state.reducers.masterBranch.tree
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
          <h1>{`${owner}`}</h1>
          <TreeMenu data={tree} onClickItem={openItem}/>
        </div>

      );
  }

  const mapDispatchToProps = {
    getFolder, 
    getFile
  }

  export default connect(null, mapDispatchToProps)(Menu);

  