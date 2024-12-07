"use client";
import { Col } from "@/config/boxes";
import { Button, OutlinedInput, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  return (
    <Col gap={2}>
      <Typography>Вход:</Typography>
      <form>
        <Col gap={2}>
          <OutlinedInput placeholder="login" {...register("login")} />

          <OutlinedInput placeholder="pass" {...register("pass")} />

          <Button variant="outlined" type="submit">
            вход
          </Button>
        </Col>
      </form>
    </Col>
  );
};
