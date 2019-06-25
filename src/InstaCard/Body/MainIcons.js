/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import HeartImg from '../../images/heart.png';
import HeartImgDark from '../../images/heart-gray.png';
import BubbleImg from '../../images/bubble.png';
import BubbleImgDark from '../../images/bubble-gray.png';
import BookmarkImg from '../../images/bookmark.png';
import BookmarkImgDark from '../../images/bookmark-gray.png';
import { css, jsx } from '@emotion/core';

const flexContainer = css`
  label: flex-container;
  display: flex;
`
const cardMainIcons = css`
  label: card-main-icons;
  margin-top: 4px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & ul > li {
    margin-right: 5px;
  }
`


const MainIcons = ({ theme }) => (
  <div css={cardMainIcons}>
    <ul css={flexContainer} className="card-main-icons-left">
      <li className="icon-heart">
        <img
          alt="heart-icon"
          src={theme === 'light' ? HeartImg : HeartImgDark}
          height="30px"/>
      </li>
      <li className="icon-comment">
        <img 
          alt="bubble-icon"
          src={theme === 'light' ? BubbleImg : BubbleImgDark}
          height="30px"/>
      </li>
    </ul>
    <ul css={flexContainer} className="card-main-icons-right">
      <li className="icon-bookmark icons-right">
        <img 
          alt="bookmark-icon"
          src={theme === 'light' ? BookmarkImg : BookmarkImgDark}
          height="30px"/>
      </li>
    </ul>
  </div>
);

Comment.propTypes = {
  theme: PropTypes.string.isRequired
}

Comment.defaultProps = {
  theme: "light",
}

export default MainIcons;