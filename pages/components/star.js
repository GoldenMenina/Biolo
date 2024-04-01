function Star({ likes, id, user, posts, postArray }) {
  var star = false;
  if (likes) {
    if (likes.includes(user.email)) {
      star = true;
    }
  }

  const like = async (id) => {
    const res = await fetch("/api/posts/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id, email: user.email }),
    });
  };

  const handleClick = () => {
    if (!star) {
      postArray = posts;
      let post = postArray.find((post) => post._id === id);
      if (post) {
        if (post.likes) {
          post.likes.push(user.email);
        } else {
          post.likes = [];
          post.likes.push(user.email);
        }
        star = true;
        like(id, user.email);
      }
    }
  };

  return (
    <i
      className={`fa fa-star me-2 ${star ? "text-warning" : ""}`}
      style={{ cursor: "pointer" }}
      onClick={handleClick}
    ></i>
  );
}

export default Star;
