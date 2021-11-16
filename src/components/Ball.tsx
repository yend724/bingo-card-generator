import React, { useState, useEffect, useRef, useCallback } from "react";

type Props = {
	start: boolean;
	numbers: number[];
};
const Ball: React.FC<Props> = ({ start, numbers }) => {
	const [random, setRandom] = useState(0);
	const [count, setCount] = useState(0);
	const startRef = useRef(false);
	const requestRef = useRef<number>(0);

	const animate = useCallback(() => {
		setRandom(pre => (pre > 75 ? 0 : ++pre));
		if (startRef.current) {
			requestRef.current = requestAnimationFrame(animate);
		}
	}, []);

	useEffect(() => {
		startRef.current = start;
		animate();
		if (start) {
			setCount(c => ++c);
		}
		return () => {
			cancelAnimationFrame(requestRef.current);
		};
	}, [start, animate]);

	if (count === 0) {
		return <span className="text-9xl font-bold">??</span>;
	}

	if (count > numbers.length) {
		return <span className="text-5xl font-bold">Completed</span>;
	}

	return (
		<span className="text-9xl font-bold">
			{start ? numbers[random - 1] : numbers[count - 1]}
		</span>
	);
};

export default React.memo(Ball);
