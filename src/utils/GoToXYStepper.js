import React, { useState } from 'react';
import commandParser from './commandParser';
import { goToXY } from './utility';

const GoToXYStepper = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const cat = document.querySelector('#movingCat');

    const handleSubmit = async () => {
        const command = {
            cmdID: 'Motion_GoToXY',
            cmdText: `Go to x: ${x} y: ${y}`
        };
        await commandParser([{ cmdID: 'Motion_GoToXY', cmdText: `${x} ${y}` }]);
    };

    const preventInput = (e) => e.preventDefault();

    return (
        <div className="p-4 rounded-xl shadow-md bg-white w-fit flex flex-col gap-4 items-start">
            <div className="flex items-center gap-2">
                <label className="font-medium">X:</label>
                <input
                    type="number"
                    value={x}
                    readOnly
                    step={10}
                    onKeyDown={preventInput}
                    onWheel={preventInput}
                    className="w-20 border px-2 py-1 rounded"
                />
                <div className="flex flex-col">
                    <button onClick={() => setX(x + 10)}>▲</button>
                    <button onClick={() => setX(x - 10)}>▼</button>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <label className="font-medium">Y:</label>
                <input
                    type="number"
                    value={y}
                    readOnly
                    step={10}
                    onKeyDown={preventInput}
                    onWheel={preventInput}
                    className="w-20 border px-2 py-1 rounded"
                />
                <div className="flex flex-col">
                    <button onClick={() => setY(y + 10)}>▲</button>
                    <button onClick={() => setY(y - 10)}>▼</button>
                </div>
            </div>

            <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
            >
                Go to X:Y
            </button>
        </div>
    );
};

export default GoToXYStepper;
