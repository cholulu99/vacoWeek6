import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/vaco.svg";
import SearchInput from "../SearchInput";
import Container from "../shared/Container";
import Heading from "../shared/Heading";

const Header = styled.header`
	position: fixed;
	background-color: #ffffff;
	width: 100%;
	top: 0;
	box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);

	section {
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 2em 0;
	}

	a {
		text-decoration: none;
		color: #000000;
	}

	.brand {
		display: flex;
		align-items: center;
		width: 700;

		h1 {
			margin-left: 10px;
			text-transform: uppercase;
			font-style: italic;
		}
	}

	img {
		padding: 5px;
		height: 1.5rem;
		border: 1px solid black;
		border-radius: 2px;
	}

	.input-container {
		width: 300px;
	}
`;

export default function AppHeader({
	setText,
	setIsEmpty,
	setAlertModalOpen,
	searchRun,
	setClickHome,
	clickHome,
}) {
	function handler() {
		setText("");
		setClickHome(!clickHome);
	}
	return (
		<Header>
			<Container>
				<section>
					<div className="brand" onClick={handler}>
						<img src={logo} alt="logo" />
						<Heading>Youtube Viewer</Heading>
					</div>
					<div className="input-container">
						<SearchInput
							placeholder="Youtube 검색"
							onChange={setText}
							setIsEmpty={setIsEmpty}
							setAlertModalOpen={setAlertModalOpen}
							searchRun={searchRun}
						/>
					</div>
				</section>
			</Container>
		</Header>
	);
}
