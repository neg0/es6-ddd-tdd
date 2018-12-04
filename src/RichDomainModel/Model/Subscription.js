import { Name } from "../../Common/ValueObject/Name";
import { Email } from "../../Common/ValueObject/Email";
import { ExpirationDate } from "../../Common/ValueObject/ExpirationDate";
import { Status } from "../../Common/ValueObject/Status";
import { SubscriptionViewAbstract } from "../SubscriptionViewAbstract";
import {Frozen} from "../../Common/ValueObject/Status/Frozen";
import {Active} from "../../Common/ValueObject/Status/Active";

export class Subscription extends SubscriptionViewAbstract {
    /**
     * @param {number} id
     * @param {Name} name
     * @param {Email} email
     * @param {Status} status
     * @param {ExpirationDate} expirationDate
     */
    constructor(id, name, email, expirationDate, status) {
        super();
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
     * @return {boolean}
     * @throws {Error}
     */
    unfreeze() {
        if (this.status.value instanceof Frozen) {
            // Add this.status.value.date to date
            // Add difference to expirationDate
            this.status = Status.create(new Date());

            return true;
        }

        throw new Error("Not available for this subscription");
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
}
