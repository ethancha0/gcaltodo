import type { CalendarEvent } from "./types";

export const mockEvents: CalendarEvent[] = [
  {
    id: "1",
    summary: "CS 122A Lecture",
    description: "Indexes & query optimization",
    start: { dateTime: "2025-11-23T10:00:00-08:00" },
    end: { dateTime: "2025-11-23T11:20:00-08:00" },
  },
  {
    id: "2",
    summary: "ZotMeet standup",
    description: "Daily sync with dev team",
    start: { dateTime: "2025-11-23T13:00:00-08:00" },
    end: { dateTime: "2025-11-23T13:15:00-08:00" },
  },
];