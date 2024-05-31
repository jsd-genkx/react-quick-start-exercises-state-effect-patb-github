const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function Profile() {
  return (
    <div>
      <h1 className="font-bold text-2xl">{user.name}</h1>
      {/* // create and render the user image  */}
    </div>
  );
}
