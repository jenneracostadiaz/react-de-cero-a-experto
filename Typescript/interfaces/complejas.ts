(() => {
	interface Client {
		name: string;
		age?: number;
		address: Address;
		getFullAddress(id: string): string;
	}

	interface Address {
		id: number;
		zipCode: string;
		city: string;
	}

	const client: Client = {
		name: 'Fernando',
		age: 33,
		address: {
			id: 123,
			zipCode: '123456',
			city: 'Mexico',
		},
		getFullAddress(id: string) {
			return `${this.address.city}, ${this.address.zipCode}`;
		},
	};

	console.log(client);
})();
