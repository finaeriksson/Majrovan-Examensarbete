
import styles from './privacyPolicy.module.css'

const IntegrityPolicy: React.FC = () => {


    return (
        <div className={styles.privacy}>
            <h2>Integritetspolicy - Hantering av personuppgifter</h2>
            <p>När du gör en beställning via vår hemsida samlar vi in uppgifter som namn, adress 
               och e-postadress. Dessa uppgifter används enbart för att hantera och leverera din 
               beställning. Vi sparar inga personuppgifter efter att beställningen är betald och 
               skickad. All kommunikation sker via e-post och raderas efter avslutad orderhantering. 
               Vi delar inte dina uppgifter med tredje part. 
               
               Om du har frågor kring hur vi hanterar personuppgifter, är du välkommen att kontakta oss.</p>
        </div>
    )
}

export default IntegrityPolicy