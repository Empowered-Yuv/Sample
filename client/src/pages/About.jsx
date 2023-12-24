import React from "react";

export default function About() {
  return (
    <div className="flex flex-col gap-5">
      <div className="head mx-auto w-full text-center">
        <h1 className="text-blue-800 text-4xl lg:text-6xl p-5 font-semibold">
          About Us
        </h1>
      </div>
      <div className="head mx-auto w-full text-center">
        <h1 className="text-slate-800 text-2xl lg:text-4xl p-5 font-semibold">
        &#x1F495;  Our Inspiration &#x1F495;
        </h1>
      </div>
      <div className="flex  items-center flex-col gap-4 lg:flex-row ">
        <div className="flex items-center lg:flex-1">
          <img
            className="rounded-lg h-[400px] mx-auto"
            src="../images/r.png"
            alt=""
          />
        </div>

        <div className="flex lg:flex-1 p-3">
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            fuga dolorum voluptatum alias temporibus. At minus, similique fugiat
            incidunt officiis nam et, perspiciatis nostrum veniam maxime
            mollitia voluptatibus cumque praesentium aperiam possimus eos
            commodi odio, suscipit ea dolores. Illo numquam odio saepe tenetur
            magni et odit! Similique minus distinctio laborum sed in natus rerum
            voluptas, optio maxime soluta earum laudantium aliquid tempore
            officia atque doloremque sunt consequatur nesciunt non, accusamus
            odit praesentium doloribus facere! Animi maiores maxime ipsum
            temporibus ducimus iure autem pariatur consequatur ullam
            exercitationem officiis adipisci sapiente fugiat ex, tenetur et quis
            necessitatibus. Ullam repellat deleniti enim perferendis?
          </p>
        </div>
      </div>
      <div className="head mx-auto w-full text-center">
        <h1 className="text-slate-800 text-2xl lg:text-4xl p-5 font-semibold">
         &#129308; Our Team &#129307;
        </h1>
      </div>
      <div className="flex  items-center flex-col gap-4  ">
        <div className="flex flex-col items-center gap-2 lg:flex-row">
          <img
            className="rounded-full h-[400px] mx-auto"
            src="../images/h.png"
            alt=""
          />

          <img
            className="rounded-full h-[400px] mx-auto"
            src="../images/p.jpg"
            alt=""
          />

          <img
            className="rounded-full h-[400px] mx-auto"
            src="../images/s.jpg"
            alt=""
          />
        </div>
        <div className="flex p-3">
          <p className="text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            fuga dolorum voluptatum alias temporibus. At minus, similique fugiat
            incidunt officiis nam et, perspiciatis nostrum veniam maxime
            mollitia voluptatibus cumque praesentium aperiam possimus eos
            commodi odio, suscipit ea dolores. Illo numquam odio saepe tenetur
            magni et odit! Similique minus distinctio laborum sed in natus rerum
            voluptas, optio maxime soluta earum laudantium aliquid tempore
            officia atque doloremque sunt consequatur nesciunt non, accusamus
            odit praesentium doloribus facere! Animi maiores maxime ipsum
            temporibus ducimus iure autem pariatur consequatur ullam
            exercitationem officiis adipisci sapiente fugiat ex, tenetur et quis
            necessitatibus. Ullam repellat deleniti enim perferendis?
          </p>
        </div>
      </div>
    </div>
  );
}
