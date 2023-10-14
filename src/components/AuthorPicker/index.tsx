import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { getAllEntries as getAllAuthors } from "@/store/slices/authorSlice";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useTypedDispatch, useTypedSelector } from "@/store";

export const AuthorPicker = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const authors = useTypedSelector((data) => data.authors.authors);
  const asyncDispatch = useTypedDispatch();

  React.useEffect(() => {
    asyncDispatch(getAllAuthors());
  }, [asyncDispatch]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {value
            ? authors.find((author) => author.name === value)?.name
            : "Выберите автора..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Выберите автора..." />
          <CommandEmpty>
            <CommandItem
              onSelect={(currentValue) => {
                setValue(currentValue === value ? "" : currentValue);
              }}
            >
              Создать {value}
            </CommandItem>
          </CommandEmpty>
          <CommandGroup>
            {authors.map((author) => (
              <CommandItem
                key={author.id}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === author.name ? "opacity-100" : "opacity-0"
                  )}
                />
                {author.name}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
