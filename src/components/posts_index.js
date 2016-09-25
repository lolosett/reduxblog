import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { bindActionCreators } from 'redux';

class PostsIndex extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }
  render(){
    return (
      <div>List of blog posts</div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchPosts }, dispatch)
}

export default connect(mapDispatchToProps) (PostsIndex);
