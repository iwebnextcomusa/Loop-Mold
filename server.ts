import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini AI client server-side
const getAIClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build'
      }
    }
  });
};

// API Endpoint for AI Chatbot
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const ai = getAIClient();
    if (!ai) {
      return res.json({
        response: "Hello! I am the Loop Mold AI assistant. I am here to help with your 3D printing and prototyping needs. Loop Mold is based in Lake Elsinore, CA, providing high-precision custom 3D printing, rapid prototyping, and CAD modeling. Contact us at (949) 350-7410 or rul.vel107@gmail.com for instant human assistance!"
      });
    }

    const systemInstruction = `
You are the official AI Assistant for "Loop Mold", a premier 3D printing and rapid prototyping company located in Lake Elsinore, California.
Your goal is to answer questions concisely, professionally, and accurately about Loop Mold's services, materials, capabilities, turnaround times, and quote requests.

Company Details:
- Business Name: Loop Mold
- Location: Lake Elsinore, California (serving Riverside County, Southern California, and nationwide)
- Phone: (949) 350-7410
- Email: rul.vel107@gmail.com
- Core Services: Custom 3D Printing, Rapid Prototyping, Functional Parts, Product Development, CAD Assistance, Reverse Engineering, Small Batch Manufacturing, Replacement Parts, Prototype Validation.
- Target Customers: Engineers, Inventors, Small businesses, Manufacturers, Automotive enthusiasts, Designers, Hobbyists, Entrepreneurs.
- Materials Available: PLA, ABS, PETG, Nylon, TPU (flexible), Carbon Fiber composite, High-detail Resin, Engineering Plastics (PEEK/Polycarbonate).
- File Formats Accepted: STL, STEP, IGES, OBJ, 3MF, CAD models.
- Turnaround Time: Standard 24-48 hours for rapid prototypes, 3-5 days for small batch production, expedited options available.
- Key Selling Points: High precision, tight tolerances, fast turnaround, competitive pricing, local California support, personal engineering consultation.

Always offer friendly, helpful, technical guidance. Keep answers concise, clear, and direct. When appropriate, encourage the user to click "Request a Quote" or contact us via phone at (949) 350-7410 or email at rul.vel107@gmail.com.
`;

    const chat = ai.chats.create({
      model: "gemini-3.6-flash",
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    const result = await chat.sendMessage({ message });
    return res.json({ response: result.text });
  } catch (err: any) {
    console.error("Error in /api/chat:", err);
    return res.status(500).json({
      error: "Failed to generate AI response",
      details: err.message || String(err)
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Loop Mold API" });
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Loop Mold server running on http://localhost:${PORT}`);
  });
}

startServer();
