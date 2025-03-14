import React, { useState } from 'react'; // Import React and useState for state management
import { Mail, Phone, MapPin } from 'lucide-react'; // Import icons from Lucide React

const Contact = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData); // Log form data to console

    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20"> {/* Full-page background with padding */}
      <div className="container mx-auto px-4"> {/* Centered content */}
        <div className="max-w-4xl mx-auto"> {/* Limit width for better layout */}
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1> {/* Page title */}
          
          <div className="grid md:grid-cols-2 gap-8"> {/* Two-column layout for larger screens */}
            
            {/* Contact Info Section */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6"> {/* Contact card */}
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2> {/* Subheading */}
                <div className="space-y-4">
                  {/* Email */}
                  <div className="flex items-center">
                    <Mail className="text-indigo-600 w-6 h-6 mr-3" /> {/* Icon */}
                    <span>contact@visionalabs.com</span>
                  </div>
                  {/* Phone */}
                  <div className="flex items-center">
                    <Phone className="text-indigo-600 w-6 h-6 mr-3" /> {/* Icon */}
                    <span>+1 (555) 123-4567</span>
                  </div>
                  {/* Address */}
                  <div className="flex items-center">
                    <MapPin className="text-indigo-600 w-6 h-6 mr-3" /> {/* Icon */}
                    <span>123 Innovation Drive, Silicon Valley, CA</span>
                  </div>
                </div>
              </div>

              {/* Office Image */}
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                alt="Office"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Contact Form Section */}
            <div className="contact-form">
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2> {/* Form heading */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name Input */}
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
                    rows={5}
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; // Export Contact component
