"use client";

import { useProModal } from "@/hooks/useProModal";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Check, Code, ImageIcon, MessageSquare, Music, VideoIcon, Zap } from "lucide-react";
import { FC, useState } from "react";
import { Badge } from "./ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader } from "./ui/dialog";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";

const tools = [
  { label: "Conversation", icon: MessageSquare, color: "text-violet-500", bgColor: "bg-violet-500/10" },
  { label: "Music Generation", icon: Music, color: "text-emerald-500", bgColor: "bg-emerald-500/10" },
  { label: "Image Generation", icon: ImageIcon, color: "text-pink-700", bgColor: "bg-pink-700/10" },
  { label: "Video Generation", icon: VideoIcon, color: "text-orange-700", bgColor: "bg-orange-700/10" },
  { label: "Code Generation", icon: Code, color: "text-green-700", bgColor: "bg-green-700/10" },
];

const ProModal: FC = () => {
  const { isOpen, onClose, onOpen } = useProModal();
  const [isLoading, setIsLoading] = useState(false);

  const onSubscribe = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("/api/stripe");
      window.location.href = response.data.url;
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
            <div className='flex items-center gap-x-2 font-bold py-1'>
              Upgrade to RD AI
              <Badge variant='premium' className='uppercase text-sm py-1'>
                pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className='text-center pt-2 space-y-2 text-zinc-900 font-medium'>
            {tools.map((tool) => (
              <Card key={tool.label} className='p-3 border-black-5 flex items-center justify-between'>
                <div className='flex items-center gap-x-4'>
                  <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                    <tool.icon className={cn("w-6 h-6", tool.color)} />
                  </div>
                  <div className='font-semibold text-sm'>{tool.label}</div>
                </div>
                <Check className='text-primary w-5 h-5' />
              </Card>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button size='lg' variant='premium' className='w-full' onClick={onSubscribe} disabled={isLoading}>
            Upgrade <Zap className='w-4 g-4 ml-2 fill-white' />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ProModal;
