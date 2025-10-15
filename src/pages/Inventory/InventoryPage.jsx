import { Link, useOutletContext } from "react-router-dom";
import MainContentLayout from "../../layout/MainContentLayout";

const PRODUCTS = [
  {
    name: "Premium Dog Food",
    cost: 899.0,
    amountLeft: 25,
    description:
      "High-protein dry food for active dogs. Supports muscle growth and energy.",
    imgSource: "https://i.ibb.co/1t7pjbd8/68517900.jpg",
  },
  {
    name: "Cat Scratching Post",
    cost: 499.0,
    amountLeft: 12,
    description:
      "Durable scratching post made from sisal rope to keep cats entertained.",
    imgSource: "https://i.ibb.co/1t7pjbd8/68517900.jpg",
  },
  {
    name: "Pet Shampoo",
    cost: 299.0,
    amountLeft: 40,
    description:
      "Gentle, hypoallergenic shampoo suitable for both dogs and cats.",
    imgSource: "https://i.ibb.co/1t7pjbd8/68517900.jpg",
  },
  {
    name: "Bird Seed Mix",
    cost: 199.0,
    amountLeft: 60,
    description: "Nutrient-rich blend of seeds for all types of pet birds.",
    imgSource: "https://i.ibb.co/1t7pjbd8/68517900.jpg",
  },
  {
    name: "Aquarium Filter",
    cost: 1499.0,
    amountLeft: 8,
    description:
      "High-efficiency filter that keeps aquarium water clean and clear.",
    imgSource: "https://i.ibb.co/1t7pjbd8/68517900.jpg",
  },
  {
    name: "Rabbit Hay Bale",
    cost: 249.0,
    amountLeft: 30,
    description:
      "Fresh, high-fiber Timothy hay perfect for rabbits and guinea pigs.",
    imgSource: "https://i.ibb.co/1t7pjbd8/68517900.jpg",
  },
  {
    name: "Pet Water Fountain",
    cost: 999.0,
    amountLeft: 15,
    description: "Automatic water dispenser encouraging pets to stay hydrated.",
    imgSource: "https://i.ibb.co/1t7pjbd8/68517900.jpg",
  },
  {
    name: "Dog Leash Set",
    cost: 350.0,
    amountLeft: 22,
    description:
      "Durable nylon leash and collar combo, adjustable for all sizes.",
    imgSource: "https://i.ibb.co/1t7pjbd8/68517900.jpg",
  },
  {
    name: "Cat Litter 5kg",
    cost: 420.0,
    amountLeft: 18,
    description: "Clumping cat litter with odor control for a cleaner home.",
    imgSource: "https://i.ibb.co/1t7pjbd8/68517900.jpg",
  },
  {
    name: "Hamster Cage Kit",
    cost: 1299.0,
    amountLeft: 10,
    description:
      "Complete starter kit with a cage, wheel, and food bowl for small pets.",
    imgSource: "https://i.ibb.co/1t7pjbd8/68517900.jpg",
  },
];

export default function InventoryPage({ rerender }) {
  const { pageTitle } = useOutletContext();

  return (
    <MainContentLayout pageTitle={pageTitle} rerender={true}>
      <ul className="grid grid-cols-3">
        {PRODUCTS.map((product, index) => (
          <li
            key={index}
            className="m-4 flex flex-col items-center rounded-lg bg-[#ebebeb] p-4 shadow-md"
          >
            <p className="mb-1 font-semibold text-gray-900">
              Price: ${product.cost.toFixed(2)}
            </p>
            <img
              src={product.imgSource}
              alt={product.name}
              className="mb-4 h-32 w-32 object-cover"
            />
            <Button />
          </li>
        ))}
      </ul>
    </MainContentLayout>
  );
}

function Button({ children, amountLeft = 0, handleMinus, handlePlus }) {
  return (
    <div className={`w-full cursor-pointer rounded-xl px-4 font-bold`}>
      <div className="grid grid-cols-3 gap-2 text-center">
        <button
          className="rounded-2xl bg-white shadow-lg"
          onClick={handleMinus}
        >
          -
        </button>
        <p className="rounded-2xl bg-white shadow-lg"> {amountLeft}</p>
        <button className="rounded-2xl bg-white shadow-lg" onClick={handlePlus}>
          +
        </button>
        <button className="col-span-3 w-full rounded-2xl bg-white text-center font-semibold whitespace-nowrap shadow-lg">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}
