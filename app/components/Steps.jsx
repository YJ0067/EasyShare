export default function Steps() {
    const step = "flex flex-col items-center text-center";
    return (
      <div className="grid grid-cols-3 gap-2 text-sm mb-4 border border-black p-4 bg-white rounded-md">
        <div className={step}>
          <div className="h-10 w-10 border border-black rounded-full flex items-center justify-center font-bold">
            1
          </div>
          <p className="mt-2 font-semibold">Drag & Drop Files</p>
        </div>
        <div className={step}>
          <div className="h-10 w-10 border border-black rounded-full flex items-center justify-center font-bold">
            2
          </div>
          <p className="mt-2 font-semibold">Set Password</p>
        </div>
        <div className={step}>
          <div className="h-10 w-10 border border-black rounded-full flex items-center justify-center font-bold">
            3
          </div>
          <p className="mt-2 font-semibold">Enter Password & Download</p>
        </div>
      </div>
    );
  }
  