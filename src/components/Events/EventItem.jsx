import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function EventItem({ event }) {
  // console.log(event.image);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await fetch(
        "https://react-projects-server-nu.vercel.app/events/images"
      );
      const data = await response.json();
      setImages(data.images);
      // console.log(images);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // useEffect(() => {
  //   console.log(images);
  // }, [images]);

  const imageObj = images.find((img) => img.caption === event.image);
  const imageUrl = imageObj ? imageObj.path : "https://via.placeholder.com/300";

  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <article className="event-item">
      <img src={imageUrl} alt={event.title} />
      <div className="event-item-content">
        <div>
          <h2>{event.title}</h2>
          <p className="event-item-date">{formattedDate}</p>
          <p className="event-item-location">{event.location}</p>
        </div>
        <p>
          <Link to={`/events/${event.id}`} className="button">
            View Details
          </Link>
        </p>
      </div>
    </article>
  );
}
