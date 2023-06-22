import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import stringMaxLength from "../Utils/stringMaxLength";
import displayTruncatedFullName from "../Utils/displayTruncatedFullName";

function UsernameLink(props) {
  const { user, displayFullName, isPoster } = props;

  return !isEmpty(user) ? (
    <div>
      <Link className="fw-bold link-primary" to={user.url}>
        {stringMaxLength(user.username, 20)}
      </Link>
      <span>
        {displayFullName
          ? ` (${displayTruncatedFullName(user.full_name)})`
          : ""}
      </span>
      {isPoster ? (
        <span>
          &nbsp;&nbsp;<span className="badge text-bg-primary">OP</span>
          &nbsp;&nbsp;
        </span>
      ) : null}
    </div>
  ) : (
    <Link className="fw-bold link-secondary" to="/users/null">
      Deleted User
    </Link>
  );
}

export default UsernameLink;
