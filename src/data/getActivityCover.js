import * as IMAGE from "../assets/covers";

export const IMAGE_FOR_TAG = {
  음악: IMAGE.music,
  도전하기: IMAGE.dojeon,
  말해보기: IMAGE.speak,
  식사: IMAGE.meal,
  쇼핑하기: IMAGE.shop,
  씻기: IMAGE.shower,
  방문하기: IMAGE.visit,
  여행: IMAGE.journey,
  산책: IMAGE.takeawalk,
  "진정하기-실내": IMAGE.relaxIndoor,
  "진정하기-야외": IMAGE.relaxOutdoor,
  독서: IMAGE.book,
  적어보기: IMAGE.write,
  운동: IMAGE.excercise,
  그려보기: IMAGE.paint,
  영화: IMAGE.movie,
  사진: IMAGE.picture,
  청소: IMAGE.clean,
  요리: IMAGE.cook,
  친구: IMAGE.friend,
};

export default function getActivityCover(tags) {
  return IMAGE_FOR_TAG[tags[0]];
}
