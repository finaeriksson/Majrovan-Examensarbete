
import { useEffect, useState } from 'react'
import sanityClient from '../../Studio/studio-majrovan/lib/sanity';



interface SanityEvent {
    _id: string;
    title: string;
    startDate: string;
    endDate: string;
    description?: string;
  }

  
// Vår custom hook:
const  useSanityEvents = () => {
    const [events, setEvents] = useState<SanityEvent[]>([]);
      
    useEffect(() => {
      const query = `*[_type == "event"]{
        _id,
        title,
        startDate,
        endDate,
        description,
        }`;

      sanityClient.fetch<SanityEvent[]>(query).then((data) => {
        // Om dina datum i Sanity är datetime-strängar, konvertera dem till Date-objekt
      const convertedData = data.map((item) => ({
        ...item,
        start: new Date(item.startDate),
        end: new Date(item.endDate),
      }));
      setEvents(convertedData);
    });
  }, []);
  
    return events;
  }
  export default useSanityEvents