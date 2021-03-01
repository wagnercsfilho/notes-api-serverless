import AWS from "aws-sdk";
import createMethods from "./dynamodb-lib";

jest.mock("aws-sdk");

test("should create dynamodb methods", () => {
  expect(createMethods).toEqual({
    get: expect.any(Function),
    put: expect.any(Function),
    query: expect.any(Function),
    update: expect.any(Function),
    delete: expect.any(Function),
  });
});

test("should call get method in dynamodb client", async () => {
  const params = { param: "ab" };
  
  AWS.DynamoDB.DocumentClient.prototype.get.mockImplementation(() => {
    return {
      promise: () => Promise.resolve(params),
    };
  });

  const result = await createMethods.get(params);

  expect(result).toEqual(params);
});
