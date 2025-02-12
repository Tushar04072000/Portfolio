import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    emailjs.init("Peg0NHUp9tErSQqKb"); // Replace with your public key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_7q5z3gl',
      'template_8gel1h3', // Replace with your template ID
      form.current,
      'Peg0NHUp9tErSQqKb' // Replace with your public key
    )
      .then((result) => {
        setStatus('success');
        setFormData({
          from_name: '',
          reply_to: '',
          message: ''
        });
        setTimeout(() => setStatus(''), 5000);
      }, (error) => {
        setStatus('error');
        console.error('Error:', error);
        setTimeout(() => setStatus(''), 5000);
      });
  };

  return (
    <section className="pt-28 pb-16 bg-black text-white" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#ff6b00] text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="reply_to" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="reply_to"
                name="reply_to"
                value={formData.reply_to}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#ff6b00] text-white"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-[#ff6b00] text-white resize-none"
                placeholder="Your Message"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`px-8 py-3 bg-[#ff6b00] text-white rounded-lg font-medium transition-all duration-300
                  ${status === 'sending' ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#ff8533]'}`}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-500 text-center mt-4"
              >
                Message sent successfully!
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-500 text-center mt-4"
              >
                Failed to send message. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
