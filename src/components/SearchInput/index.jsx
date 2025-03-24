import Input from "../shared/Input";
import PropTypes from "prop-types";

export default function SearchInput({ onChange, placeholder, value, setIsEmpty, setModalClose }) {
  console.log(setModalClose);
  function enterPress(e) {
    if(e.key === "Enter" && value === "") {
      setIsEmpty(true);
      setModalClose(false);
    } else {
      setIsEmpty(false);

    }
  }
  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
      data-test="input-search"
      onKeyDown={e => enterPress(e)}
    />
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
};
