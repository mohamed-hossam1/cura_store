"use client";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

type Lang = "EN" | "AR";


export default function LangToggle() {
  const [open, setOpen] = useState<boolean>(false);
  const [lang, setLang] = useState<Lang>("EN");

  const handleSelect = (value: Lang) => {
    setLang(value);
    setOpen(false);
  };

  return (
    <div className="border-2 flex  items-center p-2 rounded-xl text-primary hover:text-primary-hover cursor-pointer hover:border-primary transition-all duration-300">
      <DropdownMenu open={open} onOpenChange={(v: boolean) => setOpen(v)}>
        <DropdownMenuTrigger className="border-0">
          {lang === "AR" ? "عربي" : "EN"}
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuItem
            onSelect={() => handleSelect("EN")}
            onClick={() => handleSelect("EN")}
          >
            English
          </DropdownMenuItem>

          <DropdownMenuItem
            onSelect={() => handleSelect("AR")}
            onClick={() => handleSelect("AR")}
          >
            عربي
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ChevronDown
        className={`${open ? "rotate-180" : ""} transition-all duration-300 ml-2`}
        onClick={() => setOpen(!open)}
      />
    </div>
  );
}
