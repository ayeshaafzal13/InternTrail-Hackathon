// === DATA ===

const internships = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    company: 'Pixelify Labs',
    type: 'Remote',
    stipend: '₹25,000/month',
    duration: '3 months',
    location: null,
    description: 'Build beautiful UI components for a fast-growing B2B SaaS product used by thousands of small businesses.',
    companyDescription: 'Pixelify Labs is a B2B SaaS startup building analytics dashboards for small businesses. We are a remote-first team of 30 people spread across India.',
    responsibilities: [
      'Build and maintain reusable UI components',
      'Implement responsive layouts from Figma designs',
      'Collaborate with the backend team on API integration',
      'Write clean, documented code and participate in code reviews',
    ],
    eligibility: 'Open to students in any year or fresh graduates with a basic understanding of HTML, CSS, and JavaScript.',
    applyUrl: 'https://careers.pixelifylabs.com/intern',
  },
  {
    id: 2,
    title: 'Marketing Intern',
    company: 'DigitalEdge Solutions',
    type: 'Onsite',
    stipend: '₹20,000/month',
    duration: '2 months',
    location: 'Mumbai, India',
    description: 'Support digital marketing campaigns for top e-commerce and fintech brands at a fast-paced agency.',
    companyDescription: 'DigitalEdge is a digital marketing agency helping brands grow their online presence across e-commerce, ed-tech, and fintech.',
    responsibilities: [
      'Assist in planning and executing social media campaigns',
      'Create and schedule content across platforms',
      'Analyse campaign performance and prepare reports',
      'Research market trends and competitor activity',
    ],
    eligibility: 'Open to students in their final year or fresh graduates. MBA students are preferred but not required.',
    applyUrl: 'https://careers.digitaledge.in/intern',
  },
  {
    id: 3,
    title: 'Data Science Intern',
    company: 'AI Futures',
    type: 'Remote',
    stipend: '₹30,000/month',
    duration: '3 months',
    location: null,
    description: 'Work on real ML pipelines and data analysis projects for cutting-edge AI products in healthcare and finance.',
    companyDescription: 'AI Futures builds cutting-edge AI solutions for healthcare and finance. Backed by top VCs and working with Fortune 500 clients worldwide.',
    responsibilities: [
      'Clean, explore, and analyse large datasets',
      'Build and evaluate machine learning models',
      'Visualise insights for stakeholder presentations',
      'Document experiments and findings clearly',
    ],
    eligibility: 'Open to students in their 2nd year or above (CS/Stats/Math) or fresh graduates with Python experience.',
    applyUrl: 'https://careers.aifutures.io/intern',
  },
  {
    id: 4,
    title: 'Content Writing Intern',
    company: 'CreativeHub Media',
    type: 'Remote',
    stipend: '₹15,000/month',
    duration: '2 months',
    location: null,
    description: 'Write engaging blog posts, social copy, and SEO content for 50+ clients across tech, lifestyle, and education.',
    companyDescription: 'CreativeHub is a content marketing agency serving 50+ clients across tech, lifestyle, and education sectors globally.',
    responsibilities: [
      'Write SEO-optimised blog articles and landing page copy',
      'Research topics thoroughly before writing',
      'Incorporate editor feedback and revise drafts',
      'Maintain a consistent brand voice for each client',
    ],
    eligibility: 'Open to students in any year or fresh graduates. A portfolio of writing samples is required.',
    applyUrl: 'https://careers.creativehubmedia.com/intern',
  },
  {
    id: 5,
    title: 'Software Engineer Intern',
    company: 'CodeCraft Technologies',
    type: 'Onsite',
    stipend: '₹35,000/month',
    duration: '3 months',
    location: 'Bangalore, India',
    description: 'Work on real production systems at a cloud-focused tech company from day one — not just side projects.',
    companyDescription: 'CodeCraft builds cloud solutions for startups and enterprises. You will work on real production systems from day one.',
    responsibilities: [
      'Develop and ship features on the core product',
      'Write unit tests and participate in code reviews',
      'Debug and resolve production issues',
      'Collaborate with senior engineers in daily standups',
    ],
    eligibility: 'Open to CS/IT students in their 3rd or 4th year, or fresh graduates with strong problem-solving skills.',
    applyUrl: 'https://careers.codecraft.tech/intern',
  },
  {
    id: 6,
    title: 'UI/UX Design Intern',
    company: 'Moodboard Studio',
    type: 'Remote',
    stipend: '₹18,000/month',
    duration: '3 months',
    location: null,
    description: 'Design user-centred digital experiences for early-stage startups across India and Southeast Asia.',
    companyDescription: 'Moodboard Studio is a boutique design agency creating beautiful digital products for startups across India and Southeast Asia.',
    responsibilities: [
      'Create wireframes, prototypes, and high-fidelity mockups in Figma',
      'Conduct basic user research and usability testing',
      'Iterate on designs based on client and user feedback',
      'Maintain and evolve design systems',
    ],
    eligibility: 'Open to design students in any year or fresh graduates. A Figma portfolio is required.',
    applyUrl: 'https://careers.moodboardstudio.in/intern',
  },
  {
    id: 7,
    title: 'DevOps Intern',
    company: 'CloudAxis Systems',
    type: 'Onsite',
    stipend: '₹28,000/month',
    duration: '4 months',
    location: 'Hyderabad, India',
    description: 'Get hands-on with AWS, Docker, and CI/CD pipelines while supporting managed DevOps services for enterprise clients.',
    companyDescription: 'CloudAxis provides managed DevOps services to mid-market enterprises. You will work with AWS, Docker, and CI/CD pipelines.',
    responsibilities: [
      'Set up and maintain CI/CD pipelines',
      'Assist in provisioning cloud infrastructure on AWS',
      'Monitor system health and respond to alerts',
      'Write automation scripts for repetitive ops tasks',
    ],
    eligibility: 'Open to CS/IT students in their 3rd or 4th year, or fresh graduates comfortable with Linux and basic networking.',
    applyUrl: 'https://careers.cloudaxis.io/intern',
  },
  {
    id: 8,
    title: 'Full Stack Developer Intern',
    company: 'Launchpad Digital',
    type: 'Remote',
    stipend: '₹22,000/month',
    duration: '6 months',
    location: null,
    description: 'Build full-stack features for a growing SaaS product used by freelancers worldwide, as part of a distributed team.',
    companyDescription: 'Launchpad Digital is a remote-first product studio building SaaS tools for freelancers. Series-A funded with a 25-person distributed team.',
    responsibilities: [
      'Build frontend features using React',
      'Develop REST API endpoints with Node.js / Express',
      'Write integration tests and document APIs',
      'Ship features end-to-end with minimal supervision',
    ],
    eligibility: 'Open to students in any year or fresh graduates with a GitHub portfolio showing relevant projects.',
    applyUrl: 'https://careers.launchpaddigital.co/intern',
  },
  {
    id: 9,
    title: 'Backend Developer Intern',
    company: 'NestByte Technologies',
    type: 'Remote',
    stipend: '₹20,000/month',
    duration: '3 months',
    location: null,
    description: 'Design and build REST APIs powering a rapidly growing fintech app with over 200,000 active users.',
    companyDescription: 'NestByte is a fintech startup offering digital lending and savings products to underserved communities. We are a 40-person team operating remotely across India.',
    responsibilities: [
      'Design and develop RESTful APIs using Node.js',
      'Write and maintain database schemas in PostgreSQL',
      'Collaborate with the frontend team on API contracts',
      'Ensure security best practices in all API endpoints',
    ],
    eligibility: 'Open to CS/IT students in their 2nd year or above, or fresh graduates familiar with Node.js or any backend language.',
    applyUrl: 'https://careers.nestbyte.in/intern',
  },
  {
    id: 10,
    title: 'Product Management Intern',
    company: 'Growfast Ventures',
    type: 'Onsite',
    stipend: '₹25,000/month',
    duration: '3 months',
    location: 'Pune, India',
    description: 'Work alongside senior PMs to define product roadmaps, run user research, and ship features at a high-growth B2C startup.',
    companyDescription: 'Growfast Ventures builds consumer apps in the health and wellness space, with 1M+ downloads across platforms. Headquartered in Pune with 60+ employees.',
    responsibilities: [
      'Assist in writing and refining product requirement documents',
      'Conduct user interviews and synthesise findings',
      'Coordinate with engineering and design on sprint goals',
      'Track product KPIs and prepare weekly reports',
    ],
    eligibility: 'Open to students in their final year (any discipline) or fresh graduates with a keen interest in product thinking.',
    applyUrl: 'https://careers.growfastventures.com/intern',
  },
  {
    id: 11,
    title: 'Graphic Design Intern',
    company: 'Inkwave Creative',
    type: 'Remote',
    stipend: '₹12,000/month',
    duration: '2 months',
    location: null,
    description: 'Create scroll-stopping visuals for social media, branding campaigns, and pitch decks for a range of D2C clients.',
    companyDescription: 'Inkwave Creative is a branding and visual design studio working with D2C brands, startups, and cultural events across India and the UAE.',
    responsibilities: [
      'Design social media creatives, banners, and infographics',
      'Work on brand identity assets (logos, colour palettes, style guides)',
      'Collaborate with the content team to align visuals with copy',
      'Prepare files for both digital and print delivery',
    ],
    eligibility: 'Open to design students in any year or fresh graduates. A portfolio of graphic design work is required.',
    applyUrl: 'https://careers.inkwavecreative.com/intern',
  },
  {
    id: 12,
    title: 'Data Analyst Intern',
    company: 'InsightIQ Analytics',
    type: 'Onsite',
    stipend: '₹22,000/month',
    duration: '3 months',
    location: 'Chennai, India',
    description: 'Dig into large datasets and surface actionable business insights for retail and supply chain clients using SQL and Python.',
    companyDescription: 'InsightIQ is a data analytics consultancy helping retail and supply chain companies make smarter decisions with data. Based in Chennai with a team of 80+.',
    responsibilities: [
      'Query and clean large datasets using SQL',
      'Build dashboards and reports in Tableau or Power BI',
      'Identify trends and anomalies in business data',
      'Present findings to client-facing teams',
    ],
    eligibility: 'Open to students in Statistics, Mathematics, CS, or related fields (2nd year and above), or fresh graduates with SQL knowledge.',
    applyUrl: 'https://careers.insightiq.co.in/intern',
  },
  {
    id: 13,
    title: 'Social Media Intern',
    company: 'BuzzCraft Agency',
    type: 'Remote',
    stipend: '₹10,000/month',
    duration: '2 months',
    location: null,
    description: 'Plan and execute social content strategies for influencer-led D2C brands with highly engaged audiences.',
    companyDescription: 'BuzzCraft is an influencer marketing and social media agency working with 30+ D2C brands. Fully remote, with team members across 5 cities.',
    responsibilities: [
      'Plan weekly content calendars for Instagram, LinkedIn, and Twitter/X',
      'Write captions, hashtags, and short-form copy',
      'Monitor engagement metrics and compile weekly reports',
      'Research trending content formats and competitor activity',
    ],
    eligibility: 'Open to students in any year or fresh graduates. A personal or managed social media presence is a plus.',
    applyUrl: 'https://careers.buzzcraft.agency/intern',
  },
  {
    id: 14,
    title: 'Cybersecurity Intern',
    company: 'ShieldNet InfoSec',
    type: 'Onsite',
    stipend: '₹30,000/month',
    duration: '4 months',
    location: 'Delhi, India',
    description: 'Assist the security team in vulnerability assessments, penetration testing, and security audits for enterprise clients.',
    companyDescription: 'ShieldNet InfoSec is a cybersecurity firm providing penetration testing, compliance audits, and threat monitoring for enterprises and government bodies.',
    responsibilities: [
      'Assist in conducting vulnerability assessments and pen tests',
      'Review code and infrastructure for common security flaws',
      'Document findings and draft remediation reports',
      'Stay current with CVEs and security advisories',
    ],
    eligibility: 'Open to CS/IT students in their 3rd or 4th year or fresh graduates with knowledge of networking fundamentals and Linux.',
    applyUrl: 'https://careers.shieldnetinfosec.com/intern',
  },
  {
    id: 15,
    title: 'Video Production Intern',
    company: 'Frameloop Studios',
    type: 'Onsite',
    stipend: '₹15,000/month',
    duration: '2 months',
    location: 'Mumbai, India',
    description: 'Assist in shooting and editing short-form video content for brand campaigns, YouTube channels, and OTT pitches.',
    companyDescription: 'Frameloop Studios produces video content for brands, YouTube channels, and OTT platforms. Based in Andheri, Mumbai, with a young and creative crew.',
    responsibilities: [
      'Assist on video shoots — lighting, sound, and camera setup',
      'Edit footage using Adobe Premiere Pro or Final Cut Pro',
      'Create motion graphics and subtitles for reels and ads',
      'Organise and manage media libraries',
    ],
    eligibility: 'Open to students in Mass Communication, Film, or related fields (any year), or fresh graduates. A basic editing portfolio is preferred.',
    applyUrl: 'https://careers.frameloopstudios.com/intern',
  },
  {
    id: 16,
    title: 'Machine Learning Intern',
    company: 'Synapse AI Labs',
    type: 'Remote',
    stipend: '₹28,000/month',
    duration: '3 months',
    location: null,
    description: 'Train and fine-tune ML models for NLP and computer vision tasks powering the next generation of AI-native products.',
    companyDescription: 'Synapse AI Labs is an AI research and product company building NLP and computer vision tools for enterprise clients across healthcare and legal sectors.',
    responsibilities: [
      'Prepare and preprocess training datasets',
      'Fine-tune pre-trained models using PyTorch or TensorFlow',
      'Run experiments, track results, and iterate on model performance',
      'Write clear documentation for experiments and findings',
    ],
    eligibility: 'Open to students in CS, AI/ML, or Math (2nd year and above) or fresh graduates with hands-on Python and ML experience.',
    applyUrl: 'https://careers.synapseailabs.io/intern',
  },
];

// === STATE ===

let currentFilter = 'all';
let lastFocusedBtn = null;

// === RENDER FUNCTIONS ===

function renderCards() {
  const grid = document.getElementById('card-grid');
  if (!grid) return;

  const filtered =
    currentFilter === 'all'
      ? internships
      : internships.filter(i => i.type === currentFilter);

  if (filtered.length === 0) {
    grid.innerHTML = '<p class="empty-state">No internships match the current filter.</p>';
    return;
  }

  grid.innerHTML = filtered
    .map(intern => {
      const badgeClass =
        intern.type === 'Remote' ? 'type-badge--remote' : 'type-badge--onsite';
      return `
        <article class="card" data-id="${intern.id}">
          <div class="card-header">
            <h2 class="card-title">${intern.title}</h2>
            <span class="type-badge ${badgeClass}">${intern.type}</span>
          </div>
          <p class="card-company">${intern.company}</p>
          <p class="card-description">${intern.description}</p>
          <div class="card-meta">
            <span class="card-stipend">${intern.stipend}</span>
            <span class="card-duration">${intern.duration}</span>
          </div>
          <div class="card-actions">
            <button class="btn btn--secondary view-details-btn" data-id="${intern.id}">
              View Details
            </button>
            <a class="btn btn--primary apply-btn" href="${intern.applyUrl}"
               target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </div>
        </article>`;
    })
    .join('');
}

function openModal(id, triggerBtn) {
  const intern = internships.find(i => i.id === id);
  if (!intern) return;

  const modal = document.getElementById('modal');
  if (!modal) return;

  // Save the button that opened the modal so we can return focus on close
  lastFocusedBtn = triggerBtn || null;

  const badgeClass =
    intern.type === 'Remote' ? 'type-badge--remote' : 'type-badge--onsite';

  const responsibilitiesHTML = (intern.responsibilities || [])
    .map(r => `<li>${r}</li>`)
    .join('');

  const locationHTML =
    intern.location
      ? `<p><strong>Location:</strong> ${intern.location}</p>`
      : '';

  modal.innerHTML = `
    <button class="modal-close" aria-label="Close modal">✕</button>
    <h2 id="modal-title">${intern.title} — ${intern.company}</h2>
    <span class="type-badge ${badgeClass}">${intern.type}</span>

    <section class="modal-section">
      <h3>About the Company</h3>
      <p>${intern.companyDescription}</p>
    </section>

    <section class="modal-section">
      <h3>Responsibilities</h3>
      <ul>${responsibilitiesHTML}</ul>
    </section>

    <section class="modal-section">
      <h3>Who Should Apply</h3>
      <p>${intern.eligibility}</p>
    </section>

    <section class="modal-section modal-meta">
      <p><strong>Stipend:</strong> ${intern.stipend}</p>
      <p><strong>Duration:</strong> ${intern.duration}</p>
      ${locationHTML}
    </section>

    <a class="btn btn--primary apply-btn" href="${intern.applyUrl}"
       target="_blank" rel="noopener noreferrer">
      Apply Now
    </a>
  `;

  modal.showModal();
  modal.querySelector('.modal-close').focus();
}

function closeModal() {
  const modal = document.getElementById('modal');
  if (modal && modal.open) {
    modal.close();
    // Return focus to the card button that opened the modal
    if (lastFocusedBtn) {
      lastFocusedBtn.focus();
      lastFocusedBtn = null;
    }
  }
}

// === EVENT LISTENERS ===

// Filter buttons
document.getElementById('filter-bar').addEventListener('click', function (e) {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;

  document.querySelectorAll('.filter-btn').forEach(function (b) {
    b.classList.remove('filter-btn--active');
    b.setAttribute('aria-pressed', 'false');
  });

  btn.classList.add('filter-btn--active');
  btn.setAttribute('aria-pressed', 'true');
  currentFilter = btn.dataset.filter;
  renderCards();
});

// "View Details" buttons (delegated on card grid)
document.getElementById('card-grid').addEventListener('click', function (e) {
  const viewBtn = e.target.closest('.view-details-btn');
  if (viewBtn) {
    openModal(Number(viewBtn.dataset.id), viewBtn);
  }
});

// Modal: close button and backdrop click — delegated on #modal
document.getElementById('modal').addEventListener('click', function (e) {
  // Close button (✕)
  if (e.target.closest('.modal-close')) {
    closeModal();
    return;
  }

  // Backdrop click — fires when the click lands directly on <dialog>, not its content
  if (e.target === document.getElementById('modal')) {
    closeModal();
  }
});

// Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// === INIT ===

renderCards();
