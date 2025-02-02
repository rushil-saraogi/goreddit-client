export default () => {
    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-red-700 h-24 w-full flex items-center justify-center text-white">
                Navbar 1
            </nav>

            <div className="bg-green-700 h-24 w-full flex items-center justify-center text-white sticky top-0">
                Navbar 2
            </div>

            <main className="flex">
                <div className="bg-blue-700 flex items-center justify-center text-white w-72">Sidebar</div>
                <div className="bg-blue-500 flex items-center justify-center text-white flex-1 grid grid-cols-3 gap-4 p-4">
                    <div className="flex justify-center items-center h-80 bg-teal-700">Card</div>
                    <div className="flex justify-center items-center h-80 bg-teal-700">Card</div>
                    <div className="flex justify-center items-center h-80 bg-teal-700">Card</div>
                    <div className="flex justify-center items-center h-80 bg-teal-700">Card</div>
                    <div className="flex justify-center items-center h-80 bg-teal-700">Card</div>
                    <div className="flex justify-center items-center h-80 bg-teal-700">Card</div>
                    <div className="flex justify-center items-center h-80 bg-teal-700">Card</div>
                    <div className="flex justify-center items-center h-80 bg-teal-700">Card</div>
                    <div className="flex justify-center items-center h-80 bg-teal-700">Card</div>
                    <div className="flex justify-center items-center h-80 bg-teal-700">Card</div>
                </div>
            </main>
        </div>
    )
}