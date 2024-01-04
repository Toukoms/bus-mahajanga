export type InputProps = {
  fieldName: string;
  name: string;
  datalist?: string[];
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  fieldName,
  name,
  datalist,
  defaultValue,
  onChange,
}: InputProps) => {
  return (
    <div className="flex rounded-md overflow-hidden w-full md:w-80">
      <label className="block min-w-20 bg-yellow-500 p-3 px-4 uppercase text-sm">
        {fieldName}
      </label>
      {datalist ? (
        <datalist id={fieldName}>
          {datalist.map((value, key) => (
            <option value={value} key={key} />
          ))}
        </datalist>
      ) : null}

      <input
        type="text"
        id={name}
        name={name}
        list={fieldName}
        defaultValue={defaultValue}
        onChange={onChange}
        className="bg-slate-400/30 w-full focus:outline-none px-2"
      />
    </div>
  );
};

export default Input;
