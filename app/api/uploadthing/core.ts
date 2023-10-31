import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth } from "@clerk/nextjs";
const f = createUploadthing();
 
//const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function
const handleAuth = () => {
    const {userId}  = auth();
    if (!userId) throw new Error("Unauthorized");
    return {userId: userId};
};

export const ourFileRouter = {
    //confic
    serverImage: f({image:{maxFileSize: "8MB", maxFileCount: 1}}) 
    .middleware(() => handleAuth())
    .onUploadComplete(()=>{ }),// 5mb
    messageFile: f(["image","pdf"])
    .middleware(() => handleAuth())
    .onUploadComplete(() => { })
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;
 