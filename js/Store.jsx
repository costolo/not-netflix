const redux = require('redux')
const reactRedux = require('react-redux')

const SET_SEARCH_TERM = 'setSearchTerm'
const initialState = {
  searchTerm: ''
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return Object.assign({}, state, {searchTerm: action.value})
    default:
      return state
  }
}

const store = redux.createStore(rootReducer)

const mapStateToProps = (state) => ({searchTerm: state.searchTerm})

const mapDispatchToProps = (dispatcher) => {
  return {
    setSearchTerm (searchTerm) {
      dispatcher({type: SET_SEARCH_TERM, value: searchTerm})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store }
