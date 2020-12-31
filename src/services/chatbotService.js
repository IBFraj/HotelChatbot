import request from "request";
import homepageService from "./homepageService";
import templateMessage from "./templateMessage";

const PAGE_ACCESS_TOKEN =
  "EAADZAfbtciMUBAKJgZC6XGsG8ZA7FmrfP1VnzOUuiGgHVlOJkPxs5aMQQeiqaD9GYl2uZAlwUxcsjEDOZCc7XcpvZBYFBZBIklOSjnDx2Kc07c3vZBlVrtyn7BL1lzOULacOCGQhTfN9U5FLTKXuUwZAW3jUS7ilbCThnNVaVzbAEZCwZDZD";

let sendMessageWelcomeNewUser = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let username = await homepageService.getFacebookUsername(sender_psid);

      let response1 = {
        text: `Hi ${username}! Welcome to *MoodyMoon Hotel* `,
      };

      let response2 = {
        attachment: {
          type: "image",
          payload: {
            url: "https://bit.ly/imageWelcome",
          },
        },
      };

      let response4 = {
        text: "How may we serve you today " + "\nPlease select an option below",
        quick_replies: [
          {
            content_type: "text",
            title: "Find and Book",
            payload: "FIND_AND_BOOK",
          },
          {
            content_type: "text",
            title: "Special offers",
            payload: "SPECIAL_OFFERS",
          },
          {
            content_type: "text",
            title: "Rooms&Suites",
            payload: "ROOMS_AND_SUITS",
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
let sendRooms_Suites = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response1 = {
        text: "We have the following room types available ",
      };

      let response2 = templateMessage.sendRooms_SuitesTemplate();
      let response3 = {
        text: "Need more space? Check out our suites ",
        quick_replies: [
          {
            content_type: "text",
            title: "Suites",
            payload: "SUITES",
          },
        ],
      };
      await sendMessage(sender_psid, response1);
      await sendMessage(sender_psid, response2);
      await sendMessage(sender_psid, response3);
      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};
let backToRooms_Suites = (sender_psid) => {
  sendRooms_Suites(sender_psid);
};
let showSDR = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response1 = {
        text: "Room area - 25 métre carré  ",
      };
      let response2 = {
        text: "Ideal for : 2 adults  ",
      };
      let response3 = {
        text:
          "*Please note: no extra bed/children's cots/cribs possible in this room type.",
      };

      let response4 = templateMessage.sendSDRTemplate();
      let response5 = {
        text:
          "Room Facilities : Minibar, Flat-screen TV, Air conditioning, Hairdryer, Iron, iPad, Coffee machine, Free in-room Wi-Fi ",
      };
      let response6 = {
        quick_replies: [
          {
            content_type: "text",
            title: "CHeck availability",
            payload: "CHECK_AVAILABILITY",
          },
        ],
      };
      await sendMessage(sender_psid, response1);
      await sendMessage(sender_psid, response2);
      await sendMessage(sender_psid, response3);
      await sendMessage(sender_psid, response4);
      await sendMessage(sender_psid, response5);
      await sendMessage(sender_psid, response6);
      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};
let showSTR = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response1 = {
        text: "Room area - 20 métre carré  ",
      };
      let response2 = { text: "Ideal for : 2 adults  " };
      let response3 = {
        text:
          "*Please note: no extra bed/children's cots/cribs possible in this room type.",
      };

      let response4 = templateMessage.sendSTRTemplate();
      let response5 = {
        text:
          "Room Facilities : Minibar, Flat-screen TV, Air conditioning, Hairdryer, Iron, iPad, Coffee machine, Free in-room Wi-Fi ",
      };
      let response6 = {
        quick_replies: [
          {
            content_type: "text",
            title: "CHeck availability",
            payload: "CHECK_AVAILABILITY",
          },
        ],
      };
      await sendMessage(sender_psid, response1);
      await sendMessage(sender_psid, response2);
      await sendMessage(sender_psid, response3);
      await sendMessage(sender_psid, response4);
      await sendMessage(sender_psid, response5);
      await sendMessage(sender_psid, response6);
      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};
let showDTR = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response1 = {
        text:
          "Room area - 30 métre carré  Ideal for : 2 adults  *Please note: one older child or adult is charged per person night in an extra bed.",
      };
      let response2 = templateMessage.sendDTRTemplate();
      let response3 = {
        text:
          "Room Facilities : Minibar, Flat-screen TV, Air conditioning, Hairdryer, Iron, iPad, Coffee machine, Free in-room Wi-Fi , Sitting area, Satellite channels",
      };
      let response4 = {
        quick_replies: [
          {
            content_type: "text",
            title: "CHeck availability",
            payload: "CHECK_AVAILABILITY",
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
let showEKR = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response1 = {
        text: "Room area - 32 métre carré  ",
        text: "Ideal for : 2 adults and 1 child ",
        text:
          "This Family room features a mini-bar, electric Kettle and air conditioning.",
      };
      let response2 = templateMessage.sendFRTemplate();
      let response3 = {
        text: "Room Facilities : ",
        text:
          "Minibar, Flat-screen TV, Air conditioning, Hairdryer, Iron, iPad, Coffee machine, Free in-room Wi-Fi ",
      };
      let response4 = {
        quick_replies: [
          {
            content_type: "text",
            title: "CHeck availability",
            payload: "CHECK_AVAILABILITY",
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
let showFR = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response1 = {
        text: "Room area - 37 métre carré  ",
        text: "Ideal for : 2 adults and 2 children ",
        text:
          "Up to two children from 0 to 12 years stay free of charge for extra beds",
      };
      let response2 = templateMessage.sendFRTemplate();
      let response3 = {
        text: "Room Facilities : ",
        text:
          "Minibar, Flat-screen TV, Air conditioning, Hairdryer, Iron, iPad, Coffee machine, Free in-room Wi-Fi ,Sitting area, Satellite channels, Sofa bed, Executive Lounge Access Laptop Safe",
      };
      let response4 = {
        quick_replies: [
          {
            content_type: "text",
            title: "CHeck availability",
            payload: "CHECK_AVAILABILITY",
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
let backToMainMenu = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = templateMessage.backToMainMenuTemplate();
      await sendMessage(sender_psid, response);
      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};
let sendFind_Book = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let username = await homepageService.getFacebookUsername(sender_psid);

      let response1 = {
        text: `Sounds good ${username}! `,
      };

      let response2 = templateMessage.sendFind_BookTemplate();

      await sendMessage(sender_psid, response1);
      await sendMessage(sender_psid, response2);

      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};
let handleReservation = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let username = await getFacebookUsername(sender_psid);
      let response = `Hi ${username},when would you like to check-in ?`;
      let response4 = {
        quick_replies: [
          {
            content_type: "text",
            title: "Enter a date",
            payload: "ENTER_A_DATE",
          },
        ],
      };
      await sendMessage(sender_psid, response);
      await sendMessage(sender_psid, response4);
      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};
let sendEnter_Date = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response1 = {
        text:
          "Check-in dates must be in the future!Please enter a date in day/month/year(e.g 15 jun or 15/06/2020).",
      };

      await sendMessage(sender_psid, response1);

      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};

let sendSpecial_offers = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response2 = templateMessage.sendSpecial_offersTemplate();
      let response3 = {
        text:
          "A variety of exclusive offers and promotions are available exclusively on Messenger",
        quick_replies: [
          {
            content_type: "text",
            title: "25% off your stay",
            payload: "STAY",
          },
          {
            content_type: "text",
            title: "20% off your stuite",
            payload: "STAySuite",
          },
        ],
      };

      await sendMessage(sender_psid, response2);
      await sendMessage(sender_psid, response3);
      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};
let sendStay_offre = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response1 = {
        text: "*Up to 25% Off plus 25$ Cocktail Credit* ",
      };
      let response2 = {
        text:
          "*Up to 25% Off your stay " +
          "/n25$ Beverage Credit at the Cocktail Collective*: " +
          "/n*The Dorsey" +
          "/n*Rosina" +
          "/n*Electra" +
          "/nNo nightly minimum stay " +
          "/n" +
          "/nMust book before 30/01/2021",
      };

      await sendMessage(sender_psid, response1);
      await sendMessage(sender_psid, response2);

      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};
let requestTalkToAgent = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      //send a text message
      let response1 = {
        text: "Ok. Someone real will be with you in a few minutes ^^",
      };

      await sendMessage(sender_psid, response1);

      //change this conversation to page inbox
      let app = "page_inbox";
      await passThreadControl(sender_psid, app);
      resolve("done");
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  sendMessage: sendMessage,
  sendMessageWelcomeNewUser: sendMessageWelcomeNewUser,
  sendRooms_Suites: sendRooms_Suites,
  showSDR: showSDR,
  showSTR: showSTR,
  showDTR: showDTR,
  showFR: showFR,
  showEKR: showEKR,
  sendFind_Book: sendFind_Book,
  sendEnter_Date: sendEnter_Date,
  sendSpecial_offers: sendSpecial_offers,
  sendStay_offre: sendStay_offre,
  handleReservation: handleReservation,

  backToRooms_Suites: backToRooms_Suites,
  backToMainMenu: backToMainMenu,
  requestTalkToAgent: requestTalkToAgent,
};
