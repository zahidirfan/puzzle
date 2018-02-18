import React, { Component } from 'react';
import { Grid, Navbar, Jumbotron } from 'react-bootstrap';

class App extends Component {
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
        <Jumbotron>
            <h1>Puzzle</h1>
        </Jumbotron>
        <div class='container-fluid'>
          <Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
