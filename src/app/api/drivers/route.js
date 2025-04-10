// 2. File: app/api/drivers/route.js - API routes for drivers
import { NextResponse } from "next/server";
import { supabase } from "../../lib/supabaseClient";

// GET all drivers
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = supabase.from("drivers").select("*");

    // Handle filtering
    const status = searchParams.get("status");
    if (status) {
      query.eq("status", status);
    }

    const { data, error } = await query.order("full_name");

    if (error) throw error;

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST create new driver
export async function POST(request) {
  try {
    const driverData = await request.json();

    const { data, error } = await supabase
      .from("drivers")
      .insert(driverData)
      .select()
      .single();

    if (error) throw error;

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
