export default function InputFields() {
    const input = "w-full p-2 border border-black rounded-md bg-white";
    return (
      <div className="space-y-3 border border-black p-3 bg-white rounded-md">
        <input className={input} placeholder="--------" />
        <input className={input} placeholder="--------" />
        <input className={input} placeholder="--------" />
      </div>
    );
  }
  