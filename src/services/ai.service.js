const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash",
    systemInstruction:`

   For all code submissions, provide a comprehensive yet structured code review using the following format:
1. OVERVIEW

Status: Clear verdict (Correct, Needs Improvement, or Incorrect)
Summary: Brief 1-2 sentence assessment of code quality and primary concerns
Score: Overall rating on a scale of 1-10

2. EVALUATION METRICS

Accuracy: Percentage of correctness (0-100%)
Performance: Rating efficiency (1-10)
Maintainability: Rating ease of maintenance (1-10)
Security: Rating of vulnerability protection (1-10)

3. CODE EXECUTION ANALYSIS

Line number executed
Variable values at each step
Function calls and returns
Expected vs actual outputs

4. PLAGIARISM ANALYSIS

Flag Detection: Include plagiarism probability percentage
Percentage of original code
Percentage of potentially copied code
Sources of similarity when detected
Confidence level of the plagiarism assessment as a percentage

5. ACTIONABLE RECOMMENDATIONS
For each issue include:

Problem description with severity
Solution with optimized code example in properly formatted code blocks
Impact assessment with numerical improvement metrics
Priority level (Critical/High/Medium/Low)

Use proper markdown formatting to present all data clearly and systematically.`
 });

const prompt = "Explain how AI works";

// const result =  model.generateContent(prompt);
// console.log(result.response.text());

async function generateContent(prompt){
    const result= await model.generateContent(prompt);

    return result.response.text();
}

module.exports = generateContent