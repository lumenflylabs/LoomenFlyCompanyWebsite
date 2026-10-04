export const COMPANY = {
  name: "Loomenfly Labs",
  legalName: "LOOMENFLY LABS LLP",
  llpin: "ACZ-5532",
  udyam: "UDYAM-KL-01-0070166",
  pan: "AANFL3526F",
  tagline: "Turn Your Messages Into Bookings",
  description:
    "LoomenDesk brings interactive Telegram booking, WhatsApp and Instagram booking links, and a shared business dashboard together. Built for appointment-based businesses and service teams, with no Meta API messaging charges for the standard link-based booking setup.",
  address: "Door No. 150, Gurusadanam, Ala P.O, Chengannur, Ala (Alappuzha), Chengannur Police Station, Chengannur, Alappuzha- 689126, Kerala, India",
  adminEmail: "admin@loomenflylabs.com",
  salesEmail: "gokul@loomenflylabs.com",
  techEmail: "hashiq@loomenflylabs.com",
  successEmail: "saheeda@loomenflylabs.com",
  phone: "+91 7736119930",
  altPhone: "+91 9746914027",
  waNumber: "+919746914027",
  waLink: "https://wa.me/919746914027?text=Hi%20Loomenfly%20Team!%20I%20want%20to%20book%20a%20demo.",
  waDemoText: "Hi%20Loomenfly%20Team!%20I%20want%20to%20book%20a%20demo.",
  year: new Date().getFullYear(),
  disclaimer: "Loomenfly Labs is an independent software company registered in Kerala, India. Telegram, WhatsApp and Instagram are trademarks of their respective owners. We are not affiliated with or endorsed by Telegram or Meta. Optional WhatsApp Cloud API integrations are subject to Meta’s terms and messaging charges.",
  partners: [
    { name: "Gokul Surendran", role: "Designated Partner & CEO", email: "gokul@loomenflylabs.com" },
    { name: "MS Mohammed Hashiq", role: "Designated Partner & CTO", email: "hashiq@loomenflylabs.com" },
    { name: "Saheeda Menamthuruthil Muhammed", role: "Designated Partner & COO", email: "saheeda@loomenflylabs.com" },
  ],
  socials: {
    instagram: "https://www.instagram.com/loomenflylabs",
    x: "https://x.com/loomenflylabs",
  },
} as const;

export const DESIGNATED_PARTNERS = COMPANY.partners;

export type IndustryItem = {
  icon: string;
  name: string;
  desc: string;
  highlighted?: boolean;
};

export const NAV_LINKS = [
  { label: "Platform", href: "/#plans" },
  { label: "Features", href: "/#addons" },
  { label: "Setup", href: "/#custom" },
  { label: "About", href: "/about" },
] as const;

export const HERO = {
  "eyebrow": "Automated Booking & Management Dashboard",
  "headline": "Turn Your Messages\nInto Bookings.",
  "highlight": "Bookings.",
  "subtitle": "Appointment booking software for your business. Interactive booking in Telegram, booking links through WhatsApp Business and Instagram auto-replies, and one dashboard for your services, staff and appointments.",
  "kpis": [
    {
      "value": "Telegram",
      "label": "Interactive booking"
    },
    {
      "value": "One link",
      "label": "WhatsApp & Instagram"
    },
    {
      "value": "One dashboard",
      "label": "Every appointment"
    }
  ]
} as const;

export const PROBLEM_SOLUTION = {
  "eyebrow": "A Better Booking Day",
  "headline": "Less Time Arranging.\nMore Time With Your Clients.",
  "subtitle": "A customer should be able to see your services and pick a time without a long conversation. LoomenDesk connects your booking channels to the same schedule, so your team can focus on the work in front of them.",
  "without": {
    "label": "Without LoomenDesk",
    "items": [
      {
        "icon": "01",
        "title": "Bookings buried in conversations",
        "desc": "Prices, services and available times go back and forth in separate chats while your team is busy with clients."
      },
      {
        "icon": "02",
        "title": "A schedule spread across notebooks",
        "desc": "Matching services, staff shifts and available appointments manually makes changes harder to keep track of."
      },
      {
        "icon": "03",
        "title": "Another messaging bill to manage",
        "desc": "An API-based WhatsApp setup can bring separate message charges, billing rules and account configuration alongside your booking software."
      },
      {
        "icon": "04",
        "title": "Customers waiting for the next reply",
        "desc": "A customer may discover your work after hours, but still needs a clear way to choose a service and an appointment."
      }
    ]
  },
  "with": {
    "label": "With LoomenDesk",
    "items": [
      {
        "icon": "01",
        "title": "Interactive booking in Telegram",
        "desc": "Customers choose services, staff and available times in your Telegram Mini App. WhatsApp and Instagram reply links open the booking page in their browser."
      },
      {
        "icon": "02",
        "title": "One dashboard for the whole team",
        "desc": "Manage service prices and durations, staff availability, breaks, time off and appointments in one place."
      },
      {
        "icon": "03",
        "title": "No Meta API bill for standard booking",
        "desc": "Telegram and browser booking, with links in native WhatsApp Business and Instagram replies, do not generate Meta API messaging charges. LoomenDesk fees apply; optional API messaging has separate costs."
      },
      {
        "icon": "04",
        "title": "A booking link that stays available",
        "desc": "Share your page in WhatsApp Business greetings and away messages, Instagram booking FAQs, your bio or a reception QR code. Customers can book without waiting for a conversation."
      }
    ]
  }
} as const;

export const LEAD_CATCHER = {
  "eyebrow": "The Core Software",
  "headline": "Your Bookings. Your Team. One Dashboard.",
  "subtitle": "A clear booking experience for your customers and a practical workspace for your team. Manage services, staff, availability and branches without piecing together separate chats.",
  "features": [
    "Every appointment in one dashboard",
    "Your services, prices and durations",
    "Staff schedules, breaks and time off",
    "Telegram & booking links",
    "Branch booking links and reception QR codes",
    "Customer details and booking history"
  ]
} as const;

export const PREMIUM_ADDONS = {
  "eyebrow": "Your Booking Channels",
  "headline": "Simple Ways In.\nOne Booking Experience.",
  "subtitle": "Meet customers where they already find your business. Each channel leads to your service menu and appointment schedule, with a clear next step.",
  "addons": [
    {
      "icon": "01",
      "title": "Telegram Mini App",
      "tagline": "Book without leaving Telegram",
      "desc": "Customers browse the catalog, choose a team member and a time, then confirm their appointment inside Telegram. They can return to manage their booking."
    },
    {
      "icon": "02",
      "title": "WhatsApp Business Replies",
      "tagline": "A helpful greeting with your booking link",
      "desc": "Use the WhatsApp Business app’s greeting and away-message tools to share your booking link. Customers tap through to choose their appointment in the browser. Replies follow the app’s configured rules."
    },
    {
      "icon": "03",
      "title": "Instagram Booking Links",
      "tagline": "From profile visits to appointments",
      "desc": "Put your booking link in your Instagram bio and native booking FAQ reply. Customers can move from discovering your work to choosing a service and time."
    },
    {
      "icon": "04",
      "title": "Your Browser Booking Page",
      "tagline": "No Telegram account required",
      "desc": "Your booking page works in a mobile or desktop browser. Share it on your website, in a reply or through a branch QR code. Customers use the same catalog and availability across channels."
    }
  ]
} as const;

export const TRUST_FLOW = {
  "eyebrow": "One Shared Schedule",
  "headline": "Different Starting Points.\nThe Same Booking System.",
  "subtitle": "Whether a customer starts in Telegram, WhatsApp or Instagram, their appointment reaches the same dashboard. Keep your services, staff and available times in one place.",
  "nodes": [
    {
      "icon": "1",
      "label": "A customer opens Telegram\nor taps your booking link"
    },
    {
      "icon": "2",
      "label": "They choose a service,\na staff member and a time"
    },
    {
      "icon": "3",
      "label": "Your team sees the appointment\nin the same dashboard"
    }
  ]
} as const;

export const INDUSTRIES: {
  eyebrow: string;
  headline: string;
  subtitle: string;
  items: IndustryItem[];
} = {
  eyebrow: "Built Around Your Business",
  headline: "Your Services.\nYour Way of Working.",
  subtitle:
    "Organize appointments around your services, team, opening hours and locations. We help configure the booking experience to match how your business works.",
  items: [
    { icon: "01", name: "Service Appointments", desc: "Services · Prices · Durations" },
    { icon: "02", name: "Consultations", desc: "Availability · Follow-ups" },
    { icon: "03", name: "Team Scheduling", desc: "Staff · Breaks · Time off" },
    { icon: "04", name: "Multiple Locations", desc: "Branch links · Local schedules" },
    { icon: "05", name: "Your Business", desc: "Let’s plan your setup" },
  ],
};

export const ABOUT = {
  "eyebrow": "Our Approach",
  "headline": "Built Around\nYour Working Day.",
  "paragraphs": [
    "We build software for businesses and service teams who want less time arranging appointments and more time serving their customers.",
    "LoomenDesk brings interactive Telegram booking and a browser booking page together. WhatsApp Business greetings and Instagram booking replies share the link, while your dashboard keeps the team’s schedule organized.",
    "Our team helps configure your catalog, staff and booking channels. The standard setup avoids Meta API messaging charges for booking, with LoomenDesk setup and subscription pricing agreed for your business."
  ],
  "values": [
    "Interactive Telegram and browser booking",
    "Complete control via your Management Dashboard",
    "Done-for-you onboarding and technical setup",
    "Configured for your services, team and locations"
  ],
  "cardTitle": "Built in Kerala.\nFor Your Business.",
  "cardDesc": "LOOMENFLY LABS LLP (LLPIN: ACZ-5532), registered in Kerala. Founded by Gokul Surendran, MS Mohammed Hashiq and Saheeda Menamthuruthil Muhammed — Designated Partners."
} as const;

export const CUSTOM_SOLUTIONS = {
  "eyebrow": "The Onboarding Experience",
  "headline": "We Help You Get Ready to Take Bookings",
  "subtitle": "Bring your service menu and your questions. We help set up your booking experience and walk your team through the dashboard.",
  "perks": [
    {
      "icon": "A",
      "title": "Show Us How You Work",
      "desc": "We go through your service menu, prices, staff, opening hours and locations with you."
    },
    {
      "icon": "B",
      "title": "Your Catalog & Schedule",
      "desc": "We organize your services, durations, staff availability and branch details in your dashboard."
    },
    {
      "icon": "C",
      "title": "Your Booking Channels",
      "desc": "We configure your Telegram experience and booking page, then help you add booking links to WhatsApp Business greetings and Instagram FAQs."
    },
    {
      "icon": "D",
      "title": "Test It. Then Share It.",
      "desc": "Walk through a booking with us, learn your dashboard and share your booking link or QR code with customers."
    }
  ]
} as const;

export const CONTACT = {
  "eyebrow": "See It For Yourself",
  "headline": "Let’s Look at\nYour Booking Day",
  "subtitle": "See the Telegram experience, your booking page and the business dashboard in a live walkthrough. We’ll explain the setup and pricing for your team.",
  "methods": []
} as const;

export const FOOTER = {
  description:
    "Interactive Telegram booking, WhatsApp and Instagram booking links, and one dashboard to keep your business organized.",
  navColumns: [
    {
      title: "Company & Legal",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "Data Deletion", href: "/data-deletion" },
      ],
    },
    {
      title: "Features",
      links: [
        { label: "Interactive Booking", href: "/#why" },
        { label: "Customer Review System", href: "/#addons" },
        { label: "Broadcast Messaging", href: "/#addons" },
        { label: "Management Dashboard", href: "/#custom" },
        { label: "Managed Onboarding", href: "/#why" },
      ],
    },
  ],
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/loomenflylabs/" },
    { label: "X (Twitter)", href: "https://x.com/LoomenflyLabs" },
  ],
} as const;

export const ICON_MAP: Record<string, string> = {};
