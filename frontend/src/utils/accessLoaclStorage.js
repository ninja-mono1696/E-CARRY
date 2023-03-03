import { omitThemingProps } from "@chakra-ui/react";

function LoadData(key) {
  try {
    let temp = localStorage.getItem(key);
    temp = JSON.parse(temp);
    return temp;
  } catch (e) {
    return undefined;
  }
}

function savData(key, Data) {
  localStorage.setItem(key, JSON.stringify(Data));
}

export { LoadData, savData };
