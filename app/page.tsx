export default function Home() {
  return (
    <main className="bg-gray-100 h-screen flex items-center justify-center p-5 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100">
      <div className="bg-white w-full shadow-lg p-5 rounded-3xl max-w-screen-sm flex flex-col gap-2 md:flex-row *:outline-none has-[.peer]:bg-green-300 has-[:invalid]:ring-red-100 has-[:invalid]:ring ring ring-transparent transition-shadow">
        <input
          className="w-full rounded-full h-12 bg-gray-200 pl-5 ring ring-orange-300 ring-offset-2 ring-offset-transparent focus:ring-orange-500
          foncus:ring-offset-2 transition-shadow placeholder:text-red-600 invalid:bg-red-100 invalid:focus:ring-blue-500
          invalid:md:focus:ring-green-500 peer"
          type="text"
          required
          placeholder="Email address"
        />
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Email is required.
        </span>
        <button className="bg-black text-white py-2 rounded-full active:scale-90 focus:scale-90 transition-transform font-medium md:px-10">
          Search
        </button>
      </div>
    </main>
  );
}
