import reducers from "rootReducers";

describe("rootReducers", () => {
    it("should be initialized", () => {
        expect(reducers).toBeInstanceOf(Function);
    });
});
