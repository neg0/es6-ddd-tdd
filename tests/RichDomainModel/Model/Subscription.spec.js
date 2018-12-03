import { Subscription } from "../../../src/RichDomainModel/Model/Subscription";
import { Name } from "../../../src/Common/ValueObject/Name";
import { Email } from "../../../src/Common/ValueObject/Email";
import { ExpirationDate } from "../../../src/Common/ValueObject/ExpirationDate";

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
});
