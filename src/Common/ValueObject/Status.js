import { ValueObjectInterface } from "./ValueObjectInterface";
import { Expired } from "./Status/Expired";
import { StatusAbstract } from "./Status/StatusAbstract";
import {Active} from "./Status/Active";
import {Suspended} from "./Status/Suspended";
import {Frozen} from "./Status/Frozen";
import {StatusType} from "./Status/StatusType";

export class Status extends ValueObjectInterface {
    static get STATUSES() {
        return {
            active: 'ACTIVE',
            expired: 'EXPIRED',
            suspended: 'SUSPENDED',
        }
    };

    /**
     * @param {StatusAbstract} status
     */
    constructor(status) {
        super();
        this._value = status;
    }

    /**
     * @param {string|undefined} type
     * @param {Date} date
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
     * @return {string}
     */
    get value() {
        return this._value.status;
    }

    /**
     * @param {*} value
     * @throws {Error}
     */
    set value(value) {
        throw new Error("Violation of rule to be able to set the value in ValueObject(s)");
    }

    suspend(date) {
        this._value = new Suspended(date);
    }

    freeze(date) {
        this._value = new Frozen(date);
    }
}
