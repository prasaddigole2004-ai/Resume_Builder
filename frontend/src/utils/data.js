import TEMPLATE_ONE_IMG from "../assets/template-one.png";
import TEMPLATE_TWO_IMG from "../assets/template-two.png";
import TEMPLATE_THREE_IMG from "../assets/template-three.png";

export const resumeTemplates = [
  {
    id: "01",
    thumbnailImg: TEMPLATE_ONE_IMG,
    colorPaletteCode: "themeOne",
  },
  {
    id: "02",
    thumbnailImg: TEMPLATE_TWO_IMG,
    colorPaletteCode: "themeTwo",
  },
  {
    id: "03",
    thumbnailImg: TEMPLATE_THREE_IMG,
    colorPaletteCode: "themeThree",
  },
];

export const themeColorPalette = {
  themeOne: [
    ["#EBFDFF", "#A1F4FD", "#CEFAFE", "#00B8DB", "#4A5565"],

    ["#E9FBF8", "#B4EFE7", "#93E2DA", "#2AC9A0", "#3D4C5A"],
    ["#F5F4FF", "#E0DBFF", "#C9C2F8", "#8579D1", "#4B4B5C"],
    ["#F0FAFF", "#D6F0FF", "#AFDEFF", "#3399FF", "#445361"],
    ["#FFF5F7", "#FFE0EC", "#FAC6D4", "#F6729C", "#5A5A5A"],
    ["#F9FAFB", "#E4E7EB", "#CBD5E0", "#7F9CF5", "#2D3748"],

    ["#F4FFFD", "#D3FDF2", "#B0E9D4", "#34C79D", "#384C48"],
    ["#FFF7F0", "#FFE6D9", "#FFD2BA", "#FF9561", "#4C4743"],
    ["#F9FCFF", "#E3F0F9", "#C0DDEE", "#6CA6CF", "#46545E"],
    ["#FFFDF6", "#FFF4D7", "#FFE7A0", "#FFD000", "#57534E"],
    ["#EFFCFF", "#C8F0FF", "#99E0FF", "#007BA7", "#2B3A42"],

    ["#F7F7F7", "#E4E4E4", "#CFCFCF", "#4A4A4A", "#222222"],
    ["#E3F2FD", "#90CAF9", "#A8D2F4", "#1E88E5", "#0D47A1"],
  ],
};

export const DUMMY_RESUME_DATA = {
  profileInfo: {
    profileImg: null,
    profilePreviewUrl: "",
    fullName: "Prasad Digole",
    designation: "Data Analyst",
    summary:
      "Detail-oriented Data Analyst with 4+ years of experience transforming raw data into actionable insights. Skilled in SQL, Python, Power BI, and statistical analysis. Passionate about data storytelling, business intelligence, and driving data-backed decision-making.",
  },

  contactInfo: {
    email: "prasad.digole.analytics@gmail.com",
    phone: "+91 9123456789",
    location: "Pune, India",
    linkedin: "https://linkedin.com/in/prasad-digole",
    github: "https://github.com/prasad-digole",
    website: "https://prasadanalytics.tech",
  },

  workExperience: [
    {
      company: "Insightify Analytics Pvt Ltd",
      role: "Senior Data Analyst",
      startDate: "2022-06",
      endDate: "2025-02",
      description:
        "Led data analysis projects for retail and fintech clients. Built interactive Power BI dashboards improving reporting efficiency by 40%. Automated ETL processes using Python and SQL, reducing manual effort by 30%.",
    },
    {
      company: "DataBridge Solutions",
      role: "Junior Data Analyst",
      startDate: "2020-07",
      endDate: "2022-05",
      description:
        "Performed exploratory data analysis and created KPI reports. Wrote complex SQL queries to extract and clean data. Assisted in predictive modeling and improved forecasting accuracy by 20%.",
    },
  ],

  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "Savitribai Phule Pune University",
      startDate: "2016",
      endDate: "2020",
    },
  ],

  skills: [
    { name: "SQL", progress: 90 },
    { name: "Python (Pandas, NumPy)", progress: 85 },
    { name: "Power BI", progress: 88 },
    { name: "Excel (Advanced)", progress: 92 },
    { name: "Tableau", progress: 75 },
    { name: "Statistics & Probability", progress: 80 },
  ],

  projects: [
    {
      title: "Sales Performance Dashboard",
      description:
        "Designed an interactive Power BI dashboard to track regional sales KPIs, revenue growth, and customer trends. Helped management identify underperforming regions and increase revenue by 15%.",
      github: "https://github.com/prasad-digole/sales-dashboard",
      liveDemo: "https://sales-insights-demo.vercel.app",
    },
    {
      title: "Customer Churn Prediction",
      description:
        "Built a machine learning model using Python and Scikit-learn to predict customer churn with 85% accuracy. Implemented feature engineering and data preprocessing pipelines.",
      github: "https://github.com/prasad-digole/churn-prediction",
      liveDemo: "https://churn-analysis-demo.vercel.app",
    },
  ],

  certifications: [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      year: "2023",
    },
    {
      title: "Microsoft Power BI Data Analyst Associate",
      issuer: "Microsoft",
      year: "2024",
    },
  ],

  languages: [
    { name: "English", progress: 90 },
    { name: "Marathi", progress: 95 },
    { name: "Hindi", progress: 85 },
  ],

  interests: [
    "Data Visualization",
    "Business Intelligence",
    "Stock Market Analysis",
    "Reading Data Science Blogs",
  ],
};
