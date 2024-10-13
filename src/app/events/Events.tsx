"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { EventsPageProps } from "./page";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const Events: React.FC<EventsPageProps> = ({events}) => {
    const [showTodaysEvents, setShowTodaysEvents] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    const todayEvents = events.filter((event:any) => event.date === today);
    const currentEvents = showTodaysEvents ? todayEvents : events;

    const totalPages = Math.ceil(currentEvents.length / itemsPerPage); 
    const paginatedEvents = currentEvents.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage); // clice the events as start from 0 to 10 
    console.log(paginatedEvents);

    const handleSelectChange = (value:string) => {
        setShowTodaysEvents(value === "Today's events");
        setCurrentPage(1); 
    };

    const handleNextPage = () => {
        if (currentPage < totalPages)
            setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) 
            setCurrentPage(currentPage - 1);
    };

    return (
<div className="p-8">
    <div className="flex flex-col items-center mt-16">
        <h1 className="text-white text-3xl font-bold">Upcoming Library Events</h1>
        <div className="mt-2">
            <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[200px] bg-gray-50 text-lg">
                    <SelectValue placeholder={showTodaysEvents ? "Today's Events" : "Show All Events"} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>{showTodaysEvents ? "Today's Events" : "Show All Events"}</SelectLabel>
                        <SelectItem value="All events">All events</SelectItem>
                        <SelectItem value="Today's events">Today's events</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    </div>

    <div className="text-center mt-4">
        {paginatedEvents.length > 0 ? (
            paginatedEvents.map((item) => (
                <div
                    key={item.id}
                    className="bg-gray-50 mt-8 p-6 mx-auto rounded-lg"
                    style={{ maxWidth: '700px' }}
                >
                    <h2 className="text-2xl text-indigo-900 font-bold">{item.title}</h2>
                    <p>{item.date}</p>
                    <p>{item.date_time}</p>
                    <p>{item.location}</p>
                    <div className="pt-2">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" className="bg-gray-800 text-gray-50 p-2 transition-colors duration-500 rounded-sm text-lg font-bold hover:text-yellow-300">Join Event</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Join Event</DialogTitle>
                                    <DialogDescription>
                                        {item.title}, {item.date}, {item.date_time}
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="name" className="text-right">Full Name</Label>
                                        <Input id="name" className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                        <Label htmlFor="nid" className="text-right">National ID</Label>
                                        <Input id="nid" className="col-span-3" />
                                    </div>
                                </div>
                                <DialogFooter>
                                    <Button type="submit">Submit</Button>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            ))
        ) : (
            <p className="text-2xl">No events available today.</p>
        )}
    </div>

    <div className="mt-8">
        <Pagination className="text-lg">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={handlePreviousPage} />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink
                            onClick={() => setCurrentPage(index + 1)}
                            className={currentPage === index + 1 ? 'bg-gray-50' : ''}
                        >
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext onClick={handleNextPage} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    </div>
</div>

    );

};

export default Events;


