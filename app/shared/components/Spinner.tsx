import { SpinnerCircularFixed } from "spinners-react";
type PropT = {
  isLoading: boolean;
};
export default function Spinner({ isLoading }: PropT) {
  return (
    <SpinnerCircularFixed
      thickness={200}
      color="#ffffff"
      size={22}
      enabled={isLoading}
    />
  );
}
