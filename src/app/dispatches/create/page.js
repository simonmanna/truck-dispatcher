// 1. Create Dispatch Page - app/dispatches/create/page.js
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createDispatch } from "../../lib/dispatches";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client for fetching related data
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function CreateDispatchPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [drivers, setDrivers] = useState([]);
  const [trucks, setTrucks] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    order_id: "",
    driver_id: "",
    truck_id: "",
    trailer_id: "",
    start_time: "",
    end_time: "",
    description: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch available drivers (active only)
        const { data: driversData } = await supabase
          .from("drivers")
          .select("id, full_name")
          .eq("status", "active")
          .eq("available", true);

        // Fetch available trucks
        const { data: trucksData } = await supabase
          .from("trucks")
          .select("id, plate_number, model")
          .eq("status", "available");

        // Fetch available trailers
        const { data: trailersData } = await supabase
          .from("trailers")
          .select("id, trailer_number, type")
          .eq("status", "available");

        // Fetch pending orders
        const { data: ordersData } = await supabase
          .from("orders")
          .select("id, reference_code")
          .eq("status", "pending");

        setDrivers(driversData || []);
        setTrucks(trucksData || []);
        setTrailers(trailersData || []);
        setOrders(ordersData || []);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load required data");
      }
    }

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await createDispatch(formData);
      router.push("/dispatches");
    } catch (err) {
      console.error("Error creating dispatch:", err);
      setError("Failed to create dispatch. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Create New Dispatch</h1>

      {error && (
        <div className="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
      >
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="order_id"
          >
            Order
          </label>
          <select
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="order_id"
            name="order_id"
            value={formData.order_id}
            onChange={handleChange}
            required
          >
            <option value="">Select an order</option>
            {orders.map((order) => (
              <option key={order.id} value={order.id}>
                {order.reference_code}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="driver_id"
          >
            Driver
          </label>
          <select
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="driver_id"
            name="driver_id"
            value={formData.driver_id}
            onChange={handleChange}
            required
          >
            <option value="">Select a driver</option>
            {drivers.map((driver) => (
              <option key={driver.id} value={driver.id}>
                {driver.full_name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="truck_id"
          >
            Truck
          </label>
          <select
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="truck_id"
            name="truck_id"
            value={formData.truck_id}
            onChange={handleChange}
            required
          >
            <option value="">Select a truck</option>
            {trucks.map((truck) => (
              <option key={truck.id} value={truck.id}>
                {truck.plate_number} - {truck.model}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="trailer_id"
          >
            Trailer
          </label>
          <select
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="trailer_id"
            name="trailer_id"
            value={formData.trailer_id}
            onChange={handleChange}
          >
            <option value="">Select a trailer (optional)</option>
            {trailers.map((trailer) => (
              <option key={trailer.id} value={trailer.id}>
                {trailer.trailer_number} - {trailer.type}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="start_time"
          >
            Start Time
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="start_time"
            name="start_time"
            type="datetime-local"
            value={formData.start_time}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="end_time"
          >
            End Time (Estimated)
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="end_time"
            name="end_time"
            type="datetime-local"
            value={formData.end_time}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Dispatch"}
          </button>
          <button
            className="focus:shadow-outline rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700 focus:outline-none"
            type="button"
            onClick={() => router.push("/dispatches")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
