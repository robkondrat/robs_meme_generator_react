import React from "react";
import axios from "axios";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      allMemeImgs: [],
      randomImg: "",
      topText: "",
      bottomText: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.saveMeme = this.saveMeme.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        this.setState({ allMemeImgs: memes });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randNum].url;
    this.setState({ randomImg: randMemeImg });
  }

  saveMeme() {
    fetch("http://localhost:3001/api/memes", {
      method: "post",
      body: JSON.stringify({
        top_text: this.state.topText,
        bottom_text: this.state.bottomText,
        img: this.state.randomImg
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    return (
      <div>
        <p>
          <a href="/">Home</a>
        </p>

        <form className="meme-form" onSubmit={this.handleSubmit}>
          <button>Gen</button>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
        </form>

        <div className="meme">
          <img src={this.state.randomImg} />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
        <button onClick={this.saveMeme}>Save</button>
      </div>
    );
  }
}

export default MemeGenerator;
