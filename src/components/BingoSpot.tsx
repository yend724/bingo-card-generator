import React, { useState } from "react";

type Props = {
	number: Number;
};
const BingoSpot: React.FC<Props> = ({ number }) => {
	const [open, setOpen] = useState(false);

	return (
		<div className="w-12 h-12 mt-2 ml-2 bg-white" onClick={() => setOpen(true)}>
			<div
				className="flex items-center justify-center w-full h-full"
				style={{ perspective: "500px" }}
			>
				<span className="inline-block bg-gray-300 rounded-t-xl">
					<span
						className="inline-block w-8 h-8 bg-white rounded-t-xl text-center origin-bottom"
						style={{ transform: `${open ? "rotateX(45deg)" : "none"}` }}
					>
						{number === 0 ? "Free" : number}
					</span>
				</span>
			</div>
		</div>
	);
};

export default BingoSpot;
