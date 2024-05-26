import { Api, StackContext, use } from "sst/constructs";
import { StorageStack } from "./StorageStack";

export function ApiStack({ stack }: StackContext) {
  const { table } = use(StorageStack);

  // create api
  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        bind: [table],
      },
    },
    routes: {
      "POST /notes": "packages/functions/src/create.main",
    },
  });

  // output api endpoint
  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  // api resource
  return {
    api,
  };
}
