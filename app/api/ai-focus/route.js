import { NextResponse } from "next/server";

export async function POST(req) {
  const { todos } = await req.json();

  const priorityOrder = { High: 1, Medium: 2, Low: 3 };

  const important = todos
    .filter(todo => !todo.done)
    .sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    )
    .slice(0, 3);

  let message = " Today's Focus Tasks:\n\n";

  if (important.length === 0) {
    message += "No pending tasks. You're all caught up! 🎉";
  } else {
    important.forEach((t, i) => {
      message += `${i + 1}. ${t.task} (${t.priority})\n`;
    });
    message += "\n Focus on high-priority tasks first.";
  }

  return NextResponse.json({ suggestion: message });
}
