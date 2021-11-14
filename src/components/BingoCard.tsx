import React from "react";
import BingoHead from "./BingoHead";
import BingoSpot from "./BingoSpot";

type Props = {
	numbers: {
		number: Number;
		open: boolean;
	}[];
	setOpen: (n: Number) => void;
};
const BingoCard: React.FC<Props> = ({ numbers, setOpen }) => {
	return (
		<div className="mt-4 py-4 bg-green-300 rounded">
			<BingoHead />
			<div className="flex flex-wrap px-4">
				{numbers.map((_, i) => (
					<BingoSpot
						key={i}
						number={_.number}
						open={_.open}
						i={i}
						setOpen={setOpen}
					/>
				))}
			</div>
		</div>
	);
};

export default BingoCard;
