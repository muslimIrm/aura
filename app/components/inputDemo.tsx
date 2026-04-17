"use client";

import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

export function PlaceholdersAndVanishInputDemo({ path }: { path: string }) {
  const placeholders = [
    "OpenAI",
    "Google",
    "Anthropic",
    "Meta",
    "Microsoft",
    "GPT",
    "Gemini",
    "Claude"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div className="flex flex-col justify-center  items-center px-4">

      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        path={path}
      />
    </div>
  );
}
