export const COMPANY = {
  name: "Loomenfly Labs",
  legalName: "LoomenFlyLabs",
  tagline: "Turn WhatsApp Into Your FlowDesk",
  description:
    "We build custom software and WhatsApp Meta Flows that give your customers an interactive mini-website experience, while giving you a powerful dashboard to manage it all.",
  address: "Gurusadanam, Ala p.o, Nalinathe padi, Chengannur, Alappuzha, Kerala 689126, India",
  adminEmail: "admin@loomenflylabs.com",
  salesEmail: "gokul@loomenflylabs.com",
  techEmail: "hashiq@loomenflylabs.com",
  successEmail: "saheeda@loomenflylabs.com",
  waNumber: "+919746914027",
  waLink: "https://wa.me/919746914027?text=Hi%20Loomenfly%20Team!%20I%20want%20to%20book%20a%20demo.",
  waDemoText: "Hi%20Loomenfly%20Team!%20I%20want%20to%20book%20a%20demo.",
  year: new Date().getFullYear(),
} as const;

export type IndustryItem = {
  icon: string;
  name: string;
  desc: string;
  highlighted?: boolean;
};

export const NAV_LINKS = [
  { label: "Platform", href: "#plans" },
  { label: "Features", href: "#addons" },
  { label: "Industries", href: "#industries" },
  { label: "About", href: "#about" },
] as const;

export const HERO = {
  eyebrow: "WhatsApp Mini-Website & Management Dashboard",
  headline: "Turn WhatsApp\nInto Your FlowDesk",
  highlight: "FlowDesk",
  subtitle:
    "A custom WhatsApp Meta Flow that gives your customers a rich, interactive booking experience—paired with a powerful owner dashboard to manage staff, catalogs, and schedules. Zero coding required.",
  kpis: [
    { value: "24/7", label: "Always Available" },
    { value: "0s", label: "Response Delay" },
    { value: "100%", label: "Bookings Captured" },
  ],
} as const;

export const PROBLEM_SOLUTION = {
  eyebrow: "The real problem",
  headline: "You're Running a Business,\nNot an IT Department",
  subtitle:
    "Managing catalogs, tracking staff schedules, sending reminders, and collecting reviews manually is exhausting. You need a system that runs itself, without forcing your customers to download a new app.",
  without: {
    label: "Without FlowDesk",
    items: [
      {
        icon: "01",
        title: "Chaotic WhatsApp inbox",
        desc: "Customers texting 'What services do you offer?' while you're busy with a client. Lost leads and messy chats.",
      },
      {
        icon: "02",
        title: "Manual scheduling & conflicts",
        desc: "Juggling staff timings and double-booking clients because you're using a paper diary or basic notes app.",
      },
      {
        icon: "03",
        title: "Tech headaches",
        desc: "Trying to build a website or manage complex booking software that requires you to be a part-time coder.",
      },
      {
        icon: "04",
        title: "Begging for reviews",
        desc: "Manually messaging past clients asking for a Google Review, only for them to forget.",
      },
    ],
  },
  with: {
    label: "With FlowDesk",
    items: [
      {
        icon: "01",
        title: "An interactive catalog inside WhatsApp",
        desc: "Customers browse your services, pick a staff member, and book seamlessly without ever leaving WhatsApp.",
      },
      {
        icon: "02",
        title: "Your own management dashboard",
        desc: "Update services, manage staff schedules, and view all booking data from one incredibly simple interface.",
      },
      {
        icon: "03",
        title: "We build it. You just use it.",
        desc: "Our team handles the entire technical setup and onboarding. You get a ready-to-use custom software suite.",
      },
      {
        icon: "04",
        title: "Automated growth",
        desc: "FlowDesk automatically follows up for Google Reviews and sends promotional broadcasts to your past customers.",
      },
    ],
  },
} as const;

export const LEAD_CATCHER = {
  eyebrow: "The Core Software",
  headline: "The FlowDesk Ecosystem",
  subtitle:
    "A hybrid solution: An advanced mini-website experience for your customers, connected to a robust control center for you.",
  features: [
    "Management Dashboard to control it all",
    "Visual catalogs to showcase service photos and past work",
    "List and sell retail products directly through the flow",
    "Interactive Meta Flow booking directly inside WhatsApp",
    "Real-time Google Calendar synchronization",
    "Full access to user data and booking history",
  ],
} as const;

export const PREMIUM_ADDONS = {
  eyebrow: "Automated Marketing",
  headline: "Growth Features\nBuilt Right In",
  subtitle:
    "FlowDesk doesn't just manage your bookings; it actively helps your business grow and retain customers on autopilot.",
  addons: [
    {
      icon: "★",
      title: "Google Review System",
      tagline: "Boost your local ranking",
      desc: "Automatically send a polite follow-up message asking happy customers to drop a Google Review right after their appointment.",
    },
    {
      icon: "📣",
      title: "Broadcast Offers",
      tagline: "Re-engage past clients",
      desc: "Send targeted WhatsApp messages to previous customers about new services, special discounts, or gentle booking reminders.",
    },
    {
      icon: "🔔",
      title: "Automated Reminders",
      tagline: "Eliminate no-shows",
      desc: "Send basic confirmation messages and timely reminders so your customers never miss an appointment.",
    },
    {
      icon: "ℹ️",
      title: "Smart FAQs",
      tagline: "Instant answers",
      desc: "A built-in list of Frequently Asked Questions that instantly answers common customer queries about location, pricing, and prep.",
    },
  ],
} as const;

export const TRUST_FLOW = {
  eyebrow: "Zero Tech Skills Required",
  headline: "We Handle the Setup.\nYou Run the Business.",
  subtitle:
    "You don't need to know anything about coding, tech, or software setup. We do 100% of the heavy lifting so you can focus on your clients.",
  nodes: [
    { icon: "1", label: "We input your details and\nbuild the interactive Flow" },
    { icon: "2", label: "We connect the Flow to\nyour WhatsApp number" },
    { icon: "3", label: "We hand over a Dashboard\nfully pre-loaded with your data" },
  ],
} as const;

export const INDUSTRIES: {
  eyebrow: string;
  headline: string;
  subtitle: string;
  items: IndustryItem[];
} = {
  eyebrow: "Industries We Serve",
  headline: "Perfect for Salons,\nScalable for Everyone",
  subtitle:
    "We are heavily focused on the Salon and Beauty industry, but FlowDesk's custom architecture adapts to any service business.",
  items: [
    { icon: "01", name: "Salons", desc: "Hair · Beauty · Styling", highlighted: true },
    { icon: "02", name: "Beauty Parlours", desc: "Skincare · Treatments", highlighted: true },
    { icon: "03", name: "Nail Studios", desc: "Nail Art · Extensions", highlighted: true },
    { icon: "04", name: "Barbershops", desc: "Queue · Staff Routing", highlighted: true },
    { icon: "05", name: "Clinics", desc: "Appointments · Follow-ups" },
    { icon: "06", name: "Cafes", desc: "Reservations · Orders" },
    { icon: "07", name: "Spas", desc: "Therapies · Massages" },
    { icon: "08", name: "Your Business", desc: "Let's build your flow" },
  ],
};

export const ABOUT = {
  eyebrow: "Our Approach",
  headline: "Custom Software,\nWithout the Custom Price Tag.",
  paragraphs: [
    "Loomenfly Labs is shifting the paradigm of local business software. We realized that off-the-shelf booking apps force you to change how you work, and custom software development is too expensive.",
    "So we created a hybrid. We use advanced WhatsApp Meta Flows to build an interactive, mini-website experience that your customers already know how to use. Then, we pair it with a powerful dashboard that puts you in total control.",
    "No coding. No steep learning curves. Just a brilliantly simple ecosystem designed to make managing your business effortless.",
  ],
  values: [
    "Interactive Meta Flows that feel like a native app",
    "Complete control via your Management Dashboard",
    "Done-for-you onboarding and technical setup",
    "Built natively for the Salon & Beauty industry first",
  ],
  cardTitle: "Built in Kerala.\nScaling Everywhere.",
  cardDesc:
    "We're a team of software engineers and designers bringing enterprise-grade automation to local businesses.",
} as const;

export const CUSTOM_SOLUTIONS = {
  eyebrow: "The Onboarding Experience",
  headline: "Completely Hands-Free Setup",
  subtitle:
    "When you partner with Loomenfly, you aren't left alone to figure things out. We act as your dedicated technical team.",
  perks: [
    {
      icon: "A",
      title: "The Discovery Call",
      desc: "We jump on a quick call with you to understand your services, pricing, facilities, and staff.",
    },
    {
      icon: "B",
      title: "We Build the Catalog",
      desc: "You don't lift a finger. Our team manually inputs all your services and staff data into your new dashboard.",
    },
    {
      icon: "C",
      title: "Number Connection",
      desc: "We securely connect the interactive Meta Flow directly to your existing business WhatsApp number.",
    },
    {
      icon: "D",
      title: "Ready to Launch",
      desc: "We hand over the keys to a fully operational system. You just sit back and watch the bookings roll in.",
    },
  ],
} as const;

export const CONTACT = {
  eyebrow: "Get in Touch",
  headline: "Let's Build\nYour FlowDesk",
  subtitle:
    "Ready to upgrade your booking experience and take control with your own dashboard? Let's talk.",
  methods: [
    { icon: "►", label: "Sales Enquiries — Gokul (CEO)", value: COMPANY.salesEmail, href: `mailto:${COMPANY.salesEmail}` },
    { icon: "►", label: "Technical Lead — Hashiq (CTO)", value: COMPANY.techEmail, href: `mailto:${COMPANY.techEmail}` },
    { icon: "►", label: "Operations — Saheeda (COO)", value: COMPANY.successEmail, href: `mailto:${COMPANY.successEmail}` },
  ],
} as const;

export const FOOTER = {
  description:
    "We build custom software ecosystems powered by WhatsApp Meta Flows and intuitive management dashboards.",
  navColumns: [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "Why FlowDesk", href: "/#why" },
        { label: "Platform", href: "/#plans" },
        { label: "Industries", href: "/#industries" },
        { label: "About Us", href: "/#about" },
        { label: "Contact", href: "/#contact" },
      ],
    },
    {
      title: "Features",
      links: [
        { label: "The FlowDesk Ecosystem", href: "/#plans" },
        { label: "Google Review System", href: "/#addons" },
        { label: "Broadcast Ads", href: "/#addons" },
        { label: "Management Dashboard", href: "/#custom" },
        { label: "Done-for-you Setup", href: "/#why" },
      ],
    },
  ],
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Twitter", href: "#" },
  ],
} as const;

export const ICON_MAP: Record<string, string> = {};
