const Footer = () => {
  return (
    <div className="relative bg-black text-white py-8 overflow-hidden mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full md:w-auto text-center md:text-left mb-2 md:mb-0">
            <p className="text-sm">© 2025 MoveToUSA.co. All rights reserved.</p>
          </div>
          <div className="w-full md:w-auto">
            <ul className="flex justify-center md:justify-end space-x-4">
              <li>
                <a className="text-sm hover:text-purple-300" href="/pro">
                  Login
                </a>
              </li>
              <li>
                <a className="text-sm hover:text-purple-300" href="/privacy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-sm hover:text-purple-300" href="/terms">
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-sm hover:text-purple-300"
                  href="mailto:evloamaravati@gmail.com"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
