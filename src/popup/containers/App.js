import React, { Component } from 'react'
import App from '../components/App'

export default class AppContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      recording: []
    }
    
    this.onRestart = this.onRestart.bind(this)
  }

  render () {
    return React.createElement(App, {
      ...this.props,
      ...this.state,
      onRestart: this.onRestart
    })
  }

  componentDidMount () {
    chrome.storage.sync.get('recording', ({ recording }) => {
      this.setState({ recording })
    })
  }

  onRestart () {
    chrome.browserAction.setBadgeText({ text: '' })
    chrome.runtime.reload()
    window.close()
  }
}
