/* global React ReactDOM */

var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  // enhanced object literal syntax
  render() {
    return (
      div(null,
        h1({
          style: {
            color: this.props.color
          }
        }, this.props.title)
      )
    )
  }
})

var ce = React.createElement
var cf = React.createFactory(MyTitle)

var MyFirstComponent = (
  div(null,
    React.createElement(MyTitle, {
      title: 'prop 0',
      color: 'blanchedalmond'
    }),

    cf({
      title: 'prop1',
      color: 'mediumseagreen'
    }),

    ce(MyTitle, {
      title: 'prop2',
      color: 'peru'
    })
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
