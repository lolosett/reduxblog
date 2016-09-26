import React, { Component } from 'react';
import { fetchPost } from '../actions/index';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { fetchPost, deletePost } from '../actions/index';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }
  render(){
    const {post} = this.props;
    if(!post) {
      return <div>Loading ...</div>;
    }
    return(
      <div>
        <Link to='/'>Back to Index</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
        <Link className="btn btn-primary" to="/"> Back </Link>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {post: state.posts.post}
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
