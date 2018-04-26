import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
// From https://github.com/oliviertassinari/react-swipeable-views
import SwipeableViews from 'react-swipeable-views';
import {Technique} from './Technique'
import {pinkA400} from 'material-ui/styles/colors';
import spira from '../assets/spira.jpg';
import shinzen from '../assets/shinzen.jpg';
import culadasa from '../assets/culadasa.jpg';

const techniques = {
    "directMethod": {authorLink:"https://www.youtube.com/watch?v=nOxfCkbWTZA", title:"The Direct Method", picture: spira, quote:"You are the open, empty, allowing presence of Awareness, in which the objects of the body, mind and world appear and disappear, with which they are known and, ultimately, out of which they are made. Just notice that and be that, knowingly.", quoteAuthor:"Rupert Spira", description: "Cutting to the root of alienation, the direct method, also known as self-enquiry, advices us to look into the subjective essence of experience, the TV screen inside of which our dramas are played out, and gradually disidentify with the dramas and reidentify with the screen itself: conscious awareness", instructions: [("Ask yourself, am I aware right now?"),("Notice that whatever you are aware of, be it a thought, an emotion, a perception, etc., is subject to change. They come and go, having a shape in Space and a duration in Time"), ("Do you also come and go? Or is there something that persists amidst the myriad experiences?"), "Keep asking the question as much as you can. The point is not whatever verbal answer you come up with, but what the question points to", "The instructions may seem deceptively simple but are quite powerful"]},
    "notingAndLabeling": {authorLink:"https://www.youtube.com/watch?v=StBTuX0tqU8", title:"Noting & Labeling", picture: shinzen, quote:"We note using a rhythm of clear acknowledging of the sensory category or event for a fraction of a second, then intent gentle focusing on what was noticed, opening up and soaking into it typically for a few seconds", quoteAuthor:"Shinzen Young", description: "A training in staying, noting and labeling help us anchor ourselves in the present moment by reengineering our internal dialogue into useful feedback about our present sensory experience, thoughts and feelings", instructions: [<span>Take a second to look around you. At each moment, there are several experiences going on at once. Choose the one that feels the most prominent</span>,<span>Regardless of what it is that you chose, take a second to recognize it is happening. Savor it as you would a fine beer or a kiss from your mate. This is called noting. It is about realizing <span className="tooltipTrigger" data-tip="Listen, my heart, to the whispering of the world. That is how it makes love to you, from Rabindranath Tagore's Stray Birds">how the world makes love to you</span></span>,<span>A common tool is to use labels to, either aloud or internally, put a name to the noted experience</span>, <span>The usefulness of labeling is manifold. It helps lower <span className="tooltipTrigger" data-tip="The verbalization of emotions seems to influence both how they're subjectively experienced and behavioral correlates such as skin conductance responses. For more information, look into the works of Dr. Michelle Craske from UCLA">physiological reactivity</span>, keeps your internal dialogue away from daydreaming, improves sensory clarity, and so on</span>, <span>Many labeling systems exist and offer different flavours and advantages. A simple one is Shinzen's <a className="link" href="http://www.shinzen.org/wp-content/uploads/2016/08/SeeHearFeelIntroduction_ver1.8.pdf">See Hear Feel</a></span>, <span>Each individual object can become noted and labeled 'See', every sound a 'Hear', any bodily sensation, emotional or otherwise, a 'Feel'. Everything is potentially something to note and label</span>, <span>Sometimes the experience we note is pleasurable or neutral. Other times it is unpleasant and even seemingly aggravated by our focusing on it. That's OK. To the best of your ability, relax around the experience</span>, <span>You don't need to be sitting in a meditation cushion to practice. In fact, <a className="link" href="https://www.youtube.com/watch?v=LoSAkuNJWQ8">ordinary moments</a> are incredible opportunities to practice</span>]},
    "peaceAbiding": {authorLink:"https://www.youtube.com/watch?v=Zk2XQFwESIk", title:"Peace Abiding", picture: culadasa, quote:"Like a naturalist studying an organism in its habitat, we need to develop an intuitive understanding of our mind. This only comes from direct observation and experience. For life to become a consciously created work of art and beauty, we must first realize our innate capacity to become a more fully conscious being", quoteAuthor:"Culadasa", description: "Peace Abiding, or Samatha, works on the principle of reinforcement learning: we learn to quiet our minds and the resulting satisfaction sets up a feedback loop, a scenario in which the mind can, at a very primordial level, make an intuitive correlation between resistance to the flow of sensations and the experience of suffering", instructions: ["At the heart of this teaching lies the distinction between focused attention and peripheral awareness","Have you noticed how when you look at an object, a part of what you see is very detailed and complex (the focus of your attention) and how it is embedded within a larger, more diffuse, unfocused, less processed background?", "That background is your peripheral awareness", " If you've tried breath meditaton before, maybe you've had the experience of getting into weird headspaces where you're dosing off, or very distracted. This is due to the collapse of peripheral awareness", "The name of the game in Peace Abiding meditation is to develop both good peripheral awareness, so you don't loose track of what you're doing, and a good, stable attention, so that the mind grows ever more concentrated and pacified"]}
}

const buttonStyle = {
  textTransform: 'lowercase',
  fontFamily: 'Monospace, sans-serif',
  fontSize: '150%',
  backgroundColor: 'black',
  color:  pinkA400,
};

export class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  render() {

    return (
      <div id="particles-js">
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab buttonStyle={buttonStyle} label="Noting" value={0} />
          <Tab buttonStyle={buttonStyle} label="Direct" value={1} />
          <Tab buttonStyle={buttonStyle} label="Peace" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
          resistance
        >
          <div>
            <Technique information={techniques.notingAndLabeling}/>
          </div>
          <div>
            <Technique information={techniques.directMethod}/>
          </div>
          <div>
            <Technique information={techniques.peaceAbiding}/>
          </div>
        </SwipeableViews>
      </div>
    );
  }
}