import { ValueObjectInterface } from "../ValueObject/ValueObjectInterface";
import { Expired } from "../ValueObject/Status/Expired";
import { StatusAbstract } from "../ValueObject/Status/StatusAbstract";
import { Active } from "../ValueObject/Status/Active";
import { Suspended } from "../ValueObject/Status/Suspended";
import { Frozen } from "../ValueObject/Status/Frozen";
import { StatusType } from "../ValueObject/Status/StatusType";

export class Status extends ValueObjectInterface {
    /**
     * This to be considered as private method (Only instantiable via static `create`)
     * @param {StatusAbstract} status
     */
    constructor(status) {
        super();
        this._value = status;
    }

    /**
     * @param {string|undefined} type
     * @param {Date} date
     * @return {Status}
     */
    static create(date, type = undefined) {
        switch (type) {
            case StatusType.suspended:
                return new Status(new Suspended(date));
            case StatusType.frozen:
                return new Status(new Frozen(date));
            default:
                if (date < new Date()) {
                    return new Status(new Expired(date));
                }
                return new Status(new Active(date));
        }
    }

    /**
     * @return {ValueObjectInterface}
     */
    get value() {
        return this._value;
    }

    /**
     * @param {*} value
     * @throws {Error}
     */
    set value(value) {
        throw new Error("Violation of rule to be able to set the value in ValueObject(s)");
    }

    /**
     * @param {Date} date
     */
    suspend(date) {
        this._value = new Suspended(date);

        return this;
    }

    /**
     * @param {Date} date
     */
    unsuspend(date) {
        if (date < new Date()) {
            throw new Error("Can not unsuspend with date in the past");
        }

        this._value = new Active(date);

        return this;
    }

    /**
     * @param {Date} date
     */
    freeze(date) {
        this._value = new Frozen(date);

        return this;
    }

    /**
     * @throws {Error}
     */
    unfreeze() {
        throw new Error("You may not unfreeze from Status object (Only allowed from Subscription Object)");
    }
}
