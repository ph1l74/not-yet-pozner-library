import { FC, useEffect, useState } from "react";
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
import { FormItem } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";

type AuthorPickerType = {
  form: UseFormReturn<{ author: string; name: string; year: number }>;
};

export const AuthorPicker: FC<AuthorPickerType> = ({ form }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const asyncDispatch = useTypedDispatch();
  const authors = useTypedSelector((data) => data.authors.authors);

  useEffect(() => {
    asyncDispatch(getAllAuthors());
  }, [asyncDispatch]);

  const onChange = (value: string) => {
    form.setValue("author", value ? `/authors/${value}` : "");
  };

  return (
    <FormItem className="flex flex-col">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[300px] justify-between"
          >
            {value
              ? authors.find((author) => author.id === value)?.name
              : "Выберите автора..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[300px] p-0">
          <Command>
            <CommandInput placeholder="Выберите автора..." />
            <CommandEmpty>
              <CommandGroup>
                {value}
                <CommandItem
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                  }}
                >
                  <Check className="mr-2 h-4 w-4" />
                </CommandItem>
              </CommandGroup>
            </CommandEmpty>
            <CommandGroup>
              {authors.map((author) => (
                <CommandItem
                  key={author.name.toLocaleLowerCase()}
                  onSelect={() => {
                    setValue(value === author.id ? "" : author.id);
                    onChange(value === author.id ? "" : author.id);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === author.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {author.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </FormItem>
  );
};
