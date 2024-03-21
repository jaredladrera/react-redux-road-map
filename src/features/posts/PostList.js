import React from 'react'
import { useSelector } from 'react-redux'
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostList = () => {
  
  const posts = useSelector(state => state.posts);

  const orderedPost = posts.slice().sort((a,b) => b.date.localeCompare(a.date))

  return (
    <section>
        <h2>Posts</h2>
        {
            orderedPost.map(post => (
                <article key={post.id}>
                    {console.log(post.date)}
                    <h3>{post.title}</h3>
                    <p>{ post.content.substring(0, 100)}</p>
                    <p className='postCredit'>
                        <PostAuthor userId={post.userId} />
                        <TimeAgo timestamp={post.date} />
                    </p>

                    <ReactionButtons post={post} />
                </article>
            ))
        }
    </section>
  )
}

export default PostList