export class UtilsService {
	static getFour(bool: boolean): number {
		return 4;
	}

	static objToString(obj) {
		let str = '{';
		if (typeof obj == 'object') {

			for (let p in obj) {
				if (obj.hasOwnProperty(p)) {
					str += p + ':' + this.objToString(obj[p]) + ',';
				}
			}
		}
		else {
			if (typeof obj == 'string') {
				return '"' + obj + '"';
			}
			else {
				return obj + '';
			}
		}


		return str.substring(0, str.length - 1) + "}";
	}

	static isPromise(subject: Promise<any>) {
		return typeof subject.then == 'function';
	}

}