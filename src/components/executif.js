import React, { Component } from 'react';
import {Panel, Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap';

class Executif extends Component {
     
  render() {
    return (
      <div>
        <Panel header="Executif" bsStyle="primary">
          <Grid>
            <Row>
              <Col xs={6} md={3}>
                <Thumbnail src="/assets/thumbnaildiv.png" alt="200x200">
                  <h3>Thumbnail label</h3>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>

                  </p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail src="/assets/thumbnaildiv.png" alt="200x200">
                  <h3>Thumbnail label</h3>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>

                  </p>
                </Thumbnail>
              </Col>
              <Col xs={6} md={3}>
                <Thumbnail src="/assets/thumbnaildiv.png" alt="200x200">
                  <h3>Thumbnail label</h3>
                  <p>Description</p>
                  <p>
                    <Button bsStyle="primary">Button</Button>

                  </p>
                </Thumbnail>
              </Col>
            </Row>
          </Grid>
        </Panel>
      </div>
    
      );
  }
    
 
  
}

export default Executif;