'use client';

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';
import styles from './CartContent.module.css';

const CartContent: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <div className={styles.emptyContainer}>
          <div className={styles.emptyIcon}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </div>
          <h2 className={styles.emptyTitle}>Your cart is empty</h2>
          <p className={styles.emptyText}>
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link href="/shop" className={styles.continueBtn}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className={styles.cartPage}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Shopping Cart</h1>
          <button className={styles.clearBtn} onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        <div className={styles.cartLayout}>
          {/* Left: Cart Items */}
          <div className={styles.cartItems}>
            <div className={styles.cartHeader}>
              <span className={styles.headerProduct}>Product</span>
              <span className={styles.headerPrice}>Price</span>
              <span className={styles.headerQty}>Quantity</span>
              <span className={styles.headerTotal}>Total</span>
            </div>

            {cart.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <div className={styles.itemProduct}>
                  <Link href={`/product/${item.id}`} className={styles.itemImage}>
                    <div className={styles.imagePlaceholder}>
                      <img src={item.hero_image.split("?")[0]} alt={item.title} />
                    </div>
                  </Link>
                  <div className={styles.itemInfo}>
                    <Link href={`/product/${item.id}`}>
                      <h3 className={styles.itemName}>{item.title}</h3>
                    </Link>
                    <p className={styles.itemCategory}>{item.brand}</p>
                    <button
                      className={styles.removeBtn}
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className={styles.itemPrice}>
                  ${item.price.toFixed(2)}
                  {item.price && (
                    <span className={styles.itemOriginal}>
                      ${(item.price + 26).toFixed(2)}
                    </span>
                  )}
                </div>

                <div className={styles.itemQuantity}>
                  <div className={styles.quantityControl}>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className={styles.qtyValue}>{item.quantity}</span>
                    <button
                      className={styles.qtyBtn}
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className={styles.itemTotal}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}

            <div className={styles.cartFooter}>
              <Link href="/shop" className={styles.continueShoppingBtn}>
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div className={styles.summary}>
            <div className={styles.summaryCard}>
              <h2 className={styles.summaryTitle}>Order Summary</h2>
              
              <div className={styles.summaryRow}>
                <span>Subtotal ({cart.length} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>

              {shipping === 0 && (
                <div className={styles.freeShippingBadge}>
                  ✓ You've qualified for free shipping!
                </div>
              )}

              {shipping > 0 && (
                <div className={styles.shippingNote}>
                  Add ${(100 - subtotal).toFixed(2)} more for free shipping
                </div>
              )}

              <div className={styles.summaryDivider}></div>

              <div className={styles.summaryTotal}>
                <span>Total</span>
                <span className={styles.totalAmount}>${total.toFixed(2)}</span>
              </div>

              <button className={styles.checkoutBtn}>
                Proceed to Checkout
              </button>

              {/* Discount Code */}
              <div className={styles.discountSection}>
                <details className={styles.discountDetails}>
                  <summary className={styles.discountSummary}>
                    Have a discount code?
                  </summary>
                  <div className={styles.discountForm}>
                    <input
                      type="text"
                      placeholder="Enter code"
                      className={styles.discountInput}
                    />
                    <button className={styles.applyBtn}>Apply</button>
                  </div>
                </details>
              </div>

              {/* Accepted Payment Methods */}
              <div className={styles.paymentMethods}>
                <p className={styles.paymentLabel}>We accept:</p>
                <div className={styles.paymentIcons}>
                  <span className={styles.paymentIcon}>VISA</span>
                  <span className={styles.paymentIcon}>MC</span>
                  <span className={styles.paymentIcon}>AMEX</span>
                  <span className={styles.paymentIcon}>PayPal</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className={styles.trustBadges}>
              <div className={styles.badge}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>Secure Checkout</span>
              </div>
              <div className={styles.badge}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="1" y="3" width="15" height="13" rx="1"/>
                  <path d="M16 8h4l3 5v3h-7V8z"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
                <span>Free shipping over $100</span>
              </div>
              <div className={styles.badge}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="23 4 23 10 17 10"/>
                  <polyline points="1 20 1 14 7 14"/>
                  <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
                </svg>
                <span>45-day returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
