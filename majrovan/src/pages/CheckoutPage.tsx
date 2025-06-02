// import { useState } from "react"
import { useState } from "react"
import { useCart } from "../hooks/useCart"
import styles from "./checkoutPage.module.css"
import { NavLink } from "react-router-dom"




const CheckoutPage: React.FC = () => {


    const { cart, dispatch } = useCart()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [email, setEmail] = useState("")


     // Antal varor totalt:
  const totalItems = cart.reduce((sum, ci) => sum + ci.quantity, 0);


    if (totalItems === 0) {
    return (
      <div className={styles.emptyCart}>
        <p>Din korg är tom. Välj minst en produkt.</p>
        <NavLink to="/gallery" className={styles.backButton}>
          ← Tillbaka till galleri
        </NavLink>
      </div>
    );
  }

    // Bygg en sträng att skicka i mailet (kan ändras efter behov):
  const orderText = cart
    .map(ci => `${ci.item.title} (×${ci.quantity}) — ${ci.item.price} kr st`)
    .join("\n");


    return (
        <>
            <div className={styles.container}>
                <NavLink to="/gallery">Tillbaka till galleri ({cart.length})</NavLink>
                <h3>Slutför din beställning</h3>


                <ul className={styles.cartList}>
        <h4>Kundvagn</h4>
        {cart.map(ci => (
          <li key={ci.item._id} className={styles.cartItem}>
            {/* Produkttitel + pris */}
            <div className={styles.itemInfo}>
              <span className={styles.itemTitle}>{ci.item.title}</span>
              <span className={styles.itemPrice}>{ci.item.price} kr</span>
            </div>

            {/* Plus/minus och qty */}
            <div className={styles.quantityControls}>
              <button
                type="button"
                className={styles.adjustButton}
                onClick={() =>
                  dispatch({ type: "REMOVE_ONE", id: ci.item._id })
                }
                aria-label={`Minska antal av ${ci.item.title}`}
              >
                −
              </button>
              <span className={styles.quantityText}>{ci.quantity}</span>
              <button
                type="button"
                className={styles.adjustButton}
                onClick={() => dispatch({ type: "ADD", card: ci.item })}
                aria-label={`Öka antal av ${ci.item.title}`}
              >
                +
              </button>
            </div>

            {/* Valfri ”Ta bort alla exemplar”‐knapp */}
            <button
              type="button"
              className={styles.removeAllButton}
              onClick={() =>
                dispatch({ type: "REMOVE_ALL", id: ci.item._id })
              }
              aria-label={`Ta bort alla av ${ci.item.title}`}
            >
              Ta bort alla
            </button>
          </li>
        ))}
      </ul>

                <div className={styles.orderSection}>
                    <form
                        className={styles.form}
                        action={`https://formsubmit.co/${import.meta.env.VITE_FORMSUBMIT_EMAIL}`}
                        method="POST">

                        {/* Inaktivera Formsubmit’s captcha-text */}
                        <input type="hidden" name="_captcha" value="false" />
                        {/* För att Formsubmit ska sätta reply-to i mailet */}
                        <input type="hidden" name="_replyto" value={email} />

                        {/* Visa fälten i tabell (valfritt) */}
                        <input type="hidden" name="_template" value="table" />

                        {/* Skicka med hela kundkorgen som en dold fält */}
                        <input name="order" type="hidden" value={orderText} />

                        {/* Skickar till egen tack sida istället för formsubmits tack sida */}
                        <input type="hidden" name="_next" value={`${window.location.origin}/thankYou`} />

                        <div className={styles.inputForm}>
                            <label >
                                Förnamn
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Förnamn"
                                    required
                                />
                            </label>
                        </div>


                        <div className={styles.inputForm}>
                            <label >
                                Efternamn
                                <input
                                    name="lastname"
                                    type="text"
                                    placeholder="Efternamn"
                                    required
                                />
                            </label>
                        </div>

                        <div className={styles.inputForm}>
                            <label >
                                E-post
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="din@epost.se"
                                    required
                                />
                            </label>
                        </div>

                        <div className={styles.inputForm}>
                            <label >
                                Telefonnummer
                                <input
                                    name="phone"
                                    type="phone"
                                    placeholder="0700-12 34 56"
                                    required
                                />
                            </label>
                        </div>

                        <div className={styles.inputForm}>
                            <label >
                                Gatuadress
                                <textarea
                                    name="address"
                                    placeholder="Din leveransadress"
                                    required
                                />
                            </label>
                        </div>
                        <div className={styles.inputForm}>
                            <label >
                                Postnummer
                                <input
                                    name="postnumber"
                                    placeholder="Postnummer"
                                    required
                                />
                            </label>
                        </div>
                        <div className={styles.inputForm}>
                            <label >
                                Stad
                                <input
                                    name="city"
                                    placeholder="Din stad"
                                    required
                                />
                            </label>
                        </div>



                        <div 
                        // className={styles.submitButton}
                        >
                            <button type="submit">Skicka beställning</button>
                        </div>

                    </form>

                    <div 
                    // className={styles.privacyPolicy}
                    >
                        <p>Genom att skicka beställningen godkänner du vår integritetspolicy</p>
                        <NavLink to={'./privacyPolicy'}> Integritetspolicy</NavLink>
                    </div>
                </div>

            </div>
        </>

    )
}

export default CheckoutPage