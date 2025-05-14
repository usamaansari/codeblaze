
import { NextResponse } from "next/server";
import { connectToDB } from "@/data/utils";
import { User, Workspace } from "@/data/models";

const LoadDB = async () => {
  await connectToDB();
};

LoadDB();

export async function GET(request, response) {
  //ConnectDB();
  const id = request.nextUrl.searchParams.get("id");
  const workspaces = await Workspace.find({_id:id});
  return NextResponse.json({ workspaces });
}

export async function POST(request) {
  const { messages, user } =
    await request.json();

  const newWorkspace = new Workspace({
    messages,
    user,
    
  });

  await newWorkspace.save();
  return NextResponse.json({newWorkspace });
}

export async function DELETE(request, response) {
  //ConnectDB();
  const id = request.nextUrl.searchParams.get("id");

  await User.findByIdAndDelete(id);
  return NextResponse.json({ msg: "Deleted successfully" });
}


export async function PATCH(request) {
  
    try {
      const body = await request.json();
      const { id, messages } = body;
  
      if (!id) {
        return NextResponse.json({ error: 'Workspace ID is required' }, { status: 400 });
      }
  
      const updatedWorkspace = await Workspace.findByIdAndUpdate(
        id,
        { messages },
        { new: true, runValidators: true }
      );
  
      if (!updatedWorkspace) {
        return NextResponse.json({ error: 'Workspace not found' }, { status: 404 });
      }
  
      return NextResponse.json({ updatedWorkspace });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }