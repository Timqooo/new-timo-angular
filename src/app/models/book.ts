export interface Book {
    id?: string; // Firestore IDs are strings, and this field is optional for new books
    title: string;
    author: string;
    genre: string;
    amount: number;
    available: boolean;
    pages: number; // Ensure this is a number
}