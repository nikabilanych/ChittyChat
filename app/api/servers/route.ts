//server creation API
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";   

import { MemberRole } from "@prisma/client";


// web socket instead of async functs
// new request - > new connections
// 1 websocket ? ? ? 
// testtting
export async function POST(request:Request) {
    try {
        const {name,imageUrl} = await request.json();

        const profile = await currentProfile();
        if  (!profile) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        const server = await db.server.create({
            data:{
                profileId:profile.id,
                name:name,
                imageUrl:imageUrl,
                inviteCode:uuidv4(),
                channels:{
                    create:[
                        { name: "general", profileId: profile.id }
                    ]
                },
                members: {
                    create: [
                          {profileId: profile.id,
                            role: MemberRole.ADMIN}
                        ]
                    }
                }
            })
    }
        catch (error) {
        console.log("[SERVERS_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
