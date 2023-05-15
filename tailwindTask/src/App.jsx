const App = () => {
  return (
    <main className="text-xl">
      <nav className="bg-[#b8b8b8] w-full z-10">
        <div className="flex items-center justify-between p-4 px-6">
          <a href="#" className="flex items-center">
            <img src="circle.png" className="w-14 h-14 ml-3" alt="Logo" />
          </a>
          <div className="w-auto">
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="block rounded p-0">
                  Navbar
                </a>
              </li>
              <li>
                <a href="#" className="block rounded p-0">
                  Navbar
                </a>
              </li>
              <li>
                <a href="#" className="block rounded p-0">
                  Navbar
                </a>
              </li>
              <li>
                <a href="#" className="block rounded p-0">
                  Navbar
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="flex items-center justify-center h-[500px] relative">
        <div className="absolute inset-0">
          <img src="bg.png" alt="" className="object-cover w-full h-full" />
        </div>
      </header>

      <section class="pt-28">
        <div class="flex items-center justify-between mx-36">
          <img src="circle.png" class="w-96 h-auto rounded-full" />
          <div class="bg-[#eaeaea] rounded-sm p-10 flex">
            <img src="bg.png" class="w-80 h-[25rem] bg-cover" />
            <div>
              <p class="max-w-[400px] ml-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#eaeaea] mt-28">
        <div className="flex justify-between items-center px-20 py-7">
          <div className="flex">
            <a
              href="#"
              target="_blank"
              className="mr-1 hover:bg-gray-300 rounded-full transition duration-300 ease-in-out p-2"
            >
              <img src="circle.png" alt="Social Icon" className="w-14 h-14" />
            </a>
            <a
              href="#"
              target="_blank"
              className="mr-1 hover:bg-gray-300 rounded-full transition duration-300 ease-in-out p-2"
            >
              <img src="circle.png" alt="Social Icon" className="w-14 h-14" />
            </a>
            <a
              href="#"
              target="_blank"
              className="hover:bg-gray-300 rounded-full transition duration-300 ease-in-out p-2"
            >
              <img src="circle.png" alt="Social Icon" className="w-14 h-14" />
            </a>
          </div>
          <p className="text-2xl">Copyright Your Name</p>
          <p className="text-2xl">Footer</p>
        </div>
      </footer>
    </main>
  );
};

export default App;
