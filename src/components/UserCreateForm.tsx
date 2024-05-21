import { useRouter } from "next/navigation";
import { createUserAction } from "../app/actions";

const UserCreateForm = ({
  setOpenModal,
}: {
  setOpenModal: (openModal: boolean) => void;
}) => {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      await createUserAction(formData);
      setOpenModal(false);
    } catch (error) {
      console.error("Error occurred while handling form submission:", error);
    }
    router.refresh();
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center bg-secondary/80 z-[999]">
      <form
        onSubmit={handleSubmit}
        className="w-1/5   bg-[#f4edf2] dark:bg-secondary shadow-xl  p-8 rounded-xl flex flex-col gap-5 justify-center items-center [&>input]:bg-white"
      >
        <button onClick={() => setOpenModal(false)} className="text-md">
          X
        </button>
        <input
          className="w-full h-full  border-none outline-none py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px]"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="w-full h-full  border-none outline-none py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px]"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="w-full h-full  border-none outline-none py-3 pl-1 text-secondary lg:text-[16px] rounded-[5px]"
          type="text"
          name="age"
          placeholder="Age"
          required
        />
        <div className="w-full flex gap-3">
          <button
            className="w-full h-full border-0 bg-[#755272] text-white text-base  rounded-[5px] py-3 lg:py-auto px-7 font-small lg:text-[20px] lg:font-medium cursor-pointer transition-all transform duration-300 ease-linear"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserCreateForm;
