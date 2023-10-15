"use client"

import { Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle}  
    from "@/components/ui/dialog"
    
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    name: z.string().min(1, {
        message: "Server name is required."
    }),
    imageUrl: z.string().min(1,{
        message: "Server image is required."
}),
})
export const InitialModal = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            imageUrl: ""
    }
});
    //disable input if already submiting a request
    const isLoading = form.formState.isSubmitting;
    const onSubmit
    const i
    
    return (
        <Dialog open>
            <DialogContent
            className="bg-white text-black p-1
            overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Customise your server
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                    Give your server a personality by giving it a name
                    </DialogDescription>
                </DialogHeader>
                <form></form>
            </DialogContent>
        </Dialog>
    );
};

