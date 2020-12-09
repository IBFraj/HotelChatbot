let sendRooms_SuitesTemplate = () => {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: [
          {
            title: "Standard Double Room",
            image_url: "https://bit.ly/imageHeadphones",
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
            image_url: "https://bit.ly/imageHeadphones",
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
            image_url: "https://bit.ly/imageHeadphones",
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
            image_url: "https://bit.ly/imageHeadphones",
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
            image_url: "https://bit.ly/imageHeadphones",
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
            image_url: "https://bit.ly/imageHeadphone1a",
          },
          {
            title: "Lovely private bathroom with free toiletries",
            image_url: "https://bit.ly/imageHeadphone1b",
          },
          {
            title: "In-room tablet, a hairdryer and laptop safe",
            image_url: "https://bit.ly/imageHeadphone1c",
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
            image_url: "https://bit.ly/imageHeadphone1a",
          },
          {
            title: "Lovely private bathroom with free toiletries",
            image_url: "https://bit.ly/imageHeadphone1b",
          },
          {
            title: "In-room tablet, a hairdryer and laptop safe",
            image_url: "https://bit.ly/imageHeadphone1c",
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
            image_url: "https://bit.ly/imageHeadphone1a",
          },
          {
            title: "Lovely private bathroom with free toiletries",
            image_url: "https://bit.ly/imageHeadphone1b",
          },
          {
            title: "Feautures a mini-bar and air conditioning",
            image_url: "https://bit.ly/imageHeadphone1c",
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
            image_url: "https://bit.ly/imageHeadphone1a",
          },
          {
            title: "Lovely private bathroom with free toiletries",
            image_url: "https://bit.ly/imageHeadphone1b",
          },
          {
            title: "In-room tablet, a hairdryer and laptop safe",
            image_url: "https://bit.ly/imageHeadphone1c",
          },
        ],
      },
    },
  };
};

module.exports = {
  sendRooms_SuitesTemplate: sendRooms_SuitesTemplate,
  sendSDRTemplate: sendSDRTemplate,
  sendSTRTemplate: sendSTRTemplate,
  sendDTRTemplate: sendDTRTemplate,
  sendFRTemplate: sendFRTemplate,
};
