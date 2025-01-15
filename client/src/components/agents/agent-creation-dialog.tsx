import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AgentCreation } from "./agent-creation";

export function AgentCreationDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="calculator-button" variant="outline">
          <Plus className="w-4 h-4 mr-2" />
          New Agent
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <AgentCreation />
      </DialogContent>
    </Dialog>
  );
}
