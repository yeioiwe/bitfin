"use client";
import axiosInstance from "@/config/axios.instrance";
import { Col } from "@/config/boxes";
import { Box, Button, OutlinedInput, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function AddUser() {
  const router = useRouter();
  const { register, handleSubmit, setValue, getValues } = useForm();

  const handleCreate = async () => {
    try {
      const response = await axiosInstance.post("/user", {
        username: getValues("username"),
        password: getValues("password"),
        balance: getValues("balance"),
      });

      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box m={6}>
      <Col p={6}>
        <Button variant="contained" onClick={() => router.push("/")}>
          главная страница
        </Button>

        <form onSubmit={handleSubmit(handleCreate)}>
          <Col gap={2} mt={8}>
            <Typography>логин/username</Typography>
            <OutlinedInput {...register("username")} />

            <Typography>пароль</Typography>
            <OutlinedInput {...register("password")} />

            <Typography>баланс / цифра</Typography>
            <OutlinedInput {...register("balance")} />

            <Button variant="contained" type="submit">
              создать
            </Button>
          </Col>
        </form>
      </Col>
    </Box>
  );
}
