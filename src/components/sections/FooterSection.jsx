import { Github, Mail } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="bg-black text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="font-grotesk font-bold text-2xl text-white mb-3">
              Tickle <span className="text-purple-400">Trunk</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              An open-source haptic communication toolkit for brainstorming physical interactions.
            </p>
          </div>

          {/* Links */}
          <div>
            <div className="text-sm font-semibold text-white mb-3">Quick Links</div>
            <div className="space-y-2">
              {["About", "Tutorials", "Build it", "FAQ", "Github"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="block text-sm text-gray-500 hover:text-purple-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold text-white mb-3">Contact</div>
            <p className="text-sm text-gray-500 mb-4">
              University of Waterloo<br />
              Department of Management Science & Engineering
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:oliver.schneider@uwaterloo.ca"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Mail size={16} className="text-gray-400" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Github size={16} className="text-gray-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © 2026 Tickle Trunk. University of Waterloo. Supported by NFRF, NSERC, and Mitacs.
          </p>
          <p className="text-xs text-gray-600">
            Open source — <a href="https://tickletrunk.tech" className="hover:text-purple-400 transition-colors">tickletrunk.tech</a>
          </p>
        </div>
      </div>
    </footer>
  );
}