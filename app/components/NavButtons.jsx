const btn = "px-3 py-1 border border-black rounded-md bg-white";

export default function NavButtons() {
  return (
    <div className="grid grid-cols-6 gap-2 border border-black p-2 bg-white rounded-md">
      <button className={btn}>-</button>
      <button className="col-span-4 border border-black rounded-md py-1 bg-white">--------</button>
      <button className={btn}>+</button>
    </div>
  );
}
