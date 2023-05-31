interface Board {
  columns: Map<TypedColumn, Column>;
}

type TypedColumn = "todo" | "inprogress" | "done";

interface Column {
  id: TypedColum;
  todos: Todo[];
}

interface Image {
  bucketId: string;
  fileId: string;
}

interface Todo {
  $id: string;
  $createdAt: string;
  title: string;
  status: string;
  image?: Image;
}
