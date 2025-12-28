📝 Priority-Based To-Do Web Application
📌 Project Overview

This project is a priority-based to-do web application built using Next.js and React. It helps users organize tasks according to priority levels (High, Medium, Low) and focus on the most important pending tasks first. The application also provides an AI-like focus suggestion feature implemented using a custom backend API route.

🚀 Features

Add tasks with priority levels (High / Medium / Low)

Mark tasks as completed

Filter tasks (All, High Priority, Completed)

Remove tasks

Persistent storage using localStorage

AI-style “Today’s Focus Tasks” suggestion

Clean, responsive UI

🧠 AI Suggestion Logic (No External AI Used)

The application includes a backend API route (/api/ai-focus)

It analyzes the task list and:

Filters incomplete tasks

Sorts them based on priority

Selects the top 3 most important tasks

Generates a motivational focus message

No Gemini API or external AI service is used

🛠️ Technologies Used

Next.js (App Router)

React

JavaScript

Tailwind CSS

Next.js API Routes

Browser localStorage

📂 Project Structure
/app
├── api
│ └── ai-focus
│ └── route.js
├── components
│ └── TodoApp.js
├── page.js

🔁 How It Works

User adds tasks with a selected priority.

Tasks are stored in localStorage.

Clicking “AI Suggest Today’s Focus” sends tasks to the backend API.

The API processes tasks and returns a focus message.

The message is displayed on the UI.
▶️ How to Run the Project
npm install
npm run dev

Open in browser:

http://localhost:3000

🎯 Project Type

Web Application

Includes a backend API route

Not dependent on any third-party AI services

✅ Conclusion

This project demonstrates effective task management using priority-based logic, frontend-backend interaction in Next.js, and a simple AI-inspired decision system to improve user productivity.
