import request from "request";

const PAGE_ACCESS_TOKEN =
  "EAADZAfbtciMUBAKJgZC6XGsG8ZA7FmrfP1VnzOUuiGgHVlOJkPxs5aMQQeiqaD9GYl2uZAlwUxcsjEDOZCc7XcpvZBYFBZBIklOSjnDx2Kc07c3vZBlVrtyn7BL1lzOULacOCGQhTfN9U5FLTKXuUwZAW3jUS7ilbCThnNVaVzbAEZCwZDZD";

let handleSetupProfileAPI = () => {
  return new Promise((resolve, reject) => {
    try {
      let url = `https://graph.facebook.com/v7.0/me/messenger_profile?access_token=${PAGE_ACCESS_TOKEN}`;
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
                title: "Restart this conversation",
                payload: "RESTART_CONVERSATION",
              },
              {
                type: "nested",
                title: "More info",
                call_to_actions: [
                  {
                    type: "web_url",
                    title: "View Facebook Fan Page",
                    url: "https://www.facebook.com/haryphamdev",
                    webview_height_ratio: "full",
                  },
                  {
                    type: "web_url",
                    title: "View Youtube channel",
                    url: "https://bit.ly/subscribe-haryphamdev",
                    webview_height_ratio: "full",
                  },
                ],
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
module.exports = {
  handleSetupProfileAPI: handleSetupProfileAPI,
};
