import { IoIosCheckmark } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Subscription = () => {
  const navigate = useNavigate();

  const handlePayment = (price, duration) => {
    navigate("/payment", { state: { price, duration } });
  };

  return (
    <div>
      <div className="bg-third p-10">
        <div className="text-xl md:text-4xl font-bold border-l-8 border-secondary pl-8">
          <h1>Elevate Your News Experience: Dive Deeper, Know More!</h1>
          <hr />
          <h1>Uncover Stories Beyond the Headlines: Subscribe for Insights!</h1>
          <hr />
          <h1>Ignite Your Curiosity: Access Exclusive News, Uncover Truths!</h1>
          <hr />
          <h1>Stay Ahead, Stay Informed: Your Passport to Premium News!</h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-5 py-5">
        <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-primary to-secondary bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
          <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
              Basic
            </p>
            <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
              <span className="mt-2 text-4xl">$</span>3
              <span className="self-end text-4xl">/1min</span>
            </h1>
          </div>
          <div className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                  <IoIosCheckmark />
                </span>
                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                  1 minute only
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                  <IoIosCheckmark />
                </span>
                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                  Ad-free browsing experience.
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                  <IoIosCheckmark />
                </span>
                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                  Personalized news recommendations based
                </p>
              </li>
            </ul>
          </div>
          <div className="p-0 mt-12">
            <button
              onClick={() => handlePayment(3, 1)}
              className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-primary to-secondary bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
          <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
              Standard
            </p>
            <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
              <span className="mt-2 text-4xl">$</span>6
              <span className="self-end text-4xl">/5min</span>
            </h1>
          </div>
          <div className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                  <IoIosCheckmark />
                </span>
                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                  5 minute premium access
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                  <IoIosCheckmark />
                </span>
                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                  Ad-free browsing experience.
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                  <IoIosCheckmark />
                </span>
                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                  Personalized news recommendations based
                </p>
              </li>
            </ul>
          </div>
          <div className="p-0 mt-12">
            <button
              onClick={() => handlePayment(6, 5)}
              className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              Subscribe Now
            </button>
          </div>
        </div>
        <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-primary to-secondary bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
          <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
              Popular
            </p>
            <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
              <span className="mt-2 text-4xl">$</span>9
              <span className="self-end text-4xl">/10min</span>
            </h1>
          </div>
          <div className="p-0">
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                  <IoIosCheckmark />
                </span>
                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                  10 minute premium access
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                  <IoIosCheckmark />
                </span>
                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                  Ad-free browsing experience.
                </p>
              </li>
              <li className="flex items-center gap-4">
                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                  <IoIosCheckmark />
                </span>
                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                  Personalized news recommendations based
                </p>
              </li>
            </ul>
          </div>
          <div className="p-0 mt-12">
            <button
              onClick={() => handlePayment(9, 10)}
              className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
