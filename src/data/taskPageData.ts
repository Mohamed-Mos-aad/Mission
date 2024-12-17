export const tasksPageData = {
    user: {
        name: "John Doe",
    },
    lists: [
        { id: 0, title: "Work" },
        { id: 1, title: "Personal" },
        { id: 2, title: "Shopping" },
        { id: 3, title: "Travel" },
        { id: 4, title: "Fitness" },
    ],
    tasks: [
        {
            id: 1,
            listId: 1,
            title: "Finish the project report",
            description: "Complete the financial section and proofread the report before submission.",
            done: true,
        },
        {
            id: 2,
            listId: 2,
            title: "Call the plumber",
            description: "Fix the leaking sink in the kitchen.",
            done: false,
        },
        {
            id: 3,
            listId: 3,
            title: "Buy groceries",
            description: "Get milk, eggs, bread, and fresh vegetables for the week.",
            done: false,
        },
        {
            id: 4,
            listId: 4,
            title: "Book flight tickets",
            description: "Check available flights for the business trip next month.",
            done: true,
        },
        {
            id: 5,
            listId: 5,
            title: "Morning run",
            description: "Run 5 kilometers in the park to maintain fitness.",
            done: false,
        },
        {
            id: 6,
            listId: 1,
            title: "Team meeting",
            description: "Prepare slides and discuss project updates with the team.",
            done: false,
        },
        {
            id: 7,
            listId: 5,
            title: "Evening yoga session",
            description: "Attend a 30-minute online yoga session.",
            done: true,
        },
    ],
};
