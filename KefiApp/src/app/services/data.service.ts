import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // Array de frases motivadoras
  private phrases: string[] = [
    "¡Si puedes soñarlo, puedes lograrlo!",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "No importa lo lento que vayas, siempre y cuando no te detengas.",
    "Cree en ti mismo y todo será posible.",
    "El único lugar donde el éxito viene antes que el trabajo es en el diccionario."
  ];

  // Array de enlaces a GIFs
  private gifs: string[] = [
    "https://media.giphy.com/media/Adqe9XUP3x9LO/giphy.gif",
    "https://media.giphy.com/media/XZ1Inh7TApFrWItNLZ/giphy.gif",
    "https://media.giphy.com/media/VdfFE6Wpw93fW/giphy.gif",
    "https://media.giphy.com/media/l1J9JtMnJWjWaFXy0/giphy.gif",
    "https://media.giphy.com/media/eBeyBv0zcio7CxdyI4/giphy.gif",
    "https://media.giphy.com/media/kn2GtngXJ3hZu/giphy.gif",
    "https://i.gifer.com/DGpW.gif",
    "https://media.giphy.com/media/3o6ZsYuGG6tQUSsKSQ/giphy.gif",
    "https://media.giphy.com/media/S9bkcPPiir8UkQaOJ1/giphy.gif",
    "https://i.gifer.com/6O2V.gif",
    "https://i.gifer.com/TQtX.gif",
    "https://i.gifer.com/1uTW.gif",
    "https://i.gifer.com/ti1.gif",
    "https://i.gifer.com/EE2P.gif",
    "https://i.gifer.com/80a1.gif",
    "https://i.gifer.com/GuUs.gif",
    "https://i.gifer.com/2ZqH.gif",
    "https://i.gifer.com/5I3s.gif",
    "https://i.gifer.com/CRj1.gif",
    "https://i.gifer.com/RTX4.gif"







  ];


  constructor() { }

  getRandomData() {
    const randomIndex1 = Math.floor(Math.random() * this.phrases.length);
    const randomIndex2 = Math.floor(Math.random() * this.gifs.length);
    const randomPhrase = this.phrases[randomIndex1];
    const randomGifUrl = this.gifs[randomIndex2];
    return { phrase: randomPhrase, gifUrl: randomGifUrl };
  }


}
