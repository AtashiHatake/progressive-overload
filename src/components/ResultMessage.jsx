const ResultMessage = ({ resultMessage }) => {
  if (!resultMessage) return null;

  return (
    <p className="result-text">{resultMessage}</p>
  );
};

export default ResultMessage;
