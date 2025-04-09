// app/api/orders/route.js
import { supabase } from "../../lib/supabaseClient";
import { NextResponse } from "next/server";

// Get all orders
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const customer_id = searchParams.get("customer_id");

    let query = supabase.from("orders").select(`
        *,
        customers:customer_id (id, name),
        pickup:pickup_location_id (id, name, address),
        delivery:delivery_location_id (id, name, address),
        creator:created_by (id, name)
      `);

    if (status) {
      query = query.eq("status", status);
    }

    if (customer_id) {
      query = query.eq("customer_id", customer_id);
    }

    const { data, error } = await query.order("created_at", {
      ascending: false,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Create a new order
export async function POST(request) {
  try {
    const body = await request.json();

    // Generate a reference code if one isn't provided
    if (!body.reference_code) {
      const timestamp = new Date().getTime().toString().slice(-6);
      const random = Math.floor(Math.random() * (999 - 100) + 100);
      body.reference_code = `ORD-${timestamp}-${random}`;
    }

    const { data, error } = await supabase.from("orders").insert(body).select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data: data[0] }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
