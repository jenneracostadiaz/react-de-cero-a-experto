(() => {
	const hero: string = 'Flash';

	function returnName(): string {
		return hero;
	}

	const activateBatisignal = (): string => {
		return 'Signal activated';
	};

	console.log(typeof activateBatisignal);

	const herName = returnName();
})();
