import React, { Component } from 'react';

class ThemedDecorations extends Component {

  render() {

    const addProp = React.Children.map(this.props.children, child => {
      return (
        React.cloneElement(child, {
          className: this.props.theme
        })
      )
    })

    return (
      <div>
        {addProp}
      </div>
    )
  }
}

export default ThemedDecorations
