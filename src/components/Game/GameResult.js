import React from 'react';
import {
  GameResultWrapper,
  Score,
  Bold,
  Graphics,
  Emoji,
  ResetQuizButton,
  ResetQuizLabel
} from './styles/game-result-styles';

const GameResult = props => {
  const { resetQuiz, score } = props;

  return (
    <GameResultWrapper>
      <Score animation='bounceInDown' delay={500} duration={500}>
        You scored <Bold>{score}</Bold> out of <Bold>10</Bold> points in this
        session.
      </Score>
      <Graphics animation='bounceInDown'>
        <Emoji
          animation='pulse'
          iterationCount='infinite'
          direction='alternate'
        >
          {score < 3 ? '🤭' : null}
          {score > 2 && score < 4 ? '🙄' : null}
          {score > 3 && score < 5 ? '👍' : null}
          {score > 4 && score < 7 ? '🙌' : null}
          {score > 6 && score < 9 ? '😉' : null}
          {score === 9 ? '🤓' : null}
          {score === 10 ? '🤩' : null}
        </Emoji>
      </Graphics>
      <ResetQuizButton
        onPress={resetQuiz}
        animation='bounceInUp'
        delay={700}
        duration={500}
      >
        <ResetQuizLabel>Start again</ResetQuizLabel>
      </ResetQuizButton>
    </GameResultWrapper>
  );
};

export default GameResult;
