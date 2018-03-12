import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <div className="card">
          <div className="card-header" key={post.id}>
            {post.title}
          </div>
          <div className="card-body">
            <div className="card-text" key={post.id}>
              {post.body}
            </div>
            <div className="card-subtitle mb-2 text-muted" key={post.id}>
              Author: {post.author}
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="float-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        {this.renderPosts()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
