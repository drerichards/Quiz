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
      currentQuestion: data.allQuestions[1],
      progress: 0,
      userAnswers: []
    }
  }
  render() {
    return (
      <div className='App'>
        <header className='page-title'>Country Facts Quiz</header>
        <section className='game-container'>
          <GameBoard currentQuestion={this.state.currentQuestion}/>
          <ChoiceBoard choices={this.state.currentQuestion.choices}/>
        </section>
      </div>
    )
  }
}

export default App
