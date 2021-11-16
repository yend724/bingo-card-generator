import React, { useState } from "react";
import BingoCard from "./components/BingoCard";
import Ball from "./components/Ball";
import Container from "./components/Container";
import useCard from "./hooks/useCard";
import { arrayShuffle } from "./util/arrayShuffle";

const randomNumbers = arrayShuffle(Array.from({ length: 75 }, (_, i) => ++i));

const App: React.FC = () => {
	const { numbers, getNewNumbers, open, start, setStart } = useCard();
	const [count, setCount] = useState(0);

	return (
		<div className="w-full min-h-full p-5 bg-blue-200">
			<h1 className="text-xl font-bold text-center">Bingo Card Generator</h1>
			<div className="md:flex mt-10 mx-auto container">
				<Container title="Number">
					<div className="flex justify-center items-center w-80 h-80 mt-4 mx-auto bg-gray-200 rounded-full">
						<Ball numbers={randomNumbers} start={start} />
					</div>
					<div className="text-center mt-4">
						<button
							className={`p-2 bg-blue-500 rounded text-white ${
								count === randomNumbers.length && "bg-gray-500 cursor-auto"
							}`}
							onClick={() => {
								if (count === randomNumbers.length) return;
								setStart(true);
							}}
						>
							START
						</button>
						<button
							className={`ml-4 p-2 bg-blue-500 rounded text-white ${
								count === randomNumbers.length && "bg-gray-500 cursor-auto"
							}`}
							onClick={e => {
								setStart(pre => {
									if (pre) {
										setCount(c => ++c);
									}
									return false;
								});
							}}
						>
							STOP
						</button>
					</div>
				</Container>
				<Container title="Bingo Card">
					<div className="mx-auto w-80 container">
						<BingoCard numbers={numbers} open={open} />
					</div>
					<div className="text-center mt-4">
						<button
							className="p-2 bg-blue-500 rounded text-white"
							onClick={getNewNumbers}
						>
							カードを更新する
						</button>
					</div>
				</Container>
			</div>
		</div>
	);
};

export default App;
