import "./style.css";
function Button({ callback, value, classe }) {
  return (
    <>
      <button className={"Button " + classe} onClick={callback}>
        {value}
      </button>
    </>
  );
}
export default Button;
