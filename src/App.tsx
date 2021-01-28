import React, { useEffect, useState } from "react";
import axios from 'axios'
import CardList from "./components/CardList";
import Title from "./components/Title";
import CardPay from "./components/CardPay";
import { PayForm } from "./components/PayForm";

const initialCards: Card[] = [
  {
    name: '1111',
    image: 'baan-kru-noi.jpg',
  }
];

function App() {
  const [charities, setCharities] = useState(initialCards)
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      const url = 'http://localhost:3001/charities'
      try {
        setIsLoading(true)
        const result = await axios(url);
        setCharities(result.data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [])

  return (
    <>
      <Title main>Omise Tamboon React</Title>

      <CardPay card={charities[0]} key="s" />

      {charities.map((card, idx) => (
        <CardList card={card} key={idx} />
      ))}
    </>
  );
}

export default App;
