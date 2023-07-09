import React, { Component } from "react";
import meme_data from "../json data/meme_data";

class Form extends Component {
  state = {
    topText: "",
    bottomText: "",
    url: "",
  };

  handleTopText = () => {
    let topText = document.getElementById("topText").value;

    this.setState({ topText });
  };

  handleBottomText = () => {
    let bottomText = document.getElementById("bottomText").value;

    this.setState({ bottomText });
  };

  handleEvent = (e) => {
    e.preventDefault();

    const memeArray = meme_data.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    let url = memeArray[randomNumber].url;

    this.setState({ url });
  };

  render() {
    return (
      <div className="body-container">
        <input
          onInput={this.handleTopText}
          id="topText"
          className="input-field"
          type="text"
          placeholder="Top Text"
        />
        <input
          onInput={this.handleBottomText}
          id="bottomText"
          className="input-field"
          type="text"
          placeholder="Bottom Text"
        />

        <button onClick={this.handleEvent} className="btn">
          Get a new meme image
        </button>
        <img className="meme" src={this.state.url} alt="" />
        <h3 className="top-text">{this.state.topText}</h3>
        <h3 className="bottom-text">{this.state.bottomText}</h3>
      </div>
    );
  }
}

export default Form;
