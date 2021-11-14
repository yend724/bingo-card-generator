import { arrayShuffle as shuffle } from "./arrayShuffle";

export const generateCardNumbers = () => {
	const all = Array.from({ length: 75 }, (_, i) => i + 1);
	const arr: number[][] = [
		shuffle(all.slice(0, 15)),
		shuffle(all.slice(15, 30)),
		shuffle(all.slice(30, 45)),
		shuffle(all.slice(45, 60)),
		shuffle(all.slice(60, 75)),
	];
	const ret: number[] = [];

	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			if (i === 2 && j === 2) {
				ret.push(0);
			} else {
				ret.push(arr[j][i]);
			}
		}
	}
	return ret;
};
