!function () {
    var duration = 50
    $('.actions').on('click', 'button', function (e) {
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        console.log(speed)
        $button.addClass('active')
            .siblings('.active').removeClass('active')

        switch (speed) {
            case 'slow':
                duration = 90
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 0
                break
        }
    })
    function writeCode(prefix, code, fn) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id 
        id = setTimeout(function run() {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight;
            if (n < code.length) {
               id = setTimeout(run, duration)
            } else {
                fn && fn.call()
            }
          
        }, duration)
    }
    let code = `
    /*
    *首先，画皮卡丘的皮
    */
    .preview{
        height:100%;
        border:1px solid green;
        display:flex;
        justify-content:center;
        align-items:center;
        background:#FEE433;
      }
      
      .wrapper{
        width:100%;
        height:165px;
        position:relative;
      }
    /*
    *接着，画皮卡丘的鼻子
    */
      .nose{
        width:0px;
        height:0px;
        border-style:solid;
        border-width:12px;
        border-color:black transparent transparent transparent;
        position:absolute;
        left:50%;
        margin-left:-11px;
        top:28px; 
        border-radius:12px;
      }
      /*
    *然后，画皮卡丘的眼睛
    */
      .eye{
        width:49px;
        height:49px;
        background:#2e2e2e;
        position:absolute;
        border-radius:50%;
        border:2px solid black;
      }
      .eye::before{
        content:'';
        display:block;
        width:24px;
        height:24px;
        background:white;
        position:absolute;
        border-radius:50%;
        left:6px;
        top:-1px;
        border:2px solid #000;
        
      }
      /*
    *左眼在左边（废话）
    */
      .eye.left{
        right:50%;
        margin-right:90px;
      }
      /*
    *右眼在右边（废话）
    */
      .eye.right{
        left:50%;
        margin-left:90px;
      }
      /*
    *接下来，画皮卡丘的脸
    */
      .face{
        width:68px;
        height:68px;
        background:#EC0D1C;
        border:2px solid black;
        border-radius:50%;
        position:absolute;
        top:85px;
      }
      .face.left{
        right:50%;
        margin-right:106px;
      }
      .face.right{
        left:50%;
        margin-left:106px;
      }
      /*
    *接着，画皮卡丘的上嘴唇
    */
      .upperLip{
        height:25px;
        width:80px;
        border:3px solid black;
        position:absolute;
        top:47px;
        background: #fde348;
      }
      .upperLip.left{
        right:50%;
         border-bottom-left-radius:40px 25px;
        border-top:none;
        border-right:none;
        transform:rotate(-20deg);
      }
      .upperLip.right{
        left:50%;
        border-bottom-right-radius:40px 25px;
        border-top:none;
        border-left:none;
        transform:rotate(20deg);
      }
      /*
      *接着，画皮卡丘的下嘴唇
      */
      .lowerLip-wrapper{
         bottom:-30px;
         position:absolute;
         left:50%;
         margin-left:-150px;
         height:134px;
         width:300px;
         overflow:hidden;
      }
      .lowerLip{
        width:300px;
        height:3500px;
        background: #990513;
        border-radius:200px/2000px;
        border:2px solid black;
        position:absolute;
        bottom:0px;
        overflow:hidden;
      }
      /*
      *最后，画皮卡丘的舌头
      */
      .lowerLip::after{
        content:'';
        position:absolute;
        bottom:-27px;
        width:130px;
        height:130px;
        background: #fc4a62;
        left:50%;
        margin-left:-65px;
        border-radius:65px;
      }
      /*
      *好了，这只皮卡丘送给你
      */
    `
    writeCode('', code)



}.call()