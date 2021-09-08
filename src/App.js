import "./App.css";
import { useEffect, useState } from "react";
import Characters from "./Components/Characters";
import Button from "./Components/Button";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((Response) => Response.json())
      .then((Response) => setCharacterList(Response.results))
      .catch((error) => console.log(error));
  }, [page]);
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  return (
    <div className="App App-header" id="topo">
      <header>
        <h1>characters</h1>
        <div className="Buttons">
          <Button
            classe="Button--Pages"
            value="Previous"
            callback={handlePrevious}
          />
          <h3>Page : {page}</h3>
          <Button classe="Button--Pages" value="Next" callback={handleNext} />
        </div>
      </header>
      <Characters characterList={characterList} />

      <a className="topo" href="#topo">
        Topo
      </a>
    </div>
  );
}

export default App;
