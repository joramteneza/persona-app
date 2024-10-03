import {
  Book,
  ChevronLeft,
  ChevronRight,
  Copy,
  Menu,
  Plus,
  Share,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-md sm:max-w-[1096px] mx-auto bg-white min-h-screen flex flex-col">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg"></div>
          <span className="text-green-600 text-sm border border-green-600 rounded-full p-1 px-3">
            BETA
          </span>
        </div>
        <button className="text-gray-600">
          <Menu size={24} />
        </button>
      </header>

      <main className="flex-1 p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Persona</h1>
          <button className="bg-yellow-300 rounded-full p-2">
            <Plus size={24} />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative rounded-xl overflow-hidden h-auto">
            <Image
              src="/images/alena.jpg"
              alt="Alena"
              width={400}
              height={300}
              className="w-full h-96 sm:h-72 sm:w-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-50 to-transparent p-4">
              <br />
              <h2 className="text-2xl font-bold">Alena</h2>
              <p className="text-sm">Etsy Dropshipper</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src="/images/vicky.jpg"
              alt="Vicky"
              width={400}
              height={300}
              className="w-full h-96 sm:h-72 sm:w-72 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-50 to-transparent p-4">
              <br />
              <h2 className="text-2xl font-bold">Vicky</h2>
              <p className="text-sm">Video Editor</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
