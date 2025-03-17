import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In a real application, you would send this data to your email service
    // Example with a hypothetical email service:
    // await sendEmail({
    //   to: "your-email@example.com",
    //   subject: `New contact from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    // })

    // For demo purposes, we'll just log the data and return a success response
    console.log("Contact form submission:", { name, email, message });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
