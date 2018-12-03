import { Name } from "../../../src/Common/ValueObject/Name";

const MOCK_VALID_NAME = 'Hadi Ta';
const MOCK_INVALID_NAME_LIST = [
    "j0sef",
    "8ball",
    "Curt!s",
    "Curti$",
];
const MOCK_INVALID_LENGTH_NAMES = [
    {
        desciption: "should invalidate due to be less than minimum requirement",
        name: "H",
    },
    {
        desciption: "should invalidate due to be less than minimum requirement",
        name: "A",
    },
    {
        desciption: "should invalidate due to be more than maximum requirement",
        name: "ThisStringIsMoreThanThirtyTwoCharacterLong",
    },
    {
        desciption: "should invalidate due to be more than maximum requirement",
        name: "ThisStringIsAlsoMoreThanThirtyTwoCharacterLong",
    },
];

describe("Testing Name valueObject", () => {
    /** @type Name */
    let sut = undefined;

    beforeAll(() => {
        sut = new Name(MOCK_VALID_NAME);
    });

    afterAll(() => {
        sut = undefined;
    });

    it("should be instantiable", () => {
        expect(sut).toBeInstanceOf(Name);
    });

    it("should return name that passed inside the constructor", () => {
        expect(sut.value).toEqual(MOCK_VALID_NAME);
    });

    describe("checking throwing error with invalid name", () => {
        for (let name in MOCK_INVALID_NAME_LIST) {
            it("should throw an error due invalid name " + MOCK_INVALID_NAME_LIST[name], () => {
                try {
                    sut = new Name(MOCK_INVALID_NAME_LIST[name]);
                } catch (e) {
                    expect(e).toBeInstanceOf(Error);
                    expect(e.message).toEqual("Name is not valid, only alphabet and spaces are allowed");
                }
            });
        }
    });

    describe("checking throwing error with invalid name length", () => {
        it("should invalidate due to be less than minimum requirement", () => {
            try {
                sut = new Name("H");
            } catch (e) {
                expect(e).toBeInstanceOf(Error);
                expect(e.message).toEqual("Does not minimum length requirement");
            }
        });

        it("should invalidate due to be more than maximum requirement", () => {
            try {
                sut = new Name("ThisStringIsMoreThanThirtyTwoCharacterLong");
            } catch (e) {
                expect(e).toBeInstanceOf(Error);
                expect(e.message).toEqual("Exceeds maximum length of name");
            }
        });
    });
});
