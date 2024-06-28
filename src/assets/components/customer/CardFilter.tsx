
import { useState } from 'react';

const CardFilter = () => {
  const [driverType, setDriverType] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [passenger, setPassenger] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="searchBox">
      <div className="bg-white py-5 lg:absolute inset-x-0 lg:top-[425px] lg:mx-28 lg:drop-shadow-lg rounded-xl static inset-auto top-auto mx-auto mt-5">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <form id="form" onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-9 gap-5">
            <div className="relative flex flex-col gap-3 col-span-2">
              <label htmlFor="driverType" className="text-dark text-sm">Tipe Driver</label>
              <div className="relative mt-2">
                <select
                  id="driverType"
                  className="input-form w-full border border-gray-300 rounded-md px-3 py-2 pr-10 appearance-none bg-white"
                  value={driverType}
                  onChange={(e) => setDriverType(e.target.value)}
                >
                  <option>Pilih Tipe Driver</option>
                  <option>Sedan</option>
                  <option>Convertible</option>
                  <option>Regular Cab Pickup</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-3 col-span-2">
              <label htmlFor="date" className="text-dark text-sm">Tanggal</label>
              <input
                type="date"
                id="date"
                className="input-form w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
                placeholder="Tanggal"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3 col-span-2">
              <label htmlFor="time" className="text-dark text-sm">Waktu Jemput/Ambil</label>
              <input
                type="time"
                id="time"
                className="input-form w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
                placeholder="Waktu"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3 col-span-2">
              <label htmlFor="passenger" className="text-dark text-sm">Jumlah Penumpang (optional)</label>
              <input
                type="number"
                id="passenger"
                className="input-form w-full border border-gray-300 rounded-md px-3 py-2 mt-2"
                placeholder="Jumlah Penumpang"
                value={passenger}
                onChange={(e) => setPassenger(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-end col-span-1 gap-y-5">
              <button
                type="submit"
                className="bg-[#5CB85F] text-white py-3 disabled:opacity-50 rounded-[2px]"
                id="btnSearchCar"
              >
                Cari Mobil
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CardFilter;
