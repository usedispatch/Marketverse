import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement actual API call to save email
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: "Success!",
        description: "You've been added to the waitlist. We'll notify you when we launch!",
      });
      
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="calculator-display p-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="calculator-display font-mono"
        />
      </div>
      <Button 
        type="submit" 
        className="calculator-button w-full py-6" 
        disabled={isSubmitting}
      >
        {isSubmitting ? "Joining..." : "Join Waitlist [ENTER]"}
      </Button>
    </form>
  );
}
