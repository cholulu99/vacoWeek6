import Input from "../shared/Input";
import PropTypes from "prop-types";
import { useRef } from "react";

export default function SearchInput({
	onChange,
	placeholder,
	setIsEmpty,
	setAlertModalOpen,
	searchRun,
}) {
	const inputRef = useRef(null);
	function enterPress(e) {
		if (e.key === "Enter") {
			if (inputRef.current.value.trim() === "") {
				onChange(inputRef.current.value);
				setIsEmpty(true);
				setAlertModalOpen(true);
				inputRef.current.blur();
			} else {
				onChange(inputRef.current.value);
				searchRun(inputRef.current.value);
				setIsEmpty(false);
			}
		}
	}
	return (
		<Input
			ref={inputRef}
			type="text"
			placeholder={placeholder}
			data-test="input-search"
			onKeyDown={(e) => enterPress(e)}
		/>
	);
}

SearchInput.propTypes = {
	placeholder: PropTypes.string,
};
