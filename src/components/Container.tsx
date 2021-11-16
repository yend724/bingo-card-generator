import React from "react";

type Props = {
	title: string;
	children: React.ReactNode;
};
const Container: React.FC<Props> = ({ children, title }) => {
	return (
		<div className="flex flex-col justify-between md:w-1/2">
			<h2 className="text-xl font-bold text-center">{title}</h2>
			{children}
		</div>
	);
};

export default Container;
