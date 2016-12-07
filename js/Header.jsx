const React = require('react')
const { func, bool, string } = React.PropTypes
const { Link } = require('react-router')
const { connector } = require('./Store')

class Header extends React.Component {
  constructor () {
    super()
    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
  }

  handleSearchTermEvent (e) {
    this.props.setSearchTerm(e.target.value)
  }

  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input
        className='search-input'
        type='text' placeholder='search'
        value={this.props.searchTerm}
        onChange={this.handleSearchTermEvent}
      />
    } else {
      utilSpace = (
        <h2 className='header-back'>
          <Link to='/search'>back</Link>
        </h2>
      )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>not netflix</Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
}

Header.propTypes = {
  setSearchTerm: func,
  showSearch: bool,
  searchTerm: string
}

module.exports = connector(Header)
