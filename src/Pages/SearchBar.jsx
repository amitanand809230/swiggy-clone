import React, { useState } from "react";
import { restaurants } from "../data/restaurants";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const filtered = restaurants.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">
      <input
        type="text"
        placeholder="Search restaurants..."
        className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul className="mt-4 space-y-3">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <li
              key={item.id}
              className="p-4 border rounded-lg shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-orange-600">{item.name}</h3>
              <p className="text-gray-500">{item.cuisine}</p>
            </li>
          ))
        ) : (
          <p className="text-gray-600 text-center mt-6">No matching results found.</p>
        )}
      </ul>
    </div>
  );
};

export default SearchBar;
