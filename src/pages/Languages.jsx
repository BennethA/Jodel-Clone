import { useContext } from "react";
import { BiCheck } from "react-icons/bi";
import DataContext from "../Context/DataContext";
import LocationHeader from "../components/LocationHeader";

export default function Languages() {
  const { languages, setLanguages } = useContext(DataContext);
  return (
    <div>
      <LocationHeader />
      <div className="w-[330px] text-white my-[40px] mb-[45px]">
        {languages.map((item) => (
          <button
            key={item.name}
            onClick={() =>
              setLanguages(
                languages.map((lang) =>
                  lang.name === item.name
                    ? { ...lang, selected: !lang.selected }
                    : lang
                )
              )
            }
            className={`px-[13px] w-full py-2 border-b font-semibold flex justify-between items-center ${
              item.selected && "text-yellow-500"
            }`}
          >
            <p>{item.name}</p>
            {item.selected && (
              <span>
                <BiCheck />
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
