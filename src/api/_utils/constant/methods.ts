const methods = ((): {
  GET: string;
  POST: string;
  PUT: string;
  DELETE: string;
} => ({
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
}))();

export default methods;
