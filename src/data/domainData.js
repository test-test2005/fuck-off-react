/**
 * Domain-specific Dynamic Data Source
 * Powers:
 * - E-Commerce: Tech, Food (Restaurant), Fashion
 * - Services: School, College (Collage), IT Firm (IT Infrastructure), Hospital (Medical Clinic)
 * 100% Offline-ready local images from /images/
 */

export const DOMAINS = {
  // ==========================================
  // E-COMMERCE: TECH
  // ==========================================
  tech: {
    id: "tech",
    type: "ecom",
    title: "Next-Gen Tech & Electronics Store",
    brand: "NEXUS TECH GEAR",
    tagline: "High-performance computing, mobile devices, and intelligent consumer electronics.",
    phone: "+880 1712-889900",
    email: "support@nexustech.com",
    address: "Level 5, Silicon Tower, Tech Zone, Dhaka 1216",
    ctaText: "Shop New Tech",
    categories: ["All", "Laptops", "Smartphones", "Audio", "Smartwear", "Accessories"],
    slides: [
      {
        title: "Ultra Performance M4 Pro Workstations",
        tagline: "Engineered for AI developers, 3D artists, and heavy multitasking powerhouses.",
        img: "/images/banner-ecom-1.jpg",
        tag: "FLAGSHIP 2026"
      },
      {
        title: "Hi-Res Spatial Audio Headphones",
        tagline: "Active noise cancellation with 48-hour ultra battery life and titanium drivers.",
        img: "/images/banner-ecom-2.jpg",
        tag: "TOP RATED"
      },
      {
        title: "Next-Gen 5G Ultra Flagship Devices",
        tagline: "Experience ultra-fast connectivity with dynamic 144Hz AMOLED displays.",
        img: "/images/banner-ecom-3.jpg",
        tag: "LIMITED DROP"
      }
    ],
    items: [
      {
        id: 201,
        title: "TitanBook Ultra 16 M4 Max",
        category: "Laptops",
        price: 2499,
        originalPrice: 2899,
        discountBadge: "SAVE 14%",
        rating: 4.9,
        reviewsCount: 128,
        image: "/images/item-1.jpg",
        desc: "32-Core GPU, 64GB Unified Memory, Liquid Retina XDR screen with 1600 nits peak brightness.",
        specs: ["M4 Max Silicon", "64GB Unified RAM", "2TB NVMe PCIe 5.0", "Liquid Retina XDR"]
      },
      {
        id: 202,
        title: "Aura ANC Spatial Pro Headphones",
        category: "Audio",
        price: 349,
        originalPrice: 429,
        discountBadge: "SAVE 19%",
        rating: 4.8,
        reviewsCount: 94,
        image: "/images/item-2.jpg",
        desc: "Bespoke acoustic cavity, lossless wireless audio streaming, and personalized ear tracking.",
        specs: ["Active Noise Cancelling", "48h Playtime", "Lossless Bluetooth 5.4", "Memory Foam Pads"]
      },
      {
        id: 203,
        title: "Apex Neo 5G Snapdragon Gen 3",
        category: "Smartphones",
        price: 999,
        originalPrice: 1199,
        discountBadge: "HOT DEAL",
        rating: 4.7,
        reviewsCount: 215,
        image: "/images/item-3.jpg",
        desc: "200MP periscope telephoto sensor, 120W HyperCharge, IP68 ceramic shield construction.",
        specs: ["Snapdragon 8 Gen 3", "200MP Camera", "5400mAh Battery", "144Hz AMOLED"]
      },
      {
        id: 204,
        title: "Pulse Ultra Titanium Smartwatch",
        category: "Smartwear",
        price: 499,
        originalPrice: 599,
        discountBadge: "TRENDING",
        rating: 4.9,
        reviewsCount: 76,
        image: "/images/item-4.jpg",
        desc: "Sapphire glass, ECG and continuous SpO2 biometric sensors with dual-frequency GPS mapping.",
        specs: ["Titanium Chassis", "Sapphire Crystal", "Dual-Band GPS", "100m Water Resistant"]
      },
      {
        id: 205,
        title: "Quantum 4K HDR Creator Monitor 32-inch",
        category: "Accessories",
        price: 899,
        originalPrice: 1049,
        discountBadge: "OFFER",
        rating: 4.8,
        reviewsCount: 62,
        image: "/images/item-5.jpg",
        desc: "100% DCI-P3 color gamut, Thunderbolt 4 96W power delivery, and factory calibrated Delta E < 1.",
        specs: ["4K UHD IPS Panel", "Delta E < 1", "Thunderbolt 4 Hub", "Ergonomic Pivot Stand"]
      },
      {
        id: 206,
        title: "MechPro Wireless Ergonomic Keyboard",
        category: "Accessories",
        price: 189,
        originalPrice: 229,
        discountBadge: "NEW",
        rating: 4.6,
        reviewsCount: 88,
        image: "/images/item-6.jpg",
        desc: "Hot-swappable tactile switches, gasket-mounted sound dampening, CNC anodized aluminum case.",
        specs: ["Hot-Swappable Gateron", "CNC Aluminum Body", "RGB Per-Key Backlight", "Triple Connectivity"]
      }
    ],
    brands: ["Apple", "Samsung", "Sony", "Dell", "Asus", "Logitech"],
    about: {
      history: "Founded in 2018, Nexus Tech Gear has grown to become the premier certified distributor of high-performance developer laptops and spatial audio.",
      mission: "To equip engineers, designers, and creators with authentic, reliable, and cutting-edge hardware for maximum productivity.",
      vision: "Leading the global transition into next-generation intelligent computing and accessible workstation excellence."
    },
    testimonials: [
      {
        name: "Tanvir Ahmed",
        role: "Senior Software Architect",
        comment: "The TitanBook Ultra arrived in pristine packaging with 100% genuine warranty. Outstanding tech service!"
      },
      {
        name: "Nusrat Jahan",
        role: "Digital Content Producer",
        comment: "Aura ANC headphones block out all ambient studio noise. The crisp highs and rich bass are phenomenal."
      }
    ]
  },

  // ==========================================
  // E-COMMERCE: FOOD (RESTAURANT)
  // ==========================================
  food: {
    id: "food",
    type: "ecom",
    title: "Le Bistro Gourmet Restaurant",
    brand: "LE BISTRO RESTAURANT",
    tagline: "Authentic culinary craftsmanship, wood-fired artisan recipes, and fresh farm-to-table cuisine.",
    phone: "+880 1711-223344",
    email: "chef@lebistro-dhaka.com",
    address: "Plot 18, Road 11, Banani C/A, Dhaka 1213",
    ctaText: "Order Food Now",
    categories: ["All", "Main Course", "Woodfire Pizzas", "Steaks", "Desserts", "Beverages"],
    slides: [
      {
        title: "Handcrafted Artisan Truffle Wagyu Ribeye",
        tagline: "Charcoal grilled to medium-rare perfection with rosemary butter and garlic confit.",
        img: "/images/banner-food-1.jpg",
        tag: "CHEF SPECIAL"
      },
      {
        title: "Stone-Baked Neapolitan Woodfire Pizzas",
        tagline: "Slow-fermented sourdough crust topped with San Marzano tomatoes and buffalo mozzarella.",
        img: "/images/banner-food-2.jpg",
        tag: "FRESH DAILY"
      },
      {
        title: "Artisanal Desserts & Wild Berry Pastries",
        tagline: "Indulge your sweet tooth with Belgian chocolate ganache and Madagascar vanilla bean glaze.",
        img: "/images/banner-food-3.jpg",
        tag: "GOURMET SELECTION"
      }
    ],
    items: [
      {
        id: 301,
        title: "Truffle Wagyu Ribeye Steak (350g)",
        category: "Steaks",
        price: 1850,
        originalPrice: 2200,
        discountBadge: "CHEF CHOICE",
        rating: 4.9,
        reviewsCount: 164,
        image: "/images/food-1.jpg",
        desc: "Prime grade Wagyu ribeye steak seared with thyme, garlic butter, and smoked Himalayan salt.",
        specs: ["A5 Marble Score", "Woodfire Charred", "Truffle Herb Butter", "Hand-cut Truffle Fries"]
      },
      {
        id: 302,
        title: "Pan-Seared Atlantic Glazed Salmon",
        category: "Main Course",
        price: 1450,
        originalPrice: 1700,
        discountBadge: "HEALTHY",
        rating: 4.8,
        reviewsCount: 112,
        image: "/images/food-2.jpg",
        desc: "Fresh wild Atlantic salmon fillet glazed with honey dijon reduction on a bed of asparagus.",
        specs: ["Wild Atlantic Catch", "Omega-3 Rich", "Honey Dijon Glaze", "Steamed Saffron Rice"]
      },
      {
        id: 303,
        title: "Woodfire Margherita Di Bufala Pizza",
        category: "Woodfire Pizzas",
        price: 980,
        originalPrice: 1150,
        discountBadge: "BESTSELLER",
        rating: 4.9,
        reviewsCount: 230,
        image: "/images/food-3.jpg",
        desc: "48-hour fermented sourdough dough, San Marzano tomato puree, fresh basil, and extra virgin olive oil.",
        specs: ["Woodfire Baked at 450C", "Campania Buffalo Mozzarella", "San Marzano D.O.P", "Fresh Basil"]
      },
      {
        id: 304,
        title: "Artisan Wild Berry Vanilla Cheesecake",
        category: "Desserts",
        price: 550,
        originalPrice: 650,
        discountBadge: "SWEET PICK",
        rating: 4.9,
        reviewsCount: 185,
        image: "/images/food-4.jpg",
        desc: "Creamy baked New York style cheesecake with crushed graham biscuit base and tart berry compote.",
        specs: ["Philadelphia Cream Cheese", "Graham Crust", "Organic Berry Compote", "Madagascar Vanilla"]
      },
      {
        id: 305,
        title: "Crispy Golden Calamari Fritti",
        category: "Main Course",
        price: 750,
        originalPrice: 890,
        discountBadge: "CRISPY",
        rating: 4.7,
        reviewsCount: 98,
        image: "/images/food-1.jpg",
        desc: "Tender squid rings coated in light semolina seasoning, served with homemade roasted garlic aioli.",
        specs: ["Fresh Coastal Squid", "House Tartar Aioli", "Lemon Pepper Seasoning", "Gluten-Free Flour Option"]
      },
      {
        id: 306,
        title: "Forest Mushroom Truffle Risotto",
        category: "Main Course",
        price: 1120,
        originalPrice: 1300,
        discountBadge: "SIGNATURE",
        rating: 4.8,
        reviewsCount: 140,
        image: "/images/food-2.jpg",
        desc: "Creamy Carnaroli arborio rice cooked with porcini broth, shaved Parmigiano-Reggiano, and white truffle oil.",
        specs: ["Aged Carnaroli Rice", "Wild Porcini Mushrooms", "24-Month Parmigiano", "White Truffle Oil"]
      }
    ],
    brands: ["Michelin Selected", "Halal Certified", "Farm Direct", "Organic Harvest"],
    about: {
      history: "Established in 2015, Le Bistro has brought traditional European woodfire culinary techniques and artisan bakery to food lovers.",
      mission: "To serve freshly harvested, organic, and ethically sourced meals cooked to order with passion and uncompromising flavor.",
      vision: "Setting the benchmark for contemporary gourmet dining and community hospitality."
    },
    testimonials: [
      {
        name: "Chef Fahim Chowdhury",
        role: "Culinary Reviewer",
        comment: "The Truffle Wagyu steak is cooked with surgical precision. The flavors are balanced, bold, and luxurious."
      },
      {
        name: "Sadia Rahman",
        role: "Food Blogger",
        comment: "Best authentic Neapolitan pizza in town! The blistered crust and fresh mozzarella take you straight to Italy."
      }
    ]
  },

  // ==========================================
  // E-COMMERCE: FASHION
  // ==========================================
  fashion: {
    id: "fashion",
    type: "ecom",
    title: "Vogue Elegance Fashion House",
    brand: "VOGUE COUTURE",
    tagline: "Timeless contemporary fashion, bespoke tailoring, and luxury everyday wardrobe essentials.",
    phone: "+880 1713-445566",
    email: "style@voguecouture.com",
    address: "Road 12, Block D, Gulshan 1, Dhaka 1212",
    ctaText: "Shop Collection",
    categories: ["All", "Men", "Women", "Jackets", "Denim", "Footwear"],
    slides: [
      {
        title: "Autumn & Winter Sartorial Collection",
        tagline: "Premium Italian wool blazers, cashmere overcoats, and structured seasonal outerwear.",
        img: "/images/banner-ecom-2.jpg",
        tag: "NEW SEASON"
      },
      {
        title: "Modern Minimalist Denim & Streetwear",
        tagline: "Sustainable Japanese selvedge denim built to age with personal character.",
        img: "/images/banner-ecom-1.jpg",
        tag: "LIMITED EDITION"
      },
      {
        title: "Handcrafted Luxury Leather Footwear",
        tagline: "Goodyear welted Chelsea boots and dress shoes tailored from top-grain leather.",
        img: "/images/banner-ecom-3.jpg",
        tag: "EXCLUSIVE"
      }
    ],
    items: [
      {
        id: 401,
        title: "Tailored Italian Wool Double-Breasted Blazer",
        category: "Men",
        price: 8500,
        originalPrice: 11000,
        discountBadge: "SAVE 23%",
        rating: 4.9,
        reviewsCount: 78,
        image: "/images/item-1.jpg",
        desc: "Crafted from Super 120s Italian wool with horn buttons, pick stitching, and full cupro lining.",
        specs: ["100% Italian Wool", "Cupro Breathable Lining", "Natural Horn Buttons", "Bespoke Cut"]
      },
      {
        id: 402,
        title: "Pure Cashmere Turtleneck Sweater",
        category: "Women",
        price: 4900,
        originalPrice: 6200,
        discountBadge: "LUXURY",
        rating: 4.8,
        reviewsCount: 65,
        image: "/images/item-2.jpg",
        desc: "2-ply Mongolian cashmere offering feather-light insulation with cloud-soft hand feel.",
        specs: ["Grade-A Cashmere", "Ribbed Cuffs & Hem", "Thermal Insulation", "Anti-Pilling Finish"]
      },
      {
        id: 403,
        title: "Raw Selvedge Denim Heritage Jacket",
        category: "Jackets",
        price: 5800,
        originalPrice: 7200,
        discountBadge: "TRENDING",
        rating: 4.7,
        reviewsCount: 89,
        image: "/images/item-3.jpg",
        desc: "14oz shuttle-loomed selvedge denim featuring copper rivets and custom brass shank hardware.",
        specs: ["14oz Kurabo Selvedge", "Solid Brass Hardware", "Chain-Stitched Hems", "Raw Indigo Dye"]
      },
      {
        id: 404,
        title: "Handcrafted Goodyear Welted Chelsea Boots",
        category: "Footwear",
        price: 7400,
        originalPrice: 9500,
        discountBadge: "BESTSELLER",
        rating: 4.9,
        reviewsCount: 110,
        image: "/images/item-4.jpg",
        desc: "French calfskin leather uppers with Dainite studded rubber soles for all-weather traction.",
        specs: ["French Calfskin", "Goodyear Welt 360", "Dainite Rubber Outsole", "Cork Bed Insole"]
      }
    ],
    brands: ["Vogue Studio", "Milano Sartoria", "Selvedge Works", "Heritage Leather"],
    about: {
      history: "Crafted in 2017, Vogue Couture has blended bespoke tailoring with contemporary streetwear.",
      mission: "To inspire timeless confidence through sustainable, enduring, and elegantly styled wardrobe staples.",
      vision: "Leading sustainable luxury and craftsmanship into every modern wardrobe."
    },
    testimonials: [
      {
        name: "Arman Malik",
        role: "Corporate Executive",
        comment: "The wool blazer fit is razor sharp. The stitching and shoulder structure match luxury Savile Row standards."
      }
    ]
  },

  // ==========================================
  // SERVICE: SCHOOL
  // ==========================================
  school: {
    id: "school",
    type: "service",
    title: "European International Cambridge School",
    brand: "CAMBRIDGE SCHOOL",
    tagline: "Nurturing global leaders with certified STEM education, creative arts, and character development.",
    phone: "+880 1715-667788",
    email: "admissions@cambridgeschool-bd.org",
    address: "Plot 45, Education Enclave, Uttara Sector 11, Dhaka 1230",
    ctaText: "Apply For Admission",
    categories: ["All", "Early Years", "Primary Section", "Middle School", "O-Level STEM", "Extracurricular"],
    slides: [
      {
        title: "World-Class Cambridge Curriculum & STEM Labs",
        tagline: "Empowering children with inquiry-based learning, robotics, and bilingual communication.",
        img: "/images/banner-edu-1.jpg",
        tag: "ACCREDITED 2026"
      },
      {
        title: "Inspiring Arts, Sports & Athletic Facilities",
        tagline: "Olympic standard indoor swimming pool, FIFA astro turf, and dedicated performing arts auditorium.",
        img: "/images/banner-edu-2.jpg",
        tag: "HOLISTIC GROWTH"
      },
      {
        title: "Admissions Open for Academic Year 2026-2027",
        tagline: "Join a diverse international community with 100% university progression track record.",
        img: "/images/banner-edu-3.jpg",
        tag: "OPEN ENROLLMENT"
      }
    ],
    items: [
      {
        id: 501,
        title: "Cambridge Primary STEM & Coding Foundations",
        category: "Primary Section",
        price: 12000,
        originalPrice: 15000,
        discountBadge: "POPULAR",
        rating: 4.9,
        reviewsCount: 142,
        image: "/images/edu-1.jpg",
        desc: "Hands-on foundation in mathematics, natural sciences, and computational thinking using Scratch.",
        specs: ["Cambridge Primary Code", "Robotics Kit Included", "1:15 Teacher-Student Ratio", "Smart Classroom"]
      },
      {
        id: 502,
        title: "Middle School English Literature & Debate",
        category: "Middle School",
        price: 13500,
        originalPrice: 16000,
        discountBadge: "HONORS",
        rating: 4.8,
        reviewsCount: 96,
        image: "/images/edu-2.jpg",
        desc: "Critical reading, creative writing, and public speaking coaching for inter-school MUN competitions.",
        specs: ["Certified Cambridge Faculty", "Model UN Training", "Library Research Access", "Weekly Presentations"]
      },
      {
        id: 503,
        title: "O-Level Physics, Chemistry & Higher Math Suite",
        category: "O-Level STEM",
        price: 18000,
        originalPrice: 22000,
        discountBadge: "FLAGSHIP",
        rating: 5.0,
        reviewsCount: 180,
        image: "/images/edu-3.jpg",
        desc: "Rigorous laboratory experiments and exam-oriented problem-solving for Cambridge CAIE O-Levels.",
        specs: ["Modern Chemistry & Physics Labs", "Past Paper Exam Clinics", "A* Track Record", "Individual Mentorship"]
      },
      {
        id: 504,
        title: "Junior Swimming & Competitive Athletics Club",
        category: "Extracurricular",
        price: 4500,
        originalPrice: 6000,
        discountBadge: "ACTIVE",
        rating: 4.7,
        reviewsCount: 64,
        image: "/images/edu-4.jpg",
        desc: "Coached by national aquatic federation certified trainers in a temperature-controlled indoor pool.",
        specs: ["Certified Coaches", "Lifeguard Monitored", "Inter-School Tournaments", "Fitness Assessments"]
      }
    ],
    brands: ["Cambridge Assessment International Education", "British Council Partner", "Edexcel Approved", "ISO 21001 Certified"],
    about: {
      history: "Founded in 2010, Cambridge School has fostered over 15 cohorts of students achieving global outstanding learner awards.",
      mission: "To inspire curiosity, ethical leadership, and academic excellence in an inclusive and dynamic learning environment.",
      vision: "Empowering visionary global citizens with holistic STEM, artistic, and athletic capabilities."
    },
    testimonials: [
      {
        name: "Dr. Farhana Yasmin",
        role: "Parent of Grade 7 Student",
        comment: "My daughter gained tremendous confidence in public speaking and math competitions. Excellent school!"
      }
    ]
  },

  // ==========================================
  // SERVICE: COLLEGE (COLLAGE)
  // ==========================================
  collage: {
    id: "collage",
    type: "service",
    title: "Metropolitan University College",
    brand: "METROPOLITAN COLLEGE",
    tagline: "Premier undergraduate & graduate degrees fostering innovation, research, and industry career readiness.",
    phone: "+880 1716-778899",
    email: "info@metrocollege-edu.com",
    address: "Block B, Academic Square, Dhanmondi 27, Dhaka 1209",
    ctaText: "Explore Degree Programs",
    categories: ["All", "Computer Science", "Business Administration", "Electrical Engineering", "Data Science", "Economics"],
    slides: [
      {
        title: "BSc in Computer Science & Artificial Intelligence",
        tagline: "Industry-aligned curriculum with enterprise software labs and global cloud certification programs.",
        img: "/images/banner-edu-2.jpg",
        tag: "TOP RANKED"
      },
      {
        title: "Master of Business Administration (Executive MBA)",
        tagline: "Designed for corporate leaders to master strategic finance, digital transformation, and marketing analytics.",
        img: "/images/banner-edu-3.jpg",
        tag: "CAREER ACCELERATION"
      },
      {
        title: "Pioneering Research Centers & Innovation Incubators",
        tagline: "Collaborative research partnerships with European technology hubs and multinational institutes.",
        img: "/images/banner-edu-1.jpg",
        tag: "RESEARCH EXCELLENCE"
      }
    ],
    items: [
      {
        id: 601,
        title: "BSc in Computer Science & Engineering (CSE)",
        category: "Computer Science",
        price: 45000,
        originalPrice: 55000,
        discountBadge: "IEB ACCREDITED",
        rating: 4.9,
        reviewsCount: 310,
        image: "/images/edu-1.jpg",
        desc: "144 Credits program spanning algorithms, distributed cloud systems, machine learning, and compiler design.",
        specs: ["IEB Accredited", "144 Credits Duration", "Cloud Computing Labs", "Mandatory Industry Internship"]
      },
      {
        id: 602,
        title: "Bachelor of Business Administration (BBA)",
        category: "Business Administration",
        price: 38000,
        originalPrice: 46000,
        discountBadge: "AACSB TRACK",
        rating: 4.8,
        reviewsCount: 220,
        image: "/images/edu-2.jpg",
        desc: "Specializations in Financial Analysis, Digital Marketing, FinTech, and International Supply Chain Management.",
        specs: ["ACCA Fast Track Exemption", "Bloomberg Terminal Lab", "Corporate Guest Lectures", "Case Study Methodology"]
      },
      {
        id: 603,
        title: "BSc in Electrical & Electronic Engineering (EEE)",
        category: "Electrical Engineering",
        price: 44000,
        originalPrice: 52000,
        discountBadge: "HIGH DEMAND",
        rating: 4.7,
        reviewsCount: 165,
        image: "/images/edu-3.jpg",
        desc: "Power engineering, telecommunications, embedded microcontroller systems, and renewable green energy labs.",
        specs: ["High Voltage Lab", "VLSI & FPGA Stations", "Solar Energy Pilot Facility", "Robotics Club Access"]
      },
      {
        id: 604,
        title: "MSc in Applied Data Science & Big Data",
        category: "Data Science",
        price: 48000,
        originalPrice: 58000,
        discountBadge: "POSTGRADUATE",
        rating: 4.9,
        reviewsCount: 195,
        image: "/images/edu-4.jpg",
        desc: "Advanced neural networks, generative AI modeling, real-time streaming architectures, and statistical inference.",
        specs: ["NVIDIA GPU Cluster", "Apache Spark Workflows", "Thesis or Capstone Track", "Weekend Evening Batches"]
      }
    ],
    brands: ["University Grants Commission", "IEB Accredited", "IEEE Student Branch", "Erasmus+ Partner"],
    about: {
      history: "Chartered as a center of higher education, Metropolitan College has empowered thousands of engineers, business innovators, and researchers.",
      mission: "To deliver transformative education, pioneering research, and industry-partnered career advancement.",
      vision: "To be recognized as a world-class higher education institution shaping the future of global industries."
    },
    testimonials: [
      {
        name: "Kazi Nabil",
        role: "Software Engineer at Google",
        comment: "The rigorous CSE curriculum and algorithms lab at Metropolitan College laid the absolute groundwork for my career."
      }
    ]
  },

  // ==========================================
  // SERVICE: IT FIRM / IT INFRASTRUCTURE
  // ==========================================
  itfirm: {
    id: "itfirm",
    type: "service",
    title: "CyberNet Enterprise IT & Cloud Solutions",
    brand: "CYBERNET IT SOLUTIONS",
    tagline: "Enterprise cloud migration, cybersecurity defense, Kubernetes DevOps, and mission-critical software engineering.",
    phone: "+880 1718-990011",
    email: "enterprise@cybernet-it.com",
    address: "Tower 7, Software Technology Park, Kawran Bazar, Dhaka 1215",
    ctaText: "Request Technical Consultation",
    categories: ["All", "Cloud Infrastructure", "Cybersecurity", "Custom Software", "DevOps & CI/CD", "Database Engineering"],
    slides: [
      {
        title: "Enterprise Multi-Cloud Architecture & Migration",
        tagline: "Zero-downtime database and container migrations across AWS, Google Cloud, and Microsoft Azure.",
        img: "/images/banner-1.jpg",
        tag: "ENTERPRISE GRADE"
      },
      {
        title: "24/7 Security Operations Center (SOC) & Pentesting",
        tagline: "Proactive threat hunting, ISO 27001 compliance, and military-grade defensive boundary monitoring.",
        img: "/images/banner-2.jpg",
        tag: "CERTIFIED DEFENSE"
      },
      {
        title: "Kubernetes & Scalable Microservices Engineering",
        tagline: "Resilient distributed systems handling millions of concurrent requests with sub-10ms latency.",
        img: "/images/banner-3.jpg",
        tag: "99.999% UPTIME"
      }
    ],
    items: [
      {
        id: 701,
        title: "Managed Multi-Cloud & Kubernetes Architecture",
        category: "Cloud Infrastructure",
        price: 45000,
        originalPrice: 55000,
        discountBadge: "RECOMMENDED",
        rating: 4.9,
        reviewsCount: 88,
        image: "/images/team-1.jpg",
        desc: "Terraform IaC deployment, production Kubernetes clusters, auto-scaling, and multi-region disaster recovery.",
        specs: ["AWS / GCP / Azure", "Terraform & Helm IaC", "99.99% Availability SLA", "24/7 SRE Monitoring"]
      },
      {
        id: 702,
        title: "Zero-Trust Cybersecurity & Penetration Testing",
        category: "Cybersecurity",
        price: 38000,
        originalPrice: 48000,
        discountBadge: "COMPLIANCE",
        rating: 5.0,
        reviewsCount: 72,
        image: "/images/team-2.jpg",
        desc: "Full-scope network penetration testing, OWASP Top 10 vulnerability remediation, and ISO 27001 security audits.",
        specs: ["CREST Certified Testers", "Black/White Box Audit", "Executive Remediation Report", "SOC 2 Type II Support"]
      },
      {
        id: 703,
        title: "Full-Stack Enterprise Web & Mobile Engineering",
        category: "Custom Software",
        price: 65000,
        originalPrice: 80000,
        discountBadge: "CUSTOM",
        rating: 4.9,
        reviewsCount: 104,
        image: "/images/team-3.jpg",
        desc: "Bespoke high-concurrency ERP, payment gateways, and progressive web apps engineered with React, Node, and Go.",
        specs: ["Clean Architecture", "Automated CI/CD Pipelines", "Comprehensive Unit Tests", "Full Source Code Handover"]
      },
      {
        id: 704,
        title: "PostgreSQL & Redis High-Performance Tuning",
        category: "Database Engineering",
        price: 28000,
        originalPrice: 35000,
        discountBadge: "PERFORMANCE",
        rating: 4.8,
        reviewsCount: 54,
        image: "/images/team-4.jpg",
        desc: "Query optimization, read-replica clustering, connection pooling, and automated failover architecture.",
        specs: ["Sub-5ms Query Latency", "Automated Backup Verification", "PgBouncer Sharding", "Telemetry Dashboards"]
      }
    ],
    brands: ["AWS Advanced Partner", "Google Cloud Certified", "Microsoft Silver Partner", "Kubernetes Certified SP"],
    about: {
      history: "Launched in 2016 by a group of systems architects, CyberNet has managed multi-cloud migrations and secure networks for hundreds of enterprises.",
      mission: "To provide unbreakable cloud resilience, zero-trust cybersecurity defense, and high-velocity DevOps engineering.",
      vision: "Powering the digital transformation of mission-critical systems worldwide with 99.999% availability."
    },
    testimonials: [
      {
        name: "Rashidul Karim",
        role: "CTO, FinTech Solutions",
        comment: "CyberNet migrated our banking backend to Kubernetes with zero customer downtime. Their engineering caliber is world-class."
      }
    ]
  },

  // ==========================================
  // SERVICE: HOSPITAL / MEDICAL CLINIC
  // ==========================================
  hospital: {
    id: "hospital",
    type: "service",
    title: "Apollo Medical Clinic & Diagnostic Care",
    brand: "APOLLO MEDICAL CLINIC",
    tagline: "Compassionate patient-centered healthcare, board-certified physicians, and advanced diagnostic imaging.",
    phone: "+880 1712-345678",
    email: "emergency@apolloclinic.com",
    address: "Level 4, European IT Park, Mirpur 10, Dhaka 1216",
    ctaText: "Book Doctor Appointment",
    categories: ["All", "Cardiology", "Neurology", "Orthopedics", "Pediatrics", "Diagnostic Care"],
    slides: [
      {
        title: "24/7 Emergency Care & State-of-the-Art ICU",
        tagline: "Immediate response trauma unit equipped with modern ventilation and real-time vital telemetry.",
        img: "/images/banner-1.jpg",
        tag: "EMERGENCY 24/7"
      },
      {
        title: "Board-Certified Medical Specialists & Surgeons",
        tagline: "International faculty with decades of clinical excellence in cardiology, neurology, and surgery.",
        img: "/images/banner-2.jpg",
        tag: "CERTIFIED EXPERTS"
      },
      {
        title: "Precision 3T MRI & High-Speed CT Diagnostics",
        tagline: "Ultra-high resolution non-invasive diagnostic imaging with instant cloud PACS report delivery.",
        img: "/images/banner-3.jpg",
        tag: "ADVANCED LABS"
      }
    ],
    items: [
      {
        id: 801,
        title: "Dr. Marcus Vance (Cardiology Specialist)",
        category: "Cardiology",
        price: 1500,
        originalPrice: 2000,
        discountBadge: "CHAMBER OPEN",
        rating: 4.9,
        reviewsCount: 198,
        image: "/images/team-1.jpg",
        desc: "Consultant Interventional Cardiologist specializing in echocardiography, coronary stents, and hypertension.",
        specs: ["MBBS, FCPS (Cardiology)", "Visiting: Sat-Wed 5PM-9PM", "Room 402, Level 4", "Emergency On-Call"]
      },
      {
        id: 802,
        title: "Dr. Elena Rostova (Consultant Neurologist)",
        category: "Neurology",
        price: 1800,
        originalPrice: 2200,
        discountBadge: "SPECIALIST",
        rating: 4.9,
        reviewsCount: 154,
        image: "/images/team-2.jpg",
        desc: "Senior Neurologist treating stroke management, epilepsy, chronic migraines, and neuro-muscular disorders.",
        specs: ["MBBS, MD (Neurology)", "Visiting: Sun-Thu 4PM-8PM", "Room 305, Level 3", "EEG/EMG Diagnostic Center"]
      },
      {
        id: 803,
        title: "Dr. Sarah Jenkins (Child Health & Pediatrics)",
        category: "Pediatrics",
        price: 1200,
        originalPrice: 1600,
        discountBadge: "AVAILABLE",
        rating: 4.8,
        reviewsCount: 230,
        image: "/images/team-3.jpg",
        desc: "Dedicated child health specialist with gentle, child-friendly care for newborn care, vaccinations, and nutrition.",
        specs: ["MBBS, DCH, MRCPCH (UK)", "Visiting: Daily 10AM-2PM", "Room 201, Level 2", "Vaccination Suite"]
      },
      {
        id: 804,
        title: "Dr. David Kim (Orthopedic Surgeon)",
        category: "Orthopedics",
        price: 1600,
        originalPrice: 2100,
        discountBadge: "SURGEON",
        rating: 4.8,
        reviewsCount: 175,
        image: "/images/team-4.jpg",
        desc: "Specialist in joint replacement, sports injury arthroscopy, spinal alignments, and complex bone trauma.",
        specs: ["MBBS, MS (Orthopedics)", "Visiting: Mon-Fri 6PM-9PM", "Room 501, Level 5", "Physiotherapy Attached"]
      }
    ],
    brands: ["Joint Commission International", "WHO Standard Lab", "BMDC Registered", "ISO 15189 Certified"],
    about: {
      history: "Established to deliver superior medical care, Apollo Clinic houses modern diagnostic facilities and expert consultants.",
      mission: "To deliver compassionate, timely, and world-class clinical diagnostics and patient care.",
      vision: "Leading excellence in medical diagnostics, preventive healthcare, and accessible specialist medicine."
    },
    testimonials: [
      {
        name: "Mustafizur Rahman",
        role: "Patient",
        comment: "Dr. Marcus Vance explained my heart condition thoroughly and arranged immediate tests. Exceptional medical service!"
      }
    ]
  }
};

/**
 * Helper to fetch any domain data by key
 */
export function getDomainData(key = 'tech') {
  return DOMAINS[key] || DOMAINS.tech;
}
