// B
// $('.close-btn')[0].onclick = function () {
//   $('.close-btn').parents('#p-page0').css('transform', 'translateY(100%)')
// }
// E
var selectArr = $('.select')
var pageArr = $('.page')
var barArr = $('.main-bar-section')
var clickableSecArr = $('.p-section-clickable')
// console.log(clickableSecArr)

// B 可点击框拉取面板
// for (let i = 0; i < clickableSecArr.length; i++) {
//   clickableSecArr[i].onclick = function () {
//     render(i)
//     alert('1')
//     $('#p-page0').css('transform', 'translateY(0)')
//   }
// }
// E 可点击框拉取面板

// B tab栏点击切换

barArr[0].onclick = function () {
  switchScreen(0)
}

barArr[1].onclick = function () {
  switchScreen(1)
}

barArr[2].onclick = function () {
  switchScreen(2)
}

// E tab栏点击切换

function switchScreen (i) {
  $(pageArr[i]).addClass('top').siblings().removeClass('top')
  $(barArr[i]).addClass('active').siblings().removeClass('active')
}

function render (i) {
  $('p-page' + 'i').css('transform', 'translateX(0)')
}

// 测试
// var nameEl = clickableSecArr[0]
// var nameEl = document.getElementById('select')
// var nameEl = $('#select')[0]
var nameEl = selectArr.get(0)

var data1 = [
  {
    text: '1A',
    value: 1
  }, {
    text: '1B',
    value: 1
  }, {
    text: '2A',
    value: 1
  }, {
    text: '2B',
    value: 1
  },
  {
    text: '3A',
    value: 1
  },{
    text: '3B',
    value: 1
  },
  {
    text: '4A',
    value: 1
  },{
    text: '4B',
    value: 1
  },
  {
    text: '5A',
    value: 1
  },{
    text: '5B',
    value: 1
  },
  {
    text: '6A',
    value: 1
  },{
    text: '6B',
    value: 1
  },
  {
    text: '7A',
    value: 1
  },{
    text: '7B',
    value: 1
  },
  {
    text: '8A',
    value: 1
  },{
    text: '8B',
    value: 1
  },
  {
    text: '9A',
    value: 1
  },{
    text: '9B',
    value: 1
  },
  {
    text: '10A',
    value: 1
  },{
    text: '10B',
    value: 1
  },
  {
    text: '11A',
    value: 1
  },{
    text: '11B',
    value: 1
  },
  {
    text: '12A',
    value: 1
  },{
    text: '12B',
    value: 1
  },
  {
    text: '13A',
    value: 1
  },{
    text: '13B',
    value: 1
  },
  {
    text: '14A',
    value: 1
  },
  {
    text: '14B',
    value: 1
  }
];

var data2 = [
  {
    text: '1层',
    value: 1
  },
  {
    text: '2层',
    value: 2
  },
  {
    text: '3层',
    value: 3
  },
  {
    text: '4层',
    value: 4
  },
  {
    text: '5层',
    value: 5
  },
  {
    text: '6层',
    value: 6
  }
];

var data3 = [
  {
    text: '01寝',
    value: 1
  }, {
    text: '02寝',
    value: 2
  },
  {
    text: '03寝',
    value: 3
  }, {
    text: '04寝',
    value: 4
  },
  {
    text: '05寝',
    value: 4
  },
  {
    text: '06寝',
    value: 4
  },
  {
    text: '07寝',
    value: 4
  },
  {
    text: '08寝',
    value: 4
  },
  {
    text: '09寝',
    value: 4
  },
  {
    text: '10寝',
    value: 4
  },
  {
    text: '11寝',
    value: 4
  },
  {
    text: '12寝',
    value: 4
  },
  {
    text: '13寝',
    value: 4
  },
  {
    text: '14寝',
    value: 4
  },
  {
    text: '15寝',
    value: 4
  },
  {
    text: '16寝',
    value: 4
  }
];

var picker = new Picker({
  data: [data1, data2, data3],
  selectedIndex: [0, 1, 2],
  title: '选择寝室'
});

picker.on('picker.select', function (selectedVal, selectedIndex) {
  nameEl.innerText = data1[selectedIndex[0]].text + ' ' + data2[selectedIndex[1]].text + ' ' + data3[selectedIndex[2]].text;
})

picker.on('picker.change', function (index, selectedIndex) {
  console.log(index);
  console.log(selectedIndex);
});

picker.on('picker.valuechange', function (selectedVal, selectedIndex) {
  console.log(selectedVal);
  console.log(selectedIndex);
});

nameEl.addEventListener('click', function () {
  picker.show();
});