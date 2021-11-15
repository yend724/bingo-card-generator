import React, { useState, useEffect, useRef } from "react";
import { arrayShuffle } from "../util/arrayShuffle";

const targets = arrayShuffle(Array.from({ length: 75 }, (_, i) => ++i));
const n = (c: number) => {
	switch (c) {
		case 0:
			return "??";
		default:
			return targets[c - 1];
	}
};

type Props = {
	stop: boolean;
};
const Ball: React.FC<Props> = ({ stop }) => {
	const [random, setRandom] = useState(0);
	const [count, setCount] = useState(0);
	const requestRef = useRef<number>(0);
	useEffect(() => {
		const animate = () => {
			setRandom(pre => (pre > 75 ? 0 : ++pre));
			if (!stop) {
				requestRef.current = requestAnimationFrame(animate);
			}
		};
		animate();

		if (!stop) {
			setCount(c => ++c);
		}
		return () => {
			cancelAnimationFrame(requestRef.current);
		};
	}, [stop]);

	return (
		<span className="text-9xl font-bold">
			{count > targets.length ? "End" : stop ? n(count) : random}
		</span>
	);
};

export default Ball;
