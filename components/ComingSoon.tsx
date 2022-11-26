const ComingSoon = () => {
  return (
    <div className="flex flex-col gap">
      <h1 className="text-3xl font-bold md:text-5xl">socialcard.sh</h1>
      <p>
        An app which allows you to create links to your social media or website
        <br />
        <span className="text-gray-500">
          Coming soon, follow{" "}
          <a
            href="https://twitter.com/nyxfor13days"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500">
            @nyxfor13days
          </a>{" "}
          on Twitter for updates
        </span>
      </p>
    </div>
  );
};

export default ComingSoon;
