import twitter from '../../assets/Social/letter-x_12654263.png'
import instagram from '../../assets/Social/instagram_15713420.png'
import facebook from '../../assets/Social/facebook_3488302.png'
import linkedin from '../../assets/Social/linkedin_3992606.png'
import Logo from '../../assets/Navbar/logo.png'

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 max-w-7xl mx-auto">
        {/* Brand + About */}
        <div className="md:col-span-2">
          {/* Logo instead of brand name text */}
          <img src={Logo} alt="Logo" className="w-32 mb-4" />

          <p className="text-sm leading-relaxed mb-6">
            From concerts and festivals to conferences and sports, we empower organizers and fans to
            connect through seamless ticketing experiences.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#">
              <img src={twitter} alt="Twitter" className="w-6 h-6 hover:opacity-80 transition" />
            </a>
            <a href="#">
              <img
                src={instagram}
                alt="Instagram"
                className="w-6 h-6 hover:opacity-80 transition"
              />
            </a>
            <a href="#">
              <img src={facebook} alt="Facebook" className="w-6 h-6 hover:opacity-80 transition" />
            </a>
            <a href="#">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition" />
            </a>
          </div>
        </div>

        {/* Product Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">PRODUCT</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Sell Passes</a>
            </li>
            <li>
              <a href="#">Event Management</a>
            </li>
            <li>
              <a href="#">Mobile Check-in</a>
            </li>
            <li>
              <a href="#">Analytics</a>
            </li>
            <li>
              <a href="#">Payment Solutions</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">RESOURCES</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Organizer Guides</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Press & Media</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
        <div className="space-x-4">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
        </div>
        <p className="mt-4 md:mt-0">© 2025 EventPass Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}
