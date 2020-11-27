import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Character from "./Character";

export default class Characters extends React.Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    if (!navigator.onLine) {
      if (localStorage.getItem("characters") === null) return;
      else {
        localStorage
          .getItem("characters")
          .json()
          .then((cha) => {
            this.setState({ characters: cha });
          });
        console.log(this.state.characters);
      }
    } else {
      const url =
        "https://gateway.marvel.com/v1/public/characters?apikey=3498644b2179df10319f5ae9de72e49e&ts=9&hash=8a48e8b40859bdab7c06e3d2873ba849";
      fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((cha) => {
          this.setState({ characters: cha.data.results });
          localStorage.setItem(
            "characters",
            JSON.stringify(this.state.characters)
          );
        });
    }
  }

  renderCharacters() {
    return (
      <div>
        {this.state.characters.map((e, i) => (
          <Character key={i} character={e} />
        ))}
      </div>
    );
  }

  render() {
    return <div className="p-4">{this.renderCharacters()}</div>;
  }
}
