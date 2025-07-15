// src/Pages/Help.jsx
import React, { useState } from "react";

const faqs = [
  {
    question: "How do I cancel my order?",
    answer: "Go to 'My Orders', select the order and click on 'Cancel Order'."
  },
  {
    question: "Where is my refund?",
    answer: "Refunds are processed within 5–7 business days."
  },
  {
    question: "Can I change my delivery address?",
    answer: "Yes, before the order is dispatched. Go to 'My Orders' and click 'Edit Address'."
  },
  {
    question: "What if the food is bad or cold?",
    answer: "You can raise a complaint from the order screen. Our support team will help."
  },
];

const Help = () => {
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
        Help & Support
      </h1>

      <input
        type="text"
        placeholder="Search your issue..."
        className="w-full border px-4 py-2 mb-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredFaqs.length > 0 ? (
        <ul className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <li key={index} className="border rounded-lg p-4 shadow">
              <div
                onClick={() => toggleAnswer(index)}
                className="cursor-pointer text-lg font-semibold flex justify-between items-center"
              >
                {faq.question}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              {activeIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No help topics found.</p>
      )}

      <div className="mt-10 border-t pt-6">
        <h2 className="text-xl font-bold mb-2">Need more help?</h2>
        <p className="text-gray-600 mb-4">
          If you can't find your answer here, please contact our support team.
        </p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default Help;
