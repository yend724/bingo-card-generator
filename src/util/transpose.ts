export const transpose = (a: number[][]) => {
	return a[0].map((_, b) => a.map(c => c[b]));
};
