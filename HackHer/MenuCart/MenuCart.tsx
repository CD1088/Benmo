import React from "react";
import styles from "./MenuCart.module.css";

interface MenuItem {
  id: string;
  name: string;
  info: string;
  price: number;
  imageUrl: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

interface MenuCartProps {
  menuItems: MenuItem[];
  cartItems: CartItem[];
  onAddToCart: (item: MenuItem) => void;
  onCheckout: () => void;
}

const MenuCart: React.FC<MenuCartProps> = ({
  menuItems,
  cartItems,
  onAddToCart,
  onCheckout,
}) => {
  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.1; // Assuming 10% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <div className={styles.menuColumn}>
          <h2 className={styles.sectionTitle}>Total Check</h2>
          <div className={styles.menuList}>
            {menuItems.map((item) => (
              <div key={item.id} className={styles.menuItem}>
                <div className={styles.menuItemImageWrapper}>
                  <img
                    loading="lazy"
                    src={item.imageUrl}
                    className={styles.menuItemImage}
                    alt={item.name}
                  />
                </div>
                <div className={styles.menuItemInfo}>
                  <h3 className={styles.menuItemName}>{item.name}</h3>
                  <p className={styles.menuItemDescription}>{item.info}</p>
                </div>
                <div className={styles.menuItemPrice}>
                  <p>${item.price}</p>
                </div>
                <div className={styles.menuItemAction}>
                  <button
                    className={styles.addButton}
                    onClick={() => onAddToCart(item)}
                  >
                    Check
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cartColumn}>
          <div className={styles.cartWrapper}>
            <h2 className={styles.cartTitle}>your check</h2>
            <div className={styles.cartContent}>
              <div className={styles.cartItems}>
                {cartItems.map((item) => (
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.cartItemImageWrapper}>
                      <img
                        loading="lazy"
                        src={item.imageUrl}
                        className={styles.cartItemImage}
                        alt={item.name}
                      />
                    </div>
                    <div className={styles.cartItemInfo}>
                      <h3 className={styles.cartItemName}>{item.name}</h3>
                      <p className={styles.cartItemDescription}>{item.info}</p>
                    </div>
                    <div className={styles.cartItemPrice}>
                      <p>${item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.cartSummary}>
              <p className={styles.summaryItem}>
                Food price: ${calculateSubtotal().toFixed(2)}
              </p>
              <p className={styles.summaryItem}>
                tax: ${calculateTax().toFixed(2)}
              </p>
              <p className={styles.summaryTotal}>
                total: ${calculateTotal().toFixed(2)}
              </p>
              <button className={styles.checkoutButton} onClick={onCheckout}>
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCart;
