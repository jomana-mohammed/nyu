
import Events from "./Events";

export interface EventData {
    id: number;
    title: string;
    date: string;
    date_time: string;
    location: string;
}

export interface EventsPageProps {
    events: EventData[]; 
}


const EventsPage: React.FC<EventsPageProps> = async() => {

    const today = new Date();

    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = month+day+year ; 
    console.log(formattedDate);

    const res = await fetch(`https://www.nyu.edu/feeds/events/json/group/NYU-Libraries/start_date/${formattedDate}/end_date/02${day}${year+1}`);
    const eventData = await res.json();

    return (
        <Events events={eventData}/>
    );
};

export default EventsPage;
