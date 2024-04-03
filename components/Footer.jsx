import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#f4edf2]">
      <div className="px-16 max-[900px]:px-6">
        <div className="py-6">
          <div className="flex  max-[900px]:flex-col items-center justify-between">
            <div className="">
              <div className="flex items-center  max-[900px]:justify-center">
                <Image
                  src="/img/plant.png"
                  alt="Plant Logo"
                  width={30}
                  height={30}
                />
                <h1 className="font-bold text-2xl ml-1  text-[#4b3049]">
                  PLANTS
                </h1>
              </div>
              <div className="mt-5  flex max-[900px]:flex-col items-center justify-center">
                <a
                  href="/"
                  className="mr-5 max-[900px]:mr-0 text-base capitalize font-medium  no-underline text-black max-[900px]:mb-2"
                >
                  Overview
                </a>
                <a
                  href="/"
                  className="mr-5 max-[900px]:mr-0 text-base capitalize font-medium  no-underline text-black max-[900px]:mb-2"
                >
                  Privacy Policy
                </a>
                <a
                  href="/"
                  className="mr-5 max-[900px]:mr-0 text-base capitalize font-medium  no-underline text-black max-[900px]:mb-2"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>

            <div className="subscribe-wrapper">
              <p className="pl-[10px] pb-[20px] text-left text-xl font-medium capitalize max-[900px]:mt-4 max-[900px]:text-center max-[900px]:pl-0">
                Subscribe to get updates
              </p>
              <div className="subscribe-buttons">
                <form className="flex items-center">
                  <input
                    type="email"
                    name="EMAIL"
                    id="newsletter-form-email"
                    placeholder="Your email address ..."
                    className="w-full min-w-[250px] px-5 py-[10px] mr-[5px] border border-[#4b3049] text-[#4b3049] rounded-full"
                  />

                  <button
                    type="submit"
                    className="px-4 py-2 text-[#f4edf2] bg-[#b08ead] rounded-full border-none m-0"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
