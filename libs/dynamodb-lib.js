import AWS from "aws-sdk";

const client = new AWS.DynamoDB.DocumentClient();

const createMethods = (methods) =>
  methods.reduce((acc, method) => {
    acc[method] = (params) => client[method](params).promise();
    return acc;
  }, {});

export default createMethods(["get", "put", "query", "update", "delete"]);
