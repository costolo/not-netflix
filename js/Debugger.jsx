const React = require('react')

const Debugger = (props) => (
  <pre style={{textAlign: 'left'}}>
    <code>
      {JSON.stringify(props, null, 4)}
    </code>
  </pre>
)

module.exports = Debugger
