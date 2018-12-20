import { Name } from "../../Common/ValueObject/Name";
import { Email } from "../../Common/ValueObject/Email";
import { ExpirationDate } from "../../Common/ValueObject/ExpirationDate";
import { Status } from "../../Common/Model/Status";

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

    /**
     * @return {number}
     */
    get id() {
        return this._id;
    }

    /**
     * @param {number} id
     * @throws {Error}
     */
    set id(id) {
        throw new Error('setting `id` is not allowed, since visibility protected does not exist in ES6');
    }

    /**
     * @return {Name}
     */
    get name() {
        return this._name;
    }

    /**
     * @param {Name} name
     * @throws {Error}
     */
    set name(name) {
        throw new Error('setting `name` is not allowed, since visibility protected does not exist in ES6');
    }

    /**
     * @return {Email}
     */
    get email() {
        return this._email;
    }

    /**
     * @param {Email} email
     * @throws {Error}
     */
    set email(email) {
        throw new Error('setting `email` is not allowed, since visibility protected does not exist in ES6');
    }

    /**
     * @return {ExpirationDate}
     */
    get expirationDate() {
        return this._expirationDate;
    }

    /**
     * @param date {ExpirationDate}
     * @throws {Error}
     */
    set expirationDate(date) {
        throw new Error('setting `expirationDate` is not allowed, since visibility protected does not exist in ES6');
    }

    /**
     * @return {Status}
     */
    get status() {
        return this._status;
    }

    /**
     * @param {Status} status
     * @throws {Error}
     */
    set status(status) {
        throw new Error('setting `status` is not allowed');
    }
}
