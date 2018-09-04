import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  componentWillMount() { }
  componentDidMount() { }
  componentWillReceiveProps() { }
  componentWillUnmount() { }

  render() {
    return (
      <div className="content">
        {this.props.children}
      </div>
    )
  }
}
export default App;