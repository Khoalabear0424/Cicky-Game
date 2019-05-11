import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import ImageBlock from './components/ImageBlock';
import './App.css';

class App extends Component {
  state = {
    imgLinks: [{
      select: false,
      src: "https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg"
    },
    {
      select: false,
      src: "https://www.broadsheet.com.au/media/cache/6c/8b/6c8b1577b91215610644d49777e3ee63.jpg"
    },
    {
      select: false,
      src: "https://www.animalhouseshelter.com/wp-content/uploads/2019/05/Ace-1-600x600.png"
    },
    {
      select: false,
      src: "https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg"
    },
    {
      select: false,
      src: "https://pbs.twimg.com/profile_images/446566229210181632/2IeTff-V.jpeg"
    },
    {
      select: false,
      src: "https://i.pinimg.com/originals/45/de/3a/45de3af40bc566be49b31e1b69badc3d.jpg"
    },
    {
      select: false,
      src: "https://i.pinimg.com/originals/21/7d/cd/217dcd4712168fe88ed954649f5c4b74.jpg"
    },
    {
      select: false,
      src: "https://i.pinimg.com/originals/af/6b/0c/af6b0cf1fc2c1711d49440f09530e7ab.jpg"
    }
    ],
    score: {
      highScore: 0,
      currentScore: 0,
      message: "Click an image to start playing!"
    }
  }

  shuffle = (id, selectState) => {
    const { imgLinks } = this.state;
    imgLinks[id].select = !selectState;
    imgLinks.sort(() => Math.random() - 0.5);
    this.calcScore(selectState)
    this.setState({ imgLinks })
  }

  calcScore = (selectState) => {
    const { score } = this.state;
    if (!selectState) {
      score.currentScore++;
      score.message = "You guessed correctly!"
    } else {
      score.highScore = score.currentScore
      score.currentScore = 0;
      score.message = "Game Over!"
    }
    this.setState({ score })
  }


  render() {
    return (
      <div className="App">
        <Navbar
          highScore={this.state.score.highScore}
          currentScore={this.state.score.currentScore}
          message={this.state.score.message}
        />
        <div className="container imageDisplay">
          {this.state.imgLinks.map((imgLink, index) =>
            <ImageBlock
              select={imgLink.select}
              key={index}
              id={index}
              click={this.shuffle}
              imgLinkSrc={imgLink.src}
            />
          )}</div>
      </div>
    );
  }
}

export default App;
