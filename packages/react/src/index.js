// import React from 'react'
import React, { Component } from 'react'
import Fancy from '@monokao/common'

class Monokao extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return(
      <section>
        <h5>Brought to you by monospacee</h5>
        <span>This is packages/react</span>
        <span>This is to test version</span>
        <Fancy text={this.props.text}/>
      </section>
    )
  }
}

// const Monokao = ({ text = '' }) => (
//   <div>
//     <span>{`This is so Fancy✨✨✨ ${text}`}</span>
//   </div>
// )

export default Monokao
