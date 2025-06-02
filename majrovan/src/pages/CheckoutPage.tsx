// import { useState } from "react"
import { useState } from "react"
import { useCart } from "../hooks/useCart"
import styles from "./checkoutPage.module.css"
import { NavLink } from "react-router-dom"




const CheckoutPage: React.FC = () => {


    const { cart, dispatch } = useCart()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [email, setEmail] = useState("")



    if (cart.length === 0) {
        return (
            <div className={styles.emptyCart}>
                <p>Din korg är tom. Välj minst en produkt.</p>
                <NavLink to="/gallery" className={styles.backButton}>
                    ← Tillbaka till galleri
                </NavLink>
            </div>
        )
    }

    // Bygg order-strängen som skickas i mailet
    const orderText = cart
        .map(c => `${c.title} — ${c.price} kr`)
        .join("\n")


    return (
        <>
            <div className={styles.container}>
                <NavLink to="/gallery">Tillbaka till galleri ({cart.length})</NavLink>
                <h3>Slutför din beställning</h3>


                <ul className={styles.cartList}>
                    <h4>Kundvagn</h4>
                    {cart.map(c => (
                        <li key={c._id} className={styles.cartItem}>
                            <div className={styles.itemInfo}>
                                {c.title} - {c.price} kr{""}
                            </div>
                            <div 
                            >
                                <button onClick={() => dispatch({ type: "REMOVE", id: c._id })}>
                                    Ta bort
                                </button>
                            </div>


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