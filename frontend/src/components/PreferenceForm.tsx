import React, { useState } from "react";

interface PreferenceFormProps {
  onSubmit: (formData: FormData) => void;
}

interface FormData {
  budget: number;
  interests: string;
  season: string;
}

const PreferenceForm: React.FC<PreferenceFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    budget: 0,
    interests: "",
    season: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <label className="block">
        <span className="text-gray-700">Budget:</span>
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>
      <label className="block">
        <span className="text-gray-700">
          Interests (e.g., beach, adventure):
        </span>
        <input
          type="text"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
          required
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Preferred Season:</span>
        <select
          name="season"
          value={formData.season}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Select</option>
          <option value="summer">Summer</option>
          <option value="winter">Winter</option>
          <option value="spring">Spring</option>
          <option value="fall">Fall</option>
        </select>
      </label>
      <button type="submit" className="bg-green-500 text-white p-2 rounded">
        Get Recommendations
      </button>
    </form>
  );
};

export default PreferenceForm;
