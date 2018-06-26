import React, { Component } from 'react'
import { connect } from 'react-redux';
import { likePost } from '../actions'

const e = React.createElement;

class LikeButton extends React.Component {
  // what does the constructor do?
  constructor(props) {
    // what does super do
    super(props)
    this.state = { liked: false };
    this.addLike = this.addLike.bind(this);
;  }

  addLike() {
    const { id } = this.props;
    this.props.likePost(id);
    this.setState({ liked: true })
  }

  render() {
    const { post } = this.props;

    if (this.state.liked) {
      return (
        <div>
          <button className="btn btn-primary" disabled>Like: ({post.likes})</button>
        </div>
      )
    }

    return (
      <div>
        <button className="btn btn-primary" onClick={ this.addLike }><span className="glyphicon glyphicon-align-left" aria-hidden="true"></span>({post.likes})</button>
      </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps ) {
  return { post: posts[ownProps.id] }
}

export default connect(mapStateToProps, { likePost }) (LikeButton);
