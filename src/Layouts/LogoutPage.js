import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setPageName, setMainId } from "../Features/page/pageSlice";
import stringMaxLength from "../Utils/stringMaxLength";

function LogoutPage(props) {
  const { state } = useLocation();
  const { username } = state;
  const dispatch = useDispatch();

  //componentOnMount
  useEffect(() => {
    dispatch(setPageName("loggedout"));
    dispatch(setMainId(""));
  }, []);

  return (
    <div className="text-center">
      <p className="text-center">
        {stringMaxLength(username, 20)}, you have been logged out successfully.
      </p>
      <Link className="btn btn-primary mt-3" to="/">
        Go back home
      </Link>
    </div>
  );
}

export default LogoutPage;
