import reducers from "Pages/Home/utils/reducers";

describe("counter reducers", () => {
    it("should be initialized", () => {
        expect(reducers).toBeInstanceOf(Function);
    });
});
