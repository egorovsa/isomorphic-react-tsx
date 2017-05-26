import {PagesStore} from "../stores/pages";
import {Api} from "../../lib/api/api";
import {CONFIG} from "../../lib/config";

export class StoriesApi extends Api {

	public getStories(): Promise<PagesStore.Page> {
		return new Promise((resolve, reject) => {
			this.request(CONFIG.API_URL + '/stories', 'stories').then((data) => {
				resolve(data);
			});
		});
	}

	public getStoryById(id: number): Promise<PagesStore.Page> {
		return new Promise((resolve, reject) => {
			this.request(CONFIG.API_URL + '/stories/' + id, 'story').then((data) => {
				resolve(data);
			});
		});
	}
}
