import css from '@emotion/css/macro'
import styled from '@emotion/styled'

const FlexListContainer =  css`
  label: flex-list-container;
  display: flex;
`

const SwitcherUl = css`
  & > li {
    padding: 5px;
    margin-bottom: 7px;
}
`

const SwitcherA = styled.a(
  {
    color: '#262626',
    cursor: 'pointer',
  },
  props => {
    let styles = []
    switch (props.type) {
      case 'chosen':
        styles.push({ 
          color: '#36cfc9'
        })
        break;
      default:
        styles.push({
          ":hover" : {
            color: '#36cfc9'
          },
          ":active" : {
            color: '#36cfc9'
          }
        })
    }
    return styles;
  }
)

export { FlexListContainer, SwitcherA, SwitcherUl }