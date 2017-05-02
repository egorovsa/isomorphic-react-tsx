import {API} from "../api";

export class CommonActions {
	static getCommonData(callback?: () => void): void {
		if (callback) {
			callback();
		}
	}
}
