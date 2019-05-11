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
  }

  click = (id) => {
    console.log(id)
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container imageDisplay">
          {this.state.imgLinks.map((imgLink, index) =>
            <ImageBlock
              key={index}
              id={index}
              click={this.click}
              imgLinkSrc={imgLink.src}
            />
          )}</div>
      </div>
    );
  }
}

export default App;
