import { generateSignature } from "./generateSignature";

interface ISignOptions {
  data: Record<string, any>;
  exp: number;
  secret: string;
}

export function sign({ data, exp, secret }: ISignOptions) {
  const header = {
    alg: "HS256",
    typ: "JWT",
  };

  const payload = {
    ...data,
    iat: Date.now(),
    exp,
  };

  const base64encodedHeader = Buffer.from(JSON.stringify(header)).toString(
    "base64url"
  );
  const base64encodedPayload = Buffer.from(JSON.stringify(payload)).toString(
    "base64url"
  );

  const signature = generateSignature({
    header: base64encodedHeader,
    payload: base64encodedPayload,
    secret,
  });

  return `${base64encodedHeader}.${base64encodedPayload}.${signature}`;
}
