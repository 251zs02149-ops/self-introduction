
// HTMLのheadingタグを取得
let heading = document.getElementById("heading");
let degree = 0; //フォント回転角度


function rotateHeading() {
  degree += 6;
  degree %= 360; // 0~359の角度を保存

  // 角度が90°を超えた時、class属性を"back"に切り替える
  if (degree === 90){
    heading.setAttribute("class", "back");
  }
  // 270°を超えた時、classを"face"に切り替える
  else if(degree === 270){
    heading.setAttribute("class", "face");
  }

  // headingタグをもつフォントを360回転し続ける
  heading.style.transform = 'rotateX(' + degree + 'deg)';
}
// 20ミリ秒(0.02)ごとに更新
setInterval(rotateHeading, 20);
