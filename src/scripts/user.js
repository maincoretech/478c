function initCards() {
  const userCards = 7;
  return userCards;
}

export function playRound(ACard, BCard) {
  if (ACard & BCard) {
    return -1;
  } else {
    switch (ACard ^ BCard) {
      case 5:
        return 1;
      case 6:
        return 4;
      case 3:
        return 2;
    }
  }
}
