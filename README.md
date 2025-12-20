# Priority To-Do App with AI Focus Assistant

## 📌 Problem Statement

Students often manage multiple academic and personal tasks but lack
a structured way to prioritize them. This leads to missed deadlines
and inefficient task planning.

## 💡 Solution

This project is a **Priority-based To-Do List** built using **Next.js**
that helps users organize tasks based on importance and completion status.
It also includes an **AI-powered Focus Assistant** that suggests the most
important tasks to work on for the day.

---

## 🚀 Features

- Add tasks with **High / Medium / Low** priority
- Mark tasks as completed
- Filter tasks by:
  - All
  - High Priority
  - Completed
- Persistent storage using **LocalStorage**
- **AI Focus Assistant** to recommend daily focus tasks

---

## 🤖 AI Focus Assistant

The application includes an intelligent focus assistant that analyzes:

- Task priority
- Completion status

Based on this analysis, it suggests the **top 3 most important pending tasks**
for the day along with a short productivity message.  
This helps users make better decisions without manually reviewing all tasks.

> The AI logic is implemented using structured decision-making rules to
> simulate intelligent task prioritization.

---

## 🛠 Tech Stack

- **Next.js (App Router)**
- React (Hooks)
- JavaScript
- CSS
- LocalStorage

---

## 📂 Project Structure

priority-todo/
├── app/
│ ├── page.js
│ ├── layout.js
│ └── globals.css
├── components/
│ └── TodoApp.js
├── README.md
└── package.json

## ▶️ How to Run the Project

1. Clone the repository

```bash
git clone https://github.com/your-username/priority-todo.git
```

npm install
npm run dev
