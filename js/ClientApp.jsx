var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')

var MyFirstComponent = () => (
  <div>
    <MyTitle title='peru' color='peru' />
    <MyTitle title='papayawhip' color='papayawhip' />
    <MyTitle title='blanchedalmond' color='blanchedalmond' />
    <MyTitle title='f06d06' color='#f06d06' />
  </div>
)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
