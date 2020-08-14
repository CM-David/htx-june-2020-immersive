import React, { Component } from 'react'

export class App extends Component {
  render() {

let people = ["Dan", "Michael", "Chris", "Michah", "Cainan"]

    return (
      <>
        {
          people.map((person, index) =>{
            return <li key={index}>{person}</li>
          })
        }
      </>
    )
  }
}

export default App
