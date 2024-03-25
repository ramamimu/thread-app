const headers = ((): {
  contentTypeJSON: { "Content-Type": string };
  authorizationBearer: (token: string | null) => { Authorization: string };
} => ({
  contentTypeJSON: {
    "Content-Type": "application/json",
  },
  authorizationBearer: (token) => ({ Authorization: `Bearer ${token}` }),
}))();

export default headers;
