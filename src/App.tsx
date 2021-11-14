import React from "react";
import BingoCard from "./components/BingoCard";

const App: React.FC = () => {
	return (
		<div className="w-full h-full p-2">
			<h1 className="text-xl font-bold text-center">Bingo Card Generator</h1>
			<div className="mx-auto w-72">
				<BingoCard />
			</div>
		</div>
	);
};

export default App;
