import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const quickLinksLeft = [
  "The Arena",
  "Episodes",
  "National Rankings",
  "Programs",
  "Rulebooks",
];

const quickLinksRight = [
  "Join the Team",
  "Sponsorships",
  "Help Center",
  "Contact Us",
  "Legal",
];

const socialLinks = [
  { icon: FaYoutube, href: "#" },
  { icon: FaInstagram, href: "#" },
  { icon: FaFacebookF, href: "#" },
  { icon: FaTwitter, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-black pb-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="border-t border-neutral-800 pt-10">
          <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="text-xl font-semibold uppercase tracking-wide text-white">
                Quick Links
              </h3>

              <div className="mt-6 grid grid-cols-2 gap-6">
                <ul className="space-y-3">
                  {quickLinksLeft.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-neutral-400 transition hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>

                <ul className="space-y-3">
                  {quickLinksRight.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-neutral-400 transition hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:justify-self-end">
              <h3 className="text-xl font-semibold uppercase tracking-wide text-white">
                Social Media
              </h3>

              <div className="mt-6 flex items-center gap-4">
                {socialLinks.map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    whileHover={{ y: -3, scale: 1.06 }}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-600 text-neutral-300 transition hover:border-white hover:text-white"
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-12 text-center text-xs text-neutral-500">
            © 2026 BotLeague. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
