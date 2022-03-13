'use strict';
{
  const open = document.querySelector('#open');
  const mask = document.querySelector('#mask');
  const modal = document.querySelector('#modal');
  const close = document.querySelector('#close');
  //
  // clickイベントの設定
  open.addEventListener('click', () => {
    // console.log('open clicked');
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
  close.addEventListener('click', () => {
    // console.log('close clicked');
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });
  mask.addEventListener('click', () => {
    // console.log('mask clicked');
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    // ↓　2度書きを避けるため、close要素のclickメソッドを読み出す
    close.click();
  });
  // 
}
// show modal window and replace text
async function click_prefectures(data) {
  console.log('show info. of ', data);
  const modal_text = document.querySelector('#modal > p');
  modal_text.textContent = '市区町村 of ' + data.name + '：';
  console.log('to ', modal_text.textContent);
  async function append_modal_text(data) {
    let append_text = "";
    await data.result.forEach(item => {
      append_text += item.cityName + '、';
    });
    modal_text.textContent += append_text;
  }

  let json_file;
  switch(data.code) {
    case   1:  json_file = '01_HOKKAIDO.json'; break;
    case 2: json_file = '02_AOMORI.json'; break;
    case   3: json_file = '03_IWATE.json'; break;
    case   4: json_file = '04_MIYAGI.json'; break;
    case   5: json_file = '05_AKITA.json'; break;
    case   6: json_file = '06_YAMAGATA.json'; break;
    case   7: json_file = '07_FUKUSHIMA.json'; break;
    case   8: json_file = '08_IBARAKI.json'; break;
    case   9: json_file = '09_TOCHIGI.json'; break;
    case  10: json_file = '10_GUNMA.json'; break;
    case  11: json_file = '11_SAITAMA.json'; break;
    case  12: json_file = '12_CHIBA.json'; break;
    case  13: json_file = '13_TOKYO.json'; break;
    case  14: json_file = '14_KANAGAWA.json'; break;
    case  15: json_file = '15_NIIGATA.json'; break;
    case  16: json_file = '16_TOYAMA.json'; break;
    case  17: json_file = '17_ISHIKAWA.json'; break;
    case  18: json_file = '18_FUKUI.json'; break;
    case  19: json_file = '19_YAMANASHI.json'; break;
    case  20: json_file = '20_NAGANO.json'; break;
    case  21: json_file = '21_GIFU.json'; break;
    case  22: json_file = '22_SHIZUOKA.json'; break;
    case  23: json_file = '23_AICHI.json'; break;
    case  24: json_file = '24_MIE.json'; break;
    case  25: json_file = '25_SHIGA.json'; break;
    case  26: json_file = '26_KYOTO.json'; break;
    case  27: json_file = '27_OSAKA.json'; break;
    case  28: json_file = '28_HYOGO.json'; break;
    case  29: json_file = '29_NARA.json'; break;
    case  30: json_file = '30_WAKAYAMA.json'; break;
    case  31: json_file = '31_TOTTORI.json'; break;
    case  32: json_file = '32_SHIMANE.json'; break;
    case  33: json_file = '33_OKAYAMA.json'; break;
    case  34: json_file = '34_HIROSHIMA.json'; break;
    case  35: json_file = '35_YAMAGUCHI.json'; break;
    case  36: json_file = '36_TOKUSHIMA.json'; break;
    case  37: json_file = '37_KAGAWA.json'; break;
    case  38: json_file = '38_EHIME.json'; break;
    case  39: json_file = '39_KOCHI.json'; break;
    case  40: json_file = '40_FUKUOKA.json'; break;
    case  41: json_file = '41_SAGA.json'; break;
    case  42: json_file = '42_NAGASAKI.json'; break;
    case  43: json_file = '43_KUMAMOTO.json'; break;
    case  44: json_file = '44_OITA.json'; break;
    case  45: json_file = '45_MIYAZAKI.json'; break;
    case  46: json_file = '46_KAGOSHIMA.json'; break;
    case  47: json_file = '47_OKINAWA.json'; break;
    default: fetch_path = '01_HOKKAIDO.json';
  }
  const res = await fetch('assets/' + json_file);
  const json = await res.json();
  console.log(json);
  append_modal_text(json);


  // modal-openを実行する
  modal.classList.remove('hidden');
  mask.classList.remove('hidden');


}
// EOF