import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import memeResponse, {
  Meme as MemeImage,
  MemeApiResponse,
} from "../data/memesData";
import "./Meme.scss";

interface MemeData {
  topText: string;
  bottomText: string;
  memeImage: MemeImage;
}

const Meme: FC = () => {
  const [allMemeImages, setAllMemeImages] =
    useState<MemeApiResponse>(memeResponse);

  const [memeImage, setMemeImage] = useState<MemeImage>({
    id: "61579",
    name: "One Does Not Simply",
    url: "https://i.imgflip.com/1bij.jpg",
    width: 568,
    height: 335,
    box_count: 2,
  });

  const [meme, setMeme] = useState<MemeData>({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    memeImage: memeImage,
  });

  const randomIndex = <T,>(a: Array<T>): number => {
    return Math.floor(Math.random() * a.length);
  };

  const loadMeme = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const memes = allMemeImages.data.memes;
    setMemeImage(memes[randomIndex(memes)]);
  };

  const updateMeme = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  useEffect(() => {
    const response: Promise<MemeApiResponse> = fetch(
      "https://api.imgflip.com/get_memes"
    ).then(res => res.json());
    response.then(data => setAllMemeImages(data));
  }, []);

  return (
    <main className="memeContainer">
      <form className="memeForm" onSubmit={loadMeme}>
        <label htmlFor="top-text" className="sr-only">
          Top text
        </label>
        <input
          type="text"
          className="input"
          placeholder="Top text"
          id="top-text"
          name="topText"
          value={meme.topText}
          onChange={updateMeme}
        />
        <label htmlFor="bottom-text" className="sr-only">
          Bottom text
        </label>
        <input
          type="text"
          className="input"
          placeholder="Bottom text"
          id="bottom-text"
          name="bottomText"
          value={meme.bottomText}
          onChange={updateMeme}
        />
        <button type="submit" className="submitBtn">
          Get a new meme image ????
        </button>
      </form>

      {memeImage && (
        <div className="meme">
          <img src={memeImage.url} alt={memeImage.name} className="memeImage" />
          <h2 className="topText memeText">{meme.topText}</h2>
          <h2 className="bottomText memeText">{meme.bottomText}</h2>
        </div>
      )}
    </main>
  );
};

export default Meme;
