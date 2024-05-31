const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

export default function Profile() {
  return (
    <div>
      <h1 className="font-bold text-2xl">{user.name}</h1>
      <img
        src={user.imageUrl}
        alt={"Photo of " + user.name}
        className={`rounded-[50%] mt-2 w-[${user.imageSize}px] h-[${user.imageSize}px]`}
      />
    </div>
  );
}
