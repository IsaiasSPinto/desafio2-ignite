import { Button } from "./Button";

interface SideBarProps {
  onGenres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>;
  onHandleClickButton: (id: number) => void;
  onSelectedGenreId: number
}
// Recebo o necessario utilizando props que estao devidamente tipadas igual no App
export function SideBar({ onGenres, onHandleClickButton, onSelectedGenreId }: SideBarProps) {

  return (


    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {onGenres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onHandleClickButton(genre.id)}
            selected={onSelectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>



  )

}