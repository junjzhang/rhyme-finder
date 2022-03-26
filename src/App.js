import InputGroup from "./components/InputGroup.js";
import SavedWord from "./components/SavedWord.js";
import Output from "./components/Output.js";
import { useState } from "react";
import "./App.css";

function App() {
  const [savedWords, setSavedWords] = useState([]);
  const [candidates, setCandidates] = useState({});
  const [word, setWord] = useState("");
  const [action, setAction] = useState(true);
  // true: rhyme, false: synonym
  const [flag, setFlag] = useState(false);

  return (
    <main className="container">
      <h1 className="row">Rhyme Finder (579 Problem Set 6)</h1>
      <a href="https://github.com/junjzhang/rhyme-finder">
        Link to react code repo
      </a>
      <SavedWord savedWords={savedWords} />
      <InputGroup
        setWord={setWord}
        setCandidates={setCandidates}
        setAction={setAction}
        setFlag={setFlag}
      />
      <Output
        word={word}
        action={action}
        candidates={candidates}
        savedWords={savedWords}
        setSavedWords={setSavedWords}
        flag={flag}
      />
    </main>
  );
}

export default App;
