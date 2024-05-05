// import React, { Component } from 'react';
// import PostsList from './PostsList';

// class Home extends Component {
//   render() {
//     const { posts } = this.props;
//     return (
//       <div className="home">
//         <PostsList posts={posts} />
//       </div>
//     );
//   }
// }

// export default Home;

import React from 'react';
import { connect } from 'react-redux';
import PostsList from './PostsList';

const Home = ({ posts }) => (
  <div className="home">
    <PostsList posts={posts} />{' '}
    {/* Pass posts as props to PostsList component */}
  </div>
);

const mapStateToProps = (state) => ({
  posts: state.posts, // Map posts from Redux state to props
});

export default connect(mapStateToProps)(Home);
