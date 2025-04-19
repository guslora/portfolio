import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gus Lora</h1>
        <ThemeToggle />
      </header>
      <section>
        <p>Welcome to my portfolio. This is a demo of dark mode toggle.</p>
      </section>
    </main>
  );
}

export default App;
