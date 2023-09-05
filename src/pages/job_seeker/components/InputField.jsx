// InputField.js
import React, { useState } from "react";

const InputField = ({ onInputChange }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Add your validation logic here
    if (!value.trim()) {
      setError("Please enter a value");
    } else {
      setError("");
    }

    // Pass the input value to the parent component
    onInputChange(value);
  };

  return (
    <div className="mb-5">
      <label
        for="username"
        class="block mb-2 text-sm font-medium text-gray-600"
      >
        username
      </label>

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        required
        className={`block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
