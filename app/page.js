import Todo from "@components/Todo";
import { server } from "@config";

export default async function Home() {
  const res = await fetch(server+"/api/todo", {cache: 'no-store'})
  const data = await res.json()

  return (
    <div>
      <Todo />
    {
      data.map(todo=>{
        return(
          <div key={todo._id}>{todo.text}</div>
        )
      })
    }
    </div>
  )
}

