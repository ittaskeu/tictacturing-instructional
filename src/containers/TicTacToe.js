import React, {Component} from 'react'
import {Stage} from 'react-konva'
import {Board} from '../styled/TicTacToe'

class TicTacToe extends Component {

  state = {
      rows : 3
  }

  componentWillMount() {
    let height = window.innerHeight
    let width = window.innerWidth
    let size = (height < width) ? (height * .8) : (width * .8)
    let rows = this.state.rows
    let unit = size / rows  

    this.setState({
        size,
        rows,
        unit
    })
    //When my component mounts
  }

  move = () => {

  }

  makeAiMove = () => {

  }

  turingText = () => {

  }

  recordGame = () => {

  }

  render(){
    let {
      size,
      unit,
      rows
    } = this.state

    return (
      <div>
        <Stage
          width={size}
          hight={size}
          >

        <Board
            unit={unit}
            size={size}
            rows={rows}
        />

        </Stage>
      </div>
    )
  }
}


export default TicTacToe
