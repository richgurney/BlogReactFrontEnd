import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div className="card">
        <div className="card-header">
          {post.title}
        </div>
        <div className="card-body">
          <div className="card-text">
            {post.body}
          </div>
          <div className="card-subtitle mb-2 text-muted">
            Author: {post.author}
          </div>
        </div>
        <Link to="/">Back</Link>
        <button
          type="button"
          className="btn btn-danger"
          onClick={this.onDeleteClick.bind(this)}
        > Delete
        </button>
      </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
