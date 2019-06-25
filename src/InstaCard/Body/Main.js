/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import MainIcons from './MainIcons';
import Comments from './Comments';
import CommentBox from './CommentBox'
import { css, jsx } from '@emotion/core';

const cardMain = css`
  label: card-main;
  padding: 0 16px;
`
const postDate = css`
  label: post-date;
  margin-bottom: 4px;
  font-size: 10px;
  letter-spacing: 0.2px;
  color: #999;
  margin-bottom: 5px;
  text-transform: uppercase;
`
const likeCounts = css`
  label: like-counts
  font-weight: bold;
  margin-bottom: 8px;
`


const BodyMain = ({ theme, chosenId, data }) => (
  <section css={cardMain}>
    <MainIcons theme={theme} />
    <div css={likeCounts}>100 likes</div>
    <Comments data={data} />
    <div css={postDate}>1日前</div>
    <CommentBox chosenId={chosenId} />
  </section>
);

Comment.propTypes = {
  theme: PropTypes.string.isRequired,
  chosenId: PropTypes.number.isRequired
}

Comment.defaultProps = {
  theme: "light",
  chosenId: 1,
}

export default BodyMain;