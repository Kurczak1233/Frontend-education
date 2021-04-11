import React from 'react'
import './App.css';
import SwitchButton from './SwitchButton'

class App extends React.Component {
  constructor(props)
  {
    super(props)
    this.state = {
      time: 0,
      isActive: false,
    }
  }
  handleStartTime = () => {
    this.setState({
      isActive: !this.state.isActive
    })
    if(this.state.isActive === true)
    {
      clearInterval(this.IdInterval)
    }
    else{
      this.IdInterval = setInterval(() => this.addSecond(), 1000)
    }
  }
  addSecond = () => {
    this.setState({
      time: this.state.time + 1
    })
  }
  render()
  { 
    return(
      <React.Fragment>
        <div className="text-center">{this.state.time}</div>
        <SwitchButton click={this.handleStartTime} active={this.state.isActive}></SwitchButton>
      </React.Fragment>
    );
  }
}

export default App;
