import React from 'react'
import Header from './Header'
import axios from 'axios'
import { connector } from './Store'
const { arrayOf, object } = React.PropTypes

class Details extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      omdbData: {}
    }
  }

  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?i=${this.assignShow(this.props.params.id).imdbID}`)
      .then((response) => {
        this.setState({omdbData: response.data})
      })
      .catch((err) => {
        console.error('axios error', err)
      })
  }

  assignShow (id) {
    const showArray = this.props.shows.filter((show) => show.imdbID === id)
    return showArray[0]
  }

  render () {
    const { title, description, year, poster, trailer } = this.assignShow(this.props.params.id)
    let rating
    if (this.state.omdbData.imdbRating) {
      rating = <h3 className='video-rating'>{this.state.omdbData.imdbRating}</h3>
    }
    return (
      <div className='container'>
        <Header />
        <div className='video-info'>
          <h1 className='video-title'>{title}</h1>
          <h2 className='video-year'>({year})</h2>
          {rating}
          <img className='video-poster' src={`/public/img/posters/${poster}`} />
          <p className='video-description'>{description}</p>
        </div>
        <div className='video-container'>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
}

Details.propTypes = {
  params: object,
  shows: arrayOf(object).isRequired
}

export default connector(Details)
