export default function Main () {
  return (
    <main className="w-full lg:w-3/4 h-screen bg-morado-oscuro overflow-hidden overflow-y-auto p-8">
      <div className="flex justify-end items-center p-4 max-w-screen-xl mx-auto">
        <button className="text-white bg-gray-400 rounded-full p-4 leading-none font-bold text-xl mr-4 hover:bg-gray-300 transition duration-500">°C</button> <button className="text-white bg-gray-400 rounded-full p-4 leading-none font-bold text-xl hover:bg-gray-300 transition duration-500">°F</button>
      </div>
    </main>
  )
}
