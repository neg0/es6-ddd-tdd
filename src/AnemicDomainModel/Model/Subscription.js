import { Name } from "../../Common/ValueObject/Name";
import { Email } from "../../Common/ValueObject/Email";
import { ExpirationDate } from "../../Common/ValueObject/ExpirationDate";
import { Status } from "../../Common/ValueObject/Status";

export class Subscription {
    /**
     * @param {number} id
     * @param {Name} name
     * @param {Email} email
     * @param {ExpirationDate} expirationDate
     * @param {Status} status
     */
    constructor(id, name, email, expirationDate, status) {
        this._id = id;
        this._name = name;
        this._email = email;
        this._expirationDate = expirationDate;
        this._status = status
    }

    get id() {
        return this._id;
    }

    /**
     * @param {number} id
     */
    set id(id) {
        this._id = id;
    }

    /**
     * @return {Name}
     */
    get name() {
        return this._name;
    }

    /**
     * @param {Name} name
     */
    set name(name) {
        this._name = name;
    }

    /**
     * @return {Email}
     */
    get email() {
        return this._email;
    }

    /**
     * @param {Email} email
     */
    set email(email) {
        this._email = email;
    }

    /**
     * @return {ExpirationDate}
     */
    get expirationDate() {
        return this._expirationDate;
    }

    /**
     * @param {ExpirationDate} date
     */
    set expirationDate(date) {
        this._expirationDate = date;
    }

    /**
     * @return {Status}
     */
    get status() {
        return this._status;
    }

    /**
     * @param {Status} status
     */
    set status(status) {
        this._status = status;
    }
}
