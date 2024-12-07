"use client";
import axiosInstance from "@/config/axios.instrance";
import { Col } from "@/config/boxes";
import { User } from "@/config/user";
import { Button, OutlinedInput, Typography } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function EditUser() {
  const router = useRouter();
  const pathname = usePathname();
  const match = pathname.match(/\/edit\/(\d+)/);
  let userId = match ? match[1] : null;

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log(userId);
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.post("/user/id", {
          id: userId,
        });

        setUser(response.data);
      } catch (err) {}
    };

    fetchUserData();
  }, []);

  const { register, handleSubmit, setValue, getValues } = useForm();

  useEffect(() => {
    if (user) {
      setValue("username", user.username);
      setValue("password", user.password);
      setValue("balance", user.balance);
      setValue("profit_24", user.profit_24);
      setValue("profit_7", user.profit_7);
      setValue("profit_1", user.profit_1);
    }
  }, [user]);

  const handleEdit = async () => {
    try {
      const response = await axiosInstance.post("/user/edit", {
        id: user?.id,
        username: getValues("username"),
        password: getValues("password"),
        balance: getValues("balance"),
        profit_1: getValues("profit_1"),
        profit_24: getValues("profit_24"),
        profit_7: getValues("profit_7"),
      });

      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  if (!user) return null;

  return (
    <Col p={6}>
      <Button variant="contained" onClick={() => router.push("/")}>
        главная страница
      </Button>

      <form onSubmit={handleSubmit(handleEdit)}>
        <Col gap={1} mt={8}>
          <Typography>username/login</Typography>
          <OutlinedInput {...register("username")} />

          <Typography>password</Typography>
          <OutlinedInput {...register("password")} />

          <Typography>баланс (цифра)</Typography>
          <OutlinedInput {...register("balance")} />

          <Typography>прибыль 24 часов</Typography>
          <OutlinedInput {...register("profit_24")} />

          <Typography>прибыль 7 дней</Typography>
          <OutlinedInput {...register("profit_7")} />

          <Typography>прибыль 1 месяц</Typography>
          <OutlinedInput {...register("profit_1")} />

          <Button type="submit" variant="contained">
            редактироовать
          </Button>
        </Col>
      </form>
    </Col>
  );
}
