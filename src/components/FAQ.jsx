import React from "react";

const faqs = [
  {
    question: "What is SubscriptionBox?",
    answer:
      "SubscriptionBox is a monthly service that delivers curated tech products and digital tools directly to your doorstep or inbox.",
  },
  {
    question: "How do I subscribe to a box?",
    answer:
      "Simply browse our available boxes, click on the one you like, and hit the 'Subscribe Now' button. You'll be guided through a quick signup process.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel or pause your subscription anytime from your profile dashboard without any penalty.",
  },
  {
    question: "Are the products different each month?",
    answer:
      "Absolutely! We update our boxes every month with new and exciting products tailored to your interests.",
  },
  {
    question: "Is my payment information secure?",
    answer:
      "Yes, we use secure payment gateways and never store your card details. Your safety is our priority.",
  },
  {
    question: "Can I gift a subscription box to someone?",
    answer:
      "Yes! We offer a gifting option where you can send a subscription box with a custom note to friends or family.",
  },
];

const FAQ = () => {
  return (
    <div className="px-6 py-12 bg-gray-50 rounded-lg mt-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
      <p className="text-center text-gray-600 mb-10">Find answers to common questions about our subscription box service.</p>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
