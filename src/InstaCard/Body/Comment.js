/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';

const CommentDiv = styled.a(
  props => {
    let styles = []
    switch (props.type) {
      case 'dark':
        styles.push({ 
          color: '#999',
        })
        break;
      default:
        
    }
    return styles;
  }
)


const Comment = ({ username, comment ,theme}) => (
  <li className="poster-comment">
    <CommentDiv className="commenter-name" type={theme}>
      {username}
    </CommentDiv>
    <CommentDiv className="commenter-comment" type={theme}>
      {comment}
    </CommentDiv>
  </li>
);

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
}

Comment.defaultProps = {
  username: "testuser",
  comment: "テストのコメント",
}

export default Comment;
