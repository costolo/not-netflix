const React = require('react')

const Debugger = (props) => (
  <pre>
    <code style={{textAlign: 'left'}}>
      {JSON.stringify(props, null, 4)}
    </code>
  </pre>
)

module.exports = Debugger
