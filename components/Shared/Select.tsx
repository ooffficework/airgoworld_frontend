import { BsChat } from "react-icons/bs";

type Props = {
  label: string;
  name: string;
  data:
    | {
        value: string | number;
        label: string;
      }[]
    | undefined;
  value: string;
  labelStyle?: string;
  error: string;
  onChange: (e: any) => any;
};

export default function Select({
  error,
  label,
  name,
  data,
  onChange,
  value,
  labelStyle,
}: Props) {
  return (
    <div className="text-sm cursor-pointer">
      <p className={`font-semibold capitalize ${labelStyle} text-sm mb-1`}>{label}</p>
      <div className="h-12 shadow-md">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={`h-full w-full cursor-pointer focus:border-blue-500 duration-500 capitalize rounded border-2 bg-transparent outline-none px-2 ${error && 'border-red-500'}`}
        >
          {data?.map((el, key) => (
            <option key={key} className="capitalize" value={el.value}>
              {el.label}
            </option>
          ))}
        </select>
      </div>
      <div
        className={`text-red-500 grid ${
          error ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        } duration-500 text-[13px] mt-1.5`}
      >
        <p className="overflow-hidden">{error}</p>
      </div>
    </div>
  );
}
