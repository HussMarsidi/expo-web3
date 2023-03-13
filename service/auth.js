import * as WebBrowser from "expo-web-browser";
import Web3Auth, { LOGIN_PROVIDER, OPENLOGIN_NETWORK } from "@web3auth/react-native-sdk";

// const resolvedRedirectUrl =
//   Constants.appOwnership == AppOwnership.Expo || Constants.appOwnership == AppOwnership.Guest
//     ? Linking.createURL("web3auth", {})
//     : Linking.createURL("web3auth", { scheme: scheme });

const clientId = process.env.WEB3AUTH_CLIENT_ID;

const web3auth = new Web3Auth(WebBrowser, {
  clientId,
  network: OPENLOGIN_NETWORK.TESTNET, // or other networks
});

// export const loginWeb3 = await web3auth.login({
//   loginProvider: LoginProvider.GOOGLE,
//   redirectUrl: resolvedRedirectUrl,
// });

export async function loginWeb3() {
  return web3auth.login({
    loginProvider: LOGIN_PROVIDER.GOOGLE,
    redirectUrl: resolvedRedirectUrl,
  });
}
