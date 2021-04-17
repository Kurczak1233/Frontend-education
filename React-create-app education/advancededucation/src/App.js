import React from 'react'
import './App.css';
import SwitchButton from './SwitchButton'

const App = () => {
  // state = {
  //   time: 0,
  //   isActive: false,
  // }
  const data = [
    { id: 1, title: 'Wiadomość 1', body:'Zawartość...'},
    { id: 2, title: 'Wiadomość 2', body:'Zawartość...'}
  ]
  setInterval(() => {
    const index = data.length +1;
    data.push({
      id: index,
      title: `Wiadomość + ${index}`,
      body: "Zawartość", 
    })
    console.log(data);
  }, 4000)

  // handleStartTime = () => {
  //   this.setState({
  //     isActive: !this.state.isActive
  //   })
  //   if(this.state.isActive === true)
  //   {
  //     clearInterval(this.IdInterval)
  //   }
  //   else{
  //     this.IdInterval = setInterval(() => this.addSecond(), 1000)
  //   }
  // }
  // addSecond = () => {
  //   this.setState({
  //     time: this.state.time + 1
  //   })
  // }
    return(
      <React.Fragment>
        {/* <div className="text-center">{this.state.time}</div>
        <SwitchButton click={this.handleStartTime} active={this.state.isActive}></SwitchButton> */}
        
      </React.Fragment>
    );
  }


export default App;
