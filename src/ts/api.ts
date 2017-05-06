import {PagesStore} from "./stores/pages";
import * as request from "superagent";

export class API {
	static getPageData(slug: string): Promise<PagesStore.Page> {
		let dataName = 'pages';

		return new Promise((resolve, reject) => {
			let data = [
				{
					id: 1,
					slug: "page",
					title: "Test title",
					description: "Test descr",
					keywords: "",
					content: "test page content",
					active: true
				},
				{
					id: 1,
					slug: "page1",
					title: "Test title 1",
					description: "Test descr 1",
					keywords: "",
					content: "test page content 1",
					active: true
				}
			];


			let exit = {
				id: 0,
				slug: '',
				title: 'Test page not found',
				description: 'Test descr 1',
				keywords: '',
				content: 'page not found',
				active: true
			};


			// window['appData'][dataName] = data;

			setTimeout(() => {
				data.map((item) => {
					if (item.slug === slug) {
						exit = item;
					}
				});

				resolve(exit);
			}, 5000);


		});
	}
}
