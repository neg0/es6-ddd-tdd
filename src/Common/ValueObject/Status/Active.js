import { StatusAbstract } from "./StatusAbstract";
import { StatusType } from "./StatusType";

export class Active extends StatusAbstract {
    constructor(date) {
        super(date);

        if (date < new Date()) {
            throw new Error("Date can not be in the past for status active");
        }
    }

    get status() {
        return StatusType.active;
    }
}
