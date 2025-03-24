import Input from "../shared/Input";
import PropTypes from "prop-types";

export default function SearchInput({
	onChange,
	placeholder,
	value,
	setIsEmpty,
	setAlertModalOpen,
}) {
	function enterPress(e) {
		if (e.key === "Enter" && value.trim() === "") {
			setIsEmpty(true);
			setAlertModalOpen(true);
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
			onKeyDown={(e) => enterPress(e)}
		/>
	);
}

SearchInput.propTypes = {
	placeholder: PropTypes.string,
};
