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
