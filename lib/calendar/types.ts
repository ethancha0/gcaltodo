export interface CalendarEvent{
    id: string; 
    summary: string;
    description?: string;
    start:{
        dateTime?: string; // for timed events 
        date?: string; // for all day events 
        timeZone?: string;
    };
    end: {
        datetime?: string;
        date?: string;
        timeZone?: string; 
    };
}