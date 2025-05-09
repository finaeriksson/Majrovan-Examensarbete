// import { useState } from "react"
import { useCart } from "../contexts/CartContext"
import styles from "./checkoutPage.module.css"




const CheckoutPage: React.FC = () => {


    const { cart, dispatch } = useCart()
    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")
    // const [address, setAddress] = useState("")

    // const handleSubmit = (e: React.FormEvent) => {

    // }

    if (cart.length === 0) {
        return <p>Din korg är tom. Välj minst en produkt</p>
    }

    // Bygg order-strängen som skickas i mailet
    const orderText = cart
        .map(c => `${c.title} — ${c.price} kr`)
        .join("\n")


    return (
        <>
            <div className={styles.container}>
                <h1>Slutför din beställning</h1>
                <ul>
                    {cart.map(c => (
                        <li key={c._id}>
                            {c.title} - {c.price} kr{""}
                            <button onClick={() => dispatch({ type: "REMOVE", id: c._id })}>
                                Ta bort
                            </button>
                        </li>
                    ))}
                </ul>

                <form
                    className={styles.form}
                    action="https://formsubmit.co/fina.eriksson@gmail.com"
                    method="POST">

                    {/* Inaktivera Formsubmit’s captcha-text */}
                    <input type="hidden" name="_captcha" value="false" />

                    {/* (Valfritt) Efter inskick: skicka till tack-sida */}
                    {/* <input type="hidden" name="_next" value="https://dinsajt.se/tack" /> */}

                    <label >
                        Namn
                        <input
                            name="name"
                            type="text"
                            placeholder="Ditt namn"
                            required
                        />
                    </label>
                    <label >
                        E-post
                        <input
                            name="email"
                            type="email"
                            placeholder="din@epost.se"
                            required
                        />
                    </label>
                    <label >
                        Adress
                        <textarea
                            name="address"
                            placeholder="Din leveransadress"
                            required
                        />
                    </label>

                    {/* För att Formsubmit ska sätta reply-to i mailet */}
                    {/* <input type="hidden" name="_replyto" value={email} /> */}

                    {/* Visa fälten i tabell (valfritt) */}
                    <input type="hidden" name="_template" value="table" />

                    {/* Skicka med hela kundkorgen som en dold fält */}
                    <input name="order" type="hidden" value={orderText} />

                    <input type="hidden" name="_next" value={`${window.location.origin}/thankYou`} />

                    <button type="submit">Skicka beställning</button>
                </form>
            </div>
        </>

    )
}

export default CheckoutPage