import { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";

const Quiz = () => {
  const [text, setText] = useState("");
  const change = (e) => {
    setText(e.target.value);
  };

  const click = () => {
    const num = Number(text);
    view(num);
  };

  const view = (x) => {
    fetch(
      `https://fakerapi.it/api/v2/images?_quantity=${x}&_type=any&_height=300`
    )
      .then((res) => res.json())
      .then((v) => setCards((prev) => [...v.data]));
  };

  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(
      `https://fakerapi.it/api/v2/images?_quantity=10&_type=any&_height=300`
    )
      .then((res) => res.json())
      .then((v) => setCards((prev) => [...v.data]));
  }, []);
  return (
    <div>
      <input type="text" onChange={change} />
      <button onClick={click}>요청</button>
      {cards.map((v, i) => (
        <PhotoCard key={i} {...v} />
      ))}
    </div>
  );
};

export default Quiz;
