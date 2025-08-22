export const darajaBase =
  process.env.DARAJA_ENV === "production"
    ? "https://api.safaricom.co.ke"
    : "https://sandbox.safaricom.co.ke";

export function mpesaTimestamp() {
  const now = new Date();
  return (
    now.getFullYear().toString() +
    String(now.getMonth() + 1).padStart(2, "0") +
    String(now.getDate()).padStart(2, "0") +
    String(now.getHours()).padStart(2, "0") +
    String(now.getMinutes()).padStart(2, "0") +
    String(now.getSeconds()).padStart(2, "0")
  );
}


export function buildStkPassword(shortcode: string, passkey: string, timestamp: string) {
  return Buffer.from(shortcode + passkey + timestamp).toString("base64");
}

// Normalize phone number (2547...)
export function normalizeMsisdn(phone: string) {
  let msisdn = phone.trim();

  if (msisdn.startsWith("+")) {
    msisdn = msisdn.substring(1); // remove "+"
  }
  if (msisdn.startsWith("0")) {
    msisdn = "254" + msisdn.substring(1); // convert 07XX → 2547XX
  }

  // At this point, it should always be 2547XXXXXXXX
  return msisdn;
}

// Generate Access Token
export async function getAccessToken() {
  const res = await fetch(`${darajaBase}/oauth/v1/generate?grant_type=client_credentials`, {
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.DARAJA_CONSUMER_KEY + ":" + process.env.DARAJA_CONSUMER_SECRET
        ).toString("base64"),
    },
  });

  const data = await res.json();
  return data.access_token;
}
