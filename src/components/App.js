import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Header from './Header/Header';
import Compose from './Compose/Compose';
import Post from './Post/Post';


class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      baseUrl: 'https://practiceapi.devmountain.com/api'
    };

    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.createPost = this.createPost.bind(this);
  }
  axios

  componentDidMount() {
    axios.get(`${this.state.baseUrl}/posts`)
      .then(res => {
        this.setState({ posts: res.data });
      });
  }

  updatePost( id, text ) {
    axios.put(`${this.state.baseUrl}id=${ id }`, { text }).then( results => {
      this.setState({ posts: results.data });
    });
  }

  deletePost() {

  }

  createPost() {

  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header />

        <section className="App__content">

          <Compose />
          {
            posts.map(post => (
              <Post
                key={post.id}
                text={post.text}
                date={post.date}
                id={post.id}
                updatePostFn={this.updatePost} />
            ))
          }

        </section>
      </div>
    );
  }
}

export default App;
