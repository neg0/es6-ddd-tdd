import { StatusAbstract } from "./StatusAbstract";
import { StatusType } from "./StatusType";

export class Suspended extends StatusAbstract {
    constructor(date) {
        super(date);

        if (date <= new Date()) {
            throw new Error(Suspended.error);
        }
    }

    get status() {
        return StatusType.suspended;
    }

    static get error() {
        return "Date can not be in the past when suspending the status";
    }
}
