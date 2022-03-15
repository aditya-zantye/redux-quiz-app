import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Start from './components/Start';
import Question_List from './components/Question_List';
import { connect } from 'react-redux';
import React from 'react';
import Finish from './components/Finish';


class App extends React.Component{

  render(){

    console.log('props',this.props)

    return(
      <div className="App">
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/question-list' element={<Question_List question_array={this.props.question_array} />} />
        <Route path='/finish' element={<Finish question_array={this.props.question_array}
        />} />
      </Routes>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    selected_quiz: state.start.selected_quiz_value,
    question_array: state.start.question_array
  }
}

export default connect(mapStateToProps,null)(App);
