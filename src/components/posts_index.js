import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';
import MarkdownRenderer from 'react-markdown-renderer';
import DateFormat from 'dateformat';

import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  formatStartDate(date) {
    return DateFormat(date, "dddd - mmmm dS - yyyy, h:MM TT");
  }

  renderPosts() {
    const headerLink = {
      fontSize: 60,
      color: 'black',
      fontWeight: 900,
    }

    const postsSection = {
      position: 'relative',
      top: '-40px',
      borderRadius: '1px',
      padding: '10px 20px',
      backgroundColor: 'white',
      marginBottom: '20px',
    }

    const readButton = {
      backgroundColor: '#2D3142',
      borderRadius: '10px',
      color: '#ffffff',
      padding: '5px 6px',
      marginTop: '5px',
    }

    return _.map(this.props.posts, post => {
      return (
        <div style={ postsSection } >
          <div key={post.id}>
            <Link style={ headerLink } to={`/posts/${post._id}`}>
              {post.title}
            </Link>
            <h3>{post.author}</h3>
            <h5>{this.formatStartDate(post.createdAt)}</h5>
            <Link style={ readButton } to={`/posts/${post._id}`}>
              Read
            </Link>
          </div>
        </div>
      );
    });
  }

  render() {
    const header = {
      backgroundImage: 'url(https://photos.smugmug.com/OpsviewLondon/n-FK92Hk/i-QPJNRwK/0/aedce179/X4/i-QPJNRwK-X4.jpg)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      height: 500,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: '100px',
    }

    const sectionOne = {
      backgroundColor: '#f0f1f3',
      width: '100%',
    }

    return (
      <div>
        <div style={ header }>
        </div>
        <div style={ sectionOne }>
          <div className="container" >
            {this.renderPosts()}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
