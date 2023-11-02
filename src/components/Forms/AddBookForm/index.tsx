import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { AuthorPicker } from "@/components/AuthorPicker";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { useTypedDispatch } from "@/store";
import { addEntry as addBook } from "@/store/slices/bookSlice";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
export const AddBookForm = () => {
  const dispatch = useTypedDispatch();

  const { toast } = useToast();

  const formSchema = zod.object({
    name: zod
      .string()
      .min(1, { message: "Слишком короткое название" })
      .max(250, { message: "Слишком длинное название" }),
    author: zod.string().min(1),
    year: zod
      .number()
      .gte(-3000, { message: "too small" })
      .lte(new Date().getFullYear(), { message: "too big" }),
  });

  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      author: "",
      name: "",
      year: new Date().getFullYear(),
    },
  });

  const onSubmit = (values: zod.infer<typeof formSchema>) => {
    dispatch(addBook(values)).then(() => {
      toast({
        title: "Готово!",
        description: "Книга успешно добавлена",
      });

      form.reset();
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Добавить книгу</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col space-y-1.5">
                      <FormLabel>Название</FormLabel>
                      <FormControl>
                        <Input placeholder="Введите название" {...field} />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex flex-col space-y-1.5">
                      <FormLabel>Год первой публикации</FormLabel>
                      <FormControl>
                        <Input placeholder="Введите год" {...field} />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="author"
                render={() => (
                  <FormItem>
                    <div className="flex flex-col space-y-1.5">
                      <FormLabel>Автор</FormLabel>
                      <FormControl>
                        <AuthorPicker form={form} />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button type="reset" variant="outline">
              Отмена
            </Button>
            <Button type="submit">Добавить</Button>
          </CardFooter>
        </Card>
      </form>
      <Toaster />
    </Form>
  );
};
