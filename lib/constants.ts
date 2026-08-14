export const COMPANY = {
  name: "Loomenfly Labs",
  legalName: "LOOMENFLY LABS LLP",
  llpin: "ACZ-5532",
  udyam: "UDYAM-KL-01-0070166",
  pan: "AANFL3526F",
  tagline: "Turn Your Messages Into Bookings",
  description:
    "We build custom software and automated messaging flows that give your customers an interactive booking experience directly on WhatsApp, while giving you a powerful dashboard to manage it all.",
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
  disclaimer: "LOOMENFLY LABS LLP is an independent software development entity registered in Kerala, India. LoomenDesk uses the official WhatsApp Business Platform Cloud API. We are not affiliated with, sponsored by, or endorsed by WhatsApp Inc. or Meta Platforms, Inc.",
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
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const HERO = {
  eyebrow: "Automated Booking & Management Dashboard",
  headline: "Turn Your Chat\nInto a Booking Engine.",
  highlight: "Booking Engine.",
  subtitle:
    "A custom automated flow that provides customers with an interactive, app-like booking experience natively inside WhatsApp—paired with a cloud dashboard to manage staff, catalogs, and schedules. Done-for-you setup with no coding needed from the business side.",
  kpis: [
    { value: "24/7", label: "Always Available" },
    { value: "Instant", label: "Replies" },
    { value: "Automated", label: "Lead Capture" },
  ],
} as const;

export const PROBLEM_SOLUTION = {
  eyebrow: "Operational Challenges",
  headline: "Designed for Business Owners,\nWithout Technical Overhead",
  subtitle:
    "Managing service catalogs, staff availability, and appointment reminders manually takes valuable time away from service delivery. LoomenDesk provides structured scheduling without requiring clients to install separate apps.",
  without: {
    label: "Without LoomenDesk",
    items: [
      {
        icon: "01",
        title: "Unstructured inbox inquiries",
        desc: "Customers inquiring about services while staff is busy with clients, leading to delayed replies and fragmented conversations.",
      },
      {
        icon: "02",
        title: "Manual scheduling & conflicts",
        desc: "Coordinating staff shifts and appointment slots manually across spreadsheets or paper diaries prone to double-booking.",
      },
      {
        icon: "03",
        title: "Technical configuration overhead",
        desc: "Attempting to implement complex software platforms that require continuous administrative and technical maintenance.",
      },
      {
        icon: "04",
        title: "Manual review follow-ups",
        desc: "Manually reaching out to past clients for feedback, which easily gets overlooked during daily business operations.",
      },
    ],
  },
  with: {
    label: "With LoomenDesk",
    items: [
      {
        icon: "01",
        title: "Interactive catalog within WhatsApp",
        desc: "Clients browse services, select team members, and confirm appointments directly within WhatsApp.",
      },
      {
        icon: "02",
        title: "Centralized management dashboard",
        desc: "Manage service listings, staff schedules, and appointment records from a clean, intuitive dashboard.",
      },
      {
        icon: "03",
        title: "Fully managed technical onboarding",
        desc: "Our engineering team manages configuration, flows, and API connections for a seamless launch.",
      },
      {
        icon: "04",
        title: "Structured follow-ups & reminders",
        desc: "LoomenDesk sends scheduled appointment reminders and optional review requests to opted-in clients.",
      },
    ],
  },
} as const;

export const LEAD_CATCHER = {
  eyebrow: "The Core Software",
  headline: "The LoomenDesk Ecosystem",
  subtitle:
    "A complete solution: An interactive booking interface for clients on WhatsApp, connected to a centralized management dashboard for business administrators.",
  features: [
    "Management Dashboard to control it all",
    "Visual catalogs to showcase service photos and past work",
    "List and sell retail products directly through the flow",
    "Interactive booking flows natively inside WhatsApp",
    "Real-time Google Calendar synchronization",
    "Full access to user data and booking history",
  ],
} as const;

export const PREMIUM_ADDONS = {
  eyebrow: "Communication & Workflow Tools",
  headline: "Essential Utilities\nBuilt Right In",
  subtitle:
    "LoomenDesk helps manage and organize bookings and customer follow-ups across your business.",
  addons: [
    {
      icon: "★",
      title: "Customer Review System",
      tagline: "Collect structured feedback",
      desc: "Send polite post-service follow-up messages asking verified clients for feedback after their completed appointment.",
    },
    {
      icon: "📣",
      title: "Client Broadcasts (Opt-in only)",
      tagline: "Message opted-in clients",
      desc: "Send service updates and announcements exclusively to clients who have opted in via approved WhatsApp templates, with immediate opt-out support.",
    },
    {
      icon: "🔔",
      title: "Automated Reminders",
      tagline: "Reduce missed appointments",
      desc: "Send timely booking confirmations and scheduled reminder notifications to help clients keep their appointments.",
    },
    {
      icon: "ℹ️",
      title: "Structured FAQs",
      tagline: "Direct information",
      desc: "A built-in repository of Frequently Asked Questions that provides instant answers about location, services, and operational hours.",
    },
  ],
} as const;

export const TRUST_FLOW = {
  eyebrow: "Managed Implementation",
  headline: "Comprehensive Setup,\nReady for Operation",
  subtitle:
    "Done-for-you setup with no coding needed from the business side. We handle all configuration, API integrations, and catalog setup so your system is fully operational from day one.",
  nodes: [
    { icon: "1", label: "We structure your catalog and\nbuild the interactive Flow" },
    { icon: "2", label: "We connect the Flow to\nyour verified business line" },
    { icon: "3", label: "We deliver a Management Dashboard\npre-loaded with your data" },
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
    "We are heavily focused on the Salon and Beauty industry, but LoomenDesk's custom architecture adapts to any service business.",
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
    "Loomenfly Labs is shifting the paradigm of local business software. We realized that off-the-shelf booking apps force businesses to change how they work, while traditional custom software development requires prohibitive upfront expense.",
    "So we engineered LoomenDesk as a hybrid platform. We use the official WhatsApp Business Platform to build an interactive booking experience that clients already know how to use, paired with a management dashboard providing full operational control.",
    "Done-for-you setup with no coding needed from the business side. No steep learning curves. Just a structured software ecosystem designed to make managing business bookings straightforward.",
  ],
  values: [
    "Interactive flows that feel like a native app",
    "Complete control via your Management Dashboard",
    "Done-for-you onboarding and technical setup",
    "Built natively for the Salon & Beauty industry first",
  ],
  cardTitle: "Built in Kerala.\nScaling Everywhere.",
  cardDesc:
    "LOOMENFLY LABS LLP (LLPIN: ACZ-5532), registered in Kerala. Founded by Gokul Surendran, MS Mohammed Hashiq, and Saheeda Menamthuruthil Muhammed — Designated Partners.",
} as const;

export const CUSTOM_SOLUTIONS = {
  eyebrow: "The Onboarding Experience",
  headline: "Fully Managed Technical Onboarding",
  subtitle:
    "Loomenfly Labs provides end-to-end technical assistance and onboarding for every business partner.",
  perks: [
    {
      icon: "A",
      title: "Discovery & Requirements",
      desc: "We connect with your team to outline your service menu, pricing structure, and staff availability.",
    },
    {
      icon: "B",
      title: "Catalog Configuration",
      desc: "Our team organizes and inputs all service items, durations, and staff details directly into your dashboard.",
    },
    {
      icon: "C",
      title: "Number Connection",
      desc: "We securely configure the interactive Flow with your official WhatsApp Business Platform API.",
    },
    {
      icon: "D",
      title: "Ready to Launch",
      desc: "A fully operational system designed to streamline incoming bookings.",
    },
  ],
} as const;

export const CONTACT = {
  eyebrow: "Get in Touch",
  headline: "Let's Build\nYour LoomenDesk",
  subtitle:
    "Connect with our team to explore an interactive WhatsApp booking solution and custom management dashboard.",
  methods: [
    { icon: "►", label: "Sales Enquiries — Gokul (CEO)", value: COMPANY.salesEmail, href: `mailto:${COMPANY.salesEmail}` },
    { icon: "►", label: "Technical Lead — Hashiq (CTO)", value: COMPANY.techEmail, href: `mailto:${COMPANY.techEmail}` },
    { icon: "►", label: "Operations — Saheeda (COO)", value: COMPANY.successEmail, href: `mailto:${COMPANY.successEmail}` },
  ],
} as const;

export const FOOTER = {
  description:
    "We build custom software ecosystems powered by the WhatsApp Business Platform and intuitive management dashboards.",
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

export const REVIEWS = {
  eyebrow: "Client Feedback",
  headline: "Trusted by Service Businesses",
  subtitle:
    "See how service businesses use LoomenDesk to organize scheduling and streamline customer communication.",
  items: [
    {
      quote: "LoomenDesk completely organized how we handle our salon bookings. No more double-booking or lost chats in our inbox.",
      author: "Sarah M.",
      role: "Salon Owner",
    },
    {
      quote: "Our customers appreciate the interactive catalog. It feels like a premium app, but they never have to leave the chat.",
      author: "Rahul T.",
      role: "Spa Manager",
    },
    {
      quote: "The automated reminders and review requests help our clinic maintain consistent customer communication.",
      author: "Dr. Ananya",
      role: "Clinic Director",
    },
  ],
} as const;

export const ICON_MAP: Record<string, string> = {};
