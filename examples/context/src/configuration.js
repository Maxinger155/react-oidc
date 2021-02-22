
const width = 600;
const height = 600;
const path_port = window.location.protocol + "//" + window.location.hostname + (window.location.port !== "" ? ":" + window.location.port : "");
const path = window.location.protocol + "//" + window.location.hostname;

const configuration = {
  popup_width: width,
  popup_height: height,
  client_id: "portal",
  redirect_uri: path_port + "/authentication/callback",
  popup_redirect_uri: path_port + "/authentication/callback",
  popupWindowFeatures:
    "location=no,toolbar=no,width=" + width + ",height=" + height + "",
  response_type: "code",
  post_logout_redirect_uri: path_port + "/",
  scope: "profile email openid",
  //authority: "https://support.de-gmbh.com:44390/auth/realms/sdn_portal/.well-known/openid-configuration",
  authority:
    "https://dev0010-204/auth/realms/sdn_portal/.well-known/openid-configuration",
  silent_redirect_uri: path_port + "/authentication/silent_callback",
  automaticSilentRenew: true,
  loadUserInfo: true,
};

export default configuration;
