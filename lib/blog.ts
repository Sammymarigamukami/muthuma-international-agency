
interface BlogPost {
    id: string;
    title: string;
    slug: string;
    category: string;
    excerpt: string;
    image: string;
    content: string;
    date: string;
    author: string;
    tags: string[];
}
export const samplePosts: BlogPost[] = [

  {
    id: "post-1",
    title: "How to Choose a Reliable HIV Test Kit",
    slug: "choose-reliable-hiv-test-kit",
    category: "Diagnostics",
    excerpt: "Selecting the right HIV test kit is essential for accurate results and early detection. Learn the factors to consider.",
    image: "/testImage.jpeg",
    date: "2024-06-15",
    author: "Sammy Mariga",
    tags: ["HIV", "test kit", "diagnostics", "health"],
    content: `
### Importance of Early HIV Testing
Early detection allows timely treatment and reduces transmission risk.

### Types of HIV Test Kits
- **Rapid antibody tests:** Gives results in 20 minutes.
- **Combination (4th generation) tests:** Detect both antigen and antibodies.
- **Home self-test kits:** Convenient, but ensure accuracy and certification.

### Regulatory Approvals
Look for CE-marked or FDA-approved kits. Counterfeit kits may give false results.

### Sensitivity and Specificity
- **Sensitivity:** Ability to detect true positives.
- **Specificity:** Ability to avoid false positives.

### Step-by-Step Usage
1. Wash hands thoroughly.
2. Collect sample (blood or oral fluid).
3. Follow instructions carefully.
4. Wait the recommended time and read results.

### Storage & Handling
- Keep kits away from extreme temperatures.
- Check the expiration date before use.
- Store in a dry place to avoid damage.

### Common FAQs
- Can I test immediately after exposure? No, window period applies.
- How accurate are home kits? Accuracy varies; follow instructions carefully.

### Safety Tips
- Dispose of used kits safely.
- Seek medical advice for confirmation tests.
    `
  },
  {
    id: "post-2",
    title: "Understanding Blood Sugar Tests: What You Need to Know",
    slug: "understanding-blood-sugar-tests",
    category: "Chronic Conditions",
    excerpt: "Blood sugar testing is simple—but understanding results can prevent complications. Learn how to interpret your readings.",
    image: "/sugarlevel.jpg",
    date: "2024-06-10",
    author: "Sammy Mariga",
    tags: ["blood sugar", "diabetes", "testing", "health"],
    content: `
### Types of Blood Sugar Tests
- **Fasting Blood Sugar (FBS):** Taken after 8 hours of fasting.
- **Random Blood Sugar (RBS):** Taken anytime, helpful for quick assessment.
- **HbA1c Test:** Measures average blood sugar over 3 months.

### Normal Blood Sugar Ranges
- Fasting: 70–99 mg/dL
- 2 hours post-meal: <140 mg/dL
- HbA1c: <5.7%

### Factors Affecting Results
- Food intake, stress, medications, illness, exercise.

### Frequency of Testing
- Healthy adults: at least once a year.
- Diabetics: daily self-monitoring recommended.

### Step-by-Step Home Testing
1. Wash hands.
2. Insert a test strip into your glucometer.
3. Prick finger with lancet and place blood on strip.
4. Record results accurately.

### When to See a Doctor
- Persistent high readings.
- Symptoms like excessive thirst, frequent urination, unexplained fatigue.
    `
  },
  {
    id: "post-3",
    title: "The Importance of Annual Health Checkups",
    slug: "importance-annual-health-checkups",
    category: "Preventive Medicine",
    excerpt: "Regular health checkups can detect issues early and improve your long-term well-being. Here’s what to include in your annual visit.",
    image: "/annualcheck.jpg",
    date: "2024-06-05",
    author: "Sammy Mariga",
    tags: ["health checkup", "preventive medicine", "wellness"],
    content: `
### Benefits of Preventive Screening
- Early detection of chronic diseases.
- Monitoring of vital health indicators.
- Better long-term health outcomes.

### Common Checkup Tests
- Blood pressure and heart rate.
- Blood tests: cholesterol, glucose, kidney & liver function.
- Cancer screenings (age-specific).

### Lifestyle Assessment
- Nutrition, exercise, alcohol, smoking, and stress evaluation.
- Mental health screening.

### Preparing for Your Checkup
- Bring previous medical records.
- Fast if required for blood tests.
- List current medications.

### Follow-Up
- Review results with your doctor.
- Adjust lifestyle or medications if needed.
- Schedule specialist appointments if required.
    `
  },
  {
    id: "post-4",
    title: "Common Symptoms of Vitamin Deficiency and How to Address Them",
    slug: "vitamin-deficiency-symptoms",
    category: "Nutrition & Wellness",
    excerpt: "Vitamin deficiencies can impact your energy, immunity, and overall health. Recognize the signs and know how to act.",
    image: "/vitamin.jpg",
    date: "2024-06-01",
    author: "Sammy Mariga",
    tags: ["vitamin deficiency", "nutrition", "wellness"],
    content: `
### Most Common Deficiencies
- **Vitamin D:** fatigue, bone pain, weak immunity.
- **Vitamin B12:** numbness, poor concentration, fatigue.
- **Iron:** anemia, pale skin, shortness of breath.

### Dietary Sources
- Vitamin D: sunlight, fatty fish, fortified dairy.
- B12: eggs, fish, meat.
- Iron: red meat, beans, spinach.

### Supplementation
- Use supplements only after testing.
- Follow recommended doses to avoid toxicity.

### Symptoms & Early Warning Signs
- Brittle nails or hair loss.
- Muscle weakness or cramps.
- Mood swings and cognitive issues.

### Prevention Tips
- Eat a balanced diet with a variety of foods.
- Routine blood tests if at risk.
- Address lifestyle factors like limited sun exposure.
    `
  },
  {
    id: "post-5",
    title: "Mental Health Awareness: Coping with Anxiety and Stress",
    slug: "mental-health-anxiety-stress",
    category: "Mental Health",
    excerpt: "Anxiety and stress affect daily life. Discover strategies to manage your mental well-being effectively.",
    image: "/mental.jpg",
    date: "2024-05-28",
    author: "Sammy Mariga",
    tags: ["mental health", "anxiety", "stress", "wellness"],
    content: `
### Understanding Anxiety and Stress
- Anxiety is excessive worry that affects daily functioning.
- Stress is a reaction to pressure or events in life.

### Common Causes
- Workload, relationships, financial issues, major life changes.

### Recognizing Symptoms
- Physical: headaches, fatigue, muscle tension.
- Emotional: irritability, restlessness, panic attacks.
- Behavioral: avoidance, disrupted routines.

### Coping Strategies
- Mindfulness meditation and deep breathing exercises.
- Regular physical activity.
- Maintain a structured routine and sleep hygiene.

### When to Seek Help
- Persistent symptoms affecting work, school, or social life.
- Panic attacks or suicidal thoughts.
- Consult a licensed therapist or psychologist.

### Support Networks
- Family, friends, support groups.
- Professional helplines and online resources.
    `
  },
];
