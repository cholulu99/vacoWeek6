import Input from "../shared/Input";
import PropTypes from "prop-types";

export default function SearchInput({ onChange, placeholder, value }) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
      data-test="input-search"
    />
  );
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};
