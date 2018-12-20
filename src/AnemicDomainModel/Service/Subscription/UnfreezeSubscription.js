import { Status } from "../../../Common/Model/Status";
import { Frozen } from "../../../Common/ValueObject/Status/Frozen";
import { Subscription } from "../../Model/Subscription";
import { ExpirationDate } from "../../../Common/ValueObject/ExpirationDate";

export class UnfreezeSubscription {
    /**
     * @param {Subscription} subscription
     */
    constructor(subscription) {
        this._subscription = subscription;
    }

    /**
     * @return {Subscription}
     * @throws {Error}
     */
    unfreeze() {
        if (false === this._subscription.status.value instanceof Frozen) {
            throw new Error("Subscription is not Frozen!");
        }

        const frozenDate = this._subscription.status.value.date;
        const oneDayInMilliSecond = 1000 * 60 * 60 * 24;
        const dateDiff = (new Date() - frozenDate) / oneDayInMilliSecond;

        let expirationDate = this._subscription.expirationDate.value;
        expirationDate.setDate(expirationDate.getDate() + dateDiff);

        this._subscription.expirationDate = new ExpirationDate(expirationDate);
        this._subscription.status = Status.create(expirationDate);

        return this._subscription;
    }
}
