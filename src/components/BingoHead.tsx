import React from "react";

const title = "BINGO";
const BingoHead: React.FC = () => {
	return (
		<div className="flex justify-between px-4">
			{title.split("").map((t, i) => (
				<span
					key={i}
					className={`w-12 ${i > 0 && "ml-3"} font-bold text-center`}
				>
					{t}
				</span>
			))}
		</div>
	);
};

export default BingoHead;
