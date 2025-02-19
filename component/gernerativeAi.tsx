import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_AI_KEY!);

export async function generateEmailReply(emailContent: string, command?: string) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
    Original Email Content:
    ${emailContent}

    Instructions:
    ${command ? command : 'Generate a professional email reply'}
    
    Requirements:
    - Maintain appropriate email etiquette
    - Include a proper greeting and closing
    - Address all key points from the original email
    - Keep the tone consistent with the command
    - Format the response with proper spacing and paragraphs
    
    Please generate the email response:
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating email reply:', error);
    return 'Error generating reply. Please try again.';
  }
}