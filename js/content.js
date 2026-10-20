// ---------------------------------------------------------------------------
// Course content data. Edit this file to add video links, transcripts, or
// extra notes as they become available — the page re-renders automatically.
//
// videos: paste the Google Drive share link into `url`. Leave "" until you
// have it. transcript: paste plain text or Markdown-ish text (line breaks
// become paragraphs) once you have a transcript from Gemini Notebook, etc.
// ---------------------------------------------------------------------------

const COURSE = {
  title: "Statistics for Data Analysis",
  subtitle: "DIPDAB Sep26 cohort · CCT College Dublin",
  lecturer: "Cristiani Eccher, PhD",
  lecturerEmail: "ceccher@cct.ie",
  schedule: [
    { time: "18:00 – 19:00", activity: "Warm-up question + subject introduction (theory & application)" },
    { time: "19:00 – 19:15", activity: "Break" },
    { time: "19:15 – 20:00", activity: "Interactive session — games, group activities, quizzes" },
    { time: "20:00 – 20:15", activity: "Break" },
    { time: "20:15 – 21:15", activity: "Exercises — practice in Python" }
  ],
  assessments: [
    {
      name: "CA1",
      weight: "40%",
      detail: "Covers subjects from Weeks 1–4.",
      released: "Week 2"
    },
    {
      name: "CA2",
      weight: "60%",
      detail: "A dataset is provided and a statistical analysis is requested, presented as a recording (10 minutes max) covering the main concepts.",
      released: "Week 5"
    },
    {
      name: "Repeat",
      weight: "—",
      detail: "Applies if the grade achieved on an assessment is below 40%.",
      released: "—"
    }
  ],
  books: [
    { title: "Introductory Statistics", author: "Neil Weiss", note: "Core course textbook" },
    { title: "Factfulness", author: "Hans Rosling, Ola Rosling & Anna Rosling Rönnlund", note: "Recommended reading" },
    { title: "The Black Swan", author: "Nassim Nicholas Taleb", note: "Recommended reading" },
    { title: "How to Lie with Statistics", author: "Darrell Huff", note: "Recommended reading" }
  ]
};

const WEEKS = [
  {
    id: 1,
    dates: "14 – 20 September",
    title: "Welcome & Probability Foundations",
    status: "done",
    summary:
      "Module introduction, course logistics, and the first building block of statistics: probability — axioms, contingency tables, tree diagrams and Bayes' theorem.",
    reading: `
      <p>Statistics starts with a simple distinction: a <strong>deterministic event</strong> always produces the same outcome under the same conditions (water always boils at 100°C), while a <strong>stochastic (probabilistic) event</strong> can produce different outcomes even under identical conditions — that's the "level of randomness" probability tries to measure.</p>
      <div class="callout">
        <div class="callout-title">The probability scale</div>
        <p>Every probability sits between 0 and 1. <mark class="hl">0 means a null event</mark> that will never happen; <mark class="hl">1 means a certain event</mark> that will happen for sure.</p>
      </div>
      <p>Three axioms do almost all the work: <strong>complementary probability</strong> (P(Ā) = 1 − P(A)), the <strong>addition rule</strong> for "or" (P(A∪B) = P(A) + P(B) − P(A∩B)), and <strong>conditional probability</strong> for "given that" (P(A|B) = P(A∩B)/P(B)). The lecture frames this as a linguistic problem: "or" always means union/addition, "and" always means intersection/multiplication — spotting the keyword tells you which rule to reach for.</p>
      <div class="example">
        <div class="example-title">Worked example — contingency table</div>
        <p>100 job candidates: 70 hold a third-level degree (D), 60 speak a foreign language (F), 50 hold both.</p>
        <p><strong>P(D or F)</strong> = P(D) + P(F) − P(D∩F) = 0.70 + 0.60 − 0.50 = <mark class="hl">0.80</mark></p>
        <p><strong>P(D | F)</strong> = P(D∩F) / P(F) = 50/60 = <mark class="hl">0.8333</mark> — knowing someone speaks a foreign language, there's about an 83% chance they also hold a degree.</p>
      </div>
      <p>When events happen in sequence rather than simultaneously, a <strong>tree diagram</strong> replaces the contingency table — multiply along each branch, then add across the branches that lead to the outcome you want.</p>
      <div class="callout teal">
        <div class="callout-title">Bayes' theorem</div>
        <p>Bayes' rule revises a probability once new information arrives. In the classic example — 7% of a population has lung disease, 90% of them smoke, vs. 25.3% of healthy people who smoke — the probability that a <em>randomly chosen smoker</em> has the disease works out to just <mark class="hl teal">P(L₂|S) = 0.211</mark>, far lower than intuition suggests. This exact mechanism — revising a probability given evidence — is what a Naive Bayes classifier in scikit-learn automates for machine learning.</p>
      </div>
    `,
    topics: [
      "Module overview: lecturer introduction, daily class structure, assessment breakdown, recommended books",
      "Why statistics matters in the age of AI — critical thinking about misleading statistics",
      "Deterministic vs. stochastic (probabilistic) events",
      "Basic probability formula and the 0–1 scale (null vs. certain events)",
      "Colloquial language ↔ probability operations: \"or\" = union = addition, \"and\" = intersection = multiplication",
      "Axioms: complementary probability, addition rule, conditional probability",
      "Contingency tables for simultaneous events",
      "Tree diagrams for consecutive/sequential events",
      "Bayes' theorem — revising probabilities with new information",
      "Application: Bayes' theorem in machine learning (Naive Bayes classifier, scikit-learn)"
    ],
    formulas: [
      "P(A) = favourable cases of A / total cases",
      "P(Ā) = 1 − P(A)",
      "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
      "P(A | B) = P(A ∩ B) / P(B)",
      "Bayes' rule: P(Aᵢ | B) = [P(Aᵢ)·P(B|Aᵢ)] / Σ P(Aⱼ)·P(B|Aⱼ)"
    ],
    materials: [
      "SDA_0_Module_Presentation.pdf — course overview & logistics",
      "SDA_1_Probabilities.pdf — probability, Bayes' theorem, ML application"
    ],
    videos: [
      { label: "Video 1", url: "https://drive.google.com/file/d/1cXSv8P5-DvENKKyIWUGdqx2WA7j68Nus/view?usp=sharing" },
      { label: "Video 2", url: "" }
    ],
    transcript: ""
  },
  {
    id: 2,
    dates: "21 – 27 September",
    title: "Applied Probability Lab (Python)",
    status: "done",
    summary:
      "Hands-on lab applying Week 1's probability concepts in Python, working with real survey data.",
    reading: `
      <p>This week moves straight from formulas to code: the same contingency-table and conditional-probability problems from Week 1 get solved in Python, now against a real dataset instead of a textbook example — the Deloitte 2024 Gen Z &amp; Millennial Survey.</p>
      <div class="callout">
        <p>Translating a word problem into code follows the same discipline as doing it by hand: define your events, build the table (<code>pandas.crosstab</code> does this in one line), then apply the same addition/conditional rules — just on real survey counts instead of textbook numbers.</p>
      </div>
    `,
    topics: [
      "Translating probability problems (contingency tables, conditional probability) into Python code",
      "Working with a real dataset: the Deloitte 2024 Gen Z & Millennial Survey",
      "Working with the \"Degree & Language\" practice dataset"
    ],
    formulas: [],
    materials: [
      "Code_Probability-20261017/ — in-class Python code",
      "Degree_Language_Dataset.csv — practice dataset",
      "deloitte-2024-genz-millennial-survey.pdf — real-world dataset for probability exercises"
    ],
    videos: [
      { label: "Video 1", url: "" },
      { label: "Video 2", url: "" }
    ],
    transcript: ""
  },
  {
    id: 3,
    dates: "28 September – 4 October",
    title: "Random Variables, Binomial Distribution & Descriptive Statistics",
    status: "done",
    summary:
      "From a single probability to a full probability distribution: random variables, the binomial distribution, and the first descriptive-statistics toolkit (central tendency & dispersion).",
    reading: `
      <p>A random variable formalises "the result of a chance event." Roll a die and call the outcome X: its <strong>domain</strong> is {1, 2, 3, 4, 5, 6}, each with probability 1/6. From that table, two numbers summarise the whole variable:</p>
      <div class="example">
        <div class="example-title">Worked example — rolling a die</div>
        <p><strong>Expected value</strong> E(X) = ΣX·P(X) = <mark class="hl">3.5</mark> — the long-run average outcome.</p>
        <p><strong>Variance</strong> Var(X) = 2.9164, so the <strong>standard deviation</strong> is √2.9164 = <mark class="hl">1.70</mark>. The result is reported as 3.5 ± 1.70.</p>
      </div>
      <p>The <strong>binomial distribution</strong> reuses this same idea for a specific, very common shape: "X = number of elements with an attribute, within a limit n." It needs only two parameters — <strong>n</strong> (sample size) and <strong>p</strong> (probability of the attribute), with q = 1 − p.</p>
      <ul class="tech-grid">
        <li><strong>n = 10</strong>people sampled</li>
        <li class="c2"><strong>p = 0.20</strong>probability of "success" (smoker)</li>
        <li class="c3"><strong>q = 0.80</strong>probability of "failure"</li>
      </ul>
      <div class="example">
        <div class="example-title">Worked example — 20% of Dublin smokes, sample of 10</div>
        <p>P(exactly 3 smoke) = <mark class="hl">0.2013</mark> · P(fewer than 3 smoke) = 0.6777 · P(none smoke) = 0.1074</p>
        <p>Expected smokers: E(X) = n·p = <mark class="hl">2 people</mark>, with Var(X) = 1.6 people² and SD = 1.2649 people.</p>
      </div>
      <p>Descriptive statistics then describe a whole dataset rather than a single variable. <strong>Mean, median and mode</strong> coinciding marks a symmetric distribution; when they pull apart, the direction they spread in tells you the <strong>skew</strong> (the mean trails toward the longer tail).</p>
      <div class="callout gold">
        <div class="callout-title">Dispersion, worked</div>
        <p>For a 10-person age sample with mean 53: <strong>variance</strong> S² = 1390 years², <strong>standard deviation</strong> S = 37.28 years, and <strong>coefficient of variation</strong> VC = (S/x̄)×100 = <mark class="hl">70.33%</mark> — a CV this high signals a sample that's very spread out relative to its average.</p>
      </div>
    `,
    topics: [
      "Random variables: discrete vs. continuous; defining the domain of a variable",
      "Expected value E(X), variance and standard deviation of a random variable (by hand and in Excel)",
      "Properties of expected value: E(a)=a, E(aX)=aE(X), E(X+Y)=E(X)+E(Y), E(XY)=E(X)E(Y) (independent variables)",
      "Probability distributions and why we use them instead of raw random variables",
      "Binomial distribution: structure X = number of elements with an attribute (within a limit n)",
      "Binomial parameters n, p, q = 1−p; exact / less-than / more-than / between / none calculations",
      "Expected value, variance & standard deviation of a binomial variable",
      "Descriptive statistics: mean, median, mode; skewness (negative, normal, positive)",
      "Measures of dispersion: variance, standard deviation, coefficient of variation, kurtosis",
      "Quartiles, interquartile range (IQR) and box plots"
    ],
    formulas: [
      "E(X) = Σ X·P(X)",
      "Var(X) = Σ P(X)·[X − E(X)]²,  SD(X) = √Var(X)",
      "Binomial: P(X=x) = C(n,x)·pˣ·q^(n−x)",
      "Binomial mean: E(X) = n·p   |   Variance: V(X) = n·p·q",
      "Sample mean: x̄ = Σx / n",
      "Sample variance: s² = Σ(xᵢ − x̄)² / (n − 1)",
      "Coefficient of variation: VC = (S / x̄) × 100"
    ],
    materials: [
      "3.1Random Variables + Binomial.pdf",
      "SDA_2_Descriptive_Inference.pdf",
      "Code with Bayes_Probability-20261017/",
      "QQ_Descriptive-20261017/",
      "Data_CSO.csv, QQI descriptive analytics CSO.txt — CSO descriptive-analytics dataset"
    ],
    videos: [
      { label: "Video 1", url: "" },
      { label: "Video 2", url: "" }
    ],
    transcript: ""
  },
  {
    id: 4,
    dates: "5 – 11 October",
    title: "The Normal Distribution",
    status: "done",
    summary:
      "The most important continuous distribution in statistics: the Gaussian / bell curve, the empirical rule, Z-scores, and a real business application.",
    reading: `
      <p>Not every dataset is binomial — Bernoulli, Exponential, Chi-Square, Poisson and Normal each fit a different shape of data, chosen by what the variable represents (a binary outcome, a waiting time, a count in an interval, a continuous measurement...). The <strong>normal distribution</strong> is the one that matters most: continuous, symmetric, bell-shaped, and the backbone of inferential statistics.</p>
      <div class="callout">
        <div class="callout-title">The empirical rule</div>
        <p>For any normal distribution, <mark class="hl">68%</mark> of values fall within 1 standard deviation of the mean, <mark class="hl">95%</mark> within 2, and <mark class="hl">99.7%</mark> within 3.</p>
      </div>
      <div class="example">
        <div class="example-title">Applied case — "FitFash" sizing</div>
        <p>A clothing retailer compares average height and spread by region (e.g. European men: mean 178 cm, SD 7.5 cm) to understand why online sizing doesn't fit every market the same way — the empirical rule turns those two numbers into a real expected range of heights per region.</p>
      </div>
      <p>To compare any individual value against a normal distribution, convert it to a <strong>Z-score</strong> — how many standard deviations it sits from the mean.</p>
      <div class="example">
        <div class="example-title">Worked example</div>
        <p>Average male height 175 cm, SD 7 cm. P(height &gt; 190 cm) = 1 − norm.cdf(190, 175, 7) = <mark class="hl">0.0162</mark> — only about 1.6% of men are taller than 190 cm.</p>
      </div>
    `,
    topics: [
      "Why different probability distributions exist (Bernoulli, Binomial, Exponential, Chi-Square, Poisson, Normal) and when to use each",
      "The normal (Gaussian) distribution: continuous, symmetric, bell-shaped",
      "The empirical rule: 68% / 95% / 99.7% of data within 1 / 2 / 3 standard deviations",
      "Applied case study: \"FitFash\" clothing sizing — comparing height distributions across regions",
      "Z-scores and standardisation: Z = (x − μ) / σ",
      "Computing normal probabilities in Python with scipy.stats.norm.cdf"
    ],
    formulas: [
      "PDF: f(x) = 1/(σ√2π) · e^(−½·((x−μ)/σ)²)",
      "Z = (x − μ) / σ",
      "P(X > x) = 1 − norm.cdf(x, μ, σ)   [scipy.stats]"
    ],
    materials: [
      "SDA_3_Normal_Distribution.pdf",
      "cars.csv — practice dataset",
      "Code explained in the Class with comments-20261017/"
    ],
    videos: [
      { label: "Video 1", url: "" },
      { label: "Video 2", url: "" }
    ],
    transcript: ""
  },
  {
    id: 5,
    dates: "12 – 18 October",
    title: "Normality Testing",
    status: "done",
    summary:
      "How to check — formally and visually — whether a dataset is actually normally distributed, plus what distorts normality in real data. CA2 is released this week.",
    reading: `
      <p>The empirical rule and Z-scores only work if the data really is normally distributed — which has to be checked, not assumed. Three formal tests do this, each with a different trade-off:</p>
      <ul class="tech-grid">
        <li><strong>Shapiro-Wilk</strong>tests a sample against a normal distribution specifically (1965)</li>
        <li class="c2"><strong>Anderson-Darling</strong>more sensitive, but needs critical values recalculated per distribution</li>
        <li class="c3"><strong>Kolmogorov-Smirnov</strong>checks a sample against any specified distribution</li>
      </ul>
      <div class="callout teal">
        <div class="callout-title">P-P vs. Q-Q plots</div>
        <p>A <strong>P-P plot</strong> compares cumulative probabilities and is best for spotting <mark class="hl teal">skewness</mark>. A <strong>Q-Q plot</strong> compares quantiles and is best for spotting problems in the <mark class="hl teal">tails</mark> of the distribution.</p>
      </div>
      <p>Normality breaks down for predictable reasons: high <strong>kurtosis</strong> (too peaked or too flat), <strong>outliers/skewness</strong> dragging the mean and SD off-centre, a <strong>restricted range</strong> of data, or <strong>bimodality</strong> from two distinct underlying groups hiding in one dataset. Logarithm and Box-Cox transformations are the usual fix when a variable is salvageable.</p>
    `,
    topics: [
      "Recap: the normal distribution, empirical rule, Z-scores",
      "Formal normality tests: Shapiro-Wilk (1965), Anderson-Darling, Kolmogorov-Smirnov",
      "Visual diagnostics: P-P plots (skewness/asymmetry) vs. Q-Q plots (tail behaviour)",
      "Factors that distort normality: kurtosis, outliers/skewness, range of data, bimodality",
      "Transformations to improve normality: logarithm, Box-Cox",
      "CA2 released: dataset-based statistical analysis + 10-minute recorded presentation"
    ],
    formulas: [],
    materials: [
      "SDA_3.1_Normality_Test.pdf",
      "Alzheimer.csv — practice dataset",
      "Exercises_TestNormality-20261017/",
      "Final Version-20261017/"
    ],
    videos: [
      { label: "Video 1", url: "" },
      { label: "Video 2", url: "" }
    ],
    transcript: ""
  },
  {
    id: 6,
    dates: "19 – 25 October",
    title: "Upcoming",
    status: "upcoming",
    summary:
      "Materials for this week have not been published by the lecturer yet. This card will fill in automatically once slides, code or datasets are added to the course folder and content.js is updated.",
    topics: [],
    formulas: [],
    materials: [],
    videos: [
      { label: "Video 1", url: "" },
      { label: "Video 2", url: "" }
    ],
    transcript: ""
  }
];
