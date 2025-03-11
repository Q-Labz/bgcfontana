import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react';

export function SocialShare() {
  const shareUrl = window.location.href;
  const shareText = "Support the Boys & Girls Club of Fontana and help create great futures for our youth!";

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Share on Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: "Share on Twitter",
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "Share on LinkedIn",
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Share via Email",
      url: `mailto:?subject=${encodeURIComponent("Support the Boys & Girls Club of Fontana")}&body=${encodeURIComponent(shareText + "\n\n" + shareUrl)}`
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Share Our Mission
          </h2>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-100 p-3 rounded-full text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
                title={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}