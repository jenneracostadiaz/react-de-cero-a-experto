import { parseISO } from "date-fns"

export const convertEventsToDataEvents = (events = []) => {
    return events.map((event) => {
        event.start = parseISO(event.start);
        event.end = parseISO(event.end);
        return event;
    });
}
