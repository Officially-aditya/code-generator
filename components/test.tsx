import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";


const Page = () => {
    const trpc = useTRPC();
    const { data: messages } = useQuery(trpc.messages.getMany.queryOptions())
    const createMessage = useMutation(trpc.messages.create.mutationOptions({
        onSuccess: () => {
            toast.success("Message created")
        }
    }))

    return (
        <div className="p-4 max-w-7xl mx-auto">
            <Input value={value} onChange={(e) => setValue(e.target.value)} />
            <Button
            disabled = {createMessage.isPending}
            onClick={() => createMessage.mutate({value: value })}
            >
                Invoke Background Job
            </Button>
        </div>
    )
}

export default Page;