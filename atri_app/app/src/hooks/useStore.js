import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex20": {
      "callbacks": {}
    },
    "Flex17": {
      "callbacks": {}
    },
    "Flex13": {
      "callbacks": {}
    },
    "Flex14": {
      "callbacks": {}
    },
    "Flex18": {
      "callbacks": {}
    },
    "Menu2": {
      "custom": {
        "open": true,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true
      },
      "callbacks": {}
    },
    "Flex12": {
      "callbacks": {}
    },
    "Flex19": {
      "callbacks": {}
    },
    "Flex16": {
      "callbacks": {}
    },
    "first_page_container": {
      "callbacks": {}
    },
    "pic_and_main_home": {
      "callbacks": {}
    },
    "Flex24": {
      "callbacks": {}
    },
    "Flex26": {
      "callbacks": {}
    },
    "Flex25": {
      "callbacks": {}
    },
    "Div8": {
      "callbacks": {}
    },
    "trusted_by": {
      "callbacks": {}
    },
    "Flex30": {
      "callbacks": {}
    },
    "Flex31": {
      "callbacks": {}
    },
    "services": {
      "callbacks": {}
    },
    "Flex44": {
      "callbacks": {}
    },
    "Flex47": {
      "callbacks": {}
    },
    "Flex48": {
      "callbacks": {}
    },
    "Flex49": {
      "callbacks": {}
    },
    "Flex50": {
      "callbacks": {}
    },
    "Projects": {
      "callbacks": {}
    },
    "heading_and_button": {
      "callbacks": {}
    },
    "heading": {
      "callbacks": {}
    },
    "button_flex": {
      "callbacks": {}
    },
    "projects_heading": {
      "callbacks": {}
    },
    "carousel": {
      "callbacks": {
        "onClick": []
      }
    },
    "blogs_section": {
      "callbacks": {}
    },
    "descriptions": {
      "callbacks": {}
    },
    "Div22": {
      "callbacks": {}
    },
    "contents": {
      "callbacks": {}
    },
    "Div9": {
      "callbacks": {}
    },
    "Div10": {
      "callbacks": {}
    },
    "Div14": {
      "callbacks": {}
    },
    "Div18": {
      "callbacks": {}
    },
    "Div11": {
      "callbacks": {}
    },
    "Div15": {
      "callbacks": {}
    },
    "Div19": {
      "callbacks": {}
    },
    "Div12": {
      "callbacks": {}
    },
    "Div16": {
      "callbacks": {}
    },
    "Div20": {
      "callbacks": {}
    },
    "Div13": {
      "callbacks": {}
    },
    "Div17": {
      "callbacks": {}
    },
    "Div21": {
      "callbacks": {}
    },
    "product_designer": {
      "callbacks": {}
    },
    "title_and_stuff": {
      "callbacks": {}
    },
    "Div24": {
      "callbacks": {}
    },
    "Div25": {
      "callbacks": {}
    },
    "images": {
      "callbacks": {}
    },
    "Flex64": {
      "callbacks": {}
    },
    "Flex65": {
      "callbacks": {}
    },
    "Flex66": {
      "callbacks": {}
    },
    "Div26": {
      "callbacks": {}
    },
    "Div27": {
      "callbacks": {}
    },
    "edu_work_exp": {
      "callbacks": {}
    },
    "Div28": {
      "callbacks": {}
    },
    "Div30": {
      "callbacks": {}
    },
    "Div33": {
      "callbacks": {}
    },
    "Flex70": {
      "callbacks": {}
    },
    "Flex71": {
      "callbacks": {}
    },
    "original_comp": {
      "callbacks": {}
    },
    "Flex68": {
      "callbacks": {}
    },
    "Flex69": {
      "callbacks": {}
    },
    "Div32": {
      "callbacks": {}
    },
    "Div34": {
      "callbacks": {}
    },
    "Flex72": {
      "callbacks": {}
    },
    "Flex73": {
      "callbacks": {}
    },
    "Div29": {
      "callbacks": {}
    },
    "Div35": {
      "callbacks": {}
    },
    "Div38": {
      "callbacks": {}
    },
    "Flex74": {
      "callbacks": {}
    },
    "Flex75": {
      "callbacks": {}
    },
    "Div36": {
      "callbacks": {}
    },
    "Div39": {
      "callbacks": {}
    },
    "Flex76": {
      "callbacks": {}
    },
    "Flex77": {
      "callbacks": {}
    },
    "Div37": {
      "callbacks": {}
    },
    "Div40": {
      "callbacks": {}
    },
    "Flex78": {
      "callbacks": {}
    },
    "Flex79": {
      "callbacks": {}
    },
    "TESTIMONILS": {
      "callbacks": {}
    },
    "HEADINGS": {
      "callbacks": {}
    },
    "Div44": {
      "callbacks": {}
    },
    "FAQ": {
      "callbacks": {}
    },
    "Div45": {
      "callbacks": {}
    },
    "CONTENTS_FAQ": {
      "callbacks": {}
    },
    "LEFT": {
      "callbacks": {}
    },
    "Flex83": {
      "callbacks": {}
    },
    "Flex86": {
      "callbacks": {}
    },
    "Flex89": {
      "callbacks": {}
    },
    "RIGHT": {
      "callbacks": {}
    },
    "Flex85": {
      "callbacks": {}
    },
    "Flex88": {
      "callbacks": {}
    },
    "Flex90": {
      "callbacks": {}
    },
    "LAST_SECTION": {
      "callbacks": {}
    },
    "middle_cont": {
      "callbacks": {}
    },
    "Flex93": {
      "callbacks": {}
    },
    "Flex94": {
      "callbacks": {}
    },
    "Flex95": {
      "callbacks": {}
    },
    "Flex96": {
      "callbacks": {}
    },
    "Flex97": {
      "callbacks": {}
    },
    "Image3": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078ab3cfa1bca879adb93d1_Group%2070.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image4": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078ab3cfa1bca879adb93d1_Group%2070.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex15": {
      "callbacks": {}
    },
    "TextBox21": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox22": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox23": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox24": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox51": {
      "custom": {
        "text": "Book a call →"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox25": {
      "custom": {
        "text": "Book a call →"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox26": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox27": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Services"
            }
          }
        ]
      }
    },
    "TextBox28": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox29": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "custom": {
        "text": "I design products"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox33": {
      "custom": {
        "text": "that delight and"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox34": {
      "custom": {
        "text": "inspire people."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox35": {
      "custom": {
        "text": "Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button3": {
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link1": {
      "custom": {
        "text": "Download CV  →",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image5": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60ad1c2b0e1d633fc7ef2e69_Group%20160-min-p-1080.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image7": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logoipsum.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image8": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logips.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image9": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/logi.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/lo.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "custom": {
        "text": "Trusted by"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox53": {
      "custom": {
        "text": "Design that solves problems, one product at a time."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image13": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/left1.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "custom": {
        "text": "What I can do for you"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox55": {
      "custom": {
        "text": "Faster, better products that your users love. Here's all the services I provide:"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "UnorderedList1": {
      "custom": {
        "type": "disc",
        "titleColor": "#000000",
        "descriptionColor": "#1a181873",
        "items": [
          {
            "title": " Design Strategy"
          },
          {
            "title": " Design Strategy",
            "description": "",
            "icon": ""
          },
          {
            "title": "Front-end Development",
            "description": "",
            "icon": ""
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image14": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/left2.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox56": {
      "custom": {
        "text": "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "custom": {
        "text": "Applications I'm fluent in"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "UnorderedList2": {
      "custom": {
        "type": "disc",
        "titleColor": "#000000d9",
        "descriptionColor": "#00000073",
        "items": [
          {
            "title": "Sketch"
          },
          {
            "title": "Webflow",
            "description": "",
            "icon": ""
          },
          {
            "title": "Figma",
            "description": "",
            "icon": ""
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image15": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/left3.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox58": {
      "custom": {
        "text": "What you can expect"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox59": {
      "custom": {
        "text": "I design products that are more than pretty. I make them shippable and usable."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "UnorderedList3": {
      "custom": {
        "type": "disc",
        "titleColor": "#000000d9",
        "descriptionColor": "#00000073",
        "items": [
          {
            "title": "Clean and functional"
          },
          {
            "title": "Device and user friendly",
            "description": "",
            "icon": ""
          },
          {
            "title": "Efficient and maintainable",
            "description": "",
            "icon": ""
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox61": {
      "custom": {
        "text": "I bring  results  my clients are proof"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button11": {
      "custom": {
        "text": "View all projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox60": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Testimonial2": {
      "custom": {
        "startTile": "",
        "intervalTime": 3,
        "testimonials": [
          {
            "name": "Projects",
            "designation": "",
            "review": "",
            "profile_pic": "/app-assets/hans-jurgen-mager-LVT82myoXSE-unsplash.jpg"
          },
          {
            "name": "",
            "designation": "",
            "review": "",
            "profile_pic": "/app-assets/andrew-liu-2nx1Z70CT8I-unsplash.jpg"
          },
          {
            "name": "",
            "designation": "",
            "review": "",
            "profile_pic": "/app-assets/hans-jurgen-mager-LVT82myoXSE-unsplash.jpg"
          },
          {
            "name": "",
            "designation": "",
            "review": "",
            "profile_pic": "/app-assets/andrew-liu-2nx1Z70CT8I-unsplash.jpg"
          },
          {
            "name": "",
            "designation": "",
            "review": "",
            "profile_pic": "/app-assets/hans-jurgen-mager-LVT82myoXSE-unsplash.jpg"
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "custom": {
        "text": "BLOGS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "custom": {
        "text": "LATEST BLOGS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button12": {
      "custom": {
        "text": "View all →"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "custom": {
        "text": "April 16, 2021 6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox65": {
      "custom": {
        "text": "Designer tips for designers that covers everything you need "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button13": {
      "custom": {
        "text": "Read the article→"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button20": {
      "custom": {
        "text": "Read the article →"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox78": {
      "custom": {
        "text": "Designer tips for designers that covers everything you need "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox79": {
      "custom": {
        "text": "April 16, 2021 6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button21": {
      "custom": {
        "text": "Submit →"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox80": {
      "custom": {
        "text": "Designer tips for designers that covers everything you need "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox81": {
      "custom": {
        "text": "April 16, 2021 6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button22": {
      "custom": {
        "text": "Submit →"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox82": {
      "custom": {
        "text": "Designer tips for designers that covers everything you need "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox83": {
      "custom": {
        "text": "April 16, 2021 6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button23": {
      "custom": {
        "text": "Submit →"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox84": {
      "custom": {
        "text": "Designer tips for designers that covers everything you need "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox85": {
      "custom": {
        "text": "April 16, 2021 6 mins"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox86": {
      "custom": {
        "text": "Product designer "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox87": {
      "custom": {
        "text": "That's me !"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox88": {
      "custom": {
        "text": "Over the past 12 years, I've worked with a diverse range of clients, from startups to Fortune 500 companies. I love crafting interfaces that delight users and help businesses grow."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image20": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/mobile.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image21": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/stwre.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60751db006dd19aa20e10edf_image_processing20200129-19798-1k8ponz%2012-min.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/60751db0f84d7b28be5d1883_image_processing20200129-19798-1k8ponz%2013-min.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "edu": {
      "custom": {
        "text": "📚  Education"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox93": {
      "custom": {
        "text": "2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox94": {
      "custom": {
        "text": "Msc human computer interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image25": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow_outward_FILL0_wght400_GRAD0_opsz48.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox95": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox90": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image24": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow_outward_FILL0_wght400_GRAD0_opsz48.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox91": {
      "custom": {
        "text": "Msc human computer interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox92": {
      "custom": {
        "text": "2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox96": {
      "custom": {
        "text": "2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox97": {
      "custom": {
        "text": "Msc human computer interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image26": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow_outward_FILL0_wght400_GRAD0_opsz48.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox98": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox99": {
      "custom": {
        "text": "💼  Work Experience"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox100": {
      "custom": {
        "text": "2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox101": {
      "custom": {
        "text": "Msc human computer interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow_outward_FILL0_wght400_GRAD0_opsz48.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox102": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox103": {
      "custom": {
        "text": "2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox104": {
      "custom": {
        "text": "Msc human computer interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow_outward_FILL0_wght400_GRAD0_opsz48.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox105": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "custom": {
        "text": "2013-2015"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox107": {
      "custom": {
        "text": "Msc human computer interaction"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image29": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/arrow_outward_FILL0_wght400_GRAD0_opsz48.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox108": {
      "custom": {
        "text": "Stanford University"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox109": {
      "custom": {
        "text": "TESTIMONIALS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox110": {
      "custom": {
        "text": "WORD ON THE STREET"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Testimonial4": {
      "custom": {
        "startTile": 0,
        "intervalTime": 2,
        "testimonials": [
          {
            "name": "John Frankin",
            "designation": "Founder, Double Bunch",
            "review": " This is unbelievable. After using Testiminial Generator my buisness skyrocketed!",
            "profile_pic": "/app-assets/604788d804dfe4ec1de7bb97_image-1-compressed.jpg"
          },
          {
            "name": "Jennifer Musk",
            "designation": "Project Manager@ Microsoft",
            "review": "This is unbelievable. After using Testiminial Generator my buisness skyrocketed!",
            "profile_pic": "/app-assets/604773c422dbe6174ff754e5_jake-nackos-IF9TK5Uy-KI-unsplash%2012-min.png"
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox111": {
      "custom": {
        "text": "Frequently asked questions"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox112": {
      "custom": {
        "text": "FAQ"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox125": {
      "custom": {
        "text": "What type of projects do you take on?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox126": {
      "custom": {
        "text": " I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox131": {
      "custom": {
        "text": " I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox132": {
      "custom": {
        "text": "What type of projects do you take on?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox137": {
      "custom": {
        "text": " I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox138": {
      "custom": {
        "text": "What type of projects do you take on?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox129": {
      "custom": {
        "text": " I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox130": {
      "custom": {
        "text": "What type of projects do you take on?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox135": {
      "custom": {
        "text": " I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox136": {
      "custom": {
        "text": "What type of projects do you take on?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox139": {
      "custom": {
        "text": " I usually work on B2C software, that's my forte--where I shine best. But I also have about 15 B2B software products in my portfolio. I do end-to-end product design + branding."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox140": {
      "custom": {
        "text": "What type of projects do you take on?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox141": {
      "custom": {
        "text": "Ready to make something kickass?"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox142": {
      "custom": {
        "text": "Let's get on a call."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox143": {
      "custom": {
        "text": "© All rights reserved. Conversionflow. Powered by Webflow / Image License Info / Instructions / Changelog / Style Guide"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox144": {
      "custom": {
        "text": "Portfolio Creator."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox145": {
      "custom": {
        "text": "4353 Delaware Avenue, San Francisco, USA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox146": {
      "custom": {
        "text": "HI@thefolio.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link15": {
      "custom": {
        "text": "Contact",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link17": {
      "custom": {
        "text": "Projects",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link22": {
      "custom": {
        "text": "Contact",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link12": {
      "custom": {
        "text": "About",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link13": {
      "custom": {
        "text": "Services",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link14": {
      "custom": {
        "text": "Experience",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link23": {
      "custom": {
        "text": "Contact",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link24": {
      "custom": {
        "text": "Contact",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Link25": {
      "custom": {
        "text": "Contact",
        "url": "/"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  },
  "Services": {
    "Flex42": {
      "callbacks": {}
    },
    "Flex39": {
      "callbacks": {}
    },
    "Flex35": {
      "callbacks": {}
    },
    "Flex40": {
      "callbacks": {}
    },
    "Menu3": {
      "custom": {
        "open": true,
        "iconHeight": 24,
        "iconWidth": 24,
        "alignRight": true
      },
      "callbacks": {}
    },
    "Flex34": {
      "callbacks": {}
    },
    "Flex41": {
      "callbacks": {}
    },
    "Flex37": {
      "callbacks": {}
    },
    "Flex38": {
      "callbacks": {}
    },
    "Button10": {
      "custom": {
        "text": "Submit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Cascader1": {
      "custom": {
        "hover": false,
        "rootOptions": [
          "India",
          "USA",
          "France",
          "Canada"
        ],
        "options": [
          {
            "level": 1,
            "parent": "India",
            "children": [
              "Goa",
              "Maharashtra",
              "Delhi"
            ]
          },
          {
            "level": 1,
            "parent": "USA",
            "children": [
              "California",
              "Washington DC",
              "Texas"
            ]
          },
          {
            "level": 1,
            "parent": "France",
            "children": [
              "Corsica",
              "Brittany"
            ]
          },
          {
            "level": 1,
            "parent": "Canada",
            "children": [
              "Ontario",
              "Montreal"
            ]
          },
          {
            "level": 2,
            "parent": "Goa",
            "children": [
              "Mapusa",
              "Panaji",
              "Margao"
            ]
          },
          {
            "level": 2,
            "parent": "California",
            "children": [
              "LA",
              "San Diego",
              "San Francisco"
            ]
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Breadcrumb1": {
      "custom": {
        "divider": ">",
        "items": [
          {
            "name": "Home",
            "link": ""
          },
          {
            "name": "Application Center",
            "link": ""
          },
          {
            "name": "Application List",
            "link": ""
          },
          {
            "name": "Application One",
            "link": ""
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Testimonial1": {
      "custom": {
        "startTile": 0,
        "intervalTime": 2,
        "testimonials": [
          {
            "name": "",
            "designation": "",
            "review": "",
            "profile_pic": "/app-assets/cesar-rincon-XHVpWcr5grQ-unsplash.jpg"
          }
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel3": {
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": [
          "",
          "/app-assets/604788d804dfe4ec1de7bb97_image-1-compressed.jpg"
        ],
        "isIndicatorCircle": false
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "custom": {
        "text": "Projects"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox44": {
      "custom": {
        "text": "Services"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/"
            }
          }
        ]
      }
    },
    "TextBox45": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/Services"
            }
          }
        ]
      }
    },
    "TextBox46": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox47": {
      "custom": {
        "text": "Book a call →"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex36": {
      "callbacks": {}
    },
    "TextBox39": {
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox40": {
      "custom": {
        "text": "Talks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox41": {
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox42": {
      "custom": {
        "text": "Contact Me"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image11": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078ab3cfa1bca879adb93d1_Group%2070.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image12": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/6078ab3cfa1bca879adb93d1_Group%2070.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
