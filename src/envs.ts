
interface ENVS{
  [key: string]: string | undefined;
}

export const ENV_VARS: ENVS = {
  TEST: process.env.TEST,
  ANOTHER: process.env.ANOTHER,
}

export function validateENVS() {
  //  Check if any ENV_VAR is missing
  let anyKeyMissing = false;
  Object.keys(ENV_VARS).forEach(key => {
    if (!ENV_VARS[key] || ENV_VARS[key] === undefined) {
      console.error(`environment variable ${key} is not in your .env file`);
      anyKeyMissing = true;
    }
  });
  if (anyKeyMissing) {
    throw "MISSING ENVs, CAN'T START THE SERVER";
  }
}