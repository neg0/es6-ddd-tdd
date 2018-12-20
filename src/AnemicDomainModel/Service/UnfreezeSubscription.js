import { Status } from "../../Common/ValueObject/Status";
import { Frozen } from "../../Common/ValueObject/Status/Frozen";
import { Subscription } from "../Model/Subscription";

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
        if (this._subscription.status.value instanceof Frozen) {
            const expirationDate = this._subscription.expirationDate.value;
            const frozenDate = this._subscription.status.date;
            const dateDiff = expirationDate - frozenDate;
            this._subscription.status = Status.create(new Date(dateDiff.getDate()));

            return this._subscription;
        }

        throw new Error("Subscription is not Frozen!");
    }
}
