import { Subscription } from "../../Model/Subscription";

export class SubscriptionViewJSON {
    /**
     * @param {Subscription} subscription
     */
    constructor(subscription) {
        this.subscription = subscription;
    }

    /**
     * @return {{id: number, name: string, email: string, expiration: string, status: string}}
     */
    view() {
        return {
            id: this.subscription.id,
            name: this.subscription.name.value,
            email: this.subscription.email.value,
            expiration: this.subscription.expirationDate.value.toLocaleDateString(),
            status:this.subscription.status.value,
        };
    }
}
