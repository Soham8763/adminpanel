import React, { useState } from 'react';

const Jobs = () => {
  //we will create a state to hold the default values of the form 
  const [formData, setFormData] = useState({
    nextService: '2019-11-25',
    recurringInterval: '7',
    status: 'active',
    addons: {
      flowerBedCleanup: false,
      edging: false,
    },
  });
  //All the input handlers will take the event and update the form data by taking the previous data and spreading it and then updating the specific value
  //Next Service input handler 
  const handleNextServiceChange = (event) => {
    const newNextService = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      nextService: newNextService,
    }));
    console.log(JSON.stringify({ nextService: newNextService }));
  };
  //Recurring Interval input handler
  const handleRecurringIntervalChange = (event) => {
    const newRecurringInterval = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      recurringInterval: newRecurringInterval,
    }));
    console.log(JSON.stringify({ recurringInterval: newRecurringInterval }));
  };
  //Toggle switch (Paused/Active) handler
  const handleToggleChange = () => {
    const newStatus = formData.status === 'paused' ? 'active' : 'paused';
    setFormData((prevData) => ({
      ...prevData,
      status: newStatus,
    }));
    console.log(JSON.stringify({ status: newStatus }));
  };
  //Add-ons (checkboxes) handler
  const handleAddonChange = (addonKey) => {
    const newAddonValue = !formData.addons[addonKey];
    setFormData((prevData) => ({
      // the set form data will take the previous data, spread it. Take the addons object and update it with spreading the current addon value
      ...prevData,
      addons: {
        ...prevData.addons,
        [addonKey]: newAddonValue,
      },
    }));
    console.log(JSON.stringify({ addons: { [addonKey]: newAddonValue } }));
  };
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Jobs</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Settings</h2>
        {/* Next Service */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Next Service
          </label>
          <input
            type="date"
            className="border border-gray-300 rounded px-4 py-2 w-full"
            value={formData.nextService}
            onChange={handleNextServiceChange}
          />
        </div>

        {/* Recurring Interval */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Recurring Interval
          </label>
          <select
            className="border border-gray-300 rounded px-4 py-2 w-full"
            value={formData.recurringInterval}
            onChange={handleRecurringIntervalChange}
          >
            <option value="7">7 days</option>
            <option value="14">14 days</option>
            <option value="30">30 days</option>
          </select>
        </div>

        {/* Toggle Switch */}
        <div className="flex items-center mb-4">
          <span className="mr-4 font-medium text-gray-700">Paused</span>
          <label className="switch">
            <input type="checkbox" checked={formData.status === 'active'} onChange={handleToggleChange} />
            <span className="slider round"></span>
          </label>
          <span className="ml-4 font-medium text-gray-700">Active</span>
        </div>
        <div className="text-gray-600">
          <p>Order will be placed on: <strong>11/22/2019</strong></p>
          <p>Payment Information: <strong>VISA ending in XXXX</strong></p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Edit</button>
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Manage Add-ons</h2>
        {/* Add-ons Options */}
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="flower-bed"
            className="mr-2"
            checked={formData.addons.flowerBedCleanup}
            onChange={() => handleAddonChange('flowerBedCleanup')}
          />
          <label htmlFor="flower-bed" className="text-gray-700">
            Flower Bed Clean Up
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="edging"
            className="mr-2"
            checked={formData.addons.edging}
            onChange={() => handleAddonChange('edging')}
          />
          <label htmlFor="edging" className="text-gray-700">
            Edging
          </label>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Add a Yard Clean Up
        </button>
      </div>
      {/* Order Summary */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="text-gray-600">
          <p>Lawn Mow: $XX.XX</p>
          <p>Flower Bed Clean Up: $XX.XX</p>
          <p>Edging: $XX.XX</p>
          <p>Taxes: $XX.XX</p>
          <p>Service Fee: $XX.XX</p>
        </div>
        <div className="text-right text-gray-700 mt-4">
          <p><strong>Total:</strong> $XX.XX</p>
        </div>
      </div>
      {/* Landscaper */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Notes for the Landscaper</h2>
        <div className="flex gap-4 mb-4">
          <div className="w-24 h-24 bg-gray-300"></div>
          <div className="w-24 h-24 bg-gray-300"></div>
          <div className="w-24 h-24 bg-gray-300"></div>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
      </div>
      {/* Job History Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Job History</h2>
        <table className="table-auto w-full text-left text-gray-700">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Scheduled Date</th>
              <th className="px-4 py-2">Rescheduled</th>
              <th className="px-4 py-2">Completed</th>
              <th className="px-4 py-2">Partner</th>
              <th className="px-4 py-2">Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">01/01/2021</td>
              <td className="border px-4 py-2">No</td>
              <td className="border px-4 py-2">Yes</td>
              <td className="border px-4 py-2">Partner 1</td>
              <td className="border px-4 py-2">5</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">02/15/2021</td>
              <td className="border px-4 py-2">Yes</td>
              <td className="border px-4 py-2">Yes</td>
              <td className="border px-4 py-2">Partner 2</td>
              <td className="border px-4 py-2">4</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Jobs;
