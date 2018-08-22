import configureStore from "configureStore";

describe("redux store", () => {
    it("should be initialized", () => {
        expect(configureStore()).toBeInstanceOf(Object);
    });
});
