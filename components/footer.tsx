export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto py-10">
        <div className="text-center text-sm">
          <p>
            &copy; {currentYear} Superior Software Solutions. All rights
            reserved.
          </p>
          <p>
            Powered by <span className="font-montserrat">Duka Kuu</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
