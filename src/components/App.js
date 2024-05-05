import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { fetchPosts } from '../actions/posts';
// import PropTypes from 'prop-types';

import Home from './Home';
import Navbar from './Navbar';
import Page404 from './Page404';
import Login from './Login';

const Signup = () => <div>Signup</div>;

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

          <Routes>
            <Route
              path="/"
              // render={(props) => {
              //   return <Home {...props} posts={posts} />;
              // }}
              element={<Home />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Page404 />} />
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
