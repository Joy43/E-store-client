export default function Footer() {
  return (
      <footer className="flex flex-col">
          <div className="flex flex-col items-center justify-between gap-5 bg-gray-100 py-8 dark:bg-gray-800 dark:text-white md:flex-row md:gap-0 md:px-12">
              <h5 className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">E-Store</h5>
              <nav className="text-lg">
                  <ul className="flex items-center justify-center gap-6">
                      <li>
                          <a href="#" className="cursor-pointer hover:text-blue-600 transition-colors duration-300">Home</a>
                      </li>
                      <li>
                          <a href="#" className="cursor-pointer hover:text-blue-600 transition-colors duration-300">Contact</a>
                      </li>
                      <li>
                          <a href="#" className="cursor-pointer hover:text-blue-600 transition-colors duration-300">About</a>
                      </li>
                  </ul>
              </nav>
          </div>
          <aside className="bg-gray-200 py-5 text-center text-sm text-gray-700 dark:bg-gray-900 dark:text-gray-400">
              <p>&copy; 2024 E-store. All Rights Reserved.</p>
          </aside>
      </footer>
  );
}
