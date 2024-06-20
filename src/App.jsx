import React, {useState, useEffect} from "react";
import Scoreboard from "./components/Scoreboard";
import CardGrid from "./components/CardGrid";
import Footer from "./components/Footer";
import './App.css';


const App = () => {
  const [cards, setCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [ bestScore, setBestScore] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(()=> {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
    const data = await response.json();
    const promises = data.results.map(async (pokemon) => {
      const pokeResponse = await fetch(pokemon.url);
      return pokeResponse.json();
    });

    const pokemonData = await Promise.all(promises);
    const cardsData = pokemonData.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      imageUrl: pokemon.sprites.front_default,
    }));

    setCards(shuffleCards(cardsData));
  };

  const shuffleCards = (cardsArray) => {
    return cardsArray.sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (card) => {
    if (selectedCards.includes(card.id)) {
      // Reset game
      setCurrentScore(0);
      setSelectedCards([]);
      alert('You lost! Try again.');
    } else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      setSelectedCards([...selectedCards, card.id]);

      if (newScore > bestScore) {
        setBestScore(newScore);
      }

      setCards(shuffleCards(cards));
    }
  };

  return (
    <div className="App">
      <Scoreboard currentScore={currentScore} bestScore={bestScore} />
      <CardGrid cards={cards} onCardClick={handleCardClick} />
      <Footer />
    </div>
  );
};

export default App;