
type Props = {
  label: string;
  name: string;
  value: string;
  uppercase?: boolean;
  error: string;
  labelStyle?: string;
  onChange: (e: any) => any;
};

export default function Textarea({
  error,
  label,
  name,
  onChange,
  uppercase,
  labelStyle,
  value,
}: Props) {
  return (
    <div className="">
      <p className={`font-semibold ${labelStyle} capitalize text-sm mb-1`}>{label}</p>
      <div className="h-40 shadow-md">
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className={`h-full focus:border-blue-500 duration-500 w-full text-sm rounded ${
            uppercase && "uppercase"
          } border-2 bg-transparent outline-none p-3`}
        >

        </textarea>
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
