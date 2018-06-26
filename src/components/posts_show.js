import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import MarkdownRenderer from 'react-markdown-renderer';
import Parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import DateFormat from 'dateformat';
import LikeButton from './like_button';

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

  renderMarkdown(body) {
    return (
      <div>
        {Parser(body)}
      </div>
    )
  }

  formatStartDate(date) {
    return DateFormat(date, "dddd - mmmm dS - yyyy, h:MM TT");
  }

  render() {
    const { post } = this.props;

    const blogContainer = {
      marginTop: 87,
      padding: '30px 30px',
    }

    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div style={ blogContainer }>
        <Link to="/">Home</Link>
        <div>
          <h1>{post.title}</h1>
        </div>
        <div className="blog-details">
          RICHARD GURNEY
        </div>
        <div className="blog-details">
          {this.formatStartDate(post.createdAt)}
        </div>


        <div className="card-body">
          <div className="card-text">
            {this.renderMarkdown(post.body)}
          </div>
          <div className="card-subtitle mb-2 text-muted">
            RG- <Link to="/">Back</Link>
          </div>
          <div>
            <LikeButton />
            <h5>Likes: {post.likes}</h5>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
