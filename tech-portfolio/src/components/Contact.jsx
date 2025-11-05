import React from "react";

const Contact = () => {
  return (
    <section id="contact" data-aos="fade-up" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="text-gray-700">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="mb-6">You can reach me via email at <a href="mailto:wisdomtoyin@gmail.com" className="text-blue-500">wisdomtoyin@gmail.com</a></p>
          <p>Or find me on GitHub and LinkedIn.</p>
        </div>

        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Name" className="p-3 border rounded" />
          <input type="email" placeholder="Email" className="p-3 border rounded" />
          <textarea placeholder="Message" className="p-3 border rounded"></textarea>
          <button type="submit" className="bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
