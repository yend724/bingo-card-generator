import React from "react";

const title = "BINGO";
const BingoHead: React.FC = () => {
	return (
		<div className="flex justify-between mt-2">
			{title.split("").map((t, i) => (
				<span key={i} className="font-bold flex-grow text-center">
					{t}
				</span>
			))}
		</div>
	);
};

export default BingoHead;
