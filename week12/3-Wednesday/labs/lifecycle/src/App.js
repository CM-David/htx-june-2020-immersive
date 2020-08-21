import React, { Component } from 'react'

class App extends Component {
 constructor(props) {
   super(props)
  console.log("con callsed")
   this.state = {
      
   }
 }
 
 
 
  render() {
    console.log("home render")
    return (
      <>
        Home page
      </>
    )
  }
}

export default App
