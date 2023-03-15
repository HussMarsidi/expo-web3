import * as WebBrowser from "expo-web-browser";
import Constants, { AppOwnership } from "expo-constants";
import * as Linking from "expo-linking";
import Web3Auth, { LOGIN_PROVIDER, OPENLOGIN_NETWORK } from "@web3auth/react-native-sdk";
import RPC from "./etherRpc";
import { WEB3AUTH_CLIENT_ID } from "@env";

const resolvedRedirectUrl =
  Constants.appOwnership == AppOwnership.Expo || Constants.appOwnership == AppOwnership.Guest
    ? Linking.createURL("web3auth", {})
    : Linking.createURL("web3auth", { scheme: scheme });

const clientId = WEB3AUTH_CLIENT_ID;

const web3auth = new Web3Auth(WebBrowser, {
  clientId,
  network: OPENLOGIN_NETWORK.TESTNET, // or other networks
});

export async function loginWeb3() {
  return web3auth.login({
    loginProvider: LOGIN_PROVIDER.GOOGLE,
    redirectUrl: resolvedRedirectUrl,
    // mfaLevel: "none",
    // curve: "secp256k1",
  });
}

const getAccounts = async () => {
  const address = await RPC.getAccounts(key);
  return address;
};
const getBalance = async () => {
  const balance = await RPC.getBalance(key);
  return balance;
};
const sendTransaction = async () => {
  const tx = await RPC.sendTransaction(key);
  return tx;
};
const signMessage = async () => {
  const message = await RPC.signMessage(key);
  return message;
};
