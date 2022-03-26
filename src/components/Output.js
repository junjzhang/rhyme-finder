import { useEffect } from "react";

const Output = (props) => {
  const { action, word, candidates, setSavedWords, flag, savedWords } = props;

  const CandidateItem = (candidateWord) => {
    return (
      <li key={candidateWord}>
        {candidateWord}
        <button
          onClick={(e) => {
            setSavedWords([...savedWords, candidateWord]);
          }}
          type="button"
          className="btn btn-outline-success btn-sm"
        >
          Save
        </button>
      </li>
    );
  };

  const CandidateGroup = (syllables, words, action) => {
    return action ? (
      <>
        <h3 key={`${syllables}_h`}>{`Syllables: ${syllables}`}</h3>
        <ul key={`${syllables}_r`}>
          {words.map((word) => CandidateItem(word["word"]))}
        </ul>
      </>
    ) : (
      <ul key={`${syllables}_s`}>
        {words.map((word) => CandidateItem(word["word"]))}
      </ul>
    );
  };

  const TransformCandidate = (candidates, action) => {
    if (candidates === 0) {
      return "...loading";
    } else {
      return Object.keys(candidates).length === 0
        ? "(no results)"
        : Object.keys(candidates).map((syllables) =>
            CandidateGroup(syllables, candidates[syllables], action)
          );
    }
  };

  return flag ? (
    <>
      <div className="row">
        <h2 className="col">{`${
          action ? "Words that rhymes with" : "Words with a meaning similar to"
        } ${word}`}</h2>
      </div>
      <div className="output row">
        <output className="col">
          {TransformCandidate(candidates, action)}
        </output>
      </div>
    </>
  ) : (
    ""
  );
};

export default Output;
