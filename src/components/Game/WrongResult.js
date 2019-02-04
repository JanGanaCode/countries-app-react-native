import React from 'react';
import Counter from './Counter';
import Refresh from './Refresh';
import {
  ResultWrapper,
  Image,
  Emoji,
  ResultLabelWrapper,
  Bold,
  ResultLabel
} from './styles/wrong-result-styles';

const WrongResult = props => {
  const { action, correctOption, progress } = props;

  return (
    <ResultWrapper>
      <Image>
        <Counter progress={progress} />
        <Emoji animation='slideInUp' duration={700} delay={50}>
          🙄
        </Emoji>
        <Refresh action={action} progress={progress} />
      </Image>
      <ResultLabelWrapper animation='slideInUp' duration={500} delay={0}>
        <ResultLabel>
          <Bold>Wrong!</Bold>
        </ResultLabel>
        <ResultLabel>
          Correct answer is <Bold>{correctOption}.</Bold>
        </ResultLabel>
      </ResultLabelWrapper>
    </ResultWrapper>
  );
};

export default WrongResult;
