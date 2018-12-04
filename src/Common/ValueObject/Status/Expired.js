import { StatusAbstract } from "./StatusAbstract";
import { StatusType } from "./StatusType";

export class Expired extends StatusAbstract {
    constructor(date) {
        super(date);
        if (date <= new Date()) {
            throw new Error("Expiry status cannot be set for dates before current date and time");
        }
    }

    get status() {
        return StatusType.expired;
    }
}
