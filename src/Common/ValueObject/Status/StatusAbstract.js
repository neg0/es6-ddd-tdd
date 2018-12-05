export class StatusAbstract {
    /**
     * @param {Date} date
     */
    constructor(date) {
        this._date = date;
    }

    /**
     * @return {Date}
     */
    get date() {
        return this._date;
    }

    /**
     * @return {string}
     */
    get status() {
        throw new Error("Abstract method `status()` should be implemented");
    }

    /**
     * @param {string} status
     * @throws {Error}
     */
    set status(status) {
        throw new Error("It's a violation of rules to set status, each status has separate object");
    }
}
