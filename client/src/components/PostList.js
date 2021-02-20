import React from "react";

export default function PostList ({ postList }) {

    console.log('POSTLIST: ', postList);

    if (postList) {

        return (
            <div className = "postList mt-5">
                {postList.map(post => (
                    <div className="post my-3">
                        <div className="postUser">
                            {post.user}:
                        </div>
                        <div className="postContent">
                            {post.text}
                        </div>
                    </div>
                ))}
            </div>
    )
    } else {
        return(
            <div className = "postList">
            </div>
        )
    }
}