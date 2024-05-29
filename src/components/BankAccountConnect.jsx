function BankAccountConnect() {
  return (
    <section className="rounded-2xl gap-3 text-white border lg:w-1/6 w-1/2 h-full flex flex-col justify-center p-5 bg-gradient-to-b from-green-700 to-teal-900">
      <h2 className="mt-5 text-2xl h-fit">
        Connect your bank account or credit card
      </h2>
      <p className="text-lg h-fit">
        Automate your bookkeeping by importing transactions automatically
      </p>
      <button className="bg-[#E1F296] p-5 rounded-3xl text-black">
        Connect Account
      </button>
    </section>
  );
}

export default BankAccountConnect;
