import { arrayShuffle as shuffle } from "./arrayShuffle";
import { transpose } from "./transpose";

export const generateCardNumbers = () => {
	const serialNumbers = Array.from({ length: 75 }, (_, i) => i + 1);
	const serialNumbersSplit: number[][] = [
		shuffle(serialNumbers.slice(0, 15)).slice(0, 5),
		shuffle(serialNumbers.slice(15, 30)).slice(0, 5),
		shuffle(serialNumbers.slice(30, 45)).slice(0, 5),
		shuffle(serialNumbers.slice(45, 60)).slice(0, 5),
		shuffle(serialNumbers.slice(60, 75)).slice(0, 5),
	];
	const cardNumbers = transpose(serialNumbersSplit)
		.flat()
		.map((v, i) => (i === 12 ? 0 : v));
	return cardNumbers;
};
