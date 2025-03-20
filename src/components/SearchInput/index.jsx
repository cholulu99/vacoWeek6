import Input from "../shared/Input";
import PropTypes from "prop-types";
import {useState} from "react";

export default function SearchInput({ onChange, placeholder}) {
  const [text,setText] = useState("");
  function enterPress(value) {
    if(value.key === "Enter" && text === "") {
      alert("검색어를 다시 확인해주세요");
    }
  }
  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={text} // 바닐라 코딩으로 고정
      onChange={(ev) => setText(ev.target.value)}
      data-test="input-search"
      onKeyDown={e => enterPress(e)}
    />
  );
}

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};
