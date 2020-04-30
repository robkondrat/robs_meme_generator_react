import React from 'react'
import axios from 'axios'

class AllMemes extends React.Component {
  constructor() {
    super()
    this.state = {
      memes: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/memes')
    .then(response => {
      console.log(response)
      this.setState({memes: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h1><a href="/apples">Generate a Meme</a></h1>
        {this.state.memes.map((meme) => {
          return(
            <div className="tile" key={meme.id} >
              <h4>{meme.top_text}</h4>
              <img src={meme.img} />
              <h4>{meme.bottom_text}</h4>
            </div>
          )
        })}
      </div>
    )
  }
}

export default AllMemes