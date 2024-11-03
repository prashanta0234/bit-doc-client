import React from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import "../styles/toolbar.scss";
import { toolbarType } from "../types/toolbarType";

const Toolbar = ({ onFormat }: toolbarType) => {
	return (
		<div>
			<div className="toolbar">
				<button onClick={() => onFormat("bold")}>
					<FaBold />
				</button>
				<button onClick={() => onFormat("italic")}>
					<FaItalic />
				</button>
				<button onClick={() => onFormat("underline")}>
					<FaUnderline />
				</button>
			</div>
		</div>
	);
};

export default Toolbar;
export {};
