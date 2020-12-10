import request from "request";

const PAGE_ACCESS_TOKEN =
  "EAADZAfbtciMUBAKJgZC6XGsG8ZA7FmrfP1VnzOUuiGgHVlOJkPxs5aMQQeiqaD9GYl2uZAlwUxcsjEDOZCc7XcpvZBYFBZBIklOSjnDx2Kc07c3vZBlVrtyn7BL1lzOULacOCGQhTfN9U5FLTKXuUwZAW3jUS7ilbCThnNVaVzbAEZCwZDZD";

let handleSetupProfileAPI = () => {
  return new Promise((resolve, reject) => {
    try {
      let url = `https://graph.facebook.com/v9.0/me/messenger_profile?access_token=${PAGE_ACCESS_TOKEN}`;
      let request_body = {
        get_started: {
          payload: "GET_STARTED",
        },
        persistent_menu: [
          {
            locale: "default",
            composer_input_disabled: false,
            call_to_actions: [
              {
                type: "postback",
                title: "Talk to an agent",
                payload: "TALK_AGENT",
              },
              {
                type: "postback",
                title: "Menu",
                payload: "MENU",
              },
              {
                type: "postback",
                title: "View website",
                url:
                  "https://www.booking.com/searchresults.en-gb.html?aid=311984;label=la-badira-hammamet-8e1AM_gr6HRu154EtQhxQQS392853166950%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-73310516564%3Alp1012760%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YXwxhKG0pUU-mcMVT-JwQpc;sid=958122cbb9539744fc487f961f614ed0;city=-722356;expand_sb=1;highlighted_hotels=1176363;hlrd=no_dates;keep_landing=1;redirected=1;source=hotel&gclid=CjwKCAiAq8f-BRBtEiwAGr3DgbNsan49RhRiSPtjrYTtFriG_yLvdII26_knLS-NVUY3P5G1h_UpShoCQ5cQAvD_BwE&room1=A,A,;",
                webview_height_ratio: "full",
              },
            ],
          },
        ],
        whitelisted_domains: ["https://chatbot-hotel123.herokuapp.com/"],
      };
      request(
        {
          uri: url,
          method: "POST",
          json: request_body,
        },
        (err, res, body) => {
          if (!err) {
            console.log(body);
            resolve("Done!");
          } else {
            reject("Unable to send message:" + err);
          }
        }
      );
    } catch (e) {
      reject(e);
    }
  });
};
let getFacebookUsername = (sender_psid) => {
  return new Promise((resolve, reject) => {
    try {
      // Send the HTTP request to the Messenger Platform
      let url = `https://graph.facebook.com/${sender_psid}?fields=first_name,last_name,profile_pic&access_token=${PAGE_ACCESS_TOKEN}`;
      request(
        {
          uri: url,
          method: "GET",
        },
        (err, res, body) => {
          if (!err) {
            //convert string to json object
            body = JSON.parse(body);
            let username = `${body.first_name} ${body.last_name}`;
            resolve(username);
          } else {
            reject("Unable to send message:" + err);
          }
        }
      );
    } catch (e) {
      reject(e);
    }
  });
};
let sendTypingOn = (sender_psid) => {
  return new Promise((resolve, reject) => {
    try {
      let request_body = {
        recipient: {
          id: sender_psid,
        },
        sender_action: "typing_on",
      };

      let url = `https://graph.facebook.com/v6.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`;
      request(
        {
          uri: url,
          method: "POST",
          json: request_body,
        },
        (err, res, body) => {
          if (!err) {
            console.log(body);
            resolve("done!");
          } else {
            reject("Unable to send message:" + err);
          }
        }
      );
    } catch (e) {
      reject(e);
    }
  });
};
let markMessageRead = (sender_psid) => {
  return new Promise((resolve, reject) => {
    try {
      let request_body = {
        recipient: {
          id: sender_psid,
        },
        sender_action: "mark_seen",
      };

      let url = `https://graph.facebook.com/v6.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`;
      request(
        {
          uri: url,
          method: "POST",
          json: request_body,
        },
        (err, res, body) => {
          if (!err) {
            console.log(body);
            resolve("done!");
          } else {
            reject("Unable to send message:" + err);
          }
        }
      );
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  handleSetupProfileAPI: handleSetupProfileAPI,
  getFacebookUsername: getFacebookUsername,
  sendTypingOn: sendTypingOn,
  markMessageRead: markMessageRead,
};
