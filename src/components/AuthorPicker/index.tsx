import { FC, useEffect, useState } from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import {
  addEntry as addAuthor,
  getAllEntries as getAllAuthors,
} from "@/store/slices/authorSlice";
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
  const [input, setInput] = useState("");
  const asyncDispatch = useTypedDispatch();
  const authors = useTypedSelector((data) => data.authors.authors);

  useEffect(() => {
    asyncDispatch(getAllAuthors());
  }, [asyncDispatch]);

  const onFormChange = (value: string) => {
    form.setValue("author", value ? `/authors/${value}` : "");
  };

  const onInputChange = (value: string) => {
    setInput(value);
  };

  const onCreate = () => {
    asyncDispatch(addAuthor({ name: input })).then(() => {
      setValue("");
      setInput("");
      onFormChange("");
      setOpen(false);
      asyncDispatch(getAllAuthors());
    });
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
            <CommandInput
              placeholder="Выберите автора..."
              onValueChange={onInputChange}
            />
            <CommandEmpty className="p-0">
              <div
                className="cursor-pointer text-center hover:bg-slate-900 p-3 select-none text-sm"
                onClick={() => onCreate()}
              >
                Добавить <strong>{input}</strong>
              </div>
            </CommandEmpty>
            <CommandGroup>
              {authors.map((author) => (
                <CommandItem
                  key={author.name.toLocaleLowerCase()}
                  onSelect={() => {
                    setValue(value === author.id ? "" : author.id);
                    onFormChange(value === author.id ? "" : author.id);
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
