import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      question: "How can I enroll in a course?",
      answer:
        "To enroll in a course, simply browse through our course catalog, select a course, and click the 'Enroll Now' button. You can start learning immediately after registration.",
    },
    {
      question: "Do you offer certificates after course completion?",
      answer:
        "Yes, upon completing a course, you will receive a certificate of completion which you can share with your network or include in your resume.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept a variety of payment methods, including credit cards, PayPal, and cryptocurrency. All transactions are secure and encrypted.",
    },
    {
      question: "Can I refund a course if I am not satisfied?",
      answer:
        "Yes, we offer a 30-day money-back guarantee if you're not satisfied with the course. Simply contact support, and we'll process your refund.",
    },
    {
      question: "How do I track my progress in a course?",
      answer:
        "You can track your progress via the course dashboard. It shows the percentage of the course completed, quizzes taken, and overall achievements.",
    },
  ];

  // Change the type from `number | null` to just `null` in a JavaScript context
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#0A0F1C] text-white py-16 px-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Find answers to common questions about our Learning Management System.
        </p>

        <div className="mt-8 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1E2534] p-6 rounded-2xl shadow-lg cursor-pointer transition-all duration-300 hover:bg-[#1E2534]/80"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-indigo-400" />
                ) : (
                  <ChevronDown className="text-indigo-400" />
                )}
              </div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {openIndex === index && <p className="text-gray-400 mt-2">{faq.answer}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
