"use client";
import axiosInstance from "@/config/axios.instrance";
import { Col, Row } from "@/config/boxes";
import { User } from "@/config/user";
import { Box, Button, Typography } from "@mui/material";

import Link from "next/link";
import { useEffect, useState } from "react";
import { UserItem } from "./user.item";

export const DashboardMain = () => {
  const [userList, setUserList] = useState<User[] | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get("/user/list");
        console.log(response.data);
        setUserList(response.data.users);
      } catch (err) {}
    };

    fetchUserData();
  }, []);

  if (!userList) return <Box>Loading</Box>;

  return (
    <Col>
      <Link target="_blank" href={"/add"}>
        <Button variant="contained">создать пользователя</Button>
      </Link>

      <Col gap={2} mt={2}>
        <Typography>Список пользователей:</Typography>
        <Row justifyContent={"space-between"}>
          <Typography>id</Typography>
          <Typography>username</Typography>
          <Typography>balance</Typography>
        </Row>

        {userList.map((u, i) => (
          <UserItem
            key={i}
            id={u.id}
            balance={u.balance}
            username={u.username}
          />
        ))}
      </Col>
    </Col>
  );
};
