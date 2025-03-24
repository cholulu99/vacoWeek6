import Input from "../shared/Input";
import PropTypes from "prop-types";

export default function SearchInput({
	onChange,
	placeholder,
	value,
	setIsEmpty,
	setAlertModalOpen,
	inputRef,
}) {
	function enterPress(e) {
		if (e.key === "Enter" && value.trim() === "") {
			setIsEmpty(true);
			setAlertModalOpen(true);
			inputRef.current.blur();
		} else {
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
