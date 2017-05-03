import {PagesStore} from "./stores/pages";

export class API {
	static getPageData(slug: string): Promise<PagesStore.Page> {
		return new Promise((resolve, reject) => {
			let data = {
				'page': {
					id: 1,
					title: 'Test title',
					description: 'Test descr',
					keywords: '',
					content: 'test page content',
					active: true
				},
				'page1': {
					id: 1,
					title: 'Test title 1',
					description: 'Test descr 1',
					keywords: '',
					content: 'test page content 1',
					active: true
				}
			};

			if (data[slug]) {

				setTimeout(()=>{

				}, 5000);

				resolve(data[slug]);
			} else {
				resolve(
					{
						id: 0,
						title: 'Test page not found',
						description: 'Test descr 1',
						keywords: '',
						content: 'page not found',
						active: true
					}
				)
			}
		});
	}
}
