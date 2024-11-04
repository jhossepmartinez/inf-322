import React, { useState } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlockSelector = () => {

    const days = ['2 de sept', '3 de sept', '4 de sept', '5 de sept', '6 de sept', '7 de sept', '8 de sept'];
    const times = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

    const [availability, setAvailability] = useState([
        [false, true, false, true, true, true, false, true], // 2 de sept
        [true, true, false, true, true, true, true, true],   // 3 de sept
        [true, true, true, true, false, true, true, true],   // 4 de sept
        [true, true, true, true, true, true, true, false],   // 5 de sept
        [true, true, false, true, true, true, true, true],   // 6 de sept
        [true, true, true, false, true, true, true, true],   // 7 de sept
        [true, true, false, true, true, false, true, true],  // 8 de sept
    ]);

    const [selectedSlots, setSelectedSlots] = useState([]);

    const handleSlotClick = (dayIndex, timeIndex) => {
        const slot = `${dayIndex}-${timeIndex}`;
        setSelectedSlots(prevSelected =>
            prevSelected.includes(slot)
                ? prevSelected.filter(s => s !== slot) 
                : [...prevSelected, slot]
        );
    };

    const handleReserve = () => {
        const newAvailability = [...availability]; 

        selectedSlots.forEach(slot => {
            const [dayIndex, timeIndex] = slot.split('-').map(Number);
            newAvailability[dayIndex][timeIndex] = false;
        });

        setAvailability(newAvailability); 
        setSelectedSlots([]); 
        toast('Reserva Realizada!');
    };

    return (
<div className="mt-6 flex flex-col items-center">
            <div className="flex flex-col space-y-2">
                <div className="flex">
                    <div className="w-24"></div>
                    {times.map((time, index) => (
                        <div key={index} className="w-24 text-center font-semibold">
                            {time}
                        </div>
                    ))}
                </div>

                {days.map((day, dayIndex) => (
                    <div key={dayIndex} className="flex items-center">
                        <div className="w-24 p-2 text-center bg-white border border-black rounded-lg font-medium">
                            {day}
                        </div>

                        {availability[dayIndex].map((isAvailable, timeIndex) => (
                            <div
                                key={timeIndex}
                                className={`w-20 h-10 m-2 border-2 rounded-md flex justify-center items-center cursor-pointer ${
                                    isAvailable
                                        ? selectedSlots.includes(`${dayIndex}-${timeIndex}`)
                                            ? 'bg-yellow-400' // Selected
                                            : 'bg-green-300'  // Available
                                        : 'bg-red-300 cursor-not-allowed' 
                                }`}
                                onClick={() => isAvailable && handleSlotClick(dayIndex, timeIndex)}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
            <button
                className="mt-5 px-6 py-3 bg-gray-300 rounded-md font-bold hover:bg-gray-400 focus:outline-none"
                onClick={handleReserve}
            >
                Reservar
            </button>
        </div>
    );
};

export default BlockSelector;

