(function () {
  console.log("LOADED FILE")
  const ratio = window.devicePixelRatio;
  const container = document.querySelector('.generator-container');
  const canvas = document.querySelector('#inspo-generator')
  const context = canvas.getContext('2d');
  context.scale(ratio, ratio);
  const download = document.querySelector('#download');
  const refresh = document.querySelector('#refresh');

  const img = new Image();
  const logo = new Image();

  img.crossOrigin = "Anonymous";
  logo.crossOrigin = "Anonymous";

  let fontSize = 72;
  let imgIndex = 0;
  let phraseIndex = 0;

  const logoUrl = "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64441258f7fdec5ff085d3af_DBC_Logo.png";
  logo.src = logoUrl;

  const images = [
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/644412d2088b014aff5765e1_046_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/644412d2668ffd65dfd52296_041_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/644412d26d9af564c93eb250_040_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/644412d275880104cba8fdab_050_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/644412d13896b50fc4e413fd_053_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125f2d200239c383bdba_006_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125f0d01ac22856c5bb7_001_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125f827de645826b0232_058_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125f8452f190481a0f3c_055_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125f76e5fe67e5386d2b_017_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125e76e5fec72d386d2a_005_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125e7e177f4a7839ef85_013_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125e6d9af556963eac3e_048_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125e7e177fcc6d39ef84_021_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125e0d01ac6e6d6c5bb6_023_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125ef2864a9b5deaedf4_057_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125e5570e380c9046a9e_038_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125e6195746a383d50b2_002_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125eb67dfec67b4421a0_024_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125e51565260059737b5_031_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125d5570e377df046a86_044_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125d668ffd3eb7d51e09_054_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/644412598b7954256cf32e0f_009_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64441259eae6eada92d80165_014_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/644412598b795456c0f32e0d_020_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/644412590d01ac9a946c5ac9_022_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/644412598452f15a571a0ea8_019_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125876e5fe19e2386ce7_018_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/6444125876e5fea87b386ce6_010_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/644412586d9af538f23eac2f_011_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/644412588452f1f9631a0ea7_003_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64441258ea3c1301bb137829_016_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5e7e177f839d39c00d_036_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5d5751d7337a3aade0_051_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5d045b7a33d3eec350_047_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5d088b0146bf573e08_056_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5d2689ad1a0ccaab0d_052_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5d7588017795a8d51c_043_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5c668ffdbe75d4dbc4_037_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5c28b76c048ebd425b_029_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5c2689ada5d9caaaf8_045_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5c5751d71dea3aadd0_032_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5c0d01ac2f0a6c21d2_033_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5b2689ad7336caaad5_039_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5bb67dfe6d0643fa5a_015_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5b6d9af57a053e8324_004_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5b6195742ec33d2b06_008_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5b6d9af55f933e8323_042_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5a2491e7921a60cc51_012_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5a827de6befe6ac957_026_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5a0d01aca2a56c21ce_049_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f5a827de6dea96ac956_034_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f59e250ac5e1c08c3ca_027_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f595156521e8996fbce_007_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f596d9af535fe3e8316_035_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f598b7954a6ccf30972_030_Final.png",
    "https://daks2k3a4ib2z.cloudfront.net/636685de8bef740025b93516/64440f59668ffd0c24d4dbbf_028_Final.png",
  ]

  const phrases = [
    "I am an instant success",
    "I am enough",
    "Life is good for me",
    "I can be apart of society successfully",
    "I do not take my work home with me",
    "Work is life-giving to me",
    "The internet doesn’t make me feel bad",
    "My phone is not a disease",
    "I am good at my job",
    "The people at my job like me",
    "If u want to see me come see me",
    "The first thing you need to know is that the internet is amazing",
    "We’re alive!",
    "We live in a dream world created by the machines",
    "People love the idea of me!",
    "Graphic design is not worth it",
    "Hi! I am so unhappy haha!",
    "Actually, life is beautiful and you do have the time",
    "I am very sensitive to beautiful things",
    "I belong deeply to myself",
    "Pretty ok at the moment",
    "It was revealed to me in a dream",
    "Caught between a dream and a nightmare",
    "I am here",
    "To plant a garden is to believe in the future",
    "Did you ever grow anything in the garden of your mind?",
    "Everything is alive",
    "Everybody should sit by a little stream and listen",
    "You are a flower bathed in sunlight",
    "The vibe for today is childlike wonder",
    "He thought about tall oak trees",
    "I am human and I need to be loved",
    "I have no more ambition, only desire",
    "There is such a strong connection, there is no end to it",
    "My destiny awaits!",
    "I contain the knowledge of 1,000 tweets",
    "Watch the sun set and don’t take a picture of it",
    "The willow tree and me, we’re made of the same stuff",
    "Don’t worry about tomorrow",
    "I am constantly trying to explain something unexplainable",
    "I’m thinking we are all going to be ok",
    "There is nothing in the silence to be frightened of",
    "Look for the clarity that silence is the guardian of",
    "Why is this familiar?",
    "Wishing you a safe return back to yourself",
    "The softest of landings awaits",
    "Every now and then I'm insecure",
    "Seize the day, wear a big, happy smile on your face",
    "In silence there is truth, there is beauty, there is love",
    "Play me a song to set me free",
    "Naivety succeeds",
    "Write a song, I’ll sing along",
    "know that you are on my side",
    "You know everything around us is alive",
    "Let nature be your teacher",
    "There is no threat",
    "You are not alone in this world.",
    "Tomorrow never comes until it's too late",
    "Breathe in the healing love of the universe",
    "Let the changes in",
    "All I have to give you is a love that never dies",
    "I’d rather be slowly consumed by the earth",
    "You are your own gravitational field",
    "They don’t know I have 53 followers on my Are.na channel",
  ]

  const setCanvasSize = () => {
    canvas.width = container.clientWidth * ratio;
    canvas.height = container.clientHeight * ratio;
    canvas.style.width = `${container.clientWidth}px`;
    canvas.style.height = `${container.clientHeight}px`;
  }

  const handleResize = () => {
    setFontSize();
    setCanvasSize();
  }

  const setFontSize = () => {
    if (window.innerWidth < 768) {
      fontSize = 30 * ratio;
    } else if (window.innerWidth < 1200) {
      fontSize = 48 * ratio;
    } else {
      fontSize = 72 * ratio;
    }
  }

  const randomize = () => {
    const oldImgIndex = imgIndex;
    const oldPhraseIndex = phraseIndex;
    while (imgIndex === oldImgIndex) {
      imgIndex = Math.floor(Math.random() * images.length);
    }

    while (phraseIndex === oldPhraseIndex) {
      phraseIndex = Math.floor(Math.random() * phrases.length);
    }
  }

  const addEventListeners = () => {
    window.addEventListener('resize', handleResize);
    refresh.addEventListener('click', randomize);
    download.addEventListener('click', () => {
      console.log('downloading')
      download.href = canvas.toDataURL('image/png');
      download.download = 'dbc-meme.png';
    })
  }

  const drawLogo = () => {
    const width = window.innerWidth < 1200 ? (logo.width * 0.2) * ratio : logo.width * ratio * 0.34;
    const height = window.innerWidth < 1200 ? (logo.height * 0.2) * ratio : logo.height * ratio * 0.34;
    const offset = window.innerWidth < 1200 ? 0.86 : 0.875;
    drawImageProp(context, logo, canvas.width / 2 - width / 2, canvas.height * offset, width, height, 0.5, 0.5);
  }

  const draw = () => {
    img.src = images[imgIndex];
    img.onload = () => {
      drawImageProp(context, img, 0, 0, canvas.width, canvas.height, 0.5, 0.5)
      drawText();
      drawLogo();
    }

    window.requestAnimationFrame(draw)
  }

  const drawText = () => {
    context.font = `${fontSize}px Helvetica`;
    context.fillStyle = `rgba(255, 230, 0, 1)`;
    context.letterSpacing = "-0.02em";

    const offset = window.innerWidth < 1200 ? 0.8 : 0.84;

    const black = `rgba(0, 0, 0, 1)`

    const textWidth = context.measureText(phrases[phraseIndex]).width;
    const shadowXOffset = window.innerWidth < 768 ? 3 : 5.8;
    const shadowYOffset = window.innerWidth < 768 ? 2 : 3.9;
    const strokeWidth = window.innerWidth < 768 ? 1 : 2;

    if (textWidth > canvas.width * 0.75) {
      const text = phrases[phraseIndex].split(' ');
      const firstLine = text.slice(0, text.length / 2).join(' ');
      const secondLine = text.slice(text.length / 2, text.length).join(' ');
      const firstLineX = ((canvas.width / 2) - (context.measureText(firstLine).width / 2));
      const secondLineX = ((canvas.width / 2) - (context.measureText(secondLine).width / 2));


      const y = (canvas.height * offset);
      context.shadowColor = black;
      context.shadowBlur = 0;
      context.shadowOffsetX = shadowXOffset;
      context.shadowOffsetY = shadowYOffset;
      context.fillText(firstLine, firstLineX, y - (fontSize * 1.05));
      context.fillText(secondLine, secondLineX, y);
      context.shadowColor = black;
      context.shadowBlur = 0;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.fillStyle = black;
      context.lineWidth = strokeWidth;
      context.strokeStyle = black;
      context.strokeText(firstLine, firstLineX, y - (fontSize * 1.05));
      context.strokeText(secondLine, secondLineX, y);
    } else {
      const x = ((canvas.width / 2) - (textWidth / 2));
      const y = (canvas.height * offset);
      context.shadowColor = black;
      context.shadowBlur = 0;
      context.shadowOffsetX = shadowXOffset;
      context.shadowOffsetY = shadowYOffset;
      context.fillText(phrases[phraseIndex], x, y);
      context.shadowColor = black;
      context.shadowBlur = 0;
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.fillStyle = black;
      context.lineWidth = strokeWidth;
      context.strokeStyle = black;
      context.strokeText(phrases[phraseIndex], x, y);
    }

  }

  const drawImageProp = (ctx, img, x, y, w, h, offsetX, offsetY) => {
    if (arguments.length === 2) {
      x = y = 0;
      w = ctx.canvas.width;
      h = ctx.canvas.height;
    }

    // default offset is center
    offsetX = typeof offsetX === "number" ? offsetX : 0.5;
    offsetY = typeof offsetY === "number" ? offsetY : 0.5;

    // keep bounds [0.0, 1.0]
    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX > 1) offsetX = 1;
    if (offsetY > 1) offsetY = 1;

    var iw = img.width,
      ih = img.height,
      r = Math.min(w / iw, h / ih),
      nw = iw * r,   // new prop. width
      nh = ih * r,   // new prop. height
      cx, cy, cw, ch, ar = 1;

    // decide which gap to fill    
    if (nw < w) ar = w / nw;
    if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh;  // updated
    nw *= ar;
    nh *= ar;

    // calc source rectangle
    cw = iw / (nw / w);
    ch = ih / (nh / h);

    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;

    // make sure source rectangle is valid
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;

    // fill image in dest. rectangle
    ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
  }

  const initialize = () => {
    setFontSize();
    setCanvasSize();
    addEventListeners();
    window.requestAnimationFrame(draw)
  }

  initialize();

})()