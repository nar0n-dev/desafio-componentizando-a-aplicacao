import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import './styles/global.scss';
import { useState } from 'react';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId} setSelectedGenreId={setSelectedGenreId}/>
      <Content selectedGenreId={selectedGenreId}/>
    </div>
  )
}