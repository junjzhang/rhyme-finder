import { useState } from "react";
import {
  getDatamuseRhymeUrl,
  getDatamuseSimilarToUrl,
  datamuseRequest,
  groupBy,
} from "../util.js";

const InputGroup = (props) => {
  const { setWord, setCandidates, setAction, setFlag } = props;
  const [inputWord, setInputWord] = useState("");

  const UpdateCandidates = (data) => {
    setCandidates(groupBy(data, "numSyllables"));
  };

  return (
    <div className="row">
      <div className="input-group col">
        <input
          value={inputWord}
          onChange={(e) => setInputWord(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setWord(inputWord);
              setCandidates(0);
              setFlag(true);
              setAction(true);
              datamuseRequest(getDatamuseRhymeUrl(inputWord), UpdateCandidates);
            }
          }}
          className="form-control"
          type="text"
          placeholder="Enter a word"
          id="word_input"
        />
        <button
          onClick={(e) => {
            setWord(inputWord);
            setCandidates(0);
            setFlag(true);
            setAction(true);
            datamuseRequest(getDatamuseRhymeUrl(inputWord), UpdateCandidates);
          }}
          type="button"
          className="btn btn-primary"
        >
          Show rhyming words
        </button>
        <button
          onClick={(e) => {
            setWord(inputWord);
            setCandidates(0);
            setAction(false);
            setFlag(true);
            datamuseRequest(
              getDatamuseSimilarToUrl(inputWord),
              UpdateCandidates
            );
          }}
          id="show_synonyms"
          type="button"
          className="btn btn-secondary"
        >
          Show synonyms
        </button>
      </div>
    </div>
  );
};

export default InputGroup;
