export class SubscriptionViewAbstract {
    /**
     * @return {{}}
     */
    toJSON() {
        throw new Error("Abstract Method `toJSON()` is not implemented");
    }

    /**
     * @return {string}
     */
    toString() {
        return JSON.stringify(this.toJSON());
    }
}
