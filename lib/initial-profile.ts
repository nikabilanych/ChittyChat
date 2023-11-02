import { 
    currentUser,
    redirectToSignIn 
    } 
from "@clerk/nextjs";

import { db } from "@/lib/db";
export const initialProfile = async () => {

//Check if a user is authenticated 
const user = await currentUser();
//if not, redirect to sign in
    if(!user) {
        return redirectToSignIn();
    }
    
    const profile = await db.profile.findUnique({
        where: { userId: user.id },
    });
    if (profile){
        return profile;
    }
    const newProfile = await db.profile.create({
        data: {
            userId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            //clerk email addresses
            email: user.emailAddresses[0].emailAddress
        }
    });
    return newProfile;    
}