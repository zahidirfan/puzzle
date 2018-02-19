import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron } from 'react-bootstrap';
import {Row, Col, FormControl, ControlLabel, FormGroup, HelpBlock} from 'react-bootstrap';
import Puzzle from './components/Puzzle';

class App extends Component {

  constructor (props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      puzzleSize : 0,
      randomArray : []
    }
  }

  handleChange(e){
    this.setState({ puzzleSize: e.target.value});
  }
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Puzzling Bricks</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>
        <Jumbotron align="center">
            <h1>Puzzle</h1>
        </Jumbotron>
        <div className='container-fluid'>
        <Grid>
          <Row>
            <Col>
              <form>
                 <FormGroup
                   controlId="puzzleSize"
                 >
                   <ControlLabel>Enter the size of the puzzle</ControlLabel>
                   <FormControl
                     type="text"
                     value={this.state.puzzleSize}
                     placeholder="Enter puzzle size"
                     onChange={this.handleChange}
                   />
                   <FormControl.Feedback />
                 </FormGroup>
               </form>
            </Col>
          </Row>
        </Grid>
          <Puzzle size = {this.state.puzzleSize} randomArray = {this.state.randomArray}/>
        </div>
      </div>
    );
  }
}

export default App;
