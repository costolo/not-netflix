const React = require('react')
const ShowCard = require('./ShowCard')
const Header = require('./Header')
const { object, string } = React.PropTypes
const { connector } = require('./Store')

const Search = (props) => (
  <div className='container'>
    <Header showSearch />
    <div className='shows'>
      {props.route.shows.filter((show) => (
        `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
      ).map((show) => (
        <ShowCard {...show} key={show.imdbID} />
      ))}
    </div>
  </div>
)

Search.propTypes = {
  route: object,
  searchTerm: string
}

module.exports = connector(Search)
