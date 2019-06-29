/** @jsx jsx */
import Avatar from '../images/avatar-one.png';
import PropTypes from 'prop-types';
import { css , jsx } from '@emotion/core';

const cardHeader = css`
  label: card-header;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #efefef;
  padding: 16px;
  height: 60px;
`

const posterAvatar = css`
  label: poster-avatar;
  margin-right: 12px;
`

const posterAvatarImg = css`
  label: poster-avatar-img;
  border-radius: 50%;
  border: 1px solid #dddddd;
  height: 30px;
  width: 30px;
`

const Header = ({ data }) => (
  <section css={cardHeader} >
    <div css={posterAvatar}>
      <img alt="アバター" src={data.posterAvatar} css={posterAvatarImg}/>
    </div>
    <div className="poster-name">
      {data.poster}
    </div>
  </section>
);

Header.propTypes = {
  data: PropTypes.object
}

Header.defaultProps = {
  data: {
    posterAvatar: Avatar,
    poster: "testposter"
  }
}

export default Header;