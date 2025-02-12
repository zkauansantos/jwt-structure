import { sign } from "./jwt/sign";
import { verify } from "./jwt/verify";

const secret = "secret";

const token = sign({
  exp: Date.now() + 24 * 60 * 60 * 1000,
  data: {
    sub: "@johndoe.com",
  },
  secret,
});

verify({
  token,
  secret,
});
