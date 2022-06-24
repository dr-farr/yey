import { NextPageContext } from "next";

const redirect = (context: NextPageContext, location: string) => {
  return {
    redirect: {
      destination: location,
      permanent: false,
    },
  };
};

export const friendlyRedirect = (
  context: NextPageContext,
  location: string,
  forward: string | null,
  message?: string | null
) => {
  if (forward === null) {
    return redirect(context, location);
  }

  let redirectUrl = `${location}${
    location.includes("?") ? "&" : "?"
  }friendly=${encodeURIComponent(forward)}`;

  if (message) {
    redirectUrl += `${redirectUrl}&friendlyMessage=${encodeURIComponent(
      message
    )}`;
  }

  return redirect(context, redirectUrl);
};

export default redirect;
