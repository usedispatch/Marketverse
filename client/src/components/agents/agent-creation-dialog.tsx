import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AgentCreation } from "./agent-creation";
import { useState } from "react";

interface AgentCreationDialogProps {
  onAgentCreated?: () => void;
}

export function AgentCreationDialog({ onAgentCreated }: AgentCreationDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="calculator-button" variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          New Agent
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-3xl p-0 sm:p-6">
        <AgentCreation 
          onClose={() => {
            setOpen(false);
            onAgentCreated?.();
          }} 
        />
      </DialogContent>
    </Dialog>
  );
}