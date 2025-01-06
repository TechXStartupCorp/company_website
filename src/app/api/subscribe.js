import { NextResponse } from "next/server";

export async function POST(req) {
console.log("Received POST request at /api/subscribe");
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { message: "Invalid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.EMAILOCTOPUS_PUBLIC_KEY;
    const listId = process.env.EMAILOCTUPUS_LIST_ID;

    console.log("API Key:", apiKey);
    console.log("List ID:", listId);

    if (!apiKey || !listId) {
      return NextResponse.json(
        { message: "API key or List ID missing." },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://emailoctopus.com/api/1.6/lists/${listId}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
        }),
      }
    );

    if (!response.ok) {
      const responseText = await response.text();
      console.error("Error subscribing:", responseText);
      return NextResponse.json(
        { message: "Subscription failed. Try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Successfully subscribed!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}