import { FC } from "react";
import { Loadable } from "../utils/loadable";


export const DataLoader: FC<{
  data: Loadable<string>;
}> = ({ data }) => {
  const value = data.getOrThrow();
  return (
    <div>
      <div>Data is {value}</div>
    </div>
  );
};
