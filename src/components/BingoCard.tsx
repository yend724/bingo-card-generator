import React from "react";
import BingoHead from "./BingoHead";
import BingoSpot from "./BingoSpot";

type Props = {
	numbers: {
		number: Number;
		open: boolean;
	}[];
	open: (n: Number) => void;
};
const BingoCard: React.FC<Props> = ({ numbers, open }) => {
	return (
		<div className="mt-4 py-4 bg-green-300 rounded">
			<BingoHead />
			<div className="flex flex-wrap px-4">
				{numbers.map((_, i) => (
					<BingoSpot
						key={i}
						number={_.number}
						isOpen={_.open}
						i={i}
						open={open}
					/>
				))}
			</div>
		</div>
	);
};

export default BingoCard;
