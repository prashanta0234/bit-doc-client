import React, { useRef, useState, useEffect } from "react";
import "./App.scss";
import Toolbar from "./components/Toolbar";
import Menubar from "./components/Menubar";

const App: React.FC = () => {
	const editorRef = useRef<HTMLDivElement>(null);
	const [pages, setPages] = useState<number[]>([0]);
	const pageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!editorRef.current) return;

		const observer = new ResizeObserver(() => {
			const lastPage = editorRef.current?.lastElementChild as HTMLDivElement;
			if (lastPage.scrollHeight > lastPage.clientHeight) {
				setPages((prev) => [...prev, prev.length]);
			}
		});

		observer.observe(editorRef.current);
		if (pageRef.current) {
			pageRef.current.focus();
		}

		return () => observer.disconnect();
	}, []);

	useEffect(() => {
		if (pageRef.current) {
			pageRef.current.focus();
		}
	}, []);

	return (
		<div className="app">
			<div
				style={{
					position: "sticky",
					top: "0",
					zIndex: "50",
					backgroundColor: "white",
				}}
			>
				<Menubar />
				<Toolbar />
			</div>
			<div id="editor" ref={editorRef}>
				{pages.map((_, index) => (
					<div
						tabIndex={0}
						key={index}
						className="page"
						contentEditable={true}
						area-placeholder="Start typing..."
						style={{ whiteSpace: "pre-wrap" }}
						ref={pageRef}
					></div>
				))}
			</div>
		</div>
	);
};

export default App;
