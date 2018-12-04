import { SubscriptionCreation } from "../../../../src/AnemicDomainModel/DTO/Subscription/SubscriptionCreation";
import { Subscription } from "../../../../src/AnemicDomainModel/Model/Subscription";
import { dateGenerator } from "../../../DateHelper";

describe("Testing `SubscriptionCreation` service for Anemic `Subscription`", () => {
    /** @type {SubscriptionCreation} */
    let sut = undefined;

    beforeAll(() => {
        sut = new SubscriptionCreation(
            1,
            "Hadi Ta",
            "hadi@github.com",
            new Date(dateGenerator(7))
        );
    });

    afterAll(() => {
        sut = undefined;
    });

    it("should be instantiable", () => {
        expect(sut).toBeInstanceOf(SubscriptionCreation);
    });

    it("should create a Subscription from data passed inside the constructor", () => {
        expect(sut.create()).toBeInstanceOf(Subscription);
    });
});
