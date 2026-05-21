export const COMPANY = {
  name: "Lumenfly Labs",
  legalName: "LumenFlyLabs",
  tagline: "Turn WhatsApp Into Your Front Desk",
  description:
    "We build WhatsApp automation for local businesses that actually makes life easier — for you and your customers. No fluff, just practical tools that work.",
  address: "Gurusadanam, Ala p.o, Nalinathe padi, Chengannur, Alappuzha, Kerala 689126, India",
  // Email hierarchy for Udyam / Meta compliance:
  // adminEmail = Legal & Compliance (Footer, Privacy, Terms, Refund contact)
  // salesEmail = Gokul (Owner & Sales)
  // techEmail  = Hashiq (Technical Lead)
  // successEmail = Saheeda (Client Success)
  adminEmail: "admin@lumenflylabs.com",
  salesEmail: "gokul@lumenflylabs.com",
  techEmail: "hashiq@lumenflylabs.com",
  successEmail: "saheeda@lumenflylabs.com",
  waNumber: "+919746914027",
  waLink: "https://wa.me/919746914027?text=Hi%20Lumenfly%20Team!%20I%20want%20to%20book%20a%20demo.",
  waDemoText: "Hi%20Lumenfly%20Team!%20I%20want%20to%20book%20a%20demo.",
  year: new Date().getFullYear(),
} as const;

export type IndustryItem = {
  icon: string;
  name: string;
  desc: string;
  highlighted?: boolean;
};

export const NAV_LINKS = [
  { label: "Why Us", href: "#why" },
  { label: "Plans", href: "#plans" },
  { label: "Industries", href: "#industries" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO = {
  eyebrow: "WhatsApp automation for businesses",
  headline: "Turn WhatsApp\nInto Your Front Desk",
  highlight: "Front Desk",
  subtitle:
    "Automate bookings, follow-ups, reminders & promotions — all through WhatsApp. While you focus on what you love.",
  kpis: [
    { value: "24/7", label: "Always Available" },
    { value: "0s", label: "Response Delay" },
    { value: "100%", label: "Bookings Captured" },
  ],
} as const;

export const PROBLEM_SOLUTION = {
  eyebrow: "The real problem",
  headline: "You're Losing Customers\nWithout Even Knowing It",
  subtitle:
    "It's not about bad service. It's about the calls you couldn't pick up, the messages you missed, the follow-ups you forgot. Lumenfly fixes that — quietly, automatically.",
  without: {
    label: "Without Lumenfly",
    items: [
      {
        icon: "📵",
                title: "Missed calls during busy hours",
        desc: "A customer rings while you're with someone. You can't answer. They move on to the next salon.",
      },
      {
        icon: "⏳",
                title: "Staff buried in admin work",
        desc: "Hours wasted managing bookings instead of actually serving the people in your chair.",
      },
      {
        icon: "💬",
                title: "WhatsApp inbox chaos",
        desc: "90% of customers prefer to book on WhatsApp. But your personal inbox is a mess of 'Hi, is this available?' texts.",
      },
      {
        icon: "📉",
                title: "Leads slipping through",
        desc: "Reply a few minutes late? That customer already booked with your competitor.",
      },
    ],
  },
  with: {
    label: "With Lumenfly",
    items: [
      {
        icon: "🤖",
                title: "A booking bot that works while you sleep",
        desc: "Your WhatsApp takes bookings at 3 AM. Correctly. Every time. You wake up to a full schedule.",
      },
      {
        icon: "⚡",
                title: "Instant replies, every time",
        desc: "Customers get a response in seconds. No waiting. No one gets ignored.",
      },
      {
        icon: "🔔",
                title: "Smart reminders that actually reduce no-shows",
        desc: "Reminders go out automatically — timed perfectly. Your appointment book stays full.",
      },
      {
        icon: "📊",
                title: "Growth that runs itself",
        desc: "Promotions, re-engagement messages, follow-ups — all on autopilot. You just show up and do your thing.",
      },
    ],
  },
} as const;

export const LEAD_CATCHER = {
  eyebrow: "Start simple",
  headline: "The Lead Catcher",
  subtitle:
    "A 24/7 WhatsApp booking bot that captures every lead and keeps your calendar synced. It's the foundation — and honestly, most businesses never need more than this.",
  features: [
    "24/7 WhatsApp Meta Flow booking bot",
    "Auto-syncs to Google Calendar",
    "FAQ auto-replies for common questions",
    "Service & price menu on request",
    "Simple booking dashboard",
    "Instant booking confirmations",
  ],
} as const;

export const PREMIUM_ADDONS = {
  eyebrow: "Unlock as You Grow",
  headline: "Premium Add-Ons\nfor Expanding Businesses",
  subtitle:
    "Start with The Lead Catcher, then unlock these modular upgrades as your business scales.",
  addons: [
    {
      icon: "🛡️",
      title: "No-Show Protector",
      tagline: "Cut no-shows by 70%+",
      desc: "Automated 2-hour pre-appointment reminders sent directly to WhatsApp. Customers confirm or reschedule with one tap. Your chair stays filled.",
      gradient: "from-amber-500/20 to-yellow-600/10",
      borderColor: "border-amber-500/30",
    },
    {
      icon: "💳",
      title: "Advance Deposits",
      tagline: "Secure every booking",
      desc: "Razorpay payment links sent automatically inside WhatsApp. Collect deposits upfront for high-demand slots. No more last-minute cancellations.",
      gradient: "from-emerald-500/20 to-green-600/10",
      borderColor: "border-emerald-500/30",
    },
    {
      icon: "👥",
      title: "Multi-Stylist Routing",
      tagline: "Let customers choose",
      desc: "Customers pick their specific barber, doctor, or stylist directly in WhatsApp. Route bookings to the right professional automatically.",
      gradient: "from-blue-500/20 to-indigo-600/10",
      borderColor: "border-blue-500/30",
    },
    {
      icon: "📢",
      title: "The Festive Broadcaster",
      tagline: "Bulk marketing campaigns",
      desc: "Send targeted WhatsApp marketing campaigns to segmented customer lists. Festive offers, re-engagement blasts, and seasonal promotions — all automated.",
      gradient: "from-purple-500/20 to-pink-600/10",
      borderColor: "border-purple-500/30",
    },
  ],
} as const;

export const TRUST_FLOW = {
  eyebrow: "Built for Reliability",
  headline: "Your Bookings Are Safe — Even If You Change Your Phone",
  subtitle:
    "Every booking is instantly mirrored to Google Calendar. Switch phones, lose your device, or go offline — your schedule is always intact, accessible anywhere, anytime.",
  nodes: [
    { icon: "💬", label: "Customer books\non WhatsApp", bg: "bg-[#25D366]" },
    { icon: "📅", label: "Auto-synced to\nGoogle Calendar", bg: "bg-[#4285F4]" },
    { icon: "📱", label: "Access from\nany device", bg: "bg-white" },
  ],
} as const;

export const INDUSTRIES: {
  eyebrow: string;
  headline: string;
  subtitle: string;
  items: IndustryItem[];
} = {
  eyebrow: "Industries We Serve",
  headline: "Designed for Every\nCustomer-Facing Business",
  subtitle:
    "If your business takes appointments, bookings, or orders — Lumenfly automates it.",
  items: [
    { icon: "💇", name: "Salons", desc: "Hair · Beauty · Styling" },
    { icon: "💆", name: "Beauty Parlours", desc: "Skincare · Treatments" },
    { icon: "💅", name: "Nail Studios", desc: "Nail Art · Extensions" },
    { icon: "🏥", name: "Clinics", desc: "Appointments · Follow-ups" },
    { icon: "✂️", name: "Barbershops", desc: "Queue · Bookings" },
    { icon: "☕", name: "Cafes", desc: "Reservations · Orders" },
    { icon: "🏨", name: "Hotels", desc: "Bookings · Concierge" },
    { icon: "✦", name: "Your Business", desc: "Let's talk about it", highlighted: true },
  ],
};

export const REVIEWS = {
  eyebrow: "Client Stories",
  headline: "Businesses Already Glowing",
  subtitle:
    "Real results from businesses who made WhatsApp their front desk.",
  items: [
    {
      stars: 5,
      quote:
        "We went from missing 10+ calls a day to capturing every single enquiry. Bookings doubled in the first month. Best investment we made for the salon.",
      author: "Akshaya Nair",
      business: "Bloom Beauty Studio, Kochi",
      initial: "A",
    },
    {
      stars: 5,
      quote:
        "The automated reminders alone reduced our no-shows by 70%. Our staff can now focus entirely on customers in front of them instead of being glued to the phone.",
      author: "Rahul Menon",
      business: "The Barber's Corner, Thrissur",
      initial: "R",
    },
    {
      stars: 5,
      quote:
        "Setup was smooth and fast. Within a week we had a fully automated booking system on WhatsApp. Our customers love how quick and easy it is — and so do we.",
      author: "Priya Thomas",
      business: "Petal Nail Studio, Ernakulam",
      initial: "P",
    },
  ],
} as const;

export const ABOUT = {
  eyebrow: "About Us",
  headline: "We Build the Automation.\nYou Build the Business.",
  paragraphs: [
    "Lumenfly Labs was born from a simple observation: local businesses lose customers not because of poor service — but because of missed conversations. A call at the wrong time. A WhatsApp message that went unread.",
    "We build intelligent WhatsApp systems that handle the entire customer journey — from the first 'Hi' to confirmed booking, reminder, and loyalty follow-up — without any manual work from your team.",
    "Every bot we build is crafted to represent your brand with warmth, clarity, and professionalism. Technology that feels human.",
  ],
  values: [
    "Human-first automation that still feels personal",
    "Fast setup — no technical knowledge required",
    "Ongoing support from a team that genuinely cares",
    "Scales from a single shop to a full chain",
  ],
  cardTitle: "Built in Kerala.\nScaling Everywhere.",
  cardDesc:
    "We're a team of builders, designers & automation specialists making technology accessible to every local business.",
} as const;

export const CUSTOM_SOLUTIONS = {
  eyebrow: "Custom Solutions",
  headline: "Need Something Custom?",
  subtitle:
    "Tell us about your business and we'll design a solution that fits perfectly.",
  perks: [
    {
      icon: "🎯",
      title: "Built around your workflow",
      desc: "We study how you operate and design automation that fits naturally.",
    },
    {
      icon: "⚙️",
      title: "Integrates with your existing tools",
      desc: "Connect WhatsApp with your POS, CRM, calendar, or any business software.",
    },
    {
      icon: "📈",
      title: "Scales as you grow",
      desc: "Add features, locations, or staff anytime — your automation grows with you.",
    },
    {
      icon: "🤝",
      title: "Dedicated onboarding support",
      desc: "Our team handles the full setup. You just approve and go live.",
    },
  ],
} as const;

export const CONTACT = {
  eyebrow: "Get in Touch",
  headline: "Let's Start the Conversation",
  subtitle:
    "Tell us about your business and we'll show you exactly how Lumenfly can transform it.",
  methods: [
    { icon: "💼", label: "Sales Enquiries — Gokul (Owner)", value: COMPANY.salesEmail, href: `mailto:${COMPANY.salesEmail}` },
    { icon: "👨‍💻", label: "Technical Lead — Hashiq", value: COMPANY.techEmail, href: `mailto:${COMPANY.techEmail}` },
    { icon: "🌟", label: "Client Success — Saheeda", value: COMPANY.successEmail, href: `mailto:${COMPANY.successEmail}` },
  ],
} as const;

export const FOOTER = {
  description:
    "We build WhatsApp automation systems that help businesses simplify bookings, delight customers, and grow on autopilot.",
  navColumns: [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "/" },
        { label: "Why Lumenfly", href: "/#why" },
        { label: "Plans", href: "/#plans" },
        { label: "Industries", href: "/#industries" },
        { label: "About Us", href: "/#about" },
        { label: "Contact", href: "/#contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "The Lead Catcher", href: "/#plans" },
        { label: "No-Show Protector", href: "/#addons" },
        { label: "Advance Deposits", href: "/#addons" },
        { label: "Multi-Stylist Routing", href: "/#addons" },
        { label: "Festive Broadcaster", href: "/#addons" },
        { label: "Custom Solutions", href: "/#custom" },
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

// Icon map: maps emoji strings to hand-drawn SVG icon component names
// Used by components to render human-made icons instead of emoji
export const ICON_MAP: Record<string, string> = {
  // ProblemSolution - Without
  "📵": "MissedCallIcon",
  "⏳": "OverwhelmedIcon",
  "💬": "MessageIcon",
  "📉": "CracksIcon",
  // ProblemSolution - With
  "🤖": "RobotIcon",
  "⚡": "LightningIcon",
  "🔔": "BellIcon",
  "📊": "GrowthIcon",
  // PremiumAddons
  "🛡️": "ShieldIcon",
  "💳": "CalendarIcon",
  "👥": "UserIcon",
  "📢": "SparkleIcon",
  // TrustFlow
  "📅": "CalendarIcon",
  "📱": "PhoneIcon",
  // CustomSolutions
  "🎯": "TargetIcon",
  "⚙️": "GearIcon",
  "📈": "ChartIcon",
  "🤝": "HandshakeIcon",
  // Contact
  "✉️": "MailIcon",
  "👨‍💻": "TechIcon",
  "🌟": "StarIcon",
  // About
  "✦": "DiamondIcon",
};
