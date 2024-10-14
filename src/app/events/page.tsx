
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

    const res = await fetch('https://www.nyu.edu/feeds/events/json/group/NYU-Libraries/start_date/10132024/end_date/02132025');
    const eventData = await res.json();

    return (
        <Events events={eventData}/>
    );
};

export default EventsPage;
