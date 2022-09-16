import { Box } from "@mui/material";
import * as PIXI from "pixi.js";
import {
  RGBSplitFilter,
  GlitchFilter,
  SimpleLightmapFilter,
  PixelateFilter,
} from "pixi-filters";
import { useEffect } from "react";

function Avatar() {
  const app = new PIXI.Application({
    backgroundAlpha: 0,
    antialias: true,
    width: 250,
    height: 250,
  });
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("pixi").appendChild(app.view);

      app.ticker.add(animMask);
      app.ticker.add(photoFilter);
    }, 1000);
  }, []);

  let s = 0;
  let ss = 5;
  let sss = 0;
  let r = 260;
  const animMask = (delta) => {
    s = s + ss;
    if (sss < 125) {
      sss = sss + ss;
    } else {
      sss = 125;
    }
    if (sss > 25) r = r - 15;
    circle.clear();
    arc2.clear();
    circle.beginFill(0xffffff).drawCircle(125, 125, sss).endFill();
    arc2.lineStyle(r, 0x000000, 0.7).arc(125, 125, 130, 0, 2 * Math.PI);
    arc2.filters = [new PIXI.filters.BlurFilter(10)];
    if (r === 0 && sss === 125) {
      app.ticker.remove(animMask);
      container.addChild(arc);
      // app.ticker.add(animShodow);
    }
  };

  let min = -5;
  let max = 5;
  const photoFilter = (delta) => {
    photo.filters = [
      new RGBSplitFilter([0, min], [0, 0], [0, max]),
      new PixelateFilter(max),
      new SimpleLightmapFilter(photo, 0x222222),
    ];
    min += 0.1;
    max -= 0.1;

    if (min > 0) {
      photo.filters = [new SimpleLightmapFilter(photo, 0x222222)];
      app.ticker.remove(photoFilter);
    }
  };

  // let shadow = 0;
  // const animShodow = (delta) => {
  //   shadow++;
  //   arc.clear();
  //   arc.lineStyle(10, 0x000000, 1).arc(125, 125, 125, 0, 2 * Math.PI);
  //   arc.filters = [new PIXI.filters.BlurFilter(shadow)];
  //   if (shadow === 10) app.ticker.remove(animShodow);
  // };

  const photo = PIXI.Sprite.from("avatar.jpg");
  photo.width = 350;
  photo.height = 250;
  photo.x = -20;

  const container = new PIXI.Container();

  const arc2 = new PIXI.Graphics();
  arc2.lineStyle(10, 0x555555, 1);
  arc2.arc(125, 125, 125, 0, 2 * Math.PI);

  const circle = new PIXI.Graphics()
    .beginFill(0xffffff)
    .drawCircle(125, 125, 125)
    .endFill();

  const arc = new PIXI.Graphics();
  arc.lineStyle(10, 0x000000, 1);
  arc.arc(125, 125, 125, 0, 2 * Math.PI);
  arc.filters = [new PIXI.filters.BlurFilter(10)];

  container.addChild(photo, arc, arc2);
  container.mask = circle;

  app.stage.addChild(container);

  return <Box id="pixi"></Box>;
}

export default Avatar;
