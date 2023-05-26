import { TodoModel } from "@models/TodoModel";
import { connectDB } from "@utils";
import { NextResponse } from "next/server";

export async function GET(){
    await connectDB()
    const todos = await TodoModel.find()
    return NextResponse.json(todos)
}

export async function POST(req){
    await connectDB()
    const {text} = await req.json()
    console.log(text, 'text');
    const Todo = new TodoModel({text:text})
    Todo.save()
    return NextResponse.json({result:'ok'})
}

