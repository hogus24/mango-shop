import { useNavigate } from "react-router-dom";
const New = () => {
  let navi = useNavigate();
  return (
    <div>
      New 페이지
      {/* -1 입력시 한단계 전으로 돌아감 */}
      <button onClick={() => navi(-1)}>Back</button>
    </div>
  );
};
export default New;
