import { Name } from "../../Common/ValueObject/Name";
import { Email } from "../../Common/ValueObject/Email";
import { ExpirationDate } from "../../Common/ValueObject/ExpirationDate";
import { Status } from "../../Common/ValueObject/Status";

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
     * @return {Subscription}
     */
    static create(id, name, email, expirationDate) {
        return new Subscription(
            id,
            new Name(name),
            new Email(email),
            new ExpirationDate(expirationDate),
            new Status(expirationDate)
        );
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
