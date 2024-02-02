import logo from './logo.svg';
import './App.css';
import React from "react";

export default class App extends React.Component {
 tmp=[" ", " ", " ", " ", " ", " ", " ", " ", " "];
  constructor() {
    super();
    this.state = {
      toe: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      i: 0,
      n:0,
      res: "Result",
      ref: '',
    }
  }
  tic = (ind) => {
    if (this.state.i >= 0) {
      if (this.state.toe[ind] == " ") {
        if (this.state.i % 2 == 0) {
          this.tmp[ind]="x"
          this.setState({
            toe:this.tmp,
            i:this.state.i+1,
          })
        }
        else {
          this.tmp[ind]="o";
          this.setState({
            toe:this.tmp,
            i:this.state.i+1,
          })
        }
      }
    }
    this.win();
}
  win = () => {
    let cnt = 0;
    for (let j = 0; j <this.state.toe.length; j++) {
      if (this.tmp[j]=="x" || this.tmp[j]=="o") {
        cnt++;
      }
    }
    if (cnt == 9) {
      this.setState({
        res: 'Draw..',
      })
    }
    
    if (this.tmp[0] == "x" && this.tmp[1] == "x" && this.tmp[2] == "x") {
      alert("")
      this.setState({
        res: "x is won",
        i: -1,
      })
      
    }
    else if (this.tmp[3] == "x" && this.tmp[4] == "x" && this.tmp[5] == "x") {
      this.setState({
        res: 'x is win',
        i: -1,
      })
    }
    else if (this.tmp[6] == "x" && this.tmp[7] == "x" && this.tmp[8] == "x") {
      this.setState({
        res: 'x is win',
        i: -1,
      })
    }
    else if (this.tmp[0] == "x" && this.tmp[3] == "x" && this.tmp[6] == "x") {
      this.setState({
        res: 'x is win',
        i: -1,
      })
    }
    else if (this.tmp[1] == "x" && this.tmp[4] == "x" && this.tmp[7] == "x") {
      this.setState({
        res: 'x is win',
        i: -1,
      })
    }
    else if (this.tmp[2] == "x" && this.tmp[5] == "x" && this.tmp[8] == "x") {
      this.setState({
        res: 'x is win',
        i: -1,
      })
    }
    else if (this.tmp[0] == "x" && this.tmp[4] == "x" && this.tmp[8] == "x") {
      this.setState({
        res: 'x is win',
        i: -1,
      })
    }
    else if (this.tmp[2] == "x" && this.tmp[4] == "x" && this.tmp[6] == "x") {
      this.setState({
        res: 'x is win',
        i: -1,
      })
    }

    if (this.tmp[0] == "o" && this.tmp[1] == "o" && this.tmp[2] == "o") {
      this.setState({
        res: 'o is win',
        i: -1,
      })
    }
    else if (this.tmp[3] == "o" && this.tmp[4] == "o" && this.tmp[5] == "o") {
      this.setState({
        res: 'o is win',
        i: -1,
      })
    }
    else if (this.tmp[6] == "o" && this.tmp[7] == "o" && this.tmp[8] == "o") {
      this.setState({
        res: 'o is win',
        i: -1,
      })
    }
    else if (this.tmp[0] == "o" && this.tmp[3] == "o" && this.tmp[6] == "o") {
      this.setState({
        res: 'o is win',
        i: -1,
      })
    }
    else if (this.tmp[1] == "o" && this.tmp[4] == "o" && this.tmp[7] == "o") {
      this.setState({
        res: 'o is win',
        i: -1,
      })
    }
    else if (this.tmp[2] == "o" && this.tmp[5] == "o" && this.tmp[8] == "o") {
      this.setState({
        res: 'o is win',
        i: -1,
      })
    }
    else if (this.tmp[0] == "o" && this.tmp[4] == "o" && this.tmp[8] == "o") {
      this.setState({
        res: 'o is win',
        i: -1,
      })
    }
    else if (this.tmp[2] == "o" && this.tmp[4] == "o" && this.tmp[6] == "o") {
      this.setState({
        res: 'o is win',
        i: -1,
      })
    }
  }
  ref=()=> {
    this.setState({
      toe: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
      i: 0,
      n:0,
      res: "Result",
      ref: '',
    })
    this.tmp = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  }
  render() {
    return (
      <>
        <div className='tic'>
          <h2>Tic Tac Toe</h2>
          <div className='box'>
            {
              this.state.toe.map((ele, ind) => {
                return (
                  <input type='button' onClick={(e) => { this.tic(ind) }} value={ele}></input>
                )
              })
            }
          </div>
          <p className='result'>{this.state.res}</p><p className="result" onClick={this.ref}>Restart</p>
        </div>
      </>
    )
  }
}