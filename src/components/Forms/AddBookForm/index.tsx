import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthorPicker } from "@/components/AuthorPicker";
import { useForm } from "react-hook-form";
import * as zod from "zod";
export const AddBookForm = () => {

  const formSchema = zod.object({
    
  })

  const form = useForm({

  });
  
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Добавить книгу</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Название</Label>
            <Input id="name" placeholder="Введите название" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Год первой публикации</Label>
            <Input id="year" type="number" placeholder="Введите год" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">Автор</Label>
            <AuthorPicker />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Отмена</Button>
        <Button>Добавить</Button>
      </CardFooter>
    </Card>
  );
};
