import { useDispatch, useSelector } from "react-redux";

const useAppDispatch = () => {
  return useDispatch();
};
const useAppSelector = useSelector;

export { useAppDispatch, useAppSelector };
