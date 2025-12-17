export const admin = {
  name: "You",
  img: "/assets/images/admin.jpg",
};

export const contacts = [
  {
    id: 1,
    name: "James Higham",
    msg: "Got it. Preparing...",
    img: "/assets/images/avatar1.jpg",
    color: "#05DF72",
    status: "Online",
    chat: [
      {
        from: "James",
        text: "Hi Admin! Can you check my task status?",
        time: "02:39 PM",
      },
      {
        from: "You",
        text: "Sure James, sending update in 2 mins.",
        time: "02:40 PM",
      },
      { from: "James", text: "Thanks! 😊", time: "02:41 PM" },
      { from: "You", text: "You're welcome!", time: "02:42 PM" },
      {
        from: "James",
        text: "Also, do we have client meeting tomorrow?",
        time: "02:45 PM",
      },
      {
        from: "You",
        text: "Yes, 11 AM. Be ready with the demo.",
        time: "02:46 PM",
      },
      {
        from: "James",
        text: "Got it. Preparing the slides now.",
        time: "02:48 PM",
      },
    ],
  },

  {
    id: 2,
    name: "Leon Baxter",
    msg: "Thanks Admin!",
    img: "/assets/images/avatar2.jpg",
    color: "#05DF72",
    status: "Online",
    chat: [
      {
        from: "Leon",
        text: "Hello Admin! I uploaded the UI changes.",
        time: "01:15 PM",
      },
      {
        from: "You",
        text: "Great work Leon 👍. I'll review soon.",
        time: "01:17 PM",
      },
      {
        from: "Leon",
        text: "Sure, ping me if any modification needed.",
        time: "01:18 PM",
      },
      { from: "You", text: "Okay! Will do.", time: "01:20 PM" },
      { from: "Leon", text: "Also pushed animation fixes.", time: "01:25 PM" },
      { from: "You", text: "Cool, checking those as well.", time: "01:27 PM" },
      { from: "Leon", text: "Thanks Admin!", time: "01:28 PM" },
    ],
  },

  {
    id: 3,
    name: "Aliza Ducan",
    msg: "Got it. Thanks!...",
    img: "/assets/images/avatar3.jpg",
    color: "red",
    status: "Offline",
    chat: [
      {
        from: "Aliza",
        text: "Good morning! Do we have any meeting today?",
        time: "10:05 AM",
      },
      {
        from: "You",
        text: "Morning Aliza! Yes, sprint review at 3 PM.",
        time: "10:07 AM",
      },
      { from: "Aliza", text: "Okay noted! 📅", time: "10:08 AM" },
      { from: "You", text: "See you in the meeting.", time: "10:09 AM" },
      {
        from: "Aliza",
        text: "Can you share last sprint summary?",
        time: "10:11 AM",
      },
      { from: "You", text: "Shared in your mail.", time: "10:12 AM" },
      { from: "Aliza", text: "Got it. Thanks!", time: "10:13 AM" },
    ],
  },

  {
    id: 4,
    name: "Thomas Ward",
    msg: "Great!",
    img: "/assets/images/avatar4.jpg",
    color: "red",
    status: "Offline",
    chat: [
      {
        from: "Thomas",
        text: "Admin, API response is very slow today.",
        time: "11:20 AM",
      },
      {
        from: "You",
        text: "Checking server load... give me 2 mins.",
        time: "11:21 AM",
      },
      { from: "Thomas", text: "Okay, waiting. ⚠️", time: "11:22 AM" },
      {
        from: "You",
        text: "Restarted the instance, try now.",
        time: "11:25 AM",
      },
      {
        from: "Thomas",
        text: "Now it's working fine. Thanks!",
        time: "11:27 AM",
      },
      { from: "You", text: "Great!", time: "11:28 AM" },
    ],
  },

  {
    id: 5,
    name: "Charles Cline",
    msg: "Okay cool.",
    img: "/assets/images/avatar8.jpg",
    color: "#05DF72",
    status: "Online",
    chat: [
      {
        from: "Charles",
        text: "Hey Admin, can you share the Figma link?",
        time: "04:10 PM",
      },
      { from: "You", text: "Sent on mail, please check.", time: "04:11 PM" },
      { from: "Charles", text: "Got it, thanks! 🙌", time: "04:12 PM" },
      {
        from: "Charles",
        text: "Do we follow new design guidelines now?",
        time: "04:15 PM",
      },
      { from: "You", text: "Yes, from this sprint onward.", time: "04:16 PM" },
      { from: "Charles", text: "Okay cool.", time: "04:17 PM" },
    ],
  },

  {
    id: 6,
    name: "Thomas Walsh",
    msg: "Send me the output...",
    img: "/assets/images/avatar6.jpg",
    color: "red",
    status: "Offline",
    chat: [
      {
        from: "Thomas",
        text: "Hi, build is failing on production.",
        time: "09:30 AM",
      },
      { from: "You", text: "Looking into logs now.", time: "09:31 AM" },
      {
        from: "Thomas",
        text: "Let me know if you need screenshots.",
        time: "09:32 AM",
      },
      {
        from: "You",
        text: "Issue found. Webpack minify error.",
        time: "09:35 AM",
      },
      { from: "Thomas", text: "Okay, rebuilding now.", time: "09:36 AM" },
      { from: "You", text: "Send me the output once done.", time: "09:37 AM" },
    ],
  },

  {
    id: 7,
    name: "Jonathan King",
    msg: "Okay, adding it to...",
    img: "/assets/images/avatar7.jpg",
    color: "#05DF72",
    status: "Online",
    chat: [
      {
        from: "Jonathan",
        text: "Morning! UI isn't mobile responsive.",
        time: "11:00 AM",
      },
      {
        from: "You",
        text: "I'll assign this to the frontend team.",
        time: "11:01 AM",
      },
      { from: "Jonathan", text: "Thanks Admin! 😊", time: "11:02 AM" },
      {
        from: "Jonathan",
        text: "Also check padding on cards.",
        time: "11:05 AM",
      },
      {
        from: "You",
        text: "Okay, adding it to the same ticket.",
        time: "11:06 AM",
      },
    ],
  },

  {
    id: 8,
    name: "Eliz Hilter",
    msg: "Okay, no worries.",
    img: "/assets/images/avatar5.jpg",
    color: "red",
    status: "Offline",
    chat: [
      {
        from: "Eliz",
        text: "Can you approve my leave request?",
        time: "12:20 PM",
      },
      { from: "You", text: "Approved ✔️", time: "12:21 PM" },
      { from: "Eliz", text: "Thank you!!", time: "12:22 PM" },
      {
        from: "Eliz",
        text: "I'll complete pending tasks before leaving.",
        time: "12:24 PM",
      },
      { from: "You", text: "Okay, no worries.", time: "12:25 PM" },
    ],
  },

  {
    id: 9,
    name: "Peter Brooks",
    msg: "Sure.",
    img: "/assets/images/avatar9.jpg",
    color: "red",
    status: "Offline",
    chat: [
      {
        from: "Peter",
        text: "Admin, I fixed the login bug.",
        time: "05:30 PM",
      },
      { from: "You", text: "Awesome work Peter 👏", time: "05:31 PM" },
      { from: "Peter", text: "Thanks! Deploy when free.", time: "05:32 PM" },
      { from: "You", text: "Deploying now.", time: "05:34 PM" },
      { from: "Peter", text: "Let me know once live.", time: "05:35 PM" },
      { from: "You", text: "Sure.", time: "05:36 PM" },
    ],
  },
];
