import { Bucket, StackContext, Table } from "sst/constructs";

export function StorageStack({ stack }: StackContext) {
  // dynamodb table
  const table = new Table(stack, "notes", {
    fields: {
      userId: "string",
      noteId: "string",
    },
    primaryIndex: {
      partitionKey: "userId",
      sortKey: "noteId",
    },
  });

  // s3 bucket
  const bucket = new Bucket(stack, "Uploads");

  return {
    table,
    bucket,
  };
}
