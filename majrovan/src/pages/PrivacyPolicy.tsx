
import styles from './privacyPolicy.module.css'

const IntegrityPolicy: React.FC = () => {


    return (
        <div className={styles.privacy}>
            <h2>Integritetspolicy - Hantering av personuppgifter</h2>
            <p>På vår webbplats samlar vi in namn, e-post och leveransadress när du gör en beställning via vårt formulär 
               (som drivs av FormSubmit). Uppgifterna skickas krypterat till vår e-post och vi behöver dem för att kunna 
               skicka dina varor och skapa ett kvitto. 
                <br /><br />
               Så fort vi har lämnat över dina varor och upprättat kvittot raderar vi din adress, men vi sparar ditt namn i 
               våra bokföringshandlingar i minst sju år enligt bokföringslagen. Vi använder inga egna cookies för marknadsföring 
               eller analys - bara de tekniska cookies som krävs för att sidan ska fungera. Dina uppgifter lämnas aldrig 
               vidare till någon annan extern part, förutom till FormSubmit (som enbart vidarebefordrar formulärdata till oss). 
                <br /><br />
               Vi vidtar enkla säkerhetsåtgärder för att skydda dina uppgifter, och du som kund har rätt att när som helst 
               begära att få veta vilka uppgifter vi har om dig, få dem rättade om de är felaktiga eller begära att vi 
               raderar dem (förutsatt att det inte strider mot våra lagliga skyldigheter att behålla namn i bokföringen). 
               Om du vill utöva någon av dessa rättigheter eller har frågor om hur vi hanterar personuppgifter kan du 
               kontakta oss på info@hobbyforetaget.se. 
               <br /><br />
               Denna policy gäller från och med 3 juni 2025.
</p>
        </div>
    )
}

export default IntegrityPolicy