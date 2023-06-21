import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import stringMaxLength from "../Utils/stringMaxLength";

function UsernameLink(props) {
  const { user, displayFullName } = props;

  return !isEmpty(user) ? (
    <div>
      <Link className="fw-bold link-primary" to={user.url}>
        {stringMaxLength(user.username, 20)}
      </Link>
      <span>
        {displayFullName ? ` (${stringMaxLength(user.full_name, 60)})` : ""}
      </span>
    </div>
  ) : (
    <Link className="fw-bold link-secondary" to="/users/null">
      Deleted User
    </Link>
  );
}

export default UsernameLink;
