export enum FilterType {
  all,
  pending,
  complete,
}

export type TodoItem = {
  id: number;
  text: string;
  isDone: boolean;
};
