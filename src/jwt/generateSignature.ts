import { createHmac } from "node:crypto";

interface IGenerateSignatureOptions {
  secret: string;
  header: string;
  payload: string;
}

export function generateSignature({
  secret,
  header,
  payload,
}: IGenerateSignatureOptions) {
  const hmac = createHmac("sha256", secret);

  return hmac.update(`${header}.${payload}`).digest("base64url");
}
