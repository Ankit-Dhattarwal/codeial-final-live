import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
// import PropTypes from 'prop-types';
import coder from '../assets/code.png';

import PostsList from './PostsList';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img src={coder} alt="logo" />
          </div>
          <div className="search-container">
            <img
              className="search-icon"
              src="https://cdn2.iconfinder.com/data/icons/minimal-set-five/32/minimal-48-512.png"
              alt="search-icon"
            />
            <input placeholder="search" />
            <div className="search-results">
              <ul>
                <li className="search-results-row">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcrHz4vrNrDq6VEqSADONhWK6hIdSbmI7WJV_OxLlZA&s"
                    alt="user-dp"
                  />
                  <span>Ankit Dhattarwal</span>
                </li>
                <li className="search-results-row">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPcrHz4vrNrDq6VEqSADONhWK6hIdSbmI7WJV_OxLlZA&s"
                    alt="user-dp"
                  />
                  <span>Amit Dhattarwal</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-nav">
            <div className="user">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                alt="user-dp"
              />
              <span>Ankit Dhattarwal</span>
            </div>
            <div className="nav-links">
              <ul>
                <li>Log in</li>
                <li>Log out</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </nav>
        <PostsList posts={posts} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

// App.prototype = {
//   posts: PropTypes.array.isRequired,
// };

export default connect(mapStateToProps)(App);
