function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-dark py-2 text-white fs-6 text-center">
      Copyright &copy; 2023 { year > 2023 ? ' - ' + year : '' }
    </footer>
  );
}
  
  export default Footer;