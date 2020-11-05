export const GET_TREE = 'GET_TREE';
export const GET_FOLDER = 'GET_FOLDER';
export const GET_FILE = 'GET_FILE'

const TEST_TOKEN = "5c3636f6e3d76cfaf5b20dd686378fba050e3e5a"

export const getTree = (owner, repo) => {
  return (dispatch) => {    
    fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees/master`, { headers: {
      "Authorization": `token ${TEST_TOKEN}`
    }}).then(res => res.json()).then(data => {dispatch({ type: GET_TREE, payload: data.tree.map(item => ({
      key: item.sha,
      label: item.path,
      type: item.type
   }))})})
  };
};

export const getFile = (id) => {
  return (dispatch) => {    
    fetch(`https://api.github.com/repos/reduxjs/react-redux/git/blobs/${id}`, { headers: {
      "Authorization": `token ${TEST_TOKEN}`,
      'accept': 'application/vnd.github.VERSION.raw'
    }}).then(res => res.text()).then(data => {dispatch({ type: GET_FILE, payload: data})})
  };
};

export const getFolder = (id) => {
  return (dispatch) => {    
    return fetch(`https://api.github.com/repos/reduxjs/react-redux/git/trees/${id}`, { headers: {
      "Authorization": `token ${TEST_TOKEN}`
    }}).then(res => res.json()).then(data => {dispatch({ type: GET_FOLDER, payload: data.tree.map(item => ({
      key: item.sha,
      label: item.path,
      type: item.type,
      parent: id
   }))})})
    
  };
};