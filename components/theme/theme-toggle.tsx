"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const className = "";

  return (
    <div className="flex gap-2">
      <Button
        variant="secondary"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? (
          <Sun className={className} />
        ) : (
          <Moon className={className} />
        )}
      </Button>
    </div>
  );
}
