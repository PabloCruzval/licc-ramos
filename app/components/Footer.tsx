export default function Footer() {
  return (
    <footer className="text-black dark:text-white font-bold py-4 items-center justify-center w-full">
      <div className="container mx-auto text-center">
        <p>
          Hecho con ♥️ por{" "}
          <a
            href="https://github.com/Victorsitou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Victor
          </a>{" "}
          -{" "}
          <a
            href="https://github.com/Victorsitou/licc-ramos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Código en GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
