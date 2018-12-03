import { Status } from "../../../src/Common/ValueObject/Status";

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

describe("testing status value given", () => {
    /**
     * @type {Status}
     */
    let sut = new Status(new Date());

    describe('expiration date is in the future', () => {
        beforeEach(() => {
            sut = new Status(dateGenerator(5));
        });

        it('should return status `Active` when expirationDate is in the future', () => {
            expect(sut.value).toEqual(Status.STATUSES.active);
        });
    });

    describe('expiration date is in the future', () => {
        beforeEach(() => {
            sut = new Status(dateGenerator(5, false));
        });

        it('should return status `Inactive` when expirationDate is in the past', () => {
            expect(sut.value).toEqual(Status.STATUSES.expired);
        });
    });

    describe('check if status can be changed to `suspended`', () => {
        beforeEach(() => {
            sut = new Status(dateGenerator(5));
            sut.suspend();
        });

        it('should change the status to suspended', () => {
            expect(sut.value).toEqual(Status.STATUSES.suspended);
        });
    });
});
