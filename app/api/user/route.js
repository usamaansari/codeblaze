
import { NextResponse } from "next/server";
import { connectToDB } from "@/data/utils";
import { User } from "@/data/models";

const LoadDB = async () => {
  await connectToDB();
};

LoadDB();

export async function GET(request, response) {
  //ConnectDB();
  const email = request.nextUrl.searchParams.get("email");
  const users = await User.find({email});
  return NextResponse.json({ users });
}

export async function POST(request) {
  const { name, email, picture, token } =
    await request.json();

  const newUser = new User({
    name,
    email,
    picture, 
    token
  });

  await newUser.save();
  return NextResponse.json({ msg: "User Created" });
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
      const { userId, token } = body;
  
      if (!userId) {
        return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
      }
  
      const updateUser = await User.findByIdAndUpdate(
        userId,
        { token },
        { new: true, runValidators: true }
      );
  
      if (!updateUser) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }
  
      return NextResponse.json({ updateUser });
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }