import PrimaryBtn from "./PrimaryBtn";
import { User } from "../utils/types/User";

type Props = {
  user: User | null;
};

const InputBox = ({ user }: Props) => {
  return (
    <div className="flex flex-row border-2 border-[#353C4A] rounded-full bg-[#181E29]">
      <div className="flex flex-row flex-grow">
        <img src="/export.svg" className="ml-4" />
        <input
          type="text"
          className="md:w-[22rem] h-12 px-4 rounded-s-full text-sm text-[#C9CED6] bg-[#181E29] border-0 outline-none "
          placeholder="Enter the link here"
        />
      </div>
      <div className="my-1 mr-1">
        <PrimaryBtn title="Shorten Now!" />
      </div>
    </div>
  );
};

export default InputBox;
