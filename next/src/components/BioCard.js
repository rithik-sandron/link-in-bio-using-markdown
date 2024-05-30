import Link from "next/link";
import { useEffect } from "react";

const BioCard = ({ user }) => {
  useEffect(() => {
    if (user._dset)
      document.getElementById(`markdown-${user._id}`).innerHTML = user.content;
  }, []);

  return (
    <>
      <div
        id="preview"
        className="preview card"
        style={{
          backgroundColor: user.bgcolor,
          color: user.color,
        }}
      >
        <div className="user">
          {user.fileUrl && (
            <img
              src={user.fileUrl}
              style={{
                borderRadius: "50%",
                height: "180px",
                width: "180px",
                margin: "0",
                objectFit: "contain"
              }}
            />
          )}
          {(user.username) && (
            <Link href={`/${user.username}`}>
              <h1
                id="username"
                style={{
                  padding: "0",
                  margin: "0",
                  color: `${user.color}`,
                }}
              >
                {user.username}
              </h1>
              <hr />
            </Link>
          )}
        </div>
        <div
          type="text"
          name="content"
          id={`markdown-${user._id}`}
          className="blog"
        />
      </div>
    </>
  );
};

export default BioCard;
