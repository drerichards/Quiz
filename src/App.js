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
      userAnswers: [],
      submitEnabled: false,
      choiceClicked: false
    }
  }

  onChoiceClick = answer => {
    const { userAnswers, choiceClicked } = this.state    
    let user_answer = answer.target.innerText
    this.setState({ choiceClicked: !choiceClicked })
    if (userAnswers.length < 2) {
      this.setState({ userAnswers: [...userAnswers, user_answer] })
      userAnswers.length >= 1 ? this.setState({ submitEnabled: true }) :
        this.setState({ submitEnabled: false })
    }
  }

  onSubmitClick = () => {
    console.log('jjj')

  }

  nextQuestionClick = () => {
    const { progress, allQuestions } = this.state
    if (progress < allQuestions.length) {
      this.setState({
        progress: progress + 1,
        currentQuestion: allQuestions[progress],
        submitEnabled: false,
        userAnswers: []
      })
    }
  }

  render() {
    return (
      <div className='App'>
        <header className='page-title'>Country Facts Quiz</header>
        <section className='game-container'>
          <GameBoard currentQuestion={this.state.currentQuestion} />
          <ChoiceBoard choices={this.state.currentQuestion.choices}
            choiceClicked={this.state.choiceClicked}
            submitEnabled={this.state.submitEnabled}
            onChoiceClick={this.onChoiceClick}
            onSubmitClick={this.onSubmitClick}
            nextQuestionClick={this.nextQuestionClick} />
        </section>
      </div>
    )
  }
}

export default App
