
import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [state, setState] = useState({
    submitting: false,
    succeeded: false,
    error: null,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState({ ...state, submitting: true });

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setState({ submitting: false, succeeded: true, error: null });
        event.target.reset();
      } else {
        setState({
          submitting: false,
          succeeded: false,
          error: result.error || "Failed to send message.",
        });
      }
    } catch (error) {
      setState({
        submitting: false,
        succeeded: false,
        error: "An unexpected error occurred.",
      });
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Contact form only section for brevity */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get In Touch</h2>
              <p className="text-gray-600">
                Fill out the form, and we'll get back to you promptly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" name="name" required className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" name="email" required className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input type="text" name="company" className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contact Number</label>
                <input type="tel" name="contact" required pattern="[0-9]{10}" className="w-full px-4 py-2 border rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea name="message" rows="4" required className="w-full px-4 py-2 border rounded-md"></textarea>
              </div>

              <button
                type="submit"
                disabled={state.submitting || state.succeeded}
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 disabled:bg-gray-400"
              >
                {state.submitting ? "Sending..." : state.succeeded ? "Message Sent!" : "Send Message"}
              </button>

              {state.succeeded && <p className="text-green-600 text-center">Message sent successfully!</p>}
              {state.error && <p className="text-red-600 text-center">{state.error}</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
