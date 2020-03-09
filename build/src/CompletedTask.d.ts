import { Person } from './Person';
export declare class CompletedTask {
    id: string;
    name: string;
    role: string;
    result: number;
    formattedResult: string;
    taskFileId: number;
    taskFileName: string;
    comment: string;
    completedBy: Person;
    bewertungsColor: string;
    get foreColor(): string;
    completedDate: Date;
    deleteUrl: string;
    viewUrl: string;
    userHtml: string;
    constructor();
}
