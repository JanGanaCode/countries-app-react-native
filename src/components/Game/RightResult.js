import React from 'react';
import Counter from './Counter';
import Refresh from './Refresh';
import {
  ResultWrapper,
  Image,
  Emoji,
  ResultLabelWrapper,
  ResultLabel
} from './styles/right-result-styles';

const RightResult = props => {
  const { action, progress } = props;

  return (
    <ResultWrapper>
      <Image>
        <Counter progress={progress} />
        <Emoji animation='bounceInDown' duration={800} delay={100}>
          😉
        </Emoji>
        <Refresh action={action} progress={progress} />
      </Image>
      <ResultLabelWrapper animation='bounceInDown' duration={800} delay={200}>
        <ResultLabel>That's the right answer!</ResultLabel>
      </ResultLabelWrapper>
    </ResultWrapper>
  );
};

export default RightResult;
