import { useDark } from "./context/useDark";

const Text = () => {
  const { isDark } = useDark();
  return <span style={{ color: isDark ? "pink" : "skyblue" }}>텍스트</span>;
};

export default Text;
