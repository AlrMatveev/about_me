import { Box } from "@mui/material";
import * as PIXI from "pixi.js";
import { SimpleLightmapFilter } from "pixi-filters";
import { useEffect } from "react";

function Avatar() {
  const app = new PIXI.Application({
    transparent: true,
    antialias: true,
    width: 250,
    height: 250,
  });
  useEffect(() => {
    setTimeout(() => {
      document.getElementById("pixi").appendChild(app.view);

      app.ticker.add(animMask);
      // app.ticker.add(photoFilter);
    }, 1000);
  }, []);

  let s = 0;
  let ss = 5;
  let sss = 0;
  let r = 60;
  const animMask = (delta) => {
    s = s + ss;
    if (sss < 125) {
      sss = sss + ss + 1;
    } else {
      sss = 125;
    }
    r = r - 2;
    circle.clear();
    arc2.clear();
    circle.beginFill(0xffffff).drawCircle(125, 125, sss).endFill();
    arc2.lineStyle(r, 0x1976d2, 1).arc(125, 125, s, 0, 2 * Math.PI);
    if (s >= 125) ss = -0.5;
    if (ss === -0.5 && s === 125) {
      app.ticker.remove(animMask);
      container.addChild(arc);
      app.ticker.add(animShodow);
    }
  };

  let b = 20;
  const photoFilter = (delta) => {
    b -= 0.5;
    photo.filters = [new PIXI.filters.BlurFilter(b)];
    if (b <= 0) {
      photo.filters = [];
      app.ticker.remove(photoFilter);
    }
  };

  let shadow = 0;
  const animShodow = (delta) => {
    shadow++;
    arc.clear();
    arc.lineStyle(shadow, 0x000000, 1).arc(125, 125, 118, 0, 2 * Math.PI);
    arc.filters = [new PIXI.filters.BlurFilter(10)];
    if (shadow === 10) app.ticker.remove(animShodow);
  };

  const photo = PIXI.Sprite.from("avatar.jpg");
  photo.width = 350;
  photo.height = 250;
  photo.x = -20;

  const container = new PIXI.Container();

  // photo.filters = [new SimpleLightmapFilter(photo)];

  const arc2 = new PIXI.Graphics();
  arc2.lineStyle(10, 0x555555, 1);
  arc2.arc(125, 125, 125, 0, 2 * Math.PI);

  const circle = new PIXI.Graphics()
    .beginFill(0xffffff)
    .drawCircle(125, 125, 125)
    .endFill();

  const arc = new PIXI.Graphics();
  // arc.lineStyle(0, 0x000000, 1);
  // arc.arc(125, 125, 125, 0, 2 * Math.PI);
  // arc.filters = [new PIXI.filters.BlurFilter(10)];

  container.addChild(photo, arc2);
  container.mask = circle;

  app.stage.addChild(container);

  return <Box id="pixi"></Box>;
}

export default Avatar;
