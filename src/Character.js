import React from "react";
import { Card } from "react-bootstrap";

export default class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: this.props.character,
    };
  }

  render() {
    console.log(this.state.character);
    let img = this.state.character.thumbnail.path.concat(".");
    img = img.concat(this.state.character.thumbnail.extension);
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} width="100%" />
        <Card.Body>
          <Card.Title style={{ fontWeight: "bold", textAlign: "center" }}>
            {this.state.character.name}
          </Card.Title>
          <Card.Text>
            <b style={{ fontWeight: "bold" }}>Description:</b>
            <br></br>
            {this.state.character.description}
            <br></br>
            <b style={{ fontWeight: "bold" }}>Series:</b>
            <br></br>
            {this.state.character.series.items.map((e, i) => e.name)}
            <br></br>
            <b style={{ fontWeight: "bold" }}>Stories:</b>
            <br></br>
            {this.state.character.stories.items.map((e, i) => e.name)}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
