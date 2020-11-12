// import React from 'react'

// import { ExampleComponent } from 'colored-heading'
// import 'colored-heading/dist/index.css'

// const App = () => {
//   return <ExampleComponent text="Create React Library Example 😄" />
// }

// export default App

import React, { Component } from 'react'

import { ColoredHeadingOne, ColoredHeadingTwo } from 'colored-heading'

export default class App extends Component {
  render() {
    return (
      <div>
        <ColoredHeadingOne
          text='Colored heading one is working'
          color={'red'}
        />

        <ColoredHeadingTwo
          text="Colored heading two is working"
          color={'blue'}
        />
      </div>
    )
  }
}
