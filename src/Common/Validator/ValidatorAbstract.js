export class ValidatorAbstract {
    constructor() {
        this._error = undefined;
    }
    /**
     * @return {string}
     */
    get error() {
        return this.isValid() ? undefined : this._error;
    }

    /**
     * @param {string} errorMessage
     */
    set error(errorMessage) {
        this._error = errorMessage;
    }

    /**
     * @return {boolean}
     */
    isValid() {
        throw new Error("Abstract method `isValid()` is not implemented");
    }
}
