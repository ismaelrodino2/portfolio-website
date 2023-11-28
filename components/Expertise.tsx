type Props = {
  label: string;
  value: number;
};

const Expertise = (props: Props) => {
  return (
    <div>
      <div className="mb-1">{props.label}</div>
      <div className="relative">
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
          <div
            style={{ width: `${props.value}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
