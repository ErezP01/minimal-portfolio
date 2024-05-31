function App() {
  return (
    <div className="min-h-screen bg-gray-900 pl-4">
      {/* Block at the top to push content down */}
      <div className="h-40 bg-gray-900"></div>
      <div className="flex min-h-screen flex-col gap-4 p-4">
        <h1 className="text-xl ml-40 font-bold text-slate-200">
          Erez Porat
        </h1>
        <div className="mt-20 items-start mr-2 pr-8 flex flex-col">
          <p className="text-lg ml-40 text-slate-200">
            I am an 18 years old software engineer from Israel.
          </p>
          <p className="text-lg ml-40 text-slate-200">
            I am currently a student studying computer science at the Open University.
          </p>
          <p className="text-lg ml-40 text-slate-200">
            My goal is to become an AI engineer, and that's why I am taking courses from deeplearning.ai and other online courses.
          </p>
          <p className="text-lg ml-40 text-slate-200">
            My tech stack:
          </p>
          <ul className="text-lg ml-40 text-slate-200 list-disc">
            <li className="ml-5">React</li>
            <li className="ml-5">Vite</li>
            <li className="ml-5">Tailwind</li>
            <li className="ml-5">Typescript</li>
            <li className="ml-5">PyTorch and Tensorflow</li>
            <li className="ml-5">FastAPI</li>
            <li className="ml-5">Go</li>
          </ul>

        <div className ="pb-10">
          <p className="text-lg ml-40 text-slate-200">
            In my free time I like to watch movies, play the guitar and hang out with my friends.
          </p>
        </div>
          <div className="flex justify-center w-full mt-4">
            <div className="text-lg flex flex-row gap-4 text-slate-200 items-center">
              <a className="hover:underline" target="_blank" href="https://x.com/erez_porat">X</a>
              <a className="hover:underline" target="_blank" href="https://www.linkedin.com/in/erez-porat-550b27258/">LinkedIn</a>
              <a className="hover:underline"  target="_blank" href="https://github.com/ErezP01">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
