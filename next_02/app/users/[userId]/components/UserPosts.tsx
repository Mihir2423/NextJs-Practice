type Props = {
  promise: Promise<Post[]>;
};

export default async function UserPosts({ promise }: Props) {
  const posts = await promise;
  const content = posts.map((post) => {
    return (
      <article key={post.id}>
        <h3 className="font-bold">{post.title}</h3>
        <br />
        <p>{post.body}</p>
        <br/>
      </article>
    );
  });
  return content
}
