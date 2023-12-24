import {FaSearch} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector} from 'react-redux';
import { useEffect, useState } from 'react';

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams =  new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  },[location.search]);


  return (
    <header className='bg-[#f7f8fc] shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'> 
      <Link to='/'>
      <div className='flex gap-2'>
      <h1 className='font-bold text-sm sm:text-xl flex items-center flex-wrap'>
            <span className='text-blue-600'>Stu</span>
            <span className='text-red-600'>Tech</span>
            <span className='text-green-600'>Map</span>
        </h1>
        <img className=' h-10 w-10 object-cover' src="../images/arrow.png" alt='profile' />
      </div>
        </Link>
        <form action="" onSubmit={handleSubmit} className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input type="text" placeholder='Search....' className='bg-transparent focus:outline-none w-24 sm:w-64'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} />
          <FaSearch className='text-slate-600' />
        </form>
        <ul className='flex gap-4'>
          <Link to="/">
          <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
          </Link>
          <Link to='/about'>
          <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
          </Link>
          <Link to='/profile'>

          { currentUser ? ( <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt='profile' />) : 
          (<li className=' text-slate-700 hover:underline'>Sign In</li>)}
          </Link>
        </ul>
        </div>
        
    </header>
  )
}