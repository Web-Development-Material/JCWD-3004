import { useParams, useLocation } from "react-router-dom";

function Details() {
  const { title } = useParams(); // -> mengambil data dari URL Params
  const location = useLocation(); // -> mengambil data dari state

  const descriptionParams = location.state.description;
  const titleParams = location.state.title;

  return (
    <div>
      Details of {title}<br/>
      Title Params : {titleParams}<br/>
      Description Params : {descriptionParams}
    </div>
  );
}

export default Details;
