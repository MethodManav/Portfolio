function Sidebar() {
  return (
    <div className=" h-screen w-24 flex items-center">
      <div className=" bg-black text-white font-sans font-semibold flex flex-col justify-around items-center h-5/6 -z-0 w-24 rounded-xl">
        <div>Home </div>
        <div>Experience</div>
        <div>Project</div>
        <div>Education</div>
        <div>About me </div>
        <div>Connect With me </div>
      </div>
    </div>
  );
}

export default Sidebar;
