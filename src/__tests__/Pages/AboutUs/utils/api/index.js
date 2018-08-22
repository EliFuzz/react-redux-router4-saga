import mockAxios from "axios";

import * as api from "Pages/AboutUs/utils/api";

describe("AboutUs API", () => {
  it("should fetch a title", async () => {
    const msg = "Mock API";
    mockAxios.get.mockImplementationOnce(() => Promise.resolve(msg));

    const response = await api.fetchTitle();

    expect(response).toEqual(msg);
  });
});
