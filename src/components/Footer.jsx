const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <footer className="bg-theme pt-7 pb-5">
      <div className="nike-container text-slate-200">
        <div className="grid items-start grid-cols-3 max-w-4xl w-full m-auto md:max-w-none md:gap-5 sm:grid-cols-1">
          {titles.map((val, i) => (
            <div key={i} className="grid items-start gap-2">
              <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                {val.title}
              </h1>
              <ul className="grid items-start gap-1">
                {links[i]?.map((link, j) => (
                  <li
                    key={j}
                    className="text-sm sm:text-xs cursor-pointer hover:text-slate-100 transition-all"
                  >
                    {link.link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-5 text-center">
          <p className="text-sm md:text-center">
            © {new Date().getFullYear()} Layer Flex All Rights Reserved | Design & Developed by{" "}
            <a
              href="https://wa.me/918799992023"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              Sunit K.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
