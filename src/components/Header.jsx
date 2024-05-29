function Header() {
  return (
    <div className="flex h-fit xl:justify-between items-center md:gap-0 gap-5  max-w-7xl">
      <h1 className="text-3xl h-fit flex flex-col md:flex-grow flex-grow-0">
        Dashboard
      </h1>
      <button className=" bg-dark-green text-white w-[15%] flex p-4 rounded-3xl">
        <span>Create</span>
        <span className="ml-auto text-xl">+</span>
      </button>
    </div>
  );
}

export default Header;
