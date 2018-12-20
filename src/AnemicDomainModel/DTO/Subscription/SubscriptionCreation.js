import { Name } from "../../../Common/ValueObject/Name";
import { Email } from "../../../Common/ValueObject/Email";
import { ExpirationDate } from "../../../Common/ValueObject/ExpirationDate";
import { Status} from "../../../Common/Model/Status";
import { Subscription } from "../../Model/Subscription";
import { DataTransferCreateInterface } from "../DataTransferCreateInterface";

export class SubscriptionCreation extends DataTransferCreateInterface {
    /**
     * @param {number} id
     * @param {string} name
     * @param {string} email
     * @param {Date} expirationDate
     */
    constructor(id, name, email, expirationDate) {
        super();
        this.id = id;
        this.name = name;
        this.email = email;
        this.expirationDate = expirationDate;
    }

    /**
     * @return {Subscription}
     */
    create() {
        return new Subscription(
            this.id,
            new Name(this.name),
            new Email(this.email),
            new ExpirationDate(this.expirationDate),
            new Status(this.expirationDate)
        );
    }
}
