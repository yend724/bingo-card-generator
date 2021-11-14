import React, { useState } from "react";

type Props = {
	number: Number;
};
const BingoSpot: React.FC<Props> = ({ number }) => {
	const [open, setOpen] = useState(false);
	const onClickOpen = () => {
		setOpen(true);
	};

	return (
		<div
			className="w-12 h-12 mt-2 ml-2 bg-white cursor-pointer group"
			onClick={onClickOpen}
		>
			<div className="flex items-center justify-center w-full h-full perspective-500">
				<span className="inline-block bg-gray-300 rounded-t-xl">
					<span
						className={`inline-block w-8 h-8 bg-white rounded-t-xl text-center transform-gpu translate-y-px origin-bottom ${
							open ? "rotate-x-60" : "group-hover:opacity-50"
						}`}
					>
						{number === 0 ? "Free" : number}
					</span>
				</span>
			</div>
		</div>
	);
};

export default BingoSpot;
