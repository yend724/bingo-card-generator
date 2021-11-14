import React, { useState, useCallback } from "react";
import BingoCard from "./components/BingoCard";
import { generateCardNumbers } from "./util/generateCardNumbers";

const App: React.FC = () => {
	const [numbers, setNumbers] = useState(generateCardNumbers());

	const UpdateCard = () => {
		setNumbers(generateCardNumbers());
	};
	const setOpen = useCallback((n: Number) => {
		setNumbers(pre => {
			const cur = [...pre];
			const next = cur.map((v, i) => (i === n ? { ...v, open: true } : v));
			return next;
		});
	}, []);

	return (
		<div className="w-full h-full p-5">
			<div className="container mx-auto">
				<h1 className="text-xl font-bold text-center">Bingo Card Generator</h1>
				<div className="mx-auto w-80 container">
					<BingoCard numbers={numbers} setOpen={setOpen} />
				</div>
				<div className="text-center mt-4">
					<button
						className="p-2 bg-blue-500 rounded text-white"
						onClick={UpdateCard}
					>
						カードを更新する
					</button>
				</div>
			</div>
		</div>
	);
};

export default App;
