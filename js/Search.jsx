import React from 'react'
import ShowCard from './ShowCard'
import Header from './Header'
import { connector } from './Store'
const { arrayOf, object, string } = React.PropTypes

const Search = (props) => (
  <div className='container'>
    <Header showSearch />
    <div className='shows'>
      {props.shows.filter((show) => (
        `${show.title} ${show.description}`.toUpperCase().indexOf(props.searchTerm.toUpperCase()) >= 0)
      ).map((show) => (
        <ShowCard {...show} key={show.imdbID} />
      ))}
    </div>
  </div>
)

Search.propTypes = {
  shows: arrayOf(object),
  searchTerm: string
}

export default connector(Search)
