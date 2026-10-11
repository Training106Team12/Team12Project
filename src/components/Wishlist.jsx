import { useState, useEffect } from "react";
import WishlistItem from "./WishlistItem";

function Wishlist() {
    
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorite")) || [];
    setProducts(favorites);
  }, []);

  return (
    <div className="container py-4">
      <h2 className="mb-4">Wishlist</h2>

      <div className="table-responsive">
        <table className="table">
          <tbody>
            {products.length > 0 ? (
              products.map((item, index) => (
                <WishlistItem
                  key={item.id ?? index}
                  item={{
                    ...item,
                    name: item.Name ?? item.name,
                  }}
                />
              ))
            ) : (
              <tr>
                <td className="text-center py-4">
                  Your wishlist is empty.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Wishlist;