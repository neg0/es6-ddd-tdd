import { DataTransferUpdateInterface } from "../DataTransferUpdateInterface";
import { Email } from "../../../Common/ValueObject/Email";
import { Status } from "../../../Common/Model/Status";
import { ExpirationDate } from "../../../Common/ValueObject/ExpirationDate";
import { Name } from "../../../Common/ValueObject/Name";

export class SubscriptionUpdate extends DataTransferUpdateInterface {
    constructor(subscription) {
        super();
        this._subscription = subscription;
    }

    /**
     * @param {{
     *  name: string,
     *  email: string,
     *  expirationDate: Date,
     *  status: string|undefined
     * }} data
     * @return {Subscription}
     */
    update(data) {
        this._subscription.name = new Name(data.name);
        this._subscription.email = new Email(data.email);
        this._subscription.expirationDate = new ExpirationDate(data.expirationDate);
        this._subscription.status = Status.create(this.expirationDate.value, data.status);

        return this._subscription;
    }
}
