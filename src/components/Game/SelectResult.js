import React from 'react';
import Counter from './Counter';
import Refresh from './Refresh';
import {
  ResultWrapper,
  Image,
  Emoji,
  ResultLabelWrapper,
  ResultLabel
} from './styles/select-result-styles';

const SelectResult = props => {
  const { action, progress, isDisabledRefresh } = props;

  return (
    <ResultWrapper>
      <Image>
        <Counter progress={progress} />
        <Emoji
          animation='pulse'
          iterationCount='infinite'
          direction='alternate'
        >
          🤔
        </Emoji>
        <Refresh
          action={action}
          isDisabledRefresh={isDisabledRefresh}
          progress={progress}
        />
      </Image>
      <ResultLabelWrapper animation='zoomIn' duration={250} delay={250}>
        <ResultLabel>Select an option</ResultLabel>
      </ResultLabelWrapper>
    </ResultWrapper>
  );
};

export default SelectResult;
