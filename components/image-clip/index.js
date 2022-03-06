export default function ImageClip({
  width = "200px",
  height = "200px",
  borderRadius = "50%",
  src = "https://source.unsplash.com/random/",
  alt = "clipped image"
}) {
  return (
    <div style={{ width: width, height: height, margin: "0 auto" }}>
      <img alt={alt} src={src} style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: borderRadius}}/>
    </div>
  );
}
