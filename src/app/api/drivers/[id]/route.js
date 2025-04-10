// 3. File: app/api/drivers/[id]/route.js - API routes for specific driver
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET specific driver
export async function GET(request, { params }) {
  try {
    const { id } = params;

    const { data, error } = await supabase
      .from("drivers")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;
    if (!data) {
      return NextResponse.json({ error: "Driver not found" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT update driver
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const driverData = await request.json();

    // Add updated_at timestamp
    driverData.updated_at = new Date().toISOString();

    const { data, error } = await supabase
      .from("drivers")
      .update(driverData)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;
    if (!data) {
      return NextResponse.json({ error: "Driver not found" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// DELETE driver
export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    const { error } = await supabase.from("drivers").delete().eq("id", id);

    if (error) throw error;

    return NextResponse.json({ message: "Driver deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
