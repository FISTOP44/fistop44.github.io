import React from 'react'
import Header from './Header'
import Footer from './Footer'

class Container extends React.Component {
  render() {
    return (<div>
              <Header/>
                <h1>Container</h1>
              <Footer/>
            </div>)
  }
}


export default Container;
