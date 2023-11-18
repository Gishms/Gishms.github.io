let studydata = [
  {
    href: "https://www.w3school.com.cn/",
    src: "https://img.mp.itc.cn/upload/20170727/1ae4526c82a4460583332b6c71d3452e_th.jpg",
    name: "w3school"
  },
  {
    href: "http://cas-yangtzeu-edu-cn.atrust.yangtzeu.edu.cn:8080/authserver/login?service=https%3A%2F%2Fatrust.yangtzeu.edu.cn%3A4443%2Fpassport%2Fv1%2Fauth%2Fcas",
    src: "https://pic.rmb.bdstatic.com/bjh/down/4301b609892b2f8cf40cc70f4a88f717.jpeg",
    name: "长江大学校外访问"
  },
  {
    href: "https://developer.mozilla.org/zh-CN/",
    src: "https://inews.gtimg.com/newsapp_bt/0/14676438410/1000",
    name: "MDN"
  },
  {
    href: "https://cesium.com/",
    src: "https://img2.baidu.com/it/u=3462881570,2825560939&fm=253&fmt=auto&app=138&f=JPEG?w=240&h=150",
    name: "Cesium"
  },
  {
    href: "https://getbootstrap.com/",
    src: "https://img0.baidu.com/it/u=2060768196,3512544696&fm=253&fmt=auto&app=138&f=PNG?w=751&h=500",
    name: "Bootstrap"
  },
  {
    href: "https://hunan.tianditu.gov.cn/TDTHN/tjxz/hunanshixian.html",
    src: "https://img0.baidu.com/it/u=2494641762,326784956&fm=253&fmt=auto&app=138&f=PNG?w=360&h=260",
    name: "天地图湖南"
  },
  {
    href: "http://lbs.tianditu.gov.cn/server/MapService.html",
    src: "https://p6.itc.cn/q_70/images03/20220222/c2d2a1750a1c457ebc2deab1e2313bef.jpeg",
    name: "天地图API"
  },

  {
    href: "https://www.img.net/",
    src: "https://www.img.net/static/img/logo.15efa69.gif",
    name: "卫星云遥"
  },
  {
    href: "https://www.iconfont.cn/",
    src: "https://img.alicdn.com/imgextra/i2/O1CN01FF1t1g1Q3PDWpSm4b_!!6000000001920-55-tps-508-135.svg",
    name: "Iconfont"
  },
  {
    href: "https://www.bilibili.com/",
    src: "https://i0.hdslb.com/bfs/archive/c8fd97a40bf79f03e7b76cbc87236f612caef7b2.png",
    name: "BiliBli"
  },
  {
    href: "https://lbsyun.baidu.com/",
    src: "https://mapopen-website-wiki.cdn.bcebos.com/banner/highaccbdloc.png",
    name: "百度地图开发者平台"
  },
  {
    href: "https://www.smartedu.cn/",
    src: "https://www.smartedu.cn/img/home-logo-big.b8550044.png?x-bce-process=image/format,f_auto",
    name: "国家智慧教育服务平台"
  },
  {
    href: "https://www.gscloud.cn/home",
    src: "https://www.gscloud.cn/static/icons/home/logo.png",
    name: "地理数据云"
  },
  {
    href: "https://lbsyun.baidu.com/",
    src: "https://mapopen-website-wiki.cdn.bcebos.com/banner/highaccbdloc.png",
    name: "百度地图开发者平台"
  },
  {
    href: "https://zgs.chsi.com.cn/home",
    src: "https://chsi-zyghds.oss-cn-beijing.aliyuncs.com/sycg/other/20230919/650972cc21c12.png",
    name: "大学生职业规划比赛"
  }

]

document.write(`
<div class="bd">
<ul>
`)

for (let i = 0; i < studydata.length; i++) {
  document.write(`
  <li>
      <a href=${studydata[i].href} target="_blank">
        <div class="pic">
          <img src=${studydata[i].src} alt="">
        </div>
        <div class="text">
          <h4>${studydata[i].name}</h4>
          <p><span></span> <i></i></p>
        </div>
      </a>
    </li>
  `)
}

document.write(`
</ul>
</div>
`)