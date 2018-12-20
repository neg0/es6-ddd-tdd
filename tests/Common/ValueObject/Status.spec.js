import { Status } from "../../../src/Common/Model/Status";
import { StatusType } from "../../../src/Common/ValueObject/Status/StatusType";
import { Active } from "../../../src/Common/ValueObject/Status/Active";
import { Expired } from "../../../src/Common/ValueObject/Status/Expired";
import { Suspended } from "../../../src/Common/ValueObject/Status/Suspended";
import { Frozen } from "../../../src/Common/ValueObject/Status/Frozen";
import { dateGenerator } from "../../DateHelper";

describe("Testing `Status` ValueObject", () => {
    /** @type {Status} */
    let sut = undefined;

    /** @type Active */
    let MockedActiveStatus = undefined;
    /** @type Expired */
    let MockedExpiredStatus = undefined;
    /** @type {Suspended} */
    let MockedSuspendedStatus = undefined;
    /** @type {Frozen} */
    let MockedFrozenStatus = undefined;

    describe("checking creating `Active` status", () => {
        beforeEach(() => {
            MockedActiveStatus = jest.fn(date => {
                return {
                    date: date,
                    status: StatusType.active
                };
            });

            sut = new Status(new MockedActiveStatus(dateGenerator(2)));
        });

        afterEach(() => {
            MockedActiveStatus = undefined;
            sut = undefined;
        });

        it("should be instantiable", () => {
            expect(sut).toBeInstanceOf(Status);
        });

        it("should return status `Active` when expirationDate is in the future", () => {
            expect(sut.value.status).toEqual(StatusType.active);
        });

        describe("checking error detection upon initialisation", () => {
            it("should throw an error when creating `Active` status with date is in past", () => {
                try {
                    sut = new Status(new MockedActiveStatus(dateGenerator(2, false)));
                } catch (e) {
                    expect(e).toBeInstanceOf(Error);
                    expect(e.message).toEqual(Active.error);
                }
            });
        });
    });

    describe("checking creating `Expired` status", () => {
        beforeEach(() => {
            MockedExpiredStatus = jest.fn(date => {
                return {
                    date: date,
                    status: StatusType.expired
                }
            });

            sut = new Status(new MockedExpiredStatus(dateGenerator(2, false)));
        });

        afterEach(() => {
            MockedExpiredStatus = undefined;
            sut = undefined;
        });

        it("should be instantiable", () => {
            expect(sut).toBeInstanceOf(Status);
        });

        it("should have status value `EXPIRED`", () => {
            expect(sut.value.status).toEqual(StatusType.expired);
        });

        describe("checking error detection upon initialisation", () => {
            it("should throw an error when creating `Expired` status in the future", () => {
                try {
                    sut = new Status(new MockedExpiredStatus(dateGenerator(2)));
                } catch (e) {
                    expect(e).toBeInstanceOf(Error);
                    expect(e.message).toEqual(Expired.error);
                }
            });
        });
    });

    describe("checking creating `Suspended` status", () => {
        beforeEach(() => {
            MockedSuspendedStatus = jest.fn(date => {
                return {
                    date: date,
                    status: StatusType.suspended
                }
            });

            sut = new Status(new MockedSuspendedStatus(dateGenerator(14)));
        });

        afterEach(() => {
            MockedSuspendedStatus = undefined;
            sut = undefined;
        });

        it("should be instantiable", () => {
            expect(sut).toBeInstanceOf(Status);
        });

        it("should have status value `SUSPENDED`", () => {
            expect(sut.value.status).toEqual(StatusType.suspended);
        });

        describe("checking error detection upon initialisation", () => {
            it("should throw an error when creating `Suspended` status with a date in the past", () => {
                try {
                    sut = new Status(new MockedSuspendedStatus(dateGenerator(2, false)));
                } catch (e) {
                    expect(e).toBeInstanceOf(Error);
                    expect(e.message).toEqual(Suspended.error);
                }
            });
        });
    });

    describe("checking creating `Frozen` status", () => {
        beforeEach(() => {
            MockedFrozenStatus = jest.fn(date => {
                return {
                    date: date,
                    status: StatusType.frozen
                }
            });

            sut = new Status(new MockedFrozenStatus(dateGenerator(14)));
        });

        afterEach(() => {
            MockedFrozenStatus = undefined;
            sut = undefined;
        });

        it("should be instantiable", () => {
            expect(sut).toBeInstanceOf(Status);
        });

        it("should have status value `FROZEN`", () => {
            expect(sut.value.status).toEqual(StatusType.frozen);
        });

        describe("checking error detection upon initialisation", () => {
            it("should throw an error when creating `Frozen` status with date in the past", () => {
                try {
                    sut = new Status(new MockedFrozenStatus(dateGenerator(2, false)));
                } catch (e) {
                    expect(e).toBeInstanceOf(Error);
                    expect(e.message).toEqual(Frozen.error);
                }
            });
        });

        describe("checking `SUSPENDED` status creation", () => {
           beforeEach(() => {
               sut = Status.create(dateGenerator(14), StatusType.suspended);
           });

           afterEach(() => {
               sut = undefined;
           });

           it("should have status `SUSPENDED` with expiry two weeks in the future", () => {
               expect(sut.value).toBeInstanceOf(Suspended);
           });
        });

        describe("checking `FROZEN` status creation", () => {
            beforeEach(() => {
                sut = Status.create(dateGenerator(14), StatusType.frozen);
            });

            afterEach(() => {
                sut = undefined;
            });

            it("should have status `FROZEN` with expiry two weeks in the future", () => {
                expect(sut.value).toBeInstanceOf(Frozen);
            });
        });
    });

    describe("checking variation of expiry date", () => {
        beforeEach(() => {
            sut = Status.create(dateGenerator(24, false));
        });

        afterEach(() => {
            sut = undefined;
        });

        it("should have status `EXPIRED` with expiry two weeks in the future", () => {
            expect(sut.value).toBeInstanceOf(Expired);
        });
    });
});
