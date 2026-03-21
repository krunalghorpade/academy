import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, interest } = body;

    // In a real application, you would connect to a database or CRM here.
    // E.g., Firebase, Supabase, SendGrid, etc.
    console.log('New Academy Application Received:', { name, phone, interest });

    // Mock successful database save
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({ success: true, message: 'Application submitted successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
