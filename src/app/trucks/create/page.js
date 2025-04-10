"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";

export default function CreateTruckPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    plate_number: "",
    model: "",
    capacity_kg: "",
    year: "",
    vin: "",
    status: "available",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.from("trucks").insert([
        {
          ...formData,
          capacity_kg: formData.capacity_kg
            ? parseFloat(formData.capacity_kg)
            : null,
          year: formData.year ? parseInt(formData.year) : null,
        },
      ]);

      if (error) throw error;
      router.push("/trucks");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Add New Truck</h1>

      {error && (
        <div className="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="plate_number"
            >
              Plate Number *
            </label>
            <input
              id="plate_number"
              name="plate_number"
              type="text"
              required
              value={formData.plate_number}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="model"
            >
              Model
            </label>
            <input
              id="model"
              name="model"
              type="text"
              value={formData.model}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="capacity_kg"
            >
              Capacity (kg)
            </label>
            <input
              id="capacity_kg"
              name="capacity_kg"
              type="number"
              step="0.01"
              value={formData.capacity_kg}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="year"
            >
              Year
            </label>
            <input
              id="year"
              name="year"
              type="number"
              min="1900"
              max={new Date().getFullYear() + 1}
              value={formData.year}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="vin"
            >
              VIN
            </label>
            <input
              id="vin"
              name="vin"
              type="text"
              value={formData.vin}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            />
          </div>

          <div>
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="status"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            >
              <option value="available">Available</option>
              <option value="in_use">In Use</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={() => router.push("/trucks")}
            className="focus:shadow-outline rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700 focus:outline-none"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Truck"}
          </button>
        </div>
      </form>
    </div>
  );
}
