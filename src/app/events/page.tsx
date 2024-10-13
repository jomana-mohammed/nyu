
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

    const res = await fetch('https://www.nyu.edu/feeds/events/json/group/NYU-Libraries/start_date/10062024/end_date/02062025');
    const eventData = await res.json();

    return (
        <Events events={eventData}/>
    );
};

export default EventsPage;






// "use client";

// import { Button } from "@/components/ui/button";
// import { GetStaticProps } from 'next'
// import { useState } from "react";

// interface EventData {
//     id: number;
//     title: string;
//     date: string;
//     date_time: string;
//     location: string;
// }

// interface EventsProps {
//     data : EventData[];
// }

// const EventsPage: React.FC<EventsProps> = ({data}) => {

//     const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
//     const todayEvents = data ? data.filter(event => event.date === today) : [];
//     const [todaysEvents, setTodaysEvents] = useState(false);

//     return (
//         <div>
//             <div className="p-6">
//                 <h1 className="text-white text-3xl font-bold">Upcoming Library Events (till 2025)</h1>
//                 <Button onClick={() => setTodaysEvents(true)}>Today's Events</Button>

//                 {todaysEvents ? (
//                     todayEvents.length > 0 ? (
//                         todayEvents.map((item) => (
//                             <div key={item.id} className="bg-gray-50 mt-8">
//                                 <h2>{item.title}</h2>
//                                 <p>{item.date}</p>
//                                 <p>{item.date_time}</p>
//                                 <p>{item.location}</p>
//                             </div>
//                         ))
//                     ) : (
//                         <p>No events today.</p>
//                     )
//                 ) : (
//                     data?.map((item) => (
//                         <div key={item.id} className="bg-gray-50 mt-8">
//                             <h2>{item.title}</h2>
//                             <p>{item.date}</p>
//                             <p>{item.date_time}</p>
//                             <p>{item.location}</p>
//                         </div>
//                     ))
//                 )}
//             </div>
//         </div>
//     );
// }

// export default EventsPage;


// export const getStaticProps: GetStaticProps<EventsProps> = async () => {
//     let post = await fetch(`https://www.nyu.edu/feeds/events/json/group/NYU-Libraries/start_date/10022024/end_date/02022025`).then(
//         (res) => res.json()
//     );

//     return {
//         props: { data: post }, // Change 'post' to 'data'
//         revalidate: 60,
//     };
// };




// "use client";

// import { Button } from "@/components/ui/button";
// import { useState, useEffect } from "react";

// interface EventData {
//     id: number;
//     title: string;
//     date: string;
//     date_time: string;
//     location: string;
// }

// const EventsPage: React.FC = () => {
//     const [data, setData] = useState<EventData[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//     const [todaysEvents, setTodaysEvents] = useState(false);

//     // Fetch data on client side
//     useEffect(() => {
//         const fetchEvents = async () => {
//             try {
//                 const res = await fetch('/api/events');
//                 const eventData = await res.json();
//                 setData(eventData);
//             } catch (err) {
//                 setError('Failed to fetch events');
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchEvents();
//     }, []);

//     const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
//     const todayEvents = data ? data.filter(event => event.date === today) : [];

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <div className="p-6">
//             <h1 className="text-white text-3xl font-bold">Upcoming Library Events (till 2025)</h1>
//             <Button onClick={() => setTodaysEvents(true)}>Today's Events</Button>

//             {todaysEvents ? (
//                 todayEvents.length > 0 ? (
//                     todayEvents.map((item) => (
//                         <div key={item.id} className="bg-gray-50 mt-8">
//                             <h2>{item.title}</h2>
//                             <p>{item.date}</p>
//                             <p>{item.date_time}</p>
//                             <p>{item.location}</p>
//                         </div>
//                     ))
//                 ) : (
//                     <p>No events today.</p>
//                 )
//             ) : (
//                 data.map((item) => (
//                     <div key={item.id} className="bg-gray-50 mt-8">
//                         <h2>{item.title}</h2>
//                         <p>{item.date}</p>
//                         <p>{item.date_time}</p>
//                         <p>{item.location}</p>
//                     </div>
//                 ))
//             )}
//         </div>
//     );
// }

// export default EventsPage;





