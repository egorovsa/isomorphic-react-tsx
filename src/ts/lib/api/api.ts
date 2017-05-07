require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');

export class Api {
	constructor() {

	}

	protected request(url: string, nameOfData: string) {
		fetch('http://metallapriem.ru/api/get_page/opt')
			.then(function (response) {
				if (response.status >= 400) {
					throw new Error("Bad response from server");
				}
				return response.json();
			})
			.then(function (stories) {
				console.log(stories);

			});
	}
}
