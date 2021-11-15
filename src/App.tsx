import React, { useState, useCallback } from "react";
import BingoCard from "./components/BingoCard";
import Ball from "./components/Ball";
import { generateCardNumbers } from "./util/generateCardNumbers";

const App: React.FC = () => {
	const [numbers, setNumbers] = useState(generateCardNumbers());
	const [stop, setStop] = useState(true);

	const UpdateCard = () => {
		setNumbers(generateCardNumbers());
	};
	const setOpen = useCallback((n: Number) => {
		setNumbers(pre => {
			const cur = [...pre];
			return cur.map((v, i) => (i === n ? { ...v, open: true } : v));
		});
	}, []);

	return (
		<div className="w-full min-h-full p-5 bg-blue-200">
			<h1 className="text-xl font-bold text-center">Bingo Card Generator</h1>
			<div className="md:flex mt-10 mx-auto container">
				<div className="flex flex-col justify-between md:w-1/2">
					<h2 className="text-xl font-bold text-center">Number</h2>
					<div className="flex justify-center items-center w-80 h-80 mt-4 mx-auto bg-gray-200 rounded-full">
						<Ball stop={stop} />
					</div>
					<div className="text-center mt-4">
						<button
							className="p-2 bg-blue-500 rounded text-white"
							onClick={() => {
								setStop(false);
							}}
						>
							START
						</button>
						<button
							className="ml-4 p-2 bg-blue-500 rounded text-white"
							onClick={() => {
								setStop(true);
							}}
						>
							STOP
						</button>
					</div>
				</div>
				<div className="mt-10 md:w-1/2 md:mt-0">
					<h2 className="text-xl font-bold text-center">Bingo Card</h2>
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
		</div>
	);
};

export default App;
