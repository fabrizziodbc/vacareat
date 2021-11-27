import "./App.css";

import { useState, useEffect } from "react";

const App = () => {
  const images = [
    {
      id: 1,
      url: "https://images.pexels.com/photos/735968/pexels-photo-735968.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/551627/pexels-photo-551627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/3719084/pexels-photo-3719084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/157313/pexels-photo-157313.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/5167856/pexels-photo-5167856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/2945979/pexels-photo-2945979.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 7,
      url: "https://images.pexels.com/photos/1876619/pexels-photo-1876619.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 8,
      url: "https://images.pexels.com/photos/7440927/pexels-photo-7440927.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 9,
      url: "https://images.pexels.com/photos/7377891/pexels-photo-7377891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 10,
      url: "https://images.pexels.com/photos/9734318/pexels-photo-9734318.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 11,
      url: "https://images.pexels.com/photos/5949022/pexels-photo-5949022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      id: 12,
      url: "https://images.pexels.com/photos/5798535/pexels-photo-5798535.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ];
  const [dataBase, setDataBase] = useState([]);
  const [currentImg, setCurrentImg] = useState([]);
  const [gameOver, setGameover] = useState(false);

  const urlRandom = () => {
    const url = dataBase.map((e) => e.url).sort(() => Math.random() - 0.5);
    return url[0];
  };

  useEffect(() => {
    setDataBase(images);
    const Empty = dataBase.map((e) => {
      return { url: null };
    });
    setCurrentImg([
      { ...Empty[0], id: 1 },
      { ...Empty[1], id: 2 },
      { ...Empty[2], id: 3 },
      { ...Empty[3], id: 4 },
    ]);
  }, []);

  const showHandle = (e) => {
    const currentCopy = [...currentImg];
    currentCopy[e.target.id - 1].url = urlRandom();
    setCurrentImg(currentCopy);
    setDataBase(
      dataBase.filter((i) => i.url !== currentCopy[e.target.id - 1].url)
    );
    if (currentImg.filter((i) => i.url).length === 4) {
      setTimeout(() => {
        const Empty = dataBase.map((i) => {
          return { id: i.id, url: null };
        });
        setCurrentImg([
          { ...Empty[0], id: 1 },
          { ...Empty[1], id: 2 },
          { ...Empty[2], id: 3 },
          { ...Empty[3], id: 4 },
        ]);
      }, 500);
    }
    if (dataBase.length <= 1) {
      setTimeout(() => {
        setGameover(true);
      }, 500);
    }
  };
  const playAgain = () => {
    setDataBase(images);
    setGameover(false);
  };
  return (
    <ul>
      {!gameOver ? (
        currentImg.map((e) => (
          <li key={e.id}>
            <div
              onClick={e.url ? () => console.log("muu!") : showHandle}
              id={e.id}
            >
              <img
                alt={e.id}
                src={e.url}
                className={`${e.url ? "show" : ""}`}
              />
            </div>
          </li>
        ))
      ) : (
        <div>
          <h1>Game over</h1>
          <button onClick={playAgain}>Play again!</button>
        </div>
      )}
    </ul>
  );
};
export default App;
