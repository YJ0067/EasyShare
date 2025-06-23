import Header from "./components/Header";
import NavButtons from "./components/NavButtons";
import InputFields from "./components/InputFields";
import Steps from "./components/Steps";
import UploadBar from "./components/UploadBar";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-[#dbeafe] p-4 flex flex-col items-center">
      <div className="w-full max-w-6xl border border-black p-4 bg-white shadow-md">
        <Header />
        <div className="mt-4 space-y-4">
          <NavButtons />
          <InputFields />
        </div>
        <div className="mt-8 border-t border-black pt-4">
          <Steps />
          <UploadBar />
        </div>
      </div>
    </main>
  );
}
