/* =====================================================================
   SITE CONTENT — edit this file to change any text, number or entry.
   - Keep the quotes "..." around text.
   - Keep the commas between items.
   - Save, then refresh the page. No other file needs to change.
   ===================================================================== */

window.SITE = {

  /* ---------- Profile & contact ---------- */
  profile: {
    name: "Shehzad Ali",
    firstName: "Shehzad",
    title: "Upwork Business Developer & Growth Consultant",
    headline: "End-to-End Upwork Business Developer",
    subHeadline: ["Profile Setup", "Bidding", "Client Chats", "Team Coordination"],
    signature: "I don't just bid on Upwork projects, I build the pipeline behind them.",
    smallLine: "Multi-niche expertise, strongest in WordPress, Shopify & Design",
    tagline: "Turning pitches into projects and opportunities into revenue.",
    availability: "Available for new opportunities",
    photo: "",            // e.g. "assets/img/shehzad.jpg" — leave "" to show the placeholder
    aboutPhoto: "",       // e.g. "assets/img/shehzad-casual.jpg"
    cv: "",               // e.g. "assets/Shehzad-Ali-CV.pdf" — the Download CV button stays hidden until this is set
    email: "shehzadali1220@gmail.com",
    phone: "+92 313 1063610",
    whatsapp: "923131063610",   // digits only, used for wa.me links
    linkedin: "https://www.linkedin.com/in/shehzadali719",
    github: "https://github.com/Shehzad719",
    calendly: ""          // optional, e.g. "https://calendly.com/shehzad/30min"
  },

  /* ---------- Form delivery ----------
     Leave "" to open the visitor's email app with the message pre-filled.
     To receive submissions directly, create a free form at formspree.io
     (send to shehzadali1220@gmail.com) and paste its URL here.          */
  forms: {
    contactEndpoint: "",
    waitlistEndpoint: ""
  },

  /* ---------- Key numbers (animated) ----------
     value = the number that counts up. Use text instead of value for
     things that should not animate.                                    */
  stats: [
    { prefix: "$", value: 150, suffix: "K+", label: "Generated for clients", feature: true },
    { value: 5, suffix: "+", unit: "years", label: "Experience (2021 – present)" },
    { value: 8, unit: "companies", label: "Worked with" },
    { value: 25, suffix: "+", label: "High-level clients brought in (Synqer Solutions)" },
    { value: 12, unit: "niches", label: "Covered" },
    { text: "Top 1 / Top 3", label: "Upwork search rankings achieved for profiles" },
    { value: 5, suffix: "+", unit: "markets", label: "USA, UK, Canada, UAE, Singapore" }
  ],

  /* ---------- About ---------- */
  about: [
    "I've spent the last five years on the business side of freelancing — hands-on across Upwork, Freelancer.com and Discord — working with MITSOL Incorporation, Humantek, Orhan Digital, Cubicus.io, TechSurge Inc, Web Wire Tech, Synqer Solutions and DeployIT. I support Pakistan-based and international businesses across the USA, UK, Canada, UAE, Singapore and other markets.",
    "My core strength is turning the right profile into the right opportunity: profile optimization and niche positioning, then bidding, client acquisition and long-term account growth. I've taken multiple Upwork profiles into Top 1 and Top 3 search positions for their niches.",
    "Winning the project is only half the job. I manage delivery end to end — requirements, team coordination, task distribution, progress tracking, follow-ups, deadlines and deliverable checks. I grew from lead generation and junior bidding all the way to Head of Sales."
  ],
  platforms: ["Upwork", "Freelancer.com", "Discord"],
  markets: ["USA", "UK", "Canada", "UAE", "Singapore"],

  /* ---------- Career journey (left → right) ---------- */
  journey: [
    "Frontend Developer",
    "Sales Executive",
    "Jr. BD",
    "Upwork/Freelancer BD",
    "Senior BD",
    "Head of Sales",
    "BD & Growth Consultant"
  ],

  /* ---------- Services ----------
     icon: profile | sprout | target | handshake | funnel | kanban | spark */
  services: [
    { icon: "profile",   title: "Upwork Profile Optimization",  text: "Positioning, keywords, Top 1 / Top 3 rankings" },
    { icon: "sprout",    title: "Scratch-Profile Development",  text: "New profiles and niche positioning from zero" },
    { icon: "target",    title: "Targeted Bidding & Proposals", text: "Job hunting and niche-specific proposal strategy" },
    { icon: "handshake", title: "Client Acquisition",           text: "High-value clients and long-term accounts" },
    { icon: "funnel",    title: "Sales & Lead Generation",      text: "Sales strategy, pipeline building, Head of Sales experience" },
    { icon: "kanban",    title: "Project Management",           text: "Team coordination, tracking, deadlines, deliverables" },
    { icon: "spark",     title: "AI × Upwork",                  text: "AI-powered proposal system (Pitch-Studio)", feature: true }
  ],

  /* ---------- Niches (strong: true = highlighted) ---------- */
  niches: [
    { name: "WordPress", strong: true },
    { name: "Shopify", strong: true },
    { name: "Graphic Design", strong: true },
    { name: "CMS" },
    { name: "Web Development" },
    { name: "Frontend Development" },
    { name: "Web3" },
    { name: "Blockchain" },
    { name: "AWS/GCP" },
    { name: "Social Media Marketing" },
    { name: "2D Animation" },
    { name: "3D Animation" }
  ],

  /* ---------- Experience (newest first) ----------
     logo: path to a logo image, or "" to show the initials badge.       */
  experience: [
    {
      role: "Upwork Business Developer & Growth Consultant",
      company: "DeployIT", initials: "DI", logo: "",
      dates: "Aug 2026 – Present", type: "Hybrid · Part-Time",
      points: [
        "Managing and growing selected Upwork profiles, including the recently started Muhammad Salman profile, while contributing to DeployIT's overall growth strategy",
        "Profile positioning, job targeting, proposal strategy, client acquisition and bidding",
        "Strategic consultation to strengthen online presence, generate qualified leads and build a consistent sales pipeline",
        "Brought in a Singapore-based agency client in the initial phase, now interested in a long-term relationship"
      ]
    },
    {
      role: "Upwork Business Developer – Social Media Marketing",
      company: "Synqer Solutions (Texas, USA)", initials: "SQ", logo: "",
      dates: "Jan 2026 – Present", type: "Remote · Part-Time",
      points: [
        "Win projects in Social Media Marketing: organic and paid growth on Instagram, TikTok and LinkedIn",
        "Own the complete Upwork BD process: finding opportunities, targeted proposals, client communication and closing",
        "Helped bring in 25+ high-level clients with a focus on long-term relationships"
      ]
    },
    {
      role: "Upwork Profile Manager & Business Developer",
      company: "Hassan Khan (Graphic Design) & Jawad (CMS)", initials: "HJ", logo: "",
      dates: "4-Month Contract", type: "Contract",
      points: [
        "Managed two Upwork profiles in different niches: positioning, job targeting, proposals, bidding, client communication and growth",
        "Both profiles achieved Top Rated status within 3 months, with $1K and $2K+ earnings"
      ]
    },
    {
      role: "Upwork Business Developer – AWS & GCP",
      company: "Web Wire Tech (USA)", initials: "WW", logo: "",
      dates: "Jan 2025 – Dec 2025", type: "Remote · Part-Time",
      points: [
        "Pursued high-value AWS and GCP cloud projects on Upwork under a 1-year contract",
        "Research, targeted bidding, proposal strategy and client communication for technically complex requirements",
        "Connected the company with clients seeking cloud architecture, infrastructure, DevOps and backend solutions"
      ]
    },
    {
      role: "Upwork Bidder & Project Coordinator",
      company: "TechSurge Inc", initials: "TS", logo: "",
      dates: "Dec 2024 – Nov 2025", type: "Full-Time · Karachi",
      points: [
        "Handled Upwork job hunting, bidding and proposal writing for the company's services",
        "Coordinated between clients and the internal team to keep projects on schedule"
      ]
    },
    {
      role: "Senior Upwork & Freelancer.com BD → Head of Sales",
      company: "Cubicus.io", initials: "CU", logo: "",
      dates: "Jan 2024 – Jun 2025", type: "Full-Time · On-site",
      points: [
        "Web3, Blockchain and CMS projects across Upwork and Freelancer.com, generating $60K+ in business",
        "Managed bidding, proposal strategy, negotiations, client communication and project coordination",
        "Secured $25K+ in project value from key US-based client Pixel.io",
        "Promoted to Head of Sales after 8 months: sales strategy, lead generation and client acquisition"
      ]
    },
    {
      role: "Jr. Upwork Business Developer & Discord Team Lead",
      company: "Orhan Digital", initials: "OD", logo: "",
      dates: "Jul 2022 – Dec 2023", type: "Full-Time · On-site",
      points: [
        "Generated 2D/3D animation and graphic design leads through Discord, coordinating with the design team from lead to delivery",
        "Owned a US-based Upwork profile in the CMS niche: proposals, client communication, coordination and delivery",
        "Generated $40K+ in Upwork earnings while keeping deadlines, quality and communication on track"
      ]
    },
    {
      role: "Sales Executive",
      company: "Humantek", initials: "HT", logo: "",
      dates: "Jan 2022 – Jun 2022", type: "Full-Time · On-site",
      points: [
        "Managed 6 Discord profiles and social media across Facebook, Instagram and Twitter",
        "Handled client conversations and inquiries directly so no potential lead was lost"
      ]
    },
    {
      role: "Frontend Angular Developer & Shopify Theme Designer",
      company: "MITSOL Incorporation", initials: "MI", logo: "",
      dates: "Jan 2021 – Dec 2021", type: "Full-Time · On-site",
      points: [
        "Built responsive web experiences using Angular, React, JavaScript, HTML5 and CSS3",
        "Customized Shopify themes into polished, brand-focused storefronts",
        "Contributed to client projects including Capital Numbers: frontend implementation, UI improvements and theme customizations"
      ]
    }
  ],

  /* ---------- Key achievements ---------- */
  achievements: [
    { big: "$60K+", text: "Business generated at Cubicus.io, promoted to Head of Sales in 8 months" },
    { big: "$40K+", text: "Upwork earnings on a single CMS profile at Orhan Digital" },
    { big: "2 → Top Rated", text: "Two profiles taken to Top Rated in 3 months" },
    { big: "25+", text: "High-level Social Media Marketing clients at Synqer Solutions" }
  ],

  /* ---------- How I work ---------- */
  process: [
    { title: "Profile Audit & Positioning",     text: "Review the profile, niche and keywords so it ranks for the right searches." },
    { title: "Job Targeting & Research",        text: "Shortlist the jobs worth bidding on and study each client before writing." },
    { title: "Proposal Strategy & Bidding",     text: "Niche-specific proposals that answer the brief, not templates." },
    { title: "Client Communication & Closing",  text: "Handle the chats, calls and negotiation through to a signed contract." },
    { title: "Project Coordination & Delivery", text: "Brief the team, track progress and check deliverables before they ship." },
    { title: "Long-Term Account Growth",        text: "Turn first projects into repeat work, reviews and long-term accounts." }
  ],

  /* ---------- Pitch-Studio ---------- */
  pitchStudio: {
    status: "In Development",
    description: "An AI-powered proposal and sales system that generates niche-specific proposals, helping freelancers write stronger pitches, improve response rates and convert more opportunities into projects.",
    mission: "Help 500 freelancers reach $1K+ within 90 days through profile optimization, positioning, proposal strategy and scalable client acquisition systems."
  },

  /* ---------- Skills ---------- */
  skills: [
    { group: "Upwork & Sales", items: ["Proposal Writing", "Bidding", "Job Hunting", "Client Communication", "Negotiation", "Account Growth", "Profile Management"] },
    { group: "Business Development", items: ["Lead Generation", "Sales Strategy", "Pipeline Building", "Client Relationships"] },
    { group: "Project Management", items: ["Requirement Gathering", "Team Coordination", "Task Tracking", "Deadline Management", "Deliverable Checks"] },
    { group: "Technical", items: ["MERN/MEAN", "CMS", "AWS/GCP", "Frontend/Backend Development", "WordPress/Shopify"] },
    { group: "Platforms", items: ["Upwork", "Freelancer.com", "Discord"] },
    { group: "Soft Skills", items: ["Communication", "Negotiation", "Problem Solving", "Ownership"] }
  ],

  /* ---------- Education ---------- */
  education: [
    { title: "BS Computer Science", place: "Virtual University", note: "In Progress" },
    { title: "Web & Mobile App Development", place: "Saylani Mass IT Training (SMIT)", note: "" },
    { title: "Web Development", place: "Aptech", note: "6 Months" },
    { title: "Intermediate (Pre-Engineering)", place: "Bahria College", note: "" },
    { title: "Matriculation", place: "Al Rehman School", note: "" }
  ],

  /* ---------- Testimonials ----------
     Leave empty [] to show the "coming soon" placeholders. Example:
     { quote: "Shehzad took our profile to Top Rated...", name: "Client Name", role: "Founder, Company", photo: "" } */
  testimonials: []
};
