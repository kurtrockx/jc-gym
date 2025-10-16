import { Link, useOutletContext } from "react-router-dom";
import MainContentLayout from "../../layout/MainContentLayout";
import editIcon from "../../assets/editIcon.png";
import {PRODUCTS} from '../../sampleProducts'

export default function InventoryPage({ rerender }) {
  const { pageTitle } = useOutletContext();

  return (
    <MainContentLayout pageTitle={pageTitle} rerender={true} buttonShow={false}>
      <ul className="grid grid-cols-4">
        {PRODUCTS.map((product, index) => (
          <li
            key={index}
            className="relative m-4 flex flex-col items-center rounded-lg bg-[#ebebeb] p-4 shadow-md"
          >
            <p className="mb-1 font-semibold text-gray-900">
              Price:{" "}
              <span className="text-yellow-600">
                ${product.cost.toFixed(2)}
              </span>
            </p>
            <img
              src={product.imgSource}
              alt={product.name}
              className="mb-4 h-32 w-32 object-cover"
            />
            <Button />
            <EditButton itemId={product.itemId} />
          </li>
        ))}
      </ul>
    </MainContentLayout>
  );
}

function Button({ children, amount = 0, handleMinus, handlePlus }) {
  return (
    <div className={`w-full cursor-pointer rounded-xl px-4 font-bold`}>
      <div className="grid grid-cols-3 gap-2 text-center">
        <button
          className="rounded-2xl bg-white shadow-lg"
          onClick={handleMinus}
        >
          -
        </button>
        <p className="rounded-2xl bg-white shadow-lg"> {amount}</p>
        <button className="rounded-2xl bg-white shadow-lg" onClick={handlePlus}>
          +
        </button>
        <button className="col-span-3 w-full rounded-2xl bg-yellow-500 text-center font-semibold whitespace-nowrap shadow-lg">
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

function EditButton({ itemId }) {
  return (
    <Link to={`edit/${itemId}`}>
      <button>
        <img
          src={editIcon}
          alt="edit"
          className="absolute top-0 right-0 cursor-pointer p-2 duration-100 hover:-translate-y-0.5"
        />
      </button>
    </Link>
  );
}
