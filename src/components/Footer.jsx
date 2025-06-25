import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-24">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                subinfo
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                products
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Career Advice
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Employer Services
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul>
            <li className="mb-2">
              <a href="https://www.facebook.com/bokuldeveloper70/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Facebook
              </a>
            </li>
            <li className="mb-2">
              <a href="https://www.youtube.com/@bokulsorkar2052" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Youtube
              </a>
            </li>
            <li className="mb-2">
              <a href="https://www.linkedin.com/in/bokul-kumar-badyakar-677369191/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/bokul_developer/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>

      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        © 2023 SUBSCRIPTION-BOK by Bokul Developer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;