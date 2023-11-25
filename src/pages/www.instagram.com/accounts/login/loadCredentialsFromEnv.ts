import dotenv from "dotenv";
dotenv.config();
export function loadCredentialsFromEnv() {
  const email = process.env.FACEBOOK_EMAIL;
  if (!email) {
    throw new Error(`FACEBOOK_EMAIL not found in .env file`);
  }
  const password = process.env.FACEBOOK_PASSWORD;
  if (!password) {
    throw new Error(`FACEBOOK_PASSWORD not found in .env file`);
  }
  const credentials = {
    email,
    password,
  };

  return credentials;
}
