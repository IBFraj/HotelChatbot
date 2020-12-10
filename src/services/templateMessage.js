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
                type: "web_url",
                url: "https://bit.ly/webHeadphones",
                title: "CHEK AVAILABILITY",
              },
              {
                type: "postback",
                title: "ROOM DETAILS",
                payload: "SDRoom",
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
                type: "web_url",
                url: "https://bit.ly/webHeadphones",
                title: "CHEK AVAILABILITY",
              },
              {
                type: "postback",
                title: "ROOM DETAILS",
                payload: "STRoom",
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
                type: "web_url",
                url: "https://bit.ly/webHeadphones",
                title: "CHEK AVAILABILITY",
              },
              {
                type: "postback",
                title: "ROOM DETAILS",
                payload: "DTROOM ",
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
                type: "web_url",
                url: "https://bit.ly/webHeadphones",
                title: "CHEK AVAILABILITY",
              },
              {
                type: "postback",
                title: "ROOM DETAILS",
                payload: "FROOM",
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
                type: "web_url",
                url: "https://bit.ly/webHeadphones",
                title: "CHEK AVAILABILITY",
              },
              {
                type: "postback",
                title: "ROOM DETAILS",
                payload: "ETROOM",
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
            image_url:
              "data:image/png;base64,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",
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
