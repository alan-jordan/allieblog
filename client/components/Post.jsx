import React from 'react';
import moment from 'moment';

const Post = () => (
  <div className="individualPost">
    <div className="postHeader">
      <h3>This is a blog about cakes</h3>
      <span className="postSubHeader">
        {moment().format('D MMM YY')} Posted in <a href="#">Baking</a>,
        <a href="#"> Sweet</a>
      </span>
    </div>
    <div className="headerImage">
      <img
        className="titleImage"
        alt="I'm a cake"
        src="https://lickyourplatenz.files.wordpress.com/2017/01/img_8636.jpg?w=1280&h=1706"
      />
    </div>
  </div>
);

export default Post;
