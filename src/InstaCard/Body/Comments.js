/** @jsx jsx */
import PropTypes from 'prop-types';
import Comment from './Comment';
import { css, jsx } from '@emotion/core';

const comments = css`
    label: commnets;
    margin-bottom: 4px;
    & a {
      margin-right: 0.3em;
    }
  `

const Comments = ({ data , theme}) => {
  const { commentOne, commentTwo } = data;
  
  return (
    <ul css={comments}>
      <Comment
        username={commentOne.poster}
        comment={commentOne.body} 
        theme={theme}
        />
      <Comment
        username={commentTwo.poster}
        comment={commentTwo.body} 
        theme={theme}
        />
    </ul>
  );
};

Comments.propTypes = {
  data: PropTypes.object
}

Comments.defaultProps = {
  data: {
    commentOne: {
      poster: "posterone",
      body: "This is the insta-card"
    },
    commentTwo: {
      poster: "postertwo",
      body: "So cool!"
    }
  }
}


export default Comments;