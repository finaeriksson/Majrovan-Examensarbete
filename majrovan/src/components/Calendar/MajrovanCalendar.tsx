
import moment from 'moment';
import 'moment/locale/sv';
import { Calendar, DateCellWrapperProps, momentLocalizer, SlotInfo, Event } from 'react-big-calendar';
import style from './majrovanCalender.module.css'
import  useSanityEvents from '../../hooks/useSanityEvents'; // Importera din custom hook
import Modal from "././Modal";
// import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useEffect, useState } from 'react';

 
moment.locale('sv');

const localizer = momentLocalizer(moment);

interface MyEvent extends Event {
  _id?: string;        // Om du har ett ID i Sanity
  startDate: Date;         // Startdatum
  endDate: Date;           // Slutdatum
  title: string;       // Titel
  description?: string; // Beskrivning
}

const MajrovanCalendar = () => {

    
    const events = useSanityEvents() as unknown as MyEvent[];
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSelectSlot = (slotInfo: SlotInfo) => {
      setSelectedDate(slotInfo.start);
      setIsModalOpen(true);
    }

    const handleSelectEvent = (event: MyEvent) => {
      //För att visa allt på dagen
      setSelectedDate(event.startDate);
      setIsModalOpen(true);
    }
  
    // Wrapper‐komponent:
const DateCellWrapper: React.ComponentType<DateCellWrapperProps> = ({
    value,
    children,
    ...restProps
  }) => (
    <div
      // Gör den tabb‐fokusbar
      tabIndex={0}
      role="button"
      aria-label={`Öppna event för ${value
        .toISOString()
        .slice(0, 10)}`}
      onClick={() =>
        handleSelectSlot({ start: value, end: value, slots: [], action: "click" })
      }
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleSelectSlot({ start: value, end: value, slots: [], action: "click" });
        }
      }}
      // Här sprider vi ut allt annat — framför allt className
      {...restProps}
    >
      {children}
    </div>
  );


    // Hantera klick på både datum och eventrubrik
  useEffect(() => {
    const handleDateOrEventClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      // Kolla om vi klickar på datum-cellen
      if (target.closest(".rbc-date-cell")) {
        const dateAttr = target.closest(".rbc-date-cell")?.getAttribute("data-date");
        if (dateAttr) {
          setSelectedDate(new Date(parseInt(dateAttr)));
          setIsModalOpen(true);
        }
      }
            // Kolla om vi klickar på en eventrubrik (title)
            if (target.closest(".rbc-event")) {
              const eventId = target.closest(".rbc-event")?.getAttribute("data-id");
              if (eventId) {
                const selectedEvent = events.find((event) => event._id === eventId);
                if (selectedEvent) {
                  setSelectedDate(selectedEvent.startDate);
                  setIsModalOpen(true);
                }
              }
            }
          };
      
          document.addEventListener("click", handleDateOrEventClick);
          return () => {
            document.removeEventListener("click", handleDateOrEventClick);
          };
        }, [events]);
  
    return (

      <div className={style.calendar} >
        <Calendar 
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        views={{ month: true }}
        onSelectSlot={handleSelectSlot} // gör tom yta klickbar
        onSelectEvent={handleSelectEvent} //går att klicka på eventrubriken
        longPressThreshold={10} // Förbättrar responsivitet
        components={{
    dateCellWrapper: DateCellWrapper
  }}
        // views={{ month: true, week: false, day: false, agenda: false }} //Blockerar dag, vecka, agenda-vy
      />

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <h2>Event för {moment(selectedDate).format("YYYY-MM-DD")}</h2>
          {events.some((event) => moment(event.start).isSame(selectedDate, "day")) ? (
            events
            .filter((event) => moment(event.start).isSame(selectedDate, "day"))
            .map((event) => (
              <div key={event._id} className={style.calendarModal}>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            ))
          ) : (
            <p>Inga event denna dag.</p>
          )}
        </Modal>
      )}
        </div>
      
      
    )
  }

  export default MajrovanCalendar