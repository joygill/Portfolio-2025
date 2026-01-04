import { Project, Experience, SkillSet } from './types';

// Anthropic-style Earthy Terracotta
export const BRAND_COLOR = "#C15C37"; 

export const personalInfo = {
  name: "Joy Moriah",
  title: "Product Insights & Strategic Initiatives",
  email: "joygill.moriah@gmail.com",
  year: "2025",
  heroDescription: "Transforming creator and audience behavior into platform-wide cultural understanding and strategic direction.",
  goal: "My goal is to spot cultural and market shifts early, before they register as obvious data trends, then pressure-test those signals through research, experimentation, and real user behavior.",
  expertise: "I operate at the intersection of strategic intelligence and business execution, identifying opportunities, validating through experiments, and driving cross-functional teams to launch and scale new revenue streams."
};

// Dice Tags: "Strategy", "Culture", "Product", "Data", "ML/AI", "Trends"

export const projects: Project[] = [
  {
    id: "almost-a-million",
    title: "Almost-A-Million",
    subtitle: "Independent Project",
    description: "An LLM-assisted programming exercise built with Python. The app aggregates YouTube videos under 1 million views representing active & engaged audiences, using K-means clustering to separate signal from noise.",
    role: "Developer & Product Owner",
    impact: [
      "Built with Python & YouTube API for real-time data ingestion",
      "Applied Machine Learning (K-means) for velocity clustering",
      "Identifies viral vs. evergreen content opportunities automatically"
    ],
    tags: ["ML/AI", "Product", "Data", "Python", "Clustering"],
    link: "https://almost-a-million.streamlit.app/",
    // Softened the main image to be more artistic/approachable
    image: "https://image.pollinations.ai/prompt/hand%20drawn%20graphite%20sketch%20of%20a%20stack%20of%203.5%20inch%20floppy%20disks%2C%20soft%20pencil%20shading%2C%20artistic%20illustration%2C%20white%20paper%20background%2C%20nostalgic%20tech?width=1200&height=900&seed=46&nologo=true",
    color: "#C15C37",
    gallery: [
      {
        // Tornado / Chaos
        image: "https://image.pollinations.ai/prompt/hand%20drawn%20graphite%20sketch%20of%20a%20chaotic%20tornado%20vortex%20swirling%20with%20binary%20code%20and%20papers%2C%20pencil%20illustration%2C%20storm%20nature%20force%2C%20white%20background?width=800&height=600&seed=401&nologo=true",
        caption: "Taming the Storm",
        symbolism: "Ingesting the chaotic hurricane of real-time data upload velocity to find the calm eye of the signal."
      },
      {
        // Dice / Chance
        image: "https://image.pollinations.ai/prompt/hand%20drawn%20graphite%20sketch%20of%20two%20dice%20tumbling%20in%20mid%20air%2C%20motion%20blur%2C%20pencil%20illustration%2C%20game%20of%20chance%2C%20white%20background?width=800&height=600&seed=402&nologo=true",
        caption: "Calculated Chance",
        symbolism: "Replacing the 'guessing game' of viral prediction with rigorous probabilistic models and clustering."
      },
      {
        // Crystal / Order
        image: "https://image.pollinations.ai/prompt/hand%20drawn%20graphite%20sketch%20of%20a%20perfect%20geometric%20crystal%20formation%20emerging%20from%20rough%20stone%2C%20pencil%20illustration%2C%20alchemy%20order%2C%20white%20background?width=800&height=600&seed=403&nologo=true",
        caption: "The Alchemical Shift",
        symbolism: "Transmuting the raw noise of the internet into the crystallized gold of actionable intelligence."
      }
    ]
  },
  {
    id: "youtube-trends",
    title: "Cultural Intelligence",
    subtitle: "YouTube Culture & Trends",
    description: "Managed trending videos across global markets and led research for the annual Culture & Trends Report. Insights shaped marketing campaigns, programming, and product strategy for features like Shorts.",
    role: "Strategic Insight Lead",
    impact: [
      "Managed editorial decisions for Trending Page (25+ analysts)",
      "Insights cited by NYT, Forbes, Wired",
      "Contributed to doubling Shorts creator adoption in year one"
    ],
    tags: ["Strategy", "Culture", "Trends", "Global Ops", "Safety"],
    image: "https://image.pollinations.ai/prompt/hand%20drawn%20graphite%20sketch%20of%20a%20retro%20flip%20phone%20open%2C%20artistic%20pencil%20illustration%2C%20loose%20sketchy%20lines%2C%20white%20paper%20background%2C%20minimalist?width=1200&height=900&seed=122&nologo=true",
    color: "#D93025",
    gallery: [
      {
        // Seismograph / Natural Event
        image: "https://image.pollinations.ai/prompt/hand%20drawn%20graphite%20sketch%20of%20a%20seismograph%20needle%20drawing%20jagged%20lines%20of%20an%20earthquake%2C%20pencil%20illustration%2C%20science%20measurement%2C%20white%20background?width=800&height=600&seed=503&nologo=true",
        caption: "Cultural Seismology",
        symbolism: "Measuring the magnitude of deep cultural tremors before they rupture into mainstream trends."
      },
      {
        // Dowsing Rod / Divination
        image: "https://image.pollinations.ai/prompt/hand%20drawn%20graphite%20sketch%20of%20a%20wooden%20dowsing%20rod%20pulling%20downwards%2C%20pencil%20illustration%2C%20divining%20water%2C%20white%20background?width=800&height=600&seed=502&nologo=true",
        caption: "Divining the Source",
        symbolism: "Using intuition guided by data to locate the hidden underground springs of audience attention."
      },
      {
        // Crystal Ball / Magic
        image: "https://image.pollinations.ai/prompt/hand%20drawn%20graphite%20sketch%20of%20a%20mystical%20crystal%20ball%20with%20swirling%20mist%20inside%2C%20pencil%20illustration%2C%20fortune%20telling%2C%20white%20background?width=800&height=600&seed=501&nologo=true",
        caption: "The Oracle's View",
        symbolism: "Gazing into the shifting mists of culture to predict behaviors before they manifest physically."
      }
    ] 
  },
  {
    id: "instagram-creators",
    title: "Creator Infrastructure",
    subtitle: "Instagram Strategy",
    description: "Built systems scaling consumer research and cultural intelligence. Developed a granular taxonomy for 500k+ creators to inform recommendation algorithms and separate creator types beyond broad labels.",
    role: "Researcher & Strategist",
    impact: [
      "Curated dataset of 500k+ creators for ML training",
      "Helped scale @creators channel from 0 to 21M followers",
      "Secured 100+ high-growth partnerships"
    ],
    tags: ["Data", "Product", "Strategy", "Culture", "ML Training"],
    image: "https://image.pollinations.ai/prompt/hand%20drawn%20graphite%20sketch%20of%20a%20gameboy%20handheld%20console%2C%20artistic%20pencil%20illustration%2C%20hatching%20shading%2C%20white%20paper%20background%2C%20minimalist?width=1200&height=900&seed=303&nologo=true",
    color: "#C13584",
    gallery: [
      {
        // Rhizome / Nature
        image: "https://image.pollinations.ai/prompt/hand%20drawn%20graphite%20sketch%20of%20complex%20tree%20roots%20intertwined%20underground%20rhizome%2C%20pencil%20illustration%2C%20nature%20botany%2C%20white%20background?width=800&height=600&seed=601&nologo=true",
        caption: "The Rhizome",
        symbolism: "Mapping the non-hierarchical, interconnected root systems that feed the creator economy ecosystem."
      },
      {
        // Chess / Game
        image: "https://image.pollinations.ai/prompt/hand%20drawn%20graphite%20sketch%20of%20a%20surreal%20chessboard%20with%20floating%20pieces%2C%20pencil%20illustration%2C%20strategy%20game%20magic%2C%20white%20background?width=800&height=600&seed=602&nologo=true",
        caption: "The Strategic Board",
        symbolism: "Understanding the infinite game of creator positioning and the unique moves available to each archetype."
      },
      {
        // Torch / Illumination
        image: "https://image.pollinations.ai/prompt/hand%20drawn%20graphite%20sketch%20of%20a%20hand%20holding%20a%20burning%20torch%20illuminating%20darkness%2C%20pencil%20illustration%2C%20fire%20magic%2C%20white%20background?width=800&height=600&seed=603&nologo=true",
        caption: "Illuminating Chaos",
        symbolism: "Bringing light to the dark, undefined corners of the platform's ecosystem to reveal value."
      }
    ]
  }
];

export const experiences: Experience[] = [
  {
    company: "Meta",
    role: "Product Content Operations",
    period: "Jul 2023 – Jan 2024",
    description: "Led a team of analysts in identifying market trends, directly influencing go-to-market strategies, customer segmentation, and messaging development resulting in a 25% increase in user engagement and alignment with global data regulations. Tracked, monitored, and shared weekly insights with internal content and product teams to gather competitive intel on Gen AI & cultural resonance. Partnered with technology teams to integrate advanced analytics tools, enhancing the accuracy of market insights by 20%."
  },
  {
    company: "YouTube",
    role: "Product Marketing Manager, Global Trends",
    period: "Aug 2021 – Jan 2023",
    description: "Led the global management of YouTube's Trending Product Surface, achieving a 40% increase in user interaction across US/CAN, UK/EMEA, APAC, and UAE. Supported the Culture & Trends team by building intelligence for business use through market research, data analysis (SQL), and pattern recognition. Mentored a global team to execute new GTM and brand marketing initiatives, improving strategic marketing by 35%. Produced data-driven case studies contributing to a 50% increase in strategic adoption for key products like Hashtags and Shorts."
  },
  {
    company: "Instagram",
    role: "Insights Strategy Lead",
    period: "May 2020 – May 2021",
    description: "Pioneered a suite of content & cultural insights tools including Creator Visualization and Verticals Analysis. Oversaw production of actionable insights using content science and machine learning, resulting in a 30% increase in strategic decision-making efficiency for products like Reels. Managed the building and maintenance of Instagram’s significant database, enhancing product content discovery and user engagement by 25%."
  },
  {
    company: "Instagram",
    role: "Creator Curator",
    period: "May 2019 – May 2020",
    description: "Identified and curated noteworthy influencers for brand partnerships. Curated content for Shopping, Reels, and Beta products. Using data signals to understand cultural conversations, built & maintained Instagram's first database of 1 billion creator accounts using Machine Learning, surfacing new voices for campaigns like 'We Make Today' and partnerships with NIKE."
  },
  {
    company: "Planeta",
    role: "Partnerships and Business Development",
    period: "Apr 2014 – Jun 2018",
    description: "Managed product releases, user testing, and GTM strategies for mobile, AR/VR, and web products. Secured new clients through innovative presentations and digital marketing. Streamlined voice, aesthetic, and narrative across external materials. Led the execution and planning of B2B events to enhance brand partnerships."
  }
];

export const skills: SkillSet[] = [
  {
    category: "Strategic",
    skills: ["Market Intelligence", "Trend Forecasting", "Go-to-Market Strategy", "Competitive Analysis", "Cultural Pattern Recognition", "Product Lifecycle Management"]
  },
  {
    category: "Technical",
    skills: ["Python", "SQL", "Machine Learning (K-means)", "API Integration", "Data Visualization", "Tableau"]
  },
  {
    category: "Operational",
    skills: ["Cross-functional Leadership", "Distributed Team Management", "Safety Governance", "Editorial Curation", "Agile Methodologies"]
  }
];