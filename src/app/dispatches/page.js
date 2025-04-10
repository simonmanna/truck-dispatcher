// 2. Dispatches List Page - app/dispatches/page.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  getDispatches,
  deleteDispatch,
  updateDispatchStatus,
} from "../lib/dispatches";

export default function DispatchesListPage() {
  const router = useRouter();
  const [dispatches, setDispatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    status: "",
    sortBy: "created_at",
    ascending: false,
  });

  useEffect(() => {
    loadDispatches();
  }, [filters]);

  async function loadDispatches() {
    setLoading(true);
    try {
      const data = await getDispatches(filters);
      setDispatches(data);
      setError(null);
    } catch (err) {
      console.error("Error loading dispatches:", err);
      setError("Failed to load dispatches");
    } finally {
      setLoading(false);
    }
  }

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this dispatch?")) {
      try {
        await deleteDispatch(id);
        loadDispatches();
      } catch (err) {
        console.error("Error deleting dispatch:", err);
        setError("Failed to delete dispatch");
      }
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateDispatchStatus(id, newStatus);
      loadDispatches();
    } catch (err) {
      console.error("Error updating status:", err);
      setError("Failed to update status");
    }
  };

  const getStatusBadgeColor = (status) => {
    const statusColors = {
      assigned: "bg-blue-100 text-blue-800",
      enroute_pickup: "bg-purple-100 text-purple-800",
      at_pickup: "bg-yellow-100 text-yellow-800",
      loaded: "bg-indigo-100 text-indigo-800",
      enroute_delivery: "bg-orange-100 text-orange-800",
      at_delivery: "bg-teal-100 text-teal-800",
      delivered: "bg-green-100 text-green-800",
      returning: "bg-pink-100 text-pink-800",
      completed: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return statusColors[status] || "bg-gray-100 text-gray-800";
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Not set";
    return new Date(dateString).toLocaleString();
  };

  const getNextStatus = (currentStatus) => {
    const statusFlow = {
      assigned: "enroute_pickup",
      enroute_pickup: "at_pickup",
      at_pickup: "loaded",
      loaded: "enroute_delivery",
      enroute_delivery: "at_delivery",
      at_delivery: "delivered",
      delivered: "returning",
      returning: "completed",
    };
    return statusFlow[currentStatus] || null;
  };

  return (
    <div className="container mx-auto px-1 py-2">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dispatches</h1>
        <Link
          href="/dispatches/create"
          className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
        >
          New Dispatch
        </Link>
      </div>

      {error && (
        <div className="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
          {error}
        </div>
      )}

      <div className="mb-6 rounded bg-white p-4 shadow-md">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="status"
            >
              Filter by Status
            </label>
            <select
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="status"
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
            >
              <option value="">All Statuses</option>
              <option value="assigned">Assigned</option>
              <option value="enroute_pickup">Enroute to Pickup</option>
              <option value="at_pickup">At Pickup</option>
              <option value="loaded">Loaded</option>
              <option value="enroute_delivery">Enroute to Delivery</option>
              <option value="at_delivery">At Delivery</option>
              <option value="delivered">Delivered</option>
              <option value="returning">Returning</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          <div>
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="sortBy"
            >
              Sort By
            </label>
            <select
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="sortBy"
              name="sortBy"
              value={filters.sortBy}
              onChange={handleFilterChange}
            >
              <option value="created_at">Created Date</option>
              <option value="start_time">Start Time</option>
              <option value="end_time">End Time</option>
              <option value="current_status">Status</option>
            </select>
          </div>
          <div>
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="ascending"
            >
              Sort Order
            </label>
            <select
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="ascending"
              name="ascending"
              value={filters.ascending.toString()}
              onChange={(e) =>
                handleFilterChange({
                  target: {
                    name: "ascending",
                    value: e.target.value === "true",
                  },
                })
              }
            >
              <option value="false">Descending</option>
              <option value="true">Ascending</option>
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="py-8 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-b-2 border-t-2 border-blue-500"></div>
          <p className="mt-2">Loading dispatches...</p>
        </div>
      ) : dispatches.length === 0 ? (
        <div className="rounded bg-white p-8 text-center shadow-md">
          <p className="text-gray-600">No dispatches found</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full rounded bg-white shadow-md">
            <thead>
              <tr className="bg-gray-200 text-sm uppercase leading-normal text-gray-600">
                <th className="px-6 py-3 text-left">Order</th>
                <th className="px-6 py-3 text-left">Driver</th>
                <th className="px-6 py-3 text-left">Truck</th>
                <th className="px-6 py-3 text-left">Status</th>
                <th className="px-6 py-3 text-left">Start Time</th>
                <th className="px-6 py-3 text-left">End Time</th>
                <th className="px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              {dispatches.map((dispatch) => (
                <tr
                  key={dispatch.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="whitespace-nowrap px-6 py-3 text-left">
                    {dispatch.orders?.reference_code || "N/A"}
                  </td>
                  <td className="px-6 py-3 text-left">
                    {dispatch.drivers?.full_name || "N/A"}
                  </td>
                  <td className="px-6 py-3 text-left">
                    {dispatch.trucks?.plate_number || "N/A"}
                  </td>
                  <td className="px-6 py-3 text-left">
                    <span
                      className={`rounded-full px-2 py-1 text-xs ${getStatusBadgeColor(dispatch.current_status)}`}
                    >
                      {dispatch.current_status
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, (l) => l.toUpperCase())}
                    </span>
                  </td>
                  <td className="px-6 py-3 text-left">
                    {formatDate(dispatch.start_time)}
                  </td>
                  <td className="px-6 py-3 text-left">
                    {formatDate(dispatch.end_time)}
                  </td>
                  <td className="px-6 py-3 text-center">
                    <div className="item-center justify-left flex">
                      <Link
                        href={`/dispatches/${dispatch.id}`}
                        className="mr-3 transform hover:scale-110 hover:text-blue-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </Link>
                      <Link
                        href={`/dispatches/edit/${dispatch.id}`}
                        className="mr-3 transform hover:scale-110 hover:text-yellow-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </Link>
                      <button
                        onClick={() => handleDelete(dispatch.id)}
                        className="mr-3 transform hover:scale-110 hover:text-red-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                      {getNextStatus(dispatch.current_status) && (
                        <button
                          onClick={() =>
                            handleStatusChange(
                              dispatch.id,
                              getNextStatus(dispatch.current_status),
                            )
                          }
                          className="transform hover:scale-110 hover:text-green-500"
                          title={`Update to ${getNextStatus(
                            dispatch.current_status,
                          )
                            .replace(/_/g, " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}`}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
