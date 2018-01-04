import React, { Component } from 'react'
import './css/Background.css'
import data from './data/data'
import GameBoard from './components/GameBoard'
import ChoiceBoard from './components/ChoiceBoard'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allQuestions: data.allQuestions,
      currentQuestion: data.allQuestions[0],
      progress: 1,
      userAnswer: [],
      submitEnabled: false,
      elementShown: true,
      progressMessage: '???',
      score: 0,
      legendShown: false
    }
  }

  onChoiceClick = answer => {
    const { userAnswer } = this.state
    if (userAnswer.length < 1) {
      userAnswer.length === 0 ? this.setState({ submitEnabled: true }) :
        this.setState({ submitEnabled: false })
    }
    this.setState({ userAnswer: [answer] })
  }

  onSubmitClick = () => {
    const { score, currentQuestion, userAnswer, elementShown } = this.state
    this.setState({ elementShown: !elementShown })
    if (userAnswer[0] === currentQuestion.rightAnswer[0]) {
      this.setState({
        score: score + 20,
        progressMessage: 'Correct!'
      })
    } else {
      this.setState({
        progressMessage: 'Sorry!'
      })
    }
  }

  nextQuestionClick = () => {
    const { progress, allQuestions, elementShown } = this.state
    if (progress < allQuestions.length) {
      this.setState({
        progress: progress + 1,
        currentQuestion: allQuestions[progress],
        submitEnabled: false,
        elementShown: !elementShown,
        userAnswer: [],
        progressMessage: '???'
      })
    }
  }

  onLegendClick = () =>{
    this.setState({legendShown: !this.state.legendShown })
    console.log('oo')
  }

  render() {
    return (
      <div className='App'>
        <header className='page-title'>Country Facts Quiz</header>
        <section className='game-container'>
          <GameBoard progress={this.state.progress}
            score={this.state.score} progressMessage={this.state.progressMessage}
            elementShown={this.state.elementShown}
            currentQuestion={this.state.currentQuestion} 
            onLegendClick={this.onLegendClick}
            legendShown={this.state.legendShown}/>
          <ChoiceBoard choices={this.state.currentQuestion.choices}
            submitEnabled={this.state.submitEnabled}
            onChoiceClick={this.onChoiceClick}
            onSubmitClick={this.onSubmitClick}
            nextQuestionClick={this.nextQuestionClick}
            elementShown={this.state.elementShown} />
        </section>
      </div>
    )
  }
}

export default App
