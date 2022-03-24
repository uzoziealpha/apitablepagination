import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


import Table from 'react-bootstrap/Table'

const Albums = ({ albums, loading }) => {

    if (loading) {
        return <h2>Laoding...</h2>
    }

   

   
    return <Table striped bordered hover variant>
    <thead>
    <tr>
      <th>ID</th>
      <th>Album Name</th>
      <th>GoTo</th>
    </tr>
  </thead>
  <tbody>
  {albums.map(album => (
    <tr key={album.id}>
    <td>{album.id}</td>     
    <td>{album.title}</td>
    <td className='text-center'>
    <Button >
      Album
    </Button>
  </td>
  </tr>
   ))}
  </tbody>
      </Table>
    
    
};

export default Albums;