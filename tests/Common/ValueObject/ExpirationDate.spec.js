import { ExpirationDate } from "../../../src/Common/ValueObject/ExpirationDate";

/**
 * @param {number} days
 * @param {boolean} future
 * @return {Date}
 */
const dateGenerator = function(days, future = true) {
    const now = new Date();
    if (false === future) {
        now.setDate(now.getDate() - days);
    }
    now.setDate(now.getDate() + days);

    return now;
};

const INVALID_DATES = [
    dateGenerator(1, false),
    dateGenerator(3, false),
    dateGenerator(350, false)
];

describe("Testing ExpirationDate ValueObject", () => {
    /** @type ExpirationDate */
    let sut = undefined;
    /** @type Date */
    let mockDate = undefined;

    beforeEach(() => {
        mockDate = dateGenerator(2);
        sut = new ExpirationDate(mockDate);
    });

    afterEach(() => {
        mockDate = undefined;
        sut = undefined;
    });

    it("should be instantiable", () => {
        expect(sut).toBeInstanceOf(ExpirationDate);
    });

    it("should return the expired date passed inside the constructor", () => {
        expect(sut.value).toEqual(mockDate);
    });

    describe("checking when expiration date in the past is passed inside the constructor", () => {
        for (let i in INVALID_DATES) {
            it('should invalidate the date parameter and throw an error', () => {
                try {
                    sut = new ExpirationDate(INVALID_DATES[i]);
                } catch (e) {
                    expect(e).toBeInstanceOf(Error);
                }
            });
        }
    });
});
