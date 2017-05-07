require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');

export class Api {

	protected request(url: string, nameOfData: string) {
		fetch(url)
			.then(function (response) {
				if (response.status >= 400) {
					throw new Error("Bad response from server");
				}

				console.log('TEST1', response.json());
				// return response.json();
			})
			.then(function (stories) {
				console.log('TEST2',stories);

			});
	}

	public setDataToInitialState() {

	}
}
