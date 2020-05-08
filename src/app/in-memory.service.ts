import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryService implements InMemoryDbService {
  createDb() {
    const todoData = [
      {id: 1, todo: 'Clean Dishes in memoery', level: 2, date: new Date()},
      {id: 2, todo: 'Clean Again in memoery', level: 3, date: new Date()},
      {id: 3, todo: 'Wash Dishes in memoery', level: 1, date: new Date()},
    ];
    return { todoData };
  }
}