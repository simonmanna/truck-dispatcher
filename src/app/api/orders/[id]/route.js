// app/api/orders/[id]/route.js
// Get, update, and delete order by ID
export async function GET(request, { params }) {
  try {
    const { id } = params;

    const { data, error } = await supabase
      .from("orders")
      .select(
        `
        *,
        customers:customer_id (id, name),
        pickup:pickup_location_id (id, name, address),
        delivery:delivery_location_id (id, name, address),
        creator:created_by (id, name)
      `,
      )
      .eq("id", id)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();

    // Add updated_at
    body.updated_at = new Date().toISOString();

    const { data, error } = await supabase
      .from("orders")
      .update(body)
      .eq("id", id)
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data: data[0] });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    const { error } = await supabase.from("orders").delete().eq("id", id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "Order deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
