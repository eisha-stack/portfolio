export type Experience = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    id: "visee",
    role: "Software Developer Intern",
    company: "VISEE AI LABS Pvt Ltd",
    location: "Bengaluru, Karnataka",
    period: "Nov 2025 – Present",
    highlights: [
      "Built an AI asset management system with Gemini Vision API and Supabase for automated image-based tracking across 15 categories.",
      "Deployed a full-stack salon platform with booking, admin dashboard, and a Firebase chatbot — onboarded 10 businesses with 50+ daily interactions.",
      "Designed an AI voice agent integrating ElevenLabs and Sarvam AI with multi-provider fallback for appointment booking and support.",
    ],
  },
  {
    id: "tap-academy",
    role: "Java Full Stack Trainee / Intern",
    company: "Tap Academy",
    location: "Bengaluru, Karnataka",
    period: "Feb 2025 – Jul 2025",
    highlights: [
      "Completed intensive training in Core Java, Spring Boot, REST APIs, and relational database design.",
      "Built a food delivery app with Spring Boot backend and React/Angular frontend — auth, orders, cart, checkout, and payments.",
      "Designed RESTful APIs and database schemas for order management, user accounts, and transactions.",
    ],
  },
  {
    id: "cdac",
    role: "Summer Intern",
    company: "C-DAC",
    location: "Chennai, Tamil Nadu",
    period: "Jun 2023 – Jul 2023",
    highlights: [
      "Developed an Android attendance system using FaceNet embeddings for real-time facial recognition.",
      "Trained and deployed YOLOv8 models for on-device object detection via fine-tuning and quantization.",
    ],
  },
];
