import { StatusAbstract } from "./StatusAbstract";
import { StatusType } from "./StatusType";

export class Frozen extends StatusAbstract {
    constructor(date) {
        super(date);
    }

    get status() {
        return StatusType.frozen ;
    }
}
