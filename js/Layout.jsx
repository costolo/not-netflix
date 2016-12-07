import React from 'react'
const { element } = React.PropTypes

const Layout = (props) => (
  <div className='app-container'>
    {props.children}
  </div>
)

Layout.propTypes = {
  children: element.isRequired
}

export default Layout
