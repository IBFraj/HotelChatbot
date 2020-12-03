import request from "request";
import homepageService from "./homepageService";

const PAGE_ACCESS_TOKEN =
  "EAADZAfbtciMUBAKJgZC6XGsG8ZA7FmrfP1VnzOUuiGgHVlOJkPxs5aMQQeiqaD9GYl2uZAlwUxcsjEDOZCc7XcpvZBYFBZBIklOSjnDx2Kc07c3vZBlVrtyn7BL1lzOULacOCGQhTfN9U5FLTKXuUwZAW3jUS7ilbCThnNVaVzbAEZCwZDZD";

let sendMessageWelcomeNewUser = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let username = await homepageService.getFacebookUsername(sender_psid);

      let response1 = {
        text: `Hi ${username}! Welcome to MoodyMoon Hotel , where you will find what you need.`,
      };

      let response2 = {
        attachment: {
          type: "image",
          payload: {
            url: "https://bit.ly/imageWelcome",
          },
        },
      };

      let response3 = {
        text:
          "At any time, use the menu below to navigate through the features.",
      };

      let response4 = {
        text: "What can I do to help you today?",
        quick_replies: [
          {
            content_type: "text",
            title: "Categories",
            payload: "CATEGORIES",
          },
          {
            content_type: "text",
            title: "Lookup Order",
            payload: "LOOKUP_ORDER",
          },
          {
            content_type: "text",
            title: "Talk to an agent",
            payload: "TALK_AGENT",
          },
        ],
      };

      await sendMessage(sender_psid, response1);
      await sendMessage(sender_psid, response2);
      await sendMessage(sender_psid, response3);
      await sendMessage(sender_psid, response4);
      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};

let sendMessage = (sender_psid, response) => {
  return new Promise(async (resolve, reject) => {
    try {
      await homepageService.markMessageRead(sender_psid);
      await homepageService.sendTypingOn(sender_psid);

      let request_body = {
        recipient: {
          id: sender_psid,
        },
        message: response,
      };

      request(
        {
          uri: "https://graph.facebook.com/v6.0/me/messages",
          qs: { access_token: PAGE_ACCESS_TOKEN },
          method: "POST",
          json: request_body,
        },
        (err, res, body) => {
          if (!err) {
            resolve("message sent!");
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
  sendMessage: sendMessage,
  sendMessageWelcomeNewUser: sendMessageWelcomeNewUser,
};
