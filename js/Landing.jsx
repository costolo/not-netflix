import React from 'react'
import { Link, browserHistory } from 'react-router'
import { connector } from './Store'
const { func, string } = React.PropTypes

class Landing extends React.Component {
  constructor (props) {
    super(props)
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
    this.gotoSearch = this.gotoSearch.bind(this)
    this.seeAll = this.seeAll.bind(this)
  }

  handleSearchTermEvent (e) {
    this.props.setSearchTerm(e.target.value)
  }

  seeAll () {
    this.props.setSearchTerm('')
  }

  gotoSearch (e) {
    browserHistory.push('search')
    e.preventDefault()
  }

  render () {
    return (
      <div className='home-info'>
        <h1 className='title'>not netflix</h1>
        <form onSubmit={this.gotoSearch}>
          <input value={this.props.searchTerm} onChange={this.handleSearchTermEvent}
            className='search' type='text' placeholder='search' />
        </form>
        <Link to='/search' onClick={this.seeAll} className='browse-all'> or browse all</Link>
      </div>
    )
  }
}

Landing.propTypes = {
  setSearchTerm: func,
  seAll: func,
  searchTerm: string
}

export default connector(Landing)
