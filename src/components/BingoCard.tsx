import React from "react";
import BingoHead from "./BingoHead";
import BingoSpot from "./BingoSpot";
import { generateCardNumbers } from "../util/generateCardNumbers";

const BingoCard: React.FC = () => {
	return (
		<div className="mt-4 py-4 bg-green-300 rounded">
			<BingoHead />
			<div className="flex flex-wrap px-4">
				{generateCardNumbers().map((_, i) => (
					<BingoSpot key={i} number={_} i={i} />
				))}
			</div>
		</div>
	);
};

export default BingoCard;
