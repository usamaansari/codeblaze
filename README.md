# 🔥 CodeBlaze – Build Web Apps with Just a Prompt

**CodeBlaze** is an AI-powered web application that turns your **text prompts into fully functional web app code**. Built with modern technologies like **Next.js**, **MongoDB**, and **Gemini API**, it offers seamless chat functionality to **add new features** or modify apps using plain language. Whether you're a developer or a beginner, CodeBlaze helps you prototype and build faster than ever.

---

## 🚀 Features

- 🧠 **AI-Powered Code Generation** – Turn plain English into functional web components using Gemini API.
- 💬 **Smart Chat for App Enhancements** – Ask to add features like login forms, dark mode, charts, etc., and CodeBlaze will build it for you.
- 🔐 **Google Authentication** – Sign in securely using Google OAuth.
- 💳 **PayPal Integration** – Accept payments or unlock premium features.
- 📦 **Code Preview & Export** – View generated code and download complete app structures.
- 🧭 **Lucide Icons** – Beautiful, modern icons built-in.
- ☁️ **MongoDB Atlas** – Scalable, cloud-hosted database for storing user sessions and project data.
- 🧪 **CodeSandbox Compatible** – Preview and edit code instantly in-browser.

---

## 🧰 Tech Stack

| Tech              | Purpose                                  |
| ----------------- | ---------------------------------------- |
| **Next.js**       | React-based full-stack framework         |
| **MongoDB Atlas** | Cloud-based NoSQL database               |
| **Gemini API**    | AI text-to-code and chat processing      |
| **PayPal SDK**    | Payment integration                      |
| **NextAuth.js**   | Google OAuth authentication              |
| **Lucide Icons**  | Lightweight SVG icons                    |
| **Tailwind CSS**  | Utility-first CSS framework              |
| **CodeSandbox**   | Online editor for real-time code preview |

---

## ⚙️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/codeblaze.git
cd codeblaze

2. Install Dependencies
npm install

3. Configure Environment Variables
Create a .env.local file and add your secrets:

MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_oauth_client_id
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
NEXTAUTH_SECRET=random_generated_secret
NEXTAUTH_URL=http://localhost:3000
GEMINI_API_KEY=your_gemini_api_key
PAYPAL_CLIENT_ID=your_paypal_client_id

🧪 Run the App Locally
npm run dev
Open http://localhost:3000 in your browser.

✨ How It Works
Enter a prompt like “Build me a landing page with a navbar and hero section”.

CodeBlaze uses Gemini API to convert the text into React + Tailwind code.

Chat to enhance the app: “Add a dark mode toggle” or “Include a pricing section”.

Export or preview the full project structure with code.

💳 PayPal Integration
Use the PayPal sandbox for testing. When ready, switch to live credentials to accept real payments.

🖼️ Screenshots

Chat with CodeBlaze to build and enhance web apps


Preview the actual code for your project instantly

instantly

📁 Project Structure
/components       → UI & shared components
/pages/api        → Server-side routes (auth, AI, payments)
/lib              → Helpers (MongoDB, AI models)
/styles           → Tailwind global styles
/public           → Static assets

📦 Deployment
CodeBlaze is fully deployable to:

Vercel

CodeSandbox

Render

🙌 Contributing
Pull requests and suggestions are welcome! Please open an issue to discuss what you'd like to change.

📄 License
This project is open source under the MIT License.

📬 Contact
For support, feedback, or collaboration:
📧 usamazafaransari@gmail.com
🐦 Twitter: @yourhandle
```
