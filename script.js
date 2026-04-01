const lenses = {
  ib: {
    label: "Investment Banking Lens",
    title: "Commercial thinking, research discipline, and transaction curiosity.",
    text: "I approach businesses through industry structure, competitive dynamics, valuation logic, and strategic optionality while still being able to build and ship digitally.",
    points: [
      "Business-model understanding and valuation-oriented thinking",
      "Comfort with strategic narratives, industries, and execution details",
      "Public communication of investment-style analysis through LinkedIn posts"
    ]
  },
  fintech: {
    label: "Fintech Lens",
    title: "A builder who understands both financial workflows and digital systems.",
    text: "I like working where payment rails, customer behavior, risk, automation, data, and product strategy all interact. My profile is strongest where financial complexity meets execution.",
    points: [
      "Can move from pain point to process design to actual prototype thinking",
      "Useful in product, strategy, growth, operations, and AI-enabled finance systems",
      "Comfortable translating financial logic into user-facing experiences"
    ]
  },
  pe: {
    label: "Private Equity Lens",
    title: "Analytical curiosity around value creation, quality of earnings, and scalable execution.",
    text: "I am drawn to understanding what makes a business durable, what operational levers matter most, and how technology can expand margins or improve decision velocity.",
    points: [
      "Focus on where value is created, protected, or destroyed",
      "Interest in strategic improvement, not just static analysis",
      "Hybrid profile is useful for tech-enabled businesses and diligence-heavy work"
    ]
  },
  quant: {
    label: "Quant Lens",
    title: "Systems thinking, structured analysis, and curiosity about model-driven decision making.",
    text: "While I am not positioning purely as a quant researcher, I am intentionally building the analytical discipline, data instinct, and AI interest that sit well alongside more technical finance environments.",
    points: [
      "Comfortable with structured thinking, pattern recognition, and analytical rigor",
      "Interested in AI, automation, and decision systems in financial contexts",
      "Brings business understanding alongside technical curiosity"
    ]
  }
};

const insights = [
  {
    category: "markets",
    tag: "Sports Business",
    date: "Case Study",
    title: "How Formula 1 Makes Money and Why It Is a Billion-Dollar Machine",
    summary: "A business-model breakdown of Formula 1 focused on media rights, sponsorship, race economics, brand power, and how the sport built a scaled global monetization engine.",
    points: [
      "Explains the revenue architecture behind a global sports property",
      "Connects brand, media, and commercial strategy into one framework",
      "Shows ability to analyze business models beyond traditional finance sectors"
    ],
    articleUrl: "https://www.linkedin.com/pulse/how-formula-1-makes-money-why-its-billion-dollar-machine-tiwari-0alcc/?trackingId=JzrRonJe5Fv8yQ0zr7es7A%3D%3D",
    postUrl: "https://www.linkedin.com/pulse/how-formula-1-makes-money-why-its-billion-dollar-machine-tiwari-0alcc/?trackingId=JzrRonJe5Fv8yQ0zr7es7A%3D%3D"
  },
  {
    category: "fintech",
    tag: "Fintech",
    date: "Case Study",
    title: "Pine Labs and the Fintech IPO Question",
    summary: "A fintech-focused lens on Pine Labs, its positioning, business quality, and the larger IPO conversation around Indian fintech infrastructure and investor expectations.",
    points: [
      "Demonstrates understanding of fintech infrastructure and capital markets",
      "Combines company analysis with market timing and investor sentiment",
      "Useful proof point for fintech and growth-equity oriented recruiters"
    ],
    articleUrl: "https://www.linkedin.com/posts/adityatiwari19_fintech-pinelabs-ipo-activity-7345800545946714112-Ny-T?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ7RmQBjOuMR_xInrxXLSKk6psFHavF8U0",
    postUrl: "https://www.linkedin.com/posts/adityatiwari19_fintech-pinelabs-ipo-activity-7345800545946714112-Ny-T?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ7RmQBjOuMR_xInrxXLSKk6psFHavF8U0"
  },
  {
    category: "ib",
    tag: "Conglomerates",
    date: "Case Study",
    title: "From Steel to Startups: The Tata Group Playbook",
    summary: "A strategy-led case study of Tata Group examining how a legacy conglomerate adapted across sectors, institutions, and eras while retaining strategic relevance.",
    points: [
      "Shows long-horizon thinking about business transformation",
      "Links legacy industrial strength with modern strategic reinvention",
      "Signals strong interest in corporate strategy and value creation"
    ],
    articleUrl: "https://www.linkedin.com/pulse/from-steel-startups-aditya-tiwari-d9s9c/?trackingId=eZzkQXafX3rVlcxvih9jPA%3D%3D",
    postUrl: "https://www.linkedin.com/posts/adityatiwari19_casestudy-tatagroup-indiainc-activity-7340615574403633152-Bqvr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ7RmQBjOuMR_xInrxXLSKk6psFHavF8U0"
  },
  {
    category: "strategy",
    tag: "Consumer Tech",
    date: "Case Study",
    title: "From Minutes to Market Share: The Zepto Story",
    summary: "A high-speed business case study on Zepto, quick commerce economics, competitive strategy, market timing, and the operating logic behind category creation.",
    points: [
      "Explores scale, distribution, and market-share capture in a new category",
      "Balances narrative growth with strategic and commercial realities",
      "Strong signal for recruiters looking for modern consumer/tech analysis"
    ],
    articleUrl: "https://www.linkedin.com/pulse/from-minutes-market-share-aditya-tiwari-7fqhc/?trackingId=EWykSGryPigS2ne8qvDcvA%3D%3D",
    postUrl: "https://www.linkedin.com/posts/adityatiwari19_casestudy-zepto-quickcommerce-activity-7338427779287347200-uJu4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ7RmQBjOuMR_xInrxXLSKk6psFHavF8U0"
  },
  {
    category: "markets",
    tag: "Digital Infra",
    date: "Case Study",
    title: "Jio: The Telecom Disruption That Rebooted a Nation",
    summary: "A market-shaping case study on Jio covering telecom economics, digital infrastructure, scale strategy, and how one business can alter an entire ecosystem.",
    points: [
      "Analyzes disruption through pricing, infrastructure, and ecosystem expansion",
      "Shows ability to think about market structure at national scale",
      "Connects business strategy with platform effects and adoption"
    ],
    articleUrl: "https://www.linkedin.com/pulse/jio-telecom-rebooted-nation-aditya-tiwari-ctplc/?trackingId=KBGwIQ6ct2wopF3aAWJlsQ%3D%3D",
    postUrl: "https://www.linkedin.com/posts/adityatiwari19_casestudy-jio-digitalindia-activity-7338086428657991681-oaHi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ7RmQBjOuMR_xInrxXLSKk6psFHavF8U0"
  },
  {
    category: "markets",
    tag: "Sports Business",
    date: "Case Study",
    title: "From Match Day to Market Domination: The IPL Business Engine",
    summary: "A sports-business analysis of the IPL as an entertainment, media, consumer, and brand platform with durable commercial leverage.",
    points: [
      "Breaks down media, sponsorship, fandom, and platform monetization",
      "Shows comfort analyzing modern business models outside narrow templates",
      "Useful proof of strategic thinking and commercial pattern recognition"
    ],
    articleUrl: "https://www.linkedin.com/pulse/from-match-day-market-domination-aditya-tiwari-pqkkc/?trackingId=jMmNsvP3ZssyOHmCsJau3Q%3D%3D",
    postUrl: "https://www.linkedin.com/posts/adityatiwari19_ipl-businessofsport-casestudy-activity-7335145658359709699-mSzt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ7RmQBjOuMR_xInrxXLSKk6psFHavF8U0"
  },
  {
    category: "strategy",
    tag: "Retail",
    date: "Case Study",
    title: "From Shame to Shelf Space: Building a Retail Moat",
    summary: "A consumer and retail positioning case study focused on brand strength, distribution leverage, customer psychology, and how shelf presence turns into durable advantage.",
    points: [
      "Highlights brand and distribution as strategic assets",
      "Connects retail visibility to moat-building and market capture",
      "Shows ability to analyze consumer businesses with nuance"
    ],
    articleUrl: "https://www.linkedin.com/pulse/from-shame-shelf-space-aditya-tiwari-ygibc/?trackingId=HEgheMlWuRjjU8wCHit0jw%3D%3D",
    postUrl: "https://www.linkedin.com/posts/adityatiwari19_casestudy-retailmoats-comfortbrand-activity-7334435984232599552-mXad?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ7RmQBjOuMR_xInrxXLSKk6psFHavF8U0"
  },
  {
    category: "ib",
    tag: "FMCG",
    date: "Case Study",
    title: "From Bhujia to Bowls to Boardrooms: The Haldiram Story",
    summary: "A case study on Haldiram's growth, brand positioning, product strength, and how an Indian FMCG story compounds from consumer habit into scalable business power.",
    points: [
      "Demonstrates understanding of FMCG scale and brand durability",
      "Shows how product, distribution, and recall reinforce each other",
      "Strong fit for strategy, markets, and consumer-sector recruiters"
    ],
    articleUrl: "https://www.linkedin.com/pulse/from-bhujia-bowls-boardrooms-aditya-tiwari-kolnc/?trackingId=5Kart1wLHjf%2FK%2F7ZhuZjag%3D%3D",
    postUrl: "https://www.linkedin.com/posts/adityatiwari19_casestudy-fmcg-haldiram-activity-7334058498550308866-LoXR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZ7RmQBjOuMR_xInrxXLSKk6psFHavF8U0"
  }
];

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal");
const spotlight = document.getElementById("spotlight");
const navLinks = document.querySelectorAll(".nav a");
const lensTabs = document.querySelectorAll(".lens-tab");
const lensLabel = document.getElementById("lensLabel");
const lensTitle = document.getElementById("lensTitle");
const lensText = document.getElementById("lensText");
const lensPoints = document.getElementById("lensPoints");
const insightGrid = document.getElementById("insightGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const modal = document.getElementById("insightModal");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalSummary = document.getElementById("modalSummary");
const modalPoints = document.getElementById("modalPoints");
const modalArticleLink = document.getElementById("modalArticleLink");
const modalPostLink = document.getElementById("modalPostLink");
const modalClose = document.getElementById("modalClose");

function renderLens(key) {
  const lens = lenses[key];

  if (!lens) {
    return;
  }

  lensLabel.textContent = lens.label;
  lensTitle.textContent = lens.title;
  lensText.textContent = lens.text;
  lensPoints.innerHTML = lens.points.map((point) => `<li>${point}</li>`).join("");

  lensTabs.forEach((tab) => {
    const isActive = tab.dataset.lens === key;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

function renderInsights(filter = "all") {
  insightGrid.innerHTML = insights
    .map((insight, originalIndex) => ({ ...insight, originalIndex }))
    .filter((insight) => filter === "all" || insight.category === filter)
    .map(
      (insight) => `
        <article class="insight-card" data-index="${insight.originalIndex}" data-category="${insight.category}">
          <div class="tag-row">
            <span class="tag">${insight.tag}</span>
            <span class="insight-date">${insight.date}</span>
          </div>
          <h3>${insight.title}</h3>
          <p>${insight.summary}</p>
          <div class="insight-meta">
            <span class="mini-label">Public proof</span>
            <div class="insight-buttons">
              <button class="mini-btn" data-action="details" data-index="${insight.originalIndex}">Quick View</button>
              <a class="mini-btn" href="${insight.articleUrl}" target="_blank" rel="noreferrer">Article</a>
              <a class="mini-btn" href="${insight.postUrl}" target="_blank" rel="noreferrer">Post</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function openModal(index) {
  const insight = insights[index];

  if (!insight) {
    return;
  }

  modalCategory.textContent = insight.tag;
  modalTitle.textContent = insight.title;
  modalSummary.textContent = insight.summary;
  modalPoints.innerHTML = insight.points.map((point) => `<li>${point}</li>`).join("");
  modalArticleLink.href = insight.articleUrl;
  modalPostLink.href = insight.postUrl;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function activateFilter(button) {
  const filter = button.dataset.filter;

  filterButtons.forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  renderInsights(filter);
}

function handleReveal() {
  if (prefersReducedMotion) {
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.14 }
  );

  revealElements.forEach((el) => observer.observe(el));
}

function handleSectionSpy() {
  const sections = [...document.querySelectorAll("main section[id]")];

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px" }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

renderLens("ib");
renderInsights();
handleReveal();
handleSectionSpy();

lensTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    renderLens(tab.dataset.lens);
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => activateFilter(button));
});

insightGrid.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-action='details']");

  if (!trigger) {
    return;
  }

  openModal(Number(trigger.dataset.index));
});

modal.addEventListener("click", (event) => {
  if (event.target.dataset.close === "true") {
    closeModal();
  }
});

modalClose.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeModal();
  }
});

if (!prefersReducedMotion && spotlight) {
  document.addEventListener("mousemove", (event) => {
    spotlight.style.left = `${event.clientX}px`;
    spotlight.style.top = `${event.clientY}px`;
  });
}
