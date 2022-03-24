import React, {useState, useEffect} from 'react';
import AlbumLists from './AlbumLists';
import axios from 'axios';
import Pagination from './Pagination';

const Layout = () => {
   const [albums, setAlbums] = useState([]);

   const [loading, setLoading] = useState(false);

   const [currentPage, setCurrentPage] = useState(1);

   const [albumsPerPage] = useState(10);

   useEffect(()=> {
       const fetchAlbums = async () => {
           setLoading(true);
           const res = await axios.get('https://jsonplaceholder.typicode.com/albums')
           setAlbums(res.data);
           setLoading(false);

       }

       fetchAlbums();
   }, []);

//   console.log(albums)

//adding pagination
    const indexOfLastAlbum = currentPage * albumsPerPage;
    const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
    const currentAlbums = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);

    //change page with pagination
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className='container'>
            <h1 className='text-primary mb-3'>My Albums</h1>
            <AlbumLists albums={currentAlbums} loading={loading}/>
            <Pagination 
            albumsPerPage={albumsPerPage} 
            totalAlbums={albums.length} 
            paginate={paginate}
            />
        </div>
    );
};

export default Layout;