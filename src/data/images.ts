function unsplash(id: string, w = 1400) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const productImages = {
  satinShirtFront: unsplash("1604176354204-9268737828e4"),
  satinShirtBack: unsplash("1469334031218-e382a71b716b"),
  halterTopFront: unsplash("1583744946564-b52ac1c389c8"),
  halterTopBack: unsplash("1521572163474-6864f9cf17ab"),
  vneckTeeFront: unsplash("1521572163474-6864f9cf17ab"),
  vneckTeeBack: unsplash("1622445275576-721325763afe"),
  halfZipSweaterFront: unsplash("1620799140408-edc6dcb6d633"),
  halfZipSweaterBack: unsplash("1614786269829-d24616faf56d"),
  pleatedShortsBrown: unsplash("1591195853828-11db59a44f6b"),
  pleatedShortsBlack: unsplash("1602810318383-e386cc2a3ccf"),
  straightJeansOffWhite: unsplash("1542272604-787c3835535d"),
  straightJeansBrown: unsplash("1604176354204-9268737828e4"),
} as const;

export const campaignImages = {
  summer26Hero: unsplash("1485518882345-15568b007407", 2000),
  summer26Secondary: unsplash("1539109136881-3be0616acf4b", 1600),
  spring26Intermission: unsplash("1490481651871-ab68de25d43d", 2000),
  campaignDuo: unsplash("1483985988355-763728e1935b", 1600),
} as const;
