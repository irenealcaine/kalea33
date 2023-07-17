import "./Gallery.scss";
import React, { useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";

const photos = [
  {
    id: 1,
    url: "https://e00-telva.uecdn.es/apps/cocina/imagenes/recetas/internacionales/fajitas_pollo_pimientos.jpg",
  },
  {
    id: 2,
    url: "https://c0.wallpaperflare.com/preview/552/184/880/travel-road-country-western.jpg",
  },
  {
    id: 3,
    url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=2000",
  },
  {
    id: 4,
    url: "https://www.dartmoorzoo.org.uk/wp-content/uploads/2021/01/Tiger-1.jpg",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?cs=srgb&dl=pexels-roberto-nickson-2486168.jpg&fm=jpg",
  },
  {
    id: 7,
    url: "https://www.fundacionaquae.org/wp-content/uploads/2018/10/proteger-a-los-animales-1024x654.jpg.webp",
  },
  {
    id: 8,
    url: "https://s3.abcstatics.com/media/gurmesevilla/2012/01/comida-rapida-casera.jpg",
  },
  {
    id: 9,
    url: "https://media1.popsugar-assets.com/files/thumbor/LVytyEgKryOQhGCoQis8Uudzpp0/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/09/23/953/n/1922507/c3018d08a1be257e_pexels-sharon-mccutcheon-3713892/i/Pastel-iPhone-Wallpaper.jpg",
  },
  {
    id: 10,
    url: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAzL3JtNTk3ZGVzaWduLWMtY2hvbmctMDAxLmpwZw.jpg",
  },
  {
    id: 11,
    url: "https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk.jpg",
  },
  {
    id: 12,
    url: "https://lujoviajes.com/wp-content/uploads/2019/10/Viajes-de-lujo-c%C3%B3mo-encontrar-m%C3%A1s-baratos.png",
  },
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup function
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="gallery">
      {selectedPhoto && (
        <Modal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
      )}
      <h1>Galería</h1>
      <div className="boxes">
        {photos.map((photo) => (
          <div className="box hidden" key={photo.id}>
            <img
              src={photo.url}
              alt={photo.title}
              className=""
              onClick={() => setSelectedPhoto(photo)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
