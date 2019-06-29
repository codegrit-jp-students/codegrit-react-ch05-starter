/** @jsx jsx */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/core';

const commentBox = css`
      label: comment-box;
      border-top: 1px solid #efefef;
      color: #999;
      min-height: 56px;
      display: flex;
      align-items: center;
      font-size: 0.9em;
    `

export default class extends Component {
  static propTypes = {
    chosenId: PropTypes.number
  }
  static defaultProps = {
    chosenId: 1
  }
  state = {
    comment: "実はコメントを書いているところです。"
  }
  componentDidUpdate(prevProps) {
    console.log(prevProps);
    console.log(this.props)
    if (prevProps.chosenId !== this.props.chosenId) {
      this.setState({
        comment: ''
      })
    }
  }

  render() {
    const { comment } = this.state;
    return (
      <section css={commentBox}>
        <div className="comment-area">{comment === '' ? "コメントする" : comment}</div>
      </section>
    );
  }
}