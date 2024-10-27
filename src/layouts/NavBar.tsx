function NavBar() {
  return (
    <div className="w-full px-8 py-4 flex flex-row items-center justify-between">
      <div>App Name</div>
      <div className="flex flex-row gap-4">
        <div>Avatar</div>
        <div>Account Menu</div>
      </div>
    </div>
  );
}

export default NavBar;
