import React, { Component } from 'react';
import Sound from 'react-sound';
import Alerts from "./Alerts";
import Score from "./Score";
import Main from "./Main";
import Card from "./Card";
import Footer from "./Footer";
import cards from "../assets/json/cards.json";
import soundCorrect from '../assets/sounds/correct sound effect.mp3';
import soundIncorrect from '../assets/sounds/You Lose - Sound Effect - 2017.mp3';
import soundWin from '../assets/sounds/WIN sound effect no copyright.mp3';

// CLASS: App
class App extends Component{
  // STATE    
      state = {
          cards,
          score: 0,
          topScore: 0,
          selected: [],
          soundPosition: 0,
          soundStatus: Sound.status.PLAYING,
          shake: "",
          message1: "",
          message2: "Select an image to begin!",
          alertType: "info",
          topScoreType: "info",
          volume: "on"
      };
  // ON CLICK: SHUFFLE CARDS
      shuffle = id => {
          this.setState({
              cards: this.state.cards.sort(function(a,b){
                      return 0.5 - Math.random();
                  }
              )
          })
      }
      
  // ON CLICK: INCREMENT COUNT ON CARD
      incrementClick = id => {
          let ids = this.state.selected
          const incorrect = ids.includes(id);
          if(!incorrect){
              this.state.selected.push(id);
              let newScore = this.state.score + 1;
              this.setState({score: newScore});
              if(newScore === 12){
                  this.setState({
                      score: 0,
                      selected: [],
                      topScore: newScore,
                      message1: "correctly",
                      message2: "You Win!!!",
                      alertType: "success"
                  });
                  if(this.state.volume === "on"){
                      this.setState({ 
                          soundStatus: Sound.status.PLAYING,
                          soundPosition: 0,
                          soundURL: soundWin
                      });
                  }
              }
              else if(newScore > this.state.topScore){
                  this.setState({
                      topScore: newScore, 
                      message1: "correctly",
                      message2: "YES!! You guessed correctly!",
                      alertType: "success",
                      topScoreType: "success"
                  });
                  if(this.state.volume === "on"){
                      this.setState({ 
                          soundStatus: Sound.status.PLAYING,
                          soundPosition: 0,
                          soundURL: soundCorrect
                      });
                  }
              }
              else{
                  this.setState({
                      message1: "correctly",
                      message2: "YES!! You guessed correctly!",
                      alertType: "success",
                      topScoreType: "info"
                  });
                  if(this.state.volume === "on"){
                      this.setState({ 
                          soundStatus: Sound.status.PLAYING,
                          soundPosition: 0,
                          soundURL: soundCorrect
                      });
                  }
              }
          }
          else{
              this.setState({
                  score: 0,
                  selected: [], 
                  shake: "incorrect",
                  message1: "incorrect",
                  message2: "WRONG!! Start over and try again!",
                  alertType: "danger",
                  topScoreType: "info"
              });
              if(this.state.volume === "on"){
                  this.setState({ 
                      soundStatus: Sound.status.PLAYING,
                      soundPosition: 0,
                      soundURL: soundIncorrect
                  });
              }
              setTimeout(function(){ 
                  this.setState({ shake: "" }); 
              }.bind(this), 1000);
          }
      };
//RENDER
render() {
  return (
    <div className= "app">
       <Alerts
                    message1={this.state.message1}
                    message2={this.state.message2}
                    alertType={this.state.alertType}
        />

       <Score 
                    shake={this.state.shake}
                    score={this.state.score} 
                    topScore={this.state.topScore}
                    alertType={this.state.alertType}
                    topScoreType={this.state.topScoreType}
        />

       <Main 
                    shake={this.state.shake}
                    
                >
                    {this.state.cards.map((cards,i) => (
                        <Card 
                            id={cards.id} 
                            name={cards.name} 
                            image={cards.image} 
                            key={i} 
                            increment={this.incrementClick} shuffle={this.shuffle}
                        />
                    ))}
        </Main>
        <Sound 
                    autoLoad={true} 
                    url={this.state.soundURL} 
                    playStatus={this.state.soundStatus} 
                    playPosition={this.state.soundPosition}
        />


      <Footer />
    </div>
  );
 }
};
export default App;
