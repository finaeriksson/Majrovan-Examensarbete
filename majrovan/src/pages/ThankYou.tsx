import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../hooks/useCart';



const ThankYou: React.FC = () => {

    const { dispatch } = useCart();
    const {search} = useLocation();
    const params = new URLSearchParams(search);
    const total = params.get("total")

      // ----- Töm vagnen på mount -----
  useEffect(() => {
    dispatch({ type: "CLEAR" });
  }, [dispatch]);

    return (
        <div>
            
            <h3>Tack för din beställning</h3>

            {total && (
                <p>
                    Totalt att betala: <strong>{total} kr + porto</strong>
                </p>
            )}
            <p>Betala till Majrovans Swish-nummer: {" "}
                <strong>123-2848091</strong>
            </p>
            <p>Märk din betalning med ditt namn. Så fort vi har mottagit din betalning skickar vi din order.</p>

            <NavLink to={"/"} className="btn light-focus">Tillbaka till startsidan</NavLink>
        
        </div>
        
    )
};

export default ThankYou;