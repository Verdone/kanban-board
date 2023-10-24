export type Status = "todo" | "in-progress" | "done";
export type Priority = "low" | "medium" | "high";
export type Task = {
    title: string;
    id: string;
    status: Status;
    priority: Priority;
    points?: number;
};

export const statuses: Array<Status> = ["todo", "in-progress", "done"];
export const priorities: Array<Priority> = ["low", "medium", "high"];

export const tasks: Array<Task> = [
{
    title: "Do market research",
    id: "BUS-1",
    status: "todo",
    priority: "medium",
    points: 5,
},
{
    title: "implement plan",
    id: "BUS-2",
    status: "done",
    priority: "high",
    points: 0,
},
{
    title: "negociate partnerships",
    id: "BUS-3",
    status: "in-progress",
    priority: "low",
}
];
