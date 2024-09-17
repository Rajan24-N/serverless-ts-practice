import { response } from "@lib/api-gateway";
import { APIGatewayEvent, APIGatewayProxyHandler, APIGatewayProxyResult } from "aws-lambda";

export const handler: APIGatewayProxyHandler = async (
  event: APIGatewayEvent
): Promise<APIGatewayProxyResult> => {
  return response(200, {
    message:
       
      "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
    input: event,
  });
};
