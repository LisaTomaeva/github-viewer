export const GET_TREE = 'GET_TREE'

export const getTree = content => ({
  type: GET_TREE,
  payload: {
    repo: content
  }
})