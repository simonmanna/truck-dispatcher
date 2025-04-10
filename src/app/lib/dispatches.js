// dispatches.js - Supabase client setup and CRUD operations for dispatches table

import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

/**
 * Create a new dispatch
 * @param {Object} dispatchData - Dispatch data
 * @returns {Promise} - Result of the insert operation
 */
export async function createDispatch(dispatchData) {
  const { data, error } = await supabase
    .from("dispatches")
    .insert({
      order_id: dispatchData.order_id,
      driver_id: dispatchData.driver_id,
      truck_id: dispatchData.truck_id,
      trailer_id: dispatchData.trailer_id,
      start_time: dispatchData.start_time,
      end_time: dispatchData.end_time,
      description: dispatchData.description,
      // current_status defaults to 'assigned'
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Get all dispatches with optional filtering
 * @param {Object} filters - Optional filters (status, date range, etc.)
 * @returns {Promise} - Array of dispatches
 */
export async function getDispatches(filters = {}) {
  let query = supabase.from("dispatches").select(`
    *,
    orders (
      id,
      reference_code,
      status
    ),
    drivers (
      id, 
      full_name
    ),
    trucks (
      id,
      plate_number
    ),
    trailers (
      id,
      trailer_number
    )
  `);

  // Apply filters
  if (filters.status) {
    query = query.eq("current_status", filters.status);
  }

  if (filters.driverId) {
    query = query.eq("driver_id", filters.driverId);
  }

  if (filters.orderId) {
    query = query.eq("order_id", filters.orderId);
  }

  if (filters.startDate && filters.endDate) {
    query = query
      .gte("start_time", filters.startDate)
      .lte("start_time", filters.endDate);
  }

  // Apply sorting
  if (filters.sortBy) {
    query = query.order(filters.sortBy, {
      ascending: filters.ascending ?? false,
    });
  } else {
    query = query.order("created_at", { ascending: false });
  }

  // Apply pagination
  if (filters.limit) {
    query = query.limit(filters.limit);
  }

  if (filters.offset) {
    query = query.range(
      filters.offset,
      filters.offset + (filters.limit || 10) - 1,
    );
  }

  const { data, error } = await query;

  if (error) throw error;
  return data;
}

/**
 * Get a single dispatch by ID
 * @param {String} id - Dispatch UUID
 * @returns {Promise} - Dispatch data
 */
export async function getDispatchById(id) {
  const { data, error } = await supabase
    .from("dispatches")
    .select(
      `
      *,
      orders (
        id,
        reference_code,
        customer_id,
        pickup_location_id,
        delivery_location_id,
        status
      ),
      drivers (
        id, 
        full_name,
        license_number
      ),
      trucks (
        id,
        plate_number,
        model
      ),
      trailers (
        id,
        trailer_number,
        type
      )
    `,
    )
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

/**
 * Update a dispatch
 * @param {String} id - Dispatch UUID
 * @param {Object} updates - Fields to update
 * @returns {Promise} - Updated dispatch data
 */
export async function updateDispatch(id, updates) {
  const { data, error } = await supabase
    .from("dispatches")
    .update({
      order_id: updates.order_id,
      driver_id: updates.driver_id,
      truck_id: updates.truck_id,
      trailer_id: updates.trailer_id,
      start_time: updates.start_time,
      end_time: updates.end_time,
      current_status: updates.current_status,
      description: updates.description,
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Update dispatch status
 * @param {String} id - Dispatch UUID
 * @param {String} status - New status value
 * @returns {Promise} - Updated dispatch data
 */
export async function updateDispatchStatus(id, status) {
  // Validate status matches allowed values
  const allowedStatuses = [
    "assigned",
    "enroute_pickup",
    "at_pickup",
    "loaded",
    "enroute_delivery",
    "at_delivery",
    "delivered",
    "returning",
    "completed",
    "cancelled",
  ];

  if (!allowedStatuses.includes(status)) {
    throw new Error(
      `Invalid status: ${status}. Must be one of: ${allowedStatuses.join(", ")}`,
    );
  }

  const { data, error } = await supabase
    .from("dispatches")
    .update({ current_status: status })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

/**
 * Delete a dispatch
 * @param {String} id - Dispatch UUID
 * @returns {Promise} - Result of delete operation
 */
export async function deleteDispatch(id) {
  const { error } = await supabase.from("dispatches").delete().eq("id", id);

  if (error) throw error;
  return { success: true };
}
