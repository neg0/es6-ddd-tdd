import { StatusAbstract } from "./StatusAbstract";
import { StatusType } from "./StatusType";

export class Expired extends StatusAbstract {
    /**
     * @inheritDoc
     */
    constructor(date) {
        super(date);
        if (date >= new Date()) {
            throw new Error(Expired.error);
        }
    }

    /**
     * @inheritDoc
     */
    get status() {
        return StatusType.expired;
    }

    /**
     * @return {string}
     */
    static get error() {
        return "Expiry status cannot be set for dates before current date and time"
    }
}
