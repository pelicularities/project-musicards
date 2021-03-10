import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import germanDeck from "./decks/german.js";
import musicDeck from "./decks/music.js";
import DeckGallery from "./components/DeckGallery";
import PlayDeck from "./components/PlayDeck";
import NewCard from "./components/NewCard";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import NewUser from "./components/NewUser";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1E2EDE",
    },
    secondary: {
      main: "#F5B841",
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", sans-serif',
  },
});

function App() {
  const [deck, setDeck] = useState(musicDeck);
  const queryUrl =
    "https://express-musicards-test.herokuapp.com/decks/60482ace566a190015fafe86/cards";

  useEffect(() => {
    fetch(queryUrl)
      .then((response) => response.json())
      .then((json) => {
        setDeck(json);
      })
      .catch(console.log);
  }, []);

  const addFlashcard = (deck, flashcard) => {
    const newDeck = [...deck];
    newDeck.push(flashcard);
    setDeck(newDeck);
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Link to="/">
            <h1>Musicards</h1>
          </Link>
          <Route exact path="/" render={() => <DeckGallery deck={deck} />} />
          <Route exact path="/users/new" render={() => <NewUser />} />
          <Route exact path="/play" render={() => <PlayDeck deck={deck} />} />
          <Route
            exact
            path="/cards/new"
            render={() => <NewCard deck={deck} addFlashcard={addFlashcard} />}
          />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
