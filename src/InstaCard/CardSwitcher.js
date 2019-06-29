/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';
import { SwitcherA, SwitcherUl } from '../styled/flexboxUtils'

const CardSwitcher = ({ id, switchCard }) => (
  <ul css={SwitcherUl}>
    <li>
      <SwitcherA
        type={id === 1 ? "chosen" : "default"}
        className={id === 1 ? "chosen" : "default"}
        onClick={(e) => switchCard(1, e)}>
        1枚目
      </SwitcherA>
    </li>
    <li>
      <SwitcherA
        type={id === 2 ? "chosen" : "default"}
        className={id === 2 ? "chosen" : "default"}
        onClick={(e) => switchCard(2, e)}>
        2枚目
      </SwitcherA>
    </li>
  </ul>
);

Comment.propTypes = {
  switchCard: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

Comment.defaultProps = {
  id: 1,
}

export default CardSwitcher;