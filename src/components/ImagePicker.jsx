export default function ImagePicker({ images, selectedImage, onSelect }) {
  // console.log(images, selectedImage);
  return (
    <div id="image-picker">
      <p>Select an image</p>
      <ul>
        {images.map((image) => (
          <li
            key={image.path}
            onClick={() => onSelect(image.path)}
            className={selectedImage === image.caption ? "selected" : undefined}
          >
            <img src={image.path} alt={image.caption} />
          </li>
        ))}
      </ul>
    </div>
  );
}
