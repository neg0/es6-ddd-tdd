import { DataTransferViewInterface } from "../DataTransferViewInterface";
import { SubscriptionViewJSON } from "./SubscriptionViewJSON";

export class SubscriptionViewString extends DataTransferViewInterface {
    /**
     * @param {Subscription}subscription
     */
    constructor(subscription) {
        super();
        this.subscription = new SubscriptionViewJSON(subscription);
    }

    /**
     * @return {string}
     */
    view() {
        return JSON.stringify(this.subscription.view());
    }
}
