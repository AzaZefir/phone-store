import { HeadphoneSingle } from './headphoneSingle/HeadphoneSingle';

export const Headphones = ({ db, favorite, setFavorite }) => {
  return (
    <div className="headphones">
      <h4>Наушники</h4>
      <div className="headphone d-flex flex-wrap justify-content-between gap-4">
        {db[0].headphones.map((item) => (
          <HeadphoneSingle key={item.id} {...item} item={item} favorite={favorite} setFavorite={setFavorite}/>
        ))}
      </div>
    </div>
  );
};
