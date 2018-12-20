import { Subscription } from "../../../src/RichDomainModel/Model/Subscription";
import { Name } from "../../../src/Common/ValueObject/Name";
import { Email } from "../../../src/Common/ValueObject/Email";
import { ExpirationDate } from "../../../src/Common/ValueObject/ExpirationDate";
import { dateGenerator } from "../../DateHelper";
import { Frozen } from "../../../src/Common/ValueObject/Status/Frozen";
import {Active} from "../../../src/Common/ValueObject/Status/Active";

describe("Testing `Subscription`", () => {
    /** @type {Subscription} */
    let sut = undefined;
    /** @type {Date} */
    let mockedDate = undefined;

    beforeAll(() => {
        mockedDate = new Date();
        mockedDate.setDate(mockedDate.getDate() + 7);
        sut = Subscription.create(
            2752,
            "Hadi Ta",
            "hadi@github.com",
            mockedDate
        );
    });

    afterAll(() => {
        sut = undefined;
        mockedDate = undefined;
    });

    it("should be instantiable through static method `create`", () => {
        expect(sut).toBeInstanceOf(Subscription);
    });

    describe("checking type of properties in generated `Subscription`", () => {
        it("should have a property `id` with type of number", () => {
            expect(typeof sut.id).toEqual('number');
        });

        it("should have a property `name` with ObjectValue of `Name`", () => {
            expect(sut.name).toBeInstanceOf(Name);
        });

        it("should have a property `email` with ObjectValue of `Email`", () => {
            expect(sut.email).toBeInstanceOf(Email);
        });

        it("should have a property `expirationDate` with ObjectValue of `ExpirationDate`", () => {
            expect(sut.expirationDate).toBeInstanceOf(ExpirationDate);
        });
    });

    describe("checking `toJSON` method output", () => {
        let json = undefined;
        beforeAll(() => {
            json = sut.toJSON();
        });

        afterAll(() => {
           json =  undefined;
        });

        it("should generate JSON object of Subscription Data Model", () => {
            expect(json).toBeInstanceOf(Object);
        });
    });

    describe("checking `toString` method output", () => {
        let string = undefined;
        beforeAll(() => {
            string = sut.toString();
        });

        afterAll(() => {
            string =  undefined;
        });

        it("should generate string Subscription Data Model from `toJSON`", () => {
            expect(typeof string).toEqual('string');
        });
    });

    describe("checking unfreezing a user with frozen status", () => {
       beforeEach(() => {
           sut.status.freeze(dateGenerator(2));
       });

       it("should be able to freeze", () => {
           expect(sut.status.value).toBeInstanceOf(Frozen);
       });

       it("should be able to unfreeze", () => {
           expect(sut.unfreeze()).toBeInstanceOf(Subscription);
       });
    });

    describe("checking status of user after being unfreeze from Frozen status", () => {
       beforeEach(() => {
           sut.status.freeze(dateGenerator(2));
           sut.unfreeze();
       });

       it("should have status `ACTIVE` after unfreeze", () => {
           expect(sut.status.value).toBeInstanceOf(Active);
       });
    });

    describe("checking unfreeze when user status is not `FROZEN`", () => {
        it("should throw an error", () => {
            try {
                sut.unfreeze();
            } catch (e) {
                expect(e).toBeInstanceOf(Error);
            }
        });
    });

    describe("checking updating the subscription properties", () => {
        beforeEach(() => {
            sut = Subscription.create(
                2752,
                "Hadi Ta",
                "hadi@github.com",
                dateGenerator(14)
            );
        });

        afterEach(() => {
            sut = undefined;
        });

        describe("when name passed into update data", () => {
            beforeEach(() => {
                sut.update({ name: "John Doe" });
            });

            it("should update the name", () => {
                expect(sut.name.value).toEqual("John Doe");
            });
        });

        describe("when email passed into update data", () => {
            beforeEach(() => {
                sut.update({ email: "j.doe@github.com" });
            });

            it("should update the name", () => {
                expect(sut.email.value).toEqual("j.doe@github.com");
            });
        });

        describe("when expiration passed into update data", () => {
            let mockedExpiryDate = dateGenerator(14);
            beforeEach(() => {
                sut.update({ expirationDate: mockedExpiryDate });
            });

            it("should update the expiration", () => {
                expect(sut.expirationDate.value).toEqual(mockedExpiryDate);
            });
        });
    });
});
