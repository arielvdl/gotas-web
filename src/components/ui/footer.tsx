export function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-800 py-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <p className="text-gray-400 text-sm">
              © 2024 Gotas. Todos os direitos reservados.
            </p>
          </div>
          <div className="text-center sm:text-right">
            <a 
              href="https://gotas.com" 
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium text-sm"
            >
              Visite gotas.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}