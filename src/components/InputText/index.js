import "./index.css";
const InputSection = (props) => {
  const { value, onchangeInputText, onclickAddButton } = props;

  return (
    <div className="input-container">
      <input
        placeholder="Enter Text"
        type="text"
        className="input-content"
        value={value}
        onChange={onchangeInputText}
      />
      <button className="add-btn" type="button" onClick={onclickAddButton}>
        Add
      </button>
    </div>
  );
};

export default InputSection;
