import React from 'react'
import { Link } from 'react-router'

const Landing = () => (
  <div className='home-info'>
    <h1 className='title'>svideo</h1>
    <input className='search' type='text' placeholder='search' />
    <Link to='/search' className='browse-all'> or browse all</Link>
  </div>
)

export default Landing
