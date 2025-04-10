"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Loader2, Eye, Pencil, Trash2, Plus } from "lucide-react";

export default function DriversPage() {
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchDrivers() {
      try {
        setLoading(true);
        const url = statusFilter
          ? `/api/drivers?status=${statusFilter}`
          : "/api/drivers";
        const res = await fetch(url);

        if (!res.ok) throw new Error("Failed to fetch drivers");

        const data = await res.json();
        setDrivers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDrivers();
  }, [statusFilter]);

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this driver?")) {
      try {
        const res = await fetch(`/api/drivers/${id}`, {
          method: "DELETE",
        });
        if (!res.ok) throw new Error("Failed to delete driver");
        setDrivers(drivers.filter((d) => d.id !== id));
      } catch (err) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-800">
          Drivers Management
          {/* 🚚 */}
        </h1>
        <Link
          href="/drivers/new"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
        >
          <Plus size={18} /> Add Driver
        </Link>
      </div>

      <div className="mb-6">
        <label htmlFor="statusFilter" className="mr-3 font-medium">
          Filter by Status:
        </label>
        <select
          id="statusFilter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded border px-3 py-2 text-sm shadow-sm"
        >
          <option value="">All Statuses</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
          <option value="suspended">Suspended</option>
        </select>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-10">
          <Loader2 className="h-6 w-6 animate-spin text-gray-600" />
        </div>
      ) : error ? (
        <p className="text-red-500">Error: {error}</p>
      ) : (
        <div className="overflow-x-auto rounded-lg bg-white shadow-md">
          <table className="min-w-full table-auto text-left text-sm">
            <thead className="bg-gray-100 font-semibold text-gray-700">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">License</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Employment</th>
                <th className="px-4 py-3">Contact</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {drivers.length === 0 ? (
                <tr>
                  <td colSpan="6" className="py-6 text-center text-gray-500">
                    No drivers found
                  </td>
                </tr>
              ) : (
                drivers.map((driver) => (
                  <tr
                    key={driver.id}
                    className="border-t transition hover:bg-gray-50"
                  >
                    <td className="flex items-center gap-2 px-4 py-3">
                      {driver.profile_photo_url && (
                        <img
                          src={driver.profile_photo_url}
                          alt={driver.full_name}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      )}
                      {driver.full_name}
                    </td>
                    <td className="px-4 py-3">
                      {driver.license_number}
                      <div className="text-xs text-gray-500">
                        Class: {driver.license_class || "N/A"}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-block rounded-full px-2 py-1 text-xs font-medium capitalize ${
                          driver.status === "active"
                            ? "bg-green-100 text-green-700"
                            : driver.status === "inactive"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {driver.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">{driver.employment_type}</td>
                    <td className="px-4 py-3">
                      <div>{driver.phone}</div>
                      <div className="text-xs text-gray-500">
                        {driver.email}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex gap-3 text-sm">
                        <Link
                          href={`/drivers/${driver.id}`}
                          className="flex items-center gap-1 text-blue-600 hover:underline"
                          title="View"
                        >
                          <Eye size={16} />
                        </Link>
                        <Link
                          href={`/drivers/edit/${driver.id}`}
                          className="flex items-center gap-1 text-green-600 hover:underline"
                          title="Edit"
                        >
                          <Pencil size={16} />
                        </Link>
                        <button
                          onClick={() => handleDelete(driver.id)}
                          className="flex items-center gap-1 text-red-600 hover:underline"
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
