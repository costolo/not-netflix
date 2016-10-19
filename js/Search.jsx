const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data')

const Search = () => (
  <div className='container'>
    <header className='header'>
      <h1 className='brand'>svideo</h1>
      <input className='search-input' type='text' placeholder='search' />
    </header>
    <div className='shows'>
      {data.shows.map((show) => (
        <ShowCard {...show} key={show.imdbID} />
      ))}
    </div>
  </div>
)

module.exports = Search
