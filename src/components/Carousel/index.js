import React from "react";

function Carousel(props) {
  const { items } = props.podcasts;
  console.log(items);
  return (
    <div>
      Soy el carousel
      <div>
        Soy los podcasts
        {items &&
          items.map((item, key) => {
            return (
              <>
                <span key={key}>{item.show.name}</span>;
                <img src={item.show.image} />;
              </>
            );
          })}
      </div>
    </div>
  );
}

export default Carousel;

//este componente retorna título+playlists
