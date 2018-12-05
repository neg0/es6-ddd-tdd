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

        xdescribe("when new name being set", () => {
            beforeEach(() => {
                const mockedName = jest.genMockFromModule("../../../src/Common/ValueObject/Name");
                mockedName.value = 'John Doe';

                sut.name = mockedName;
            });

            it("should have a new Name `John Doe`", () => {
                expect(sut.name.value).toEqual("John Doe");
            });
        });

        xdescribe("when new email being set", () => {
            beforeEach(() => {
                const mockedEmail = jest.genMockFromModule("../../../src/Common/ValueObject/Email");
                mockedEmail.value = "john@github.com";

                sut.email = mockedEmail;
            });

            it("should have a new Name `John Doe`", () => {
                expect(sut.email.value).toEqual("hadi@github.com");
            });
        });

        xdescribe("when new expirationDate being set", () => {
            const now = new Date();
            beforeEach(() => {
                const mockedExpirationDate = jest.genMockFromModule("../../../src/Common/ValueObject/ExpirationDate");
                mockedExpirationDate.value = now;

                sut.expirationDate = mockedExpirationDate;
            });

            it("should have a new date and time", () => {
                expect(sut.expirationDate.value).toEqual(now);
            });
        });

        xdescribe("when new status being set `PENDING`", () => {
            beforeEach(() => {
                const mockedStatus = jest.genMockFromModule("../../../src/Common/ValueObject/StatusAbstract");
                mockedStatus.value = Status.STATUSES.pending;

                sut.status = mockedStatus;
            });

            it("should have a new status and time", () => {
                expect(sut.status.value).toEqual(Status.STATUSES.expired);
            });
        });
    });
});
