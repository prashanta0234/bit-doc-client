import React, { useState } from "react";
import {
	FiAlignCenter,
	FiAlignJustify,
	FiAlignLeft,
	FiAlignRight,
} from "react-icons/fi";

import "../styles/text-align.scss";

const TextAlignDropDown = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const [align, setAlign] = useState<number>(0);

	const toggleDropdown = () => {
		setIsDropdownOpen((prev) => !prev);
	};

	const alignTextLeft = () => {
		setAlign(0);
		document.execCommand("justifyLeft");
	};
	const alignTextCenter = () => {
		setAlign(1);
		document.execCommand("justifyCenter");
	};
	const alignTextRight = () => {
		setAlign(2);
		document.execCommand("justifyRight");
	};
	const justifyText = () => {
		setAlign(3);
		document.execCommand("justifyFull");
	};
	return (
		<div className="drop-down">
			<button onClick={toggleDropdown}>
				{(align === 0 && <FiAlignLeft />) ||
					(align === 1 && <FiAlignCenter />) ||
					(align === 2 && <FiAlignRight />) ||
					(align === 3 && <FiAlignJustify />)}
			</button>

			{isDropdownOpen && (
				<div className="text-align-class">
					<button
						onClick={() => {
							alignTextLeft();
							toggleDropdown();
						}}
					>
						<FiAlignLeft />
					</button>
					<button
						onClick={() => {
							alignTextCenter();
							toggleDropdown();
						}}
					>
						<FiAlignCenter />
					</button>
					<button
						onClick={() => {
							alignTextRight();
							toggleDropdown();
						}}
					>
						<FiAlignRight />
					</button>
					<button
						onClick={() => {
							justifyText();
							toggleDropdown();
						}}
					>
						<FiAlignJustify />
					</button>
				</div>
			)}
		</div>
	);
};

export default TextAlignDropDown;
