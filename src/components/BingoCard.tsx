import React from "react";
import BingoHead from "./BingoHead";
import BingoSpot from "./BingoSpot";
import { generateCardNumbers } from "../util/generateCardNumbers";

const BingoCard: React.FC = () => {
	return (
		<div className="mt-2 pt-2 pb-2 bg-green-300 rounded">
			<BingoHead />
			<div className="flex flex-wrap">
				{generateCardNumbers().map((_, i) => (
					<BingoSpot key={i} number={_} />
				))}
			</div>
		</div>
	);
};

export default BingoCard;
