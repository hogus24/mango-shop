import { useNavigate, useSearchParams } from "react-router-dom";
const Edit = () => {
  // searchParams, setSearchParams -> 변수명
  // useSearchParams -> 함수명
  let [searchParams, setSearchParams] = useSearchParams();
  let navi = useNavigate();
  // ' 기존URL' + /edit?id=10&mode=dark => 웹 브라우저 주소창에 입력하여 확인해보기
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");
  return (
    <div>
      Edit 페이지{id}
      <button onClick={() => navi("/")}>HOME</button>
      <button onClick={() => navi("/new")}>NEW</button>
      <ul>
        <li>{mode}</li>
      </ul>
    </div>
  );
};
export default Edit;
