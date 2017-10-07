import React from 'react';
import moment from 'moment';

const Post = () => (
  <div className="individualPost">
    <div className="date">{moment().format('D MMM YY')}</div>
    <h3>Title</h3>
    <img
      className="titleImage"
      alt="I'm a cake"
      src="https://lickyourplatenz.files.wordpress.com/2017/01/img_8636.jpg?w=1280&h=1706"
    />
  </div>
);

export default Post;
