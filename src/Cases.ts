export const convertTensToTensFirstPosition: (num: number, subPosition: string) => string = (
  num,
  subPosition
) => {
  switch (num) {
      case 20:
          subPosition = "twenty";
          break;
      case 30:
          subPosition = "thirty";
          break;
      case 40:
          subPosition = "forty";
          break;
      case 50:
          subPosition = "fifty";
          break;
      case 60:
          subPosition = "sixty";
          break;
      case 70:
          subPosition = "seventy";
          break;
      case 80:
          subPosition = "eighty";
          break;
      case 90:
          subPosition = "ninety";
          break;
      default:
          subPosition = "";
          break;
  }
  return subPosition;
};

export const convertNumbersToWords: (num: number, position: string) => string = (
  num,
  position
) => {
  switch (num) {
      case 1:
          position = "first";
          break;
      case 2:
          position = "second";
          break;
      case 3:
          position = "third";
          break;
      case 4:
          position = "fourth";
          break;
      case 5:
          position = "fifth";
          break;
      case 6:
          position = "sixth";
          break;
      case 7:
          position = "seventh";
          break;
      case 8:
          position = "eighth";
          break;
      case 9:
          position = "ninth";
          break;
      case 10:
          position = "tenth";
          break;
      case 11:
          position = "eleventh";
          break;
      case 12:
          position = "twelfth";
          break;
      case 13:
          position = "thirteenth";
          break;
      case 14:
          position = "fourteenth";
          break;
      case 15:
          position = "fifteenth";
          break;
      case 16:
          position = "sixteenth";
          break;
      case 17:
          position = "seventeenth";
          break;
      case 18:
          position = "eighteenth";
          break;
      case 19:
          position = "nineteenth";
          break;
      case 20:
          position = "twentieth";
          break;
      case 30:
          position = "thirtieth";
          break;
      case 40:
          position = "fortieth";
          break;
      case 50:
          position = "fiftieth";
          break;
      case 60:
          position = "sixtieth";
          break;
      case 70:
          position = "seventieth";
          break;
      case 80:
          position = "eightieth";
          break;
      case 90:
          position = "ninetieth";
          break;
      case 100:
          position = "hundredth";
          break;
      default:
          position = "invalid";
  }
  return position;
};
