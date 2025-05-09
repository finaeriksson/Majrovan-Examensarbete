import { NavLink } from 'react-router-dom';



const ThankYou: React.FC = () => {


    return (
        <div>
            
            <h3>Tack för din beställning</h3>
            <p>Vi återkommer snart med instruktioner för betalning med swish så att vi kan skicka din beställning.</p>

            <NavLink to={"/"}>Tillbaka till startsidan</NavLink>
        
        </div>
        
    )
};

export default ThankYou;