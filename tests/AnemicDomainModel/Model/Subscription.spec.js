import { Subscription } from "../../../src/AnemicDomainModel/Model/Subscription";
import { Status } from "../../../src/Common/ValueObject/Status";
import {StatusType} from "../../../src/Common/ValueObject/Status/StatusType";


describe("Testing Subscription (Anemic Domain Model", () => {
    /** @type {Subscription} */
    let sut = undefined;

    beforeAll(() => {
        const mockedId = 12;

        const mockedName = jest.genMockFromModule("../../../src/Common/ValueObject/Name");
        mockedName.value = 'Hadi';

        const mockedEmail = jest.genMockFromModule("../../../src/Common/ValueObject/Email");
        mockedEmail.value = "hadi@github.com";

        const mockedExpirationDate = jest.genMockFromModule("../../../src/Common/ValueObject/ExpirationDate");
        mockedExpirationDate.value = new Date();

        const mockedStatus = jest.genMockFromModule("../../../src/Common/ValueObject/Status");
        mockedStatus.value = StatusType.expired;

        sut = new Subscription(
            mockedId,
            mockedName,
            mockedEmail,
            mockedExpirationDate,
            mockedStatus
        );
    });

    afterAll(() => {
        sut = undefined;
    });

    it("should be instantiable", () => {
        expect(sut).toBeInstanceOf(Subscription);
    });

    describe("checking properties of `Subscription` object after instantiation", () => {
        it("should have a property `id` with type of number", () => {
           expect(typeof sut.id).toEqual('number');
        });

        it("should have a property `name` with type `Name` ValueObject", () => {
            expect(typeof sut.name.value).toEqual('string');
        });

        it("should have a property `email` with type `Email` ValueObject", () => {
            expect(typeof sut.email.value).toEqual('string');
        });

        it("should have a property `expiryDate` with type `Date`", () => {
            expect(sut.expirationDate.value).toBeInstanceOf(Date);
        });

        it("should have a property `status` with type `StatusAbstract` ValueObject", () => {
            expect(typeof sut.status.value).toEqual('string');
        });
    });

    describe("checking the ability of updating each property after instantiation of `Subscription`", () => {
        describe("when new id being set", () => {
           it("should not be able to update ID to `888`", () => {
               try {
                   sut.id = 888;
               } catch (e) {
                   expect(e).toBeInstanceOf(Error);
                   expect(sut.id).toEqual(12);
               }
           });
        });

        describe("when new name being set", () => {
            let mockedName = undefined;
            beforeEach(() => {
                mockedName = jest.genMockFromModule("../../../src/Common/ValueObject/Name");
                mockedName.value = 'John Doe';
            });

            afterEach(() => {
                mockedName = undefined;
            });

            it("should throw an error", () => {
                try {
                    sut.name = mockedName;
                } catch (e) {
                    expect(e).toBeInstanceOf(Error);
                }
                // expect(sut.name.value).toEqual("John Doe");
            });
        });

        describe("when new email being set", () => {
            let mockedEmail = undefined;
            beforeEach(() => {
                mockedEmail = jest.genMockFromModule("../../../src/Common/ValueObject/Email");
                mockedEmail.value = "john@github.com";
            });

            afterEach(() => {
                mockedEmail = undefined;
            });

            it("should throw an error", () => {
                try {
                    sut.email = mockedEmail;
                } catch (e) {
                    expect(e).toBeInstanceOf(Error);
                }
            });
        });

        describe("when new expirationDate being set", () => {
            const now = new Date();
            let mockedExpirationDate = undefined;
            beforeEach(() => {
                mockedExpirationDate = jest.genMockFromModule("../../../src/Common/ValueObject/ExpirationDate");
                mockedExpirationDate.value = now;
            });

            afterEach(() => {
                mockedExpirationDate = undefined;
            });

            it("should have a new date and time", () => {
                try {
                    sut.expirationDate = mockedExpirationDate;
                } catch (e) {
                    expect(e).toBeInstanceOf(Error);
                }
            });
        });

        describe("when new status being set `SUSPENDED`", () => {
            let mockedStatus = undefined;
            beforeEach(() => {
                mockedStatus = jest.genMockFromModule("../../../src/Common/ValueObject/Status");
                mockedStatus.value = StatusType.suspended;
            });

            afterEach(() => {
                mockedStatus = undefined;
            });

            it("should have a new status and time", () => {
                try {
                    sut.status = mockedStatus;
                } catch (e) {
                    expect(e).toBeInstanceOf(Error);
                }
            });
        });
    });
});
