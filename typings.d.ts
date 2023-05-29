interface Board {
  columns: Map<TypedColumn, Column>;
}

type TypedColum = "todo" | "inprogress" | "done";

interface Column {
  id: TypedColum;
  todos: Todo[];
}

interface Todo {
  $id: string;
  $createdAt: string;
  title: string;
  status: string;
  image?: string;
}
