import {PagesStore} from "../stores/pages";
import {Api} from "../lib/api/api";

export class PagesApi extends Api{

	public getPageData(slug: string): Promise<PagesStore.Page> {
		let dataName = 'pages';

		return new Promise((resolve, reject) => {
			resolve();

		});
	}
}
