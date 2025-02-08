import React, { useState } from "react";
import moment from "jalali-moment";

interface PersianDatePickerProps {
  onSelect: (date: string) => void;
}

const PersianDatePicker = ({ onSelect }: PersianDatePickerProps) => {
  const [date, setDate] = useState(moment().locale("fa").format("jYYYY/jMM/jDD"));
  const [show, setShow] = useState(false);

  const togglePicker = () => setShow(!show);
  const selectDate = (selectedDate: string) => {
    setDate(selectedDate);
    onSelect(selectedDate);
    setShow(false);
  };
  const today = () => selectDate(moment().locale("fa").format("jYYYY/jMM/jDD"));
  const clear = () => selectDate("");

  return (
    <div className="relative w-64">
      <input
        type="text"
        value={date}
        readOnly
        className="w-full border p-2 rounded cursor-pointer"
        onClick={togglePicker}
      />
      {show && (
        <div className="absolute bg-white border shadow-lg p-4 w-full z-10">
          <div className="flex justify-between items-center mb-2">
            <button onClick={() => selectDate(moment(date, "jYYYY/jMM/jDD").subtract(1, "day").format("jYYYY/jMM/jDD"))}>-</button>
            <span>{date}</span>
            <button onClick={() => selectDate(moment(date, "jYYYY/jMM/jDD").add(1, "day").format("jYYYY/jMM/jDD"))}>+</button>
          </div>
          <div className="flex justify-between">
            <button className="px-2 py-1 bg-gray-300 rounded" onClick={clear}>خالی</button>
            <button className="px-2 py-1 bg-blue-500 text-white rounded" onClick={today}>امروز</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersianDatePicker;
