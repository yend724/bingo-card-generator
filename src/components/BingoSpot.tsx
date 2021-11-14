import React, { useState } from "react";

type Props = {
	i: Number;
	number: Number;
};
const BingoSpot: React.FC<Props> = ({ i, number }) => {
	const [open, setOpen] = useState(false);
	const onClickOpen = () => {
		setOpen(true);
	};

	return (
		<div
			className={`w-12 h-12 mt-3 bg-white cursor-pointer group ${
				Number(i) % 5 !== 0 && "ml-3"
			}`}
			onClick={onClickOpen}
		>
			<div className="flex items-center justify-center w-full h-full perspective-500">
				<span className="inline-block bg-gray-300 rounded-t-xl">
					<span
						className={`flex items-center justify-center w-8 h-8 bg-white rounded-t-xl transform-gpu translate-y-px origin-bottom transition-all ease-out duration-150 ${
							open ? "rotate-x-60" : "group-hover:opacity-50"
						} ${number === 0 && "text-sm"}`}
					>
						{number === 0 ? "Free" : number}
					</span>
				</span>
			</div>
		</div>
	);
};

export default BingoSpot;
