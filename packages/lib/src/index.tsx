// import noop from '@jswork/noop';
import cx from 'classnames';
import React, { Component, HTMLAttributes } from 'react';

const CLASS_NAME = 'react-number-up';
// const uuid = () => Math.random().toString(36).substring(2, 9);
export type ReactNumberUpProps = {
  value: number;
} & HTMLAttributes<HTMLDivElement>;

export default class ReactNumberUp extends Component<ReactNumberUpProps> {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static defaultProps = {
    value: 0,
  };

  private listDom: HTMLUListElement | null = null;

  state = {
    value: this.props.value,
    activeIndex: 0,
  };

  componentDidUpdate(prevProps: Readonly<ReactNumberUpProps>) {
    const { value } = this.props;
    if (value !== prevProps.value) {
      if (value > prevProps.value) {
        this.moveUp();
      } else {
        // move down
      }
    }
  }

  moveUp = () => {
    this.setState({ activeIndex: -1 });
  };

  moveDown = () => {
  };

  handleTransitionEnd = () => {
    console.log('remove style');
    (this.listDom as any).style.transitionDuration = 0;
  };

  render() {
    const { className, children, value, ...rest } = this.props;
    const { activeIndex, value: stateValue } = this.state;
    return (
      <div data-component={CLASS_NAME} className={cx(CLASS_NAME, className)} {...rest}>
        <ul
          className={`${CLASS_NAME}__list`}
          onTransitionEnd={this.handleTransitionEnd}
          style={{ top: `${activeIndex * 100}%` }}
          ref={el => this.listDom = el}
        >
          <li>{stateValue}</li>
          <li>{stateValue + 1}</li>
        </ul>
      </div>
    );
  }
}
