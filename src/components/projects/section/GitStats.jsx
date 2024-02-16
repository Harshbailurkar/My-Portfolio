export default function GitStats() {
  return (
    <div className="text-center mt-8">
      <h1 className="text-4xl font-bold mb-4">GitHub Statistics</h1>
      <div className="m-10">
        <div className="w-full md:flex md:justify-center md:space-x-4">
          <img
            src="http://ghchart.rshah.org/1F3B71/Harshbailurkar"
            alt="Harshbailurkar's Github chart"
            className="w-full md:w-auto md:mr-2 mb-2 md:mb-0"
          />
          <img
            src="https://github-readme-stats.vercel.app/api?username=harshbailurkar&show_icons=true&count_private=true&hide=contribs,issues&theme=dark"
            alt="GitHub Stats"
            className="w-full md:w-auto md:mr-2 mb-2 md:mb-0"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Harshbailurkar&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
            alt="Top Languages"
            className="w-full md:w-auto md:ml-2"
          />
        </div>
      </div>
    </div>
  );
}
