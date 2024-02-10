import React from "react";
import moment from "moment";
import { FaRegCheckCircle } from "react-icons/fa";

function Friends({ friend, myId, activeUser }) {
  const { fndInfo, msgInfo } = friend;
  return (
    <div className="friend">
      <div className="friend-image">
        <div className="image">
          <img src={`./image/${fndInfo.image}`} alt="" />
          {activeUser &&
          activeUser.length > 0 &&
          activeUser.some((u) => u.userId === fndInfo._id) ? (
            <div className="active_icon"></div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="friend-name-seen">
        <div className="friend-name">
          <h4
            className={
              msgInfo?.senderId !== myId &&
              msgInfo?.status !== undefined &&
              msgInfo?.status !== "seen"
                ? "unseen_message"
                : ""
            }
          >
            {fndInfo.userName}
          </h4>

          <div className="msg-time">
            {msgInfo && msgInfo.senderId === myId ? (
              <span>You -- </span>
            ) : (
              <span
                className={
                  msgInfo?.senderId !== myId &&
                  msgInfo?.status !== undefined &&
                  msgInfo?.status !== "seen"
                    ? "unseen_message Fd_name"
                    : "Fd_name"
                }
              >
                {fndInfo.userName + "  --  "}
              </span>
            )}
            {msgInfo && msgInfo.message.text ? (
              <span
                className={
                  msgInfo?.senderId !== myId &&
                  msgInfo?.status !== undefined &&
                  msgInfo?.status !== "seen"
                    ? "unseen_message"
                    : ""
                }
              >
                {msgInfo.message.text.slice(0, 10) + "..."}
              </span>
            ) : msgInfo && msgInfo.message.image ? (
              <span>sent a Image ...</span>
            ) : (
              <span>wanted connect you --- .</span>
            )}
            <span>
              {msgInfo
                ? "      " + moment(msgInfo.createdAt).startOf("mini").fromNow()
                : "       " +
                  moment(fndInfo.createdAt).startOf("mini").fromNow()}
            </span>
          </div>
        </div>
        {myId === msgInfo?.senderId ? (
          <div className="seen-unseen-icon">
            {msgInfo.status === "seen" ? (
              <img src={`./image/${fndInfo.image}`} alt="" />
            ) : msgInfo.status === "delivered" ? (
              <div className="delivered">
                <FaRegCheckCircle />
              </div>
            ) : (
              <div className="unseen"></div>
            )}
          </div>
        ) : (
          <div className="seen-unseen-icon">
            {msgInfo?.status !== undefined && msgInfo?.status !== "seen" ? (
              <div className="seen-icon"></div>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Friends;
