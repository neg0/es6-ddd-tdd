import { Email } from "../../../src/Common/ValueObject/Email";

const MOCK_VALID_EMAIL = 'name@mailprovider.com';
const MOCK_INVALID_EMAILS = {
    "name.mailprovider": "should Invalidate",
    "namemailprovider.com": "should Invalidate",
    "namemail@provider": "should Invalidate",
    "namemail.provider.com": "should Invalidate",
};

describe("Testing Email ValueObject", () => {
    /**
     * @type {Email}
     */
    let sut = undefined;

    beforeEach(() => {
        sut = new Email(MOCK_VALID_EMAIL);
    });

    it("should validate email as valid and return the passed in email address", () => {
        expect(sut.value).toEqual(MOCK_VALID_EMAIL);
    });

    describe("when invalid email address passed", () => {
        for (let email in MOCK_INVALID_EMAILS) {
            it(MOCK_INVALID_EMAILS[email] + " when given email address is: `" + email + "`", () => {
                try {
                    sut = new Email(email);
                } catch (e) {
                    expect(e).toBeInstanceOf(Error);
                    expect(e.message).toEqual("Email address is not valid");
                }
            });
        }
    });
});
