import { FC } from "react";
import { sleep } from "../utils/sleep";

export const SometimeRespond:FC = () => {
  if (Math.random() < 0.3) {
    throw sleep(1000);
  }
  return <p>Hello, world!</p>;
}
