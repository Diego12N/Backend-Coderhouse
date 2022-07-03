export const getTime = () => {
	let fyh = new Date().toLocaleDateString();
	let timestamp = Date.now();

	return {fyh, timestamp};
};
