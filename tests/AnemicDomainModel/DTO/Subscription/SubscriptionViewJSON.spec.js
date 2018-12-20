import { SubscriptionViewJSON } from "../../../../src/AnemicDomainModel/DTO/Subscription/SubscriptionViewJSON";

describe("Testing SubscriptionView DTO for JSON", () => {
    /**
     * @type {SubscriptionViewJSON}
     */
    let sut = undefined;

    beforeAll(() => {
        sut = new SubscriptionViewJSON();
    });

    afterAll(() => {
        sut = undefined;
    });

    it("should be instantiable", () => {
        expect(sut).toBeInstanceOf(SubscriptionViewJSON);
    });

    it("should return a JSON object view of Subscription Model", () => {

    });
});
