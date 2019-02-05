import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { countries } from './../../data/countries';
import GameResult from './GameResult';
import SelectResult from './SelectResult';
import RightResult from './RightResult';
import WrongResult from './WrongResult';
import Flags from './../Countries/Flags';
import {
  GameWrapper,
  OptionsWrapper,
  Option,
  OptionLabel
} from './styles/game-styles';

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countries: countries,
      currentFlag: '',
      correctOption: {},
      uncorrectOptions: [],
      selectedOptionId: '',
      disabledStatus: false,
      isDisabledRefresh: true,
      options: [],
      result: 'select',
      quizProgress: 0,
      score: 0
    };
  }

  componentDidMount() {
    this.refreshGame();
  }

  optionOnPress = guess => {
    this.setState({ result: guess });
  };

  buttonSelected = index => {
    this.setState({ selectedOptionId: index, disabledStatus: true });
    if (this.state.selectedOptionId !== '') {
      this.setState({ isDisabledRefresh: false });
    }
  };

  refreshGame = () => {
    // flag
    const flags = this.state.countries.map(country => country.alpha2Code);
    const countryId = flags[Math.floor(Math.random() * flags.length)];
    this.setState({ currentFlag: countryId });

    // correct option
    let correctOption = {};
    this.state.countries.map(country => {
      if (country.alpha2Code === countryId) {
        correctOption = { id: country.alpha2Code, name: country.name };
      }

      this.setState({ correctOption: correctOption });
    });

    // uncorrect options
    let uncorrectOptions = [];
    this.state.countries.map(country => {
      {
        country.alpha2Code !== countryId
          ? uncorrectOptions.push({
              id: country.alpha2Code,
              name: country.name
            })
          : null;
      }

      uncorrectOptions.sort(() => 0.5 - Math.random());
      const slicedUncorrectOptions = uncorrectOptions.slice(0, 2);
      this.setState({ uncorrectOptions: slicedUncorrectOptions });

      // final options
      let options = [...slicedUncorrectOptions, correctOption];
      options.sort(() => 0.5 - Math.random());
      this.setState({ options });
    });

    this.setState({
      selectedOptionId: '',
      result: 'select',
      quizProgress: (this.state.quizProgress += 1),
      disabledStatus: false
    });

    if (this.state.result === 'right') {
      this.setState({ score: (this.state.score += 1) });
    }
  };

  resetQuiz = () => {
    this.setState({ quizProgress: 1, score: 0 });
  };

  render() {
    const {
      currentFlag,
      correctOption,
      options,
      selectedOptionId,
      disabledStatus,
      isDisabledRefresh,
      result,
      quizProgress,
      score
    } = this.state;

    if (quizProgress < 11) {
      return (
        <GameWrapper>
          <Flags
            flagStyle={styles.flagStyle}
            item={{ alpha2Code: currentFlag }}
          />
          <OptionsWrapper>
            {options.map((option, index) => {
              return (
                <Option
                  animation='zoomInLeft'
                  delay={150}
                  duration={500}
                  key={option.id}
                  selectedStyleClass={
                    index === selectedOptionId ? 'selected' : null
                  }
                  disabled={disabledStatus}
                  onPress={() => {
                    {
                      option.id === correctOption.id
                        ? (guess = 'right')
                        : (guess = 'wrong');
                    }
                    this.optionOnPress(guess);
                    this.buttonSelected(index);
                  }}
                >
                  <OptionLabel
                    selectedStyleClass={
                      index === selectedOptionId ? 'selected' : null
                    }
                  >
                    {option.name}
                  </OptionLabel>
                </Option>
              );
            })}
          </OptionsWrapper>
          {result === 'right' ? (
            <RightResult action={this.refreshGame} progress={quizProgress} />
          ) : null}
          {result === 'wrong' ? (
            <WrongResult
              action={this.refreshGame}
              correctOption={correctOption.name}
              progress={quizProgress}
            />
          ) : null}
          {result === 'select' ? (
            <SelectResult
              isDisabledRefresh={isDisabledRefresh}
              action={this.refreshGame}
              progress={quizProgress}
            />
          ) : null}
        </GameWrapper>
      );
    }

    return <GameResult resetQuiz={this.resetQuiz} score={score} />;
  }
}

const styles = StyleSheet.create({
  flagStyle: {
    flex: 1,
    width: 150,
    height: 80,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    borderWidth: 10,
    borderColor: '#fff'
  }
});

export default Game;
