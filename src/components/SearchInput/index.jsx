import Input from "../shared/Input";
import PropTypes from "prop-types";
import { useRef } from "react";

export default function SearchInput({
	onChange,
	placeholder,
	value,
	setIsEmpty,
	setAlertModalOpen,
	searchRun,
}) {
	const inputRef = useRef(null);
	function enterPress(e) {
		if (e.key === "Enter" && value.trim() === "") {
			setIsEmpty(true);
			setAlertModalOpen(true);
			inputRef.current.blur();
		} else if (e.key === "Enter") {
			searchRun();
			setIsEmpty(false);
		}
	}
	return (
		<Input
			ref={inputRef}
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={(ev) => onChange(ev.target.value)}
			data-test="input-search"
			onKeyDown={(e) => enterPress(e)}
		/>
	);
}

SearchInput.propTypes = {
	placeholder: PropTypes.string,
};
