"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Copy } from "lucide-react";

interface SecretCodesProps {
  codes: { id: string; code: string }[];
}

export function SecretCodes({ codes }: SecretCodesProps) {
    const { toast } = useToast();

    const handleCopy = (code: string) => {
        navigator.clipboard.writeText(code);
        toast({
            title: "Copied to clipboard!",
            description: `Secret code ${code} is ready to be shared.`,
        });
    };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Secret Codes</CardTitle>
        <CardDescription>
          Share these codes with friends so they can join. Each code can only be used once.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {codes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {codes.map(({ id, code }) => (
              <div key={id} className="flex items-center justify-between rounded-lg border p-3 font-mono text-sm">
                <span>{code}</span>
                <Button variant="ghost" size="icon" onClick={() => handleCopy(code)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-muted-foreground">
            <p>No codes available.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
