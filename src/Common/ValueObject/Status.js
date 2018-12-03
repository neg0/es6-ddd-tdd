import { ValueObjectInterface } from "./ValueObjectInterface";

export class Status extends ValueObjectInterface {
    static get STATUSES() {
        return {
            active: 'ACTIVE',
            expired: 'EXPIRED',
            suspended: 'SUSPENDED',
        }
    };

    /**
     * @param {Date} expirationDate
     */
    constructor(expirationDate) {
        super();

        this._value = Status.STATUSES.expired;
        if (expirationDate > new Date()) {
            this._value = Status.STATUSES.active;
        }
    }

    /**
     * @return {string}
     */
    get value() {
        return this._value;
    }

    suspend() {
        this._value = Status.STATUSES.suspended;
    }
}
