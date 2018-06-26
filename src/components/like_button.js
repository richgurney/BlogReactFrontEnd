import React, { Component } from 'react'

const e = React.createElement;

class LikeButton extends React.Component {
  // what does the constructor do?
  constructor(props) {
    // what does super do
    super(props)
    this.state = { liked: false };
    this.addLike = this.addLike.bind(this);
  }

  addLike() {
    this.setState({ liked: true })
  }

  render() {
    if (this.state.liked) {
      return (
        <div>'You liked this....';</div>
      )
    }

    return (
      <button className="btn btn-primary" onClick={ this.addLike }>Like</button>
    )
  }
}

export default LikeButton
