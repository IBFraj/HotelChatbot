let sendRooms_SuitesTemplate = () => {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "Standard Double Room",
            image_url:
              "https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",
            subtitle: "1 ful bed for two persons",
            default_action: {
              type: "web_url",
              url: "https://bit.ly/webHeadphones",
              webview_height_ratio: "tall",
            },
            buttons: [
              {
                type: "postback",
                payload: "CHEK_AVAILABILITY",
                title: "CHEK AVAILABILITY",
              },
              {
                type: "postback",
                title: "ROOM DETAILS",
                payload: "SDRoom",
              },
              {
                type: "postback",
                title: "Back to Menu",
                payload: "MENU",
              },
            ],
          },
          {
            title: "Standard Twin Room",
            image_url:
              "https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",
            subtitle: "2 twin beds for two persons",
            default_action: {
              type: "web_url",
              url: "https://bit.ly/webHeadphones",
              webview_height_ratio: "tall",
            },
            buttons: [
              {
                type: "postback",
                payload: "CHEK_AVAILABILITY",
                title: "CHEK AVAILABILITY",
              },
              {
                type: "postback",
                title: "ROOM DETAILS",
                payload: "STRoom",
              },
              {
                type: "postback",
                title: "Menu",
                payload: "MENU",
              },
            ],
          },
          {
            title: "Deluxe Twin Room",
            image_url:
              "https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",
            subtitle: "2 twin beds for two persons",
            default_action: {
              type: "web_url",
              url: "https://bit.ly/webHeadphones",
              webview_height_ratio: "tall",
            },
            buttons: [
              {
                type: "postback",
                payload: "CHEK_AVAILABILITY",
                title: "CHEK AVAILABILITY",
              },
              {
                type: "postback",
                title: "ROOM DETAILS",
                payload: "DTROOM ",
              },
              {
                type: "postback",
                title: "Menu",
                payload: "MENU",
              },
            ],
          },
          {
            title: "Family Room",
            image_url:
              "https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",
            subtitle: "1 ful bed and 1 sofa bed for three persons",
            default_action: {
              type: "web_url",
              url: "https://bit.ly/webHeadphones",
              webview_height_ratio: "tall",
            },
            buttons: [
              {
                type: "postback",
                payload: "CHEK_AVAILABILITY",
                title: "CHEK AVAILABILITY",
              },
              {
                type: "postback",
                title: "ROOM DETAILS",
                payload: "FROOM",
              },
              {
                type: "postback",
                title: "Menu",
                payload: "MENU",
              },
            ],
          },
          {
            title: "Executive Twin Room",
            image_url:
              "https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",
            subtitle: "2 twin beds and 1 sofa bed for four persons",
            default_action: {
              type: "web_url",
              url: "https://bit.ly/webHeadphones",
              webview_height_ratio: "tall",
            },
            buttons: [
              {
                type: "postback",
                payload: "CHEK_AVAILABILITY",
                title: "CHEK AVAILABILITY",
              },
              {
                type: "postback",
                title: "ROOM DETAILS",
                payload: "ETROOM",
              },
              {
                type: "postback",
                title: "Menu",
                payload: "MENU",
              },
            ],
          },
        ],
      },
    },
  };
};

let sendSDRTemplate = () => {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "A spacious room that features a Hypnos bed",
            image_url:
              "https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",
          },
          {
            title: "Lovely private bathroom with free toiletries",
            image_url:
              "https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",
          },
          {
            title: "In-room tablet, a hairdryer and laptop safe",
            image_url:
              "https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",
          },
        ],
      },
    },
  };
};
let sendSTRTemplate = () => {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "A spacious room that features two Hypnos beds",
            image_url:
              "https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",
          },
          {
            title: "Lovely private bathroom with free toiletries",
            image_url:
              "https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",
          },
          {
            title: "In-room tablet, a hairdryer and laptop safe",
            image_url:
              "https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",
          },
        ],
      },
    },
  };
};
let sendFRTemplate = () => {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "A spacious room that features a Hypnos bed",
            image_url:
              "https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",
          },
          {
            title: "Lovely private bathroom with free toiletries",
            image_url:
              "https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",
          },
          {
            title: "Feautures a mini-bar and air conditioning",
            image_url:
              "https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",
          },
        ],
      },
    },
  };
};
let sendDTRTemplate = () => {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "A spacious room that features two Hypnos beds",
            image_url:
              "https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",
          },
          {
            title: "Lovely private bathroom with free toiletries",
            image_url:
              "https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",
          },
          {
            title: "In-room tablet, a hairdryer and laptop safe",
            image_url:
              "https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",
          },
        ],
      },
    },
  };
};

let sendFind_BookTemplate = () => {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "When would you like to check-in?",
            image_url:
              "https://content.r9cdn.net/res/images/marble/seo_hotels.jpg?v=aeb8c67f83d5b9fd53ca97055fc8402800bf3ce4&cluster=4",

            buttons: [
              {
                type: "web_url",
                url: "https://bit.ly/webHeadphones",
                title: "PICK A DATE",
              },
              {
                type: "postback",
                title: "ENTER A DATE",
                payload: "Enteradate",
              },
            ],
          },
        ],
      },
    },
  };
};
let sendSpecial_offersTemplate = () => {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "*Vacation Packages & Exclusive Offers*",
            image_url: "https://ekladata.com/cCF-saQHgm0J3fERnOaKQS4X8vI.jpg",
          },
        ],
      },
    },
  };
};
let backToMainMenuTemplate = () => {
  return {
    text: "What can I do to help you today?",
    quick_replies: [
      {
        content_type: "text",
        title: "ROOMS AND SUITS",
        payload: "ROOMS_AND_SUITS",
      },
      {
        content_type: "text",
        title: "FIND AND BOOK",
        payload: "FIND_AND_BOOK",
      },
      {
        content_type: "text",
        title: "SPECIAL OFFERS",
        payload: "SPECIAL_OFFERS",
      },
    ],
  };
};

module.exports = {
  sendRooms_SuitesTemplate: sendRooms_SuitesTemplate,
  sendSDRTemplate: sendSDRTemplate,
  sendSTRTemplate: sendSTRTemplate,
  sendDTRTemplate: sendDTRTemplate,
  sendFRTemplate: sendFRTemplate,
  sendSpecial_offersTemplate: sendSpecial_offersTemplate,
  sendFind_BookTemplate: sendFind_BookTemplate,
  backToMainMenuTemplate: backToMainMenuTemplate,
};
