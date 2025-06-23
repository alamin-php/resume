import { motion, Variants } from "framer-motion";
import { Navigation } from "@/components/resume/Navigation";
import { ScrollToTop } from "@/components/resume/ScrollToTop";
import { Mail, Phone, Github, Linkedin, MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dev.alaminsarker@gmail.com",
      href: "mailto:dev.alaminsarker@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1737 933 939",
      href: "tel:+8801737933939"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/al-amin-csebd",
      href: "https://linkedin.com/in/al-amin-csebd"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/alamin-php",
      href: "https://github.com/alamin-php"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: null
    }
  ];

  return (
    <div className="min-h-screen bg-black text-resume-text font-inter">
      <Navigation />

      <div className="container mx-auto px-4 pt-24 space-y-16">
        {/* Page Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-gray-300 text-lg mb-12">
            Let's discuss opportunities, collaborations, or just have a conversation about technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 p-4 bg-gray-900 border border-gray-700 rounded-lg hover:border-white transition-colors">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-gray-900 border border-gray-700 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <Calendar size={20} className="text-electric-blue" />
                <h3 className="text-lg font-semibold text-white">Schedule a Meeting</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Available for meetings Monday through Friday, 9 AM - 6 PM PST
              </p>
              <Button className="bg-electric-blue hover:bg-electric-blue/90 text-black font-medium">
                Schedule Call
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-white focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-white focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-white focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-white focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <Button className="w-full bg-white hover:bg-gray-200 text-black font-medium py-3">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-16"
        >
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 mb-6">
              Whether you have a project in mind, need consultation, or want to discuss potential opportunities, 
              I'm always excited to connect with fellow developers and innovative companies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="border-white text-white hover:bg-white hover:text-black">
                <Link to="/portfolio" className="w-full h-full">View My Work</Link>
              </Button>
              <Button className="bg-electric-blue hover:bg-electric-blue/90 text-black">
                Download Resume
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <ScrollToTop />
    </div>
  );
};

export default Contact;
