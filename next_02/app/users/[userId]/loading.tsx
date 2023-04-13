import PulseLoader from "react-spinners/PulseLoader";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <PulseLoader size={10} color="#000000" />
      <p className="text-2xl font-semibold mt-4">Loading...</p>
    </div>
  );
}
