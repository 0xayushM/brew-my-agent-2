const Footer = () => {
  return (
    <footer className="py-10 border-t border-white/10">
      <div className="container mx-auto max-w-7xl px-5 text-center">
        <p className="text-textMedium">
          &copy; {new Date().getFullYear()} brewmyagent. All Rights Reserved. | We&apos;re Brewing the Future of Work.<br />
          <a href="mailto:rajveer@brewmyagent.com" className="underline hover:text-primaryAccent">rajveer@brewmyagent.com</a>
          <br className="md:hidden"/>
          <span className="hidden md:inline"> | </span>
          <a href="mailto:ayush@brewmyagent.com" className="underline hover:text-primaryAccent">ayush@brewmyagent.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
