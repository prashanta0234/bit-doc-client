import React, { useState } from "react";
import "../styles/textColor.scss";
interface ColorDropDownProps {
	setColor: (value: string) => void;
	currentColor: string;
	title: string;
	symbol: string;
}
export const ColorDropDown = ({
	currentColor,
	setColor,
	title,
	symbol,
}: ColorDropDownProps) => {
	const [isDropdownOpen, setDropdownOpen] = useState(false);

	const colorOptions = [
		"#000000",
		"#FF0000",
		"#008000",
		"#0000FF",
		"#800080",
		"#FFA500",
		"#A52A2A",
		"#FFC0CB",
		"#808080",
		"#FFFFFF",
		"#00FFFF",
		"#C0C0C0",
		"#00008B",
		"#ADD8E6",
		"#FFFF00",
		"#800000",
		"#00FF00",
		"#FF00FF",
		"#808000",
		"#D3D3D3",
		"#B0CFDE",
		"#B0E0E6",
		"#00BFFF",
		"#4169E1",
		"#0000CD",
		"#1E90FF",
		"#708090",
		"#20B2AA",
		"#228B22",
		"#2E8B57",
		"#3CB371",
		"#32CD32",
		"#7FFF00",
		"#00FF7F",
		"#66CDAA",
		"#00FFFF",
		"#008080",
		"#40E0D0",
		"#008B8B",
		"#5F9EA0",
		"#87CEEB",
		"#E0FFFF",
		"#B0E0E6",
		"#191970",
		"#000080",
		"#C71585",
		"#DA70D6",
		"#4B0082",
		"#DDA0DD",
		"#D8BFD8",
		"#BA55D3",
		"#9932CC",
		"#8A2BE2",
		"#663399",
		"#EE82EE",
		"#FF00FF",
		"#8B0000",
		"#B22222",
		"#DC143C",
		"#FF6347",
		"#FF4500",
		"#F08080",
		"#CD5C5C",
		"#BDB76B",
		"#FFD700",
		"#9ACD32",
		"#FFFFE0",
		"#F5DEB3",
		"#F5F5DC",
		"#FAEBD7",
		"#FAF0E6",
		"#FFE4C4",
		"#FFDAB9",
		"#FFE4E1",
		"#FFF0F5",
		"#FFF5EE",
		"#FDF5E6",
		"#FFFAF0",
		"#FFFAFA",
		"#F8F8FF",
		"#F0F8FF",
		"#F0FFFF",
	];

	const changeColor = (color: string) => {
		setColor(color);
		setDropdownOpen(false);
	};
	return (
		<div>
			<div>
				<button
					onClick={() => setDropdownOpen((prev: boolean) => !prev)}
					className="textColorBody"
					title={title}
				>
					{symbol}
					<div
						style={{
							backgroundColor: currentColor,
							width: "20px",
							height: "5px",
							borderRadius: "5px",
						}}
					></div>
				</button>

				{isDropdownOpen && (
					<div
						style={{
							position: "absolute",
							backgroundColor: "white",
							border: "1px solid #ccc",
							borderRadius: "5px",
							padding: "5px",
							marginTop: "5px",
							display: "grid",
							gridTemplateColumns: "repeat(10, 1fr)", // This ensures 10 items in a row
							gap: "5px",
						}}
					>
						{colorOptions.map((color) => (
							<button
								key={color}
								onClick={() => changeColor(color)}
								style={{
									padding: "10px 10px",
									backgroundColor: color,
									border: "none",
									borderRadius: "5px",
									cursor: "pointer",
								}}
							></button>
						))}
					</div>
				)}
			</div>
		</div>
	);
};
