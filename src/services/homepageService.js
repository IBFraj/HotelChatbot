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
                payload: "CARE_HELP",
              },
              {
                type: "postback",
                title: "Outfit suggestions",
                payload: "CURATION",
              },
              {
                type: "web_url",
                title: "Shop now",
                url: "https://www.originalcoastclothing.com/",
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
