
import { NextResponse } from "next/server";
import { connectToDB } from "@/data/utils";
import { User, Workspace } from "@/data/models";

const LoadDB = async () => {
  await connectToDB();
};

LoadDB();

export async function PATCH(request) {
  
    try {
      const body = await request.json();
      const { id, fileData } = body;
  
      if (!id) {
        return NextResponse.json({ error: 'Workspace ID is required' }, { status: 400 });
      }
  
      const updatedWorkspace = await Workspace.findByIdAndUpdate(
        id,
        { fileData },
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

  export async function GET(request, response) {
    //ConnectDB();
    const id = request.nextUrl.searchParams.get("user");
    const workspaces = await Workspace.find({user:id});
    return NextResponse.json({ workspaces });
  }