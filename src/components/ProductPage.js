import { useNavigate, useSearchParams } from "react-router-dom";
// import { getSearchParamsForLocation } from "react-router-dom/dist/dom";
const ProductPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let navi = useNavigate();
  const id = searchParams.get("id");
  return (
    <div>
      ProductPage{id}
      <br />
      <button onClick={() => navi("/")}>뒤로가기</button>
      <br />
    </div>
  );
};
export default ProductPage;
