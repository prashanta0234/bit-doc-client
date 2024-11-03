import React, { useRef, useState, useEffect } from "react";
import "./App.scss";
import Toolbar from "./components/Toolbar";
import Menubar from "./components/Menubar";

const App: React.FC = () => {
	const editorRef = useRef<HTMLDivElement>(null);
	const [pages, setPages] = useState<number[]>([0]);

	const handleFormat = (command: string) => {
		document.execCommand(command, false);
	};

	useEffect(() => {
		if (!editorRef.current) return;

		const observer = new ResizeObserver(() => {
			const lastPage = editorRef.current?.lastElementChild as HTMLDivElement;
			if (lastPage.scrollHeight > lastPage.clientHeight) {
				setPages((prev) => [...prev, prev.length]); // Add a new page
			}
		});

		observer.observe(editorRef.current);

		return () => observer.disconnect();
	}, []);

	return (
		<div className="app">
			<Menubar />
			<Toolbar onFormat={handleFormat} />
			<div id="editor" ref={editorRef}>
				{pages.map((_, index) => (
					<textarea
						key={index}
						className="page"
						contentEditable={true}
						placeholder="Start typing..."
					/>
				))}
			</div>
		</div>
	);
};

export default App;
