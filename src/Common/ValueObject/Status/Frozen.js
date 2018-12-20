import { StatusAbstract } from "./StatusAbstract";
import { StatusType } from "./StatusType";

export class Frozen extends StatusAbstract {
    /**
     * @inheritDoc
     */
    constructor(date) {
        super(date);

        if (date <= new Date()) {
            throw new Error(Frozen.error);
        }
    }

    get status() {
        return StatusType.frozen ;
    }

    static get error() {
        return "Date can not be in the past when freezing status";
    }
}
