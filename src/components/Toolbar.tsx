import React, { useState } from "react";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import "../styles/toolbar.scss";
import {
	useBoldStore,
	useItalicStore,
	useUnderLineStore,
} from "../zutand/zutandTextStyleStore";
import { ColorDropDown } from "./ColorDropDown";

const Toolbar = () => {
	const { toggleBold, isBold } = useBoldStore();
	const { toggleItalic, isItalic } = useItalicStore();
	const { toggleUnderLine, isUnderLine } = useUnderLineStore();
	const [currentTextColor, setCurrentTextColor] = useState("black");
	const [highLightColor, setHighLightColor] = useState("white");

	const changeTextColor = (color: string) => {
		document.execCommand("foreColor", false, color);
		setCurrentTextColor(color);
	};
	const changeHighlightColor = (color: string) => {
		document.execCommand("backColor", false, color);
		setHighLightColor(color);
	};

	return (
		<div style={{ position: "sticky", zIndex: "50px" }}>
			<div className="toolbar">
				<button
					onClick={() => toggleBold("bold")}
					className={isBold ? "buttonToggle" : ""}
					title="Bold"
				>
					<FaBold />
				</button>
				<button
					onClick={() => toggleItalic("italic")}
					className={isItalic ? "buttonToggle" : ""}
					title="Italic"
				>
					<FaItalic />
				</button>
				<button
					onClick={() => toggleUnderLine("underline")}
					className={isUnderLine ? "buttonToggle" : ""}
					title="Underline"
				>
					<FaUnderline />
				</button>
				<ColorDropDown
					currentColor={currentTextColor}
					setColor={changeTextColor}
					title="Text color"
					symbol="A"
				/>
				<ColorDropDown
					currentColor={highLightColor}
					setColor={changeHighlightColor}
					title="Highlight text"
					symbol="H"
				/>
			</div>
		</div>
	);
};

export default Toolbar;
