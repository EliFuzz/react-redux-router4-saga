import configureStore from "../store/configureStore";

describe("redux store", () => {
    it("should be initialized", () => {
        expect(configureStore()).toBeInstanceOf(Object);
    });
});
