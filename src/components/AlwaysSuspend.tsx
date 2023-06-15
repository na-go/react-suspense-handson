import { FC } from "react";
import { sleep } from "../utils/sleep";

export const AlwaysSuspend:FC = () => {
  console.log('AlwaysSuspend is rendering')
  throw sleep(1000)
}
