import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import UsernameLink from "./UsernameLink";

function CommentReplyListItem(props) {
  const { comment: currentComment, reply, isByPoster } = props;

  return (
    <li
      className="list-group-item py-2 border-bottom-2 border-secondary-subtle"
      style={{ paddingRight: "0px" }}
    >
      <UsernameLink
        user={reply.user}
        displayFullName={false}
        isPoster={isByPoster}
      />

      <p className="mb-1 mt-2">{reply.text}</p>
      <p
        className="mb-0 fst-italic text-secondary"
        style={{ fontSize: "12px" }}
      >
        {reply.date_of_comment_ago}
      </p>
    </li>
  );
}

export default CommentReplyListItem;
