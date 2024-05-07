document.addEventListener('DOMContentLoaded',(event)=> {
    const Me = document.getElementById('me');
    Me.addEventListener('click',function() {
    alert("不要乱点我呀！ 哼~")
    })
    const photo = document.getElementById('photo');
    photo.addEventListener('click',function() {
        alert("我不是小姐姐，不要点啦！")
    })

    const github = document.getElementsByClassName('github');
    const csdn = document.getElementsByClassName('csdn');
    const gitee = document.getElementsByClassName('gitee');
    github[0].addEventListener('click',function() {
        window.open("https://github.com/Star5016")
    })
    csdn[0].addEventListener('click',function() {
        window.open("https://blog.csdn.net/weixin_46279756?type=blog")
    })
    gitee[0].addEventListener('click',function() {
        window.open("https://gitee.com/star5016")
    })

})
