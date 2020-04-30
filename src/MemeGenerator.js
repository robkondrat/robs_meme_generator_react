import React from 'react'
import axios from 'axios'


class MemeGenerator extends React.Component {
  constructor() {
    super()
    this.state = {
      memes: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // componentDidMount() {
  //   fetch("https://api.imgflip.com/get_memes")
  //   .then(response => response.json())
  //   .then(response => {
  //     const {memes} = response.data
  //     this.setState({ allMemeImgs: memes })
  //   })
  // }

  componentDidMount() {
    axios.get('http://localhost:3001/api/memes')
    .then(response => {
      console.log(response)
      this.setState({memes: response.data})
    })
    .catch(error => console.log(error))
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randNum].url
    this.setState({randomImg: randMemeImg })
  }

  render() {
    return (
      <div>
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


      // <div>
        // <form className="meme-form" onSubmit={this.handleSubmit}>
        //   <input 
        //     type="text"
        //     name="topText"
        //     placeholder="Top Text"
        //     value={this.state.topText}
        //     onChange={this.handleChange}
        //   />

        //   <input 
        //     type="text"
        //     name="bottomText"
        //     placeholder="Bottom Text"
        //     value={this.state.bottomText}
        //     onChange={this.handleChange}
        //   />

        //   <button>Gen</button>
        // </form>

        // <div className="meme">
        //   <img src={this.state.randomImg} />
        //   <h2 className="top">{this.state.topText}</h2>
        //   <h2 className="bottom">{this.state.bottomText}</h2>
        // </div>
      // </div>
    )
  }
}

export default MemeGenerator