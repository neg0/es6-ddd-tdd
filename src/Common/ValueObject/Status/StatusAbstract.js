export class StatusAbstract {
    constructor(date) {
        this._date = date;
    }

    get date() {
        return this._date;
    }

    get status() {
        throw new Error("Abstract method `status()` should be implemented");
    }

    set status(status) {
        throw new Error("It's a violation of rules to set status, each status has separate object");
    }
}
