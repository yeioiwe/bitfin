import { Row } from "@/config/boxes";
import { Typography } from "@mui/material";

export const UserItem = ({
  id,
  username,
  balance,
}: {
  id: any;
  username: any;
  balance: any;
}) => {
  return (
    <Row p={2} bgcolor={"#172d3e"} justifyContent={"space-between"}>
      <Typography>{id}</Typography>
      <Typography>{username}</Typography>
      <Typography>{balance}</Typography>
    </Row>
  );
};
