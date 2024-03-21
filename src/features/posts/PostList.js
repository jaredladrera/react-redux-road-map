import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectedAllPosts, getPostsError, getPostsStatus, fetchPosts } from './postSlice';
import PostsExcerpt from './PostsExcerpt';

const PostList = () => {

  const dispatch = useDispatch();
  const posts = useSelector(selectedAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if(postsStatus === 'idle') {
        dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch])

  let content;
  if(postsStatus === 'loading') {
      content = <p>Loading...</p>
      console.log('loading')
  } else if(postsStatus === 'succeeded') {
    console.log('succeeded')
    const orderedPost = posts.slice().sort((a,b) => b.date.localeCompare(a.date));
    content = orderedPost.map(post => <PostsExcerpt key={post.id} post={post} />)
  } else if(postsStatus === 'failed') {
    console.log('dailed')
    content = <p>{error}</p>
  }
  return (
    <section>
        <h2>Posts</h2>
        {content}
    </section>
  )
}

export default PostList