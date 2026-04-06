// src/pages/ContactPage.jsx
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Mail, Phone, MapPin } from 'lucide-react';
 

const ContactPage = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null); // 'success', 'error', null
  const [errorMessage, setErrorMessage] = useState('');

  // IMPORTANT: Replace these with your actual EmailJS credentials
  // Get them from: https://dashboard.emailjs.com/
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;     // e.g., 'service_abc123'
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;   // e.g., 'template_xyz789'
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;     // e.g., 'user_abc123def456'

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      if (!formRef.current) {
        throw new Error('Form reference is not available');
      }

      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      
      console.log('Email sent:', result.text);
      setSubmitStatus('success');
      setFormData({
        user_name: '',
        user_email: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error : any) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
      setErrorMessage(error.text || 'Failed to send message. Please try again later.');
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="md:col-span-1">
          <div className="game-card sticky top-24">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-gray-400 mb-8">
              Have questions about Snake Block Breaker? We'd love to hear from you!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">Email Us</h3>
                  <p className="text-sm text-gray-400">support@snakeblockbreaker.com</p>
                  <p className="text-sm text-gray-400">hello@pixelpulsegames.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">Call Us</h3>
                  <p className="text-sm text-gray-400">+1 (555) 123-4567</p>
                  <p className="text-sm text-gray-400">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">Visit Us</h3>
                  <p className="text-sm text-gray-400">PixelPulse Games Studio</p>
                  <p className="text-sm text-gray-400">123 Arcade Avenue, Suite 100</p>
                  <p className="text-sm text-gray-400">San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h3 className="font-semibold text-white mb-3">Response Time</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Usually within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="md:col-span-2">
          <div className="game-card">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-gray-400 mb-8">
              Send us a message and we'll get back to you as soon as possible.
            </p>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-300">Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-500" />
                <span className="text-red-300">{errorMessage || 'Failed to send message. Please try again.'}</span>
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="user_name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-white transition"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="user_email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-white transition"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-white transition"
                  placeholder="Game feedback, bug report, partnership, etc."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-white transition resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
            
            <div className="mt-6 p-4 bg-gray-800/30 rounded-lg border border-gray-700 text-center">
              <p className="text-sm text-gray-400">
                ⚡ For urgent matters, please reach out via our Discord server for faster response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;