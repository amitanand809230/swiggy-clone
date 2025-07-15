import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#e1e4e8] text-black mt-0">
      <div className="max-w-[1200px] mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <ul className="space-y-2">
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Swiggy One</li>
            <li>Swiggy Instamart</li>
            <li>Swiggy Genie</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-3">Contact</h3>
          <ul className="space-y-2">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>Offer Terms</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold mb-3">We deliver to:</h3>
          <ul className="space-y-2">
            <li>Faridabad</li>
            <li>Delhi</li>
            <li>Gurgaon</li>
            <li>Noida</li>
            <li>Ghaziabad</li>
            <li>Chandigarh</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-black-400">
        © 2025 Swiggy 
      </div>
    </footer>
  );
};

export default Footer;
