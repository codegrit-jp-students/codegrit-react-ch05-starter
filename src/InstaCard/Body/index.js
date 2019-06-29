/** @jsx jsx */
import PropTypes from 'prop-types';
import BodyMain from './Main';
import MainImg from '../../images/image-one.jpg';
import { css , jsx } from '@emotion/core';

const cardImageWrapper = css`
  label: card-body;
  width: 100%;
  margin: 0;
  padding: 0;
`

const cardImage = css`
  label: card-image;
  height: 450px;
  width: 611px;
  border: 0;
  backgroundColor: #dddddd;
`

const Body = ({ theme, data, chosenId }) => {
  console.log(chosenId);
  const { imageUrl } = data;
  return (
    <section>
      <div css={cardImageWrapper}>
        <img alt="メイン画像" src={imageUrl} css={cardImage} />
      </div>
      <BodyMain theme={theme} data={data} chosenId={chosenId} />
    </section>
  );
};

Comment.propTypes = {
  theme: PropTypes.string.isRequired,
  data: PropTypes.object,
}

Comment.defaultProps = {
  theme: "light",
  data: {
    imageUrl: MainImg
  }
}

export default Body;