import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { PRODUCTS } from "../../sampleProducts";

export default function EditItemPage() {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const item = PRODUCTS.find((product) => product.itemId === itemId);

  const [formData, setFormData] = useState({
    name: item?.name || "",
    cost: item?.cost || "",
    amount: item?.amount || "",
    description: item?.description || "",
    imgSource: item?.imgSource || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Updated data:", formData);
    // TODO: Save changes to backend or context
    navigate(-1); // go back after saving
  };

  if (!item) {
    return (
      <div className="flex h-screen flex-col items-center justify-center text-gray-600">
        <h1 className="mb-2 text-2xl font-semibold">Item not found 😢</h1>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 rounded-lg bg-gray-700 px-4 py-2 text-white hover:bg-gray-600"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center bg-gray-50 h-full">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          ✏️ Edit Product Details
        </h1>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* Image Preview */}
          <div className="flex flex-shrink-0 justify-center md:justify-start">
            <img
              src={formData.imgSource}
              alt={formData.name}
              className="h-48 w-48 rounded-xl object-cover shadow-md"
            />
          </div>

          {/* Edit Form */}
          <div className="flex-1">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Product Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 px-2 outline-yellow-600 focus:outline-2"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Cost (₱)
                  </label>
                  <input
                    type="number"
                    name="cost"
                    value={formData.cost}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 px-2 outline-yellow-600 focus:outline-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700">
                    Amount Left
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="w-full rounded-lg border-gray-300 px-2 outline-yellow-600 focus:outline-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                  className="mt-1 w-full rounded-lg border-gray-300 px-2 outline-yellow-600 focus:outline-2"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">
                  Image URL
                </label>
                <input
                  type="text"
                  name="imgSource"
                  value={formData.imgSource}
                  onChange={handleChange}
                  className="w-full rounded-lg border-gray-300 px-2 outline-yellow-600 focus:outline-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex justify-end gap-4">
          <button
            onClick={() => navigate(-1)}
            className="cursor-pointer rounded-lg bg-gray-200 px-4 py-2 transition hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="cursor-pointer rounded-lg bg-yellow-500 px-5 py-2 text-white transition hover:bg-yellow-700"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
