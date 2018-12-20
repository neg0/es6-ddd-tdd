import { Name } from "../../Common/ValueObject/Name";
import { Email } from "../../Common/ValueObject/Email";
import { ExpirationDate } from "../../Common/ValueObject/ExpirationDate";
import { Status } from "../../Common/ValueObject/Status";
import { Frozen } from "../../Common/ValueObject/Status/Frozen";

export class Subscription {
    /**
     * @param {number} id
     * @param {Name} name
     * @param {Email} email
     * @param {Status} status
     * @param {ExpirationDate} expirationDate
     */
    constructor(id, name, email, expirationDate, status) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.expirationDate = expirationDate;
        this.status = status
    }

    /**
     * @param {number} id
     * @param {string} name
     * @param {string} email
     * @param {Date} expirationDate
     * @param {string|undefined} status
     * @return {Subscription}
     */
    static create(id, name, email, expirationDate, status) {
        return new Subscription(
            id,
            new Name(name),
            new Email(email),
            new ExpirationDate(expirationDate),
            Status.create(expirationDate, status)
        );
    }

    /**
     * @param {{
     *  name: string,
     *  email: string,
     *  expirationDate: Date
     * }} data
     * @return {Subscription}
     */
    update(data) {
        this.name = data.name ? new Name(data.name) : this.name;
        this.email = data.email ? new Email(data.email) : this.email;
        this.expirationDate = data.expirationDate ?
            new ExpirationDate(data.expirationDate) :
            this.expirationDate;

        return this;
    }

    /**
     * @return {Subscription}
     * @throws {Error}
     */
    unfreeze() {
        if (false === this.status.value instanceof Frozen) {
            throw new Error("Subscription is not Frozen!");
        }

        const frozenDate = this.status.value.date;
        const oneDayInMilliSecond = 1000 * 60 * 60 * 24;
        const dateDiff = (new Date() - frozenDate) / oneDayInMilliSecond;

        let expirationDate = this.expirationDate.value;
        expirationDate.setDate(expirationDate.getDate() + dateDiff);

        this.expirationDate = new ExpirationDate(expirationDate);
        this.status = Status.create(expirationDate);

        return this;
    }

    /**
     * @return {{
     *  id: number,
     *  name: string,
     *  email: string,
     *  expiration: string
     * }}
     */
    toJSON() {
        return {
            id: this.id,
            name: this.name.value,
            email: this.email.value,
            expiration: this.expirationDate.value.toLocaleDateString(),
            status:this.status.value,
        };
    }

    /**
     * @return {string}
     */
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
