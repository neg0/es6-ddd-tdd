import { StatusAbstract } from "./StatusAbstract";
import { StatusType } from "./StatusType";

export class Suspended extends StatusAbstract {
    constructor(date) {
        super(date);
    }

    get status() {
        return StatusType.suspended;
    }
}
