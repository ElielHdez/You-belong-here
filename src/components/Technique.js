import React from 'react';
import ReactTooltip from 'react-tooltip'
import Media from "react-media";
import Divider from 'material-ui/Divider';
import { ListItem } from 'material-ui';
import Paper from 'material-ui/Paper';
import { grey100 } from 'material-ui/styles/colors';

const paperStyle = {
    borderRadius: '2%',
    borderWidth: 'thin',
    borderStyle: 'none dashed double double',
    backgroundColor: 'rgba(0, 0, 0, .35)',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: '15%',
    marginRight: '15%',
    textAlign: 'center',
    display: 'inline-block',
  };
const instructionStyle = {
    fontSize: '110%',
    fontFamily: 'Monospace',
    color: grey100
}
let pictureWidth= '55%';

export class Technique extends React.Component {
    render() {
        const information = this.props.information;
        //const instructions = information.instructions.map((instruction,index) => <ListItem key={index} primaryText={instruction} style={instructionStyle}/>);
        const instructions = information.instructions.map((instruction,index) => <ListItem key={index} style={instructionStyle}>{instruction}</ListItem>);
        return (
            <div className="technique">
            <ReactTooltip className="tooltip" type="warning"/>
            <Media query="(max-width: 1100px)">
            {matches =>
            matches ? (
              pictureWidth = '70%',
              paperStyle.marginLeft = 0,
              paperStyle.marginRight = 0,
              paperStyle.borderStyle = ''
            ) : (
             null
            )
            }
            </Media>
                <Paper  style={paperStyle} zDepth={5}> 
                <h2 className="rosy">{information.title}</h2>
                <Divider/>
                <br/>
                <h4 className="quote">"{information.quote}" - {information.quoteAuthor}</h4>
                <Divider/>
                <h3 className="rosy">Description</h3>
                <span className="description">{information.description}</span>
                <br/>
                <br/>
                <Divider/>
                <h3 className="rosy">Basic Instructions</h3>
                {/* <List> */}
                    {instructions}
                {/* </List> */}
                <Divider/>
                <h3 className="rosy">A Good Source</h3>
                <div className="image">
                <a href={information.authorLink}>
                <img className="picture grow" src={information.picture} alt="A spiritual looking person" width= {pictureWidth}/>
                </a>
                <h3 className="textOnImage"><span className="spanOnImage">{information.quoteAuthor}</span></h3>
                </div>
                <br/>
                <br/>
                </Paper>
            </div>
        );
    }
}
