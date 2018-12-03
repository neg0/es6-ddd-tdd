import { ValueObjectInterface } from "./ValueObjectInterface";
import { EmailValidator } from "../Validator/EmailValidator";

export class Email extends ValueObjectInterface {
    /**
     * @param {string} emailAddress
     */
    constructor(emailAddress) {
        super();

        const emailValidator = new EmailValidator(emailAddress);
        if (true !== emailValidator.isValid()) {
            throw new Error(emailValidator.error);
        }

        this._value = emailAddress;
    }

    /**
     * @return {string}
     */
    get value() {
        return this._value;
    }
}