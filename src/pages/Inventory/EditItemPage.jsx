import { useParams } from "react-router-dom";
import { PRODUCTS } from "../../sampleProducts";

export default function EditItemPage() {
  const { itemId } = useParams();
  const item = PRODUCTS.find((product) => product.itemId === itemId);

  return (
    <div>
      {item.name} = price of: {item.cost}
    </div>
  );
}
