import React, { Component } from 'react';
import './css/App.css';
import GuesseCount from './components/Guesse';
import KeyBoard from './components/KeyBoard';
import Display from './components/Display';
import WonTheGame from './components/Won';
import NewGame from './components/NewGame';
import Lost from './components/Lost';
import WinOrLost from './components/WinOrLost';

const LETTER = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const RandomWords = [
  {
    words: ["A","B","C"],
    title: "ALPHABET"
  },
  {
    words: ["P", "O", "R",
      "C", "H","E"],
    title: "Car"
  },
  {
    words: ["Y", "A", "T", "C",
      "H"],
    title: "BOAT"
  },
  /* and so on... */
];



class App extends Component {
constructor(){
  super();
  this.state={
    phrasedevine: this.Random(),
    currentSelectLetter: [],
    guesses: 0,
    donMatchedLetter: [],
    Display: true,
    
  }
  
}


    Random(){
      let arr = RandomWords.length;
      let random = Math.floor(Math.random() * arr )
      //console.log(RandomWords[random].words)
      return RandomWords[random].words 
    }
    
  // Arrow fx for binding
  handleClick = (index)=> { 
    
   this.add(index)
}

//Arrow fx for binding
  resetGame=()=> {
    this.setState({
      phrasedevine:this.Random(),
      currentSelectLetter: [],
      guesses: 0,
      donMatchedLetter: [],
      Display: false
    })    
  }
  add(index) {
    const {phrasedevine,guesses,currentSelectLetter} = this.state;
    if(phrasedevine.includes(index)){
      let newGuesses = guesses + 2; 
      currentSelectLetter.push(index)
      let unique = [...new Set(currentSelectLetter)];
      
      console.log(currentSelectLetter)
      this.setState({ currentSelectLetter: [...unique], guesses: newGuesses, Display: false})
     
    }
    else {
      const { donMatchedLetter } = this.state;
      donMatchedLetter.push(index)
      let Notunique = [...new Set(donMatchedLetter)];
      console.log(Notunique)
      this.setState((prevstate)=> ({
        guesses: prevstate.guesses - 1,
        donMatchedLetter: Notunique
      }))
      
    }
   
  }
  
  getFeedbackForKeyboard(letter) {
    const { currentSelectLetter , Display } = this.state
   
   let matched = currentSelectLetter.includes(letter)
    let justMismatched = currentSelectLetter.indexOf(letter);
    console.log(justMismatched)
    
//console.log(currentSelectLetter.includes(letter))
    if(Display === true) {
      return "button"
    }
    return matched ? 'justMatched' :'';
  }


  render() {
    const { phrasedevine, currentSelectLetter,guesses,donMatchedLetter } = this.state;
      const won = currentSelectLetter.length === phrasedevine.length;
    const lost = donMatchedLetter.length > phrasedevine.length;
   
    return (
      <div>
        <h1 className="jeu-pendu__title">Jeu Pendu</h1>
          <div className="jeu-pendu__score">
            <GuesseCount guesses={guesses}  />
          </div>
          <div className="jeu-pendu__Won"> {won && <WinOrLost winOrlost={<WonTheGame/>} />}</div>
        <div className="jeu-pendu__Won"> {lost && <WinOrLost winOrlost={<Lost/>} />}</div>
        
         
      
        <div className="phrasedevine">
          { won ? <NewGame onClick={this.resetGame} />: lost ? <NewGame onClick={this.resetGame} />
          : phrasedevine.map((phrasedevine,index)=> (
             <Display key={index} phrasedevine={phrasedevine} 
              usedLetters={currentSelectLetter} num={2} />
         ) )
          }
        </div>
        <div className="memory">
       {
         LETTER.map((letter,index) => (
            <KeyBoard key={index} letter={letter} index={index} feedback={this.getFeedbackForKeyboard(letter)} onClick={this.handleClick} />
         ))
          
       } 
        </div>
      </div>
    );
  }
}

export default App;
