import {
  ally,
  amazon,
  appleLogo,
  claude,
  cocaCola,
  confidence,
  contact,
  google,
  ibm,
  lowes,
  microsoftIcon,
  oracle,
  pierre,
  searchJob,
  stripe,
  ups,
  user1,
  user10,
  user11,
  user12,
  user2,
  user3,
  user4,
  user5,
  user6,
  user7,
  user8,
  user9,
} from "../assets/index";

const SUCCESS_STORIES_DATA = [
  {
    id: 1,
    image: user1,
    name: "Rahul Sharma",
    userName: "@rahulsharma",
    description:
      "Landed my dream role as a Senior Developer at Microsoft! The platform's job alerts helped me find the perfect H1-B opportunity within 2 months of searching.",
  },
  {
    id: 2,
    image: user2,
    name: "Priya Patel",
    userName: "@priyapatel",
    description:
      "Found a Product Manager role at Amazon with full Green Card sponsorship. The verified job listings saved me countless hours of research and application time.",
  },
  {
    id: 3,
    image: user3,
    name: "Aditya Kumar",
    userName: "@adityak",
    description:
      "From Bangalore to Bay Area in 3 months! Got multiple H1-B offers thanks to the platform's extensive database of pre-verified sponsoring companies.",
  },
  {
    id: 4,
    image: user4,
    name: "Neha Gupta",
    userName: "@nehagupta",
    description:
      "Secured a Senior Data Scientist position at Google with full visa support. The recruiter outreach templates were incredibly effective!",
  },
  {
    id: 5,
    image: user5,
    name: "Vikram Singh",
    userName: "@vikrams",
    description:
      "This platform made my Green Card journey possible! Found a Software Architect role at Meta that aligned perfectly with my career goals.",
  },
  {
    id: 6,
    image: user6,
    name: "Ananya Reddy",
    userName: "@ananyar",
    description:
      "Transitioned from H1-B to Green Card through a fantastic opportunity at Apple. The job listings are always current and verified!",
  },
  {
    id: 7,
    image: user7,
    name: "Rohan Mehta",
    userName: "@rohanm",
    description:
      "Found my role as ML Engineer at Netflix within weeks. The platform's filtering system helped me focus only on companies with strong visa sponsorship track records.",
  },
  {
    id: 8,
    image: user8,
    name: "Kavita Desai",
    userName: "@kavitad",
    description:
      "Successfully relocated from Hyderabad to Seattle! The platform's salary insights helped me negotiate a competitive offer at Oracle.",
  },
  {
    id: 9,
    image: user9,
    name: "Arjun Malhotra",
    userName: "@arjunm",
    description:
      "Got my dream job at Salesforce with H1-B sponsorship. The application tracking feature kept my job search organized and effective.",
  },
  {
    id: 10,
    image: user10,
    name: "Shreya Shah",
    userName: "@shreyas",
    description:
      "Landed a Technical Lead position at Adobe with Green Card sponsorship. The platform's company verification system gave me confidence in every application.",
  },
  {
    id: 11,
    image: user11,
    name: "Karthik Rajan",
    userName: "@karthikr",
    description:
      "From contract to full-time at Intel with visa sponsorship! The platform's insights into company sponsorship history were invaluable.",
  },
  {
    id: 12,
    image: user12,
    name: "Divya Krishnan",
    userName: "@divyak",
    description:
      "Secured a Senior Frontend role at Twitter in just 6 weeks. The exclusive job listings and visa sponsorship data made all the difference!",
  },
];

const WATCH_ACTION_ACCORDION_DATA = [
  {
    title: "Is this really free?",
    image: "💰",
    description:
      "One-time payment of ₹899 only. No hidden fees, no subscriptions.",
  },
  {
    title: "Are these jobs really visa-sponsored?",
    image: "",
    description:
      "Yes! Every job listing is verified by the US Government. We only show positions from companies with proven visa sponsorship history.",
  },
  {
    title: "Do I need to be in the USA already?",
    image: "🌏",
    description:
      "Not at all! Our platform works for both professionals in India and those already in the USA.",
  },
  {
    title: "Are the recruiter contacts real?",
    image: "",
    description:
      "100% real and verified. Each listing includes the actual recruiter's email who handled the visa case.",
  },
  {
    title: "How often are jobs updated?",
    image: "✨",
    description: "Fresh jobs added weekly. The early bird gets the visa! 🦅",
  },
  {
    title: "What if the recruiter doesn't reply?",
    image: "",
    description:
      "With 600,000+ positions, you've got plenty of options. Keep trying - your perfect match is waiting!",
  },
  {
    title: "Do you guarantee I'll get a job?",
    image: "",
    description:
      "While we can't guarantee job offers, we guarantee all listings are from companies that actually sponsor visas.",
  },
  {
    title: "How long do I have access?",
    image: "🔑",
    description:
      "Forever! One payment = lifetime access to our regularly updated database.",
  },
];

const VISA_TYPES_CHECKBOXES = [
  {
    label: "🌎 H-1B",
    value: "H-1B",
  },
  {
    label: "🏠 Green Card",
    value: "greencard",
  },
  {
    label: "🇦🇺 E-3",
    value: "E-3 AUSTRALIAN",
  },
  {
    label: "🇨🇱 H-1B1",
    value: "H-1B1 Chile",
  },
  {
    label: "🇸🇬 H-1B1",
    value: "H-1B1 Singapore",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    title: "Search Jobs",
    description:
      "Browse through 600,000+ verified positions from US companies with proven visa sponsorship history. Filter by role, location, and salary.",
    image: searchJob,
  },
  {
    title: "Get Direct Contacts",
    description:
      "Access verified recruiter email addresses from companies actively hiring international talent. No intermediaries, reach decision-makers directly.",
    image: contact,
  },
  {
    title: "Apply with Confidence",
    description:
      "Reach out to recruiters knowing these companies have successfully sponsored visas before. Each job listing is verified by US Government.",
    image: confidence,
  },
];

const WATCH_ACTION_FIRST_CAROUSEL = [
  {
    image: google,
  },
  {
    image: microsoftIcon,
  },
  {
    image: appleLogo,
  },
  {
    image: stripe,
  },
  {
    image: ally,
  },
];

const WATCH_ACTION_SECOND_CAROUSEL = [
  {
    image: lowes,
  },
  {
    image: ibm,
  },
  {
    image: cocaCola,
  },
  {
    image: pierre,
  },
];

const WATCH_ACTION_THIRD_CAROUSEL = [
  {
    image: oracle,
  },
  {
    image: ups,
  },
  {
    image: claude,
  },
  {
    image: amazon,
  },
];
export {
  SUCCESS_STORIES_DATA,
  WATCH_ACTION_ACCORDION_DATA,
  VISA_TYPES_CHECKBOXES,
  WATCH_ACTION_FIRST_CAROUSEL,
  HOW_IT_WORKS_STEPS,
  WATCH_ACTION_SECOND_CAROUSEL,
  WATCH_ACTION_THIRD_CAROUSEL,
};
