import {API} from "../api";
import {PagesStore} from "../stores/pages";

export class PagesActions {
	static pagesCommonData(slug: string, callback?: (data: PagesStore.Page) => void): void {
		this.getPageData(slug, callback);
	}

	static getPageData(slug: string, callback?: (data: PagesStore.Page) => void): void {
		API.getPageData(slug).then((data: PagesStore.Page) => {
			PagesStore.store.setState({
				page: data
			} as PagesStore.State);

			if (callback) {
				callback(data);
			}
		})
	}
}
