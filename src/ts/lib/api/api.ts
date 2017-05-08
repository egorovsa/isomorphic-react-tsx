require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');

export class Api {

	protected request(url: string, nameOfData?: string): Promise<any> {
		return new Promise((resolve, reject) => {

			if (nameOfData) {
				let existsData = this.getExistState(nameOfData);

				if (existsData) {
					resolve(existsData);
				} else {
					this.fetch(url, nameOfData).then((data) => {
						resolve(data);
					})
				}
			} else {
				this.fetch(url).then((data) => {
					resolve(data);
				})
			}

		});
	}

	private fetch(url: string, nameOfData?: string): Promise<any> {
		return new Promise((resolve, reject) => {
			fetch(url)
				.then(function (response) {
					if (response.status >= 400) {
						reject("Bad response from server");
						throw new Error("Bad response from server");
					}

					return response.json();
				})
				.then(function (stories) {
					if (nameOfData && global) {
						if (!global['_INITIAL_STATE_']) {
							global['_INITIAL_STATE_'] = {}
						}

						global['_INITIAL_STATE_'][nameOfData] = stories;
					}

					resolve(stories);
				});
		})
	}

	private getExistState(nameOfData: string): any {
		if (typeof window !== 'undefined') {
			console.log(window['_INITIAL_STATE_']);
			let initialState = JSON.parse(window['_INITIAL_STATE_']);

			if (initialState[nameOfData]) {
				return initialState[nameOfData];
			} else {
				return null;
			}
		} else {
			return null;
		}
	}

	public setDataToInitialState() {

	}
}
