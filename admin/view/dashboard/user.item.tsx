"use client";
import { Row } from "@/config/boxes";
import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export const UserItem = ({
  id,
  username,
  balance,
}: {
  id: any;
  username: any;
  balance: any;
}) => {
  const router = useRouter();

  return (
    <Row
      onClick={() => router.push(`/edit/${id}`)}
      p={2}
      bgcolor={"#172d3e"}
      justifyContent={"space-between"}
    >
      <Typography>{id}</Typography>
      <Typography>{username}</Typography>
      <Typography>{balance}</Typography>
    </Row>
  );
};
