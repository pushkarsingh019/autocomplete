import { useState } from "react";
import { EnhanceAI } from "enhanceai";

const App = () => {
  const [context, setContext] = useState("");

  return (
    <section>
      <section className="flex justify-center">
        <div className="border-dotted border-8 border-green-300 my-40 mx-24 bg-green-300 py-12 px-16 rounded-2xl w-6/12 text-center">
          <input
            type="text"
            placeholder="Give me some context, what are you writing ?"
            onChange={(event) => setContext(event.target.value)}
            className="py-2 px-2 rounded-l w-8/12 text-center outline-none"
          />
          <br />
          <br />
          <EnhanceAI context={context}>
            <textarea
              name=""
              id=""
              cols="20"
              rows="5"
              placeholder="Write something, I will autocomplete it 😎"
              className="py-3 px-3 w-8/12 rounded-l h-fit"
            ></textarea>
          </EnhanceAI>
        </div>
      </section>
      <p className="text-zinc-900 text-l font-sans text-center pb-8">
        Made by{" "}
        <a
          href="https://stoicpushkar.com"
          target="_blank"
          class="text-zinc-900 text-l font-sans text-center hover:underline hover:text-indigo-800 font-semibold underline-offset-4"
        >
          Pushkar Singh
        </a>
      </p>
    </section>
  );
};

export default App;
