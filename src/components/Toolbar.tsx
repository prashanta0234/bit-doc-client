import React from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import "../styles/toolbar.scss";
import {
	useBoldStore,
	useItalicStore,
	useUnderLineStore,
} from "../zutand/zutandTextStyleStore";

const Toolbar = () => {
	const { toggleBold, isBold } = useBoldStore();
	const { toggleItalic, isItalic } = useItalicStore();
	const { toggleUnderLine, isUnderLine } = useUnderLineStore();

	return (
		<div>
			<div className="toolbar">
				<button
					onClick={() => toggleBold("bold")}
					className={isBold ? "buttonToggle" : ""}
				>
					<FaBold />
				</button>
				<button
					onClick={() => toggleItalic("italic")}
					className={isItalic ? "buttonToggle" : ""}
				>
					<FaItalic />
				</button>
				<button
					onClick={() => toggleUnderLine("underline")}
					className={isUnderLine ? "buttonToggle" : ""}
				>
					<FaUnderline />
				</button>
			</div>
		</div>
	);
};

export default Toolbar;
