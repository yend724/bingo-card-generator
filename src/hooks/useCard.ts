import { useState, useCallback } from "react";
import { generateCardNumbers } from "../util/generateCardNumbers";

const useCard = () => {
	const [numbers, setNumbers] = useState(generateCardNumbers());
	const [start, setStart] = useState(false);

	const getNewNumbers = useCallback(() => {
		setNumbers(generateCardNumbers());
	}, []);
	const open = useCallback((n: Number) => {
		setNumbers(pre => {
			const cur = [...pre];
			return cur.map((v, i) => (i === n ? { ...v, open: true } : v));
		});
	}, []);

	return { numbers, getNewNumbers, open, start, setStart };
};

export default useCard;
