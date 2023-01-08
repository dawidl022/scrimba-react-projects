interface PicsumImage {
  id: string;
  download_url: string;
}

interface Image {
  id: string;
  src: string;
  displayClass: string;
}

export type { PicsumImage, Image };
