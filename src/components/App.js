import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import { fetchPosts } from '../actions/posts';
// import PropTypes from 'prop-types';

import PostsList from './PostsList';
import Navbar from './Navbar';

const Login = () => <div>Login</div>;

const Signup = () => <div>Signup</div>;

const Home = () => <div>Home</div>;

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    return (
      <Router>
        <div>
          <Navbar />
          {/* <PostsList posts={posts} /> */}

          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Router>
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
