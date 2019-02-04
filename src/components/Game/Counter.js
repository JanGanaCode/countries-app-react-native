import React from 'react';
import { CounterWrapper, CounterInner } from './styles/counter-styles';

const Counter = props => {
  const { progress } = props;

  return (
    <CounterWrapper>
      <CounterInner>{progress} / 10</CounterInner>
    </CounterWrapper>
  );
};

export default Counter;
