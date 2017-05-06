export class Controllers {
	public data;

	constructor(data) {
		this.data = data;
	}

	public isPage(controller: string, action: string, callback: (err: boolean) => void): void {
		if (this[controller]) {
			if (this[controller][action]) {
				callback(null)
			} else {
				callback(true)
			}
		} else {
			callback(true)
		}
	}

	public isAction(controller: string, action: string): boolean {
		return !!this[controller][action];
	}


	public isController(controller: string): boolean {
		return !!this[controller];
	}
}