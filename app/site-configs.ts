import type { SiteConfig } from "./components/BusinessSite";

export const restaurant: SiteConfig = {
  brand: "Rasa Nusantara",
  initials: "RN",
  tagline: "Authentic flavours, made fresh daily",
  primary: "#b91c1c",
  accent: "#f59e0b",
  heroEmoji: "🍽️",
  hero: { badge: "Café & Restaurant", title: "Where every meal feels like home", sub: "Hearty local & Western favourites, freshly cooked and served with a smile — dine in, take away, or order for delivery.", cta: "Reserve a table" },
  about: { title: "Good food, good company, good vibes", body: "From our signature nasi lemak to slow-cooked rendang and brick-oven pizzas, every dish is prepared fresh to order. Cosy seating, friendly service, and halal-certified — perfect for family meals, catch-ups, or a quiet bite." },
  services: [
    { icon: "🍛", title: "Local Favourites", desc: "Nasi lemak, rendang, laksa & more — the taste of home." },
    { icon: "🍕", title: "Western Mains", desc: "Wood-fired pizzas, pastas, grills & burgers." },
    { icon: "☕", title: "Coffee & Desserts", desc: "Specialty brews, cakes and sweet treats all day." },
    { icon: "🥡", title: "Takeaway & Delivery", desc: "Order ahead or get it delivered to your door." },
    { icon: "🎉", title: "Events & Catering", desc: "Birthdays, gatherings and office catering sorted." },
    { icon: "🌱", title: "Veggie Options", desc: "Plenty of vegetarian & lighter choices too." },
  ],
  highlights: [
    { emoji: "⭐", label: "4.8 on Google" }, { emoji: "🥘", label: "Fresh daily" },
    { emoji: "🕒", label: "Open till late" }, { emoji: "🅿️", label: "Easy parking" },
  ],
  testimonials: [
    { quote: "Best rendang in town, and the staff are so warm. Our family eats here every weekend.", name: "Faridah A." },
    { quote: "Cosy place, great coffee, and the pizza is legit. Highly recommend!", name: "Daniel L." },
  ],
  contact: { line: "Book a table or ask about catering — we'd love to feed you.", area: "Open daily · Klang Valley" },
};

export const gym: SiteConfig = {
  brand: "Apex Fitness",
  initials: "AF",
  tagline: "Programmes for every body & goal",
  primary: "#0f766e",
  accent: "#84cc16",
  heroEmoji: "💪",
  hero: { badge: "Gym & Fitness Studio", title: "Stronger every single day", sub: "Modern equipment, expert coaches and classes for all levels — whether you're starting out or chasing a personal best.", cta: "Start free trial" },
  about: { title: "Train hard. Feel amazing. Belong.", body: "More than a gym — a community. Personal training, group classes, and a welcoming space with everything you need to get fit and stay motivated. Flexible memberships, no hidden fees, cancel anytime." },
  services: [
    { icon: "🏋️", title: "Strength Training", desc: "Free weights, machines & a dedicated lifting zone." },
    { icon: "🧘", title: "Group Classes", desc: "HIIT, yoga, spin & Zumba — something for everyone." },
    { icon: "🎯", title: "Personal Training", desc: "1-on-1 coaching tailored to your goals." },
    { icon: "🥗", title: "Nutrition Guidance", desc: "Simple plans to fuel your progress." },
    { icon: "📲", title: "Member App", desc: "Book classes & track workouts from your phone." },
    { icon: "🚿", title: "Premium Facilities", desc: "Clean showers, lockers & chill-out lounge." },
  ],
  highlights: [
    { emoji: "👟", label: "All levels" }, { emoji: "🕕", label: "Open early–late" },
    { emoji: "❌", label: "No lock-in" }, { emoji: "🅿️", label: "Free parking" },
  ],
  testimonials: [
    { quote: "Lost 8kg in 3 months with the trainers here. The vibe keeps me coming back.", name: "Aiman R." },
    { quote: "Clean, friendly, never overcrowded. The classes are so much fun.", name: "Wei Ling T." },
  ],
  contact: { line: "Claim your free trial session — no commitment, just come try us.", area: "Open 6am–11pm · Klang Valley" },
};

export const lawfirm: SiteConfig = {
  brand: "Tan & Associates",
  initials: "TA",
  tagline: "Clear advice, strong representation",
  primary: "#1e3a5f",
  accent: "#c8a04e",
  heroEmoji: "⚖️",
  hero: { badge: "Law Firm", title: "Trusted legal counsel you can rely on", sub: "Practical, plain-language advice and dependable representation across property, corporate, family and civil matters.", cta: "Book a consultation" },
  about: { title: "Your matter, handled with care and clarity", body: "With years of experience, we cut through legal jargon to give you straight answers and a clear path forward. We're responsive, discreet, and genuinely on your side — from first consultation to final outcome." },
  services: [
    { icon: "🏠", title: "Property & Conveyancing", desc: "SPA, transfers, charges and tenancy matters." },
    { icon: "🏢", title: "Corporate & Commercial", desc: "Company set-up, contracts & agreements." },
    { icon: "👪", title: "Family Law", desc: "Divorce, custody and estate planning." },
    { icon: "📜", title: "Wills & Probate", desc: "Protect your loved ones and your legacy." },
    { icon: "⚖️", title: "Civil Litigation", desc: "Disputes resolved firmly and fairly." },
    { icon: "🤝", title: "Legal Advisory", desc: "On-call guidance for individuals & SMEs." },
  ],
  highlights: [
    { emoji: "🔒", label: "Confidential" }, { emoji: "⚡", label: "Responsive" },
    { emoji: "💬", label: "Plain English" }, { emoji: "📅", label: "By appointment" },
  ],
  testimonials: [
    { quote: "Explained everything clearly and got my property deal closed without stress.", name: "Mr. Chong" },
    { quote: "Professional, prompt and genuinely caring. I felt in safe hands throughout.", name: "Nurul H." },
  ],
  contact: { line: "Book a confidential consultation — let's talk through your options.", area: "By appointment · Kuala Lumpur & Selangor" },
};

export const property: SiteConfig = {
  brand: "Skyline Realty",
  initials: "SR",
  tagline: "Find your perfect place",
  primary: "#0369a1",
  accent: "#f97316",
  heroEmoji: "🏡",
  hero: { badge: "Property Agent", title: "Your next home starts here", sub: "Buy, sell or rent with a local agent who knows the area, negotiates hard, and makes the whole process simple.", cta: "Let's find your property" },
  about: { title: "Local expertise, honest guidance", body: "From first-time buyers to seasoned investors, we match you with the right property and the right price. Transparent advice, hassle-free paperwork, and a network that opens doors others can't." },
  services: [
    { icon: "🔑", title: "Buy a Home", desc: "Curated listings matched to your budget & needs." },
    { icon: "💰", title: "Sell Your Property", desc: "Smart pricing & marketing that gets results." },
    { icon: "📄", title: "Rentals", desc: "Find tenants or your next rental, fuss-free." },
    { icon: "📈", title: "Investment Advisory", desc: "Spot high-potential areas before others do." },
    { icon: "🏦", title: "Loan Assistance", desc: "We connect you with the best financing options." },
    { icon: "🧾", title: "End-to-End Paperwork", desc: "SPA, loan & legal — all coordinated for you." },
  ],
  highlights: [
    { emoji: "📍", label: "Local experts" }, { emoji: "🤝", label: "Honest deals" },
    { emoji: "⚡", label: "Fast service" }, { emoji: "🔍", label: "Verified listings" },
  ],
  testimonials: [
    { quote: "Sold our condo above asking in two weeks. Couldn't believe how smooth it was.", name: "Mr. & Mrs. Lim" },
    { quote: "Patient, knowledgeable and never pushy. Found us the perfect first home.", name: "Syafiq M." },
  ],
  contact: { line: "Tell us what you're looking for — we'll do the legwork.", area: "Serving the Klang Valley" },
};

export const clinic: SiteConfig = {
  brand: "WellCare Clinic",
  initials: "WC",
  tagline: "Caring for your family's health",
  primary: "#0d9488",
  accent: "#38bdf8",
  heroEmoji: "🩺",
  hero: { badge: "Medical Clinic", title: "Friendly, trusted family healthcare", sub: "Walk-in consultations, health screenings and vaccinations — compassionate care for the whole family, close to home.", cta: "Book appointment" },
  about: { title: "Health you can trust, service you'll feel", body: "Our experienced doctors take time to listen and explain. From minor ailments to chronic care and preventive screenings, we're here for your family with short wait times and a warm, modern clinic." },
  services: [
    { icon: "🩺", title: "General Consultation", desc: "Walk-in or booked — quick, attentive care." },
    { icon: "💉", title: "Vaccinations", desc: "Adults & children, travel jabs included." },
    { icon: "🧪", title: "Health Screening", desc: "Blood tests & full body check-up packages." },
    { icon: "🤧", title: "Minor Procedures", desc: "Wound care, stitches & simple treatments." },
    { icon: "❤️", title: "Chronic Care", desc: "Diabetes, hypertension & ongoing management." },
    { icon: "📋", title: "Medical Certificates", desc: "MCs, reports & referrals — done on the spot." },
  ],
  highlights: [
    { emoji: "⏱️", label: "Short waits" }, { emoji: "👨‍⚕️", label: "Caring doctors" },
    { emoji: "💳", label: "Panel-friendly" }, { emoji: "🅿️", label: "Easy parking" },
  ],
  testimonials: [
    { quote: "The doctor actually listened and didn't rush me. Finally a clinic I trust.", name: "Mrs. Devi" },
    { quote: "Brought my kids here for vaccines — gentle, patient and so reassuring.", name: "Hafiz & family" },
  ],
  contact: { line: "Book an appointment or just walk in — we're here to help.", area: "Open daily · Klang Valley" },
};

export const portfolio: SiteConfig = {
  brand: "Sarah Lim",
  initials: "SL",
  tagline: "What I do",
  primary: "#6d28d9",
  accent: "#ec4899",
  heroEmoji: "✨",
  hero: { badge: "Personal Portfolio", title: "Hi, I'm Sarah — I bring ideas to life", sub: "A freelance designer & content creator. This is my space to share my work, my story, and how we can collaborate.", cta: "Work with me" },
  about: { title: "A little about me", body: "I'm a Klang Valley-based creative with a passion for clean design and storytelling. Over the years I've helped brands and individuals look their best online. When I'm not designing, you'll find me with a camera or a good book." },
  services: [
    { icon: "🎨", title: "Brand & Graphic Design", desc: "Logos, identities and visuals that stand out." },
    { icon: "📸", title: "Content Creation", desc: "Photos, reels & posts that get noticed." },
    { icon: "🖥️", title: "Social Media", desc: "Strategy and content that grows your audience." },
    { icon: "✍️", title: "Copywriting", desc: "Words that connect and convert." },
    { icon: "🎤", title: "Speaking & Workshops", desc: "Sharing what I've learned with others." },
    { icon: "🤝", title: "Collaborations", desc: "Open to brand partnerships & projects." },
  ],
  highlights: [
    { emoji: "🏆", label: "5+ yrs experience" }, { emoji: "💼", label: "50+ projects" },
    { emoji: "🌏", label: "Remote-friendly" }, { emoji: "⚡", label: "Quick replies" },
  ],
  testimonials: [
    { quote: "Sarah completely transformed my brand. Professional, creative and a joy to work with.", name: "Aina K." },
    { quote: "Delivered beyond expectations and ahead of schedule. Highly recommended!", name: "Marcus T." },
  ],
  contact: { line: "Got a project or just want to say hi? I'd love to hear from you.", area: "Available for freelance · Worldwide" },
};

export const NEW_TEMPLATES = [
  { slug: "restaurant", label: "Café & Restaurant",      tag: "Food & Beverage",   color: "from-[#b91c1c] to-[#f59e0b]", config: restaurant },
  { slug: "gym",        label: "Gym & Fitness",          tag: "Health & Fitness",  color: "from-[#0f766e] to-[#84cc16]", config: gym },
  { slug: "lawfirm",    label: "Law Firm",               tag: "Professional",      color: "from-[#1e3a5f] to-[#c8a04e]", config: lawfirm },
  { slug: "property",   label: "Property Agent",         tag: "Real Estate",       color: "from-[#0369a1] to-[#f97316]", config: property },
  { slug: "clinic",     label: "Medical Clinic",         tag: "Healthcare",        color: "from-[#0d9488] to-[#38bdf8]", config: clinic },
  { slug: "portfolio",  label: "Personal Portfolio",     tag: "For Individuals",   color: "from-[#6d28d9] to-[#ec4899]", config: portfolio },
];
