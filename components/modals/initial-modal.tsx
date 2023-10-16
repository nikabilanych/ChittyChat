"use client"

import { useForm } from "react-hook-form"
//han
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle}  
    from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"




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
    const onSubmit = async (values:z.infer<typeof formSchema>) 
    }


    
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
                
                <Form {...form} className=">
                    <Input placeholder="Server name" />
                </Form>
            </DialogContent>
        </Dialog>
    );
};

