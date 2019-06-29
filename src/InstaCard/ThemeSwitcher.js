/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx } from '@emotion/core';
import { SwitcherA ,SwitcherUl} from '../styled/flexboxUtils'

const ThemeSwitcher = ({ theme, switchTheme }) => (
  <ul css={SwitcherUl}>
    <li>
      <SwitcherA 
        type={theme === 'light' ? "chosen" : "default"}
        // className={theme === 'light' ? "chosen" : "default"}
        onClick={(e) => switchTheme('light', e)}>
        Light
      </SwitcherA>
    </li>
    <li>
      <SwitcherA 
        type={theme === 'dark' ? "chosen" : "default"}        
        // className={theme === 'dark' ? "chosen" : "default"}
        onClick={(e) => switchTheme('dark', e)}>
        Dark
      </SwitcherA>
    </li>
  </ul>
);

Comment.propTypes = {
  switchTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired
}

Comment.defaultProps = {
  theme: "light",
}

export default ThemeSwitcher;