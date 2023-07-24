function CheckName() {
  let nameStr = document.querySelector('.form_name').value;
  if (nameStr.match(/[^a-zA-Z\sа-яёА-ЯЁ]/)) {
    document.querySelector('.form_name').classList.add('form_wrong');
    return false;
  }
  document.querySelector('.form_name').classList.remove('form_wrong');
  return true;
}
function CheckTel() {
  let telStr = document.querySelector('.form_tel').value;
  if (telStr.match(/[^0-9+()\s-]/)) {
    document.querySelector('.form_tel').classList.add('form_wrong');
    return false;
  }
  document.querySelector('.form_tel').classList.remove('form_wrong');
  return true;
}

document.querySelector('.form_name').addEventListener('focus', function(e) {
  document.querySelector('.form_name').addEventListener('keyup', function (e){CheckName()})
})

document.querySelector('.form_tel').addEventListener('focus', function(e) {
  document.querySelector('.form_tel').addEventListener('keyup', function (e){CheckTel()})
})