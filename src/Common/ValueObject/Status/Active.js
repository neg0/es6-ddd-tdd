import { StatusAbstract } from "./StatusAbstract";
import { StatusType } from "./StatusType";

export class Active extends StatusAbstract {
    constructor(date) {
        super(date);

        if (date <= new Date()) {
            throw new Error(Active.error);
        }
    }

    get status() {
        return StatusType.active;
    }

    static get error() {
        return "Date can not be in the past for status active";
    }
}
