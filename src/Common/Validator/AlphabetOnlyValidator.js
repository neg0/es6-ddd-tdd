import { ValidatorAbstract } from "./ValidatorAbstract";

export class AlphabetOnlyValidator extends ValidatorAbstract {
    /**
     * @param {string} name
     */
    constructor(name) {
        super();
        super.error = "Name is not valid, only alphabet and spaces are allowed";

        this.name = name;
    }

    /**
     * @inheritDoc
     */
    isValid() {
        return new RegExp(AlphabetOnlyValidator.regex).test(this.name);
    }

    /**
     * @return {string}
     */
    static get regex() {
        return "^[a-zA-Z-,]+(\\s{0,1}[a-zA-Z-, ])*$";
    }
}
