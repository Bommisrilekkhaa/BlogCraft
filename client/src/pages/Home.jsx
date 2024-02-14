import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl text-gray-600 pb-3 font-bold lg:text-6xl '>Welcome to <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-pink-500 inline-block text-transparent bg-clip-text pb-3"><b><em>BlogCraft</em></b></span></h1>
        <p className='text-gray-500 text-xs sm:text-sm'>
          Here you'll find a variety of articles and blogs on various topics. 
          Enjoy Reading and contribute your Blogs...
        </p>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-purple-500 font-bold hover:underline'
        >
          View all posts
        </Link>
      </div>
      {/* <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div> */}

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 pb-7 pt-0'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold '>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-purple-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
