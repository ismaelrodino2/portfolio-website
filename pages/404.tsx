const NotFound = () => {
  return (
    <>
      <hr className="h-px bg-gray-300 w-full" />
      <div className="text-center">
        <h1 className="font-semibold text-xl">404 NOT FOUND</h1>
        <p className="my-4">
          Hey, I'm still working on this site so not all pages are finished yet.
        </p>
        <p>
          <a className="text-blue-500 hover:underline" href="/">
            Go to home page
          </a>
        </p>
      </div>
    </>
  );
};

export default NotFound;
