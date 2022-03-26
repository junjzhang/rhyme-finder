const SavedWord = (props) => {
  const { savedWords } = props;
  return (
    <div className="row">
      <div className="col">
        Saved words:{" "}
        <span id="saved_words">
          {savedWords.length > 0 ? savedWords.join(", ") : "(none)"}
        </span>
      </div>
    </div>
  );
};

export default SavedWord;
