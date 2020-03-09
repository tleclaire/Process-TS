import { Guid } from 'guid-typescript';
import { Person } from './Person';
export declare class CompletedTask {
    id: Guid;
    name: string;
    role: string;
    result: number;
    formattedResult: string;
    taskFileId: number;
    taskFileName: string;
    comment: string;
    completedBy: Person | undefined;
    bewertungsColor: string;
    get foreColor(): string;
    completedDate: Date | undefined;
    deleteUrl: string;
    viewUrl: string;
    userHtml: string;
    constructor();
}
