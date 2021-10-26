export default function Notification ({ text, handleFuntion }) {
  return (
    <div className="absolute top-0 left-0 w-full h-screen bg-black z-50 bg-opacity-50 flex justify-center items-center">
      <div className="w-96 p-4 rounded-xl bg-white dark:bg-morado-azulado flex flex-col justify-center items-center">
        <i className="icon-cancel-circled text-9xl text-red-600 dark:text-red-400 "></i>
        <h2 className="text-3xl text-red-600 dark:text-red-400 mb-4">Error</h2>
        <h3 className="text-xl font-semibold dark:text-white text-black text-center">{text}</h3>
        <div className="flex justify-end items-center w-full">
          <button className="bg-green-600 dark:bg-green-400 text-white py-2 px-4 rounded-md dark:hover:bg-green-300 transition duration-500" onClick={handleFuntion}>Aceptar</button>
        </div>
      </div>
    </div>
  )
}
