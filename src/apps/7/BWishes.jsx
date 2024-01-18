import "./styles.css";
import bg from "./bg.jpg";
import { useState } from "react";
function generateBirthdayWishes(name) {
  return [
    `Happy Birthday, ${name}! May your day be filled with joy and laughter.`,
    `Wishing you a fantastic birthday, ${name}! May all your dreams come true.`,
    `Happy Birthday, ${name}! May this year bring you success and happiness.`,
    `Warmest wishes on your birthday, ${name}! Enjoy every moment.`,
    `May your special day be filled with love and surprises, ${name}! Happy Birthday!`,
    `Wishing you health, wealth, and happiness, ${name}! Happy Birthday!`,
    `Happy Birthday, ${name}! May your day be as bright as your smile.`,
    `Cheers to another year of life's adventures, ${name}! Happy Birthday!`,
    `On your birthday, ${name}, I wish you all the joy and fulfillment in the world.`,
    `May your birthday be the start of a year filled with new accomplishments, ${name}!`,
    `Sending you lots of love and good vibes on your birthday, ${name}!`,
    `Happy Birthday, ${name}! May you be surrounded by friends, family, and joy.`,
    `Wishing you a day that's as sweet and special as you are, ${name}!`,
    `May the coming year bring you even more reasons to smile, ${name}!`,
    `Happy Birthday, ${name}! Celebrate the amazing person you are.`,
    `Sending you warm wishes on your birthday, ${name}! Enjoy every moment of your day.`,
    `May your birthday be filled with love, laughter, and unforgettable moments, ${name}!`,
    `Happy Birthday, ${name}! May this year be your best one yet.`,
    `Wishing you a year ahead filled with exciting opportunities and achievements, ${name}!`,
    `Happy Birthday, ${name}! May your day be as special as you are to everyone around you.`,
  ];
}

export default function BWishes() {
  useState(() => {
    const bodyStyle = document.body.style;
    bodyStyle.backgroundImage =
      "url(https://static.vecteezy.com/system/resources/previews/022/141/493/non_2x/hello-summer-background-summer-beach-palm-tree-silhouette-vector.jpg)";
    bodyStyle.backgroundSize = "cover";
  }, []);
  return <div id="b-wishes"></div>;
}
